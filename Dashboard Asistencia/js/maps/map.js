// INICIO MAPA CALOR DEMANDA DE REGIONES
const myMap = L.map('mapaCalor').setView([-37.32593763998723, -60.17071718666473], 6 );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

const url = "https://raw.githubusercontent.com/mgaitan/departamentos_argentina/master/departamentos-buenos_aires.json";

function getColor(densidad) {
    return densidad > 2000 ? '#800026' :
           densidad > 1500 ? '#E31A1C' :
           densidad > 1000 ? '#FC4E2A' :
           densidad > 500 ? '#FEB24C' :
                            '#77777701';
}

// Datos hardcodeados
const tblDataInfo = {
    "93": 2500, // Ejemplo de ID con 2500 legajos
    "123": 1800,
    "87": 1200,
    "56": 600,
    "20": 300,
    "156": 0
};

fetch(url)
    .then(response => response.json())
    .then(data => {
        const mapDataLayer = L.geoJSON(data, {
            style: function(feature) {
                const idPartido = feature.properties.id; // Asegúrate de que esto coincida con el ID del departamento en tu GeoJSON
                const densidad = tblDataInfo[idPartido] || 0; // Obtener el valor de legajo correspondiente al ID del departamento
                return {
                    fillColor: getColor(densidad),
                    fillOpacity: 0.8,
                    color: 'black',
                    weight: 1
                };
            },
            onEachFeature: onEachFeature
        }).addTo(myMap);

        function resaltador(e) {
            const layer = e.target;
            const idPartido = layer.feature.properties.id; // Asegúrate de que esto coincida con el ID del departamento en tu GeoJSON
            const densidad = tblDataInfo[idPartido] || 0; // Obtener el valor de legajo correspondiente al ID del departamento
            divInfo.update(idPartido, densidad);

            const info = `<b>Partido : </b></h3> ${idPartido}</br>`;
            layer.setStyle({
                weight: 2,
                color: '#fff',
                dashArray: '',
                fillOpacity: 0.7
            });
            layer.bindPopup(info).openPopup();
            layer.bringToFront();
        }

        function resetResaltador(e) {
            mapDataLayer.resetStyle(e.target);
            divInfo.update();
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: resaltador,
                mouseout: resetResaltador,
            });
        }

        const divInfo = L.control();

        divInfo.onAdd = function() {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
        };

        divInfo.update = function(idPartido, densidad) {
            if (idPartido && densidad) {
                this._div.innerHTML = '<h5 style="color:#777">Provincia de Buenos Aires</h5>' +
                    '<h6>' + 'ID de partido : ' + idPartido +
                    '</h6>' + '<h6> Liberados : ' + densidad + '</h6>' +
                    'Posicionarse sobre un partido';
            } else {
                this._div.innerHTML = '<h5 style="color:#777">Provincia de Buenos Aires</h5>' + '<h6>Posicionarse sobre un partido</h6>';
            }
        };

        divInfo.addTo(myMap);

        const legend = L.control({ position: 'bottomright' });

        legend.onAdd = function() {
            const div = L.DomUtil.create('div', 'info legend'),
                grados = [0, 500, 1000, 1500, 2000],
                labels = [];

            for (let i = 0; i < grados.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColor(grados[i] + 1) + '"></i> ' +
                    grados[i] + (grados[i + 1] ? '&ndash;' + grados[i + 1] + '<br>' : '+');
            }
            return div;
        };
        legend.addTo(myMap);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// FIN MAPA CALOR DEMANDA DE REGIONES