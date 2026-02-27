import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-secondary/40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-body font-semibold mb-4">
                        Get In Touch
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                        Contact <span className="text-gradient-orange">Us</span>
                    </h2>
                    <p className="font-body text-muted-foreground text-lg max-w-md mx-auto">
                        We're here to help! Reach out to us for any service or query.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Call Card */}
                    <div className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col items-center text-center gap-5">
                        <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-orange pulse-ring">
                            <Phone size={32} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-foreground text-xl mb-1">Call Us Now</h3>
                            <p className="font-body text-muted-foreground text-sm mb-4">
                                Available during business hours for all your service needs
                            </p>
                            <a
                                href="tel:9814298421"
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-heading font-bold text-xl transition-all shadow-orange hover:shadow-lg hover:-translate-y-0.5"
                            >
                                <Phone size={20} />
                                9814298421
                            </a>
                        </div>
                    </div>

                    {/* Info Card */}
                    <div className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col gap-5">
                        <h3 className="font-heading font-bold text-foreground text-xl">Business Information</h3>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-700 flex items-center justify-center shrink-0">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <p className="font-heading font-semibold text-foreground text-sm">Business Name</p>
                                <p className="font-body text-muted-foreground text-sm">Anand Design</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <p className="font-heading font-semibold text-foreground text-sm">Address</p>
                                <p className="font-body text-muted-foreground text-sm">
                                    4022, Durga Puri, Haibowal Kalan, Ludhiana
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                                <Clock size={18} />
                            </div>
                            <div>
                                <p className="font-heading font-semibold text-foreground text-sm">Working Hours</p>
                                <p className="font-body text-muted-foreground text-sm">10:00 AM – 07:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                <MessageCircle size={18} />
                            </div>
                            <div>
                                <p className="font-heading font-semibold text-foreground text-sm">Services</p>
                                <p className="font-body text-muted-foreground text-sm">
                                    Passport, PAN Card, Voter Card, MSME, FSSAI, Insurance, FIR/PCC, E-Challan, Job Forms, Ayurvedic &amp; Unani Board &amp; More
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
