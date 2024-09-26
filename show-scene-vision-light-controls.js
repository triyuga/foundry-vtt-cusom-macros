
// rynbxVPHPQ9C860Z

// game.macros.getName("macro1").execute();

console.log('####');
console.log('####');
console.log('####');
console.log('searching for macro _id', 'B3po99DtZkY3UeIH');
const macro = game.macros.find((macro, i) => {
    // if (macro.name.includes("Vision")) {
    //     console.log('macro name' + i, macro.name);
    //     console.log('macro _id' + i, macro._id);
    //     console.log('macro sourceId' + i, macro.flags?.core?.sourceId);
    //     console.log('macro ' + i, macro)
    //     console.log('################');
    // }

    // Scene Dimmer - B3po99DtZkY3UeIH
    
    if (macro._id === 'B3po99DtZkY3UeIH') {
        console.log('macro name' + i, macro.name);
        console.log('macro _id' + i, macro._id);
        console.log('macro sourceId' + i, macro.flags?.core?.sourceId);
        console.log('macro ' + i, macro)
        console.log('################');
    }

    console.log(`${i} macro`, macro._id);
    // console.log(`${i} macro`, macro.name);
    // console.log(`${i} macro`, macro.flags?.core?.sourceId);
    // console.log(`${i} macro`, macro);
    // console.log('----------------');
    
    return macro.name === "CallMacro"
});

// if (macro) {
//     macro.execute();
// }



// eval(macro.data.command); 


// "Compendium.pirating.pirate-marcos.Macro.2aggmO3TLtxjzPOj"
// "Compendium.pirating.pirate-marcos.Macro.2aggmO3TLtxjzPOj"