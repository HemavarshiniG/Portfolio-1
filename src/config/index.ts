import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Hemavarshini G | Java Full Stack Developer",
  author: "Hemavarshini G",
  description:
    "Information Technology undergraduate passionate about Artificial Intelligence, Machine Learning,Java Full Stack Development and building impactful software solutions.",

  lang: "en",

  siteLogo: "/profile.png",

  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "Education", href: "#experience" },
    { text: "About", href: "#about" },
  ],

  socialLinks: [
    {
      text: "GitHub",
      href: "https://github.com/HemavarshiniG",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/hemavarshini-g/",
    },
    {
      text: "Email",
      href: "mailto:hemavarshinivarsh@gmail.com",
    },
  ],

  socialImage: "/profile.png",

  canonicalURL: "",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Hemavarshini G",

    specialty: "Java Full Stack Developer",

    summary:
      "Information Technology undergraduate passionate about Artificial Intelligence, Machine Learning, NLP and Java Full Stack Development. I enjoy building innovative software solutions that solve real-world problems.",

    email: "hemavarshinivarsh@gmail.com",
  },

  experience: [
    {
      company: "PSNA College of Engineering and Technology",

      position: "B.Tech Information Technology",

      startDate: "2023",

      endDate: "2027",

      summary: [
        "Current CGPA : 8.6",
        "Vice President of Build Club",
        "Member of Toastmasters International",
        "Active Hackathon Participant",
      ],
    },
  ],

  projects: [
    {
      name: "Music Notes to Audio Converter",

      summary:
        "An AI-powered application that converts musical notes from images or text into playable audio with support for multiple instruments and export features.",

      linkPreview: "/",

      linkSource: "#",

      image: "/spotifu.png",
    },

    {
      name: "Smart OD & Leave Request System",

      summary:
        "NLP-powered leave management system for students, faculty and HOD with intelligent request processing.",

      linkPreview: "/",

      linkSource: "#",

      image: "/clone-ig.png",
    },

    {
      name: "Placement Tracker",

      summary:
        "Java Full Stack application to manage placement activities, companies and student recruitment records.",

      linkPreview: "/",

      linkSource: "#",

      image: "/zen-og.png",
    },
  ],

  about: {
    description: `

I'm an Information Technology undergraduate passionate about Artificial Intelligence, Full Stack Development, and building software that solves real-world problems. I'm currently seeking opportunities to apply and expand my skills through impactful projects and professional experience.
`,

    image: "/profile.png",
  },
};