// TO-DO: logic for creating and displaying dialog

class MetaDialog {
    constructor(message = "You have not passed a message") {
        this.message = message;

    }

    init() {
        var dialogHtml =
            `<div class="meta-dialog-container">
        <div class="meta-dialog">
            <div class="meta-dialog-content">
                <span class="meta-dialog-msg">${this.message}</span>
                <div class="meta-dialog-actions">
                    <button class="meta-dialog-button">Yes</button>
                    <button class="meta-dialog-button">Cancel</button>
                </div>
            </div>
        </div>
    </div>`;
        var dialogElement = document.createElement("div");
        dialogElement.innerHTML = dialogHtml;
        document.body.appendChild(dialogElement);
    }
}




// TO-DO: logic for interacting with dialog buttons
// TO-DO: logic for displaying confirmation message
// TO-DO: html for dialog
// TO-DO: styling for dialog