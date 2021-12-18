input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
})
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
