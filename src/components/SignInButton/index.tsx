import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { signIn, signOut, useSession } from 'next-auth/client'

import { SignInButtonContainer } from './styles'

const SignInButton: React.FC = () => {
  const [session] = useSession()

  return session ? (
    <SignInButtonContainer onClick={() => signOut()}>
      <FaGithub />
      {session.user.name}
      <FiX />
    </SignInButtonContainer>
  ) : (
    <SignInButtonContainer onClick={() => signIn('github')}>
      <FaGithub />
      Logar com GitHub
    </SignInButtonContainer>
  )
}

export default SignInButton
