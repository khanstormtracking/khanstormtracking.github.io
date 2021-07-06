function checkSatellite(satellite, latitude, longitude, i) {
    document.getElementById(`satelliteImg${i}`).addEventListener("error", fixSatellite)
    function fixSatellite() {
        document.getElementById(`satelliteImg${i}`).src = `https://realearth.ssec.wisc.edu/api/image?products=${satellite}.100&width=720&height=480&client=RealEarth&background=bluemarble&labels=-&center=${latitude},${longitude}&zoom=6&timeproduct=${satellite}&timespan=-18t&animate=true&animationspeed=92.10526315789474`
    }
}
