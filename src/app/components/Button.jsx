import Link from 'next/link';

export default function Button({ text, isDisabled }) {
  console.log(isDisabled);
  return (
    <Link href="/select">
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
