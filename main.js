var app = new Vue({
    el: '#app',
    data: {
      Nombre: 'Luis',
      Apellidos : 'Rodes Roca',
      foto : 'https://tse3.mm.bing.net/th?id=OIP.LVPLwc2LP3K0LDPLPw7B7gC0C0&pid=Api',
      Edad : 52,
      vista : false,
    },
    methods : {
      cerrarVista ( mensaje , evento) {
        alert("cerrando")
      },
      ver (mensaje , evento) {
        alert("modificando")
      }
    }
  })