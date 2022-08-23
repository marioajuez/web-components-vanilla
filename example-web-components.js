const template = `
    <div class="card">
        <h2 class="title">New Card</h2>
        <p class="description">This is an example of a card description made for the Web Component Course from Platzi</p>
        <small class="author">made by @nazarenoalt</small>
    </div>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&display=swap');
    * {
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }
    .card {
        width: 200px;
        margin: 20px;
        padding: 20px;
        border-radius: 7px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
    .title {
        margin: 10px 0;
    }
    .description {
        margin-bottom: 10px;
        color: rgb(134, 134, 134);
    }
    </style>
`

class cardElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        document.body.innerHTML = template;
    }
}

customElements.define('card-element', cardElement);