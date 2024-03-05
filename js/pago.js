const formulario = document.getElementById("pago-form")

function saveInLocal(data) {
  localStorage.setItem('data', JSON.stringify(data))
}

function validate(data) {
  const errors = {
    documento: "",
    banco: "",
    telefono: "",
    monto: "",
    concepto: "",
  }
  if (data.documento.length < 6) {
    errors.documento = "Documento Invalido"
  }
  if (data.banco.length !== 4) {
    errors.banco = "Banco invalido"
  }
  if (data.telefono.length !== 7) {
    errors.telefono = "Telefono invalido"
  }
  if (data.monto === "" || parseFloat(data.monto) <= 0) {
    errors.monto = "Monto Invalido"
  }
  if (data.concepto.length === 0) {
    errors.concepto = "El concepto es requerido"
  }
  return errors
}

function setErrors(errors) {
  console.log(errors)
  for (const error in errors) {
    const errorElement = document.getElementById(`${error}-error`)
    console.log(errorElement)
    errorElement.innerText = errors[error]
  }
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const data = {}
  data.operacion = formData.get('operacion')
  data.documento = formData.get('documento')
  data.telefono = formData.get('telefono')
  data.banco = formData.get('banco')
  data.monto = formData.get('monto')
  data.concepto = formData.get('concepto')
  data.fecha = new Date().toDateString()

  const errors = validate(data)
  setErrors(errors)

  if (Object.keys(errors).some(key => errors[key] !== '')) {
    return
  }
  saveInLocal(data);
  window.location = './recibo.html'
})

formulario.addEventListener("reset", () => {
  setErrors({
    documento: "",
    banco: "",
    telefono: "",
    monto: "",
    concepto: "",
  })
})
