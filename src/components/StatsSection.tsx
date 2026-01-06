import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface StatItemProps {
  value: string;
  suffix: string;
  label: string;
  delay?: number;
}

const StatItem = ({ value, suffix, label, delay = 0 }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center py-12 px-6 border-l border-border first:border-l-0"
    >
      <span className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
        {count}{suffix}
      </span>
      <span className="mt-4 text-sm md:text-base text-muted-foreground tracking-wide">
        {label}
      </span>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "200", suffix: "+", label: "Project Complete" },
    { value: "90", suffix: "%", label: "Client Satisfaction" },
    { value: "200", suffix: "M", label: "Revenue" },
  ];

  return (
    <section className="relative bg-secondary/50">
      
      <div className="relative z-20 mx-6 md:mx-12">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
