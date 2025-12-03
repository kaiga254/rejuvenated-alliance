import React from 'react';

const AboutMission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
             <img 
               src="https://picsum.photos/id/1069/400/600" 
               alt="Senior woman smiling" 
               className="rounded-lg shadow-lg mt-8 w-full h-64 object-cover"
             />
             <img 
               src="https://picsum.photos/id/129/400/600" 
               alt="Hands holding coffee" 
               className="rounded-lg shadow-lg w-full h-64 object-cover"
             />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Our Mission
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-6">
              Restoring Dignity, <br />
              Inspiring Hope.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Rejuvenated Seniors Alliance, we believe that aging is not a decline, but a new chapter filled with potential. 
              Our mission is to advocate for the rights of seniors, provide essential resources that foster independence, 
              and create vibrant spaces for social engagement.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We bridge the gap between generations and ensure that no senior feels invisible or forgotten in our rapidly changing world.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-primary-500 pl-4">
                <p className="text-2xl font-bold text-slate-900">35+</p>
                <p className="text-slate-500">Years of Service</p>
              </div>
              <div className="border-l-4 border-secondary-500 pl-4">
                <p className="text-2xl font-bold text-slate-900">150+</p>
                <p className="text-slate-500">Dedicated Volunteers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMission;