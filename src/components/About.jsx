import React from 'react';
import { Card } from 'flowbite-react';

const About = () => {
  return (
    <Card className="bg-white dark:bg-gray-800 mx-auto my-5">
      <h2 className="text-2xl text-center md:text-3xl font-bold tracking-tight  text-blue-600 mb-3">
        About Me
      </h2>

      <p className="mb-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
        I have always been a tech enthusiast. My recent role as a Business Development Representative (BDR) working with Teleperformance as a vendor for Google exposed me closely to SaaS, IaaS, and various programming-related solutions. This sparked my deep interest in programming and software development.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
        I started my programming journey with <strong>The Odin Project</strong>, an online curriculum, and later took a serious step by enrolling in the <strong>Programming Hero Full Stack Web Development program</strong>. This is where I began my exciting MERN stack development journey.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
        I enjoy problem-solving that brings comfort and time-saving benefits to others’ lives. Creating practical, efficient solutions is what drives my passion for coding.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
        Outside programming, I’m passionate about sports and fitness, especially gym workouts and football. I’m a big Manchester United fan and love the camaraderie and thrill the sport brings.
      </p>

      <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
        Overall, I’m an enthusiastic learner and a persistent problem-solver who believes in continuous growth and making a positive impact through technology.
      </p>
    </Card>
  );
};

export default About;
