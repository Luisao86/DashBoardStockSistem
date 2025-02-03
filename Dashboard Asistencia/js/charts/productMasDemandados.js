const dataProductosDemandados = {
  labels: ['sem 1','sem 2','sem 3','sem 4', ],
  datasets:[{
    label:'ProductoA',
    data:[150,100,60,210],
    backgroundColor:'#00aec3',
    borderColor:'#00aec3',
    borderWidth: 2,
    pointRadius: 2,
    tension: .1
    },
  {
    label:'ProductoB',
    data:[100,70,75 ,95],
    backgroundColor:'rgba(0,200,160,.3)',
    borderColor: 'rgba(0,200,160,.3)',
    borderWidth:2,
    pointRadius:2,
    tension:.1,
    borderDash: [5,5]
  }]
}

const optionsProductos = {
  scales:{
    x:{
      display:false
    },
    y:{
      display:false,
      beginAtZero: true
    }
  },
  plugins:{
    legend:false,
    tooltip:{
      mode:'index',
      intersect:false,
    
    }
  },
  interaction:{
    mode:'index',
    intersect:false
  }
}
const ctxProductDemanda = document.getElementById('chartProductosDemandados');

new Chart(ctxProductDemanda,{
  type: 'line',
  data: dataProductosDemandados,
  options:optionsProductos
})