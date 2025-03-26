import react from "../../assets/reactjs.png";
import firebase from "../../assets/firebase.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";

const Skils = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-10 text-center">Skills & Services</h1>
        <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-6">
          {/* Card 1 */}
          <div className="flex flex-col justify-between items-center text-center border p-4 border-gray-600 rounded-xl  w-full">
            <img className="max-w-[80px]  mb-4" src={react} alt="React.js" />
            <h3 className="text-2xl font-semibold">React.Js</h3>
            <p className="text-sm text-gray-600">
              React is a popular JavaScript library for building user interfaces, particularly for single-page applications (SPAs).
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col justify-between items-center text-center border p-4 border-gray-600 rounded-xl   w-full">
            <img className="max-w-[80px] mb-4" src={mongodb} alt="MongoDB" />
            <h3 className="text-2xl font-semibold">MongoDB Database</h3>
            <p className="text-sm text-gray-600">
              MongoDB is a popular NoSQL database designed for modern applications that require flexibility, scalability, and performance.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col justify-between items-center text-center border p-4 border-gray-600 rounded-xl  w-full">
            <img className="max-w-[80px] mb-4" src={firebase} alt="Firebase" />
            <h3 className="text-2xl font-semibold">Firebase</h3>
            <p className="text-sm text-gray-600">
              Firebase Authentication makes it easy to implement user sign-up, sign-in, and authentication features.
            </p>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col justify-between items-center text-center border p-4 border-gray-600 rounded-xl  w-full">
            <img className="max-w-[80px] mb-4" src={express} alt="Express.js" />
            <h3 className="text-2xl font-semibold">Express.js</h3>
            <p className="text-sm text-gray-600">
              Express.js is a minimalist and flexible web framework for Node.js that helps developers build robust web applications and APIs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
