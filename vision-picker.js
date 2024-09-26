function tokenUpdate(values) {
    canvas.tokens.controlled.map(token => {
        console.log("token", token);
        console.log("values", values);
        token.document.update({
            sight: {
                range: values.dimSight === 0 ? 0 : values.dimSight
            }
        })
    });

    // canvas.tokens.controlled.map(token => token.document.update({light: data}));

    // canvas.scene.updateEmbeddedDocuments("Token", updates);
}

let dialogEditor = new Dialog({
    title: `Vision Picker`,
    content: `Set vision for selected token.`,
    buttons: {
        basic: {
            label: `Basic`,
            callback: () => {
                console.log("Basic", { "brightSight": 0, "dimSight": 5 });
                tokenUpdate({ "brightSight": 0, "dimSight": 5 });
                dialogEditor.render(true);
            }
        },
        dim30: {
            label: `Dark30`,
            callback: () => {
                console.log("Dark30", { "brightSight": 0, "dimSight": 30 });
                tokenUpdate({ "brightSight": 0, "dimSight": 30 });
                dialogEditor.render(true);
            }
        },
        dim60: {
            label: `Dark60`,
            callback: () => {
                console.log("Dark60", { "brightSight": 0, "dimSight": 60 });
                tokenUpdate({ "brightSight": 0, "dimSight": 60 });
                dialogEditor.render(true);
            }
        },
        dim120: {
            label: `Dark120`,
            callback: () => {
                console.log("Dark120", { "brightSight": 0, "dimSight": 120 });
                tokenUpdate({ "brightSight": 0, "dimSight": 120 });
                dialogEditor.render(true);
            }
        },
        bright120: {
            label: `DevilSight`,
            callback: () => {
                console.log("DevilSight", { "brightSight": 120, "dimSight": 0 });
                tokenUpdate({ "brightSight": 120, "dimSight": 0 });
                dialogEditor.render(true);
            }
        },
        blind: {
            label: `Blind`,
            callback: () => {
                console.log("Blind", { "brightSight": 0, "dimSight": 0 });
                tokenUpdate({ "brightSight": 0, "dimSight": 0 });
                dialogEditor.render(true);
            }
        },
    },
    default: "close",
    close: () => { }
}, 
{
    width: 100, 
    top: 700,
    left: 100
});

dialogEditor.render(true)