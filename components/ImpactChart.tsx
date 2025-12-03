import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { StatData } from '../types';

const data: StatData[] = [
  { year: '2020', members: 1200, events: 45 },
  { year: '2021', members: 1800, events: 80 },
  { year: '2022', members: 2500, events: 120 },
  { year: '2023', members: 3800, events: 190 },
  { year: '2024', members: 5200, events: 310 },
];

const ImpactChart: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6">
              Growing Together, <br/> Year After Year.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Since our inception, the Rejuvenated Seniors Alliance has seen exponential growth in community participation. 
              Our numbers tell a story of connection, resilience, and the vital need for senior-focused resources.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="h-3 w-3 bg-primary-500 rounded-full mr-3"></span>
                <span className="text-slate-700 font-medium">Over 5,000 Active Members</span>
              </li>
              <li className="flex items-center">
                <span className="h-3 w-3 bg-secondary-500 rounded-full mr-3"></span>
                <span className="text-slate-700 font-medium">300+ Annual Events & Workshops</span>
              </li>
              <li className="flex items-center">
                <span className="h-3 w-3 bg-teal-500 rounded-full mr-3"></span>
                <span className="text-slate-700 font-medium">98% Member Satisfaction Rate</span>
              </li>
            </ul>
            <button className="bg-primary-900 text-white px-8 py-3 rounded-md font-bold hover:bg-primary-800 transition-colors">
              Read Our Annual Report
            </button>
          </div>

          {/* Chart */}
          <div className="bg-slate-50 p-6 rounded-xl shadow-inner border border-slate-100 h-[400px]">
             <h3 className="text-xl font-bold text-slate-800 mb-4 text-center font-serif">Community Membership Growth</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" tick={{ fill: '#64748b' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#64748b' }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  cursor={{ fill: 'transparent' }}
                />
                <Bar dataKey="members" radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#d97706' : '#0ea5e9'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactChart;