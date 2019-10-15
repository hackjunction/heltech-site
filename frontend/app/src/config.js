const DEBUG_HOSTNAMES = ['edit.heltech.org', 'localhost'];

const config = {
    CLOUDINARY_CLOUD_NAME: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    // CLOUDINARY_CLOUD_NAME: "dwvybqdgo",
    // CLOUDINARY_CLOUD_NAME: "hackjunction",
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || '',
    GRAPHQL_BASE_URL: process.env.REACT_APP_GRAPHQL_BASE_URL || '',

    IS_DEV: process.env.NODE_ENV === 'development',
    /**
     * If IS_DEBUG is set to true, the page will show some content editor tools and pages
     * which are not intended for the live site. You can make this depend on e.g. the current url,
     * like below:
     */
    IS_DEBUG: DEBUG_HOSTNAMES.indexOf(window.location.hostname) !== -1,
    FACEBOOK_PIXEL_ID: process.env.REACT_APP_FACEBOOK_PIXEL_ID,
    HOTJAR_ID: process.env.REACT_APP_HOTJAR_ID,
    HOTJAR_SV: process.env.REACT_APP_HOTJAR_SV || 6,
    GOOGLE_ANALYTICS_ID: process.env.REACT_APP_GOOGLE_ANALYTICS_ID
};

export default config;
