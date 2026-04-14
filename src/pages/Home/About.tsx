
import { FaLaptopCode,  FaPlane } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import Title from "../../Components/Title";

const About = () => {
  return (
    <section className=" py-12 border-t border-gray-600">
      <div className="container mx-auto px-6">
      <Title title={'About Me'}></Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Profession */}
          <div className=" border bg-black/30 border-gray-500 shadow-lg rounded-lg p-6 text-center">
            <div className="text-green-500 text-4xl mb-4 flex justify-center items-center">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
            <p className="">
              Crafting responsive websites with modern tools like React.js and
              Tailwind CSS is my passion and profession.
            </p>
          </div>
          {/* Card 2: Football */}
          <div className=" border bg-black/30 border-gray-500  shadow-lg rounded-lg p-6 text-center">
            <div className="text-white-500 text-4xl mb-4 flex justify-center items-center">
              <IoMdFootball />
            </div>
            <h3 className="text-xl font-semibold mb-2">Playing Football</h3>
            <p className="">
            I love playing football. It keeps me active and inspires qualities
            like teamwork and focus.
            </p>
          </div>
          {/* Card 3: Journey */}
          <div className=" border bg-black/30 border-gray-500 shadow-lg rounded-lg p-6 text-center">
            <div className="text-blue-500 text-4xl mb-4 flex justify-center items-center">
            <FaPlane />
            </div>
            <h3 className="text-xl font-semibold mb-2">Love for Adventures</h3>
            <p className="">
            Traveling to new places fuels my creativity and inspires my coding
            journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
