import { Code2, Layout, Cloud } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend & Programming',
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: ['Java', 'Spring Boot', 'Spring Security', 'Microservices', 'REST APIs', 'Kafka'],
    },
    {
      title: 'Frontend Technologies',
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Thymeleaf'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6 text-primary" />,
      skills: ['AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground">
            Technologies I use to build scalable applications
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-3"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group p-6 rounded-xl bg-card border border-border 
              hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 
              transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary 
                    hover:bg-primary hover:text-primary-foreground hover:scale-105 
                    transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Database", value: "MySQL" },
            { title: "Version Control", value: "Git, GitHub" },
            { title: "Build Tools", value: "Maven" },
            { title: "OS & Scripting", value: "Linux, Shell" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-lg bg-card border border-border text-center 
              hover:border-primary/50 hover:shadow-md hover:-translate-y-1 
              transition-all duration-300"
            >
              <h4 className="text-sm text-muted-foreground mb-2">
                {item.title}
              </h4>
              <p className="font-medium">{item.value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}