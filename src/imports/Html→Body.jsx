import svgPaths from "./svg-0lnqpl8n6n";
import imgPortraitOfSandeep from "figma:asset/ff5cdc386f7c9b8e6010a8c2c0a6e73826f72960.png";
import imgSandeepBio from "figma:asset/947dd6052076bccbb3952acd3aa3c657852ea2b5.png";
import imgEnterpriseDashboard from "figma:asset/9fb4d41fe89b9c9537bdee5761feea93172c4710.png";
import imgTaskMatrix from "figma:asset/39ed3d486c7f6a570bb182b1a65603d41e1b5b37.png";

function PortraitOfSandeep() {
  return (
    <div className="h-[614px] relative shrink-0 w-full" data-name="Portrait of Sandeep">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPortraitOfSandeep} />
        </div>
        <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <PortraitOfSandeep />
        <div className="absolute bg-gradient-to-t from-[#0b1326] inset-px to-[rgba(11,19,38,0)] via-1/2 via-[rgba(11,19,38,0)]" data-name="Gradient" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function BackgroundBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[#222a3d] bottom-[-24px] content-stretch flex flex-col items-start left-[-24px] p-[25px] rounded-[16px]" data-name="Background+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c0c1ff] text-[30px] whitespace-nowrap">
        <p className="leading-[36px]">2+</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">YEARS EXPERIENCE</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <OverlayBorderShadow />
      <BackgroundBorderOverlayBlur />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c0c1ff] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px]">AVAILABLE FOR OPPORTUNITIES</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[96px] tracking-[-4.8px] w-full">
        <p className="leading-[96px]">SANDEEP</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b7c8e1] text-[30px] w-full">
        <p className="leading-[36px]">Full Stack Developer</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[18px] whitespace-nowrap">
        <p className="leading-[29.25px] mb-0">Architecting robust digital solutions from front to back.</p>
        <p className="leading-[29.25px] mb-0">Specialized in building high-performance, scalable web</p>
        <p className="leading-[29.25px]">applications with precision and modern aesthetics.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-gradient-to-r from-[#c0c1ff] relative rounded-[12px] self-stretch shrink-0 to-[#4b4dd8]" data-name="Link">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[32px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#07006c] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">View Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#2d3449] relative rounded-[12px] self-stretch shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[33px] py-[17px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dae2fd] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">Contact Me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[82px] items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container3 />
      <Heading />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_616px] max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="min-h-[795px] relative shrink-0 w-full" data-name="Hero Section">
      <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] px-[24px] py-[89.5px] relative size-full">
          <div className="absolute bg-[rgba(192,193,255,0.1)] blur-[60px] bottom-[26.7%] left-[-80px] rounded-[12px] top-1/4 w-[384px]" data-name="Overlay+Blur" />
          <div className="absolute bg-[rgba(75,77,216,0.1)] blur-[60px] bottom-1/4 right-[-80px] rounded-[12px] top-[26.7%] w-[384px]" data-name="Overlay+Blur" />
          <Container />
        </div>
      </div>
    </div>
  );
}

function SandeepBio() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Sandeep Bio">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSandeepBio} />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute inset-[16px] rounded-[12px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <SandeepBio />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#0b1326] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[320px]" data-name="Container">
      <div className="absolute border-2 border-[rgba(192,193,255,0.3)] border-dashed inset-0 rounded-[12px]" data-name="Border" />
      <Border />
    </div>
  );
}

