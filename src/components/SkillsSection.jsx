import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // 🧠 ML / CV / AI
  { name: "PyTorch", level: 90, category: "ML" },
  { name: "KANs / Symbolic ML", level: 85, category: "ML" },
  { name: "YOLOv8 / YOLOv11", level: 85, category: "ML" },
  { name: "Scikit-learn", level: 80, category: "ML" },
  { name: "Matplotlib", level: 80, category: "ML" },
  { name: "NumPy", level: 85, category: "ML" },
  { name: "Pandas", level: 85, category: "ML" },
  { name: "SentenceTransformers", level: 75, category: "ML" },
  { name: "HuggingFace (BLIP, Transformers)", level: 85, category: "ML" },
  { name: "Google GenAI (Gemini API)", level: 80, category: "ML" },
  { name: "ResNet-50", level: 70, category: "ML" },

  // 🧩 Infra / Systems / DevOps
  { name: "FastAPI", level: 80, category: "infra" },
  { name: "Docker", level: 75, category: "infra" },
  { name: "PostgreSQL", level: 70, category: "infra" },
  { name: "Prometheus & Grafana", level: 65, category: "infra" },
  { name: "LangChain", level: 65, category: "infra" },
  { name: "Firebase", level: 60, category: "infra" },
  { name: "AWS / GCP", level: 60, category: "infra" },
  { name: "CI/CD (GitHub Actions)", level: 60, category: "infra" },
  { name: "Linux", level: 70, category: "infra" },
  { name: "ROS (learning)", level: 40, category: "infra" },

  // 💻 Frontend / UI
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Streamlit", level: 80, category: "frontend" },
  { name: "Tkinter GUI", level: 70, category: "frontend" },
  { name: "HTML/CSS/JS", level: 75, category: "frontend" },
  { name: "Figma", level: 65, category: "frontend" },

  // 📦 Common Tools / Daily Drivers
  { name: "VSCode", level: 90, category: "tools" },
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "Google Colab", level: 85, category: "tools" },
  { name: "Chrome DevTools", level: 70, category: "tools" },
  { name: "Jupyter Notebooks", level: 80, category: "tools" },
  { name: "Postman", level: 70, category: "tools" },
  { name: "Excel / MS Office", level: 70, category: "tools" },
  { name: "Windows API", level: 65, category: "tools" },
  { name: "Spotify API", level: 60, category: "tools" },
  { name: "Genius API", level: 60, category: "tools" },

  // 📐 Core Languages
  { name: "Python", level: 95, category: "languages" },
  { name: "C / C++", level: 85, category: "languages" },
  { name: "JavaScript", level: 80, category: "languages" },
  { name: "MATLAB", level: 75, category: "languages" },
];



const categories = ["all", "ML", "infra", "frontend", "tools", "languages"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
