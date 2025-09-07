import React from 'react';
import doc2 from '../assets/doc2.png'; 

const Home = () => {
  return (
    <div className="font-sans w-full bg-blue-100">
      <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-12">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Find & Search Your <span className="underline text-blue-600">Favourite</span> Doctor
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
          </p>
          <div className="flex flex-col md:flex-row rounded-full bg-white px-7">
            <select className="px-4 py-2 rounded-xl md:w-1/2">
              <option>Doctor's Name</option>
            </select>
            <select className="px-4 py-2 w-full md:w-1/2">
              <option>Location</option>
            </select>
            <button className="px-2 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 w-full md:w-auto ml-3">
              Search
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-8">
          <div className="w-96 h-96 rounded-lg flex items-center justify-center">
            <img
              src={doc2}
              alt="Doctor"
              className="w-full h-full object-cover rounded-lg mt-20"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-8 text-center">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6">
          {[
            { value: '24/7', label: 'Online Support' },
            { value: '100+', label: 'Doctors' },
            { value: '1M+', label: 'Active Patients' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <h1 className="font-semibold text-6xl md:text-7xl mb-3">{item.value}</h1>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
