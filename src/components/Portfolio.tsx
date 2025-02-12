'use client';
import Image from 'next/image';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

export default function Home() {
  return (
    <div className='bg-gray-900 text-white min-h-screen pt-5'>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center mb-5 text-center px-4'>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className='flex justify-center'>
            <Image
              src='/profile.jpg'
              alt='Janilee Svaerdstaal'
              width={160}
              height={160}
              className='rounded-full border-4 border-purple-600 shadow-lg hover:animate-neonGlow'
            />
          </div>
          <h1 className='mt-6 text-4xl font-extrabold text-purple-400'>
            Janilee Svaerdstaal
          </h1>
          <p className='mt-2 text-lg text-gray-300'>
            Full-Stack Developer | React, Next.js,
            TypeScript | Turning Complex Problems
            into Seamless Solutions
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className='mt-9 flex gap-4'>
            <a
              href='https://github.com/PiX3L-NoMAD'
              target='_blank'
              className='p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition duration-300 shadow-lg hover:animate-neonGlow'
            >
              <FaGithub size={24} />
            </a>
            <a
              href='https://linkedin.com/in/janilee-svaerdstaal'
              target='_blank'
              className='p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition duration-300 shadow-lg hover:animate-neonGlow'
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href='mailto:janilee.svaerdstaal@example.com'
              className='p-3 rounded-full bg-gray-800 hover:bg-red-500 transition duration-300 shadow-lg hover:animate-neonGlow'
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Diagonal Divider */}
      <div className='relative w-full h-24 overflow-hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 500 320'
          preserveAspectRatio='none'
          className='w-full h-full'
        >
          <path
            className='fill-gray-800'
            d='M0,160L1440,0L1440,320L0,320Z'
          />
        </svg>
      </div>

      {/* About Section */}
      <section className='pt-1 pb-5 px-6 text-center bg-gray-800 top-border-gradient'>
        <h2 className='text-3xl font-bold text-purple-400'>
          About Me
        </h2>
        <p className='mt-4 text-gray-300 max-w-3xl mx-auto text-left'>
          I’m a JavaScript/TypeScript & React
          developer with a background in the arts,
          bringing visual storytelling and
          creative problem-solving to my code.
          Recently, I’ve been expanding into
          full-stack development and test-driven
          practices at Northcoders, refining my
          ability to write clean, expressive, and
          maintainable code while collaborating in
          an Agile environment.
          <br /> <br />
          My strengths include attention to
          detail, persistence in problem-solving,
          and a keen artistic eye, which help me
          craft intuitive and engaging user
          experiences. I’m looking for a role
          where I can combine my creativity,
          curiosity, and technical skills to
          contribute to inspiring projects.
        </p>
      </section>

      {/* Wave Divider */}
      <div className='wave-divider'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 500 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='fill-gray-800'
          ></path>
        </svg>
      </div>

      {/* Projects Section */}
      <section className='py-10 px-6 text-left'>
        <h2 className='text-3xl font-bold text-purple-400 text-center'>
          Projects
        </h2>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='p-6 bg-gray-800 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold text-white'>
              ✨ NC News API
            </h3>
            <p className='text-gray-400 mt-2'>
              A news aggregation site with social
              functions and user accounts
              (backend). Built with JS, Express,
              Vite, PostgreSQL. Hosted on Render
              and Supabase.
            </p>
            <a
              href='https://github.com/PiX3L-NoMAD/nc_news_API'
              target='_blank'
              className='text-pink-600 hover:text-pink-800'
            >
              GitHub Repo
            </a>{' '}
            |
            <a
              href='https://janilees-northcoders-project.onrender.com/api'
              target='_blank'
              className='text-pink-600 hover:text-pink-800 ml-1'
            >
              Deployed API Endpoint
            </a>
          </div>
          <div className='p-6 bg-gray-800 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold text-white'>
              🌸 NC News Web App
            </h3>
            <p className='text-gray-400 mt-2'>
              The frontend version of NC News API,
              using React and Tailwind.
            </p>
            <a
              href='https://github.com/PiX3L-NoMAD/nc_news_react'
              target='_blank'
              className='text-pink-600 hover:text-pink-800'
            >
              GitHub Repo
            </a>{' '}
            |
            <a
              href='https://janilees-nc-news.netlify.app'
              target='_blank'
              className='text-pink-600 hover:text-pink-800 ml-1'
            >
              Deployed Web App
            </a>
          </div>
          <div className='p-6 bg-gray-800 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold text-white'>
              💻 Law-Vely
            </h3>
            <p className='text-gray-400 mt-2'>
              An app making UK legislation
              accessible and fun, integrating
              OpenAI for summaries, and Firebase
              for databasing. Built with
              TypeScript, React, Tailwind. Hosted
              on Netlify and Render.
            </p>
            <a
              href='https://github.com/ilyasbaggelaar/Law-Vely'
              target='_blank'
              className='text-pink-600 hover:text-pink-800'
            >
              GitHub Repo
            </a>{' '}
            |
            <a
              href='https://law-vely.onrender.com/api/legislationsummaries'
              target='_blank'
              className='text-pink-600 hover:text-pink-800 ml-1'
            >
              Backend API
            </a>{' '}
            |
            <a
              href='https://law-vely.netlify.app/'
              target='_blank'
              className='text-pink-600 hover:text-pink-800 ml-1'
            >
              Deployed Web App
            </a>
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className='relative w-full h-12 overflow-hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1000 320'
          preserveAspectRatio='none'
          className='w-full h-full'
        >
          <path
            className='fill-gray-800'
            d='M0,160L1440,0L1440,320L0,320Z'
          />
        </svg>
      </div>

      {/* Tech Stack Section with Neon Animation */}
      <section className='pt-5 pb-20 px-6 text-left bg-gradient-to-b from-gray-800 to-gray-900'>
        <h2 className='text-3xl font-bold text-purple-400 text-center'>
          Tech Stack
        </h2>
        <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[
            {
              link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
              icon: <FaJs size={40} />,
              label: 'JavaScript',
              color: 'text-pink-600',
              hoverColor: 'hover:text-pink-400',
            },
            {
              link: 'https://www.typescriptlang.org/',
              icon: <SiTypescript size={40} />,
              label: 'TypeScript',
              color: 'text-blue-500',
              hoverColor: 'hover:text-blue-400',
            },
            {
              link: 'https://reactjs.org/',
              icon: <FaReact size={40} />,
              label: 'React',
              color: 'text-blue-400',
              hoverColor: 'hover:text-blue-300',
            },
            {
              link: 'https://nodejs.org/',
              icon: <FaNodeJs size={40} />,
              label: 'Node.js',
              color: 'text-green-500',
              hoverColor: 'hover:text-green-400',
            },
            {
              link: 'https://expressjs.com/',
              icon: <SiExpress size={40} />,
              label: 'Express.js',
              color: 'text-yellow-500',
              hoverColor: 'hover:text-yellow-400',
            },
            {
              link: 'https://tailwindcss.com/',
              icon: <SiTailwindcss size={40} />,
              label: 'Tailwind CSS',
              color: 'text-purple-600',
              hoverColor: 'hover:text-purple-400',
            },
            {
              link: 'https://www.postgresql.org/',
              icon: <SiPostgresql size={40} />,
              label: 'PostgreSQL',
              color: 'text-blue-500',
              hoverColor: 'hover:text-blue-400',
            },
            {
              link: 'https://vite.dev/',
              icon: <SiVite size={40} />,
              label: 'Vite',
              color: 'text-blue-500',
              hoverColor: 'hover:text-blue-400',
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
                className='relative group flex justify-center items-center p-4 bg-black rounded-xl shadow-xl transition-all duration-300 hover:scale-110 animate-neonGlow'
              >
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${color} ${hoverColor} transition-all duration-300`}
                >
                  {icon}
                </a>
                <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {label}
                </span>
              </div>
            )
          )}
        </div>
      </section>

      {/* Glow Divider */}
      <div className='relative w-full h-6'>
        <div className='absolute w-full h-8 bg-gradient-to-b from-purple-500 to-gray-900 blur-md'></div>
      </div>

      {/* Contact Section */}
      <section className='py-8 px-6 text-center'>
        <h2 className='text-3xl font-bold text-purple-400'>
          Contact Me
        </h2>
        <div className='my-4 flex gap-4 justify-center'>
          <a
            href='https://github.com/PiX3L-NoMAD'
            target='_blank'
            className='p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition duration-300 hover:shadow-lg'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://linkedin.com/in/janilee-svaerdstaal'
            target='_blank'
            className='p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition duration-300 hover:shadow-lg'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='mailto:janilee.svaerdstaal@example.com'
            className='p-3 rounded-full bg-gray-800 hover:bg-red-500 transition duration-300 hover:shadow-lg'
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className='mt-4 text-gray-300 text-xs'>
          This web app was made using Next.js,
          TypeScript, Supabase and Tailwind by
          Janilee Svaerdstaal
        </p>
      </section>
    </div>
  );
}

/* import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./Card";
import { FaGithub, FaLinkedin, FaEnvelope, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiNextdotjs, SiSupabase } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-gray-900 flex flex-col items-center p-6">
      <header className="w-full max-w-4xl text-center py-8">
        <div className="flex justify-center">
          <Image
            src="/profile.jpg"
            alt="Janilee Svaerdstaal"
            width={128}
            height={128}
            className="rounded-full border-4 border-pink-600"
          />
        </div>
        <h1 className="text-4xl font-bold text-pink-600">Janilee Svaerdstaal</h1>
        <p className="text-lg text-gray-700">PERN Stack Developer | JavaScript & TypeScript | React & Node.js | Turning Complex Problems into Seamless Solutions</p>
      </header>

      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-pink-600">About Me</h2>
            <p className="mt-2 text-gray-700">
            I’m a JavaScript/TypeScript & React developer with a background in the arts, bringing visual storytelling and creative problem-solving to my code. Recently, I’ve been expanding into full-stack development and test-driven practices at Northcoders, refining my ability to write clean, expressive, and maintainable code while collaborating in an Agile environment.
            <br /> <br />
            My strengths include attention to detail, persistence in problem-solving, and a keen artistic eye, which help me craft intuitive and engaging user experiences. I’m looking for a role where I can combine my creativity, curiosity, and technical skills to contribute to inspiring projects.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  <Card>
    <CardContent className="p-6">
      <h2 className="text-2xl font-semibold text-pink-600">Projects</h2>
      <ul className="mt-2 text-gray-700">
        <li>
          <strong>✨ NC News API</strong> - A news aggregation site with social functions and user accounts (backend).
          <br />
          Built with JS, Express, Vite, PostgreSQL. Hosted on Render and Supabase.
          <br />
          <a href="https://github.com/PiX3L-NoMAD/nc_news_API" target="_blank" className="text-pink-600 hover:text-pink-800">GitHub Repo</a> | 
          <a href="https://janilees-northcoders-project.onrender.com/api" target="_blank" className="text-pink-600 hover:text-pink-800 ml-1">API Endpoint</a>
        </li>
        <li className="mt-4">
          <strong>🌸 NC News Web App</strong> - The frontend version of NC News API, using React and Tailwind.
          <br />
          <a href="https://github.com/PiX3L-NoMAD/nc_news_react" target="_blank" className="text-pink-600 hover:text-pink-800">GitHub Repo</a>
        </li>
        <li className="mt-4">
          <strong>💻 Law-Vely</strong> - An app making UK legislation accessible and fun, integrating OpenAI for summaries, and Firebase for databasing.
          <br />
          Built with TypeScript, React, Tailwind. Hosted on Netlify and Render.
          <br />
          <a href="https://github.com/ilyasbaggelaar/Law-Vely" target="_blank" className="text-pink-600 hover:text-pink-800">GitHub Repo</a> | 
          <a href="https://law-vely.netlify.app/" target="_blank" className="text-pink-600 hover:text-pink-800 ml-1">Web App</a> | 
          <a href="https://law-vely.onrender.com/api/legislationsummaries" target="_blank" className="text-pink-600 hover:text-pink-800 ml-1">Backend API</a>
        </li>
      </ul>
    </CardContent>
  </Card>
</section>

  /*
     <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-pink-600">Tech Stack</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mt-4 gap-6">
              <div className="relative group flex justify-center items-center p-4 bg-black text-pink-600 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="text-pink-600 hover:text-pink-400">
                  <FaJs size={36} />
                </a>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">JavaScript</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-blue-500 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://www.typescriptlang.org/" target="_blank" className="text-blue-500 hover:text-blue-400">
                  <SiTypescript size={32} />
                </a>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">TypeScript</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-blue-400 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://reactjs.org/" target="_blank" className="text-blue-400 hover:text-blue-300">
                  <FaReact size={36} />
                </a>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">React</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-green-500 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://nodejs.org/" target="_blank" className="text-green-500 hover:text-green-400">
                  <FaNodeJs size={38} />
                </a>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Node.js</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-yellow-500 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://expressjs.com/" target="_blank" className="text-yellow-500 hover:text-yellow-400">
                  <SiExpress size={42} />
                </a>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Express.js</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-purple-600 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://tailwindcss.com/" target="_blank" className="text-purple-600 hover:text-purple-400">
                  <SiTailwindcss size={40} />
                </a>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tailwind</span>
              </div>

              <div className="relative group flex justify-center items-center p-4 bg-black text-blue-500 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://www.postgresql.org/" target="_blank" className="text-blue-500 hover:text-blue-400">
                  <SiPostgresql size={35} />
                </a>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">PostgreSQL</span>
              </div>
              <div className="relative group flex justify-center items-center p-4 bg-black text-blue-500 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://nextjs.org/" target="_blank" className="text-blue-500 hover:text-blue-400">
                  <SiNextdotjs size={35} />
                </a>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Next.js</span>
              </div>
              <div className="relative group flex justify-center items-center p-4 bg-black text-blue-500 rounded-xl shadow-lg animate-neonGlow">
                <a href="https://nextjs.org/" target="_blank" className="text-blue-500 hover:text-blue-400">
                  <SiSupabase size={35} />
                </a>
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Supabase</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="w-full max-w-4xl mt-6 text-center">
        <h2 className="text-2xl font-semibold text-pink-600">Contact Me</h2>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/PiX3L-NoMAD" target="_blank" className="text-gray-800 hover:text-pink-600">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/janilee-svaerdstaal" target="_blank" className="text-gray-800 hover:text-pink-600">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:janileesvardstal@gmail.com" className="text-gray-800 hover:text-pink-600">
            <FaEnvelope size={30} />
          </a>
        </div>
      </section>
    </div>
  );
} */
