import LoginForm from '@/components/profile/LoginForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import DBackground from '@/components/theme/DBackground'


export default async function Login() {
  const session = await getServerSession(authOptions) 

  if (session) {
    redirect('/profile')
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">

        <LoginForm />
      
    </div>
  )
}
