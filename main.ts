namespace SpriteKind {
    export const Guide = SpriteKind.create()
    export const FirstEnemy = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const tax = SpriteKind.create()
    export const BossProjectile = SpriteKind.create()
    export const PizzaProjectile = SpriteKind.create()
}
namespace StatusBarKind {
    export const BossHP = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (Level1 == 0) {
        game.showLongText("You're new here so i'll show you the ropes ", DialogLayout.Bottom)
    }
    if (Level1 == 0) {
        Level1 = 1
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`level8`)
        mySprite.ay = 600
        sprites.destroy(mySprite2)
        controller.moveSprite(mySprite, 100, 0)
    } else if (Level1 == 1) {
        Level1 += 1
        scene.setBackgroundColor(9)
        tiles.setCurrentTilemap(tilemap`level9`)
        mySprite.ay = 600
        controller.moveSprite(mySprite, 100, 0)
        sprites.destroy(mySprite2)
    } else if (Level1 == 2) {
        Boss = true
        Level1 += 1
        tiles.setCurrentTilemap(tilemap`level12`)
        mySprite.ay = 600
        sprites.destroy(mySprite2)
        controller.moveSprite(mySprite, 100, 0)
        mySprite4 = sprites.create(img`
            . . b b . . . . . . b b . . . . 
            . b f f b c . . c b f f b . . . 
            . c f f f f c c f f f f c . . . 
            . c f 1 f f f f f f 1 f c . . . 
            . c 1 f 1 f f f f 1 f 1 c . . . 
            . . f 1 1 1 f f 1 1 1 f . . . . 
            . . c f f 1 1 1 1 f f c . . . . 
            . . c f f 1 f f 1 f f c . . c c 
            . . c c f f 1 1 f f f c . c f c 
            . . . c f f f f f f c c c f f c 
            . . . c f f f f f f f c c f c . 
            . . . c f f f f f f f f f c . . 
            . . . c f c c c f f f f f . . . 
            . . . c f . . c f . . c f . . . 
            `, SpriteKind.boss)
        tiles.placeOnRandomTile(mySprite4, assets.tile`myTile5`)
        tiles.setTileAt(mySprite4.tilemapLocation(), sprites.builtin.brick)
        statusbar2 = statusbars.create(20, 4, StatusBarKind.BossHP)
        statusbar2.max = 3
        statusbar2.attachToSprite(mySprite4)
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile3`)) {
        if (info.score() >= 5) {
            game.showLongText("Would you like to buy cheese?", DialogLayout.Bottom)
            YesNo = game.askForString("Buy Cheese?")
            if (YesNo == "Yes") {
                info.changeLifeBy(1)
                game.showLongText("You got 1 Cheese! +1 Health", DialogLayout.Bottom)
                info.changeScoreBy(-5)
            } else if (YesNo == "Kyle") {
                tiles.setCurrentTilemap(tilemap`level15`)
            } else {
                game.showLongText("Oh okay then...", DialogLayout.Bottom)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    mySprite.ay = 0
    controller.moveSprite(mySprite)
    info.setLife(3)
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 1))
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . 6 6 6 6 7 6 6 6 6 . . . . 
        . . . . 6 7 7 7 7 7 6 . . . . . 
        . . . . . 6 7 7 7 6 . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Guide)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 0))
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . 6 6 6 6 7 6 6 6 6 . . . . 
        . . . . 6 7 7 7 7 7 6 . . . . . 
        . . . . . 6 7 7 7 6 . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . 6 6 6 6 7 6 6 6 6 . . . . 
        . . . . 6 7 7 7 7 7 6 . . . . . 
        . . . . . 6 7 7 7 6 . . . . . . 
        . . . . . . 6 7 6 . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Left == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 4 4 4 . . 
            . . . . . . . . 4 4 4 5 5 4 . . 
            . . . . . . 4 4 5 5 5 5 5 4 . . 
            . . . . 4 4 5 5 5 5 5 5 5 4 . . 
            . . . 4 5 5 5 5 5 5 5 4 4 4 . . 
            . . 4 4 4 4 4 4 4 4 4 5 5 4 . . 
            . . 4 5 5 5 5 5 5 5 5 5 5 4 . . 
            . . 4 4 5 5 5 5 5 5 5 5 5 4 . . 
            . . . . 4 4 4 5 5 5 5 5 5 4 . . 
            . . . . . . . 4 4 4 5 5 5 4 . . 
            . . . . . . . . . . 4 4 4 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -70, 15)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . 4 4 4 . . 
            . . . . . . . . 4 4 4 5 5 4 . . 
            . . . . . . 4 4 5 5 5 5 5 4 . . 
            . . . . 4 4 5 5 5 5 5 5 5 4 . . 
            . . . 4 5 5 5 5 5 5 5 4 4 4 . . 
            . . 4 4 4 4 4 4 4 4 4 5 5 4 . . 
            . . 4 5 5 5 5 5 5 5 5 5 5 4 . . 
            . . 4 4 5 5 5 5 5 5 5 5 5 4 . . 
            . . . . 4 4 4 5 5 5 5 5 5 4 . . 
            . . . . . . . 4 4 4 5 5 5 4 . . 
            . . . . . . . . . . 4 4 4 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 70, 15)
    }
})
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.down) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.left) + controller.combos.idToString(controller.combos.ID.right) + controller.combos.idToString(controller.combos.ID.B) + controller.combos.idToString(controller.combos.ID.A), function () {
    game.splash("Imshalov")
    game.splash(" Asty")
    game.splash("Meroculous")
    game.splash(" Kerester")
    game.splash("Yemeresty")
    game.splash("Lendipidy")
    game.splash("Endestero")
})
statusbars.onZero(StatusBarKind.BossHP, function (status) {
    tiles.setCurrentTilemap(tilemap`level13`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 0))
    mySprite.ay = 0
    controller.moveSprite(mySprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.FirstEnemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    if (statusbar.value == 0) {
        sprites.destroy(otherSprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BossProjectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onDestroyed(SpriteKind.FirstEnemy, function (sprite) {
    if (Intro == 1) {
        game.showLongText("Phew, that was a close one! Those are only the beginning however on the amount of dangerous enemies you will face!", DialogLayout.Bottom)
        game.showLongText("I'll leave the rest to you... Player", DialogLayout.Bottom)
        Intro = 0
        tiles.setTileAt(tiles.getTileLocation(15, 14), assets.tile`myTile6`)
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (Level1 > 0) {
            mySprite.vy = -300
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.splash("Credits: Jonathan-Main Game developper Ethan-Idea specialist")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . d d d d d d d d d d d d . . 
        . d d 5 5 5 5 5 5 5 5 5 5 d d . 
        . d 5 5 5 5 5 5 5 5 5 5 5 5 d . 
        . d 5 5 5 5 5 5 5 5 7 5 5 5 d . 
        . d 5 5 5 5 2 2 5 5 5 7 5 5 d . 
        . d 2 2 5 5 2 2 5 5 5 7 5 5 d . 
        . b 2 2 5 5 5 5 5 5 5 5 5 5 d . 
        . b 4 5 5 5 5 5 5 5 5 5 5 5 d . 
        . b 4 4 5 5 5 5 5 5 5 5 5 5 d . 
        . b 4 4 4 5 7 5 5 5 5 5 5 5 d . 
        . b 4 7 7 7 5 5 5 5 5 5 5 5 d . 
        . b 4 4 4 4 4 5 5 5 5 2 2 5 d . 
        . b b 4 4 4 4 4 4 5 5 2 2 d d . 
        . . b b b b b b b b d d d d . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
    projectile3.setKind(SpriteKind.PizzaProjectile)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Left = 1
    Right = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FirstEnemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Right = 1
    Left = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (Intro == 1) {
        game.showLongText("That is a chair. The currency in Kyle's cheese cuisine. You can buy cheese with it.", DialogLayout.Bottom)
        game.showLongText("You see that counter up there? That is the amount of chairs you have.", DialogLayout.Bottom)
        mySprite3 = sprites.create(img`
            . . . . . . . . 4 4 4 4 . . . . 
            . . . . 4 4 4 4 5 5 5 5 4 . . . 
            . 4 4 4 4 4 4 5 5 5 5 5 4 4 . . 
            4 4 4 5 4 4 5 5 5 5 5 4 4 4 . . 
            4 4 5 5 5 5 5 5 5 5 5 4 4 4 . . 
            f 4 4 4 4 4 4 4 5 5 5 5 5 4 . . 
            f 4 4 4 4 5 5 5 4 4 5 5 5 5 4 . 
            f 4 4 4 5 5 5 5 5 5 4 4 5 5 5 4 
            . 4 4 5 c 5 5 5 5 5 5 4 4 5 5 4 
            . 4 5 5 c 5 5 5 c 5 5 4 4 4 5 4 
            . 4 5 5 5 5 5 c 5 5 5 4 4 4 4 4 
            . 4 5 b b b 5 5 4 4 4 4 4 4 4 4 
            . . 4 5 5 5 5 4 5 5 4 4 5 5 4 4 
            . . . 4 5 5 5 4 4 5 5 4 4 4 4 . 
            . . . 4 4 b b 4 4 4 4 4 . . . . 
            . . . 4 b b b 4 4 . . . . . . . 
            `, SpriteKind.FirstEnemy)
        mySprite3.follow(mySprite, 90)
        statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar.attachToSprite(mySprite3)
        statusbar.setColor(2, 15)
        statusbar.max = 10
        mySprite3.ay = 600
    } else {
    	
    }
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.PizzaProjectile, function (sprite, otherSprite) {
    statusbar2.value += -1
    sprites.destroy(otherSprite)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    if (statusbar.value == 0) {
        sprites.destroy(otherSprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let projectile2: Sprite = null
let mySprite3: Sprite = null
let Right = 0
let projectile3: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let Left = 0
let YesNo = ""
let statusbar2: StatusBarSprite = null
let mySprite4: Sprite = null
let Boss = false
let Level1 = 0
let Intro = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
spriteutils.setLifeImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 4 4 4 . . 
    . . . . . . . . 4 4 4 5 5 4 . . 
    . . . . . . 4 4 5 4 4 5 5 4 . . 
    . . . . 4 4 5 4 5 4 4 5 5 4 . . 
    . . . 4 5 5 4 4 5 5 5 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 5 5 4 . . 
    . . 4 5 5 4 4 5 5 5 5 5 5 4 . . 
    . . 4 4 5 5 5 5 5 4 4 5 4 4 . . 
    . . . . 4 4 4 5 5 4 4 5 4 4 . . 
    . . . . . . . 4 4 4 5 5 5 4 . . 
    . . . . . . . . . . 4 4 4 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
tiles.setCurrentTilemap(tilemap`level7`)
let Kyle = sprites.create(img`
    . f f f f f f f f f f f f f f . 
    . f 1 1 f 1 1 f 1 f 1 f 1 1 f . 
    . f 1 1 f 1 1 f 1 f 1 f 1 1 f . 
    . . f 1 f 1 1 f 1 f 1 f 1 f . . 
    . . f 1 f 1 1 f 1 f 1 f 1 f . . 
    . . f f 1 f 1 f f f f 1 f f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
game.showLongText("Hello and welcome to Kyle's cheese cuisine! I am Kyle and you will begin your cheese career!", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`level5`)
pause(1000)
sprites.destroy(Kyle)
mySprite = sprites.create(img`
    . f f f f f f f f f f f f f f . 
    . f 1 1 f 1 1 f 1 f 1 f 1 1 f . 
    . f 1 1 f 1 1 f 1 f 1 f 1 1 f . 
    . . f 1 f 1 1 f 1 f 1 f 1 f . . 
    . . f 1 f 1 1 f 1 f 1 f 1 f . . 
    . . f f 1 f 1 f f f f 1 f f . . 
    . . f f f f f f f f f f f f . . 
    . f f f f b f 4 4 f b f f f f . 
    . f f f 4 1 f d d f 1 4 f f f . 
    . . f f f d d d d d d f f f . . 
    . . . f f f 4 4 4 4 f f f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level6`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 24))
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . 6 6 6 6 7 6 6 6 6 . . . . 
    . . . . 6 7 7 7 7 7 6 . . . . . 
    . . . . . 6 7 7 7 6 . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . . . . . 6 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Guide)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(0, 0))
