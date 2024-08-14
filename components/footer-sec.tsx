"use client";

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-white">CardCraft</h2>
          <p className="mt-2">Crafting the future of learning.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link href="/" className="hover:text-white">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/pricing" className="hover:text-white">Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <ul className="flex space-x-6">
            <li>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaFacebook className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p className="mb-2">Email: support@cardcraft.com</p>
          <p className="mb-2">Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500">
        <p>© 2024 CardCraft. All rights reserved.</p>
      </div>
    </footer>
  );
}