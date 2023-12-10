import SignInBtn from '@/components/SignInBtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return (
    <div className="mt-16">
      <SignInBtn />
    </div>
  )
}
