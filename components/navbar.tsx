"use client";

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
    const router = usePathname();

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-5">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-lg bg-white/20 backdrop-blur-md">
                    {itemsNavbar.map((item) => (
                        <motion.div
                            key={item.id}
                            className={`px-6 py-2 transition duration-150 rounded-lg cursor-pointer ${router === item.link && 'bg-indigo-900/50'}`}
                            data-tooltip-target="tooltip-default"
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <Link href={item.link}>{item.icon}</Link>
                        </motion.div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
};

export default Navbar;
