/**
 * Scroll To Top Class
 * This class implements the scroll to top button and keeps
 * track of scrolling events.
 */
export class ScrollToTop {
    button_el;
    constructor () {
        this.button_el = document.getElementById("scroll_to_top");
    }



    /**
     * Whenever the user changes the scroll, the new value is evaluated. If 
     * it is distant from the top, it shows the "Go to top" button. Otherwise,
     * it hides it.
     */
    on_scroll_changes() { 
        document.documentElement.scrollTop > 400 ? 
            this.button_el.style.display = "block":
            this.button_el.style.display = "none";
    }


    /**
     * Scrolls the user to the top of the app.
     */
    scroll_to_top() { document.documentElement.scrollTop = 0 }
}