import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaEnvelope,
  FaGithub,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

export default function HeroSection() {
  return (
    <aside className='w-full md:w-64 p-3 md:p-1 md:fixed md:h-full'>
      <div className='md:sticky md:top-0'>
        <section className='flex flex-col items-center justify-center text-center px-3 ml-5'>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            <div className='flex justify-center'>
              <Image
                src='/profile.jpeg'
                alt='Janilee Svaerdstaal'
                width={120}
                height={120}
                className='rounded-full border-4 border-purple-600 shadow-lg'
              />
            </div>
            <h1 className='mt-4 text-3xl font-bold text-purple-400 md:text-2xl'>
              Janilee Svaerdstaal
            </h1>
            <p className='mt-2 text-md text-gray-300 md:text-sm'>
              Full-Stack Developer | React,
              Next.js, TypeScript | Turning
              Complex Problems into Seamless
              Solutions
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
            }}
          >
            <div className='mt-6 flex gap-3'>
              <a
                href='https://github.com/PiX3L-NoMAD'
                target='_blank'
                className='p-2 rounded-full bg-gray-800 hover:bg-purple-600 transition duration-300 shadow-lg animate-neonGlow'
              >
                <FaGithub size={20} />{' '}
              </a>
              <a
                href='https://linkedin.com/in/janilee-svaerdstaal'
                target='_blank'
                className='p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition duration-300 shadow-lg animate-neonGlow'
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href='mailto:janileesvardstal@gmail.com'
                className='p-2 rounded-full bg-gray-800 hover:bg-red-500 transition duration-300 shadow-lg animate-neonGlow'
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.1 }}
          >
            <section className='hidden md:block mt-10 text-left md:bg-none h-screen'>
              <div className='grid grid-cols-3 gap-4 overflow-visible'>
                {[
                  {
                    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                    icon: <FaJs size={32} />,
                    label: 'JavaScript',
                    color: 'text-pink-600',
                    hoverColor:
                      'hover:text-pink-400',
                  },
                  {
                    link: 'https://www.typescriptlang.org/',
                    icon: (
                      <SiTypescript size={32} />
                    ),
                    label: 'TypeScript',
                    color: 'text-blue-500',
                    hoverColor:
                      'hover:text-blue-400',
                  },
                  {
                    link: 'https://reactjs.org/',
                    icon: <FaReact size={32} />,
                    label: 'React',
                    color: 'text-blue-400',
                    hoverColor:
                      'hover:text-blue-300',
                  },
                  {
                    link: 'https://nodejs.org/',
                    icon: <FaNodeJs size={32} />,
                    label: 'Node.js',
                    color: 'text-green-500',
                    hoverColor:
                      'hover:text-green-400',
                  },
                  {
                    link: 'https://expressjs.com/',
                    icon: <SiExpress size={32} />,
                    label: 'Express.js',
                    color: 'text-yellow-500',
                    hoverColor:
                      'hover:text-yellow-400',
                  },
                  {
                    link: 'https://tailwindcss.com/',
                    icon: (
                      <SiTailwindcss size={32} />
                    ),
                    label: 'Tailwind',
                    color: 'text-purple-600',
                    hoverColor:
                      'hover:text-purple-400',
                  },
                  {
                    link: 'https://www.postgresql.org/',
                    icon: (
                      <SiPostgresql size={32} />
                    ),
                    label: 'PostgreSQL',
                    color: 'text-blue-500',
                    hoverColor:
                      'hover:text-blue-400',
                  },
                  {
                    link: 'https://vite.dev/',
                    icon: <SiVite size={32} />,
                    label: 'Vite',
                    color: 'text-yellow-500',
                    hoverColor:
                      'hover:text-yellow-400',
                  },
                  {
                    link: 'https://nextjs.org/',
                    icon: (
                      <SiNextdotjs size={32} />
                    ),
                    label: 'Next.js',
                    color: 'text-purple-500',
                    hoverColor:
                      'hover:text-purple-400',
                  },
                  {
                    link: 'https://www.python.org/',
                    icon: <SiPython size={32} />,
                    label: 'Python',
                    color: 'text-green-500',
                    hoverColor:
                      'hover:text-green-400',
                  },
                ].map(
                  (
                    {
                      link,
                      icon,
                      label,
                      color,
                      hoverColor,
                    },
                    index
                  ) => (
                    <div
                      key={index}
                      className='relative group flex justify-center items-center p-3 bg-black rounded-xl shadow-xl transition-all duration-300 hover:scale-105 neon-purple'
                    >
                      <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`${color} ${hoverColor} transition-all duration-300`}
                      >
                        {icon}
                      </a>
                      <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        {label}
                      </span>
                    </div>
                  )
                )}
              </div>
            </section>
          </motion.div>
        </section>
      </div>
    </aside>
  );
}
