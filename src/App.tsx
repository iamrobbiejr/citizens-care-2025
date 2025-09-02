import { useState, useEffect } from 'react';
import './App.css'
import {
    Shield,
    Heart,
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    Star,
    Users,
    Clock,
    Award,
    ChevronRight,
    ArrowRight,
    CheckCircle,
    Utensils,
    Home,
    Sparkles,
    TrendingUp, DollarSign, BookOpen, Upload, Zap, Target,
  ChevronDown, HelpCircle, ExternalLink, FileText, Search, Info, Lightbulb, Globe, ClipboardCheck,
    Facebook, Twitter, Instagram, Linkedin,
} from 'lucide-react';
import FloatingShape from './components/FloatingShape.tsx';
import AnimatedCard from "./components/AnimatedCard.tsx";
import FloatingElement from "./components/FloatingElement.tsx";



type Route = '' | 'about' | 'services' | 'why-choose-us' | 'careers' | 'resources' | 'contact';

// Navigation configuration
const NAV: Array<{ path: Route; label: string }> = [
    { path: '', label: 'Home' },
    { path: 'about', label: 'About Us' },
    { path: 'services', label: 'Our Services' },
    { path: 'why-choose-us', label: 'Why Choose Us' },
    { path: 'careers', label: 'Careers' },
    { path: 'resources', label: 'Resources' },
    { path: 'contact', label: 'Contact Us' }
];




// Loading Component
function LoadingSpinner() {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-[#255993] via-[#255993] to-[#912018] flex items-center justify-center z-50">
            <div className="text-center flex items-center ">
                <div className="relative align-middle mx-auto">
                    <div className="w-16 h-16 border-4 border-white/20 rounded-full animate-spin border-t-white mb-4"></div>
                    <Heart className="w-6 h-6 text-red-300 absolute top-5 left-5 flex items-center animate-pulse" />
                </div>
                <p className="mx-4 text-white text-center font-medium">Loading your care experience...</p>
            </div>
        </div>
    );
}

// Header Component
function Header({ route, onRouteChange }: { route: Route; onRouteChange: (r: Route) => void }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false);
    }, [route]);

    return (
        <header className="relative bg-gradient-to-r from-[#255993] via-blue-900 to-[#912018] shadow-xl sticky top-0 z-40">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-400 to-transparent animate-pulse"></div>

            {/* Top Bar */}
            <div className="relative border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-white">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" /><span className="text-xs">00 4477 34180 131</span>
                            </div>
                            <div className="hidden md:flex items-center gap-2">
                                <Mail className="w-4 h-4" /><span className="text-xs">admin@citizens-care.co.uk</span>
                            </div>
                            <div className="hidden lg:flex items-center gap-2">
                                <MapPin className="w-4 h-4" /><span className="text-xs">575-599 Maxted Road, Imex Centre, Biz Space. Hemel Hempstead. HP27DX</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" /><span className="text-xs">Mon–Fri 9am–5pm</span>
                        </div>
                    </div>
                </div>
            </div>

    <div className="relative py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
            <button
                className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
                onClick={() => onRouteChange('')}
                aria-label="Citizens Care Ltd home"
            >
                <img className="w-60" src="https://i.postimg.cc/VN9XpzD7/logo-horizontal-light.png" alt=""/>
            </button>

            <nav className="hidden lg:flex items-center space-x-1" aria-label="Primary">
                {NAV.map(item => {
                    const active = route === item.path;
                    return (
                        <button
                            key={item.path}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                active
                                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30'
                                    : 'text-white/80 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                            }`}
                            onClick={() => onRouteChange(item.path)}
                        >
                            {item.label}
                        </button>
                    );
                })}
                <div className="ml-4 pl-4 border-l border-white/20">
                    <button
                        onClick={() => onRouteChange('contact')}
                        className="bg-white text-[#255993] px-6 py-2 rounded-full font-semibold hover:bg-[#255993]/10 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Get Care Now
                    </button>
                </div>
            </nav>

            <button
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
                aria-expanded={open}
                aria-controls="mobile-navigation"
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle navigation menu"
            >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>

        <div
            id="mobile-navigation"
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                open ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
            }`}
        >
            <nav className="flex flex-col space-y-2 mt-4" aria-label="Mobile Primary">
                {NAV.map(item => {
                    const active = route === item.path;
                    return (
                        <button
                            key={item.path}
                            className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left w-full ${
                                active
                                    ? 'bg-white/20 text-white border border-white/30'
                                    : 'text-white/80 hover:text-white hover:bg-white/10'
                            }`}
                            onClick={() => onRouteChange(item.path)}
                        >
                            {item.label}
                        </button>
                    );
                })}
                <button
                    onClick={() => onRouteChange('contact')}
                    className="mt-4 bg-white text-[#255993] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#255993]/10 transition-all duration-300 shadow-lg w-full"
                >
                    Get Care Now
                </button>
            </nav>
        </div>
    </div>
</header>
);
}

