import { useState } from 'react';
import { Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ADMIN_PASSWORD = 'design2026';

interface AdminLoginProps {
    onSuccess: () => void;
}

export default function AdminLogin({ onSuccess }: AdminLoginProps) {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isChecking, setIsChecking] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsChecking(true);

        // Small delay for UX feedback
        await new Promise((r) => setTimeout(r, 400));

        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('admin_auth', 'true');
            onSuccess();
        } else {
            setError('Incorrect password. Please try again.');
            setPassword('');
        }
        setIsChecking(false);
    };

    return (
        <div className="min-h-screen bg-navy-900 flex flex-col items-center justify-center px-4">
            {/* Background pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-navy-700/40 blur-3xl" />
            </div>

            <div className="relative w-full max-w-sm">
                {/* Logo / Brand */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg mb-4">
                        <ShieldCheck size={32} className="text-white" />
                    </div>
                    <h1 className="font-heading font-bold text-white text-2xl tracking-tight">
                        Admin Access
                    </h1>
                    <p className="font-body text-navy-300 text-sm mt-1 text-center">
                        Anand Design — Notification Management
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <Label
                                htmlFor="admin-password"
                                className="font-body font-semibold text-sm text-foreground"
                            >
                                Password
                            </Label>
                            <div className="relative">
                                <Lock
                                    size={15}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                                />
                                <Input
                                    id="admin-password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter admin password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (error) setError('');
                                    }}
                                    required
                                    autoFocus
                                    className={`font-body pl-9 pr-10 ${error ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                    tabIndex={-1}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                                </button>
                            </div>
                            {error && (
                                <p className="font-body text-destructive text-xs mt-0.5 flex items-center gap-1">
                                    <span>⚠</span> {error}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            disabled={isChecking || !password}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-heading font-semibold w-full h-11"
                        >
                            {isChecking ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Verifying...
                                </span>
                            ) : (
                                'Login to Admin Panel'
                            )}
                        </Button>
                    </form>
                </div>

                <p className="font-body text-navy-400 text-xs text-center mt-6">
                    This area is restricted to authorized personnel only.
                </p>
            </div>
        </div>
    );
}
