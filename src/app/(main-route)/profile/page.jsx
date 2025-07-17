
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SimpleHero from "@/components/common/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";

const ProfilePage = () => {
    const heroLinks = [
        { name: "Home", href: "/" },
        { name: "Profile", isCurrent: true },
    ];

    const [activeTab, setActiveTab] = useState("accountDetails");
    const [showPassword, setShowPassword] = useState(false);

    const user = {
        fullName: "Leslie Alexander",
        email: "debra.holt@example.com",
        phoneNumber: "(208) 555-0112",
        address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    };

    // State for editable profile fields
    const [editableProfile, setEditableProfile] = useState({
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
    });

    // State for password change fields
    const [passwordFields, setPasswordFields] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const parseAddress = (addressString) => {
        if (!addressString || typeof addressString !== 'string') {
            return { streetAddress: "", city: "", state: "", zipCode: "" };
        }
        const parts = addressString.split(',').map(part => part.trim());
        return {
            streetAddress: parts[0] || "",
            city: parts[1] || "",
            state: (parts[2] && parts[2].split(' ')[0]) || "",
            zipCode: (parts[2] && parts[2].split(' ')[1]) || "",
        };
    };

    const [addressFields, setAddressFields] = useState(parseAddress(user.address));

    const renderTabContent = () => {
        switch (activeTab) {
            case "accountDetails":
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
            case "editProfile":
                return (
                    <div>
                        <h2 className="text-xl medium text-title mb-6">Edit Profile</h2>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="fullName" className="text-subtitle mb-3">Full Name</Label>
                                <Input
                                    id="fullName"
                                    placeholder="Full Name"
                                    value={editableProfile.fullName}
                                    onChange={(e) =>
                                        setEditableProfile({ ...editableProfile, fullName: e.target.value })
                                    }
                                    className="text-base h-10 rounded-xs"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="text-subtitle mb-3">Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Email"
                                    value={editableProfile.email}
                                    onChange={(e) =>
                                        setEditableProfile({ ...editableProfile, email: e.target.value })
                                    }
                                    className="text-base h-10 rounded-xs"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phoneNumber" className="text-subtitle mb-3">Phone Number</Label>
                                <Input
                                    id="phoneNumber"
                                    placeholder="Phone Number"
                                    value={editableProfile.phoneNumber}
                                    onChange={(e) =>
                                        setEditableProfile({ ...editableProfile, phoneNumber: e.target.value })
                                    }
                                    className="text-base h-10 rounded-xs"
                                />
                            </div>
                            <div className="flex justify-end gap-4 mt-6">
                                <Button
                                    variant="outline"
                                    className="rounded-xs"
                                    onClick={() => setActiveTab("accountDetails")}
                                >
                                    Cancel
                                </Button>
                                <Button className="rounded-xs">
                                    Update
                                </Button>
                            </div>
                        </div>
                    </div>
                );

            case "changePassword":
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

            case "changeAddress":
                return (
                    <div>
                        <h2 className="text-xl font-medium text-title mb-6">Shipping Address</h2>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="streetAddress" className="text-subtitle mb-3">Street Address</Label>
                                <Input
                                    id="streetAddress"
                                    placeholder="Street Address"
                                    value={addressFields.streetAddress}
                                    onChange={(e) =>
                                        setAddressFields({ ...addressFields, streetAddress: e.target.value })
                                    }
                                    className="h-10 text-base rounded-xs"
                                />
                            </div>
                            <div>
                                <Label htmlFor="city" className="text-subtitle mb-3">City</Label>
                                <Input
                                    id="city"
                                    placeholder="City"
                                    value={addressFields.city}
                                    onChange={(e) =>
                                        setAddressFields({ ...addressFields, city: e.target.value })
                                    }
                                    className="h-10 text-base rounded-xs"
                                />
                            </div>
                            <div>
                                <Label htmlFor="state" className="text-subtitle mb-3">State</Label>
                                <Input
                                    id="state"
                                    placeholder="State"
                                    value={addressFields.state}
                                    onChange={(e) =>
                                        setAddressFields({ ...addressFields, state: e.target.value })
                                    }
                                    className="h-10 text-base rounded-xs"
                                />
                            </div>
                            <div>
                                <Label htmlFor="zipCode" className="text-subtitle mb-3">Zip Code</Label>
                                <Input
                                    id="zipCode"
                                    placeholder="Zip Code"
                                    value={addressFields.zipCode}
                                    onChange={(e) =>
                                        setAddressFields({ ...addressFields, zipCode: e.target.value })
                                    }
                                    className="h-10 text-base rounded-xs"
                                />
                            </div>
                            <div className="flex justify-end gap-4 mt-6">
                                <Button
                                    variant="outline"
                                    className="rounded-xs"
                                    onClick={() => setActiveTab("accountDetails")}
                                >
                                    Cancel
                                </Button>
                                <Button className="rounded-xs">
                                    Update
                                </Button>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-minus-header">
            <SimpleHero title="Profile" links={heroLinks} />

            <PageLayout>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Section: Welcome Message & Contact Info */}
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
                                    {/* Solved: Ensure user.address is handled correctly for display */}
                                    <span>{user.address || "Address not available"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Tab Content */}
                        <div className="grid-cols-1">
                            {renderTabContent()}
                        </div>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default ProfilePage;