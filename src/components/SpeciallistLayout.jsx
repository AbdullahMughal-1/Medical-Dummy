import React from 'react';
import surgery from '../assets/surgery.jpg'; 

const SpeciallistLayout = () => {
  return (
    <div className="bg-white text-slate-900 font-sans">
      <h2 className="text-4xl mx-10 font-bold ml-[330px] translate-y-5">
        Our Consulting Specialists
      </h2>

      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'Covid-19 Test',
            'Heart Lungs',
            'Suppliment',
            'Mental Health',
          ].map((title, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow transition hover:bg-blue-400 group cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white">
                {title}
              </h3>
              <p className="leading-relaxed group-hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit varius amet faucibus.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12">
          <div className="rounded-xl overflow-hidden ring-1 ring-slate-200 h-64 bg-slate-200 flex items-center justify-center">
            <img src={surgery} alt="Surgery" className="w-[700px] rounded-sm" />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Why You Choose Us?</h3>
            <div className="space-y-3 text-sm text-slate-600">
              {Array(4).fill().map((_, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              ))}
            </div>
            <a href="#" className="mt-6 inline-block text-sm font-semibold text-blue-700 hover:underline">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeciallistLayout;
