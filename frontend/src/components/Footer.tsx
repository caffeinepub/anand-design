import { Phone, Clock, Heart, MapPin } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function Footer() {
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'anand-design');

    return (
        <footer className="bg-navy-900 text-white">
            {/* Main Footer */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shadow-orange">
                                <span className="text-white font-heading font-bold text-lg">A</span>
                            </div>
                            <div>
                                <p className="font-heading font-bold text-white text-lg leading-tight">Anand Design</p>
                                <p className="text-orange-300 text-xs font-body">Online Services</p>
                            </div>
                        </div>
                        <p className="font-body text-navy-300 text-sm leading-relaxed">
                            We help you with all types of online form services. Fast, reliable, and hassle-free.
                        </p>
                    </div>

                    {/* Services Quick List */}
                    <div>
                        <h4 className="font-heading font-bold text-white text-base mb-4">Our Services</h4>
                        <ul className="grid grid-cols-2 gap-1.5">
                            {[
                                'Passport', 'PAN Card', 'Voter Card', 'MSME Certificate',
                                'FSSAI License', 'Vehicle Insurance', 'FIR / PCC', 'E-Challan',
                                'Govt. Job Forms', 'School/College Forms', 'Jeewan Parman', 'Any Online Form',
                                'Ayurvedic & Unani Board',
                            ].map((s) => (
                                <li key={s} className="font-body text-navy-300 text-xs flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-bold text-white text-base mb-4">Contact Us</h4>
                        <div className="flex flex-col gap-3">
                            <p className="font-body text-navy-300 text-sm">
                                Have a question or need assistance? Give us a call!
                            </p>
                            <a
                                href="tel:9814298421"
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-heading font-bold text-base transition-all shadow-orange w-fit"
                            >
                                <Phone size={18} />
                                9814298421
                            </a>
                            <div className="flex items-center gap-2">
                                <Clock size={13} className="text-orange-400 shrink-0" />
                                <p className="font-body text-navy-300 text-xs font-medium">
                                    Working Hours: 10:00 AM – 07:00 PM
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin size={13} className="text-orange-400 shrink-0 mt-0.5" />
                                <p className="font-body text-navy-300 text-xs font-medium">
                                    4022, Durga Puri, Haibowal Kalan, Ludhiana
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-navy-700">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="font-body text-navy-400 text-xs">
                        © {year} Anand Design. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <p className="font-body text-navy-400 text-xs flex items-center gap-1">
                            Built with{' '}
                            <Heart size={12} className="text-orange-500 fill-orange-500 mx-0.5" />
                            {' '}using{' '}
                            <a
                                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-400 hover:text-orange-300 transition-colors"
                            >
                                caffeine.ai
                            </a>
                        </p>
                        <Link
                            to="/admin"
                            className="font-body text-navy-600 hover:text-navy-400 text-xs transition-colors"
                        >
                            Admin
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
