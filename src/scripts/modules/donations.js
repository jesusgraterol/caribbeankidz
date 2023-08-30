import { Modal } from "./modal.js";

/**
 * Donations Class
 * This class implements the donations section. Including the
 * display of payment methods for donations, as well as the 
 * list of donors.
 */
export class Donations {
    // The modal instance
    bank_transfer_method_01_el;
    pago_movil_method_01_el;
    _modal;


    // The list of people who have donated
    #donors_container_el;
    #donors;


    constructor (donors) {
        // Initialize the modal's instance
        this.bank_transfer_method_01_el = document.getElementById("bank_transfer_method_01");
        this.pago_movil_method_01_el = document.getElementById("pago_movil_method_01");
        this._modal = new Modal();

        // Initialize the list of donors
        this.#donors_container_el = document.getElementById("top_donors_grid");
        this.#donors = donors;
    }






    /******************************
     * Payment Methods Management *
     ******************************/




    /**
     * Displays a modal that includes all the details to make a traditional 
     * bank transfer.
     */
    open_bank_transfer_01() {
        this._modal.open(
            "Transferencia bancaria",
            `
                <div class="pm-details-row">
                    <p>Entidad</p>
                    <p>Banco Provincial</p>
                </div>
                <div class="pm-details-row">
                    <p>Titular</p>
                    <p>Vanessa Quintero</p>
                </div>
                <div class="pm-details-row">
                    <p>Cédula de Identidad</p>
                    <p>V-00000000</p>
                </div>
                <div class="pm-details-row">
                    <p>Número de cuenta</p>
                    <p>0108000000000000</p>
                </div>
            `
        );
    }



    /**
     * Displays a modal that includes all the details to make a pago móvil transfer.
     */
    open_pago_movil_01() {
        this._modal.open(
            "Pago móvil",
            `
                <div class="pm-details-row">
                    <p>Entidad</p>
                    <p>Banco Provincial (0108)</p>
                </div>
                <div class="pm-details-row">
                    <p>Titular</p>
                    <p>Vanessa Quintero</p>
                </div>
                <div class="pm-details-row">
                    <p>Cédula de Identidad</p>
                    <p>V-00000000</p>
                </div>
                <div class="pm-details-row">
                    <p>Número telefónico</p>
                    <p>04248496567</p>
                </div>
            `
        );
    }

    







    /**************************
     * Donors Grid Management *
     **************************/



    /**
     * Sets the donor cards in the grid container after proccessing
     * them all.
     */
    set_donors() {
        // Build the donors' cards HTML
        const donor_cards = this.#donors.reduce(
            (accum, current) => accum += this.#build_donor_card(current), 
            ""
        );

        // Finally, set the donors
        this.#donors_container_el.innerHTML = donor_cards;
    }


    /**
     * Builds the HTML card for a given donor. Note that if the donor provided
     * a URL, it will wrap the card in it.
     * @param donor 
     * @returns string
     */
    #build_donor_card(donor) {
        // Firstly, initialize the card
        const card = `
            <div class="donor-card">
                <span class="material-icons">${this.#get_donor_icon(donor.is_company)}</span> 
                <span class="truncate">${donor.name}</span>
            </div>
        `;

        // Finally, check if the donor provided a url
        return typeof donor.url == "string" ? 
            `<a href="${donor.url}" target="_blank" rel="noopener noreferrer">${card}</a>`: 
            card;
    }


    /**
     * Retrieves the icon to be used in the donor's card based
     * on its kind.
     * @param is_company 
     * @returns string
     */
    #get_donor_icon(is_company) { return is_company ? "apartment": "person"; }
}