function burner(c, h, o) {
    water = Math.floor(Math.min(h / 2, o))
    o = o - water
    h = h - water * 2
    co2 = Math.floor(Math.min(c, o / 2))
    methane = Math.floor(Math.min(c, h / 4))
    return [water, co2, methane]
}