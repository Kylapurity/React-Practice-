import React from 'react';
import Laptop from '../Images/Solar palen.jpg';

const About = () => {
    return (
        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
              <img className="w-[500px] mx-auto my-4 md:w-5 h-auto md:order-1 md:mr-8" src={Laptop} alt="Laptop" />
              <div className="flex flex-col justify-center md:w-1/2 md:order-2 text-center md:text-left text-white">
                <p className="text-blue-500 font-bold mb-2">DATA ANALYTICS DASHBOARD</p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Manage Data Analytics Centrally</h1>
                <p className=" mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
                  voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex
                  deserunt fuga?
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded-full uppercase transition duration-300">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      );
    };    

export default About;

