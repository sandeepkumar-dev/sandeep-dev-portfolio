import { GraduationCap, Award, Star } from "lucide-react";

export default function Education() {
  const certifications = [
    {
      id: 1,
      title: "Java Full Stack & DevOps",
      organization: "PSA Infotech",
      year: "2026",
      highlight: true,
    },
    {
      id: 2,
      title: "Java Full Stack Development",
      organization: "Uncodemy",
      year: "2022",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      organization: "Udemy",
      year: "2023",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering",
      institution: "RGPV University, M.P.",
      period: "2015 – 2019",
    },
    {
      id: 2,
      degree: "12th Standard",
      institution: "BSEB, Patna",
      period: "2013 – 2015",
    },
    {
      id: 3,
      degree: "10th Standard",
      institution: "BSEB, Patna",
      period: "2012 – 2013",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT: CERTIFICATIONS */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-xl border border-border bg-card 
                  hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 
                  transition-all duration-300 flex justify-between items-center"
                >
                  <div>
                    <h4 className="font-medium flex items-center gap-2">
                      {cert.title}
                      {cert.highlight }
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {cert.organization}
                    </p>
                  </div>

                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: EDUCATION TIMELINE */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="relative">

              {/* LINE */}
              <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-border"></div>

              <div className="space-y-8">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-10">

                    {/* DOT */}
                    <div className="absolute left-3 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

                    {/* CARD */}
                    <div className="p-5 rounded-xl bg-card border border-border 
                    hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <h4 className="font-medium">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-primary mt-1">
                        {edu.period}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS SUMMARY */}
            <div className="mt-10 p-6 rounded-xl bg-gradient-to-br 
            from-primary/10 to-primary/5 border border-primary/20">

              <h4 className="mb-4 font-medium flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Core Expertise
              </h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "Full Stack",
                  "Microservices",
                  "AWS",
                  "Docker",
                  "Kubernetes",
                  "CI/CD",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary 
                    hover:bg-primary hover:text-primary-foreground  transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}