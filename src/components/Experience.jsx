import { Card } from "flowbite-react";

const Experience = () => {
  return (
    <Card className="mt-4 mx-auto">
      <h2 className="text-2xl text-center md:text-3xl text-blue-600 font-bold">
        Experience
      </h2>

      {/* BDR - Teleperformance */}
      <Card>

        <div className="mb-8">
        <h3 className="text-lg md:text-2xl font-semibold text-indigo-600 mb-3">
          Business Development Representative (BDR)
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Teleperformance – Toronto | Jan 2023 – Jun 2024
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400 space-y-1">
          <li>Consulted with businesses on Google Cloud solutions, improving efficiency and scalability.</li>
          <li>Used CRM tools to manage leads, track pipeline, and optimize sales workflows.</li>
          <li>Collaborated cross-functionally to refine processes and deliver client-focused solutions.</li>
          <li>Consistently exceeded targets (120% quota in last quarter).</li>
        </ul>
      </div>
      </Card>
      

      {/* Sales Representative - Connect6 */}
    <Card>
          <div>
        <h3 className="text-lg md:text-2xl  font-semibold text-indigo-600">
          Sales Representative
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Connect6 Group – Toronto | Aug 2022 – Jan 2023
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-gray-400 space-y-1">
          <li>Conducted prospecting through calls/emails and converted leads into opportunities.</li>
          <li>Applied needs-analysis to deliver tailored solutions in security and telecom services.</li>
          <li>Built strong client relationships, improving retention and upsell opportunities.</li>
        </ul>
      </div>
    </Card>
    </Card>
  );
};

export default Experience;
