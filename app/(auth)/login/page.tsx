"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAppDispatch, useAppSelector, RootState } from "../../store/hooks";
import { login, clearError } from "../../store/slices/authSlice";

export default function Login() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    
    // Explicitly destructure from state.auth with explicit state typing
    const { user, loading, error, isAuthenticated } = useAppSelector((state: RootState) => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (isAuthenticated && user) {
            // Redirect based on role
            const role = user.role;
            if (role === 'admin' || role === 'super_admin') router.push('/admin');
            else if (role === 'manager') router.push('/manager');
            else router.push('/user');
        }
    }, [isAuthenticated, user, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-black">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center h-16 bg-white rounded-2xl mb-4 p-4">
                        <Link href="/">
                            <img src="/Coral-Group-Logo.png" width={160} height={60} alt="logo" />
                        </Link>
                    </div>
                    <div className="text-white text-xl font-medium tracking-tight">Coral Group Intelligence</div>
                    <div className="text-gray-400 mt-2 text-sm">
                        Welcome back! Authorize your session to continue.
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h2 className="text-gray-900 text-2xl font-medium mb-6">Login</h2>

                    {error && (
                        <div className="mb-6 p-4 bg-rose-50 border border-rose-100 text-rose-600 text-sm rounded-lg">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (error) dispatch(clearError());
                                    }}
                                    placeholder="executive@coralgroup.com"
                                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#94cb3d]/20 focus:border-[#94cb3d] transition-all text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-[10px] font-medium text-gray-500 uppercase tracking-widest mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (error) dispatch(clearError());
                                    }}
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#94cb3d]/20 focus:border-[#94cb3d] transition-all text-sm"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#94cb3d] text-black py-4 rounded-xl font-medium uppercase tracking-[0.2em] hover:scale-[1.02] transition-all shadow-lg shadow-[#94cb3d]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Authorizing..." : "Login"}
                        </button>
                    </form>

                    <p className="text-center mt-8 text-gray-500 text-sm">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-gray-900 font-medium hover:underline">
                            Register Member
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
