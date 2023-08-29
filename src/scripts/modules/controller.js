import { DropdownMenu } from "./dropdown_menu.js";


export class Controller {


    // Dropdown Menu Instance
    dropdown_menu;

    constructor (config) {

        // Initialize the dropdown menu instance
        this.dropdown_menu = new DropdownMenu();
    }




    /**
     * Initializes the Applications' Modules and subscribes to 
     * all the neccessary DOM Events.
     */
    initialize() {
        /**
         * Scroll Event Subscription
         * Whenever a scroll event is triggered, a series of actions are executed:
         * - ...
         * - Dropdown menu is closed
         */
        document.addEventListener("scroll", (e) => {

            // Close the menu no matter what
            this.dropdown_menu.close();
        });

        // Subscribe to the menu click event and toggle the menu content when triggered
        document.getElementById(this.dropdown_menu.menu_button_id).addEventListener("click", () => {
            this.dropdown_menu.toggle();
        });

        // Finally, set the current date to the footer's copyright
        document.getElementById("current_year").innerText = new Date().getFullYear();
    }
}