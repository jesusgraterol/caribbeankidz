import { Initializer } from "./modules/initializer.js";



/**
 * Application Instance
 * Initializes the instance of the application with the desired
 * configuration.
 */
const initializer = new Initializer({

});




/**
 * Application Initializer
 * Loads and initializes all required scripts for the app to function.
 * DO NOT MODIFY THIS CODE
 */
try { initializer.init() } catch (e) { console.log(e) }

