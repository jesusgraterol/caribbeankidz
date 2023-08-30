

/**
 * Modal Class
 * This class handles the management of the modals within the app
 * for any content.
 */
export class Modal {
    #modal_el;
    #modal_title_el;
    #modal_internal_content_el;
    modal_close_button_el;
    constructor () {
        this.#modal_el = document.getElementById("modal");
        this.#modal_title_el = document.getElementById("modal_title");
        this.#modal_internal_content_el = document.getElementById("modal_internal_content");
        this.modal_close_button_el = document.getElementById("modal_close_button");
    }





    /**
     * Opens the modal with the given title and content.
     * @param title 
     * @param html_content 
     */
    open(title, html_content) {
        // Set the title and the content
        this.#modal_title_el.innerText = title;
        this.#modal_internal_content_el.innerHTML = html_content;

        // Display the modal
        this.#modal_el.style.display = "block";
    }




    /**
     * Resets the modal's data and closes it.
     */
    close() {
        // Set the title and the content
        this.#modal_title_el.innerText = "";
        this.#modal_internal_content_el.innerHTML = "";

        // Display the modal
        this.#modal_el.style.display = "none";
    }
}