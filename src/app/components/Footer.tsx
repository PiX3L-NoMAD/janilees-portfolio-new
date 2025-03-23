import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <section className='bg-gray-900 py-8 px-6 text-center'>
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
          href='mailto:janileesvardstal@gmail.com'
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
  );
}
