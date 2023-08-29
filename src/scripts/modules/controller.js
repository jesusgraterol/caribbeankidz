import { DropdownMenu } from "./dropdown_menu.js";
import { ScrollToTop } from "./scroll_to_top.js";


export class Controller {
    // Dropdown Menu Instance
    dropdown_menu;

    // Scroll To Top Instance
    scroll_to_top;

    // Activity Counters Configuration
    #activity_counters;

    constructor (config) {
        // Initialize the dropdown menu instance
        this.dropdown_menu = new DropdownMenu();

        // Initialize the scroll to top instance
        this.scroll_to_top = new ScrollToTop();

        // Initialize the activity counters
        this.#activity_counters = config.activity_counters;
    }




    /**
     * Initializes the Applications' Modules and subscribes to 
     * all the neccessary DOM Events.
     */
    initialize() {
        /**
         * Scroll Event Subscription
         * Whenever a scroll event is triggered, a series of actions are executed.
         */
        document.addEventListener("scroll", (e) => {
            // Whenever the scroll state changes, check if the button needs to be displayed
            this.scroll_to_top.on_scroll_changes();

            // Close the menu no matter what (if opened)
            this.dropdown_menu.close();
        });

        // Subscribe to the menu click event and toggle the menu content when triggered
        this.dropdown_menu.button_el.addEventListener("click", () => { this.dropdown_menu.toggle() });

        // Subscribes to the scroll to top click event and executes the action when triggered
        this.scroll_to_top.button_el.addEventListener("click", () => { this.scroll_to_top.scroll_to_top() });

        // Set the activity counters
        this.#set_activity_counters();

        // Finally, set the current date to the footer's copyright
        this.#set_copyright_year();
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


    /**
     * Sets the current year in the footer's copyright text.
     */
    #set_copyright_year() {
        document.getElementById("current_year").innerText = new Date().getFullYear();
    }
}