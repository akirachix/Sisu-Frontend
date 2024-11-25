'use client'; // Add this line at the top to mark this as a client-side component

import { useState } from 'react';
import { Home, Users, ClipboardList, UserCheck } from 'lucide-react';

import Image from 'next/image';

export default function Sidebar() {
  const [active, setActive] = useState('teachers');

  return (
    <aside className="w-64 h-screen bg-[#18315b] flex flex-col items-center py-8">
      <div className="mb-12">
        <Image src='/images/ujuzilogo.png' alt='ujuzi' width={200} height={200} className='w-24 h-24 mr-16'/>
      </div>

      <nav className="flex flex-col space-y-8 w-full items-center">
        <a
          href="/teacher"
          onClick={() => setActive('home')}
          className={`flex items-center space-x-4 w-full px-8 py-2 ${
            active === 'home' ? 'text-yellow-500' : 'text-white'
          }`}
        >
          <Home className="w-6 h-6" />
          <span>Home</span>
        </a>

        <a
          href="/teach"
          onClick={() => setActive('teachers')}
          className={`flex items-center space-x-4 w-full px-8 py-2 ${
            active === 'teachers' ? 'text-yellow-500' : 'text-white'
          }`}
        >
          <Users className="w-6 h-6" />
          <span>Teachers</span>
        </a>

        <a
          href="/assessment"
          onClick={() => setActive('assessment')}
          className={`flex items-center space-x-4 w-full px-8 py-2 ${
            active === 'assessment' ? 'text-yellow-500' : 'text-white'
          }`}
        >
          <ClipboardList className="w-6 h-6" />
          <span>Assessment</span>
        </a>

        <a
          href="/trainer"
          onClick={() => setActive('trainers')}
          className={`flex items-center space-x-4 w-full px-8 py-2 ${
            active === 'trainers' ? 'text-yellow-500' : 'text-white'
          }`}
        >
          <UserCheck className="w-6 h-6" />
          <span>Trainers</span>
        </a>
      </nav>
    </aside>
  );
}
