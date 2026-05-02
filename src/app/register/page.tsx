"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { UserPlus, Mail, Lock, User, Phone, MapPin } from "lucide-react";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Logic for registration
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-xl bg-mapid-blue flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
              MA
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">Create an account</CardTitle>
          <CardDescription>
            Join MAPID Academy WebGIS Bootcamp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input placeholder="First Name" className="pl-10 h-11 bg-slate-50 border-slate-200" required />
                </div>
              </div>
              <div className="space-y-2">
                <Input placeholder="Last Name" className="h-11 bg-slate-50 border-slate-200" required />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input type="email" placeholder="Email Address" className="pl-10 h-11 bg-slate-50 border-slate-200" required />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input type="tel" placeholder="Phone Number" className="pl-10 h-11 bg-slate-50 border-slate-200" required />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input type="password" placeholder="Password" className="pl-10 h-11 bg-slate-50 border-slate-200" required />
              </div>
            </div>
            <Button className="w-full h-11 bg-mapid-blue hover:bg-blue-700 text-white font-bold rounded-lg transition-all" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 text-center">
          <div className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="text-mapid-blue font-semibold hover:underline">
              Sign in
            </Link>
          </div>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
            MAPID Academy Internal
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
