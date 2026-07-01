import { useState, useEffect, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Copy, 
  Check, 
  ArrowUp,
  ArrowUpRight 
} from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [state, handleFormspreeSubmit, resetFormspree] = useForm('xqevyprw');
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);

  // Hook into successful Formspree submission to log locally
  useEffect(() => {
    if (state.succeeded) {
      const previousSubmissions = JSON.parse(localStorage.getItem('marygrace_contact_entries') || '[]');
      const newEntry = {
        name: formData.name || 'Anonymous',
        email: formData.email || 'unknown@example.com',
        message: formData.message || 'No message content',
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('marygrace_contact_entries', JSON.stringify([...previousSubmissions, newEntry]));
      setFormData({ name: '', email: '', message: '' });
    }
  }, [state.succeeded]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    await handleFormspreeSubmit(e);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0A0A0A] border-t border-[#262626] pt-20 pb-12 relative overflow-hidden">
      {/* Decorative Blur Background Glows */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#14B8A6]/4 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-[#14B8A6]/3 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 items-start">
          
          {/* Left Column: Get In Touch Description & Direct Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-widest uppercase text-[#14B8A6] mb-3">
                Connect With Me
              </span>
              <h2 className="text-3xl font-bold font-display text-[#F5F5F5] tracking-tight">
                Get In <span className="text-[#14B8A6]">Touch</span>
              </h2>
              <p className="text-sm text-[#9CA3AF] mt-3 leading-relaxed font-sans">
                Have a project in mind or need executive administrative operations support? Let's discuss how my 5 solid years of expertise can optimize your brand.
              </p>
              <div className="w-12 h-[2px] bg-[#14B8A6] mt-4"></div>
            </div>

            <div className="space-y-4 pt-4">
              
              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-[#121212] border border-[#14B8A6]/35 flex items-center justify-between group hover:border-[#14B8A6] transition-colors duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono text-[#9CA3AF] tracking-widest uppercase block">
                      Call / WhatsApp
                    </span>
                    <a 
                      href="tel:+639984757817"
                      className="text-xs sm:text-sm font-semibold text-[#F5F5F5] hover:text-[#14B8A6] transition-colors block"
                    >
                      +63 998 475 7817
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+63 998 475 7817', 'phone')}
                  className="text-[#9CA3AF] hover:text-[#14B8A6] p-1.5 focus:outline-none transition-colors"
                  title="Copy to clipboard"
                  id="footer-copy-phone-btn"
                >
                  {copiedText === 'phone' ? <Check className="w-4 h-4 text-[#14B8A6]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-[#121212] border border-[#14B8A6]/35 flex items-center justify-between group hover:border-[#14B8A6] transition-colors duration-300">
                <div className="flex items-center space-x-4 overflow-hidden">
                  <div className="p-2.5 rounded bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/10 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[9px] font-mono text-[#9CA3AF] tracking-widest uppercase block">
                      Email Address
                    </span>
                    <a 
                      href="mailto:marygracebelangel26@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-[#F5F5F5] hover:text-[#14B8A6] transition-colors block truncate"
                    >
                      marygracebelangel26@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('marygracebelangel26@gmail.com', 'email')}
                  className="text-[#9CA3AF] hover:text-[#14B8A6] p-1.5 focus:outline-none transition-colors shrink-0"
                  title="Copy to clipboard"
                  id="footer-copy-email-btn"
                >
                  {copiedText === 'email' ? <Check className="w-4 h-4 text-[#14B8A6]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-[#121212] border border-[#14B8A6]/35 flex items-center space-x-4 hover:border-[#14B8A6] transition-colors duration-300">
                <div className="p-2.5 rounded bg-[#14B8A6]/10 text-[#14B8A6] border border-[#14B8A6]/10 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-[#9CA3AF] tracking-widest uppercase block">
                    Location Base
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#F5F5F5]">
                    Toril, Davao City, Philippines (GMT+8)
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form Card */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#222222] p-6 sm:p-8 rounded-2xl shadow-xl hover:border-[#14B8A6]/20 transition-all duration-300">
            {state.succeeded ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6] shadow-lg">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-[#F5F5F5]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md leading-relaxed">
                    Thank you for reaching out! Your message has been submitted to my Formspree inbox and saved locally. I will review and respond to your inquiry within 24 hours.
                  </p>
                </div>
                <button
                  onClick={resetFormspree}
                  className="px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#14B8A6] hover:bg-[#14B8A6]/10 border border-[#14B8A6] hover:border-[#14B8A6] rounded-xl transition-all focus:outline-none cursor-pointer"
                  id="footer-reset-form-btn"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-bold font-display text-[#F5F5F5]">
                  Send A Direct <span className="text-[#14B8A6]">Message</span>
                </h3>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="footer-name" className="text-[9px] font-mono tracking-widest uppercase text-[#9CA3AF]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="footer-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g., Vanessa Barrington"
                    disabled={state.submitting}
                    className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] px-4 py-3 rounded-xl text-xs sm:text-sm text-[#F5F5F5] placeholder-[#555] transition-all focus:outline-none"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-[#14B8A6] text-[10px] font-mono mt-1" />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="footer-email" className="text-[9px] font-mono tracking-widest uppercase text-[#9CA3AF]">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="footer-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    disabled={state.submitting}
                    className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] px-4 py-3 rounded-xl text-xs sm:text-sm text-[#F5F5F5] placeholder-[#555] transition-all focus:outline-none"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[#14B8A6] text-[10px] font-mono mt-1" />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="footer-message" className="text-[9px] font-mono tracking-widest uppercase text-[#9CA3AF]">
                    Project Specifications / Brief *
                  </label>
                  <textarea
                    id="footer-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your SMM goals, lead gen parameters, or required VA assistant schedules..."
                    disabled={state.submitting}
                    className="w-full bg-[#0A0A0A] border border-[#222222] focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] px-4 py-3 rounded-xl text-xs sm:text-sm text-[#F5F5F5] placeholder-[#555] transition-all focus:outline-none resize-none"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-[#14B8A6] text-[10px] font-mono mt-1" />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  id="footer-submit-contact-btn"
                  className="w-full inline-flex items-center justify-center py-3 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] bg-[#14B8A6] border border-[#14B8A6] hover:bg-[#0FB9B1] hover:border-[#0FB9B1] disabled:bg-[#14B8A6]/40 disabled:text-[#0A0A0A]/50 rounded-xl transition-all duration-300 font-display shadow-md focus:outline-none cursor-pointer"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 w-4 h-4" />
                      Dispatching Strategy Brief...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-3.5 h-3.5" />
                      Submit Strategy Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Separator Divider */}
        <div className="w-full h-[1px] bg-[#1A1A1A] my-10"></div>

        {/* Bottom Credits & Navigation Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Brand credit */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <p className="text-xs text-[#F5F5F5] font-display font-medium">
              © {new Date().getFullYear()} Mary Grace Belangel. All Rights Reserved.
            </p>
            <p className="text-[10px] text-[#9CA3AF] font-mono tracking-wider">
              Premium Virtual Support & Social Media Excellence
            </p>
          </div>

          {/* Center: Quick navigation links */}
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-[10px] font-mono text-[#9CA3AF]">
            <a href="#home" className="hover:text-[#14B8A6] transition-colors">Home</a>
            <span>/</span>
            <a href="#about" className="hover:text-[#14B8A6] transition-colors">About</a>
            <span>/</span>
            <a href="#experience" className="hover:text-[#14B8A6] transition-colors">Experience</a>
            <span>/</span>
            <a href="#portfolio" className="hover:text-[#14B8A6] transition-colors">Portfolio</a>
            <span>/</span>
            <a href="#workflow" className="hover:text-[#14B8A6] transition-colors">Workflow</a>
            <span>/</span>
            <a href="#tools" className="hover:text-[#14B8A6] transition-colors">Tools</a>
            <span>/</span>
            <a href="#education" className="hover:text-[#14B8A6] transition-colors">Education</a>
          </div>

          {/* Right Side: Scroll to top action */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#121212] border border-[#14B8A6] hover:border-[#14B8A6] text-[#9CA3AF] hover:text-[#14B8A6] rounded-full transition-all focus:outline-none cursor-pointer group shadow-sm"
            title="Scroll to top"
            aria-label="Back to top"
            id="footer-back-to-top-btn"
          >
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
}
