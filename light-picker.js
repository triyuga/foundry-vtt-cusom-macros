function tokenUpdate(data) {
    canvas.tokens.controlled.map(token => token.document.update({ light: data }));
}

const colorFire = "#f8c377";
const colorBlack = "#000000";
const colorWhite = "#ffffff";
const colorMoonGlow = "#f4f1c9";
const torchAnimation = { "type": "torch", "speed": 1, "intensity": 1, "reverse": false };

const dialogEditor = new Dialog({
    title: `Light Picker`,
    content: `Set light source for selected token.`,
    buttons: {
        none: {
            label: `None`,
            callback: () => {
                tokenUpdate({ "dim": 0, "bright": 0, "angle": 360, "luminosity": 0.5, "color": colorBlack });
                dialogEditor.render(true);
            }
        },
        candle: {
            label: `Candle`,
            callback: () => {
                tokenUpdate({ "dim": 10, "bright": 5, "angle": 360, "luminosity": 0.5, "color": colorFire  });
                dialogEditor.render(true);
            }
        },
        torch: {
            label: `Torch`,
            callback: () => {
                tokenUpdate({ "dim": 40, "bright": 20, "angle": 360, "luminosity": 0.5, "color": colorFire , "animation": torchAnimation });
                dialogEditor.render(true);
            }
        },
        lightSpell: {
            label: `LightSpell`,
            callback: () => {
                tokenUpdate({ "dim": 40, "bright": 20, "angle": 360, "luminosity": 0.5, "color": colorWhite , "animation": { "type": "none" } });
                dialogEditor.render(true);
            }
        },
        lamp: {
            label: `Lamp`,
            callback: () => {
                tokenUpdate({ "dim": 45, "bright": 15, "angle": 360, "luminosity": 0.5, "color": colorFire , "animation": torchAnimation });
                dialogEditor.render(true);
            }
        },
        bullseye: {
            label: `Bullseye`,
            callback: () => {
                tokenUpdate({ "dim": 120, "bright": 60, "angle": 45, "luminosity": 0.5, "color": colorFire , "animation": torchAnimation });
                dialogEditor.render(true);
            }
        },
        hoodedOpen: {
            label: `HoodOpen`,
            callback: () => {
                tokenUpdate({ "dim": 60, "bright": 30, "angle": 360, "luminosity": 0.5, "color": colorFire , "animation": torchAnimation });
                dialogEditor.render(true);
            }
        },
        hoodedClosed: {
            label: `HoodShut`,
            callback: () => {
                tokenUpdate({ "dim": 5, "bright": 0, "angle": 360, "luminosity": 0.5, "color": colorFire , "animation": torchAnimation });
                dialogEditor.render(true);
            }
        },
        darkness: {
            label: `Darkness`,
            callback: () => {
                tokenUpdate({ "dim": 0, "bright": 15, "angle": 360, "luminosity": -0.5, "color": colorBlack , "animation": { "type": "none" } });
                dialogEditor.render(true);
            }
        },
        allOff: {
            label: `AllOff`,
            callback: () => {
                const tokens = canvas.tokens.placeables.map(token => {
                    return {
                        _id: token.id,
                        "light.dim": 0,
                        "light.bright": 0,
                    }
                })
                canvas.scene.updateEmbeddedDocuments('Token', tokens)
                    .then(() => {
                        ui.notifications.info("Extinguished all lights");
                    })
                    .catch((err) => {
                        ui.notifications.error("Something went wrong extinguishing all lights");
                    })
                dialogEditor.render(true);
            }
        },
    },
    default: "close",
    close: () => { }
}, 
{
    width: 100, 
    top: 450,
    left: 100
});

dialogEditor.render(true)