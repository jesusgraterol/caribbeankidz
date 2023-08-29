import { Controller } from "./modules/controller.js";



/**
 * Application Instance
 * Initializes the instance of the application with the desired
 * configuration.
 */
const controller = new Controller({
    
    // Activity Counters
    activity_counters: {
        donors: 40,
        students: 75,
        sport_activities: 650,
        ecological_activities: 280
    },
});




/**
 * Application Initializer
 * Loads and initializes all required scripts for the app to function.
 * DO NOT MODIFY THIS CODE
 */
try { controller.initialize() } catch (e) { console.log(e) }

