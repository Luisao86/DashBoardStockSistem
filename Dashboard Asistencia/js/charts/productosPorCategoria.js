const dataCantidadPorCategoria = {
    labels: ['Prod 1', 'Prod 2', 'Prod 3', 'Harina 1kg','Prod 5','prod 6', 'Prod 7','Prod 8','Prod 9', 'Prod 10','Prod 11','Prod 12','Prod 13','Prod 14','Prod 15','Prod 16','Prod 17','Prod 18','Prod 19','Prod 20','Prod 21','Prod 22','Prod 23','Prod 24','Prod 25','Prod 26','Prod 27','Prod 28','Prod 29','Prod 30','Prod 31',],
    datasets:[{
        data: [12, 45, 27, 25, 5,7,13,30,27,38,65,12,54,87,18,98,32,45,76,61,26,34,15,54,78,92,24,64,32,33,44],
        backgroundColor: '#00aec3',
        borderWidth: 1,
        barThickness: 30
    }]
}
  
const optionsCantidadPorCategoria = {
    scales:{
        x:{
            // display:false
        },
        y:{
            // display: false,
            beginAtZero:true
        }
    },
    plugins:{
        legend:{
            display:false
        }
    }
}

const ctxCantidadPorCategoria = document.getElementById("chartProductPorCategoria");
  
new Chart(ctxCantidadPorCategoria,{
    type:'bar',
    data: dataCantidadPorCategoria,
    options: optionsCantidadPorCategoria
})