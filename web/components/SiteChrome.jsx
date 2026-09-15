"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function SiteChrome({ children }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            exit={{ y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
