import { ArrowRight, Download, Eye,Folder } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fadeIn">

          {/* 👤 Profile Image (optional but recommended) */}
          {/* <img
            src="src\assets\IMG_1903.jpg"
            alt="Sandeep Kumar"
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover border-4 border-primary"
          /> */}

          {/* 👋 Intro */}
          <p className="text-base text-primary mb-2 font-medium">
            👋 Hi, I’m
          </p>

          {/* 🧑 Name + Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Sandeep Kumar
          </h1>

          {/* 💼 Role */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            Java Full Stack Developer | Spring Boot • React • AWS
          </p>

          {/* 📝 Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I build scalable web applications and RESTful APIs with a focus on
            performance and clean architecture. Experienced in designing
            microservices and deploying applications on AWS.
          </p>

          {/* 🔘 Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* Contact */}
            <button
              onClick={scrollToContact}
              className="group px-8 py-3 bg-primary text-primary-foreground rounded-lg 
              hover:opacity-90 hover:scale-105 shadow-md transition-all duration-200 flex items-center gap-2"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* View Projects */}
            <button
              onClick={scrollToProjects}
              className="group px-6 py-3 bg-primary text-primary-foreground rounded-lg 
                hover:opacity-90 hover:scale-105 shadow-md transition-all duration-200 flex items-center gap-2"
            >
              View Projects
              <Folder className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Resume buttons */}
            <div className="flex gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group px-6 py-3 bg-primary text-primary-foreground rounded-lg 
                hover:opacity-90 hover:scale-105 shadow-md transition-all duration-200 flex items-center gap-2"
              >
                Preview Resume
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Sandeep_Kumar_Resume.pdf"
                className="group px-6 py-3 bg-primary text-primary-foreground rounded-lg 
                hover:opacity-90 hover:scale-105 shadow-md transition-all duration-200 flex items-center gap-2"
              >
                Download Resume
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* 📊 Stats */}
        <div className="mt-20 flex justify-center gap-8 text-sm text-muted-foreground">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">3+</div>
            <div>Years Experience</div>
          </div>

          <div className="w-px bg-border"></div>

          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">10+</div>
            <div>Projects Completed</div>
          </div>

          <div className="w-px bg-border"></div>

          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">AWS</div>
            <div>Cloud & DevOps</div>
          </div>
        </div>
      </div>
    </section>
  );
}