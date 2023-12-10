'use client'

import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const { status, data: session } = useSession()

  return (
    <nav className="flex justify-between items-center bg-blue-200 px-8 py-3">
      <Link
        className="text-white text-lg font-bold active:text-blue-300"
        href="/"
      >
        MongoDB CRUD
      </Link>
      <div className="flex gap-3">
        <Link
          className="bg-blue-300 text-lg font-bold px-4 py-2 rounded-md text-white hover:bg-blue-400 hover:shadow-inner shadow-lg transition ease-in-out"
          href="/addTopic"
        >
          Add Topic
        </Link>
        {status === 'authenticated' ? (
          <>
            <button
              onClick={() => signOut()}
              className="bg-rose-300 hover:bg-rose-400 text-white px-4 py-2 rounded-md text-lg font-bold hover:shadow-inner shadow-lg transition ease-in-out"
            >
              Sign Out
            </button>
            <div className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src={session?.user?.image}
                width={40}
                height={40}
                alt={session?.user?.name}
              />
              <span className="text-white font-bold">
                {session?.user?.name}
              </span>
            </div>
          </>
        ) : (
          <Link
            href="/signIn"
            className="bg-rose-300 hover:bg-rose-400 text-white px-4 py-2 rounded-md text-lg font-bold hover:shadow-inner shadow-lg transition ease-in-out"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
