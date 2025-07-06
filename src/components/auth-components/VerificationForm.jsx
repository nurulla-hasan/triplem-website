"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const verificationSchema = z.object({
  code: z.string().length(6, { message: "Verification code must be 6 digits." }).regex(/^[0-9]+$/, { message: "Verification code must contain only digits." }),
});

export function VerificationForm({ className, ...props }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(verificationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle verification logic here
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="p-0">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Verify Your Account</h1>
                <p className="text-sm text-gray-500">Enter the 6-digit code sent to your email.</p>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="code">Verification Code</Label>
                <Input
                  id="code"
                  type="text"
                  placeholder="Enter 6-digit code"
                  {...register("code")}
                  maxLength={6}
                />
                {errors.code && (
                  <p className="text-red-500 text-sm">{errors.code.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full">
                Verify
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
