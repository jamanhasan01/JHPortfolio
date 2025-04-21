import React from "react";
import { 
  SiReact, 
  SiFirebase, 
  SiExpress, 
  SiMongodb, 
  SiFigma, 
  SiGithub, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3, 
  SiJavascript 
} from "react-icons/si";
import ShineBorderDemo from '../../Components/ShineBorderDemo';
import { TextReveal } from "@/components/magicui/text-reveal";
import Title from "../../Components/Title";

const Skils = () => {
  const skillsData = [
    {
      id: 1,
      name: "React.js",
      icon: <SiReact className="text-[#61DAFB] text-5xl" />,
      description: "React is a popular JavaScript library for building user interfaces, particularly for single-page applications (SPAs).",
    },
    {
      id: 2,
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248] text-5xl" />,
      description: "MongoDB is a popular NoSQL database designed for modern applications that require flexibility, scalability, and performance.",
    },
    {
      id: 3,
      name: "Firebase",
      icon: <SiFirebase className="text-[#FFCA28] text-5xl" />,
      description: "Firebase Authentication makes it easy to implement user sign-up, sign-in, and authentication features.",
    },
    {
      id: 4,
      name: "Express.js",
      icon: <SiExpress className="text-[#000000] text-5xl" />,
      description: "Express.js is a minimalist and flexible web framework for Node.js that helps developers build robust web applications and APIs.",
    },
    {
      id: 5,
      name: "Figma",
      icon: <SiFigma className="text-[#F24E1E] text-5xl" />,
      description: "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications.",
    },
    {
      id: 6,
      name: "GitHub",
      icon: <SiGithub className="text-[#181717] text-5xl" />,
      description: "GitHub is a platform for version control and collaboration that lets developers work together on projects.",
    },
    {
      id: 7,
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4] text-5xl" />,
      description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      id: 8,
      name: "HTML",
      icon: <SiHtml5 className="text-[#E34F26] text-5xl" />,
      description: "HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 9,
      name: "CSS",
      icon: <SiCss3 className="text-[#1572B6] text-5xl" />,
      description: "CSS is a style sheet language used for describing the presentation of a document written in HTML.",
    },
    {
      id: 10,
      name: "JavaScript",
      icon: <SiJavascript className="text-[#F7DF1E] text-5xl" />,
      description: "JavaScript is a programming language that enables interactive web pages and is an essential part of web applications.",
    },
  ];

  return (
    <section className="bg-slate-750 border-y border-gray-500">
      <div className="container mx-auto px-4 py-8">
        <Title title={'My Tech Stack'}></Title>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col relative justify-between items-center text-center border p-4 border-gray-600 rounded-xl w-full"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
            
              <ShineBorderDemo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skils;