import Title from '../../Components/Title'
import learnhub from './images/learnhub.png'
import movies from './images/movie.png'
const Projects = () => {
  return (
      <section className='bg-black/50'>
          <div className="container mx-auto px-4 py-8">
            <Title title={'Projects'}></Title>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
              {/* Card 1 */}
              <div className=" bg-primary bg-opacity-10 gap-2 flex flex-col justify-between items-center text-center border p-4 border-gray-600 rounded-xl  w-full">
                <img className="w-full  mb-4" src={learnhub} alt="React.js" />
                <h3 className="text-2xl font-semibold">LearnHub</h3>
                <p className="text-sm text-gray-600 ">
                This website is dedicated to purchasing educational courses.
                </p>
                <div className='flex gap-3'>
                <button className='btn btn-primary'><a href="https://learnhub01.surge.sh/" target='_blank'>Live Link</a></button>
                <button className='btn btn-primary'><a href="https://learnhub01.surge.sh/" target='_blank'>Github Link</a></button>
                </div>
              </div>
            
              {/* Card 2 */}
              <div className=" bg-primary bg-opacity-10 gap-2 flex flex-col justify-between items-center text-center border p-4 border-gray-600 rounded-xl  w-full">
                <img className="w-full  mb-4" src={movies} alt="React.js" />
                <h3 className="text-2xl font-semibold">LearnHub</h3>
                <p className="text-sm text-gray-600 ">
                This website is dedicated to purchasing educational courses.
                </p>
                <div className='flex gap-3'>
                <button className='btn btn-primary'><a href="https://movies01.surge.sh/" target='_blank'>Live Link</a></button>
                <button className='btn btn-primary'><a href="https://learnhub01.surge.sh/" target='_blank'>Github Link</a></button>
                </div>
              </div>
              {/* Card 3 */}
              <div className=" bg-primary bg-opacity-10 gap-2 flex flex-col justify-between items-center text-center border p-4 border-gray-600 rounded-xl  w-full">
                <img className="w-full  mb-4" src={learnhub} alt="React.js" />
                <h3 className="text-2xl font-semibold">LearnHub</h3>
                <p className="text-sm text-gray-600 ">
                This website is dedicated to purchasing educational courses.
                </p>
                <div className='flex gap-3'>
                <button className='btn btn-primary'><a href="https://learnhub01.surge.sh/" target='_blank'>Live Link</a></button>
                <button className='btn btn-primary'><a href="https://learnhub01.surge.sh/" target='_blank'>Github Link</a></button>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-primary bg-opacity-10  gap-2 flex flex-col justify-between items-center text-center border p-4 border-gray-600 rounded-xl  w-full">
                <img className="w-full  mb-4" src={learnhub} alt="React.js" />
                <h3 className="text-2xl font-semibold">LearnHub</h3>
                <p className="text-sm text-gray-600 ">
                This website is dedicated to purchasing educational courses.
                </p>
                <div className='flex gap-3'>
                <button className='btn btn-primary'><a href="https://learnhub01.surge.sh/" target='_blank'>Live Link</a></button>
                <button className='btn btn-primary'><a href="https://learnhub01.surge.sh/" target='_blank'>Github Link</a></button>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Projects