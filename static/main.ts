import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators";
import { GlobalStyles } from "./global-styles";

@customElement("item-overview")
export class ItemOverview extends LitElement {
    @property({ type: String })
    accessor game_img: string = "";

    @property({ type: String })
    accessor game_title: string = "";

    @property({ type: String })
    accessor game_rating: string = "";

    render() {
        return html`
            <style>
                ${GlobalStyles} .card {
                    display: flex;
                    flex-direction: column;
                    width: 240px;
                    background-color: var(--background-200);
                    overflow: hidden;
                    border-radius: 8px;
                    cursor: pointer;
                }

                .card .img-container {
                    display: flex;
                    flex-direction: column;
                    width: 240px;
                    height: 290px;
                    background-color: var(--background-50);
                    overflow: hidden;
                    position: relative;
                }

                .card .img-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .card:hover .img-container img {
                    filter: blur(2px) brightness(0.8);
                    transition: all 250ms;
                }

                .card .img-container .overlay {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: all 250ms;
                    font-weight: bold;
                    font-size: larger;
                }

                .card:hover .img-container .overlay {
                    opacity: 1;
                }

                .card-body {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 8px;
                }
            </style>
            <div class="card">
                <div class="img-container">
                    <img src="${this.game_img ?? ""}" />
                    <div class="overlay">
                        <span>More info</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div class="card-body">
                    <p>${this.game_title ?? ""}</p>
                    <span
                        ><i class="fa-solid fa-star"></i> ${this.game_rating ??
                        ""}</span
                    >
                </div>
            </div>
        `;
    }
}

@customElement("item-card")
export class Item extends LitElement {
    @property({ type: String })
    accessor game_img: string = "";

    @property({ type: String })
    accessor game_title: string = "";

    @property({ type: String })
    accessor game_rating: string = "";

    @property({ type: String })
    accessor game_price: string = "";

    @property({ type: String })
    accessor game_description: string = "";

    render() {
        return html`
            <style>
                ${GlobalStyles} .card {
                    display: flex;
                    flex-direction: column;
                    width: 640px;
                    background-color: var(--background-200);
                    overflow: hidden;
                    border-radius: 8px;
                    cursor: pointer;
                }

                .card .img-container {
                    display: flex;
                    flex-direction: column;
                    width: 640px;
                    height: 440px;
                    background-color: var(--background-50);
                    overflow: hidden;
                    position: relative;
                }

                .card .img-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .card:hover .img-container img {
                    filter: blur(2px) brightness(0.8);
                    transition: all 250ms;
                }

                .card .img-container .overlay {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: all 250ms;
                    font-weight: bold;
                    font-size: larger;
                }

                .card:hover .img-container .overlay {
                    opacity: 1;
                }

                .card-body {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 8px;
                }

                .col {
                    display: flex;
                    flex-direction: column;
                }
            </style>
            <div class="card">
                <div class="img-container">
                    <img src="${this.game_img ?? ""}" />
                    <div class="overlay">
                        <span>More info</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div class="card-body">
                    <div class="col">
                        <h2>${this.game_title ?? ""}</h2>
                        <p>${this.game_description ?? ""}</p>
                    </div>
                    <span
                        ><i class="fa-solid fa-star"></i> ${this.game_rating ??
                        ""}</span
                    >
                    <p>${this.game_price ?? ""}</p>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "item-overview": ItemOverview;
        "item-card": Item;
    }
}
