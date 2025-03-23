import {
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiVite,
  SiNextdotjs,
  SiPython,
} from 'react-icons/si';

export default function TechStack() {
  return (
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
            label: 'Tailwind',
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
            color: 'text-yellow-500',
            hoverColor: 'hover:text-yellow-400',
          },
          {
            link: 'https://nextjs.org/',
            icon: <SiNextdotjs size={40} />,
            label: 'Next.js',
            color: 'text-purple-500',
            hoverColor: 'hover:text-purple-400',
          },
          {
            link: 'https://nextjs.org/',
            icon: <SiPython size={40} />,
            label: 'Python',
            color: 'text-green-500',
            hoverColor: 'hover:text-green-400',
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
  );
}
