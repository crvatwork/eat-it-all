sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.spray, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(0, 0)
    info.changeLifeBy(-1)
})
let mySprite: Sprite = null
let mySprite2 = sprites.create(img`
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 . . 7 7 . . . . . 
    . 7 7 7 7 7 7 7 7 . . 7 . . . . 
    . . . 7 7 7 . . . 7 7 . 7 . . . 
    . . . 7 . 7 . . . . . 7 7 7 . . 
    . . . 7 7 7 7 7 . . . . 7 7 7 . 
    . . . . . 7 . 7 7 7 7 7 7 7 . . 
    . . . . . . 7 7 7 7 7 7 7 . . . 
    . . . . . . . . 7 7 7 7 7 . 7 . 
    . . . . . . . . 7 7 7 7 7 7 . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . 7 7 7 . . . . . . . . 
    . . . . . 7 . . . . . . . . . . 
    . . . . . 7 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(80, 60)
controller.moveSprite(mySprite2)
let othersprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 6 . . . . . . . 6 . . . . 
    . . . 6 . . . . . . . . 6 . . . 
    . . 6 6 . . . . . . . . 6 . . . 
    . . 6 . . . . . . . . . 6 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 6 . . . . 6 . . 6 6 . . . . . 
    . 6 . . . 6 6 . . 6 6 . . . . 6 
    . 6 . . 6 . 6 . . 6 . 6 . . 6 . 
    . 6 6 6 . . 6 . 6 . . 6 6 6 . . 
    . 6 6 . . . 6 6 6 . . . 6 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
othersprite.setPosition(randint(0, 90), randint(0, 90))
othersprite.setBounceOnWall(true)
game.onUpdateInterval(3000, function () {
    mySprite = sprites.create(img`
        3 3 3 3 3 3 3 . . . . . . 3 3 3 
        . 3 3 3 . 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 . . 3 3 3 . 3 3 3 3 . 
        . . . . . . . . . . 3 3 3 . 3 . 
        . . . . . 2 . . . . 3 3 3 3 3 . 
        . . . . 2 2 . . 2 2 . . . . . . 
        . . . . . 2 . . . 2 . . 2 2 . . 
        . . . . . 2 2 . 2 . . 2 . . . . 
        . . . . . . 2 2 . . 2 . . . . . 
        . . . . . . 2 . . . 2 . . . . . 
        . . . . . . . . . 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . . 3 3 
        3 3 3 3 . . . . . . . . . 3 3 3 
        3 3 3 3 . . . . . . . . 3 3 3 . 
        3 3 3 3 . . . . . . . 3 3 3 3 3 
        `, SpriteKind.Food)
    mySprite.setPosition(randint(10, 142), randint(10, 102))
})
