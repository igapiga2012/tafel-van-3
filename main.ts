let tafel_van_3 = 0
basic.forever(function () {
    if (tafel_van_3 < 15) {
        basic.showNumber(tafel_van_3)
        tafel_van_3 += 3
        basic.pause(1000)
    } else {
        tafel_van_3 = 0
    }
})
