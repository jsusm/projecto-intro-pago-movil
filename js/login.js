const form = document.getElementById('login-form')

function validate(data) {
  const errors = {
    usuario: '',
    password: '',
  }
  if(data.usuario === '') {
    errors.usuario = 'El usuario es requerido'
  }
  if(data.password === '') {
    errors.password = 'La contraseña es requerida'
  }
  return errors
}

function setErrors(errors) {
    for(const error in errors) {
        const errorElement = document.getElementById(`${error}-error`)
        errorElement.innerText = errors[error]
    }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)

  const data = {}
  data.usuario = formData.get('usuario')
  data.password = formData.get('password')

  const errors = validate(data)
  setErrors(errors)
  if(Object.keys(errors).some(key => errors[key] !== '')) {
    return
  }
  window.location = './app.html'
})
