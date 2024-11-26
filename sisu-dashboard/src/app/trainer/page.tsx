'use client';
import Layout from "../Layout/layout";

// components/MainContent.js
export default function MainContent() {
    return (
        <Layout>
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="font-bold">Name:</div>
            <div className="ml-2">John Masafa</div>
          </div>
          <div className="border-l-2 border-yellow-500 mx-4 h-6"></div>
          <div className="flex items-center">
            <div className="font-bold">Subcounty:</div>
            <div className="ml-2">Mvita</div>
          </div>
        </div>
        <h2 className="font-bold text-lg mb-4">Allocated teachers</h2>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-black font-medium py-2 px-4 text-left">Trainer Name</th>
              <th className="border-b-2 border-black font-medium py-2 px-4 text-left">TSC No.</th>
              <th className="border-b-2 border-black font-medium py-2 px-4 text-left">Email</th>
              <th className="border-b-2 border-black font-medium py-2 px-4 text-left">Sub-County</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                Dorcas Mwembe
              </td>
              <td className="py-2 px-4">003000</td>
              <td className="py-2 px-4">dorcas@gmail.com</td>
              <td className="py-2 px-4">Jomvu</td>
            </tr>
            {/* Additional rows as needed */}
          </tbody>
        </table>
      </div>
      </Layout>
    );
  }
  