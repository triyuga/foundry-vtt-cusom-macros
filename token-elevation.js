// Update elevation for all tokens on the canvas
const tokens = canvas.tokens.placeables.map(token => {
    const type = token.actor.type
    const isVehicle = type === "vehicle" || token.document.height >= 5
    return {
        _id: token.id,
        elevation: isVehicle ? 0 : type === 'npc' ? 1 : type === 'character' ? 2 : token.document.elevation,
            
    }
})

canvas.scene.updateEmbeddedDocuments('Token', tokens)
    .then(() => {
        ui.notifications.info("Updated elevation for all tokens - vehicle: 0, npc: 1, character: 2");
    })
    .catch((err) => {
        ui.notifications.error("Something went wrong updating elevation for all tokens");
    })
