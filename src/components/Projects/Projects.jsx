import React, { useState } from "react";
import { Card, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "NewLeaf Insurance",
    image: "/Logo_nLeaf.png",
    techStack: ["React", "Node.js", "MongoDB", "Firebase", "Stripe"],
    description:
      "A role-based MERN stack insurance platform with policy management, payments, and dashboards.",
    liveLink: "https://newleaf-insurance.web.app/",
    githubLink: "https://github.com/LinkonJT/newleaf-insurance-client-lj",
    challenges:
      "Handling complex role-based routing and secure payment integration.",
    improvements:
      "Add AI-based policy recommendations and improve mobile UX.",
  },
  {
    name: "RoomMate Finder",
    image: "/roommate.png",
    techStack: ["React", "Express", "MongoDB", "Firebase Auth"],
    description:
      "Platform to find compatible roommates with profile matching and chat system.",
    liveLink: "https://roommate-finder-website-f7f07.web.app/",
    githubLink: "https://github.com/LinkonJT/roommate-finder-client-lj",
    challenges: "Managing real-time messaging and search filtering.",
    improvements: "Add location-based suggestions and better search speed.",
  },
  {
    name: "TourNow",
    image: "/TourNow.png",
    techStack: ["React", "Node.js", "MongoDB", "JWT Auth"],
    description:
      "Tour booking management app with admin, agent, and customer roles.",
    liveLink: "https://tour-now-client.web.app/",
    githubLink: "https://github.com/LinkonJT/Tour-Now-A11C17-Client",
    challenges: "Synchronizing booking data and managing cancellations.",
    improvements: "Add AI-generated travel recommendations.",
  },
];

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Card className="mt-4">
        <h2 className="text-lg md:text-3xl text-blue-600 font-bold mb-6 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
  <Card key={index} className="max-w-sm">
    <img
      src={project.image}
      alt={`${project.name} preview`}
      className="w-full h-60 object-cover rounded-md"
    />
    <h5 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {project.name}
    </h5>
    <Button onClick={() => handleOpen(project)} className="mt-4 ">
      Details
      <svg
        className="-mr-1 ml-2 h-4 w-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  </Card>
))}

        </div>
      </Card>

      {/* Modal */}
      {selectedProject && (
        <Modal
          show={openModal}
          dismissible
          onClose={handleClose}
          size="lg"
          popup
        >
          <ModalHeader>{selectedProject.name}</ModalHeader>
         <ModalBody className="bg-gray-300">
  <div className="space-y-4">
    <img
      src={selectedProject.image}
      alt={`${selectedProject.name} preview`}
      className="w-full h-auto rounded-md"
    />
    <p>
      <strong>Technology Stack:</strong> {selectedProject.techStack.join(", ")}
    </p>
    <p>
      <strong>Description:</strong> {selectedProject.description}
    </p>
    <p>
      <strong>Challenges:</strong> {selectedProject.challenges}
    </p>
    <p>
      <strong>Improvements:</strong> {selectedProject.improvements}
    </p>
    <p>
      <strong>Live Project:</strong>{" "}
      <a
        href={selectedProject.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Visit Here
      </a>
    </p>
    <p className="flex items-center gap-2">
      <FaGithub />
      <a
        href={selectedProject.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 underline"
      >
        GitHub Client Repository
      </a>
    </p>
  </div>
</ModalBody>

          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};

export default Projects;