// Page Components
function HomePage({ onNavigate }: { onNavigate: (r: Route) => void }) {

    const services = [
        {
            icon: Home,
            title: "Personal Care",
            description: "Assistance with daily activities, medication management, and personal hygiene in the comfort of your own home.",
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: Heart,
            title: "Companionship",
            description: "Emotional support, conversation, and social activities to combat loneliness and maintain wellbeing.",
            color: "from-rose-500 to-pink-600"
        },
        {
            icon: Shield,
            title: "Specialized Care",
            description: "Expert care for dementia, disability, and complex health conditions with trained professionals.",
            color: "from-emerald-500 to-teal-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-rose-50/20">
            {/* Animated background shapes */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-300/10 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-pink-300/10 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
                <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-emerald-200/20 to-teal-300/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

                {/* Floating care icons */}
                <div className="absolute top-1/4 left-1/6 animate-float">
                    <Heart className="w-6 h-6 text-rose-300/30" />
                </div>
                <div className="absolute top-2/3 right-1/5 animate-float" style={{animationDelay: '3s'}}>
                    <Shield className="w-8 h-8 text-blue-300/30" />
                </div>
                <div className="absolute top-1/3 right-1/3 animate-float" style={{animationDelay: '1.5s'}}>
                    <Users className="w-5 h-5 text-emerald-300/30" />
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-lg animate-fadeIn">
                                <Heart className="w-5 h-5 text-rose-500" />
                                <span className="text-slate-700 font-medium text-sm">Trusted Partner</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-slideUp">
                                <span className="text-slate-900">Compassionate Care</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600 mt-2">
                                    You Can Trust
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-slideUp" style={{animationDelay: '0.2s'}}>
                                Professional, secure domiciliary care services that honor dignity, respect independence,
                                and provide peace of mind for families across Hertfordshire and surrounding areas.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center animate-slideUp" style={{animationDelay: '0.4s'}}>
                                <button
                                    onClick={() => onNavigate('contact')}
                                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-rose-600 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        Arrange Care Today <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                                <button
                                    onClick={() => onNavigate('services')}
                                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                                >
                                    Learn More <ChevronRight className="ml-2 w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="relative animate-slideUp" style={{animationDelay: '0.3s'}}>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-rose-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl">
                                    <div className="w-full h-80  bg-gradient-to-br from-blue-100 to-rose-100 rounded-2xl flex items-center justify-center mb-2">
                                        <div className="text-center">
                                            <img src="https://i.postimg.cc/3J7VcZY7/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg" alt="Care Giver Image" className="rounded-2xl border-4 border-white shadow-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fadeIn">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Families Choose Us</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Trusted by hundreds of families across Hertfordshire for exceptional care</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group text-center animate-slideUp" style={{animationDelay: '0.1s'}}>
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Shield className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">CQC Pending</h3>
                            {/*<p className="text-slate-600">Fully compliant and regularly monitored for quality assurance</p>*/}
                        </div>

                        <div className="group text-center animate-slideUp" style={{animationDelay: '0.2s'}}>
                            <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Users className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Trained Staff</h3>
                            <p className="text-slate-600">DBS checked, fully trained and certified professional carers</p>
                        </div>

                        <div className="group text-center animate-slideUp" style={{animationDelay: '0.3s'}}>
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Clock className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Support</h3>
                            <p className="text-slate-600">Round-the-clock support and emergency response available</p>
                        </div>

                        {/*<div className="group text-center animate-slideUp" style={{animationDelay: '0.4s'}}>*/}
                        {/*    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">*/}
                        {/*        <Award className="w-10 h-10 text-white" />*/}
                        {/*    </div>*/}
                        {/*    <h3 className="text-xl font-bold text-slate-900 mb-3">Award Winning</h3>*/}
                        {/*    <p className="text-slate-600">Recognized for excellence in domiciliary care services</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fadeIn">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Care Services</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Comprehensive care tailored to your individual needs and preferences</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className={`group relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slideUp`} style={{animationDelay: `${0.1 + index * 0.1}s`}}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color.replace('from-', 'from-').replace('to-', 'to-')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className="relative">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                                    <button  onClick={() => onNavigate('services')} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                                        Learn More <ChevronRight className="ml-1 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/*<section className="py-20 bg-white/50 backdrop-blur-sm">*/}
            {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*        <div className="text-center mb-16 animate-fadeIn">*/}
            {/*            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Families Say</h2>*/}
            {/*            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Real stories from families who trust us with their loved ones</p>*/}
            {/*        </div>*/}

            {/*        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
            {/*            {testimonials.map((testimonial, index) => (*/}
            {/*                <div key={index} className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-slideUp`} style={{animationDelay: `${0.1 + index * 0.1}s`}}>*/}
            {/*                    <div className="flex mb-4">*/}
            {/*                        {[...Array(testimonial.rating)].map((_, i) => (*/}
            {/*                            <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />*/}
            {/*                        ))}*/}
            {/*                    </div>*/}
            {/*                    <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>*/}
            {/*                    <div className="border-t pt-4">*/}
            {/*                        <div className="font-semibold text-slate-800">{testimonial.name}</div>*/}
            {/*                        <div className="text-slate-500 text-sm">{testimonial.location}</div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Contact CTA */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-rose-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fadeIn">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Contact us today for a free, no-obligation care assessment</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => onNavigate('contact')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl flex items-center"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Call 00 4477 34180 131
                            </button>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }
                
                .animate-slideUp {
                    animation: slideUp 0.8s ease-out forwards;
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}

function AboutPage() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            <style>{`
                @keyframes slideUpFade {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
                .glass-morphism {
                    backdrop-filter: blur(16px);
                    background: rgba(255, 255, 255, 0.85);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
            `}</style>

            {/* Animated Background Shapes */}
            <FloatingShape className="w-72 h-72 bg-blue-300 top-20 -right-36 animate-float" delay={0} />
            <FloatingShape className="w-96 h-96 bg-indigo-200 -top-48 -left-48 animate-float" delay={1} />
            <FloatingShape className="w-64 h-64 bg-purple-200 top-1/2 right-10 animate-float" delay={2} />
            <FloatingShape className="w-40 h-40 bg-red-200 bottom-20 left-20 animate-float" delay={1.5} />

            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedCard delay={0}>
                        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
                            Citizens Care Ltd
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Transforming lives through compassionate, innovative care solutions
                        </p>
                    </AnimatedCard>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <AnimatedCard delay={200} className="glass-morphism rounded-3xl p-8 md:p-12 shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center mb-6">
                                    <Heart className="w-8 h-8 text-red-500 mr-3 animate-pulse-glow" />
                                    <h2 className="text-4xl font-bold text-slate-800">Our Mission</h2>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    To provide exceptional domiciliary care services that enable individuals to maintain their
                                    independence, dignity, and quality of life in the comfort of their own homes.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    We believe everyone deserves compassionate, professional care that respects their unique
                                    needs and preferences while ensuring the highest standards of safety and security.
                                </p>
                                <div className="mt-8 flex items-center text-blue-600 font-semibold cursor-pointer hover:text-blue-800 transition-colors">
                                    Learn more about our approach <ChevronRight className="w-5 h-5 ml-2" />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                                    <img
                                        src="https://i.postimg.cc/0jtYZx9z/close-up-team-health-workers.jpg"
                                        alt="Professional caregiver providing compassionate care"
                                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                {/* Floating care icons */}
                                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1s'}}>
                                    <Home className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>
            </section>

            {/* Values Cards */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Star, title: "Our Vision", desc: "To be the leading provider of trusted, compassionate care services in our community.", color: "from-yellow-400 to-orange-500", delay: 400 },
                            { icon: Users, title: "Our Values", desc: "Dignity, respect, independence, and professional excellence guide everything we do.", color: "from-blue-400 to-blue-500", delay: 500 },
                            { icon: Heart, title: "Our Purpose", desc: "Enhancing lives through personalized, secure, and compassionate care solutions.", color: "from-red-400 to-purple-500", delay: 600 }
                        ].map((item, idx) => (
                            <AnimatedCard key={idx} delay={item.delay}>
                                <div className="glass-morphism rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statement of Purpose */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <AnimatedCard delay={800}>
                        <div className="glass-morphism rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>

                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Statement of Purpose</h2>
                                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                            </div>

                            <p className="text-xl text-slate-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                                Citizens Care Ltd provides CQC-regulated domiciliary care (home care) with a primary focus on the
                                regulated activity of Personal Care. Our aim is to support adults to live safely and independently at
                                home while upholding dignity, respect, choice, and privacy.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {[
                                    {
                                        title: "Aims & Objectives",
                                        icon: "🎯",
                                        items: [
                                            "Deliver person-centred care tailored to individual needs and preferences",
                                            "Promote independence, wellbeing, and social inclusion",
                                            "Protect people from harm through robust safeguarding and risk management",
                                            "Work in partnership with families and professionals",
                                            "Continuously improve through feedback, training, and quality audits"
                                        ]
                                    },
                                    {
                                        title: "What We Provide",
                                        icon: "🤝",
                                        items: [
                                            "Personal care: washing, dressing, and continence support",
                                            "Medication assistance and prompts",
                                            "Mobility and transfer support",
                                            "Meal preparation, hydration, and nutrition support",
                                            "Light household tasks and domestic support",
                                            "Companionship and social support"
                                        ]
                                    },
                                    {
                                        title: "How We Deliver Care",
                                        icon: "⚡",
                                        items: [
                                            "Care plans created with the person and/or their representatives",
                                            "Respect for consent, confidentiality, and cultural needs",
                                            "Trained, vetted, and supervised staff (including DBS checks)",
                                            "Regular reviews and quality checks; CQC compliance"
                                        ]
                                    },
                                    {
                                        title: "Service Scope",
                                        icon: "🌟",
                                        items: [
                                            "Adults 18+, including older people and those with long-term conditions",
                                            "Visits scheduled to meet needs; emergency support subject to availability",
                                            "Operating hours: care visits arranged 7 days a week by agreement",
                                            "Complaints welcomed and addressed transparently; feedback drives improvement"
                                        ]
                                    }
                                ].map((section, idx) => (
                                    <div key={idx} className="bg-white/60 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-center mb-6">
                                            <span className="text-3xl mr-4">{section.icon}</span>
                                            <h3 className="text-2xl font-bold text-slate-800">{section.title}</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {section.items.map((item, itemIdx) => (
                                                <li key={itemIdx} className="flex items-start">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    <span className="text-slate-600 leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedCard>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedCard delay={1000}>
                        <div className="glass-morphism rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Ready to Experience Care Excellence?</h2>
                            <p className="text-xl text-slate-600 mb-8">Contact us today to learn how we can support you or your loved ones</p>
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Get Started Today
                            </button>
                        </div>
                    </AnimatedCard>
                </div>
            </section>
        </div>
    );
}

function ServicesPage() {

    const services = [
        {
            title: 'Personal Care',
            desc: 'Compassionate assistance with washing, dressing, and continence support',
            icon: Heart,
            color: 'from-red-500 to-rose-600',
            bgColor: 'from-red-50 to-rose-50',
            features: ['Bathing & hygiene', 'Dressing assistance', 'Continence care', 'Grooming support']
        },
        {
            title: 'Medication Assistance',
            desc: 'Safe medication management and reminders for peace of mind',
            icon: Shield,
            color: 'from-blue-500 to-indigo-600',
            bgColor: 'from-blue-50 to-indigo-50',
            features: ['Medication reminders', 'Safe administration', 'Prescription collection', 'Health monitoring']
        },
        {
            title: 'Mobility Support',
            desc: 'Professional transfer assistance and mobility aid guidance',
            icon: Users,
            color: 'from-emerald-500 to-indigo-600',
            bgColor: 'from-emerald-50 to-indigo-50',
            features: ['Transfer assistance', 'Walking support', 'Mobility equipment', 'Fall prevention']
        },
        {
            title: 'Meal Preparation',
            desc: 'Nutritious meal planning and preparation tailored to dietary needs',
            icon: Utensils,
            color: 'from-orange-500 to-amber-600',
            bgColor: 'from-orange-50 to-amber-50',
            features: ['Menu planning', 'Healthy cooking', 'Special diets', 'Hydration support']
        },
        {
            title: 'Household Tasks',
            desc: 'Light cleaning and maintenance support to keep homes comfortable',
            icon: Home,
            color: 'from-purple-500 to-violet-600',
            bgColor: 'from-purple-50 to-violet-50',
            features: ['Light housekeeping', 'Laundry service', 'Shopping assistance', 'Home organization']
        },
        {
            title: 'Companionship',
            desc: 'Meaningful social interaction and emotional support for wellbeing',
            icon: Star,
            color: 'from-cyan-500 to-blue-600',
            bgColor: 'from-cyan-50 to-blue-50',
            features: ['Social interaction', 'Emotional support', 'Activity engagement', 'Community connection']
        }
    ];



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-100 relative overflow-hidden">
            <style>{`
                @keyframes slideUpFade {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(180deg); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 30px rgba(20, 184, 166, 0.3); }
                    50% { box-shadow: 0 0 60px rgba(20, 184, 166, 0.6); }
                }
                @keyframes sparkle {
                    0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1) rotate(180deg); }
                }
                .glass-morphism {
                    backdrop-filter: blur(20px);
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }
                .service-card {
                    background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8));
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.2);
                }
            `}</style>

            {/* Animated Background Elements */}
            <FloatingElement className="w-80 h-80 bg-indigo-200 rounded-full opacity-20 -top-40 -right-40" delay={0} />
            <FloatingElement className="w-64 h-64 bg-blue-300 rounded-full opacity-15 top-1/4 -left-32" delay={1} />
            <FloatingElement className="w-96 h-96 bg-indigo-200 rounded-full opacity-10 bottom-0 right-0" delay={2} />
            <FloatingElement className="w-48 h-48 bg-cyan-300 rounded-full opacity-20 bottom-1/4 left-10" delay={1.5} />

            {/* Floating Care Icons */}
            <FloatingElement className="text-indigo-400 opacity-30 top-20 right-20" delay={0}>
                <Heart className="w-8 h-8" />
            </FloatingElement>
            <FloatingElement className="text-blue-400 opacity-30 top-40 left-20" delay={1}>
                <Shield className="w-6 h-6" />
            </FloatingElement>
            <FloatingElement className="text-purple-400 opacity-30 bottom-40 right-40" delay={2}>
                <Star className="w-10 h-10" />
            </FloatingElement>

            {/* Hero Section */}
            <section className="relative py-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedCard delay={0}>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                            <Sparkles className="w-4 h-4" />
                            Comprehensive Care Services
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent mb-6">
                            Our Care Services
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-blue-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            Comprehensive domiciliary care services designed to support independence
                            and enhance quality of life in familiar surroundings
                        </p>
                    </AnimatedCard>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <AnimatedCard key={service.title} delay={100 * index}>
                                    <div className="service-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer relative overflow-hidden">
                                        {/* Gradient Background Effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                        {/* Sparkle Effect */}
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Sparkles className="w-5 h-5 text-indigo-400" style={{animation: 'sparkle 2s ease-in-out infinite'}} />
                                        </div>

                                        <div className="relative z-10">
                                            <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                                                <IconComponent className="w-10 h-10 text-white" />
                                            </div>

                                            <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                                                {service.desc}
                                            </p>

                                            {/* Feature List - Appears on Hover */}
                                            <div className="space-y-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-48 transition-all duration-500 overflow-hidden">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center text-sm text-slate-600">
                                                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Learn More Button */}
                                            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                                <button className={`inline-flex items-center text-white bg-gradient-to-r ${service.color} px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300`}>
                                                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Future Services Section */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <AnimatedCard delay={600}>
                        <div className="glass-morphism rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <Clock className="w-4 h-4" />
                                    Coming Soon
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Expanding Our Care</h2>
                                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                    We're continuously expanding our services to better serve our community.
                                    Stay tuned for these exciting new offerings:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                    <div className="bg-white/60 rounded-2xl p-6 shadow-lg">
                                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                            <Heart className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2">Respite Care</h3>
                                        <p className="text-sm text-slate-600">Temporary relief for family caregivers</p>
                                    </div>

                                    <div className="bg-white/60 rounded-2xl p-6 shadow-lg">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2">Specialist Care</h3>
                                        <p className="text-sm text-slate-600">Specialized support for complex conditions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedCard delay={800}>
                        <div className="glass-morphism rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10"></div>
                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Ready to Get Started?</h2>
                                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                                    Contact us today to discuss your care needs and discover how we can support you
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Us Now
                                    </button>
                                    <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-indigo-500 hover:text-indigo-600 transform hover:-translate-y-1 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                        Request Assessment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>
            </section>
        </div>
    );
}

function WhyChooseUsPage() {
    return (
        <div className="animate-fadeIn">
            <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center animate-slideUp">
                        Why Choose Citizens Care?
                    </h1>

                    <div className="space-y-12">
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl animate-slideUp" style={{animationDelay: '0.2s'}}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Commitment to Quality</h2>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Our rigorous quality assurance processes ensure every aspect of care meets the highest
                                        standards. We continuously monitor, evaluate, and improve our services.
                                    </p>
                                    <ul className="space-y-3">
                                        {['CQC Regulated Services', 'Regular Quality Audits', 'Continuous Improvement'].map((item, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-100 rounded-2xl flex items-center justify-center">
                                    <Award className="w-24 h-24 text-blue-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl animate-slideUp" style={{animationDelay: '0.4s'}}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="order-2 lg:order-1 rounded-2xl">
                                        <img className="rounded-2xl shadow-md" src="https://i.postimg.cc/TPy4D7qj/woman-doing-occupational-therapy-session-with-psychologist.jpg" alt="Expert Staff Image"/>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Staff</h2>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Our care team consists of qualified, experienced professionals who undergo
                                        comprehensive training and continuous professional development.
                                    </p>
                                    <ul className="space-y-3">
                                        {['DBS Checked & Vetted', 'Ongoing Training Programs', 'Specialist Qualifications'].map((item, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function CareersPage() {
    const [, setScrollY] = useState<number>(0);
    const [activeJob, setActiveJob] = useState<number | null>(null);
    const [, setHoveredBenefit] = useState<number | null>(null);

    // Application modal state
    const [showApplication, setShowApplication] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        message: ''
    });

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openApplication = (position?: string) => {
        setFormData(prev => ({ ...prev, position: position || prev.position }));
        setShowApplication(true);
    };

    const closeApplication = () => {
        setShowApplication(false);
    };

    const handleSubmitApplication: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.fullName || !formData.email) {
            alert('Please provide your name and email.');
            return;
        }
        setSubmitting(true);
        // Simulate async send
        setTimeout(() => {
            setSubmitting(false);
            setShowApplication(false);
            // Reset form
            setFormData({ fullName: '', email: '', phone: '', position: '', message: '' });
            alert('Your application has been submitted.');
        }, 1500);
    };

    const benefits = [
        {
            icon: BookOpen,
            title: 'Comprehensive Training & Development',
            desc: 'Industry-leading training programs and continuous professional development',
            color: 'from-blue-500 to-indigo-600',
            bgColor: 'from-blue-50 to-indigo-50'
        },
        {
            icon: DollarSign,
            title: 'Competitive Salary & Benefits',
            desc: 'Above-market rates with comprehensive benefits package',
            color: 'from-emerald-500 to-indigo-600',
            bgColor: 'from-emerald-50 to-indigo-50'
        },
        {
            icon: Clock,
            title: 'Flexible Working Arrangements',
            desc: 'Work-life balance with flexible schedules and shift patterns',
            color: 'from-purple-500 to-violet-600',
            bgColor: 'from-purple-50 to-violet-50'
        },
        {
            icon: Users,
            title: 'Supportive Team Environment',
            desc: 'Join a caring, collaborative team that values your contribution',
            color: 'from-red-500 to-rose-600',
            bgColor: 'from-red-50 to-rose-50'
        },
        {
            icon: TrendingUp,
            title: 'Career Progression Opportunities',
            desc: 'Clear pathways for advancement and professional growth',
            color: 'from-orange-500 to-amber-600',
            bgColor: 'from-orange-50 to-amber-50'
        },
        {
            icon: Shield,
            title: 'Job Security & Stability',
            desc: 'Stable employment in an essential, growing industry',
            color: 'from-cyan-500 to-blue-600',
            bgColor: 'from-cyan-50 to-blue-50'
        }
    ];

    type Job = {
        title: string;
        type: string;
        salary: string;
        location: string;
        description: string;
        highlights: string[];
        requirements: string[];
        color: string;
        urgent?: boolean;
    };

    const jobs: Job[] = [];


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-red-100 relative overflow-hidden">
            <style>{`
                @keyframes slideUpFade {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(180deg); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.3); }
                    50% { box-shadow: 0 0 60px rgba(147, 51, 234, 0.6); }
                }
                @keyframes sparkle {
                    0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1) rotate(180deg); }
                }
                @keyframes shimmer {
                    0% { background-position: -200px 0; }
                    100% { background-position: 200px 0; }
                }
                .glass-morphism {
                    backdrop-filter: blur(20px);
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }
                .job-card {
                    background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85));
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255,255,255,0.2);
                }
                .urgent-badge {
                    background: linear-gradient(45deg, #ff6b6b, #ffa726);
                    animation: pulse 2s ease-in-out infinite;
                }
            `}</style>

            {/* Animated Background Elements */}
            <FloatingElement className="w-80 h-80 bg-purple-200 rounded-full opacity-20 -top-40 -right-40" delay={0} />
            <FloatingElement className="w-64 h-64 bg-red-300 rounded-full opacity-15 top-1/4 -left-32" delay={1} />
            <FloatingElement className="w-96 h-96 bg-indigo-200 rounded-full opacity-10 bottom-0 right-0" delay={2} />
            <FloatingElement className="w-48 h-48 bg-violet-300 rounded-full opacity-20 bottom-1/4 left-10" delay={1.5} />

            {/* Floating Career Icons */}
            <FloatingElement className="text-purple-400 opacity-30 top-20 right-20" delay={0}>
                <Heart className="w-8 h-8" />
            </FloatingElement>
            <FloatingElement className="text-red-400 opacity-30 top-40 left-20" delay={1}>
                <Users className="w-6 h-6" />
            </FloatingElement>
            <FloatingElement className="text-indigo-400 opacity-30 bottom-40 right-40" delay={2}>
                <Award className="w-10 h-10" />
            </FloatingElement>

            {/* Hero Section */}
            <section className="relative py-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedCard delay={0}>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                            <Sparkles className="w-4 h-4" />
                            Join Our Mission
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-purple-800 to-red-900 bg-clip-text text-transparent mb-6">
                            Join Our Care Team
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-red-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            Make a meaningful difference in people's lives while building a rewarding career
                            with excellent training and development opportunities
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onClick={() => openApplication()} className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-red-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                                <Zap className="w-5 h-5 mr-2" />
                                Apply Now
                            </button>
                            <button  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-purple-500 hover:text-purple-600 transform hover:-translate-y-1 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                                Learn More
                            </button>
                        </div>
                    </AnimatedCard>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <AnimatedCard delay={200}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Why Work With Us?</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-600 mx-auto rounded-full"></div>
                        </div>
                    </AnimatedCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <AnimatedCard key={benefit.title} delay={300 + (100 * index)}>
                                    <div
                                        className="glass-morphism rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group cursor-pointer relative overflow-hidden"
                                        onMouseEnter={() => setHoveredBenefit(index)}
                                        onMouseLeave={() => setHoveredBenefit(null)}
                                    >
                                        {/* Gradient Background Effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                        {/* Sparkle Effect */}
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Star className="w-5 h-5 text-yellow-400" style={{animation: 'sparkle 2s ease-in-out infinite'}} />
                                        </div>

                                        <div className="relative z-10">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900">
                                                {benefit.title}
                                            </h3>

                                            <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                                                {benefit.desc}
                                            </p>

                                            {/* Check mark appears on hover */}
                                            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                <div className="flex items-center text-blue-600">
                                                    <CheckCircle className="w-5 h-5 mr-2" />
                                                    <span className="text-sm font-medium">Included in your package</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedCard>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Current Opportunities */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <AnimatedCard delay={600}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Current Opportunities</h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                Join our growing team and make a real difference in people's lives
                            </p>
                        </div>
                    </AnimatedCard>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {jobs.map((job, index) => (
                            <AnimatedCard key={job.title} delay={700 + (100 * index)}>
                                <div
                                    className="job-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden"
                                    onMouseEnter={() => setActiveJob(index)}
                                    onMouseLeave={() => setActiveJob(null)}
                                >
                                    {/* Urgent Badge */}
                                    {job.urgent && (
                                        <div className="absolute top-4 right-4 urgent-badge text-white px-3 py-1 rounded-full text-xs font-bold">
                                            URGENT
                                        </div>
                                    )}

                                    {/* Job Header */}
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {job.type}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                                                <DollarSign className="w-4 h-4 mr-1" />
                                                {job.salary}
                                            </span>
                                            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {job.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Job Description */}
                                    <p className="text-slate-600 mb-6 leading-relaxed">{job.description}</p>

                                    {/* Job Highlights */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                                            <Target className="w-5 h-5 mr-2 text-purple-500" />
                                            Key Highlights
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {job.highlights.map((highlight, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Requirements - Show on Hover */}
                                    <div className={`transition-all duration-300 overflow-hidden ${activeJob === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <h4 className="font-semibold text-slate-800 mb-3">Requirements:</h4>
                                        <ul className="space-y-2 mb-6">
                                            {job.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-slate-600">
                                                    <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Apply Button */}
                                    <button onClick={() => openApplication(job.title)} className={`w-full bg-gradient-to-r ${job.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 flex items-center justify-center`}>
                                        Apply for this role
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <AnimatedCard delay={1000}>
                        <div className="glass-morphism rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-red-500/10"></div>
                            <div className="relative z-10 text-center">
                                <h2 className="text-4xl font-bold text-slate-800 mb-6">Simple Application Process</h2>
                                <p className="text-lg text-slate-600 mb-8">Getting started with us is easy - follow these simple steps</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { icon: Upload, title: "1. Apply Online", desc: "Submit your application and CV through our portal" },
                                        { icon: Phone, title: "2. Initial Call", desc: "Brief chat to discuss your experience and aspirations" },
                                        { icon: CheckCircle, title: "3. Start Working", desc: "Complete training and begin making a difference" }
                                    ].map((step, idx) => (
                                        <div key={idx} className="bg-white/60 rounded-2xl p-6 shadow-lg">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                                <step.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
                                            <p className="text-sm text-slate-600">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                                    <button onClick={() => openApplication()} className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-red-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Start Application
                                    </button>
                                    <a href="tel:+441234567890" className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-purple-500 hover:text-purple-600 transform hover:-translate-y-1 transition-all duration-300 bg-white/80 backdrop-blur-sm flex items-center justify-center">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call Us First
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>
            </section>
            {showApplication && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/50" onClick={closeApplication}></div>
                    <div className="relative bg-white w-full max-w-lg mx-4 rounded-2xl shadow-2xl p-6 md:p-8 z-10">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-slate-800">Application Form</h3>
                            <button onClick={closeApplication} className="text-slate-500 hover:text-slate-700">✕</button>
                        </div>
                        <form onSubmit={handleSubmitApplication} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="jane@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="+44 1234 567890"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Position (optional)</label>
                                <input
                                    type="text"
                                    value={formData.position}
                                    onChange={e => setFormData(prev => ({ ...prev, position: e.target.value }))}
                                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="e.g., Care Assistant"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
                                    placeholder="Tell us briefly about your experience and availability"
                                />
                            </div>
                            <div className="flex items-center justify-end gap-3 pt-2">
                                <button type="button" onClick={closeApplication} className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">Cancel</button>
                                <button type="submit" disabled={submitting} className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 disabled:opacity-60">
                                    {submitting ? 'Submitting…' : 'Submit Application'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

function ResourcesPage() {
    const [, setScrollY] = useState<number>(0);
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [activeCategory, setActiveCategory] = useState<string>('all');

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const faqs = [
        {
            question: "How do I arrange care?",
            answer: "Contact us for a free assessment and care plan consultation. Our experienced team will work with you to understand your needs and create a personalized care plan that fits your lifestyle and preferences.",
            category: "getting-started",
            icon: Phone
        },
        {
            question: "What areas do you cover?",
            answer: "We provide comprehensive care services across the greater metropolitan area, including surrounding suburbs and rural communities. Contact us to confirm coverage in your specific location.",
            category: "coverage",
            icon: MapPin
        },
        {
            question: "Are your staff trained and qualified?",
            answer: "All our care staff are fully trained, DBS checked, and regularly updated with the latest care practices. They receive ongoing professional development and are supervised by experienced care coordinators.",
            category: "staff",
            icon: Shield
        },
        {
            question: "What does personal care include?",
            answer: "Personal care includes assistance with washing, bathing, dressing, continence support, mobility assistance, and any other daily living activities you may need help with.",
            category: "services",
            icon: Heart
        },
        {
            question: "How much do your services cost?",
            answer: "Care costs vary depending on your individual needs and the level of support required. We offer competitive rates and can discuss funding options including self-pay and local authority arrangements.",
            category: "pricing",
            icon: FileText
        },
        {
            question: "Can I choose my care worker?",
            answer: "Yes, we believe in matching you with carers who suit your personality and preferences. We'll introduce you to potential carers and ensure you're comfortable with your care team.",
            category: "staff",
            icon: Users
        }
    ];

    const usefulLinks = [
        {
            title: 'Care Quality Commission (CQC)',
            desc: 'Official care regulator for health and social care',
            url: 'https://cqc.org.uk',
            category: 'regulatory',
            icon: Shield,
            color: 'from-blue-500 to-indigo-600'
        },
        {
            title: 'NHS Care Services',
            desc: 'Comprehensive health service information and guidance',
            url: 'https://nhs.uk',
            category: 'health',
            icon: Heart,
            color: 'from-red-500 to-pink-600'
        },
        {
            title: 'Age UK',
            desc: 'Support, advice and services for older adults',
            url: 'https://ageuk.org.uk',
            category: 'support',
            icon: Users,
            color: 'from-blue-500 to-emerald-600'
        },
        {
            title: 'Citizens Advice',
            desc: 'Free, confidential advice and guidance',
            url: 'https://citizensadvice.org.uk',
            category: 'advice',
            icon: Info,
            color: 'from-purple-500 to-violet-600'
        },
        {
            title: 'Carers UK',
            desc: 'Support and information for unpaid carers',
            url: 'https://carersuk.org',
            category: 'support',
            icon: Heart,
            color: 'from-orange-500 to-amber-600'
        },
    ];


    const careSteps = [
        {
            step: 1,
            title: "Initial Contact",
            desc: "Contact us to discuss your needs and ask any questions",
            icon: Phone,
            color: "from-blue-500 to-indigo-600"
        },
        {
            step: 2,
            title: "Free Assessment",
            desc: "We arrange a comprehensive, no-obligation care assessment",
            icon: ClipboardCheck,
            color: "from-blue-500 to-emerald-600"
        },
        {
            step: 3,
            title: "Care Planning",
            desc: "Together we create a person-centred care plan and schedule",
            icon: FileText,
            color: "from-purple-500 to-violet-600"
        },
        {
            step: 4,
            title: "Care Begins",
            desc: "Your trained carers begin visits with regular reviews and adjustments",
            icon: Heart,
            color: "from-pink-500 to-rose-600"
        }
    ];

    const filteredFAQs = faqs.filter(faq =>
        (activeCategory === 'all' || faq.category === activeCategory) &&
        (searchTerm === '' || faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            <style>{`
                @keyframes slideUpFade {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(180deg); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 30px rgba(20, 184, 166, 0.3); }
                    50% { box-shadow: 0 0 60px rgba(20, 184, 166, 0.6); }
                }
                @keyframes sparkle {
                    0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
                    50% { opacity: 1; transform: scale(1) rotate(180deg); }
                }
                .glass-morphism {
                    backdrop-filter: blur(20px);
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                }
                .resource-card {
                    background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85));
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255,255,255,0.2);
                }
                .faq-item {
                    transition: all 0.3s ease;
                }
                .faq-item:hover {
                    transform: translateX(8px);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
                }
            `}</style>

            {/* Animated Background Elements */}
            <FloatingElement className="w-80 h-80 bg-blue-200 rounded-full opacity-20 -top-40 -right-40" delay={0} />
            <FloatingElement className="w-64 h-64 bg-indigo-300 rounded-full opacity-15 top-1/4 -left-32" delay={1} />
            <FloatingElement className="w-96 h-96 bg-emerald-200 rounded-full opacity-10 bottom-0 right-0" delay={2} />
            <FloatingElement className="w-48 h-48 bg-cyan-300 rounded-full opacity-20 bottom-1/4 left-10" delay={1.5} />

            {/* Floating Resource Icons */}
            <FloatingElement className="text-blue-400 opacity-30 top-20 right-20" delay={0}>
                <BookOpen className="w-8 h-8" />
            </FloatingElement>
            <FloatingElement className="text-indigo-400 opacity-30 top-40 left-20" delay={1}>
                <HelpCircle className="w-6 h-6" />
            </FloatingElement>
            <FloatingElement className="text-emerald-400 opacity-30 bottom-40 right-40" delay={2}>
                <Lightbulb className="w-10 h-10" />
            </FloatingElement>

            {/* Hero Section */}
            <section className="relative py-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <AnimatedCard delay={0}>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                            <Sparkles className="w-4 h-4" />
                            Knowledge & Support Hub
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">
                            Helpful Resources
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            Everything you need to know about care services, support options, and getting started with Citizens Care
                        </p>
                    </AnimatedCard>
                </div>
            </section>

            {/* FAQ Search and Filters */}
            <section className="py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <AnimatedCard delay={200}>
                        <div className="glass-morphism rounded-2xl p-6 shadow-xl mb-8">
                            <div className="flex flex-col lg:flex-row gap-4 items-center">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search frequently asked questions..."
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {['all', 'getting-started', 'services', 'staff', 'pricing', 'coverage'].map(category => (
                                        <button
                                            key={category}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                                activeCategory === category
                                                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                                                    : 'bg-white/80 text-slate-600 hover:bg-blue-50 border border-gray-200'
                                            }`}
                                            onClick={() => setActiveCategory(category)}
                                        >
                                            {category === 'all' ? 'All' : category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* FAQ Cards */}
                        <div>
                            <AnimatedCard delay={300}>
                                <div className="glass-morphism rounded-2xl p-8 shadow-xl">
                                    <div className="flex items-center mb-8">
                                        <HelpCircle className="w-8 h-8 text-blue-500 mr-3" />
                                        <h2 className="text-3xl font-bold text-slate-800">Frequently Asked Questions</h2>
                                    </div>

                                    <div className="space-y-4">
                                        {filteredFAQs.map((faq, index) => {
                                            const IconComponent = faq.icon;
                                            return (
                                                <div
                                                    key={index}
                                                    className="faq-item resource-card rounded-xl p-6 shadow-lg cursor-pointer"
                                                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                                                                <IconComponent className="w-5 h-5 text-white" />
                                                            </div>
                                                            <h4 className="font-bold text-slate-800 text-lg">{faq.question}</h4>
                                                        </div>
                                                        <div className="transition-transform duration-300">
                                                            {expandedFAQ === index ?
                                                                <ChevronDown className="w-5 h-5 text-blue-500" /> :
                                                                <ChevronRight className="w-5 h-5 text-gray-400" />
                                                            }
                                                        </div>
                                                    </div>

                                                    <div className={`transition-all duration-300 overflow-hidden ${
                                                        expandedFAQ === index ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                                    }`}>
                                                        <p className="text-slate-600 leading-relaxed pl-14">{faq.answer}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </AnimatedCard>
                        </div>

                        {/* Useful Links */}
                        <div>
                            <AnimatedCard delay={400}>
                                <div className="glass-morphism rounded-2xl p-8 shadow-xl">
                                    <div className="flex items-center mb-8">
                                        <Globe className="w-8 h-8 text-indigo-500 mr-3" />
                                        <h2 className="text-3xl font-bold text-slate-800">Useful Links</h2>
                                    </div>

                                    <div className="space-y-4">
                                        {usefulLinks.map((link, index) => {
                                            const IconComponent = link.icon;
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => window.open(link.url, '_blank')}
                                                    className="resource-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                                                <IconComponent className="w-6 h-6 text-white" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-slate-800 text-lg group-hover:text-slate-900">{link.title}</h4>
                                                                <p className="text-slate-600 text-sm group-hover:text-slate-700">{link.desc}</p>
                                                            </div>
                                                        </div>
                                                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </AnimatedCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloadable Resources */}
            {/*<section className="py-16 px-4">*/}
            {/*    <div className="max-w-7xl mx-auto">*/}
            {/*        <AnimatedCard delay={600}>*/}
            {/*            <div className="text-center mb-12">*/}
            {/*                <h2 className="text-4xl font-bold text-slate-800 mb-6">Download Resources</h2>*/}
            {/*                <p className="text-xl text-slate-600">Helpful guides and checklists to support your care journey</p>*/}
            {/*            </div>*/}
            {/*        </AnimatedCard>*/}

            {/*        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">*/}
            {/*            {resources.map((resource, index) => {*/}
            {/*                const IconComponent = resource.icon;*/}
            {/*                return (*/}
            {/*                    <AnimatedCard key={index} delay={700 + (100 * index)}>*/}
            {/*                        <div className="resource-card rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer">*/}
            {/*                            <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>*/}
            {/*                                <IconComponent className="w-7 h-7 text-white" />*/}
            {/*                            </div>*/}
            {/*                            <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">{resource.title}</h3>*/}
            {/*                            <p className="text-slate-600 text-center mb-4 text-sm leading-relaxed">{resource.desc}</p>*/}
            {/*                            <div className="text-center">*/}
            {/*                                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium mb-4">*/}
            {/*                                    {resource.type}*/}
            {/*                                </span>*/}
            {/*                                <button className={`w-full bg-gradient-to-r ${resource.color} text-white py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center`}>*/}
            {/*                                    <Download className="w-4 h-4 mr-2" />*/}
            {/*                                    Download*/}
            {/*                                </button>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </AnimatedCard>*/}
            {/*                );*/}
            {/*            })}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Care Process Guide */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <AnimatedCard delay={800}>
                        <div className="glass-morphism rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500"></div>

                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">How to Arrange Care</h2>
                                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                                    Our simple, straightforward process makes getting the care you need easy and stress-free
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {careSteps.map((step, index) => {
                                    const IconComponent = step.icon;
                                    return (
                                        <div key={index} className="text-center relative">
                                            {/* Connection Line */}
                                            {index < careSteps.length - 1 && (
                                                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300"></div>
                                            )}

                                            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-bold mb-4">
                                                Step {step.step}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-12 text-center">
                                <div className="glass-morphism rounded-2xl p-6 inline-block">
                                    <p className="text-lg text-slate-700 mb-4">Ready to get started or have questions?</p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <div className="flex items-center text-slate-600">
                                            <Phone className="w-5 h-5 mr-2 text-blue-500" />
                                            <span>Call: <span className="font-bold text-blue-600">00 4477 34180 131</span></span>
                                        </div>
                                        <div className="flex items-center text-slate-600">
                                            <Mail className="w-5 h-5 mr-2 text-indigo-500" />
                                            <span>Email: <span className="font-bold text-indigo-600">admin@citizens-care.co.uk</span></span>
                                        </div>
                                    </div>
                                    <button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto">
                                        Start Your Care Journey
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>
            </section>
        </div>
    );
}


function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-rose-50/20 overflow-hidden">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-br from-rose-200/30 to-pink-300/20 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
                <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-300/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

                {/* Floating care icons */}
                <div className="absolute top-1/4 left-1/4 animate-float">
                    <Heart className="w-8 h-8 text-rose-300/40" />
                </div>
                <div className="absolute top-3/4 right-1/3 animate-float" style={{animationDelay: '2s'}}>
                    <Shield className="w-10 h-10 text-blue-300/40" />
                </div>
                <div className="absolute top-1/2 right-1/4 animate-float" style={{animationDelay: '1s'}}>
                    <Users className="w-6 h-6 text-emerald-300/40" />
                </div>
            </div>

            <section className="relative py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Header */}
                    <div className="text-center mb-20 animate-fadeIn">
                        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full shadow-lg">
                            <Heart className="w-6 h-6 text-rose-500" />
                            <span className="text-slate-700 font-medium">Compassionate Care</span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-rose-700 bg-clip-text text-transparent mb-6 animate-slideUp">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-slideUp" style={{animationDelay: '0.2s'}}>
                            We're here to support you every step of the way. Reach out to discover how we can provide exceptional care for your loved ones.
                        </p>
                    </div>

                    {/* Contact Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {/* Phone Card */}
                        <div className="group relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slideUp border border-white/50" style={{animationDelay: '0.3s'}}>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">Call Us</h3>
                                <p className="text-slate-600 mb-4">Available 24/7 for emergency support</p>
                                <p className="text-xl font-semibold text-blue-600">00 4477 34180 131</p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slideUp border border-white/50" style={{animationDelay: '0.4s'}}>
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">Email Us</h3>
                                <p className="text-slate-600 mb-4">We'll respond within 24 hours</p>
                                <p className="text-lg font-semibold text-rose-600 break-all">admin@citizens-care.co.uk</p>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="group relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slideUp md:col-span-2 lg:col-span-1 border border-white/50" style={{animationDelay: '0.5s'}}>
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-3">Visit Us</h3>
                                <p className="text-slate-600 mb-4">Our welcoming care center</p>
                                <p className="text-slate-700 font-medium leading-relaxed">575-599 Maxted Road<br />Imex Centre, Biz Space<br />Hemel Hempstead HP27DX</p>
                            </div>
                        </div>
                    </div>

                    {/* Care Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-2xl p-6 animate-slideUp" style={{animationDelay: '0.6s'}}>
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-xl flex items-center justify-center">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800">24/7 Support</h4>
                                <p className="text-slate-600 text-sm">Always here when you need us</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-2xl p-6 animate-slideUp" style={{animationDelay: '0.7s'}}>
                            <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-pink-600/20 rounded-xl flex items-center justify-center">
                                <Heart className="w-6 h-6 text-rose-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800">Compassionate Care</h4>
                                <p className="text-slate-600 text-sm">Treating everyone like family</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm rounded-2xl p-6 animate-slideUp" style={{animationDelay: '0.8s'}}>
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-xl flex items-center justify-center">
                                <Shield className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800">Quality Assured</h4>
                                <p className="text-slate-600 text-sm">CQC registered & regulated</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center animate-slideUp" style={{animationDelay: '0.9s'}}>
                        <div className="inline-block relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-rose-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <button onClick={() => window.open("mailto:admin@citizens-care.co.uk", '')} className="relative bg-gradient-to-r from-blue-600 to-rose-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-xl">
                                Request a Free Care Assessment
                            </button>
                        </div>
                        <p className="text-slate-600 mt-4 text-sm">No obligation • Professional assessment • Tailored care plans</p>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }
                
                .animate-slideUp {
                    animation: slideUp 0.8s ease-out forwards;
                }
                
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}


function Footer({ onNavigate }: { onNavigate: (route: Route) => void }) {
    const [, setHoveredSocial] = useState<string | null>(null);


    const socialLinks = [
        { name: 'Facebook', icon: Facebook, color: 'hover:text-blue-400', url: '#' },
        { name: 'Twitter', icon: Twitter, color: 'hover:text-sky-400', url: '#' },
        { name: 'Instagram', icon: Instagram, color: 'hover:text-pink-400', url: '#' },
        { name: 'LinkedIn', icon: Linkedin, color: 'hover:text-blue-500', url: '#' }
    ];

    const quickLinks = [
        { title: 'Care Assessment', desc: 'Free evaluation of your needs', icon: CheckCircle },
        { title: 'Emergency Support', desc: '24/7 care coordination', icon: Clock },
        { title: 'CQC Reports', desc: 'View our quality ratings', icon: Award },
        { title: 'Client Portal', desc: 'Access your care plan', icon: Globe }
    ];

    const certifications = [
        { name: 'CQC Registered', desc: 'Care Quality Commission', icon: Shield },
        { name: 'DBS Checked', desc: 'All staff verified', icon: Users },
        { name: 'Insured & Bonded', desc: 'Fully protected service', icon: Heart },
        { name: 'ISO Certified', desc: 'Quality management', icon: Star }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 overflow-hidden">
            <style>{`
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(180deg); }
                }
                @keyframes shimmer {
                    0% { background-position: -200px 0; }
                    100% { background-position: 200px 0; }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
                    50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
                }
                .glass-footer {
                    backdrop-filter: blur(10px);
                    background: rgba(15, 23, 42, 0.95);
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                .social-glow {
                    transition: all 0.3s ease;
                }
                .social-glow:hover {
                    transform: translateY(-2px) scale(1.1);
                    filter: drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4));
                }
                .newsletter-input {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                }
                .newsletter-input:focus {
                    background: rgba(255, 255, 255, 0.15);
                    border-color: rgba(59, 130, 246, 0.5);
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }
            `}</style>

            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-64 h-64 bg-blue-500 rounded-full opacity-5 -top-32 -left-32" style={{animation: 'float-gentle 8s ease-in-out infinite'}}></div>
                <div className="absolute w-48 h-48 bg-purple-500 rounded-full opacity-5 top-1/4 -right-24" style={{animation: 'float-gentle 10s ease-in-out infinite', animationDelay: '2s'}}></div>
                <div className="absolute w-80 h-80 bg-teal-500 rounded-full opacity-5 -bottom-40 left-1/4" style={{animation: 'float-gentle 12s ease-in-out infinite', animationDelay: '4s'}}></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10">
                {/* Top Section with Newsletter */}
                <div className="glass-footer py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                        {/* Main Footer Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Brand Section */}
                            <div className="lg:col-span-1">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-2xl font-bold text-white">Citizens Care</span>
                                        <div className="flex items-center mt-1">
                                            <Sparkles className="w-4 h-4 text-yellow-400 mr-1" />
                                            <span className="text-sm text-gray-400">Excellence in Care</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Providing compassionate, professional domiciliary care services that enable independence and dignity in the comfort of home.
                                </p>

                                {/* Certifications */}
                                <div className="grid grid-cols-2 gap-3">
                                    {certifications.map((cert, index) => {
                                        const IconComponent = cert.icon;
                                        return (
                                            <div key={index} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 group">
                                                <div className="flex items-center space-x-2">
                                                    <IconComponent className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                                    <span className="text-xs font-medium text-gray-300 group-hover:text-white">{cert.name}</span>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">{cert.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Quick Navigation */}
                            <div>
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <Globe className="w-5 h-5 mr-2 text-blue-400" />
                                    Navigate
                                </h4>
                                <div className="space-y-3">
                                    {NAV.map(n => (
                                        <button
                                            key={n.path}
                                            className="flex items-center text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 group w-full text-left"
                                            onClick={() => onNavigate(n.path as Route)}
                                        >
                                            <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="group-hover:font-medium">{n.label}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Quick Links */}
                                <div className="mt-8">
                                    <h5 className="text-sm font-semibold text-gray-300 mb-4">Quick Access</h5>
                                    <div className="space-y-2">
                                        {quickLinks.slice(0, 2).map((link, index) => {
                                            const IconComponent = link.icon;
                                            return (
                                                <a key={index} href="#" className="flex items-center text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm group">
                                                    <IconComponent className="w-3 h-3 mr-2 group-hover:text-blue-400" />
                                                    <span>{link.title}</span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Services & Support */}
                            <div>
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <Heart className="w-5 h-5 mr-2 text-pink-400" />
                                    Our Services
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        'Personal Care',
                                        'Medication Support',
                                        'Mobility Assistance',
                                        'Companionship',
                                        'Household Support',
                                        'Respite Care'
                                    ].map((service, index) => (
                                        <div key={index} className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group cursor-pointer">
                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                                            <span className="text-sm group-hover:font-medium">{service}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-white/10">
                                    <div className="flex items-center mb-2">
                                        <Clock className="w-4 h-4 text-blue-400 mr-2" />
                                        <span className="text-sm font-semibold text-white">24/7 Support</span>
                                    </div>
                                    <p className="text-xs text-gray-400">Emergency coordination and support available around the clock</p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <Phone className="w-5 h-5 mr-2 text-green-400" />
                                    Get in Touch
                                </h4>

                                <div className="space-y-4">
                                    <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                                <Phone className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">Call Us</p>
                                                <p className="text-white font-semibold">00 4477 34180 131</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500">Available 7 days a week</p>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                                                <Mail className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">Email Us</p>
                                                <p className="text-white font-semibold text-sm">admin@citizens-care.co.uk</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500">We respond within 2 hours</p>
                                    </div>

                                    <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                                <MapPin className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 mb-1">Visit Us</p>
                                                <p className="text-white font-medium text-sm leading-relaxed">
                                                    575-599 Maxted Road,<br />
                                                    Imex Centre, Biz Space<br />
                                                    Hemel Hempstead, HP27DX
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="mt-6">
                                    <h5 className="text-sm font-semibold text-gray-300 mb-4">Follow Us</h5>
                                    <div className="flex space-x-3">
                                        {socialLinks.map((social, index) => {
                                            const IconComponent = social.icon;
                                            return (
                                                <a
                                                    key={index}
                                                    href={social.url}
                                                    className={`w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 social-glow group`}
                                                    onMouseEnter={() => setHoveredSocial(social.name)}
                                                    onMouseLeave={() => setHoveredSocial(null)}
                                                >
                                                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-500">
                                <span>© {new Date().getFullYear()} Citizens Care Ltd. All rights reserved.</span>
                                <div className="flex space-x-4">
                                    {/*<a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>*/}
                                    {/*<a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>*/}
                                    {/*<a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>*/}
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <Shield className="w-4 h-4 text-green-400" />
                                    <span>CQC Registered</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <Award className="w-4 h-4 text-yellow-400" />
                                    <span>ISO Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Routing and App
function getRouteFromHash(): Route {
    const raw = (typeof window !== 'undefined' ? window.location.hash.replace(/^#\/?/, '') : '') as Route;
    const valid = NAV.map(n => n.path) as unknown as Route[];
    return valid.includes(raw) ? raw : '';
}

function App() {
    const [route, setRoute] = useState<Route>(getRouteFromHash());
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const onHashChange = () => setRoute(getRouteFromHash());
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    const navigate = (r: Route) => {
        if (typeof window !== 'undefined') {
            window.location.hash = r ? `#/${r}` : '#/';
        }
        setRoute(r);
    };

    useEffect(() => {
        setLoading(true);
        const id = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(id);
    }, [route]);

    const renderPage = () => {
        switch (route) {
            case 'about':
                return <AboutPage />;
            case 'services':
                return <ServicesPage />;
            case 'why-choose-us':
                return <WhyChooseUsPage />;
            case 'careers':
                return <CareersPage />;
            case 'resources':
                return <ResourcesPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage onNavigate={navigate} />;
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {loading && <LoadingSpinner />}
            <Header route={route} onRouteChange={navigate} />
            <main>{renderPage()}</main>
            <Footer onNavigate={navigate} />
        </div>
    );
}

export default App;