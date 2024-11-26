'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Users, ClipboardList, Check } from 'lucide-react';
import Sidebar from '../Sidebar/page';
import Layout from '../Layout';
const Assessment = () => {
  const modules = [
    { id: 1, name: 'Module 1', completed: true },
    { id: 2, name: 'Module 2', completed: false },
    { id: 3, name: 'Module 3', completed: false },
  ];
  const options = [
    { id: 'A', value: '54' },
    { id: 'B', value: '50' },
    { id: 'C', value: '75' },
    { id: 'D', value: '34' },
  ];
  return (
    <Layout>
    <div className="flex h-screen bg-gray-50">
     
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Module List */}
        <div className="w-48 border-r pr-8">
          {modules.map((module) => (
            <div
              key={module.id}
              className="flex items-center justify-between py-3 border-b"
            >
              <span>{module.name}</span>
              {module.completed && (
                <Check size={16} className="text-green-500" />
              )}
            </div>
          ))}
        </div>
        {/* Question Area */}
        <div className="flex-1 ml-12">
          <div className="max-w-2xl border border-gray-200 rounded-lg p-8">
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Module 1</h2>
              <h3 className="text-[#FBBC05] text-xl font-bold mt-4">Question 2</h3>
              <p className="mt-4 text-lg">How many countries are there in Africa?</p>
            </div>
            <div className="space-y-3">
              {options.map((option) => (
                <div
                  key={option.id}
                  className={`p-3 rounded-md cursor-pointer transition-colors
                    ${option.id === 'A' ? 'bg-[#FFF3DC]' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                  <span className="font-medium">{option.id} </span>
                  {option.value}
                </div>
              ))}
            </div>
           <Link href="/Submission"> <button className="mt-8 bg-[#1A315C] text-white px-8 py-2 rounded-md hover:bg-[#234173]">
              SUBMIT
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};
export default Assessment;