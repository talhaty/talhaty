import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export const SOCIAL_LINKS = [
  { 
    icon: Github, 
    href: "https://github.com/talhaty", 
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/talha-yunus-8169aa182/", 
    label: "LinkedIn" 
  },
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/teewhy.iso/", 
    label: "Instagram" 
  },
  { 
    icon: Twitter, 
    href: "https://x.com/teewhy_2002", 
    label: "Twitter" 
  },
] as const;

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTIONS = ["hero", "about", "skills", "experience", "projects", "contact"] as const;

export const EMAIL = "talhayounas0348@gmail.com";

export const MOBILE_BREAKPOINT = 768;
