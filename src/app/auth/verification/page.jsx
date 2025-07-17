"use client";
import { VerificationForm } from '@/components/auth/VerificationForm';


const VerificationPage = () => {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-lg">
                <VerificationForm />
            </div>
        </div>
    );
};

export default VerificationPage;