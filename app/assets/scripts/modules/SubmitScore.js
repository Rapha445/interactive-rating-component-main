class submitScore {
    constructor() {
        this.scoreButton = document.querySelectorAll(".btn--rating");
        this.scoreSubmit = document.querySelector(".btn--submit");
        this.scoreDisplay = document.querySelector("#scoreDisplay");
        this.modal = document.querySelector(".modal");
        this.events();
    }
    events() {
        for (let i = 0; i < this.scoreButton.length; i++) {
            this.scoreButton[i].addEventListener("click", () => this.updateScore(this.scoreButton[i]));
        }
        this.scoreSubmit.addEventListener("click", () => this.toggleModal());
    }
    updateScore(el) {
        this.scoreDisplay.innerText = el.innerText;
    }
    toggleModal() {
        if (this.scoreDisplay.innerText !== "0") {
            this.modal.classList.remove("modal--off");
        }
    }
}

export default submitScore;