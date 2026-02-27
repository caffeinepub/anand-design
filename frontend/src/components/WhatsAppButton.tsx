import { SiWhatsapp } from 'react-icons/si';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919814298421"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
            style={{ backgroundColor: '#25D366' }}
        >
            <SiWhatsapp size={30} color="#ffffff" />
        </a>
    );
}
