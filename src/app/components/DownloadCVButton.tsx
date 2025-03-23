const DownloadCVButton = () => {
  return (
    <a
      href='/Janilee-Svaerdstaal_CV_SDev.pdf'
      download='Janilee-Svaerdstaal_CV.pdf'
      className='bg-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition-all fixed top-13 right-5 z-50'
    >
      Download CV
    </a>
  );
};

export default DownloadCVButton;
