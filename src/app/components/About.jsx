import { Code2, Database, Layout, Download } from "lucide-react";
import profileImg from "../../assets/image.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground mb-4">
            Get to know more about my skills and experience
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">

            {/* IMPROVED HEADING */}
            <h3 className="text-2xl font-semibold mb-6">
              Building Scalable Systems with Java & Cloud 🚀
            </h3>

            {/* SHORT & CLEAN TEXT */}
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I’m a Java Full Stack Developer with 3+ years of experience building scalable web applications and RESTful APIs.
            </p>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              I specialize in Spring Boot, React.js, and microservices architecture, with hands-on experience in AWS cloud deployment.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate about clean architecture, performance optimization, and delivering reliable, production-ready systems.
            </p>

            

            {/* SKILL CARDS */}
            <div className="grid sm:grid-cols-3 gap-6">

              {/* FRONTEND */}
              <div className="group p-4 rounded-lg border border-border 
              hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300">
                <Layout className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="mb-2 font-medium">Frontend</h4>
                <p className="text-sm text-muted-foreground">
                  React.js, HTML5, CSS3
                </p>
              </div>

              {/* BACKEND */}
              <div className="group p-4 rounded-lg border border-border 
              hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300">
                <Code2 className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="mb-2 font-medium">Backend</h4>
                <p className="text-sm text-muted-foreground">
                  Java, Spring Boot, Microservices
                </p>
              </div>

              {/* DEVOPS */}
              <div className="group p-4 rounded-lg border border-border 
              hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300">
                <Database className="w-8 h-8 mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="mb-2 font-medium">Cloud & DevOps</h4>
                <p className="text-sm text-muted-foreground">
                  AWS, Docker, Kubernetes, Jenkins
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 md:order-2 flex justify-center">
  <div className="relative group animate-float">

    {/* Glow Background */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

    {/* Image Container */}
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl flex items-center justify-center">

      <img
        src={profileImg}
        
        alt="Sandeep Kumar"
        className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl object-cover 
        border-4 border-primary/20 shadow-xl 
        transition-transform duration-500 hover:scale-105"
      />

     
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}