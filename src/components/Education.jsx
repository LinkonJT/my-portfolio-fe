import React from "react";
import { Card } from "flowbite-react";

const Education = () => {
  return (
    <Card className="mx-auto mt-4">
      <h2 className="text-2xl text-center md:text-3xl text-blue-600 font-bold mb-3">Educational Qualification</h2>
      
      {/* Post Grad Diploma */}
      <Card className="mb-4">
        <h3 className=" text-lg md:text-xl font-semibold text-gray-100">Accounting (Post Grad Diploma)</h3>
        <p className="text-gray-600">January 2020 – May 2021 | Seneca College</p>
        <p className="mt-2 text-gray-300">
          <span className="font-medium text-gray-100">Relevant Coursework:</span> Managerial Accounting, Taxation, Intermediate Accounting
        </p>
        <p className="mt-1 text-gray-100">
          <span className="font-medium text-gray-200">CGPA:</span> 3.70 / 4.00
        </p>
      </Card>

      {/* BBA */}
      <Card>
        <h3 className="text-lg md:text-xl font-semibold text-gray-100">BBA in Finance and Accounting</h3>
        <p className="text-gray-600">January 2014 – December 2017 | University of Information Technology and Sciences</p>
        <p className="mt-2 text-gray-300">
          <span className="font-medium text-gray-100">Relevant Coursework:</span> Cost Accounting, Insurance and Banking, Corporate Finance, Financial Accounting, Management Accounting, Investment Management
        </p>
        <p className="mt-1 text-gray-200">
          <span className="font-medium text-gray-100">CGPA:</span> 3.86 / 4.00
        </p>
      </Card>
    </Card>
  );
};

export default Education;
