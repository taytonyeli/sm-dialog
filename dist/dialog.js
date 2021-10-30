class MetaDialog {
    #positiveButton;
    #negativeButton;
    #metaDialogRef;

    constructor(message = "You have not passed a message") {
        this.message = message;
        this.result = null;
        this.#positiveButton = null;
        this.#negativeButton = null;

    }

    init() {
        this.#initHtml();
        this.#initEventListeners();
    }


    #initHtml(){
        const dialogHtml =
            `<div class="meta-dialog-container">
                <div class="meta-dialog">
                    <div class="meta-dialog-content">
                        <span class="meta-dialog-msg">${this.message}</span>
                        <div class="meta-dialog-actions">
                            <button class="meta-dialog-button" id="meta-dialog-positive">Yes</button>
                            <button class="meta-dialog-button" id="meta-dialog-negative">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>`;
        let dialogElement = document.createElement("div");
        dialogElement.id = "meta-dialog-ref"
        dialogElement.innerHTML = dialogHtml;
        document.body.appendChild(dialogElement);
        this.#positiveButton = document.getElementById("meta-dialog-positive");
        this.#negativeButton = document.getElementById("meta-dialog-negative");
        this.#metaDialogRef = dialogElement;
    }

    #initEventListeners(){
        this.#positiveButton.addEventListener("click", () => {
            this.#updateResult("Yes")
            this.#metaDialogRef.remove();
        });
        this.#negativeButton.addEventListener("click", () => {
            this.#updateResult("Cancel")
            this.#metaDialogRef.remove();
        });
    }

    #updateResult(result){
        this.result = result;
        const metaDialogEvent = new Event("MetaDialogAction", {"bubbles":true, "cancelable":false});
        this.#metaDialogRef.dispatchEvent(metaDialogEvent);
    }

    getChosenResult(){
        return this.result;
    }
}

// TO-DO: improve styling for dialog