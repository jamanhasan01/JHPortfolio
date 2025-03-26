import React from "react";
import react from "../../assets/reactjs.png";
import firebase from "../../assets/firebase.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import ShineBorderDemo from '../../Components/ShineBorderDemo';
import { TextReveal } from "@/components/magicui/text-reveal";
const Skils = () => {
  const skillsData = [
    {
      id: 1,
      name: "React.Js",
      image: react,
      description: "React is a popular JavaScript library for building user interfaces, particularly for single-page applications (SPAs).",
    },
    {
      id: 2,
      name: "MongoDB Database",
      image: mongodb,
      description: "MongoDB is a popular NoSQL database designed for modern applications that require flexibility, scalability, and performance.",
    },
    {
      id: 3,
      name: "Firebase",
      image: firebase,
      description: "Firebase Authentication makes it easy to implement user sign-up, sign-in, and authentication features.",
    },
    {
      id: 4,
      name: "Express.js",
      image: express,
      description: "Express.js is a minimalist and flexible web framework for Node.js that helps developers build robust web applications and APIs.",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-10 text-center">Skills & Services</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col relative justify-between items-center text-center border p-4 border-gray-600 rounded-xl w-full"
            >
              <img
                className="max-w-[80px] mb-4"
                src={skill.image}
                alt={skill.name}
              />
              <h3 className="text-2xl font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.description}</p>
              <ShineBorderDemo/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skils;