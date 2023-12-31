import { Controller } from "./modules/controller.js";

/**
 * Controller Instance
 * Initializes the instance of the application's controller with the desired
 * configuration.
 */
const controller = new Controller({
    /**
     * Activity Counters
     * These are the values set in the activities section. Note that these
     * values are not meant to be exact and should be rounded up.
     * - donors: The number of people who have donated and wish to appear on the
     *      app. Keep in mind that donors can choose to be anonymous.
     * - students: The number of students currently enrolled in programs.
     * - sport_activities: The number of sport activities that have taken place 
     *      since the NGO was founded.
     * - ecological_activities: The number of ecological activities that have taken 
     *      place since the NGO was founded.
     */
    activity_counters: {
        donors: 300,
        students: 120,
        sport_activities: 960,
        ecological_activities: 450
    },

    /**
     * Donors
     * The list of donors who wish to appear on the website (Donations Section).
     * The schema of a donor is as follows:
     * - name (required): The name or handle the person whishes to display.
     * - is_company (required): The kind of donor.
     * - url (optional): The link that should be opened when the donor's card is
     *      clicked.
     */
    donors: [
        { name: "vanesurf2020",         is_company: false,  url: "https://www.instagram.com/vanesurf2020/" },
        { name: "Funda Arenas",         is_company: true,  url: "" },
        { name: "Jesus Graterol",       is_company: false,  url: "https://twitter.com/jesusgrat_dev" },
        { name: "Instacaja",            is_company: true,  url: "linktr.ee/instacaja" },
        { name: "Volunteer Channel",    is_company: true,  url: "" },
        { name: "Rik",                  is_company: false,  url: "" },
        { name: "Hotel Oasis Paradise", is_company: true,  url: "https://www.instagram.com/hotelparadiseoasis/" },
        { name: "Milagros Quintero",    is_company: false,  url: "" },
        { name: "Hotel California",     is_company: true,  url: "" },
        { name: "Avenext.org",          is_company: true,  url: "" },
    ]
});