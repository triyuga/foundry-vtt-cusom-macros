function tokenUpdate(values) {
    canvas.tokens.controlled.map(token => token.document.update({
        vision: values.vision || true, // boolean
        // "sight.visionMode": values.visionMode || "basic", // 
        brightSight: values.brightSight === 0 ? 0 : values.brightSight || token.data.brightSight, // number feet
        dimSight: values.dimSight  === 0 ? 0 : values.dimSight || token.data.dimSight, // number feet
    }));
}

let dialogEditor = new Dialog({
    title: `Vision Picker`,
    content: `Set vision for selected token.`,
    buttons: {
        basic: {
            label: `Basic`,
            callback: () => {
                tokenUpdate({ "brightSight": 0, "dimSight": 5 });
                dialogEditor.render(true);
            }
        },
        dim30: {
            label: `Dark30`,
            callback: () => {
                tokenUpdate({ "brightSight": 0, "dimSight": 30 });
                dialogEditor.render(true);
            }
        },
        dim60: {
            label: `Dark60`,
            callback: () => {
                tokenUpdate({ "brightSight": 0, "dimSight": 60 });
                dialogEditor.render(true);
            }
        },
        dim120: {
            label: `Dark120`,
            callback: () => {
                tokenUpdate({ "brightSight": 0, "dimSight": 120 });
                dialogEditor.render(true);
            }
        },
        bright120: {
            label: `DevilSight`,
            callback: () => {
                tokenUpdate({ "brightSight": 120, "dimSight": 0 });
                dialogEditor.render(true);
            }
        },
        blind: {
            label: `Blind`,
            callback: () => {
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