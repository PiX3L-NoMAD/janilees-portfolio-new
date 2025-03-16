import DownloadCVButton from './DownloadCVButton';

export default function About() {
  return (
    <section className='pt-1 pb-2 px-6 text-center bg-gray-800 top-border-gradient md:pt-10'>
      <h2 className='text-3xl font-bold text-purple-400'>
        About Me
      </h2>
      <p className='my-4 text-gray-200 max-w-3xl mx-auto text-left'>
        I’m a JavaScript/TypeScript & React
        developer with a background in the arts,
        bringing visual storytelling and creative
        problem-solving to my code. Recently, I’ve
        been expanding into full-stack development
        and test-driven practices at Northcoders,
        refining my ability to write clean,
        expressive, and maintainable code while
        collaborating in an Agile environment.
        <br /> <br />
        My strengths include attention to detail,
        persistence in problem-solving, and a keen
        artistic eye, which help me craft
        intuitive and engaging user experiences.
        I’m looking for a role where I can combine
        my creativity, curiosity, and technical
        skills to contribute to inspiring
        projects.
      </p>
      <DownloadCVButton />
    </section>
  );
}