animation.runImageAnimation(
mySprite2,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . 6 6 6 6 7 6 6 6 6 . . . . 
    . . . . 6 7 7 7 7 7 6 . . . . . 
    . . . . . 6 7 7 7 6 . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . . . . . 6 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 . . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . 6 6 6 6 7 6 6 6 6 . . . . 
    . . . . 6 7 7 7 7 7 6 . . . . . 
    . . . . . 6 7 7 7 6 . . . . . . 
    . . . . . . 6 7 6 . . . . . . . 
    . . . . . . . 6 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
Intro = 1
Level1 = 0
game.onUpdateInterval(10000, function () {
    if (!(Boss)) {
        if (Level1 > 1) {
            mySprite3 = sprites.create(img`
                . . . . . . . . 4 4 4 4 . . . . 
                . . . . 4 4 4 4 5 5 5 5 4 . . . 
                . 4 4 4 4 4 4 5 5 5 5 5 4 4 . . 
                4 4 4 5 4 4 5 5 5 5 5 4 4 4 . . 
                4 4 5 5 5 5 5 5 5 5 5 4 4 4 . . 
                f 4 4 4 4 4 4 4 5 5 5 5 5 4 . . 
                f 4 4 4 4 5 5 5 4 4 5 5 5 5 4 . 
                f 4 4 4 5 5 5 5 5 5 4 4 5 5 5 4 
                . 4 4 5 c 5 5 5 5 5 5 4 4 5 5 4 
                . 4 5 5 c 5 5 5 c 5 5 4 4 4 5 4 
                . 4 5 5 5 5 5 c 5 5 5 4 4 4 4 4 
                . 4 5 b b b 5 5 4 4 4 4 4 4 4 4 
                . . 4 5 5 5 5 4 5 5 4 4 5 5 4 4 
                . . . 4 5 5 5 4 4 5 5 4 4 4 4 . 
                . . . 4 4 b b 4 4 4 4 4 . . . . 
                . . . 4 b b b 4 4 . . . . . . . 
                `, SpriteKind.Enemy)
            mySprite3.follow(mySprite, 90)
            statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
            statusbar.attachToSprite(mySprite3)
            statusbar.setColor(2, 15)
            statusbar.max = 10
            mySprite3.ay = 600
        }
    } else {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f f . . . f . . . f . f . 
            . . f . . . . f . f . . . f . . 
            . . f . . . . f f f . . . f . . 
            . . f . . . . f . f . . f . f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite4, -170, 0)
        projectile2.setKind(SpriteKind.BossProjectile)
    }
})
