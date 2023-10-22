let map;

export function loadMap () {
    map = L.map('map').setView([0, 0], 0)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    return map
}

export function mapListener (response) {
    const lat = response.location.lat
    const lon = response.location.lon
    const marker = L.marker([lat, lon]).addTo(map)
    map.setView([lat, lon], 12)
    return marker
}
