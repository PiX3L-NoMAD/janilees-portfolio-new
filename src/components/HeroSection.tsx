import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export default function HeroSection() {
  return (
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
            className='rounded-full border-4 border-purple-600 shadow-lg'
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
            className='p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition duration-300 shadow-lg animate-neonGlow'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://linkedin.com/in/janilee-svaerdstaal'
            target='_blank'
            className='p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition duration-300 shadow-lg animate-neonGlow'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href='mailto:janileesvardstal@gmail.com'
            className='p-3 rounded-full bg-gray-800 hover:bg-red-500 transition duration-300 shadow-lg animate-neonGlow'
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
