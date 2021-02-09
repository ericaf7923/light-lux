light.set_brightness(100)
while True: 
    print(input.rotation(Rotation.ROLL))
    if input.rotation(Rotation.ROLL) > 20 or input.rotation(Rotation.ROLL) < -20:
        light.set_all(light.rgb(255,0,0))
        pause(300)
        light.clear()
        pause(200)
        light.set_all(light.rgb(255,0,0))
    else:
        light.clear()
        print(input.sound_level() + 155)
