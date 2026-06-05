import { FadeIn } from "../ui/FadeIn"

export function EducationSection() {
  return (
    <FadeIn
      as="section"
      delay={0}
      y={50}
      id="education"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 relative z-20"
      style={{ paddingBottom: "120px" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none"
          style={{ marginBottom: "90px" }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="relative w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">

        {/* Exactly centered dividing line */}
        <div
          className="hidden md:block absolute top-0 bottom-0 w-px bg-[#0C0C0C] opacity-10"
          style={{ left: "50%" }}
        />

        <div className="flex flex-col md:flex-row w-full">
          {/* Left Half: College */}
          <FadeIn
            x="-30vw"
            y={0}
            delay={0.1}
            duration={0.8}
            viewportAmount={0.2}
            className="w-full shrink-0"
            style={{
              width: "50%",
              paddingLeft: "clamp(1rem, 4vw, 4rem)",
              paddingRight: "clamp(2rem, 6vw, 6rem)"
            }}
          >
            <div className="text-[#0C0C0C] font-black uppercase leading-none text-[clamp(2.5rem,6vw,70px)] mb-6 text-center md:text-left">
              College
            </div>
            <div className="clearfix text-[#0C0C0C]">
              <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2 text-left">
                SRMIST Kattankulathur • 2024 - 2028
              </h3>
              <div className="font-bold opacity-40 text-sm sm:text-base uppercase tracking-widest mb-6 text-left">
                Bachelor of Technology • CSE
              </div>

              <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] mb-8 mt-4 rounded-3xl overflow-hidden drop-shadow-2xl">
                <img
                  src="/college.jpg"
                  alt="College"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="font-light leading-relaxed text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-80 text-left">
                Currently focusing on software engineering, web development, and algorithms. Built multiple full-stack applications. Through coursework and practical projects, I gained a deep understanding of system architecture, database design, and modern frontend frameworks. I also collaborated with peers to develop an award-winning lab experiment visualization app.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-start">
                <span className="text-[#D7E2EA] bg-[#0C0C0C] text-xs sm:text-sm inline-block font-medium tracking-normal shadow-md" style={{ padding: "6px 16px", borderRadius: "8px" }}>CGPA: 9.79</span>
              </div>
            </div>
          </FadeIn>

          {/* Right Half: School */}
          <FadeIn
            x="30vw"
            y={0}
            delay={0.1}
            duration={0.8}
            viewportAmount={0.2}
            className="w-full shrink-0 pt-16 md:pt-0"
            style={{
              width: "50%",
              paddingLeft: "clamp(2rem, 6vw, 6rem)",
              paddingRight: "clamp(1rem, 4vw, 4rem)"
            }}
          >
            <div className="text-[#0C0C0C] font-black uppercase leading-none text-[clamp(2.5rem,6vw,70px)] mb-6 text-center md:text-right">
              School
            </div>
            <div className="clearfix text-[#0C0C0C]">
              <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] text-right mb-2">
                DPS Bokaro • 2011 - 2024
              </h3>
              <div className="font-bold opacity-40 text-sm sm:text-base uppercase tracking-widest text-right mb-6">
                SENIOR SECONDARY SCHOOL
              </div>

              <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] mb-8 mt-4 rounded-3xl overflow-hidden drop-shadow-2xl">
                <img
                  src="/school.jpg.webp"
                  alt="School"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="font-light leading-relaxed text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-80 text-right">
                Excelled in Mathematics and Science. My passion for technology began here, spending countless hours in the computer lab experimenting with basic web design and programming.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-end">
                <span className="text-[#D7E2EA] bg-[#0C0C0C] text-xs sm:text-sm inline-block font-medium tracking-normal shadow-md" style={{ padding: "6px 16px", borderRadius: "8px" }}>10th: 96.83%</span>
                <span className="text-[#D7E2EA] bg-[#0C0C0C] text-xs sm:text-sm inline-block font-medium tracking-normal shadow-md" style={{ padding: "6px 16px", borderRadius: "8px" }}>12th: 92.6%</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  )
}
