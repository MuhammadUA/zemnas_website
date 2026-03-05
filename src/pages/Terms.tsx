import { motion } from "framer-motion";

export default function Terms() {
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
            Terms & <br /> <span className="text-blue-600">Conditions</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 prose prose-xl prose-black max-w-none prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-p:text-black/70">
            <p className="text-2xl font-medium leading-relaxed mb-12">
              By using our website and services, you agree to these Terms and Conditions. Please read them carefully.
            </p>

            <h2>1. Use of Our Services</h2>
            <p>
              You may use our services only for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our services in any way that violates any applicable federal, state, local, or international law or regulation.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              The content on our website, including text, graphics, logos, and images, is the property of Zemnas and is protected by intellectual property laws. You may not use, reproduce, or distribute any of our content without our prior written consent.
            </p>

            <h2>3. Limitation of Liability</h2>
            <p>
              In no event will Zemnas be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
            </p>

            <h2>4. Indemnification</h2>
            <p>
              You agree to indemnify and hold Zemnas harmless from any claims, losses, liabilities, damages, and expenses, including attorney's fees, arising out of or in connection with your use of our services or your violation of these Terms and Conditions.
            </p>

            <h2>5. Governing Law</h2>
            <p>
              These Terms and Conditions will be governed by and construed in accordance with the laws of the jurisdiction in which Zemnas is located, without regard to its conflict of law principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
