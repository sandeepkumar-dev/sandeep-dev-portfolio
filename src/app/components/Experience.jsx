import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "DevOps & Cloud Intern",
      company: "PSA Infotech, Bengaluru",
      period: "Sept 2025 – March 2026",
      description:
        "Worked with AWS and DevOps tools to automate deployments and manage scalable infrastructure.",
      achievements: [
        "Deployed applications using Docker on AWS EC2",
        "Implemented CI/CD pipelines using Jenkins",
        "Used Kubernetes for container orchestration",
        "Provisioned infrastructure using Terraform (IaC)",
      ],
    },
    {
      id: 2,
      title: "Java Full Stack Developer",
      company: "GvCloud Secure Pvt. Ltd., Noida",
      period: "July 2022 – May 2025",
      description:
        "Built scalable full-stack applications using Spring Boot and React, focusing on performance and security.",
      achievements: [
        "Developed REST APIs for seamless frontend-backend integration",
        "Implemented JWT authentication with Spring Security",
        "Optimized MySQL queries improving performance",
        "Worked on microservices architecture for scalability",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-2 md:left-6 top-0 bottom-0 w-[2px] bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10 md:pl-20">

                {/* DOT */}
                <div className="absolute left-2 md:left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow"></div>

                {/* CARD */}
                <div className="p-6 rounded-xl bg-card border border-border 
                hover:shadow-2xl hover:-translate-y-1 hover:border-primary/40 
                transition-all duration-300">

                  {/* TOP */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="mt-2 sm:mt-0 px-3 py-1 rounded-full 
                    bg-primary/10 text-primary text-sm font-medium w-fit">
                      {exp.period}
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* ACHIEVEMENTS */}
                  <div className="grid sm:grid-cols-2 gap-2">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <span className="text-primary mt-1">✔</span>
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}