import { Bell, Briefcase, Info, RefreshCw, ChevronRight } from 'lucide-react';
import { useGetAllNotifications } from '../hooks/useQueries';
import { Category, type Notification } from '../backend';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

function categoryLabel(cat: Category): string {
    switch (cat) {
        case Category.govtJob: return 'Govt Job';
        case Category.notice: return 'Notice';
        case Category.update: return 'Update';
        default: return 'Info';
    }
}

function categoryColors(cat: Category): string {
    switch (cat) {
        case Category.govtJob:
            return 'bg-orange-100 text-orange-700 border-orange-200';
        case Category.notice:
            return 'bg-navy-100 text-navy-700 border-navy-200';
        case Category.update:
            return 'bg-green-100 text-green-700 border-green-200';
        default:
            return 'bg-gray-100 text-gray-700 border-gray-200';
    }
}

function categoryIcon(cat: Category) {
    switch (cat) {
        case Category.govtJob:
            return <Briefcase size={13} />;
        case Category.notice:
            return <Info size={13} />;
        case Category.update:
            return <RefreshCw size={13} />;
        default:
            return <Bell size={13} />;
    }
}

function formatDate(datePosted: bigint): string {
    // datePosted is nanoseconds from IC Time.now()
    const ms = Number(datePosted / BigInt(1_000_000));
    const date = new Date(ms);
    return date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

function NotificationCard({ notification }: { notification: Notification }) {
    return (
        <div className="bg-white rounded-2xl border border-border shadow-card card-hover p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
                <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-body font-semibold border ${categoryColors(notification.category)}`}
                >
                    {categoryIcon(notification.category)}
                    {categoryLabel(notification.category)}
                </span>
                <span className="font-body text-muted-foreground text-xs shrink-0 mt-0.5">
                    {formatDate(notification.datePosted)}
                </span>
            </div>
            <h3 className="font-heading font-bold text-foreground text-base leading-snug">
                {notification.title}
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {notification.description}
            </p>
        </div>
    );
}

function MarqueeBanner({ notification }: { notification: Notification }) {
    return (
        <div className="bg-orange-500 text-white rounded-xl px-4 py-3 flex items-center gap-3 overflow-hidden">
            <div className="shrink-0 flex items-center gap-2 font-heading font-bold text-sm whitespace-nowrap">
                <Bell size={15} className="animate-pulse" />
                <span>LATEST:</span>
            </div>
            <div className="overflow-hidden flex-1">
                <div className="marquee-track flex items-center gap-2">
                    <span className="font-body text-sm font-medium whitespace-nowrap">
                        {notification.title}
                    </span>
                    <ChevronRight size={14} className="shrink-0 opacity-70" />
                    <span className="font-body text-sm opacity-90 whitespace-nowrap">
                        {notification.description}
                    </span>
                    <span className="font-body text-xs opacity-70 whitespace-nowrap ml-4">
                        — {formatDate(notification.datePosted)}
                    </span>
                </div>
            </div>
        </div>
    );
}

function LoadingSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-border p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                        <Skeleton className="h-6 w-20 rounded-full" />
                        <Skeleton className="h-4 w-16 rounded" />
                    </div>
                    <Skeleton className="h-5 w-3/4 rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-5/6 rounded" />
                </div>
            ))}
        </div>
    );
}

export default function LatestNotifications() {
    const { data: notifications, isLoading } = useGetAllNotifications();

    const hasNotifications = notifications && notifications.length > 0;
    const latest = hasNotifications ? notifications[0] : null;

    return (
        <section id="notifications" className="py-14 md:py-20 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-body font-semibold mb-4">
                        <Bell size={14} />
                        Daily Updates
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-4xl text-foreground mb-3">
                        Latest{' '}
                        <span className="text-gradient-orange">Notifications</span>
                    </h2>
                    <p className="font-body text-muted-foreground text-base max-w-lg mx-auto">
                        Stay updated with the latest government job openings, notices, and important updates — posted daily.
                    </p>
                </div>

                {/* Marquee Banner */}
                {latest && (
                    <div className="mb-8">
                        <MarqueeBanner notification={latest} />
                    </div>
                )}

                {/* Content */}
                {isLoading ? (
                    <LoadingSkeleton />
                ) : !hasNotifications ? (
                    <div className="flex flex-col items-center justify-center py-16 gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                            <Bell size={28} className="text-orange-500" />
                        </div>
                        <p className="font-heading font-semibold text-foreground text-lg">
                            No notifications yet.
                        </p>
                        <p className="font-body text-muted-foreground text-sm">
                            Check back soon for the latest job openings and updates!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {notifications.map((n) => (
                            <NotificationCard key={String(n.id)} notification={n} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
