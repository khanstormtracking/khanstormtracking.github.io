function getLocationFloater() {
    firing = 0
    // Get ATCF information based on user input
    ATCF = document.getElementById("ATCFGet").innerText
    // split the ATCF to be stored in an array
    ATCF = ATCF.split(" ")

    latitude = ATCF[4]
    latitude = parseFloat(latitude)
    longitude = ATCF[5]
    longitude = parseFloat(longitude)
    if (latitude > 0) {
        latitudeRef = "N"
    } else { latitudeRef = "S" }
    if (longitude > 0) {
        longitudeRef = "E"
    } else { longitudeRef = "W" }

    document.getElementById("latitudeNumPost").innerHTML = Math.abs(latitude)
    document.getElementById("latitudeRefPost").innerHTML = latitudeRef
    document.getElementById("longitudeNumPost").innerHTML = Math.abs(longitude)
    document.getElementById("longitudeRefPost").innerHTML = longitudeRef

    buildFloater(latitude, longitude)
    buildGraphics()
}

function buildFloater(latitude, longitude) {
    // Build the floater
    floaterImage = '<img src="https://realearth.ssec.wisc.edu/api/image?products=G16-ABI-FD-BAND13-GRAD.100&width=720&height=480&client=RealEarth&background=bluemarble&labels=line&center=' + latitude + ',' + longitude + '&zoom=6&timeproduct=G16-ABI-FD-BAND13-GRAD&timespan=-18t&animate=true&animationspeed=92.10526315789474">'
    document.getElementById("floater").innerHTML = floaterImage
    firstDiv()
}
