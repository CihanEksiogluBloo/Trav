export const GoogleMapsUrl = (Adres:string) => {
    "geo: 37.0148543,35.7456513?z=17f"
    const adresClean = Adres.split(":")[1].split("?")[0].trim()
    return `http://maps.google.com/maps?&z=10&q=${adresClean}&ll=${adresClean}`
}