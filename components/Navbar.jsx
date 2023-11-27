import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-sky-300 px-8 py-3">
      <Link className="text-white text-lg font-bold" href="/">
        MongoDB CRUD
      </Link>
      <Link
        className="bg-sky-400 text-l font-bold px-4 py-2 rounded-md text-white hover:bg-sky-200"
        href="/addTopic"
      >
        Add Topic
      </Link>
    </nav>
  )
}
