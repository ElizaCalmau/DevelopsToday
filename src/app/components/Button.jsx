import Link from 'next/link';
import { ROUTES } from '../utils/ROUTES';
export default function Button({ text, isDisabled, makeId, year }) {
  console.log(isDisabled);
  return (
    <Link href={ROUTES.result(makeId, year)}>
      <button
        className={`mt-4 px-4 py-2 rounded-lg text-white font-semibold transition duration-200 
      ${
        isDisabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'
      }`}
      >
        {text}
      </button>
    </Link>
  );
}
