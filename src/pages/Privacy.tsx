import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="pt-40 pb-24 px-6 md:px-12 bg-[#fdfdfd]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-600 mb-8 block">Legal</span>
          <h1 className="text-[12vw] md:text-[10vw] leading-[0.8] font-black tracking-tighter uppercase mb-16">
            Privacy <br /> <span className="text-blue-600">Policy</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-xl prose-black max-w-none prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-p:text-black/70">
            <p className="text-2xl font-medium leading-relaxed mb-12">
              Your privacy is important to us. This Privacy Policy explains how Zemnas collects, uses, and protects your personal information when you use our website and services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a contact form, book a strategy call, or subscribe to our newsletter. This may include your name, email address, phone number, and company information.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. We may also use your information to send you marketing communications that we believe may be of interest to you.
            </p>

            <h2>3. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2>4. Your Choices</h2>
            <p>
              You may opt out of receiving marketing communications from us at any time by following the instructions in those communications or by contacting us directly.
            </p>

            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, providing you with additional notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
