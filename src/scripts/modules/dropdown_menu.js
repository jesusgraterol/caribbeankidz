/**
 * Dropdown Menu Class
 * This class implements the app's dropdown menu and exposes
 * the methods needed to be able to fully manage it.
 */
export class DropdownMenu {
    #visible_class_name = "visible-dropdown-menu-content";
    button_el;
    #menu_content_el;
    constructor() {
        this.button_el = document.getElementById("mobile_menu_button");
        this.#menu_content_el = document.getElementById("dropdown_menu_content");
    }



    /**
     * Opens the menu in case it isn't already.
     */
    open() { if (!this.#is_opened()) this.#menu_content_el.classList.add(this.#visible_class_name) }



    /**
     * Closes the menu if it is opened.
     */
    close() { if (this.#is_opened()) this.#menu_content_el.classList.remove(this.#visible_class_name) }



    /**
     * Toggles the visibility of the menu.
     */
    toggle() { this.#menu_content_el.classList.toggle(this.#visible_class_name) }



    /**
     * Verifies if the dropdown menu is currently visible.
     * @returns boolean
     */
    #is_opened() { return this.#menu_content_el.classList.contains(this.#visible_class_name) }
}