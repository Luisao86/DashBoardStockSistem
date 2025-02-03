const dataChartGeneral = {
  labels: ['Ene','Feb','Mar','Abr','May','Jun', 'Jul','Ago','Sepe','Oct','Nov','Dic'],
  datasets:[{
    label:'Entrada de stock',
    data:[12,19,3,5,2,3,8,9],
    borderColor: '#00aec3',
    borderWidth:2,
    tension:.3,
    pointRadius:3
  },
  {
    label:'Salida de stock',
    data: [6,12,4,5,3,4,5,6],
    borderWidth:2,
    tension:.3,
    borderColor: '#FF0000',
    pointRadius:3,
    borderDash:[5,5]
  }]
}
  
const optionsChartGeneral = {
  scales:{
    y:{
      beginAtZero: true
    }
  },
  plugins:{
    legend:{
      display:false
    },
    tooltip:{
      mode:'index',
      intersect:false
      }
    },
    interaction:{
    mode:'index',
    intersect:false
  }
}
  
const ctxStock = document.getElementById('chartGeneral');
  
new Chart(ctxStock,{
    type: 'line',
    data:dataChartGeneral,
    options: optionsChartGeneral
})