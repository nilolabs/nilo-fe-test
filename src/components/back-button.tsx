import Link from 'next/link';

function BackButton() {
  return (
    <Link
      href='/'
      className='flex items-center text-[#3784F7] font-poppins font-medium text-base hover:underline w-fit'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 mr-1'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 19l-7-7 7-7'
        />
      </svg>
      Back to All Pokémon
    </Link>
  );
}
export default BackButton;
