import Link from 'next/link';

export default function Button({ text, isDisabled }) {
  console.log(isDisabled);
  return (
    <Link href="/select">
      <button disabled={isDisabled}>{text}</button>
    </Link>
  );
}