function Container8() {
  return (
    <div className="col-[1/span_4] content-stretch flex h-[320px] items-start justify-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[36px] tracking-[-0.9px] w-full">
        <p>
          <span className="leading-[40px]">{`Mastering the Full Stack `}</span>
          <span className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[40px] text-[#c0c1ff]">Ecosystem</span>
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">I am a passionate Full Stack Developer with over 2 years of experience crafting digital products</p>
        <p className="leading-[29.25px] mb-0">that bridge the gap between complex backend logic and seamless user experiences. My journey</p>
        <p className="leading-[29.25px]">is defined by a relentless pursuit of technical excellence and a keen eye for architectural design.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">Based on the principles of clean code and performance, I leverage a modern stack including</p>
        <p className="leading-[29.25px] mb-0">React for dynamic frontends and Spring Boot for robust, scalable backends. I thrive in</p>
        <p className="leading-[29.25px] mb-0">environments that challenge my problem-solving abilities and allow me to build tools that make a</p>
        <p className="leading-[29.25px]">real impact.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dae2fd] text-[14px] w-full">
        <p className="leading-[20px]">Problem Solver</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#171f33] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <div className="relative shrink-0 size-[22px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p11c2d500} fill="var(--fill-0, #C0C1FF)" id="Icon" />
          </svg>
        </div>
        <Container15 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dae2fd] text-[14px] w-full">
        <p className="leading-[20px]">Performance First</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#171f33] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <div className="h-[16px] relative shrink-0 w-[20.002px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0017 16">
            <path d={svgPaths.p18737380} fill="var(--fill-0, #C0C1FF)" id="Icon" />
          </svg>
        </div>
        <Container16 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dae2fd] text-[14px] w-full">
        <p className="leading-[20px]">Clean Architecture</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#171f33] col-3 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <div className="h-[18px] relative shrink-0 w-[11px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18">
            <path d={svgPaths.p34c7c000} fill="var(--fill-0, #C0C1FF)" id="Icon" />
          </svg>
        </div>
        <Container17 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dae2fd] text-[14px] w-full">
        <p className="leading-[20px]">Team Player</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#171f33] col-4 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <div className="h-[12px] relative shrink-0 w-[24px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
            <path d={svgPaths.p5df3d80} fill="var(--fill-0, #C0C1FF)" id="Icon" />
          </svg>
        </div>
        <Container18 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_84px] pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Background />
      <Background1 />
      <Background2 />
      <Background3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="col-[5/span_8] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Heading1 />
      <Container11 />
      <Container14 />
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_416.75px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container10 />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-[#131b2e] relative shrink-0 w-full" data-name="About Section">
      <div className="content-stretch flex flex-col items-start px-[4544.5px] py-[96px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[30px] w-full">
        <p className="leading-[36px]">Technical Arsenal</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <div className="bg-[#c0c1ff] h-[4px] rounded-[12px] shrink-0 w-[80px]" data-name="Background" />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p3565f200} fill="var(--fill-0, #C0C1FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(192,193,255,0.1)] relative rounded-[4px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[20px] w-full">
          <p className="leading-[28px]">Frontend</p>
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-[32px] content-stretch flex flex-col items-start left-0 px-[12px] py-[4px] rounded-[12px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">REACT</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-[32px] content-stretch flex flex-col items-start left-[74.72px] px-[12px] py-[4px] rounded-[12px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">JAVASCRIPT</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-[32px] content-stretch flex flex-col items-start left-[186.27px] px-[12px] py-[4px] rounded-[12px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">HTML5</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-0 content-stretch flex flex-col items-start left-0 px-[12px] py-[4px] rounded-[12px] top-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">CSS3 / TAILWIND</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-0 content-stretch flex flex-col items-start left-[141.92px] px-[12px] py-[4px] rounded-[12px] top-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">NEXT.JS</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Background4 />
        <Background5 />
        <Background6 />
        <Background7 />
        <Background8 />
      </div>
    </div>
  );
}

