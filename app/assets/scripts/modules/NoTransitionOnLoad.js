class NoTransitionOnLoad {
    constructor() {
        this.body = document.querySelector("body");
        this.events();
    }
    events() {
        window.addEventListener("load", () => this.removeClass());
    }
    removeClass() {
        this.body.classList.remove("preload");
    }
}

export default NoTransitionOnLoad;