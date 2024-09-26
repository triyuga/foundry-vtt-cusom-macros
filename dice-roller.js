let dialogEditor = new Dialog({
    title: `Dice Roller`,
    content: ``,
    // buttons: {
    //     ...makeDiceButtons(4, 1, 6),
    //     ...makeDiceButtons(6, 1, 6),
    //     ...makeDiceButtons(8, 1, 6),
    //     ...makeDiceButtons(10, 1, 6),
    //     ...makeDiceButtons(12, 1, 6),
    //     ...makeDiceButtons(20, 1, 6),    
    // },
    buttons: {
        ...makeDiceButtons(4, 1, 1),
        ...makeDiceButtons(6, 1, 1),
        ...makeDiceButtons(8, 1, 1),
        ...makeDiceButtons(10, 1, 1),
        ...makeDiceButtons(12, 1, 1),
        ...makeDiceButtons(20, 1, 1),    
    },
    default: "close",
    close: () => { }
}, 
{
    width: 300, 
    top: 870,
    left: 100
});

dialogEditor.render(true)

function makeDiceButtons (numSides, numDiceFrom, numDiceTo, top, left) {
    let buttons = {};
    for (let i = numDiceFrom; i <= numDiceTo; i++) {
        buttons[`${i}d${numSides}`] = {
            label: `${i}d${numSides}`,
            callback: () => {
                let total = 0;
                for (let j = 0; j < i; j++) {
                    total += Math.floor(Math.random() * numSides) + 1;
                }
                ChatMessage.create({ content: `Rolled ${i}d${numSides} for a total of ${total}` });
                dialogEditor.render(true);
            }
        }
    }
    return buttons;
}

