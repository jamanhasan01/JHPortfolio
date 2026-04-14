import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import PropTypes from 'prop-types'; // <-- Import PropTypes to fix the warning

const reviews = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/186/186313.png",
    name: "Web Developer",
    username: "@reactdev",
    body: "Building responsive websites with React.js, Next.js and Tailwind CSS"
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4498/4498011.png",
    name: "Football Player",
    username: "@footballer",
    body: "Weekend warrior on the field, teamwork enthusiast"
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1809/1809561.png",
    name: "Travel Lover",
    username: "@wanderer",
    body: "Exploring new places to find coding inspiration"
  }
];


const ReviewCard = ({ img, name, username, body }) => {
  return (
    <div
      className={cn(
        "relative mx-2 h-48 w-72 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-400 bg-white backdrop-blur-sm shadow-md hover:shadow-lg",
        "dark:border-gray-600 dark:bg-gray-800",
        "transition-all duration-300 hover:-translate-y-1"
      )}
    >
      <div className="flex items-center gap-4">
        <img 
          className="h-12 w-12 rounded-full object-cover border-2 border-gray-100 dark:border-gray-600"
          src={img} 
          alt={name}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {username}
          </p>
        </div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {body}
      </p>
    </div>
  );
};

// --- Props Validation to fix the ESLint warning ---
ReviewCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired, // <-- This explicitly validates 'username'
  body: PropTypes.string.isRequired,
};
// -------------------------------------------------


const Passions = () => {
  return (
    <section className="relative w-full overflow-hidden py-12">
      <div>
        <h2 className="mb-8 text-center text-primary text-3xl font-bold">
          My Passions
        </h2>
        
        <div className="relative">
          <Marquee 
            pauseOnHover 
            className="[--duration:25s] py-4"
          >
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          
          <Marquee 
            reverse 
            pauseOnHover 
            className="[--duration:25s] py-4"
          >
            {[...reviews].reverse().map((review, index) => (
              <ReviewCard key={`reverse-${index}`} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
      
      {/* Gradient fade effects (Assuming a black/gray-800 background for fade) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent dark:from-gray-800 z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent dark:from-gray-800 z-10" />
    </section>
  );
};

export default Passions;