import { Phone, ChevronDown, Star } from 'lucide-react';

export default function HeroSection() {
    const scrollToServices = () => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1200x400.png')" }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 hero-overlay" />

            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-700/30 blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-6">
                        <Star size={14} className="fill-orange-400 text-orange-400" />
                        Trusted Online Service Center
                    </div>

                    {/* Heading */}
                    <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4">
                        Anand{' '}
                        <span className="text-gradient-orange">Design</span>
                    </h1>

                    {/* Tagline */}
                    <p className="font-body text-lg sm:text-xl text-navy-100 mb-3 leading-relaxed">
                        Your Trusted Partner for All Online Services
                    </p>
                    <p className="font-body text-base text-navy-200 mb-8 leading-relaxed">
                        Passport • PAN Card • Voter Card • MSME • FSSAI • Insurance &amp; More
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:9814298421"
                            className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-heading font-bold text-lg transition-all shadow-orange hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <Phone size={20} className="shrink-0" />
                            Call: 9814298421
                        </a>
                        <button
                            onClick={scrollToServices}
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-heading font-semibold text-lg transition-all backdrop-blur-sm"
                        >
                            View Services
                            <ChevronDown size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="oklch(0.98 0.005 80)" />
                </svg>
            </div>
        </section>
    );
}
