import RegisterForm from '@/components/profile/RegisterForm'  
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Register() {
  const session = await getServerSession(authOptions) 

  if (session) {
    redirect('/profile')
  }

  return (
    <div>
      <RegisterForm />
    </div>
  )
}
