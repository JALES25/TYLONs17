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
    <div className="">

        <LoginForm />
      
    </div>
  )
}
