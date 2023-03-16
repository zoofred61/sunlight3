basic.forever(function () {
    if (input.lightLevel() > 100) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    } else {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
    }
})
