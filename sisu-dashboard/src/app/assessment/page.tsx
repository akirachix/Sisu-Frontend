import React from "react";
import { Bell } from "lucide-react";
import Layout from "../Layout/layout";

const AssessmentUI = () => {
  return (
    <Layout>
      <div className="flex h-screen bg-gray-100">
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Assessments per modules</h1>
            <Bell size={24} className="text-navy-800" />
          </div>

          <div className="flex space-x-8">
            <div className="w-1/4">
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-white p-3 rounded-md shadow">
                  <span>Module 1</span>
                  <span className="text-green-500">✓</span>
                </li>
                <li className="bg-white p-3 rounded-md shadow">Module 2</li>
                <li className="bg-white p-3 rounded-md shadow">Module 3</li>
              </ul>
            </div>

            <div className="w-3/4 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Module 1</h2>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  Question 2
                </h3>
                <p className="text-lg mb-4">
                  How many countries are there in Africa?
                </p>
                <ul className="space-y-2">
                  {["54", "50", "75", "34"].map((answer, index) => (
                    <li
                      key={index}
                      className={`p-3 rounded-md ${
                        index === 0 ? "bg-yellow-100" : "bg-gray-100"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}) {answer}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right">
                <button className="text-navy-800">More ...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AssessmentUI;
