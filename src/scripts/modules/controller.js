import { DropdownMenu } from "./dropdown_menu.js";
import { Modal } from "./modal.js";
import { ScrollToTop } from "./scroll_to_top.js";
import { Donations } from "./donations.js";


export class Controller {
    // Dropdown Menu Instance
    _dropdown_menu;

    // Modal Instance
    _modal;

    // Scroll To Top Instance
    _scroll_to_top;

    // Activity Counters Configuration
    #activity_counters;

    // Donations Instance
    _donations;

    constructor (config) {
        // Initialize the dropdown menu instance
        this._dropdown_menu = new DropdownMenu();

        // Initialize the modal's instance
        this._modal = new Modal();

        // Initialize the scroll to top instance
        this._scroll_to_top = new ScrollToTop();

        // Initialize the activity counters
        this.#activity_counters = config.activity_counters;

        // Initialize the donations instance
        this._donations = new Donations(config.donors);

        /**
         * Subscribe to the state of the document and initialize the app once 
         * the document has been fully loaded.
         */
        document.addEventListener("DOMContentLoaded", () => { this.#initialize() });
    }




    /**
     * Initializes the Applications' Modules and subscribes to 
     * all the neccessary DOM Events.
     */
    #initialize() {
        /**
         * Scroll Event Subscription
         * Whenever a scroll event is triggered, a series of actions are executed.
         */
        document.addEventListener("scroll", (e) => {
            // Whenever the scroll state changes, check if the button needs to be displayed
            this._scroll_to_top.on_scroll_changes();

            // Close the menu no matter what (if opened)
            this._dropdown_menu.close();
        });




        /**
         * Dropdown Menu
         * Subscribe to the menu click event and toggle the menu content when triggered
         */
        this._dropdown_menu.button_el.addEventListener("click", () => { this._dropdown_menu.toggle() });




        /**
         * Modal Closing
         * Subscribe to the modal's close button & escape key and close the modal accordingly
         */
        this._modal.modal_close_button_el.addEventListener("click", () => { this._modal.close() });
        document.onkeydown = (evt) => { if (evt.key == "Escape") this._modal.close() };




        /**
         * Scroll to Top
         * Subscribes to the scroll to top click event and executes the action when triggered
         */
        this._scroll_to_top.button_el.addEventListener("click", () => { this._scroll_to_top.scroll_to_top() });




        /**
         * Activity
         * Set the counter for each activity.
         */
        this.#set_activity_counters();




        /**
         * Donations
         */

        // Subscribe to the donations' payment method modal triggers
        this._donations.binance_method_el.addEventListener("click", () => { this._donations.open_binance() });
        this._donations.bank_transfer_method_01_el.addEventListener("click", () => { this._donations.open_bank_transfer_01() });
        this._donations.pago_movil_method_01_el.addEventListener("click", () => { this._donations.open_pago_movil_01() });

        // Set the donor cards in the grid
        this._donations.set_donors();



        /**
         * Footer
         * Set the current date to the footer's copyright
         */
        document.getElementById("current_year").innerText = new Date().getFullYear();
    }




    /**
     * Sets the counters on the activity section.
     */
    #set_activity_counters() {
        document.getElementById("donors_count").innerText = this.#activity_counters.donors + "+";
        document.getElementById("students_count").innerText = this.#activity_counters.students + "+";
        document.getElementById("sport_activities_count").innerText = this.#activity_counters.sport_activities + "+";
        document.getElementById("ecological_activities_count").innerText = this.#activity_counters.ecological_activities + "+";
    }
}