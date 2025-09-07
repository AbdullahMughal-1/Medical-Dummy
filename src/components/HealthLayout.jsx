import React from 'react';
import review2 from '../assets/review2.webp'; 

const HealthLayout = () => {
  return (
    <div className="font-sans bg-white text-slate-900">
      <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            The Future of <span className="text-blue-600">Quality Health</span>
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iusto labore eum maiores reiciendis aperiam soluta harum...
          </p>
          <a href="#" className="text-sm font-semibold text-blue-700 hover:underline">Learn More →</a>
        </div>

        <div className="h-64 w-full rounded-xl bg-slate-200 flex items-center justify-center">
          <img src={review2} alt="Review" className="h-48" />
        </div>
      </section>

      <section className="bg-blue-700 text-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <h3 className="text-lg font-semibold mb-4">Subscribe To Our Newsletter</h3>
          <div className="flex flex-col sm:flex-row items-center gap-2 bg-white p-2 rounded-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full text-sm text-slate-800 outline-none"
            />
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-800">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-blue-800 text-blue-50">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
          <div>
            <h4 className="font-bold text-white mb-2">E-sheba</h4>
            <p className="text-xs text-blue-100/80 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">Useful Links</h4>
            <ul className="space-y-2 text-xs text-blue-100/80">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Our Mission</li>
              <li>Our Team</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700/50 py-4 text-center text-xs text-blue-100/80">
          2022 All Right Reserved
        </div>
      </footer>
    </div>
  );
};

export default HealthLayout;
