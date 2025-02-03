const dataBajosEnStock = {
  labels: ['Prod 1', 'Prod 2', 'Prod 3', 'Prod 4','Prod 5','prod 6', 'Prod 7','Prod 8','Prod 9', 'Prod 10'],
  datasets:[{
    data: [12, 45, 27, 25, 5,7,13,30,27,38],
    backgroundColor: '#00aec3',
    borderWidth: 0,
    barThickness: 8
  }]
}
  
const optionsBajosEnStock = {
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

const ctxBajosEnStock = document.getElementById("chartBajosEnStock");

new Chart(ctxBajosEnStock,{
  type:'bar',
  data: dataBajosEnStock,
  options: optionsBajosEnStock
})