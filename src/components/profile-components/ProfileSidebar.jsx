
"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const ProfileSidebar = ({ user }) => {
    return (
        <div className="grid-cols-1">
            <h2 className="text-2xl font-medium text-title mb-4">Welcome to your account!</h2>
            <p className="text-subtitle mb-12">
                Update your details, manage addresses, and keep your account secure.
            </p>
            <p className="text-subtitle mb-6">
                If you need any help{" "}
                <Link href="/contact" className="text-primary hover:underline">
                    contact us
                </Link>
                :
            </p>
            <div className="space-y-3">
                <div className="flex items-center text-subtitle">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <span>839949950252</span>
                </div>
                <div className="flex items-center text-subtitle">
                    <Mail className="w-5 h-5 mr-3 text-primary" />
                    <span>infocompany@gmail.com</span>
                </div>
                <div className="flex items-center text-subtitle">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>{user.address || "Address not available"}</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;
