import Title from '../../Components/Title'
import learnhub from './images/learnhub.png'
import movies from './images/movie.png'
import mountainRush from './images/mountainRush.png'
import getearn from './images/getearn.png'
import ShineBorderDemo from '../../Components/ShineBorderDemo';


const projectsData = [
  {
    id: 1,
    image: getearn,
    title: "Get Earn",
    features: ["React", "Tailwind", "Node.js", "MongoDB",'express'],
    liveLink: "https://getearn-18654.web.app/",
    githubLink: "https://github.com/jamanhasan01/getEarn-frontEnd"
  },
  {
    id: 2,
    image: movies,
    title: "Movie App",
    features: ["React", "Tailwind", "Firebase"],
    liveLink: "https://movies01.surge.sh/",
    githubLink: "https://github.com/jamanhasan01/movies01-FrontEnd/"
  },
  {
    id: 3,
    image: mountainRush,
    title: "Mountain Rush",
    features: ["React", "Tailwind", "Firebase"],
    liveLink: "https://mountainRush.surge.sh/",
    githubLink: "https://github.com/jamanhasan01/mountainRush/"
  },
  {
    id: 4,
    image: learnhub,
    title: "Dashboard",
    features: ["React", "Material UI", "Express"],
    liveLink: "https://learnhub01.surge.sh/",
    githubLink: "https://github.com/jamanhasan01/LearnHub-FrontEnd/"
  }
];

const Projects = () => {
  return (
    <section className='bg-black/10'>
      <div className="container mx-auto px-4 py-8">
        <Title title={'Projects'}></Title>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-slate-800 bg-opacity-10 relative flex flex-col justify-between items-center text-center border p-3 border-gray-600  w-full">
              <img className="w-full mb-2 border border-gray-500 rounded-lg" src={project.image} alt={project.title} />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              
              {/* Features/Tech Stack Tags */}
              <div className="flex flex-wrap justify-center gap-1 my-4 w-full">
                {project.features.map((feature, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs bg-gray-700 rounded-full text-gray-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className='flex gap-1  w-full'>
                <button className='button flex-1'>
                  <a href={project.liveLink} target='_blank' rel="noopener noreferrer">Live Link</a>
                </button>
                <button className='button flex-1'>
                  <a href={project.githubLink} target='_blank' rel="noopener noreferrer">Github Link</a>
                </button>
              </div>
              <ShineBorderDemo/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects