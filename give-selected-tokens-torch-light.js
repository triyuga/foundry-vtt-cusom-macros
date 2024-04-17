// Give selected tokens torch light

const tokens = canvas.tokens.placeables.map(token => {
    if (token.document.hasPlayerOwner) {
        console.log(token.document.name)
        console.log(token) 
    }
    return {
        _id: token.id,
        vision: true,
    dimSight: dimSight,
    brightSight: brightSight,
    "light.dim": dimLight,
    "light.bright":  brightLight,
    "light.angle": lightAngle,
    lockRotation: lockRotation,
    "light.animation": lightAnimation,
    "light.alpha": lightAlpha,
    "light.color": lightColor
    }
})

// canvas.scene.updateEmbeddedDocuments('Token', tokens)
//     .then(() => {
//         ui.notifications.info("Now showing bars to everyone");
//     })
//     .catch((err) => {
//         ui.notifications.error("Something went wrong showing bars to everyone");
//     })