function Frontend() {
  return (
    <div className="bg-[#171f33] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Frontend">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <Overlay />
        <Heading3 />
        <Container22 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[12px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
        <g id="Container">
          <path d={svgPaths.p29419540} fill="var(--fill-0, #C0C1FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(192,193,255,0.1)] relative rounded-[4px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[20px] w-full">
          <p className="leading-[28px]">Backend</p>
        </div>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-[32px] content-stretch flex flex-col items-start left-0 px-[12px] py-[4px] rounded-[12px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">JAVA</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-[32px] content-stretch flex flex-col items-start left-[64.87px] px-[12px] py-[4px] rounded-[12px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">SPRING BOOT</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-[32px] content-stretch flex flex-col items-start left-[184.97px] px-[12px] py-[4px] rounded-[12px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">SPRING SECURITY</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-0 content-stretch flex flex-col items-start left-0 px-[12px] py-[4px] rounded-[12px] top-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">REST APIS</p>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-0 content-stretch flex flex-col items-start left-[98.36px] px-[12px] py-[4px] rounded-[12px] top-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">NODE.JS</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Background9 />
        <Background10 />
        <Background11 />
        <Background12 />
        <Background13 />
      </div>
    </div>
  );
}

function Backend() {
  return (
    <div className="bg-[#171f33] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Backend">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <Overlay1 />
        <Heading4 />
        <Container24 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p254c2600} fill="var(--fill-0, #C0C1FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(192,193,255,0.1)] relative rounded-[4px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[20px] w-full">
          <p className="leading-[28px]">{`Data & Tools`}</p>
        </div>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-[32px] content-stretch flex flex-col items-start left-0 px-[12px] py-[4px] rounded-[12px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">MYSQL</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-[32px] content-stretch flex flex-col items-start left-[78.07px] px-[12px] py-[4px] rounded-[12px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">POSTGRESQL</p>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-[32px] content-stretch flex flex-col items-start left-[195.87px] px-[12px] py-[4px] rounded-[12px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">GIT / GITHUB</p>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-0 content-stretch flex flex-col items-start left-0 px-[12px] py-[4px] rounded-[12px] top-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">DOCKER</p>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="absolute bg-[#3a4a5f] bottom-0 content-stretch flex flex-col items-start left-[85.53px] px-[12px] py-[4px] rounded-[12px] top-[32px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a9bad3] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">AWS</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Background14 />
        <Background15 />
        <Background16 />
        <Background17 />
        <Background18 />
      </div>
    </div>
  );
}

function Database() {
  return (
    <div className="bg-[#171f33] col-3 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Database">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative size-full">
        <Overlay2 />
        <Heading5 />
        <Container26 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_246px] relative shrink-0 w-full" data-name="Container">
      <Frontend />
      <Backend />
      <Database />
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1280px] py-[96px] relative shrink-0 w-[1280px]" data-name="Skills Section">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[30px] whitespace-nowrap">
        <p className="leading-[36px]">Featured Works</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">A selection of my recent developments, ranging from</p>
        <p className="leading-[24px]">cloud-based enterprise systems to elegant UI experiments.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[447.28px]" data-name="Container">
      <Heading6 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #C0C1FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#c0c1ff] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Explore all projects</p>
      </div>
      <Container31 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between relative size-full">
          <Container29 />
          <Link2 />
        </div>
      </div>
    </div>
  );
}

function EnterpriseDashboard() {
  return (
    <div className="h-[226.86px] relative shrink-0 w-full" data-name="Enterprise Dashboard">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.79%] left-0 max-w-none top-[-38.89%] w-full" src={imgEnterpriseDashboard} />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <EnterpriseDashboard />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[20px] w-full">
        <p className="leading-[28px]">CloudScale Ledger</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[14px] w-full">
        <p className="leading-[20px] mb-0">A high-performance accounting engine for</p>
        <p className="leading-[20px]">distributed microservices architecture using Spring…</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#222a3d] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">SPRING BOOT</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#222a3d] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">MYSQL</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#222a3d] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">AWS</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[8px] h-[29px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[9px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
        <g id="Container">
          <path d={svgPaths.p1139c960} fill="var(--fill-0, #DAE2FD)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2d3449] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px py-[8px] relative rounded-[4px]" data-name="Button">
      <Container38 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dae2fd] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">GitHub</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="Container">
          <path d={svgPaths.p81a2700} fill="var(--fill-0, #07006C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#c0c1ff] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px py-[8px] relative rounded-[4px]" data-name="Button">
      <Container39 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#07006c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Live Demo</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Heading7 />
        <Container35 />
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="bg-[#131b2e] col-1 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Project Card 1">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-px px-px relative rounded-[inherit] size-full">
        <Container33 />
        <Container34 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-gradient-to-r from-1/4 from-[#171f33] h-[20px] rounded-[12px] shrink-0 to-3/4 to-[#171f33] via-1/2 via-[#222a3d] w-[48px]" data-name="Gradient" />
      <div className="bg-gradient-to-r from-1/4 from-[#171f33] h-[20px] rounded-[12px] shrink-0 to-3/4 to-[#171f33] via-1/2 via-[#222a3d] w-[48px]" data-name="Gradient" />
      <div className="bg-gradient-to-r from-1/4 from-[#171f33] h-[20px] rounded-[12px] shrink-0 to-3/4 to-[#171f33] via-1/2 via-[#222a3d] w-[48px]" data-name="Gradient" />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-gradient-to-r flex-[1_0_0] from-1/4 from-[#171f33] h-[40px] min-w-px rounded-[4px] to-3/4 to-[#171f33] via-1/2 via-[#222a3d]" data-name="Gradient" />
      <div className="bg-gradient-to-r flex-[1_0_0] from-1/4 from-[#171f33] h-[40px] min-w-px rounded-[4px] to-3/4 to-[#171f33] via-1/2 via-[#222a3d]" data-name="Gradient" />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <div className="bg-gradient-to-r from-1/4 from-[#171f33] h-[24px] rounded-[2px] shrink-0 to-3/4 to-[#171f33] via-1/2 via-[#222a3d] w-[266.48px]" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#171f33] h-[16px] rounded-[2px] shrink-0 to-3/4 to-[#171f33] via-1/2 via-[#222a3d] w-full" data-name="Gradient" />
        <div className="bg-gradient-to-r from-1/4 from-[#171f33] h-[16px] rounded-[2px] shrink-0 to-3/4 to-[#171f33] via-1/2 via-[#222a3d] w-[296.09px]" data-name="Gradient" />
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function ProjectCard2LoadingStateApiReady() {
  return (
    <div className="bg-[#131b2e] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Project Card 2 (Loading State / API-Ready)">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="aspect-video bg-gradient-to-r from-1/4 from-[#171f33] shrink-0 to-3/4 to-[#171f33] via-1/2 via-[#222a3d] w-full" data-name="Gradient" />
        <Container40 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function TaskMatrix() {
  return (
    <div className="h-[226.88px] relative shrink-0 w-full" data-name="Task Matrix">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgTaskMatrix} />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <TaskMatrix />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[20px] w-full">
        <p className="leading-[28px]">Task Matrix Pro</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Real-time collaborative task management system</p>
        <p className="leading-[20px]">with intuitive drag-and-drop UI and automated…</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#222a3d] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">REACT</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#222a3d] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">DOCKER</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#222a3d] relative rounded-[2px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.3)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col items-start px-[9px] py-[3px] relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">REDIS</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[8px] h-[29px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[9px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
        <g id="Container">
          <path d={svgPaths.p1139c960} fill="var(--fill-0, #DAE2FD)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#2d3449] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px py-[8px] relative rounded-[4px]" data-name="Button">
      <Container48 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dae2fd] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">GitHub</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="Container">
          <path d={svgPaths.p81a2700} fill="var(--fill-0, #07006C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#c0c1ff] content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px py-[8px] relative rounded-[4px]" data-name="Button">
      <Container49 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#07006c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Live Demo</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative size-full">
        <Heading8 />
        <Container45 />
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function ProjectCard1() {
  return (
    <div className="bg-[#131b2e] col-3 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Project Card 3">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[15.98px] pt-px px-px relative rounded-[inherit] size-full">
        <Container43 />
        <Container44 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_472.86px] relative shrink-0 w-full" data-name="Container">
      <ProjectCard />
      <ProjectCard2LoadingStateApiReady />
      <ProjectCard1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container32 />
    </div>
  );
}

function ProjectsSectionApiReadyBentoStyle() {
  return (
    <div className="bg-[#060e20] relative shrink-0 w-full" data-name="Projects Section (API-ready/Bento Style)">
      <div className="content-stretch flex flex-col items-start px-[4544.5px] py-[96px] relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[30px] text-center whitespace-nowrap">
        <p className="leading-[36px]">Professional Timeline</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">My professional journey through the world of technology.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Container51 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[20px] text-right whitespace-nowrap">
        <p className="leading-[28px]">Senior Full Stack Developer</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c0c1ff] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[24px]">TechInnovate Solutions</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#918fa1] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">Jan 2023 - Present</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[16px] relative" data-name="Container">
      <Heading10 />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Item() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[9.5px]">
        <p className="leading-[20px]">•</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[15.88px] top-[9.5px]">
        <p className="leading-[20px]">Led migration from legacy monolith to Spring Boot</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[29.5px]">
        <p className="leading-[20px]">microservices.</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[9.5px]">
        <p className="leading-[20px]">•</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[15.88px] top-[9.5px]">
        <p className="leading-[20px]">Reduced API response times by 40% through Redis</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[29.5px]">
        <p className="leading-[20px]">caching.</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[9.5px]">
        <p className="leading-[20px]">•</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[15.88px] top-[9.5px]">
        <p className="leading-[20px]">Mentored a team of 4 junior developers on best</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[29.5px]">
        <p className="leading-[20px]">practices.</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[14px] w-full whitespace-nowrap" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <List />
    </div>
  );
}

function ExpItem() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Exp Item 1">
      <Container53 />
      <Container56 />
      <div className="-translate-x-1/2 absolute bg-[#c0c1ff] left-1/2 rounded-[12px] shadow-[0px_0px_15px_0px_rgba(192,193,255,0.8)] size-[16px] top-[60px]" data-name="Background+Shadow" />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-start justify-end relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">Developed core ERP modules using React and Java.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">•</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">Implemented full-text search using Elasticsearch.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px]">•</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center right-[-0.33px] top-[9.5px]">
        <p className="leading-[20px]">Maintained 95% unit test coverage for backend</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center right-[15.55px] top-[29.5px]">
        <p className="leading-[20px]">services.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center right-[-0.33px] top-[29.5px]">
        <p className="leading-[20px]">•</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[7.5px] items-start leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[14px] text-right w-full whitespace-nowrap" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <List1 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[20px] w-full">
        <p className="leading-[28px]">Software Engineer</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c0c1ff] text-[16px] w-full">
        <p className="leading-[24px]">DataCore Systems</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#918fa1] text-[14px] w-full">
        <p className="leading-[20px]">June 2021 - Dec 2022</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[16px] relative" data-name="Container">
      <Heading11 />
      <Container59 />
      <Container60 />
    </div>
  );
}

function ExpItem1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Exp Item 2">
      <Container57 />
      <div className="-translate-x-1/2 absolute bg-[#464555] left-1/2 rounded-[12px] size-[16px] top-[40px]" data-name="Background" />
      <Container58 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="-translate-x-1/2 absolute bg-[rgba(70,69,85,0.3)] bottom-0 left-1/2 top-0 w-[2px]" data-name="Line" />
      <ExpItem />
      <ExpItem1 />
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[896px] py-[96px] relative shrink-0 w-[896px]" data-name="Experience Section">
      <Container50 />
      <Container52 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#dae2fd] text-[36px] w-full">
        <p className="leading-[45px] mb-0">{`Let's build something`}</p>
        <p>
          <span className="font-['Manrope:ExtraBold',sans-serif] font-extrabold leading-[45px] text-[#c0c1ff]">extraordinary</span>
          <span className="leading-[45px]">{` together.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c7c4d8] text-[18px] whitespace-nowrap">
        <p className="leading-[28px] mb-0">Currently available for freelance work and full-time</p>
        <p className="leading-[28px] mb-0">{`opportunities. Drop a message and let's discuss`}</p>
        <p className="leading-[28px]">your next project.</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #C0C1FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#171f33] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#918fa1] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">EMAIL</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dae2fd] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">hello@sandeep.dev</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[153.67px]" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background19 />
      <Container67 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #C0C1FF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-[#171f33] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Background">
      <Container71 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#918fa1] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">LOCATION</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#dae2fd] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">San Francisco, CA</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140.84px]" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background20 />
      <Container72 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container70 />
    </div>
  );
}

