const auth = ({ store, route, error, redirect }) => {
  store.dispatch('setPageName', route.name)
  const nonAuthPages = [
    'login',
    'register'
  ]
  const allAccessPages = [
    'index',
    'blogId'
  ]

  if (allAccessPages.includes(route.name)) {
    return
  }
  const userDetails = store.getters['user/userDetails']
  if (nonAuthPages.includes(route.name)) {
    if (userDetails) {
      return redirect('/')
    }
    return
  }
  if (!userDetails) {
    return redirect('/login')
  }
  return null
}

export default auth
