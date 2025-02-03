const dataPedidos = {
  labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
  datasets:[{
    label: 'Terminados',
      data: [12, 45, 27, 25, 5],
      backgroundColor: '#00aec3',
      borderWidth: 0,
      barThickness: 8
  },{
    label: 'Pendientes',
  data: [10, 15, 5, 6, 3],
  backgroundColor: 'rgba(0, 200, 160, 0.2)', 
  borderWidth: 1,
  barThickness: 8
  }]
}
  
const optionsPedidos = {
  scales:{
    x:{
      display:false
    },
    y:{
      display: false,
      beginAtZero:true
    }
  },
  plugins:{
    legend:{
      display:false
    }
  }
} 

const ctxPedidos = document.getElementById('chartTotalPedidos');

new Chart(ctxPedidos, {
  type: 'bar',
  data: dataPedidos,
  options: optionsPedidos
});