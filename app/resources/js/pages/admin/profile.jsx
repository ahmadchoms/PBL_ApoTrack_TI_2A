import React from "react";
import { motion } from "framer-motion";
import { DashboardAdminLayout } from "@/layouts/admin-layout";
import { ProfileCard } from "@/features/admin/components/profile-card";
import { SecurityCard } from "@/features/admin/components/security-card";
import { AuditLogCard } from "@/features/admin/components/audit-log-card";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export default function AdminProfilePage() {
    return (
        <DashboardAdminLayout activeMenu="Profil Pengguna">
            <div className="max-w-[1400px] mx-auto">
                {/* ── Header ── */}
                <div className="mb-8">
                    <p className="text-2xl font-extrabold text-slate-800">
                        Profil Administrator Sistem
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                        Kelola identitas, keamanan, dan riwayat aktivitas akun Anda.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {/* Kolom Kiri */}
                    <motion.div variants={itemVariants}>
                        <ProfileCard />
                    </motion.div>

                    {/* Kolom Tengah */}
                    <motion.div variants={itemVariants}>
                        <SecurityCard />
                    </motion.div>

                    {/* Kolom Kanan */}
                    <motion.div variants={itemVariants}>
                        <AuditLogCard />
                    </motion.div>
                </motion.div>
            </div>
        </DashboardAdminLayout>
    );
}
