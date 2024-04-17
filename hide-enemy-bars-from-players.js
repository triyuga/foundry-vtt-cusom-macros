// Hide enemy bars from players

// Update all non-player-owned tokens 
// Only show the bars for the GM
// Display Modes: ALWAYS, CONTROL, HOVER, NONE, OWNER, OWNER_HOVER

const tokens = canvas.tokens.placeables.filter(token => !token.document.hasPlayerOwner).map(token => {
    return {
        _id: token.id,
        "bar1.attribute": "attributes.hp",
        "bar2.attribute": "attributes.ac.value",
        "displayName": CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER,
        "displayBars": CONST.TOKEN_DISPLAY_MODES.OWNER
    }
})

canvas.scene.updateEmbeddedDocuments('Token', tokens)
    .then(() => {
        ui.notifications.info("Now hiding enemy bars from players");
    })
    .catch((err) => {
        ui.notifications.error("Something went wrong hiding enemy bars from players");
    })