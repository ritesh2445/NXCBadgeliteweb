import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, LogIn, Mail } from "lucide-react";
import GlowingButton from "@/components/glowing-button";

export default function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Email login will be handled by Replit Auth
    window.location.href = "/api/login";
  };

  const handleGoogleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-black">
      {/* Glowing Logo */}
      <div className="mb-12 text-center floating">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center pulse-glow">
          <CreditCard className="text-black text-3xl" size={32} />
        </div>
        <h1 className="text-4xl font-bold text-primary mb-2">NXC Badge</h1>
        <p className="text-muted-foreground">Digital Business Cards</p>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md bg-card border-border shadow-lg glow-gold">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold text-center mb-8">Welcome Back</h2>
          
          {/* Google Sign-In Button */}
          <GlowingButton
            onClick={handleGoogleLogin}
            className="w-full bg-white text-black mb-4 flex items-center justify-center gap-3"
            variant="outline"
          >
            <img 
              src="https://developers.google.com/identity/images/g-logo.png" 
              alt="Google" 
              className="w-5 h-5"
            />
            Continue with Google
          </GlowingButton>

          <div className="flex items-center my-6">
            <Separator className="flex-1" />
            <span className="px-4 text-muted-foreground text-sm">or</span>
            <Separator className="flex-1" />
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background border-border focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <GlowingButton
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-black"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </GlowingButton>
          </form>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Don't have an account?{" "}
            <a href="/api/login" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
