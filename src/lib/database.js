import * as Realm from 'realm-web'

export const app = new Realm.App({ id: 'application-0-czfxu' })

export const credentials = Realm.Credentials.anonymous()

export const getUser = async () => {
  let user
  try {
    user = await app.logIn(credentials)
  } catch (error) {
    console.log('getUser ~ error:', error)
    return false
  }

  return user
}

export const listRegistrations = async () => {
  const user = await getUser()
  if (!user?.isLoggedIn) return

  const result = await user.functions.list_registrations()
  await user.logOut()

  return result
}

export const createRegistration = async (data) => {
  const user = await getUser()
  if (!user?.isLoggedIn) return

  const result = await user.functions.create_registrations(data)
  console.log('createRegistration ~ result:', result)
  await user.logOut()

  return result
}
