document.addEventListener('DOMContentLoaded', () => {
  const baseDeDatos = [
    {
      id: 1,
      nombre: 'coca de vidrio',
      precio: 30,
      image: 'coca.png'
    },
    {
      id: 2,
      nombre: 'jugo',
      precio: 15,
      image: 'coca.png'
    },
    {
      id: 3,
      nombre: 'victoria',
      precio: 40,
      image: 'coca.png'
    },
    {
      id: 4,
      nombre: 'agua',
      precio: 10,
      image: 'coca.png'
    }
  ]
  let carrito = []
  const divisa = '$'
  const DOMitems = document.querySelector('#items')
  const DOMcarrito = document.querySelector('#carrito')
  const DOMtotal = Document.querySelector('#total')

  //funcionalidad

  function renderizarProducto() {
    baseDeDatos.forEach((info) => {
      //contenedor
      const miNodo = document.createElement('div')
      miNodo.classList.add('card')
      //cuerpode tarjeta
      
    })
  }
})