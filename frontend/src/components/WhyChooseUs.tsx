import { Clock, Award, Users, ThumbsUp } from 'lucide-react';

const features = [
    {
        icon: <Clock size={24} />,
        title: 'Fast Processing',
        desc: 'Quick turnaround on all government forms and applications.',
    },
    {
        icon: <Award size={24} />,
        title: 'Expert Assistance',
        desc: 'Experienced team to guide you through every step.',
    },
    {
        icon: <Users size={24} />,
        title: 'Trusted by Many',
        desc: 'Hundreds of satisfied customers in our community.',
    },
    {
        icon: <ThumbsUp size={24} />,
        title: 'Hassle-Free',
        desc: 'We handle the paperwork so you don\'t have to worry.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-14 md:py-20 bg-navy-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-3">
                        Why Choose <span className="text-orange-400">Anand Design?</span>
                    </h2>
                    <p className="font-body text-navy-200 text-base max-w-lg mx-auto">
                        Your one-stop solution for all government and online services.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="bg-navy-700/60 border border-navy-600 rounded-2xl p-6 flex flex-col items-center text-center gap-3 card-hover"
                        >
                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                                {f.icon}
                            </div>
                            <h3 className="font-heading font-bold text-white text-base">{f.title}</h3>
                            <p className="font-body text-navy-300 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
