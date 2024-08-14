"use client";

import React, { useEffect, useState } from 'react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const testimonialsSection = document.getElementById('testimonials');
      if (testimonialsSection) {
        const rect = testimonialsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      role: "Medical Student",
      testimonial: "CardCraft has completely transformed the way I study. The AI-powered flashcards make learning complex subjects so much easier!",
    },
    {
      name: "Jane Smith",
      role: "Professional Engineer",
      testimonial: "The intuitive design and powerful tools on CardCraft have helped me stay sharp in my field. It's a game-changer!",
    },
    {
      name: "Emily Johnson",
      role: "High School Teacher",
      testimonial: "I love how I can create and share flashcards with my students. It's a fantastic tool for both teaching and learning!",
    },
    {
      name: "Michael Brown",
      role: "College Professor",
      testimonial: "CardCraft is a fantastic tool for educators. The ability to create tailored flashcards and track progress has been invaluable.",
    },
    {
      name: "Sarah Wilson",
      role: "Law Student",
      testimonial: "The AI suggestions for flashcards are spot on. It saves me so much time in preparing for exams.",
    },
    {
      name: "David Lee",
      role: "Software Developer",
      testimonial: "CardCraft’s seamless integration with my daily learning routine has been a game-changer. I highly recommend it.",
    },
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-r from-blue-500 to-teal-400 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          What Our Users Are Saying
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-gray-700">&quot;{testimonial.testimonial}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
