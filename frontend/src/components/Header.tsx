import { Phone, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-navy-800 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-orange">
                            <span className="text-white font-heading font-bold text-lg leading-none">A</span>
                        </div>
                        <div>
                            <p className="font-heading font-bold text-white text-lg leading-tight">Anand Design</p>
                            <p className="text-orange-300 text-xs font-body leading-tight">Online Services</p>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {/* Working Hours Badge */}
                        <div className="flex items-center gap-1.5 bg-navy-700 border border-navy-600 px-3 py-1.5 rounded-lg">
                            <Clock size={13} className="text-orange-400 shrink-0" />
                            <span className="text-navy-200 font-body text-xs font-medium whitespace-nowrap">
                                10:00 AM – 07:00 PM
                            </span>
                        </div>
                        <button
                            onClick={() => scrollTo('services')}
                            className="text-navy-200 hover:text-orange-400 font-body font-medium text-sm transition-colors"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollTo('contact')}
                            className="text-navy-200 hover:text-orange-400 font-body font-medium text-sm transition-colors"
                        >
                            Contact
                        </button>
                        <a
                            href="tel:9814298421"
                            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-body font-semibold text-sm transition-colors shadow-orange pulse-ring"
                        >
                            <Phone size={15} />
                            9814298421
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {menuOpen && (
                    <div className="md:hidden border-t border-navy-600 py-4 flex flex-col gap-3">
                        {/* Working Hours in mobile menu */}
                        <div className="flex items-center gap-2 px-2 py-1">
                            <Clock size={14} className="text-orange-400 shrink-0" />
                            <span className="text-navy-200 font-body text-sm font-medium">
                                Working Hours: 10:00 AM – 07:00 PM
                            </span>
                        </div>
                        <button
                            onClick={() => scrollTo('services')}
                            className="text-navy-200 hover:text-orange-400 font-body font-medium text-sm text-left px-2 py-1 transition-colors"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollTo('contact')}
                            className="text-navy-200 hover:text-orange-400 font-body font-medium text-sm text-left px-2 py-1 transition-colors"
                        >
                            Contact
                        </button>
                        <a
                            href="tel:9814298421"
                            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-body font-semibold text-sm transition-colors w-fit"
                        >
                            <Phone size={15} />
                            Call: 9814298421
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
