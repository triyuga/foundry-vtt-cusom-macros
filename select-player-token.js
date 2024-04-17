// Ref https://raw.githubusercontent.com/CDeenen/Macros/main/AutoselectCombatant

let applyChanges = false;

new Dialog({
    title: `Token Vision Configuration`,
    content: `
      <form>
        <div class="form-group">
            ${canvas.tokens.placeables.filter(token => token.document.hasPlayerOwner).map(option =>
            `<p><label for="${option.id}"><input type="radio" id="${option.id}" name="select-token" value="${option.id}" checked />${option.name}</label></p>`
    )}
        </div>
      </form>
      `,
    buttons: {
        yes: {
            icon: "<i class='fas fa-check'></i>",
            label: `Apply Changes`,
            callback: () => applyChanges = true
        },
        no: {
            icon: "<i class='fas fa-times'></i>",
            label: `Cancel Changes`
        },
    },
    default: "yes",
    close: html => {
        if (applyChanges) {
            let tokenId = html.find('[name="select-token"]:checked')[0].value || "none";
            const token = canvas.tokens.get(tokenId);
            token.control();
        }
    }
}).render(true);