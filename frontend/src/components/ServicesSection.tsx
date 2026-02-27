import {
    FileText,
    CreditCard,
    Vote,
    Building2,
    ShieldCheck,
    Car,
    Search,
    Receipt,
    Briefcase,
    GraduationCap,
    Heart,
    Globe,
    FlaskConical,
} from 'lucide-react';

interface Service {
    id: number;
    name: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
}

const services: Service[] = [
    {
        id: 1,
        name: 'Passport',
        subtitle: 'New / Renew',
        icon: <FileText size={28} />,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        id: 2,
        name: 'PAN Card',
        subtitle: 'New / Correction',
        icon: <CreditCard size={28} />,
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
    },
    {
        id: 3,
        name: 'Voter Card',
        subtitle: 'New / Correction',
        icon: <Vote size={28} />,
        color: 'text-green-600',
        bgColor: 'bg-green-50',
    },
    {
        id: 4,
        name: 'MSME Certificate',
        subtitle: 'Registration',
        icon: <Building2 size={28} />,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
    },
    {
        id: 5,
        name: 'FSSAI License',
        subtitle: 'New / Renew',
        icon: <ShieldCheck size={28} />,
        color: 'text-teal-600',
        bgColor: 'bg-teal-50',
    },
    {
        id: 6,
        name: 'Vehicle Insurance',
        subtitle: 'Two / Four Wheeler',
        icon: <Car size={28} />,
        color: 'text-red-600',
        bgColor: 'bg-red-50',
    },
    {
        id: 7,
        name: 'FIR / PCC',
        subtitle: 'Tenant Verification',
        icon: <Search size={28} />,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
    },
    {
        id: 8,
        name: 'E-Challan',
        subtitle: 'Online Payment',
        icon: <Receipt size={28} />,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
    },
    {
        id: 9,
        name: 'Govt. Job Forms',
        subtitle: 'Online Form Filling',
        icon: <Briefcase size={28} />,
        color: 'text-navy-700',
        bgColor: 'bg-navy-50',
    },
    {
        id: 10,
        name: 'School / College',
        subtitle: 'Form Filling',
        icon: <GraduationCap size={28} />,
        color: 'text-pink-600',
        bgColor: 'bg-pink-50',
    },
    {
        id: 11,
        name: 'Jeewan Parman',
        subtitle: 'Life Certificate',
        icon: <Heart size={28} />,
        color: 'text-rose-600',
        bgColor: 'bg-rose-50',
    },
    {
        id: 12,
        name: 'Any Online Form',
        subtitle: 'All Types Welcome',
        icon: <Globe size={28} />,
        color: 'text-cyan-600',
        bgColor: 'bg-cyan-50',
    },
    {
        id: 13,
        name: 'Board of Ayurvedic & Unani Medicine Punjab',
        subtitle: 'Registration New/Renew (D Pharmacy, B Pharmacy)',
        icon: <FlaskConical size={28} />,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
    },
];

function ServiceCard({ service }: { service: Service }) {
    return (
        <div className="card-hover bg-card rounded-2xl p-6 shadow-card border border-border flex flex-col items-center text-center gap-4 cursor-default">
            <div className={`w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center shadow-sm`}>
                {service.icon}
            </div>
            <div>
                <h3 className="font-heading font-bold text-foreground text-base leading-tight mb-1">
                    {service.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                    {service.subtitle}
                </p>
            </div>
        </div>
    );
}

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 md:py-24 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-body font-semibold mb-4">
                        What We Offer
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                        Our{' '}
                        <span className="text-gradient-orange">Services</span>
                    </h2>
                    <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
                        We provide fast, reliable assistance for all your government and online form needs — all under one roof.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="font-body text-muted-foreground mb-4 text-base">
                        Don't see your service? We handle <strong>any type of online form filling!</strong>
                    </p>
                    <a
                        href="tel:9814298421"
                        className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white px-8 py-3 rounded-xl font-heading font-semibold text-base transition-all shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                    >
                        Contact Us Today
                    </a>
                </div>
            </div>
        </section>
    );
}