function Container62() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[68px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading12 />
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] w-full">
        <p className="leading-[normal]">John Doe</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#222a3d] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[14px] relative size-full">
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8.5px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#918fa1] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">FULL NAME</p>
      </div>
      <Input />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] w-full">
        <p className="leading-[normal]">john@example.com</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#222a3d] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[16px] py-[14px] relative size-full">
          <Container79 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8.5px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#918fa1] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">EMAIL ADDRESS</p>
      </div>
      <Input1 />
    </div>
  );
}

function Container75() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_72px] relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container78 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#464555] text-[16px] w-full">
        <p className="leading-[24px]">Tell me about your project...</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#222a3d] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[108px] pt-[12px] px-[16px] relative size-full">
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col gap-[8.5px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#918fa1] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">MESSAGE</p>
      </div>
      <Textarea />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[16px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
        <g id="Container">
          <path d={svgPaths.pb36e280} fill="var(--fill-0, #07006C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#c0c1ff] content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#07006c] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Send Message</p>
      </div>
      <Container82 />
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container75 />
        <Container80 />
        <Button4 />
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#171f33] col-2 justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(70,69,85,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start pb-[49px] pt-[33px] px-[33px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.5px_0] rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
        <Form />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_426px] relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <BackgroundBorder6 />
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-[#131b2e] relative shrink-0 w-full" data-name="Contact Section">
      <div className="content-stretch flex flex-col items-start px-[4544.5px] py-[96px] relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[80px] relative shrink-0 w-full" data-name="Main">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSectionApiReadyBentoStyle />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">SANDEEP</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[0.35px] whitespace-nowrap">
        <p className="leading-[20px]">© 2024 Architectural Ledger. Built with Precision.</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
          <path d={svgPaths.p24c05900} fill="var(--fill-0, #64748B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p2b729200} fill="var(--fill-0, #64748B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative self-stretch shrink-0" data-name="Link">
      <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #64748B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex gap-[24px] h-[20px] items-start relative shrink-0" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container83() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full">
          <Container84 />
          <Container85 />
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0b1326] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(70,69,85,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[48px] pt-[49px] px-[4544.5px] relative size-full">
        <Container83 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p18c14180} fill="var(--fill-0, #818CF8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#f8fafc] text-[20px] tracking-[-1px] whitespace-nowrap">
        <p className="leading-[28px]">SANDEEP</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container88 />
      <Container89 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(99,102,241,0.5)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#a5b4fc] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">Home</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">About</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">Skills</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">Projects</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[16px] tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">Experience</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="bg-[#4b4dd8] content-stretch flex flex-col items-start px-[20px] py-[8px] relative rounded-[12px] shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#d9d8ff] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Resume</p>
      </div>
    </div>
  );
}

function DesktopNav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Desktop Nav">
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Nav() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Nav">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[24px] py-[16px] relative size-full">
          <Container87 />
          <DesktopNav />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(11,19,38,0.6)] content-stretch flex flex-col items-start left-0 px-[4544.5px] shadow-[0px_40px_60px_0px_rgba(218,226,253,0.04)] top-0 w-[10369px]" data-name="Header - TopAppBar">
      <Nav />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3532.39px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(11, 19, 38) 0%, rgb(11, 19, 38) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <Footer />
      <HeaderTopAppBar />
    </div>
  );
}