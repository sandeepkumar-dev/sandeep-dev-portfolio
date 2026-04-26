import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // 1️⃣ Send message to YOU
      const result = await emailjs.send(
        "service_3agk3v3",
        "template_u0z2pn7",
        formData,
        "fCidStCj8yB1RJ2to",
      );

      console.log("Main email sent:", result.text);
      toast.success("Message sent successfully 🎉");

      // 2️⃣ ONLY IF SUCCESS → send auto reply
      await emailjs.send(
        "service_3agk3v3",
        "template_n4drs67",
        formData,
        "fCidStCj8yB1RJ2to",
      );

      console.log("Auto reply sent");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message ❌");
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6">Let's Talk</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="mb-1">Email</h4>
                  <a
                    href="mailto:kr.sandeep1997@yahoo.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    kr.sandeep1997@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="mb-1">Phone</h4>
                  <a
                    href="tel:+918319944822"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-8319944822
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="mb-1">Location</h4>
                  <p className="text-muted-foreground">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-black dark:bg-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-black dark:bg-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-black dark:bg-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "success" ? (
                  "✓ Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
