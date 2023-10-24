let map;

export function loadMap () {
    map = L.map('map').setView([0, 0], 0)
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
    }).addTo(map)
    const google = L.tileLayer('https://mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
        maxZoom: 19,
        attribution: '&copy; Google'
    })
    const arcgis = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
        attribution: '&copy; ESRI'
    })

    const layerControl = L.control.layers({
        "OSM": osm,
        "Google": google,
        "ESRI": arcgis
    }).addTo(map)

    return map
}

export function mapListener (response) {
    const lat = response.location.lat
    const lon = response.location.lon
    const marker = L.marker([lat, lon]).addTo(map)
    map.setView([lat, lon], 12)

    marker.bindPopup(response.location.name).openPopup()
    return marker
}
