input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    2786,
    1,
    255,
    0,
    1049,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    1,
    2786,
    255,
    0,
    1049,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
basic.forever(function () {
    input.setSoundThreshold(SoundThreshold.Loud, 128)
})
