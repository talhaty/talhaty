import { useState } from "react";
import { cn } from "@/lib/utils";
import dataLogicLogo from "@/assets/dataLogic.png";
import altVenturesLogo from "@/assets/altVentures.jpg";
import keystoneLogo from "@/assets/keystone.png";
import { Reveal } from "@/components/animations/Reveal";

const ExperienceSection = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const experiences = [
{
company: "Data Logic Solution",
role: "Machine Learning Engineer",
date: "July 2024 – Aug 2025",
description: [
"Developed Chatterlytics.ai, a Business Analytics Copilot with Enterprise Privacy, enabling non-technical users to perform ad hoc reporting and create data dashboards.",
"Built an LLM-powered chatbot connected to databases for querying and visualizing data in multiple chart formats.",
"Created dynamic dashboards allowing users to save and organize favorite charts for a comprehensive view of business KPIs.",
"Integrated conversational AI features to provide on-the-fly insights, queries, and visualizations.",
],
image: dataLogicLogo,
},
{
company: "ALT Ventures",
role: "AI Intern",
date: "June 2023 – July 2023",
description: [
"Developed and deployed a versatile chatbot integrating internet functionalities, email automation, and document summarization using LangChain, Vector Database, RAG, Zapier, and Google API.",
"Researched and fine-tuned AI models, including realistic deepfake video generation with Roop and voice cloning with RVC.",
],
image: altVenturesLogo,
},
{
company: "Keystone Consulting (Pvt.) Limited",
role: "Software Engineer Intern",
date: "June 2023 – March 2024",
description: [
"Developed an advanced business intelligence visualization application leveraging NLP techniques to improve data interoperability and decision-making.",
"Integrated LangChain and OpenAI technologies, creating multiple Python scripts for a sophisticated chatbot interface.",
"Enhanced user interaction and automated responses through chatbot-driven workflows.",
],
image: keystoneLogo,
},
];

  return (
    <section id="experience" className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="section-title">Experience</h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Reveal y={12}>
              <ul className="flex md:flex-col neobrutalist-card p-2">
                {experiences.map((exp, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCompany(index)}
                      className={cn(
                        "w-full p-3 text-left text-sm font-mono transition-colors duration-300",
                        selectedCompany === index
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                      )}
                    >
                      {exp.company}
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal>
              <div className="neobrutalist-card p-8">
                <div className="flex items-center mb-2">
                  {experiences[selectedCompany].image && (
                    <img
                      src={experiences[selectedCompany].image}
                      alt={experiences[selectedCompany].company}
                      className="h-8 w-8 mr-3 rounded object-contain bg-white/10 p-1"
                    />
                  )}
                  <h3 className="text-xl font-bold text-foreground">
                    {experiences[selectedCompany].role} @ <span className="text-primary">{experiences[selectedCompany].company}</span>
                  </h3>
                </div>
                <p className="text-sm font-mono text-gray-400 mt-1 mb-6">{experiences[selectedCompany].date}</p>
                <ul className="space-y-3">
                  {experiences[selectedCompany].description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary mr-3 mt-2 flex-shrink-0" style={{ transform: 'rotate(45deg)' }}></div>
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;