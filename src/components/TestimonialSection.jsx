import React from 'react';
import review from '../assets/review.webp';

const TestimonialSection = () => {
  return (
    <section className="bg-blue-100 py-20 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            What <span className="text-blue-600">Our Member’s</span> Saying <span className="text-blue-600">About Us</span>
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum possimus facilis, ullam, nobis culpa inventore ea iusto quae illum velit vel veniam? Delectus, aperiam eum a qui exercitationem ullam quibusdam?
          </p>

          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">100+ Reviews</span>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <img src={review} alt="Customer Review" className="w-full h-auto rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
