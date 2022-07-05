class OpenModal {
    constructor() {
        this.submitButton = document.querySelector(".btn--submit");
        this.modal = document.querySelector(".modal");
        this.events();
    }
    events() {
        this.submitButton.addEventListener("click", () => this.toggleModal());
    }
    toggleModal() {
        this.modal.classList.remove("modal--off");
    }
}

export default OpenModal;