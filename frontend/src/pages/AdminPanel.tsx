import { useState, useEffect } from 'react';
import { Trash2, Plus, Bell, ArrowLeft, Loader2, Briefcase, Info, RefreshCw, LogOut } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useGetAllNotifications, useAddNotification, useDeleteNotification, Category } from '../hooks/useQueries';
import { type Notification } from '../backend';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import AdminLogin from '../components/AdminLogin';

function categoryLabel(cat: Category): string {
    switch (cat) {
        case Category.govtJob: return 'Govt Job';
        case Category.notice: return 'Notice';
        case Category.update: return 'Update';
        default: return 'Info';
    }
}

function categoryIcon(cat: Category) {
    switch (cat) {
        case Category.govtJob: return <Briefcase size={13} />;
        case Category.notice: return <Info size={13} />;
        case Category.update: return <RefreshCw size={13} />;
        default: return <Bell size={13} />;
    }
}

function categoryBadgeClass(cat: Category): string {
    switch (cat) {
        case Category.govtJob: return 'bg-orange-100 text-orange-700 border-orange-200';
        case Category.notice: return 'bg-navy-100 text-navy-700 border-navy-200';
        case Category.update: return 'bg-green-100 text-green-700 border-green-200';
        default: return 'bg-gray-100 text-gray-700';
    }
}

function formatDate(datePosted: bigint): string {
    const ms = Number(datePosted / BigInt(1_000_000));
    return new Date(ms).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

function NotificationRow({
    notification,
    onDelete,
    isDeleting,
}: {
    notification: Notification;
    onDelete: (id: bigint) => void;
    isDeleting: boolean;
}) {
    return (
        <div className="bg-white rounded-xl border border-border p-4 flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                    <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-body font-semibold border ${categoryBadgeClass(notification.category)}`}
                    >
                        {categoryIcon(notification.category)}
                        {categoryLabel(notification.category)}
                    </span>
                    <span className="font-body text-muted-foreground text-xs">
                        {formatDate(notification.datePosted)}
                    </span>
                </div>
                <p className="font-heading font-semibold text-foreground text-sm leading-snug">
                    {notification.title}
                </p>
                <p className="font-body text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {notification.description}
                </p>
            </div>
            <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(notification.id)}
                disabled={isDeleting}
                className="shrink-0 self-start"
            >
                {isDeleting ? (
                    <Loader2 size={14} className="animate-spin" />
                ) : (
                    <Trash2 size={14} />
                )}
                <span className="ml-1.5">Delete</span>
            </Button>
        </div>
    );
}

