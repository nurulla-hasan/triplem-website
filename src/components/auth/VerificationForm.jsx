"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const verificationSchema = z.object({
  code: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export function VerificationForm({ className, ...props }) {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(verificationSchema),
    mode: "onChange",
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle verification logic here
    router.push("/auth/reset-password");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="p-0">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <Link href="/auth/forgot-password">
              <ArrowLeft className="cursor-pointer" />
            </Link>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-semibold text-title mb-2">
                  Verify Your Account
                </h1>
                <p className="text-sm text-subtitle">
                  Enter the 6-digit code sent to your email.
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 justify-center">
                <Controller
                  control={control}
                  name="code"
                  render={({ field }) => (
                    <InputOTP {...field} maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  )}
                />
                {errors.code && (
                  <p className="text-red-500 text-sm text-center">
                    {errors.code.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={!isValid}>
                Verify
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
