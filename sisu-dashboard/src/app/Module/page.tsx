'use client'
import React, { useState } from 'react';
import Image from 'next/image';
const Module = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const answers = [
    { id: 'A', text: '54' },
    { id: 'B', text: '50' },
    { id: 'C', text: '75' },
    { id: 'D', text: '34' },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Module2 retake</h1>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-4">
            <span className="text-lg font-semibold mr-2">Module 1</span>
            <span className="text-2xl font-bold text-yellow-500">Question 2</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step <= 2 ? 'bg-yellow-500' : 'border border-gray-300'}`}>
                  {step <= 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                {step < 3 && <div className="w-8 h-0.5 bg-yellow-500"></div>}
              </React.Fragment>
            ))}
          </div>
          <h2 className="text-xl font-semibold mb-4">How many countries are there in Africa?</h2>
          <div className="space-y-2">
            {answers.map((answer) => (
              <button
                key={answer.id}
                className={`w-full text-left p-3 rounded ${
                  selectedAnswer === answer.id ? 'bg-yellow-100 border-yellow-500' : 'bg-gray-100 hover:bg-gray-200'
                } border transition duration-150 ease-in-out`}
                onClick={() => setSelectedAnswer(answer.id)}
              >
                <span className="font-semibold mr-2">{answer.id})</span>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
        <button className="w-full bg-[#1A315B] text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-150 ease-in-out">
          SUBMIT
        </button>
      </div>
    </div>
  );
};
export default Module;

