import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/sandeep-kumar' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { name: 'Email', icon: Mail, url: 'mailto:kr.sandeep1997@yahoo.com' },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              Built with React, JavaScript, and Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Sandeep Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
