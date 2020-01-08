let juan = sprites.create(img`
. . . . . 1 1 1 . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 f 1 1 1 1 1 f 1 1 1 . . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
1 1 1 f 1 1 1 1 1 1 f 1 1 1 . . 
1 1 1 1 f f f f f f 1 1 1 1 . . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 1 1 1 1 1 1 1 . . . . . 
. . . . 1 1 . . 1 1 . . . . . . 
. . . 1 1 1 . . 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(14)
for (let index = 0; index < 9; index++) {
    pause(100)
    juan.y += 4
    pause(100)
    juan.x += 4
    pause(100)
}
let thomas = sprites.create(img`
. . . . 9 9 9 . . . . . . . . . 
. 9 9 9 9 9 9 9 9 9 9 . . . . . 
. 9 9 9 9 9 9 9 9 9 9 . . . . . 
. 9 9 9 9 9 9 9 9 9 9 9 . . . . 
. 9 9 9 1 9 9 9 1 9 9 9 . . . . 
9 9 1 9 9 9 9 9 9 1 9 9 9 . . . 
9 9 1 1 1 1 1 1 1 1 9 9 9 9 . . 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . . 9 9 9 9 9 9 9 9 9 . . . . 
. . . . . 9 9 9 9 9 . . . . . . 
. . . . 9 9 9 . 9 9 9 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
for (let index = 0; index < 9; index++) {
    pause(100)
    thomas.y += -4
    pause(100)
    thomas.x += -4
    pause(100)
}
for (let index = 0; index < 9; index++) {
    pause(100)
    thomas.y += 4
    pause(100)
    thomas.x += 4
    pause(100)
}
for (let index = 0; index < 9; index++) {
    pause(100)
    juan.y += -4
    pause(100)
    juan.x += -4
    pause(100)
}
