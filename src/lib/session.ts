import { User, getServerSession } from 'next-auth'

export const session = async ({ session, token }: any) => {
  console.log("This is the session", session)
  console.log("This is the token", session)
  session.user.id = token.id

  return session
}

export const getUserSession = async (): Promise<User> => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  })
  // if (!authUserSession) throw new Error('unauthorized')
  return authUserSession?.user
}