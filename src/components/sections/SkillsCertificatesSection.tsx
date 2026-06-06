import { FadeIn } from "../ui/FadeIn"

const SERVICES = [
  {
    num: "01",
    title: "WEB DESIGN",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
  {
    num: "02",
    title: "MOTION DESIGN",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    num: "03",
    title: "AUGMENTED REALITY",
    desc: "Interactive digital experiences that blend virtual 3D content with the real world, enabling users to visualize and explore objects in their physical environment.",
  },
]

export function ServicesSection() {
  return (
    <FadeIn
      as="section"
      delay={0}
      y={50}
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 relative z-20"
      style={{ paddingBottom: "90px" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none"
          style={{ marginBottom: "90px" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="w-fit max-w-[1600px] mx-auto flex flex-col gap-16 md:gap-24 px-4 sm:px-8 relative md:left-32 lg:left-56 xl:left-72 2xl:left-96">
        {SERVICES.map((service, index) => (
          <FadeIn
            key={service.num}
            delay={0.1}
            y={60}
            viewportAmount={0.4}
            viewportMargin="0px"
            className="relative w-full flex flex-col md:flex-row md:items-center justify-start gap-6 md:gap-16 lg:gap-24"
          >
            <div className="text-[#0C0C0C] font-black leading-none text-[clamp(3rem,10vw,140px)] shrink-0 w-auto md:w-[200px] text-left">
              {service.num}
            </div>
            <div className="flex flex-col gap-2 md:gap-4 max-w-xl text-left">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                {service.title}
              </h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {service.desc}
              </p>
            </div>
            {index !== SERVICES.length - 1 && (
              <div className="absolute -bottom-8 md:-bottom-12 left-0 w-full h-[1px] bg-[#0C0C0C]/10" />
            )}
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  )
}
