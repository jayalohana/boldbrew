import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-100 p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-80">
        <span className="ml-20 font-semibold text-xl tracking-tight">BOLD BREW INSIGHTS</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-40">
        <div className="text-sm lg:flex-grow">
          <Link href="/latest-issue" legacyBehavior>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-400 mr-4">
              Latest Issue
            </a>
          </Link>
          <Link href="/free-resources" legacyBehavior>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-400 mr-4">
              Free Resources
            </a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-400 mr-4">
              Services and Testimonials
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-400">
              About Us
            </a>
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
