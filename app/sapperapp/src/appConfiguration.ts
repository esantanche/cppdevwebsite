/**
 * FIXME 
 * Configuration parameters for the entire application
 *
 * @see sitemap When the table topicURL2topicLookupTable changes, the sitemap may change
 * as well
 */

// FIXME  everything to fix
// 56em
// FIXME  the defaultColorsTable needs cleaning

 export const APP_CONFIGURATION = {
    scaleforpdfviewer: 1.3, 
    maxwidthforcontent: "70em",
    defaultColorsTable: {
        "PASTELGREEN": "#C1E1C1",
        "PASTELORANGE": "#FAC898",
        "DARKERWHITESHADE": "#ECF2F2",
        "LIGHTGREY": "#777677",
        "DARKGREY": "#264A60",
        "VERYDARKGREY": "#1D3649"
    },
    fontFamilyForStandardText: "'Roboto', sans-serif",
    fontFamilyForComicText: "'Comic Neue', cursive",
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
        "problem-solving": "Problem solving",
        "leadership": "Leadership",
        "services": "Services"
    },
    fontFamilyForFields: "Roboto, sans-serif",
};
