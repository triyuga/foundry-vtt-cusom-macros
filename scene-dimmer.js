let dialogEditor = new Dialog({
    title: `Scene Dimmer`,
    content: ``,
    buttons: {
        dim100: {
            label: `Dim100`,
            callback: () => {
                canvas.scene.update({ darkness: 1 });
                dialogEditor.render(true);
            }
        },
        dim75: {
            label: `Dim75`,
            callback: () => {
                canvas.scene.update({ darkness: 0.75 });
                dialogEditor.render(true);
            }
        },
        dim50: {
            label: `Dim50`,
            callback: () => {
                canvas.scene.update({ darkness: 0.5 });
                dialogEditor.render(true);
            }
        },
        dim25: {
            label: `Dim25`,
            callback: () => {
                canvas.scene.update({ darkness: 0.25 });
                dialogEditor.render(true);
            }
        },
        dim0: {
            label: `Dim0`,
            callback: () => {
                canvas.scene.update({ darkness: 0 });
                dialogEditor.render(true);
            }
        },        
    },
    default: "close",
    close: () => { }
}, 
{
    width: 100, 
    top: 870,
    left: 100
});

dialogEditor.render(true)