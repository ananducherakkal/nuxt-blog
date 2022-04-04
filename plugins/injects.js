const isError = error => error instanceof Error

export default (_, inject) => {
  inject('formatDate', isError)
}
