import React from 'react';
import { FiBarChart2, FiDollarSign, FiUsers } from 'react-icons/fi';
import FeatureCard from './FeatureCard';

const Features = () => (
  <section id="features" className="py-20">
    <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
    <div className="grid md:grid-cols-3 gap-8">
      <FeatureCard
        icon={<FiBarChart2 className="w-12 h-12 text-blue-600" />}
        title="AI-Powered Insights"
        description="Get personalized financial advice and spending pattern analysis"
      />
      <FeatureCard
        icon={<FiDollarSign className="w-12 h-12 text-blue-600" />}
        title="Budget Tracking"
        description="Easily track your income, expenses, and savings goals"
      />
      <FeatureCard
        icon={<FiUsers className="w-12 h-12 text-blue-600" />}
        title="Multi-User Support"
        description="Perfect for individuals, businesses, and organizations"
      />
    </div>
  </section>
);

export default Features;

