
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditProfileTab = ({ editableProfile, setEditableProfile, setActiveTab }) => {
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
};

export default EditProfileTab;
