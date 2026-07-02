import revfitLogo from '../assets/images/revfit.png';
import therapyDogsLogo from '../assets/images/therapy_dogs_nsw.png';
import accreditedCollegeLogo from '../assets/images/accredited_college.png';
import nationalFitnessLogo from '../assets/images/national_fitness_college.png';
import activeFitnessLogo from '../assets/images/active_fitness_tamworth.png';
import onlineBibleCollegeLogo from '../assets/images/online_bible_college.png';
import victoriaBitterLogo from '../assets/images/victoria_bitter.png';
import l7Logo from '../assets/images/l7.png';
import lomdennLogo from '../assets/images/lomdenn.png';

const logos = [
  { name: 'RevFit', src: revfitLogo },
  { name: 'Therapy Dogs NSW', src: therapyDogsLogo },
  { name: 'Accredited College', src: accreditedCollegeLogo },
  { name: 'National Fitness College', src: nationalFitnessLogo },
  { name: 'Active Fitness Tamworth', src: activeFitnessLogo },
  { name: 'Online Bible College', src: onlineBibleCollegeLogo },
  { name: 'Victoria Bitter', src: victoriaBitterLogo },
  { name: 'L7', src: l7Logo },
  { name: 'Lomdenn', src: lomdennLogo },
];

export default function CompanyLogos() {
  return (
    <div
      className="mb-16 mt-4 border border-[#262626] bg-[#0A0A0A]/40 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
      id="trusted-logos-section"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#14B8A6]/2 to-transparent -z-10" />

      <div className="flex flex-col items-center sm:items-start mb-8">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#14B8A6] font-semibold">
          Companies I've Worked With
        </h3>
        <div className="w-8 h-[1px] bg-[#14B8A6]/40 mt-2"></div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 sm:gap-6 items-center justify-items-center">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="group relative flex items-center justify-center p-1.5 rounded-xl bg-black border border-[#262626] hover:border-[#14B8A6]/50 transition-all duration-300 w-full aspect-square max-w-[90px] overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(20,184,166,0.15)]"
          >
            <div className="absolute inset-0 bg-[#14B8A6]/0 group-hover:bg-[#14B8A6]/3 transition-colors duration-300 pointer-events-none" />
            <img
              src={logo.src}
              alt={logo.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
