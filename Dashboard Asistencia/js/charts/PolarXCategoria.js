const dataCategorias ={
  labels:[
    'Alimentos',
    'Higiene personal',
    'Ropa/Cama',
    'Construcción',
    'Articulos de limpieza'
  ],
  datasets:[{
    data:[420,280,167,58,395],
    borderWidth: 0,
    backgroundColor: [
      'rgba(0, 128, 0, 0.6)',   // Verde para Alimentos
      'rgba(0, 0, 255, 0.7)',   // Azul para Higiene Personal
      'rgba(128, 0, 128, 0.8)', // Morado para Ropa de Cama
      'rgba(255, 165, 0, 0.9)', // Naranja para Construcción
      'rgba(255, 255, 0, 0.6)'  // Amarillo para Artículos de Limpieza
    ],
    borderColor: [
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)',
      'rgba(255, 255, 255, 1)'
    ],
    borderWidth:['3','3','3','3','3']
  }]
}

const optionsCategorias = {
  sacales:{
    y:{
      beginAtZero:true
    }
  },
  plugins: {
    legend: {
      padding: 15,
      labels: {
        boxWidth: 20,
        padding: 15,
        margingright: 20
      }
    }
  }
}

const ctxCategorias = document.getElementById("chartPolarCategorias");

new Chart(ctxCategorias,{
  type:'polarArea',
  data: dataCategorias,
  options: optionsCategorias
})