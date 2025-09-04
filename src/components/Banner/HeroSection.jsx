import React from "react";
import { Card, Button } from "flowbite-react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <Card className="mx-auto bg-gray-100 shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
       <div className="relative w-48 h-48 rounded-full flex items-center justify-center">
  {/* Rotating background */}
  <motion.div
    className="absolute inset-0.5 rounded-full"
    style={{
      background: "conic-gradient(from 0deg, #1e3a8a, #3b82f6, #1e3a8a)",
    }}
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
  />

  {/* Image stays centered */}
  <img
    src="https://i.ibb.co/jBTFS01/forgit.jpg"
    alt="Linkon Tripura"
    className="w-44 h-44 rounded-full object-cover z-10"
  />
</div>


        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl font-bold text-sky-700 dark:text-sky-600 mb-3">
            <Typewriter
              options={{
                strings: ["MERN-Stack Developer", "Front-End Developer"],
                autoStart: true,
                loop: true,
                pauseFor: 1500,
              }}
            />
          </h1>
          <p className="mb-4 text-md md:text-lg text-gray-400">
            Hi, I'm Linkon, a MERN-stack developer passionate about building web
            apps with React, Node.js, Express and MongoDB. I've created several
            projects that focus on delivering user-friendly and efficient
            solutions. Excited to grow and take on new challenges, I'm ready to
            bring my skills to impactful real-world projects.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <a
              href="/resume.pdf"
              download="Linkon_Tripura_Resume.pdf"
              className="inline-block hover:bg-sky-500 dark:hover:bg-sky-600 bg-sky-700 text-white px-6 py-3 rounded-md  transition">
              Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex space-x-4 text-sky-700 text-2xl">
              <a
                href="https://github.com/LinkonJT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-sky-500">
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/linkontripura/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-sky-500">
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-sky-500">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroSection;
