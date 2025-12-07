import { Github, ExternalLink } from "lucide-react";
import biApp1 from "@/assets/bi-app1.png";
import biApp2 from "@/assets/bi-app2.png";
import biApp3 from "@/assets/bi-app3.png";
import biApp4 from "@/assets/bi-app4.png";
import biApp5 from "@/assets/bi-app5.png";
import superRes from "@/assets/superRes.png";

import chatbot from "@/assets/chatbot.png";
import ProjectSlider from "@/components/portfolio/ProjectSlider";
import { Reveal, FadeInStagger, FadeInItem } from "@/components/animations/Reveal";

const ProjectsSection = () => {
    const featuredProjects = [
        {
            title: "NLP-Powered Business Intelligence App",
            description: "An intuitive NLP-based chatbot that interprets user queries and translates them into SQL queries. Users can customize reports, visualize data through dynamic graphs, and access multiple backend databases seamlessly.",
            images: [biApp1, biApp2, biApp3, biApp4, biApp5],
            technologies: ["React.js", "Next.js", "Flask", "PostgreSQL", "Firebase", "LangChain", "ChromaDB", "OpenAI API"],
            github: "https://github.com/talhaty/NLP-Powered-BI-App",
        },
        {
            title: "Multi-Functional AI Chatbot",
            description: "Developed a versatile AI chatbot with internet, Gmail, document summarization, and database query integration. Optimized token usage with vector-based storage and enhanced productivity with AI-driven automation",
            images: [chatbot],
            technologies: ["Python", "LangChain", "RAG", "Zapier", "Google API", "OpenAI API", "Vector DB"],
            github: "https://github.com/talhaty/Chatbot-Fintech",
        },
        {
            title: "Hyperspectral Image Super-Resolution",
            description: "Developed a deep learning model using spatiotemporal attention and CNNs to enhance hyperspectral image resolution while preserving spectral information.",
            images: [superRes],
            technologies: ["Python", "PyTorch", "CNN", "Attention Mechanisms", "ResNet"],
            github: "https://github.com/talhaty/Super-Resolution",
        },
    ];

    const otherProjects = [
        {
title: "Procedurally Generated 3D Maze Game",
description: "Designed and developed an engaging 3D maze game in Unity with procedural generation, ensuring unique and challenging layouts. Implemented an intuitive UI, realistic physics, and immersive graphics for enhanced player experience.",
technologies: ["Unity", "C#", "Procedural Generation", "Physics Engine", "3D Modeling"],
},
{
title: "Moon Image Resolution Enhancer",
description: "Created an AI-based solution to enhance moon images from mobile cameras using YOLO and autoencoders. Developed a React Native app for user-friendly detection and super-resolution.",
technologies: ["React Native", "YOLO", "Autoencoder", "Python"],
},
{
title: "Social Media App",
description: "Developed a social media app with user login, registration, posting, liking, commenting, and profile management using Java and Firebase.",
technologies: ["Java", "Firebase", "Android Studio"],
},
{
title: "Graph Visualizer",
description: "Desktop application visualizing graph algorithms like BFS, DFS, Dijkstra, Prim, and Kruskal. Built with C#, WinForms, and SFML for interactive visualization.",
technologies: ["C#", ".NET", "WinForms", "SFML", "Graph Algorithms"],
},
{
title: "Voting Website (Web3)",
description: "Blockchain-based voting platform using Solidity, React, and Web3JS. Implemented smart contracts for candidate registration and vote counting with real-time transparent results.",
technologies: ["Solidity", "React", "Web3JS", "Ethereum"],
},
{
title: "Multispectral Image Compression",
description: "Implemented PCA on multispectral satellite images to identify useful bands for efficient compression, analyzing and comparing information loss using Python and Scikit-Learn.",
technologies: ["Python", "Scikit-Learn", "Geopandas", "PCA"],
},
        
    ];

    return (
        <section id="projects" className="min-h-screen py-24 px-4">
            <div className="container mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="section-title text-center">My Projects</h2>
                </Reveal>

                <div className="space-y-24 mt-16">
                    {featuredProjects.map((project, index) => (
                        <Reveal key={index}>
                            <div className="grid md:grid-cols-2 gap-24 items-center neobrutalist-card md:relative">
                                <div className="relative group overflow-hidden rounded-lg ring-1 ring-primary/10">
                                    <ProjectSlider images={project.images} title={project.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Featured Project</p>
                                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="relative bg-foreground/5 border border-border/60 rounded-xl shadow-lg p-6 md:p-8 md:-ml-16 backdrop-blur-sm">
                                        <p className="text-foreground/80 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-secondary font-mono text-sm">
                                        {project.technologies.map((tech, index) => (
                                            <span key={tech} className="opacity-90">
                                                {tech}
                                                {index < project.technologies.length - 1 && (
                                                    <span className="mx-2 text-foreground/40">•</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex justify-end gap-4 mt-6">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full border border-primary/40 p-2 text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                                            aria-label="View source code on GitHub"
                                        >
                                            <Github size={24} />
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-24">
                    <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Other Noteworthy Projects</h3>
                    <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherProjects.map((project, index) => (
                            <FadeInItem
                                key={index}
                                className="relative neobrutalist-card h-full flex flex-col group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl after:pointer-events-none after:absolute after:-right-10 after:-top-10 after:h-24 after:w-24 after:rounded-full after:bg-primary/20 after:blur-3xl after:opacity-0 group-hover:after:opacity-100"
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h4>
                                    
                                </div>

                                <p className="text-foreground/80 leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/60">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[11px] font-mono text-secondary/90 bg-secondary/5 border border-secondary/30 rounded-full px-2.5 py-1 transition-colors group-hover:bg-secondary/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </FadeInItem>
                        ))}
                    </FadeInStagger>
                </Reveal>
            </div>
        </section>
    );
};

export default ProjectsSection;