import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "AI-Powered CCTV Anomaly Detection & Timeline Generation Platform",
    tech: "Python · PyTorch · OpenCV · Scikit-learn · Streamlit",
    period: "Oct 2025 – Dec 2025",
    points: [
      "Developed an end-to-end AI-based CCTV surveillance system to automatically detect and classify suspicious activities",
      "Designed a hybrid video intelligence pipeline using ResNet-based deep feature extraction, optical-flow motion analysis, and Random Forest classifier",
      "Built interactive Streamlit web interface for video upload, automated analysis, and timeline report generation",
      "Enabled accurate detection and visualization of multiple anomaly events across long surveillance videos through structured, time-based timelines",
    ],
    github: "https://github.com/FidaHussainWani",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
  },
  {
    title: "Library Management System",
    tech: "Java · Swing · OOP",
    period: "Jun 2025 - Jul 2025",
    points: [
      "Developed a desktop-based library management system to efficiently manage books, users, and issue/return operations",
      "Implemented secure user authentication with separate Admin and User roles using role-based access control",
      "Integrated fast search functionality using Trie, BST, and HashMap data structures for quick book retrieval",
      "Ensured data persistence across sessions through Java serialization and designed interactive Java Swing GUI using event-driven programming",
    ],
    github: "https://github.com/FidaHussainWani",
    images: [
      "/project-library-1.png",
      "/project-library-2.png",
      "/project-library-3.png",
      "/project-library-4.png",
      "/project-library-5.png",
    ],
  },
  {
    title: "Social Media Platform Backend",
    tech: "Spring Boot · Java · PostgreSQL · JWT · REST APIs",
    period: "Jan 2026 – Mar 2026",
    points: [
      "Built a robust backend application using Spring Boot that powers a comprehensive social media platform",
      "Developed secure RESTful APIs for managing users, posts, comments, and likes with complete CRUD operations",
      "Implemented JWT-based authentication and authorization system for secure user access and session management",
      "Designed PostgreSQL database schema with optimized relationships and queries for efficient data retrieval",
      "Integrated comprehensive error handling, input validation, and API documentation for seamless frontend integration",
    ],
    github: "https://github.com/FidaHussainWani",
    images: [
      "/social-media-1.jpg",
      "/social-media-2.png",
      "/social-media-3.png",
      "/social.media-4.png",
      "/social-media-5.png",
    ],
  },
];

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <div>
      <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">What I've built</p>
      <h3 className="text-2xl md:text-3xl font-bold font-mono mb-8">Projects</h3>

      <Accordion type="single" collapsible defaultValue="projects-section">
        <AccordionItem value="projects-section" className="border-border/50">
          <AccordionTrigger className="hover:text-primary transition-colors text-lg font-mono font-bold">
            Projects ({projects.length})
          </AccordionTrigger>
          <AccordionContent className="pt-6 pb-4">
            <div className="space-y-3 max-h-[800px] overflow-y-auto pr-2">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border border-border/50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                    className="w-full flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors text-left group"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold transition-colors group-hover:text-primary mb-1">{project.title}</h4>
                      <p className="font-mono text-primary text-xs truncate">{project.tech}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">{project.period}</span>
                      {project.github && (
                        <motion.a 
                          whileHover={{ scale: 1.1 }} 
                          whileTap={{ scale: 0.9 }} 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-1.5 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3.5 h-3.5" />
                        </motion.a>
                      )}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${expandedProject === project.title ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </button>
                  
                  {expandedProject === project.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border/50 bg-secondary/10 p-4 space-y-4"
                    >
                      {project.images && project.images.length > 0 && (
                        <div className="w-full">
                          <Carousel className="w-full">
                            <CarouselContent>
                              {project.images.map((image, imgIndex) => (
                                <CarouselItem key={imgIndex}>
                                  <div className="w-full h-80 rounded-lg overflow-hidden bg-secondary/20 border border-border/50">
                                    <img
                                      src={image}
                                      alt={`${project.title} - Screenshot ${imgIndex + 1}`}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                          </Carousel>
                          <p className="text-xs text-muted-foreground text-center mt-2">
                            {project.images.length} screenshots • Use arrow keys to navigate
                          </p>
                        </div>
                      )}
                      <ul className="space-y-2">
                        {project.points.map((point, j) => (
                          <li
                            key={j}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="text-primary mt-1 text-[6px]">■</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                      {project.live && (
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-foreground hover:text-primary transition-colors"
                        >
                          View Project <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProjectsSection;
