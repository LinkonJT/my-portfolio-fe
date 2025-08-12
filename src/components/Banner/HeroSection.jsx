import React from "react";
import { Card, Button } from "flowbite-react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Card className="mx-auto bg-gray-100 shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://i.ibb.co.com/jBTFS01/forgit.jpg"
          alt="Linkon Tripura"
          className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500"
        />
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-600 mb-3">
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
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Download Resume
            </a>

            {/* Social Icons */}
            <div className="flex space-x-4 text-indigo-600 text-2xl">
              <a
                href="https://github.com/LinkonJT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-indigo-800"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/linkontripura/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-indigo-800"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-indigo-800"
              >
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
