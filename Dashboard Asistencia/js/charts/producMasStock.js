const dataProdMayorStock = {
  labels:['Producto A',' Producto B'],
  datasets:[{
    data: [580, 789],
    borderWidth: 2,
    backgroundColor:['#00aec3', 'rgba(0,200,160,.2)'],
    hoverOffset:4
  }]
}
  
const optionsMayorStock = {
  cutout:'65%' ,
  scales:{
    y:{
      display:false,
      beginAtZero: false
    }
  },
  plugins:{
    legend: false
  }
}
  
const ctxMayorStock = document.getElementById('chartProductosMasStock');

new Chart(ctxMayorStock,{
  type:'doughnut',
  data: dataProdMayorStock,
  options: optionsMayorStock
})