"use client";

import type React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader2,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { sendEmail } from "@/app/actions";

const contactItems = [
  {
    type: "Phone",
    value: "+234-915-762-0814",
    link: "tel:+2349157620814",
    icon: <Phone className="h-6 w-6 text-blue-400" />,
  },
  {
    type: "Email",
    value: "oluwasemilogoadeogun@gmail.com",
    link: "mailto:oluwasemilogoadeogun@gmail.com",
    icon: <Mail className="h-6 w-6 text-blue-400" />,
  },
  {
    type: "Address",
    value: "Lagos State, Nigeria",
    link: "https://www.google.com/maps?q=Lagos+State,+Nigeria",
    icon: <MapPin className="h-6 w-6 text-blue-400" />,
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setFormSubmitted(true);
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-950/10 to-background opacity-50"></div>

      <div className="container-section relative z-10" ref={ref}>
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse-slow"></div>
            <div className="relative bg-secondary p-3 rounded-full">
              <MessageSquare className="h-6 w-6 text-blue-400" />
            </div>
          </div>
        </div>

        <h2 className="section-title">
          Contact <span>Info</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={cn(
              "space-y-8 transition-all duration-1000 transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            {contactItems.map((item, index) => (
              <a
                key={item.type}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-6 glass-effect rounded-xl card-hover"
              >
                <div className="p-3 bg-blue-900/50 rounded-lg mr-4 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-blue-300">
                    {item.type}
                  </h3>
                  <p className="text-foreground/70">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Reach Out to Me😁
              </h3>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-300">
                    Message Sent!
                  </h4>
                  <p className="text-foreground/70">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                  <Button
                    className="mt-6 rounded-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1 text-blue-300"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-blue-950/30 border-blue-500/30 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1 text-blue-300"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-blue-950/30 border-blue-500/30 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1 text-blue-300"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      required
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-blue-950/30 border-blue-500/30 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1 text-blue-300"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-blue-950/30 border-blue-500/30 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-blue-600 hover:bg-blue-700 btn-glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-[5%] w-16 h-16 border border-blue-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-[8%] w-12 h-12 border border-blue-500/20 rounded-full animate-spin-slow"></div>
    </section>
  );
};

export default Contact;
