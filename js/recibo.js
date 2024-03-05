const elements = {};
elements.fecha = document.getElementById('fecha')
elements.identificacion = document.getElementById('identificacion')
elements.destino = document.getElementById('destino')
elements.banco = document.getElementById('banco')
elements.concepto = document.getElementById('concepto')

const data = JSON.parse(localStorage.getItem('data'))
console.log(data)

elements.identificacion.innerText = data.documento
elements.fecha.innerText = data.fecha;
elements.destino.innerText = data.telefono
elements.banco.innerText = data.banco
elements.concepto.innerText = data.concepto
