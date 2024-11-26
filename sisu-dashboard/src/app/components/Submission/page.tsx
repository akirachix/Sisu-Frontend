import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, ClipboardList, BarChart2 } from 'lucide-react';
const Submission = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 bg-[#1A315C] text-white">
        <div className="p-6 flex justify-center">
          <Image
            src="/images/ujuzi-logo-white.png"
            alt="Ujuzi Logo"
            width={100}
            height={40}
          />
        </div>
        <nav className="space-y-6 px-4 mt-8">
          <Link
            href="/home"
            className="flex items-center space-x-3 p-2 hover:bg-[#234173] rounded"
          >
            <Home size={20} />
            <span className="text-sm">Home</span>
          </Link>
          <Link
            href="/assessment"
            className="flex items-center space-x-3 p-2 text-[#FBBC05]"
          >
            <ClipboardList size={20} />
            <span className="text-sm">Assessment</span>
          </Link>
          <Link
            href="/resources"
            className="flex items-center space-x-3 p-2 hover:bg-[#234173] rounded"
          >
            <BarChart2 size={20} />
            <span className="text-sm">Resources</span>
          </Link>
        </nav>
      </div>
      <div className="flex-1 flex flex-col items-center pt-12">
        <h1 className="text-2xl text-gray-400 mb-2">Module One Assessment</h1>
        <p className="text-gray-400 mb-12">Time: 1hour</p>
        <div className="w-[500px] bg-white rounded-lg shadow-sm p-8 text-center border border-gray-100">
          <h2 className="text-[#FBBC05] text-xl font-medium mb-2">
            Module one assessments
          </h2>
          <p className="text-[#FBBC05] font-medium mb-4">
            submitted successfully
          </p>
          <p className="text-[#FBBC05] font-medium mb-1">
            Looking for CBC Resources?
          </p>
          <p className="text-sm mb-8">
            Take a look into our trusted resources{' '}
            <Link href="https://kec.ac.ke" className="text-blue-500">
              https://kec.ac.ke/
            </Link>
          </p>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full border-4 border-[#FBBC05] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-12 h-12 text-[#FBBC05]"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
         <Link href= "/components/AssessmentResults"> <button className="bg-[#FBBC05] text-white px-8 py-2 rounded-md hover:bg-[#E5AB04] transition-colors">
            VIEW RESULTS
          </button>
          </Link>
        </div>
        <div className="flex space-x-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-[#FBBC05]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};
export default Submission;