import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Application",
      description:
        "Scalable microservices-based e-commerce platform with secure authentication and Kafka-based communication.",
      technologies: ["Spring Boot", "React.js", "MySQL", "Kafka", "Docker", "AWS"],
      image: "🛒",
      demoUrl: "#",
      githubUrl: "https://github.com/sandeepkumar-dev/e-commerce-project",
    },
    {
      id: 2,
      title: "Smart Contact Manager",
      description:
        "Secure contact manager with authentication, CRUD operations, and advanced search.",
      technologies: ["Spring Boot", "Hibernate", "MySQL", "Thymeleaf"],
      image: "📇",
      demoUrl: "#",
      githubUrl: "https://github.com/sandeepkumar-dev/smart-contact-manager",
    },
    {
      id: 3,
      title: "Eva Aviation Academy",
      description:
        "Responsive React-based website with reusable components and clean UI.",
      technologies: ["React.js", "JavaScript", "CSS3"],
      image: "✈️",
      demoUrl: "https://sandeepkumar-dev.github.io/Eva_Aviation./",
      githubUrl: "https://github.com/sandeepkumar-dev/Eva_Aviation",
    },
    {
      id: 4,
      title: "Real-Time Chat Application",
      description:
        "Full-stack real-time chat app using WebSocket with Spring Boot backend and React frontend.",
      technologies: ["Spring Boot", "WebSocket", "MongoDB", "React.js", "Docker"],
      image: "💬",
      demoUrl: "#",
      githubUrl: "https://github.com/sandeepkumar-dev/chat-app",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my full-stack development skills
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden 
              hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300"
            >

              {/* IMAGE / EMOJI */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-5xl overflow-hidden">

                {/* IMAGE OR EMOJI */}
                {typeof project.image === "string" && project.image.startsWith("/") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <span className="transition-transform duration-500 group-hover:scale-110">
                    {project.image}
                  </span>
                )}

                {/* SUBTLE HOVER OVERLAY (NO BUTTONS) */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary 
                      hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-auto">

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 text-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                    ${
                      project.demoUrl === "#"
                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                        : "bg-primary text-primary-foreground hover:scale-105"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-border rounded-lg text-sm font-medium 
                    hover:bg-accent hover:scale-105 transition-all duration-200"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </span>
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}