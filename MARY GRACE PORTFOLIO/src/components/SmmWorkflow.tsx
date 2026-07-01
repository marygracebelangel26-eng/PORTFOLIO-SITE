import { motion } from 'motion/react';
import { 
  PhoneCall, 
  FileText, 
  FileCheck, 
  LineChart, 
  FolderOpen, 
  Palette, 
  ThumbsUp, 
  Send,
  ArrowUpRight 
} from 'lucide-react';

export default function SmmWorkflow() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We start with a conversation to understand your brand, goals, and challenges, so I know exactly how to support you.',
      icon: PhoneCall,
      accent: 'from-[#14B8A6]/20 to-[#14B8A6]/5'
    },
    {
      number: '02',
      title: 'Proposal & Onboarding Packet',
      description: 'I send over a clear packet outlining scope, deliverables, and next steps, so expectations are aligned from day one.',
      icon: FileText,
      accent: 'from-[#3B82F6]/20 to-[#3B82F6]/5'
    },
    {
      number: '03',
      title: 'Contract Signing',
      description: 'We formalize the partnership with a signed agreement, protecting both of us and setting a professional foundation.',
      icon: FileCheck,
      accent: 'from-[#8B5CF6]/20 to-[#8B5CF6]/5'
    },
    {
      number: '04',
      title: 'Research & Market Analysis',
      description: 'I study your industry, competitors, and audience to build a content strategy grounded in real data, not guesswork.',
      icon: LineChart,
      accent: 'from-[#EC4899]/20 to-[#EC4899]/5'
    },
    {
      number: '05',
      title: 'Organizing the Content Library',
      description: 'I set up an organized system for assets, captions, and content calendars, so everything stays structured and easy to manage.',
      icon: FolderOpen,
      accent: 'from-[#10B981]/20 to-[#10B981]/5'
    },
    {
      number: '06',
      title: 'Content Creation',
      description: 'I design and write content aligned with your brand voice and strategy.',
      icon: Palette,
      accent: 'from-[#F59E0B]/20 to-[#F59E0B]/5'
    },
    {
      number: '07',
      title: 'Edit & Approval',
      description: 'You review and approve content before it goes live, so you always stay in control of your brand\'s voice.',
      icon: ThumbsUp,
      accent: 'from-[#14B8A6]/20 to-[#3B82F6]/5'
    },
    {
      number: '08',
      title: 'Publishing & Ongoing Optimization',
      description: 'Content goes live on schedule, with performance tracked and strategy refined over time.',
      icon: Send,
      accent: 'from-[#10B981]/20 to-[#F59E0B]/5'
    }
  ];

  return (
    <section id="smm-workflow" className="py-24 bg-[#0A0A0A] border-t border-[#262626] relative overflow-hidden">
      {/* Decorative Blur Overlays */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#14B8A6]/4 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#14B8A6]/3 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 max-w-3xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#14B8A6] mb-3">
            05 // Client SMM Lifecycles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F5F5F5] tracking-tight">
            My Social Media <span className="text-[#14B8A6]">Management Workflow</span>
          </h2>
          <p className="text-sm sm:text-base text-[#D4D4D4] italic font-medium mt-4 border-l-2 border-[#14B8A6] pl-4">
            "A structured process built for clarity, consistency, and results — from our first conversation to every post that goes live."
          </p>
          <div className="w-12 h-[2px] bg-[#14B8A6] mt-5"></div>
        </div>

        {/* Step-Flow Container */}
        <div className="relative mt-8">
          
          {/* Connecting Line (Desktop Only - spans across 4 columns for Row 1 & Row 2) */}
          <div className="hidden lg:block absolute top-[68px] left-[6%] right-[6%] h-[1px] bg-gradient-to-r from-transparent via-[#14B8A6]/30 to-transparent z-0"></div>
          <div className="hidden lg:block absolute top-[318px] left-[6%] right-[6%] h-[1px] bg-gradient-to-r from-transparent via-[#14B8A6]/30 to-transparent z-0"></div>

          {/* Steps Grid (4 Columns on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className="group flex flex-col items-center justify-start p-6 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#14B8A6]/50 transition-all duration-300 text-center relative overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_22px_rgba(20,184,166,0.2)]"
                  style={{
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
                  }}
                >
                  {/* Smooth Background Gradient Layer on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#14B8A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-0"></div>

                  {/* Step Number Badge */}
                  <span className="relative z-10 text-[10px] font-mono uppercase tracking-widest text-[#14B8A6] group-hover:text-[#0A0A0A]/70 mb-2 font-bold transition-colors duration-300">
                    Step {step.number}
                  </span>

                  {/* Icon Circle */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#1A1A1A] group-hover:bg-black/10 text-[#14B8A6] group-hover:text-[#0A0A0A] border border-[#262626] group-hover:border-[#0A0A0A]/20 flex items-center justify-center mb-4 transition-all duration-300 shadow-inner shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Step Title */}
                  <h3 className="relative z-10 text-sm font-bold tracking-wider uppercase text-[#F5F5F5] group-hover:text-[#0A0A0A] transition-colors duration-300 font-display mb-2.5">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="relative z-10 text-xs text-[#9CA3AF] group-hover:text-[#1F2937] leading-relaxed font-sans transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workflow Summary / SMM Core Pillars Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#121212] border border-[#222222] hover:border-[#14B8A6]/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-2">
            <h3 className="text-lg font-bold font-display text-[#F5F5F5]">
              Ready to elevate your social media presence?
            </h3>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              With a solid research-driven strategy, structured content organization, brand-aligned asset creation, and systematic optimization, I deliver a cohesive social channel that attracts, engages, and converts your audience.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] bg-[#14B8A6] hover:bg-[#0FB9B1] rounded-lg transition-all duration-300 font-display shadow-lg shadow-[#14B8A6]/10 hover:shadow-[#14B8A6]/25"
            >
              <span>Discuss SMM Partnership</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
