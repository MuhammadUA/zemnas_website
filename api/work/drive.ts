import type { VercelRequest, VercelResponse } from "@vercel/node";
import { google } from "googleapis";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: "GOOGLE_DRIVE_API_KEY is not configured" });
        }

        const drive = google.drive({ version: "v3", auth: apiKey });
        const rootFolderId = "1Qgrh9bFRSWSXo2Nan-BgPU3dVaSxqkwK";

        // 1. Fetch subfolders (categories)
        const foldersResponse = await drive.files.list({
            q: `'${rootFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
            fields: "files(id, name)",
        });

        const folders = foldersResponse.data.files || [];

        // 2. Fetch videos for all folders in parallel
        const workData = await Promise.all(folders.map(async (folder) => {
            const filesResponse = await drive.files.list({
                q: `'${folder.id}' in parents and mimeType contains 'video/' and trashed = false`,
                fields: "files(id, name, mimeType, thumbnailLink, webContentLink)",
            });

            const videos = (filesResponse.data.files || []).map(file => ({
                id: file.id,
                name: file.name,
                mimeType: file.mimeType,
                thumbnail: file.thumbnailLink,
                videoUrl: `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${apiKey}`,
                previewUrl: `https://drive.google.com/file/d/${file.id}/preview`
            }));

            return videos.length > 0 ? {
                category: folder.name,
                videos: videos
            } : null;
        }));

        // Filter out nulls and return
        res.json(workData.filter(item => item !== null));
    } catch (error: any) {
        console.error("Error fetching Google Drive data:", error.message);
        res.status(500).json({ error: "Failed to fetch work data" });
    }
}
