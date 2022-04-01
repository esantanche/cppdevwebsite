/**
 * FIXME 
 * Configuration parameters for the entire application
 *
 * @see sitemap When the table topicURL2topicLookupTable changes, the sitemap may change
 * as well
 */

// FIXME  everything to fix
// 56em

 export const APP_CONFIGURATION = {
    maxwidthforcontent: "60em",
    defaultColorsTable: {
        "PASTELGREEN": "#C1E1C1",
        "WHITESHADE": "#F9F9FB",
        "DARKERWHITESHADE": "#ECF2F2",
        "LIGHTGREY": "#777677",
        "DARKGREY": "#264A60",
        "VERYDARKGREY": "#1D3649"
    },
    responsiveBreakpoints: {
        large: 960,
        medium: 600
    },
    // The base url of the backend
    backendUrl: 'https://backend.emanuelesantanche.com',
    homePageUrl: 'https://emanuelesantanche.com/',
    // Number of articles in a page of results
    fetchPageSize: 6,
    // What a topic looks like in the url and in headers
    topicURL2topicLookupTable: {
        "success-stories": "Success stories",
        "testimonials": "Testimonials",
        "tech-watch": "Tech watch",
        "leadership": "Leadership",
        "services": "Services"
    },
    fontFamily: "Lato, sans-serif",
    fontFamilyForFields: "Roboto, sans-serif",
};
