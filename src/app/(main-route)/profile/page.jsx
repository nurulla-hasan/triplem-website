
"use client";

import React, { useState } from "react";
import SimpleHero from "@/components/common/SimpleHero";
import PageLayout from "@/components/layout/PageLayout";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import AccountDetailsTab from "@/components/profile/AccountDetailsTab";
import EditProfileTab from "@/components/profile/EditProfileTab";
import ChangePasswordTab from "@/components/profile/ChangePasswordTab";
import ChangeAddressTab from "@/components/profile/ChangeAddressTab";

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
                return <AccountDetailsTab user={user} setActiveTab={setActiveTab} />;
            case "editProfile":
                return (
                    <EditProfileTab
                        editableProfile={editableProfile}
                        setEditableProfile={setEditableProfile}
                        setActiveTab={setActiveTab}
                    />
                );
            case "changePassword":
                return (
                    <ChangePasswordTab
                        passwordFields={passwordFields}
                        setPasswordFields={setPasswordFields}
                        setActiveTab={setActiveTab}
                    />
                );
            case "changeAddress":
                return (
                    <ChangeAddressTab
                        addressFields={addressFields}
                        setAddressFields={setAddressFields}
                        setActiveTab={setActiveTab}
                    />
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
                        <ProfileSidebar user={user} />

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