// Show bars to everyone

// Update all tokens on the map so that the name shows on hover and the bars always show.
// Display Modes: ALWAYS, CONTROL, HOVER, NONE, OWNER, OWNER_HOVER

const tokens = canvas.tokens.placeables.map(token => {
    const type = token.actor.type
    const isVehicle = type === "vehicle" || token.document.height >= 5
    return {
        _id: token.id,
        "bar1.attribute": "attributes.hp",
        "bar2.attribute": "attributes.ac.value",
        "displayName": CONST.TOKEN_DISPLAY_MODES.HOVER,
        "displayBars": isVehicle 
            ? CONST.TOKEN_DISPLAY_MODES.NONE 
            : CONST.TOKEN_DISPLAY_MODES.HOVER
    }
})

canvas.scene.updateEmbeddedDocuments('Token', tokens)
    .then(() => {
        ui.notifications.info("Now showing bars to everyone");
    })
    .catch((err) => {
        ui.notifications.error("Something went wrong showing bars to everyone");
    })
