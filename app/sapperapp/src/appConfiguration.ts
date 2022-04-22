/**
 * Configuration parameters for the entire application
 *
 * @see sitemap When the table topicURL2topicLookupTable changes, the sitemap may change
 * as well
 */

 export const APP_CONFIGURATION = {
    scaleforpdfviewer: 1.3, 
    maxwidthforcontent: "70em",
    defaultColorsTable: {
        "PASTELGREEN": "#C1E1C1",
        "PASTELORANGE": "#FAC898",
        "VERYDARKGREY": "#1D3649"
    },
    fontFamilyForStandardText: "'Roboto', sans-serif",
    fontFamilyForComicText: "'Comic Neue', cursive",
    // The base url of the backend
    backendUrl: 'https://backend.emanuelesantanche.com',
    homePageUrl: 'https://emanuelesantanche.com',
    // Number of articles in a page of results
    fetchPageSize: 6,
    // What a topic looks like in the url and in headers
    topicURL2topicLookupTable: { 
        "success-stories": "Success stories",
        "testimonials": "Testimonials",
        "problem-solving": "Problem solving",
        "agile-and-surroundings": "Agile and surroundings"
    }
};
