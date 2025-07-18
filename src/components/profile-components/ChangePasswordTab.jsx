
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const ChangePasswordTab = ({ passwordFields, setPasswordFields, setActiveTab }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div>
            <h2 className="text-xl font-medium text-title mb-6">Change Password</h2>
            <div className="space-y-4">
                <div>
                    <Label htmlFor="currentPassword" className="text-subtitle mb-3">Current Password</Label>
                    <div className="relative">
                        <Input
                            id="currentPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Current Password"
                            value={passwordFields.currentPassword}
                            onChange={(e) =>
                                setPasswordFields({ ...passwordFields, currentPassword: e.target.value })
                            }
                            className="h-10 text-base rounded-xs pr-10"
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-subtitle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </span>
                    </div>
                </div>
                <div>
                    <Label htmlFor="newPassword" className="text-subtitle mb-3">New Password</Label>
                    <div className="relative">
                        <Input
                            id="newPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="New Password"
                            value={passwordFields.newPassword}
                            onChange={(e) =>
                                setPasswordFields({ ...passwordFields, newPassword: e.target.value })
                            }
                            className="h-10 text-base rounded-xs pr-10"
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-subtitle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </span>
                    </div>
                </div>
                <div>
                    <Label htmlFor="confirmNewPassword" className="text-subtitle mb-3">Confirm New Password</Label>
                    <div className="relative">
                        <Input
                            id="confirmNewPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm New Password"
                            value={passwordFields.confirmNewPassword}
                            onChange={(e) =>
                                setPasswordFields({ ...passwordFields, confirmNewPassword: e.target.value })
                            }
                            className="h-10 text-base rounded-xs pr-10"
                        />
                        <span
                            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-subtitle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </span>
                    </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <Button
                        variant="outline"
                        className="rounded-xs"
                        onClick={() => setActiveTab("accountDetails")}
                    >
                        Cancel
                    </Button>
                    <Button className=" rounded-xs">
                        Change Password
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordTab;
