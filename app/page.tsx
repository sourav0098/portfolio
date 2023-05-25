"use client";

import LeftSide from "./components/LeftSide";
import Middle from "./components/Middle";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="hidden xl:inline-flex w-24 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </motion.div>
        <div className="h-[88vh] w-full mx-auto p-4">
          <Middle />
        </div>
      </div>
    </main>
  );
}
