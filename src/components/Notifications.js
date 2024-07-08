import Link from 'next/link';
export default function Notifications() {
  return (
    <div className='notifications-container px-10 py-3 bg-[#FBEEB4] text-center'>
      <h3>Be part of a better internet.
        <Link href="/plans" className='underline pl-2'>Get 20% off membership for a limited time</Link>
      </h3>
    </div>
  )
}