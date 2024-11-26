'use client';
import React, { useState } from 'react'
import Layout from '../Layout/page';

export default function TeacherDashboard() {
  const [teachers] = useState([
    { name: "Dorcas Mwembe", tscNo: "003000", email: "dorcas@gmail.com", subCounty: "Jomvu" },
    { name: "Haji Muhminah", tscNo: "003100", email: "haji@gmail.com", subCounty: "Shimba Hills" },
    { name: "Mbwana Musa", tscNo: "003200", email: "musa@gmail.com", subCounty: "Shimba Hills" },
    { name: "Juma hassan", tscNo: "034000", email: "juma@@gmail.com", subCounty: "Shimba Hills" },
    { name: "Dorcas Mwende", tscNo: "003500", email: "dorcas@gmail.com", subCounty: "Shimba Hills" },
    { name: "Dian Chekoech", tscNo: "003600", email: "diana@gmail.com", subCounty: "Shimba Hills" },
    { name: "Dorcas Mamu", tscNo: "003700", email: "mamu@gmail.com", subCounty: "Shimba Hills" },
    { name: "Myra Kombo", tscNo: "003800", email: "myra@gmail.com", subCounty: "Shimba Hills" },
  ]);

  return (
    <Layout>

    <div id='teacher' className="flex h-screen bg-gray-100">
      
   
      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center mb-4">
            {/* <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div> */}

            <div className='flex gap-40 '>
              <h2 className="text-xl font-bold ">Name: <br></br>John Masafa</h2>
              <h3 className="text-xl font-bold">SubCounty: <br></br>Jomvu</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <h3 className="text-lg font-semibold p-4 bg-gray-50">Alllocated teachers</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TSC No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sub-County</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teachers.map((teacher, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.tscNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.subCounty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
    </Layout>
  );
}