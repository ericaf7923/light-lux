light.setBrightness(100)
while (true) {
    console.log(input.rotation(Rotation.Roll))
    if (input.rotation(Rotation.Roll) > 20 || input.rotation(Rotation.Roll) < -20) {
        light.setAll(light.rgb(255, 0, 0))
        pause(300)
        light.clear()
        pause(200)
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.clear()
        console.log(input.soundLevel() + 155)
    }
    
}
