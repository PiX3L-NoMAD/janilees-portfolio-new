export default function WavyDivider() {
  return (
    <div className='relative w-full h-24 overflow-hidden'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 500 320'
        preserveAspectRatio='none'
        className='w-full h-full'
      >
        <path
          className='fill-gray-800'
          d='M0,160C150,200,350,120,500,160C650,200,850,280,1000,240L1440,0L1440,320L0,320Z'
        />
      </svg>
    </div>
  );
}
