import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Activity } from "lucide-react";

// ─── DATA DUMMY ────────────────────────────────────────────────────────────────
const auditLogs = [
    {
        id: 1,
        type: "success",
        title: "AKSES DIBERIKAN",
        desc: "Node #4211 diberikan izin akses API tingkat lanjut.",
        time: "HARI INI, 10:24 AM",
        detail: "Dilakukan oleh Super Admin. Node diverifikasi melalui protokol OAuth2. ID Sesi: SES-9921-X.",
    },
    {
        id: 2,
        type: "success",
        title: "PEMBERITAHUAN SISTEM",
        desc: "Pembaruan modul keamanan kernel berhasil diterapkan ke cluster utama.",
        time: "KEMARIN, 03:15 PM",
        detail: "Versi modul: v4.2.1. Cluster: MAIN-AP3. Durasi deployment: 4 menit 22 detik.",
    },
    {
        id: 3,
        type: "warning",
        title: "PERINGATAN LOGIN",
        desc: "Upaya login tidak dikenal terdeteksi dari lokasi IP di Frankfurt (VPC-7).",
        time: "KEMARIN, 14:30 PM",
        detail: "IP Address: 185.220.101.47. 3x percobaan gagal. Akun diblokir sementara selama 30 menit.",
    },
    {
        id: 4,
        type: "success",
        title: "AUDIT CATATAN",
        desc: "Dr. Alistair Vance mengekspor laporan kepatuhan HIPAA kuartal-3.",
        time: "2 HARI LALU, 09:00 AM",
        detail: "Format: PDF. Ukuran file: 2.4MB. Dikirim ke email: compliance@etherealhealth.sys.",
    },
];

// ─── AUDIT LOG CARD ────────────────────────────────────────────────────────────
export function AuditLogCard() {
    const [expandedLogId, setExpandedLogId] = useState(null);

    const toggleAuditLog = (id) => {
        setExpandedLogId(expandedLogId === id ? null : id);
    };

    return (
        <Card className="border-0 shadow-lg shadow-slate-200/50 rounded-3xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 bg-white">
            <CardHeader className="pb-4 pt-6 px-8 border-b border-slate-50 flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-[#0b3b60]" />
                    <CardTitle className="text-lg font-bold text-slate-800">
                        Log Audit Global
                    </CardTitle>
                </div>

                {/* Tombol Lihat Semua → buka Dialog */}
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="text-xs font-bold text-[#0b3b60] hover:underline">
                            Lihat Semua
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl rounded-3xl p-8">
                        <DialogHeader>
                            <DialogTitle className="text-xl font-bold text-slate-800">
                                Semua Log Audit Global
                            </DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="h-[450px] w-full pr-4 mt-4">
                            <div className="relative pl-3 space-y-8">
                                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100" />
                                {auditLogs.map((log) => (
                                    <div key={log.id} className="relative pl-6">
                                        <div
                                            className={`absolute left-[-5px] top-1 h-3 w-3 rounded-full border-2 border-white shadow-sm ${
                                                log.type === "success"
                                                    ? "bg-emerald-500"
                                                    : "bg-amber-500"
                                            }`}
                                        />
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                            {log.title}
                                        </p>
                                        <p className="text-sm font-semibold text-slate-800 mt-1">
                                            {log.desc}
                                        </p>
                                        <p className="text-[10px] text-slate-500 mt-1">
                                            {log.time}
                                        </p>
                                        <div className="mt-3 p-4 bg-slate-50 rounded-xl text-sm text-slate-600 border border-slate-100 leading-relaxed">
                                            {log.detail}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            </CardHeader>

            <CardContent className="px-8 py-6">
                <div className="relative pl-3 space-y-6">
                    <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-100" />

                    {/* Tampilkan 3 log, bisa di-expand */}
                    {auditLogs.slice(0, 3).map((log) => (
                        <div
                            key={log.id}
                            className="relative pl-6 cursor-pointer group"
                            onClick={() => toggleAuditLog(log.id)}
                        >
                            <div
                                className={`absolute left-[-5px] top-1 h-3 w-3 rounded-full border-2 border-white shadow-sm transition-transform group-hover:scale-125 ${
                                    log.type === "success"
                                        ? "bg-emerald-500"
                                        : "bg-amber-500"
                                }`}
                            />
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                {log.title}
                            </p>
                            <p className="text-sm font-semibold text-slate-700 mt-1 group-hover:text-[#0b3b60] transition-colors">
                                {log.desc}
                            </p>
                            <p className="text-[10px] text-slate-400 mt-1">
                                {log.time}
                            </p>

                            {/* Expand detail */}
                            <AnimatePresence>
                                {expandedLogId === log.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-3 p-3 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-100">
                                            {log.detail}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
