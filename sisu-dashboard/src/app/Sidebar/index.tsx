'use client';

import { useState } from 'react';
import { Home, Users, ClipboardList, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('/teacher'); // Set default active link

  const navigationItems = [
    { name: 'Home', href: '/home', icon: Home },
    { name: 'Teachers', href: '/teach', icon: Users },
    { name: 'Assessment', href: '/assessment', icon: ClipboardList },
    { name: 'Trainers', href: '/trainer', icon: UserCheck },
  ];

  return (
    <aside className="w-64 h-screen bg-[#18315b] flex flex-col items-center py-8">
      {/* Logo Section */}
      <div className="mb-12">
        <Image src="/Images/Ujuzilogo.png" alt="ujuzi" width={200} height={200} className="w-24 h-24" />
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col space-y-8 w-full items-center">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActiveLink(item.href)}
            className={`flex items-center space-x-4 w-full px-8 py-2 ${
              activeLink === item.href ? ' text-[#18315b]' : 'text-white hover:text-[#FBBC05] hover:text-xl'
            } transition-colors`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-lg">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
