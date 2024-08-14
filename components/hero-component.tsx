"use client";

import React from 'react';
import Link from 'next/link';
import Lottie from 'react-lottie-player';
import animationData from '@/public/animations/animation.json';


export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-teal-400 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Craft Smarter, Learn Faster
          </h1>
          <p className="text-lg md:text-xl mb-8">
            CardCraft combines AI-powered tools with intuitive design to help
            you master any subject efficiently. Whether you&apos;re a student or a
            professional, our platform is built to boost your learning journey.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="/sign-up">
              <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300 hover:bg-gray-100">
                Get Started for Free
              </button>
            </Link>
            <Link href="/sign-in">
              <button className="text-white font-semibold py-3 px-6 border border-white rounded-md transition duration-300 hover:bg-white hover:text-blue-500">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: '100%', height: 'auto' }}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}