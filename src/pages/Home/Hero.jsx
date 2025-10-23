import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'
import { IconCloudDemo } from '../../Components/IconCloudDemo'
import { ParticlesDemo } from '../../Components/ParticlesDemo.tsx'
import { BoxReveal } from '@/components/magicui/BoxReveal.tsx'

const Hero = () => {
  return (
    <div className='relative  overflow-hidden'>
      {/* Particles Background */}
      <div className='absolute inset-0 z-10'>
        <ParticlesDemo />
      </div>

      <div className='container mx-auto px-4 py-16 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          {/* Left Column - Content */}
          <div className='flex-1 flex flex-col items-start gap-6 text-center lg:text-left'>
            <BoxReveal boxColor={'#f97316'} duration={0.5}>
              <h3 className='font-normal bg-slate-600 bg-opacity-30 border rounded-full px-4 py-1 text-primary border-primary inline-block'>
                Hey there 👋
              </h3>
            </BoxReveal>
            <BoxReveal boxColor={'#f97316'} duration={0.5}>
              <h1 className='text-4xl md:text-5xl font-bold'>
                {`I'm ${(<span className='text-primary'>Jaman Hasan</span>)}`}
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={'#f97316'} duration={0.5}>
              <h3 className='text-2xl text-primary'>A Junior MERN Stack Developer</h3>
            </BoxReveal>
            <BoxReveal boxColor={'#f97316'} duration={0.5}>
              <p className='text-lg max-w-lg'>
                Junior MERN stack developer with 1+ years experience, started in 2019 as a front-end
                developer (HTML, CSS, JS). Currently learning Next.js and TypeScript.
              </p>
            </BoxReveal>

            <BoxReveal boxColor={'#f97316'} duration={0.5}>
              {/* Social Icons */}
              <div className='flex gap-4 text-3xl'>
                <a
                  href='https://www.linkedin.com/in/jamanhasan001'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                  aria-label='LinkedIn'
                >
                  <FaLinkedin />
                </a>

                <a
                  href='https://www.facebook.com/jamanhasan01'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                  aria-label='Facebook'
                >
                  <FaFacebookSquare />
                </a>

                <a
                  href='https://www.instagram.com/jamanhasan01'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                  aria-label='Instagram'
                >
                  <FaInstagramSquare />
                </a>

                <a
                  href='https://github.com/jamanhasan01'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                  aria-label='GitHub'
                >
                  <FaSquareGithub />
                </a>
              </div>
            </BoxReveal>

            {/* Download Button */}
            <a
              href='https://drive.google.com/file/d/1kAPca_UNsmkDg_nOVMYGn4ilW87KCp-8/view?usp=sharing'
              target='_blank'
              download={'JamanHasan-Resume.pdf'}
              rel='noopener noreferrer'
              className='button border-primary text-primary hover:bg-primary py-2'
            >
              View Resume
            </a>
          </div>

          {/* Right Column - Icon Clou*/}
          <div className='flex-1 w-full h-[400px] lg:h-[500px]'>
            <IconCloudDemo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
