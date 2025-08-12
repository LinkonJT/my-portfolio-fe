import React from 'react';
import { Card } from 'flowbite-react';

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        Skills
      </h2>

      {/* Frontend */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-8 text-indigo-600">Frontend</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <Card className="max-w-sm" imgAlt="HTML5" imgSrc="https://i.ibb.co.com/n8PJpKDH/HTML5.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              HTML5
            </h5>
          </Card>
          <Card className="max-w-sm" imgAlt="CSS3" imgSrc="https://i.ibb.co.com/Nd7k6zMH/css3.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              CSS3
            </h5>
          </Card>
          <Card className="max-w-sm" imgAlt="TailwindCSS" imgSrc="https://i.ibb.co.com/S4DyWp4M/tailwind-Css.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              TailwindCSS
            </h5>
          </Card>
          <Card className="max-w-sm" imgAlt="JavaScript" imgSrc="https://i.ibb.co.com/sJj4zQtz/javascript.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              JavaScript
            </h5>
          </Card>
          <Card className="max-w-sm" imgAlt="React" imgSrc="https://i.ibb.co.com/zV63dDSw/react.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              React
            </h5>
          </Card>
          <Card className="max-w-sm" imgAlt="React Router" imgSrc="https://i.ibb.co.com/vCPXnxxd/react-router.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              React Router
            </h5>
          </Card>
        </div>
      </div>

      {/* Backend */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-8 text-indigo-600">Backend</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <Card className="max-w-sm" imgAlt="Node.js" imgSrc="https://i.ibb.co.com/7JLp9ZwG/node-js.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Node.js
            </h5>
          </Card>
          <Card className="max-w-sm" imgAlt="Express.js" imgSrc="https://i.ibb.co.com/HTQcnKQf/express-Js.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Express.js
            </h5>
          </Card>
          <Card className="max-w-sm" imgAlt="MongoDB" imgSrc="https://i.ibb.co.com/fVzjy04v/mongoDB.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              MongoDB
            </h5>
          </Card>
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-indigo-600">Tools</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <Card className="max-w-sm" imgAlt="DaisyUI" imgSrc="https://i.ibb.co.com/cXJJhG3Q/daisyUi.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              DaisyUI
            </h5>
          </Card>
          <Card className="max-w-sm" imgAlt="Flowbite" imgSrc="https://i.ibb.co.com/Vn0tPBk/Flobite.png">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Flowbite
            </h5>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
