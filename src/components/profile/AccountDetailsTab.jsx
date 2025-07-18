
"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const AccountDetailsTab = ({ user, setActiveTab }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium text-title">Account Details</h2>
                <Button
                    variant="outline"
                    className="text-primary rounded-xs font-normal"
                    onClick={() => setActiveTab("editProfile")}
                >
                    Edit Account
                </Button>
            </div>

            <div className="space-y-12 text-subtitle">
                {/* Login Details */}
                <div className="flex items-start gap-8">
                    <span className="font-medium min-w-[120px]">Login Details:</span>
                    <div className="space-y-6 flex-1">
                        <p className="flex flex-col gap-1">
                            <span className="font-medium text-xs">Full Name</span>
                            <span className="font-medium text-sm text-title">{user.fullName}</span>
                        </p>
                        <p className="flex flex-col gap-1">
                            <span className="font-medium text-xs">Email</span>
                            <span className="font-medium text-sm text-title">{user.email}</span>
                        </p>
                        <p className="flex flex-col gap-1">
                            <span className="font-medium text-xs">Phone Number</span>
                            <span className="font-medium text-sm text-title">{user.phoneNumber}</span>
                        </p>
                    </div>
                </div>

                {/* Password */}
                <div className="md:flex space-y-3 items-start md:gap-8">
                    <span className="font-medium min-w-[120px]">Password:</span>
                    <div className="flex-1">
                        <h4 className="text-xs font-medium">Current Password</h4>
                        <p className="text-sm font-medium text-title">••••••••</p>
                    </div>
                    <Button
                        variant="outline"
                        className="text-primary rounded-xs font-normal"
                        onClick={() => setActiveTab("changePassword")}
                    >
                        Change Password
                    </Button>
                </div>

                {/* Address Book */}
                <div className="md:flex space-y-3 justify-between items-start gap-8">
                    <span className="font-medium block min-w-[120px]">Address Book:</span>
                    <p className="flex flex-col gap-1 max-w-xs flex-1">
                        <span className="font-medium text-xs">Shipping Address</span>
                        <span className="text-xs text-subtitle">{user.address || "No address provided"}</span>
                    </p>
                    <Button
                        variant="outline"
                        className="text-primary rounded-xs font-normal"
                        onClick={() => setActiveTab("changeAddress")}
                    >
                        Change Address
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AccountDetailsTab;
