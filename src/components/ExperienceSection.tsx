import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <div>
      <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Professional Development</p>
      <h3 className="text-2xl md:text-3xl font-bold font-mono mb-8">Training</h3>

      <div className="grid gap-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -3, scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="group p-5 md:p-6 rounded-xl bg-secondary/20 border border-border/50 hover:border-primary/30 transition-all duration-300"
        >
          <p className="font-mono text-xs text-muted-foreground mb-2">Jun 2025 – Jul 2025</p>
          <h4 className="text-lg md:text-xl font-bold mb-1 transition-colors group-hover:text-primary">Fundamentals of Data Structures</h4>
          <p className="text-primary font-mono text-xs mb-5">Centre of Professional Enhancement</p>
          <ul className="space-y-3">
            {[
              "Completed intensive training covering core data structures and algorithms with real-world applications",
              "Developed multiple practice programs involving arrays, linked lists, stacks, queues, trees, and graphs",
              "Applied sorting and searching techniques to computational problems using Java",
              "Built mini projects demonstrating proficiency in data structure implementation and optimization"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (index * 0.08) }}
                className="flex items-start gap-2 text-muted-foreground text-sm"
              >
                <span className="text-primary mt-1.5 text-[6px] transition-transform group-hover:scale-150">■</span>
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceSection;
