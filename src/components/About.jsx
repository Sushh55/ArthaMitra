import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-blue-50">
    <div className="container mx-auto px-4">
      <h3 className="text-3xl font-bold mb-8 text-center text-blue-600">About Artha Mitra</h3>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Artha Mitra is a comprehensive finance management system designed to empower users to manage and improve their financial habits. Built with a robust backend in .NET and a responsive frontend in React, this application caters to a broad audience, including youths with allowances, businesspersons, and organizations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our AI-driven feedback component offers insights into spending patterns and personalized recommendations, supporting our primary objective: to assist users in making informed financial decisions and achieving financial stability.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4 text-blue-600">Key Benefits</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Personalized financial insights
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Easy-to-use budgeting tools
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              AI-driven spending recommendations
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Multi-user support for businesses
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;