function AdminPanelContent({ onLogout }: { onLogout: () => void }) {
    const { data: notifications, isLoading } = useGetAllNotifications();
    const addMutation = useAddNotification();
    const deleteMutation = useDeleteNotification();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState<Category>(Category.govtJob);
    const [deletingId, setDeletingId] = useState<bigint | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;

        await addMutation.mutateAsync({ title: title.trim(), description: description.trim(), category });
        setTitle('');
        setDescription('');
        setCategory(Category.govtJob);
    };

    const handleDelete = async (id: bigint) => {
        setDeletingId(id);
        try {
            await deleteMutation.mutateAsync(id);
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Admin Header */}
            <div className="bg-navy-800 text-white py-6 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto flex items-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-1.5 text-navy-300 hover:text-white transition-colors text-sm font-body"
                    >
                        <ArrowLeft size={16} />
                        Back to Site
                    </Link>
                    <div className="w-px h-5 bg-navy-600" />
                    <div className="flex items-center gap-2 flex-1">
                        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                            <Bell size={16} className="text-white" />
                        </div>
                        <div>
                            <h1 className="font-heading font-bold text-white text-lg leading-tight">
                                Notification Management
                            </h1>
                            <p className="font-body text-navy-300 text-xs">
                                Anand Design — Admin Panel
                            </p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onLogout}
                        className="text-navy-300 hover:text-white hover:bg-navy-700 font-body text-sm gap-1.5 ml-auto"
                    >
                        <LogOut size={15} />
                        <span className="hidden sm:inline">Exit Admin</span>
                    </Button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-10">
                {/* Add Notification Form */}
                <section>
                    <div className="bg-white rounded-2xl border border-border shadow-card p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                                <Plus size={16} className="text-orange-600" />
                            </div>
                            <h2 className="font-heading font-bold text-foreground text-lg">
                                Add New Notification
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="title" className="font-body font-semibold text-sm text-foreground">
                                    Title <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="title"
                                    placeholder="e.g. Punjab Police Recruitment 2026 — Apply Now"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                    className="font-body"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="category" className="font-body font-semibold text-sm text-foreground">
                                    Category <span className="text-destructive">*</span>
                                </Label>
                                <Select
                                    value={category}
                                    onValueChange={(val) => setCategory(val as Category)}
                                >
                                    <SelectTrigger id="category" className="font-body">
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={Category.govtJob} className="font-body">
                                            <span className="flex items-center gap-2">
                                                <Briefcase size={13} />
                                                Govt Job
                                            </span>
                                        </SelectItem>
                                        <SelectItem value={Category.notice} className="font-body">
                                            <span className="flex items-center gap-2">
                                                <Info size={13} />
                                                Notice
                                            </span>
                                        </SelectItem>
                                        <SelectItem value={Category.update} className="font-body">
                                            <span className="flex items-center gap-2">
                                                <RefreshCw size={13} />
                                                Update
                                            </span>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <Label htmlFor="description" className="font-body font-semibold text-sm text-foreground">
                                    Description <span className="text-destructive">*</span>
                                </Label>
                                <Textarea
                                    id="description"
                                    placeholder="Provide details about the job opening, notice, or update..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    rows={4}
                                    className="font-body resize-none"
                                />
                            </div>

                            {addMutation.isError && (
                                <p className="font-body text-destructive text-sm">
                                    Failed to add notification. Please try again.
                                </p>
                            )}

                            <Button
                                type="submit"
                                disabled={addMutation.isPending || !title.trim() || !description.trim()}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-heading font-semibold w-fit px-8"
                            >
                                {addMutation.isPending ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin mr-2" />
                                        Adding...
                                    </>
                                ) : (
                                    <>
                                        <Plus size={16} className="mr-2" />
                                        Add Notification
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </section>

                {/* Existing Notifications */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-heading font-bold text-foreground text-lg flex items-center gap-2">
                            <Bell size={18} className="text-orange-500" />
                            All Notifications
                            {notifications && (
                                <span className="font-body text-sm text-muted-foreground font-normal">
                                    ({notifications.length})
                                </span>
                            )}
                        </h2>
                    </div>

                    {isLoading ? (
                        <div className="flex flex-col gap-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white rounded-xl border border-border p-4 flex gap-3">
                                    <div className="flex-1 flex flex-col gap-2">
                                        <Skeleton className="h-5 w-24 rounded-full" />
                                        <Skeleton className="h-4 w-3/4 rounded" />
                                        <Skeleton className="h-3 w-full rounded" />
                                    </div>
                                    <Skeleton className="h-8 w-20 rounded-lg shrink-0" />
                                </div>
                            ))}
                        </div>
                    ) : !notifications || notifications.length === 0 ? (
                        <div className="bg-white rounded-2xl border border-border p-10 flex flex-col items-center gap-3 text-center">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                                <Bell size={22} className="text-orange-500" />
                            </div>
                            <p className="font-heading font-semibold text-foreground">
                                No notifications yet
                            </p>
                            <p className="font-body text-muted-foreground text-sm">
                                Use the form above to add your first notification.
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {notifications.map((n) => (
                                <NotificationRow
                                    key={String(n.id)}
                                    notification={n}
                                    onDelete={handleDelete}
                                    isDeleting={deletingId === n.id}
                                />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default function AdminPanel() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return sessionStorage.getItem('admin_auth') === 'true';
    });

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('admin_auth');
        setIsAuthenticated(false);
    };

    if (!isAuthenticated) {
        return <AdminLogin onSuccess={handleLoginSuccess} />;
    }

    return <AdminPanelContent onLogout={handleLogout} />;
}
