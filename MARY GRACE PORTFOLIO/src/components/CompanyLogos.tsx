import React, { useEffect, useState, useRef } from 'react';
import { Upload, RotateCcw, Image as ImageIcon, CheckCircle } from 'lucide-react';
import logoStripSrc from '../assets/images/companies_logo_strip_1782907031524.jpg';

export default function CompanyLogos() {
  const [logoUrls, setLogoUrls] = useState<string[]>([]);
  const [showControls, setShowControls] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isEditingMode, setIsEditingMode] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const individualInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    setIsEditingMode(
      import.meta.env.DEV ||
      window.location.hostname.includes('localhost') ||
      window.location.hostname.includes('127.0.0.1') ||
      window.location.hostname.includes('-dev-')
    );
    loadLogos();
  }, []);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const loadLogos = () => {
    const savedCustomLogos = localStorage.getItem('portfolio_custom_logos');
    const savedLogoStrip = localStorage.getItem('portfolio_logo_strip');

    // If all are custom, return immediately
    if (savedCustomLogos && !savedLogoStrip) {
      try {
        const parsed = JSON.parse(savedCustomLogos);
        if (Array.isArray(parsed) && parsed.length === 9) {
          const hasNulls = parsed.some(url => !url);
          if (!hasNulls) {
            setLogoUrls(parsed);
            return;
          }
        }
      } catch (e) {
        console.error('Error loading custom logos', e);
      }
    }

    const stripSrc = savedLogoStrip || logoStripSrc;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = stripSrc;
    img.onload = () => {
      const urls: string[] = [];
      const W = img.naturalWidth;
      const H = img.naturalHeight;
      const numLogos = 9;
      
      const colWidth = W / numLogos;
      const cropSize = colWidth;
      const startY = (H - cropSize) / 2;

      let customArray: (string | null)[] = Array(9).fill(null);
      if (savedCustomLogos) {
        try {
          customArray = JSON.parse(savedCustomLogos);
        } catch (_) {}
      }

      for (let i = 0; i < numLogos; i++) {
        if (customArray[i]) {
          urls.push(customArray[i]!);
        } else {
          const canvas = document.createElement('canvas');
          canvas.width = 240;
          canvas.height = 240;
          const ctx = canvas.getContext('2d');
          
          if (ctx) {
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, 240, 240);
            ctx.drawImage(
              img,
              i * colWidth,
              startY,
              colWidth,
              cropSize,
              0,
              0,
              240,
              240
            );
            urls.push(canvas.toDataURL('image/jpeg', 0.95));
          } else {
            urls.push('');
          }
        }
      }
      setLogoUrls(urls);
    };
  };

  const handleStripUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      localStorage.setItem('portfolio_logo_strip', dataUrl);
      localStorage.removeItem('portfolio_custom_logos'); // Reset individual overrides
      loadLogos();
      showNotification('Brand strip updated and segmented successfully!');
    };
    reader.readAsDataURL(file);
  };

  const handleIndividualUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      
      let customArray: (string | null)[] = Array(9).fill(null);
      const savedCustomLogos = localStorage.getItem('portfolio_custom_logos');
      if (savedCustomLogos) {
        try {
          customArray = JSON.parse(savedCustomLogos);
        } catch (_) {}
      }

      customArray[index] = dataUrl;
      localStorage.setItem('portfolio_custom_logos', JSON.stringify(customArray));
      loadLogos();
      showNotification(`Logo ${index + 1} updated successfully!`);
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    localStorage.removeItem('portfolio_logo_strip');
    localStorage.removeItem('portfolio_custom_logos');
    loadLogos();
    showNotification('Restored to default company logos.');
  };

  const logoNames = [
    'RevFit',
    'Mindful Pet Care',
    'Gold Arrow-Badge',
    'National Fitness College',
    'Active Fitness Tamworth',
    'Online Bible College',
    'VB',
    'L7',
    'Blue Hexagon'
  ];

  return (
    <div className="mb-16 mt-4 border border-[#262626] bg-[#0A0A0A]/40 rounded-2xl p-6 sm:p-8 relative overflow-hidden" id="trusted-logos-section">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#14B8A6]/2 to-transparent -z-10" />
      
      {/* Header with Control Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#14B8A6] font-semibold">
            Companies I've Worked With
          </h3>
          <div className="w-8 h-[1px] bg-[#14B8A6]/40 mt-2"></div>
        </div>

        {/* Customization Controls */}
        {isEditingMode && (
          <div className="flex items-center justify-center gap-2.5">
            <button
              onClick={() => setShowControls(!showControls)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono font-medium rounded-lg bg-[#141414] border border-[#262626] text-gray-400 hover:text-[#14B8A6] hover:border-[#14B8A6]/40 transition-all cursor-pointer"
              id="customize-logos-btn"
            >
              <Upload className="w-3.5 h-3.5" />
              {showControls ? 'Hide Options' : 'Edit Logos'}
            </button>
            
            {(localStorage.getItem('portfolio_logo_strip') || localStorage.getItem('portfolio_custom_logos')) && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono font-medium rounded-lg bg-red-950/10 border border-red-900/30 text-red-400 hover:bg-red-950/20 hover:text-red-300 transition-all cursor-pointer"
                title="Reset to original logos"
                id="reset-logos-btn"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
          </div>
        )}
      </div>

      {/* Expandable options drawer */}
      {isEditingMode && showControls && (
        <div className="mb-6 p-4 rounded-xl border border-[#262626] bg-black/80 animate-fade-in text-xs text-gray-400 flex flex-col gap-3">
          <p className="leading-relaxed">
            You can customize the brand logos shown below using two methods:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-lg border border-[#262626] bg-[#0A0A0A] flex flex-col gap-2">
              <span className="font-semibold text-gray-200 flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-[#14B8A6]" />
                Option A: Upload a 9-Logo Strip
              </span>
              <p className="text-gray-500 text-[11px]">
                Upload a single wide image containing 9 logos side-by-side. The system will automatically slice and crop it.
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="mt-1 self-start inline-flex items-center gap-1.5 px-3 py-1 bg-[#14B8A6] hover:bg-[#0D9488] text-black font-semibold rounded text-[11px] transition-all cursor-pointer"
              >
                Choose Logo Strip Image
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleStripUpload}
                className="hidden"
              />
            </div>

            <div className="p-3.5 rounded-lg border border-[#262626] bg-[#0A0A0A] flex flex-col justify-center gap-2">
              <span className="font-semibold text-gray-200 flex items-center gap-1.5">
                <Upload className="w-4 h-4 text-[#14B8A6]" />
                Option B: Replace Individually
              </span>
              <p className="text-gray-500 text-[11px]">
                Simply hover over any logo card below and click the <strong className="text-gray-300">Replace</strong> overlay to upload a custom square logo from your computer.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating notification */}
      {notification && (
        <div className="mb-4 p-3 rounded-lg border border-[#14B8A6]/30 bg-[#0A0A0A] text-xs text-[#14B8A6] flex items-center gap-2 animate-fade-in">
          <CheckCircle className="w-4 h-4 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Logos Display Grid */}
      {logoUrls.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 sm:gap-6 items-center justify-items-center">
          {logoUrls.map((url, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-1.5 rounded-xl bg-black border border-[#262626] hover:border-[#14B8A6]/50 transition-all duration-300 w-full aspect-square max-w-[90px] overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(20,184,166,0.15)]"
              id={`logo-item-${index}`}
            >
              {/* Soft teal overlay on hover */}
              <div className="absolute inset-0 bg-[#14B8A6]/0 group-hover:bg-[#14B8A6]/3 transition-colors duration-300 pointer-events-none" />
              
              <img
                src={url}
                alt={logoNames[index]}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Upload trigger overlay on hover (only in edit/dev mode) */}
              {isEditingMode && (
                <>
                  <button
                    onClick={() => individualInputRefs.current[index]?.click()}
                    className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col items-center justify-center gap-1 cursor-pointer"
                    title={`Replace ${logoNames[index]} logo`}
                  >
                    <Upload className="w-4 h-4 text-[#14B8A6]" />
                    <span className="text-[9px] font-mono uppercase tracking-wider text-gray-300">Replace</span>
                  </button>

                  <input
                    ref={el => { individualInputRefs.current[index] = el; }}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleIndividualUpload(index, e)}
                    className="hidden"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 sm:gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="w-full aspect-square max-w-[90px] bg-[#141414] border border-[#262626] animate-pulse rounded-xl"
            />
          ))}
        </div>
      )}
    </div>
  );
}
