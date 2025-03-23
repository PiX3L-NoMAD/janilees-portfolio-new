export default function Projects() {
  return (
    <section className='pb-10 pt-0 px-6 text-left'>
      <h2 className='text-4xl font-bold text-purple-400 text-center mb-6'>
        Projects
      </h2>

      <div className='p-6 bg-gray-800 rounded-lg shadow-lg'>
        <h3 className='text-xl font-bold text-white'>
          📈 Stock Price Prediction
        </h3>
        <p className='text-gray-400 mt-2'>
          A Python-based project that predicts
          stock prices using deep learning. It
          fetches, preprocesses, and trains on
          financial data to generate future price
          trends.
        </p>
        <a
          href='https://github.com/PiX3L-NoMAD/stock-price-prediction'
          target='_blank'
          className='text-pink-600 hover:text-pink-800'
        >
          GitHub Repo
        </a>
      </div>

      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='p-6 bg-gray-800 rounded-lg shadow-lg'>
          <h3 className='text-xl font-bold text-white'>
            🚗 Driving School Website
          </h3>
          <p className='text-gray-400 mt-2'>
            A user-friendly driving school website
            selling course packages. Built with
            Next.js, TypeScript, and Tailwind for
            modern, responsive design.
          </p>
          <a
            href='https://github.com/PiX3L-NoMAD/driving-school-web-app'
            target='_blank'
            className='text-pink-600 hover:text-pink-800'
          >
            GitHub Repo
          </a>{' '}
          |
          <a
            href='https://janilees-driving-school.vercel.app/'
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
            accessible and fun, integrating OpenAI
            for summaries, and Firebase for
            databasing. Built with TypeScript,
            React, Tailwind. Hosted on Netlify and
            Render.
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

        <div className='p-6 bg-gray-800 rounded-lg shadow-lg'>
          <h3 className='text-xl font-bold text-white'>
            ✨ NC News API
          </h3>
          <p className='text-gray-400 mt-2'>
            A news aggregation site with social
            functions and user accounts (backend).
            Built with JS, Express, Vite,
            PostgreSQL. Hosted on Render and
            Supabase.
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
      </div>
    </section>
  );
}
