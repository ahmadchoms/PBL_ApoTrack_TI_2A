import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Phone,
    Mail,
    Edit2,
    Check,
    ShieldCheck,
    CheckCircle2,
    User,
} from "lucide-react";

export function ProfileCard({
    admin = {
        name: "Dr. Alistair Vance",
        role: "Chief Security Information Officer",
        badge: "SUPER ADMIN",
        phone: "+1 (555) 892-0431",
        email: "a.vance@etherealhealth.sys",
        avatar: "AV",
        adminId: "SUPER_ADMIN_ID_882",
    },
}) {
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    const [profileData, setProfileData] = useState({
        name: admin.name,
        phone: admin.phone,
        email: admin.email,
    });

    const [tempProfileData, setTempProfileData] = useState({ ...profileData });

    const handleSaveProfile = () => {
        setProfileData({ ...tempProfileData });
        setIsEditProfileOpen(false);
        // Tunggu sebentar lalu buka dialog sukses
        setTimeout(() => setIsSuccessOpen(true), 150);
    };

    return (
        <>
            <Card className="border-0 shadow-lg shadow-slate-200/50 rounded-3xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 bg-white">
                <CardContent className="p-8 flex flex-col items-center relative">
                    {/* ── Tombol Edit ── */}
                    <Dialog
                        open={isEditProfileOpen}
                        onOpenChange={(open) => {
                            setIsEditProfileOpen(open);
                            if (open) setTempProfileData({ ...profileData });
                        }}
                    >
                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-4 right-4 text-slate-400 hover:text-[#0b3b60] hover:bg-slate-50 rounded-full"
                            >
                                <Edit2 className="h-4 w-4" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md rounded-3xl p-8">
                            <DialogHeader>
                                <p className="text-[10px] font-bold text-[#0b3b60] uppercase tracking-widest mb-1">
                                    Pembaruan Data
                                </p>
                                <DialogTitle className="text-2xl font-extrabold text-slate-800">
                                    Edit Profil
                                </DialogTitle>
                                <p className="text-sm text-slate-400 mt-1">
                                    Perbarui informasi identitas Anda untuk
                                    sistem administrasi klinik.
                                </p>
                            </DialogHeader>

                            <div className="space-y-5 py-4">
                                {/* Nama Lengkap — bisa diedit */}
                                <div className="space-y-2">
                                    <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Nama Lengkap
                                    </Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                        <Input
                                            value={tempProfileData.name}
                                            onChange={(e) =>
                                                setTempProfileData({
                                                    ...tempProfileData,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="pl-10 h-11 bg-slate-50 border-slate-200 rounded-xl focus-visible:ring-[#0b3b60]"
                                        />
                                    </div>
                                </div>

                                {/* Alamat Email */}
                                <div className="space-y-2">
                                    <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Alamat Email
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                        <Input
                                            type="email"
                                            value={tempProfileData.email}
                                            onChange={(e) =>
                                                setTempProfileData({
                                                    ...tempProfileData,
                                                    email: e.target.value,
                                                })
                                            }
                                            className="pl-10 h-11 bg-slate-50 border-slate-200 rounded-xl focus-visible:ring-[#0b3b60]"
                                        />
                                    </div>
                                </div>

                                {/* Nomor Telepon */}
                                <div className="space-y-2">
                                    <Label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                        Nomor Telepon
                                    </Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                        <Input
                                            type="tel"
                                            value={tempProfileData.phone}
                                            onChange={(e) =>
                                                setTempProfileData({
                                                    ...tempProfileData,
                                                    phone: e.target.value,
                                                })
                                            }
                                            className="pl-10 h-11 bg-slate-50 border-slate-200 rounded-xl focus-visible:ring-[#0b3b60]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <DialogFooter className="gap-2">
                                <Button
                                    variant="ghost"
                                    onClick={() => setIsEditProfileOpen(false)}
                                    className="rounded-xl text-slate-500"
                                >
                                    Batal
                                </Button>
                                <Button
                                    onClick={handleSaveProfile}
                                    className="bg-[#0b3b60] hover:bg-[#082a45] text-white rounded-xl px-6"
                                >
                                    Simpan Perubahan
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* ── Avatar ── */}
                    <div className="relative mb-4">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl scale-110 opacity-60" />
                        <Avatar className="h-28 w-28 border-4 border-white shadow-md relative z-10">
                            <AvatarImage
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${admin.avatar}&backgroundColor=0b3b60`}
                            />
                            <AvatarFallback className="bg-[#0b3b60] text-white text-2xl font-extrabold">
                                {admin.avatar}
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-0 right-0 bg-[#0b3b60] p-1.5 rounded-full border-2 border-white z-20 text-white shadow-sm">
                            <Check className="h-4 w-4" />
                        </div>
                    </div>

                    {/* ── Nama & Role — reactive ── */}
                    <h3 className="text-xl font-bold text-[#0b3b60] text-center">
                        {profileData.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                        {admin.role}
                    </p>

                    {/* Badge */}
                    <span className="inline-flex items-center gap-1.5 mt-3 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-extrabold uppercase tracking-widest">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {admin.badge}
                    </span>

                    {/* ── Info Kontak — reactive ── */}
                    <div className="w-full mt-8 space-y-4">
                        <div className="flex items-start gap-3">
                            <Phone className="h-4 w-4 text-slate-400 mt-0.5" />
                            <p className="text-sm font-medium text-slate-600">
                                {profileData.phone}
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Mail className="h-4 w-4 text-slate-400 mt-0.5" />
                            <p className="text-sm font-medium text-slate-600">
                                {profileData.email}
                            </p>
                        </div>
                    </div>

                    {/* ── Admin ID ── */}
                    <div className="w-full mt-8 p-4 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100">
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Admin ID
                            </p>
                            <p className="text-sm font-bold text-[#0b3b60] mt-0.5">
                                {admin.adminId}
                            </p>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-200" />
                    </div>
                </CardContent>
            </Card>

            {/* ── Dialog Sukses ── */}
            <Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
                <DialogContent className="sm:max-w-xs rounded-3xl p-8 text-center">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                        </div>
                        <DialogTitle className="text-xl font-extrabold text-slate-800">
                            Selamat!
                        </DialogTitle>
                        <p className="text-sm text-slate-400">
                            Perubahan telah disimpan
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
