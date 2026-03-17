import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    period: "Aug 2023 - Present",
    score: "CGPA: 6.30",
  },
  {
    institution: "Govt. Boys Model Higher Sec. School Mirgund",
    location: "Baramulla",
    degree: "Intermediate",
    period: "Dec 2020 – Dec 2021",
    score: "Percentage: 81%",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya Shahkote",
    location: "Baramulla",
    degree: "Matriculation",
    period: "Mar 2018 - Mar 2019",
    score: "Percentage: 79%",
  },
];

const EducationSection = () => {
  return (
    <div>
      <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">My Academic Journey</p>
      <h3 className="text-2xl md:text-3xl font-bold font-mono mb-8">Education</h3>

      <div className="relative border-l-2 border-primary/20 ml-2 space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8"
          >
            <div className="absolute -left-[13px] top-1 bg-background border-2 border-primary w-6 h-6 rounded-full flex items-center justify-center shadow-[0_0_8px_hsl(var(--primary)/0.3)]">
              <GraduationCap className="w-3 h-3 text-primary" />
            </div>

            <motion.div
              whileHover={{ x: 5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group bg-secondary/20 border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-base md:text-lg font-bold transition-colors group-hover:text-primary">{edu.degree}</h4>
                  <p className="text-primary font-mono text-xs mt-1">{edu.institution}</p>
                </div>
                <span className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-0.5 rounded-full w-fit group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {edu.period}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                <MapPin className="w-3 h-3" />
                <span className="text-xs">{edu.location}</span>
              </div>

              <div className="bg-secondary/50 rounded-lg p-2 inline-block border border-border/50 group-hover:border-primary/20 transition-colors">
                <p className="font-mono text-xs font-medium text-foreground">Score: <span className="text-primary">{edu.score}</span></p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
