import React from 'react';
import { Card } from 'flowbite-react';

const Skills = () => {
  const cardClasses =
    'w-28 sm:w-36 md:w-40 flex flex-col items-center text-center';
  const imgWrapperClasses = 'h-20 sm:h-24 md:h-28 flex items-center justify-center';
  const imgClasses = 'max-h-full object-contain';

  return (
       <Card>
    <div className="mx-auto py-4">
  
         <h2 className="text-lg md:text-3xl font-bold mb-12 text-center text-blue-600">
        Skills
      </h2>

      {/* Frontend */}
      <div className="mb-12">
        <h3 className="text-lg md:text-2xl font-semibold mb-8 text-gray-200">Frontend</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/n8PJpKDH/HTML5.png" alt="HTML5" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">HTML5</h5>
          </Card>
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/Nd7k6zMH/css3.png" alt="CSS3" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">CSS3</h5>
          </Card>
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/S4DyWp4M/tailwind-Css.png" alt="TailwindCSS" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">TailwindCSS</h5>
          </Card>
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/sJj4zQtz/javascript.png" alt="JavaScript" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">JavaScript</h5>
          </Card>
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/zV63dDSw/react.png" alt="React" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">React</h5>
          </Card>
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/vCPXnxxd/react-router.png" alt="React Router" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">React Router</h5>
          </Card>
        </div>
      </div>

      {/* Backend */}
      <div className="mb-12">
        <h3 className="text-lg md:text-2x font-semibold mb-8 text-gray-200">Backend</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/7JLp9ZwG/node-js.png" alt="Node.js" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">Node.js</h5>
          </Card>
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/HTQcnKQf/express-Js.png" alt="Express.js" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">Express.js</h5>
          </Card>
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/fVzjy04v/mongoDB.png" alt="MongoDB" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">MongoDB</h5>
          </Card>
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-lg md:text-2x font-semibold mb-8 text-gray-200">Tools</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/cXJJhG3Q/daisyUi.png" alt="DaisyUI" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">DaisyUI</h5>
          </Card>
          <Card className={cardClasses}>
            <div className={imgWrapperClasses}>
              <img src="https://i.ibb.co.com/Vn0tPBk/Flobite.png" alt="Flowbite" className={imgClasses} />
            </div>
            <h5 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">Flowbite</h5>
          </Card>
        </div>
      </div>
  
    </div>
       </Card>
  );
};

export default Skills;
