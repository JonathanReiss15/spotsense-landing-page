// header analytics

$("#header-github-icon").click(function() {
    analytics.track("Clicked on GitHub icon");
})

$("#header-dashboard-button").click(function() {
    analytics.track("Clicked on dashboard in header");
})

// Landing page analytics

$("#documentation-button").click(function() {
    analytics.track("Clicked on documentation button");
})

$("#create-geofence-button").click(function() {
    analytics.track("Clicked on create geofence button");
})

$("#get-started-description").click(function() {
    analytics.track("Clicked a link in the get started description");
})

$("#code-analytics").hover(function() {
    analytics.track("Hovered over code area");
})

$("#code-analytics").click(function() {
    analytics.track("Clicked on code area");
})

// Analytics Section

$("#download-template-button").click(function() {
    analytics.track("Click on 'download template' button");
})

$("#create-a-rule-button").click(function() {
    analytics.track("Click on 'create a rule' button");
})

$("#how-to-test-button").click(function() {
    analytics.track("Click on 'download template' button");
})

// video analytics

$("#demo-video").click(function() {
    analytics.track("Clicked play on demo video");
})

// Pricing page analytics

$("#pricing-cards").hover(function() {
    analytics.track("Hovered over pricing cards");
})

$("#pricing-free-button").click(function() {
    analytics.track("Clicked on free sign up button");
})

$("#pricing-basic-button").click(function() {
    analytics.track("Clicked on basic buy button");
})

$("#pricing-startup-button").click(function() {
    analytics.track("Clicked on startup buy button");
})

$("#pricing-enterprise-button").click(function() {
    Intercom('showNewMessage'); // open intercom messenger to a new message
    analytics.track("Clicked on enterprise buy button");
})

$("#pricing-insight-cards").hover(function() {
    analytics.track("Hovered over pricing insight cards");
})

// demo page analytics

$("#get-started-button").click(function() {
    analytics.track("Clicked on CTA");
})

// footer analytics

$("#footer-careers").click(function() {
    analytics.track("Clicked on footer careers button");
})

$("#footer-about").click(function() {
    analytics.track("Clicked on footer about button");
})

$("#footer-blog").click(function() {
    analytics.track("Clicked on footer blog button");
})

$("#footer-privacypolicy").click(function() {
    analytics.track("Clicked on footer privacy policy button");
})


// Analytics page

// Voting for Analytic Graphs

// Number of visits: 1 month
var no_visits_1m_voted = false;
$("#no-visits-1m-upvote").click(function() {
    if (!no_visits_1m_voted) {
        no_visits_1m_voted = true;
        analytics.track("Upvoted number of visits - 1 month"); // log in mixpanel
        $("#no-visits-1m-upvote").addClass('active')
    }
})

$("#no-visits-1m-downvote").click(function() {
    if (!no_visits_1m_voted) {
        no_visits_1m_voted = true;
        analytics.track("Downvoted number of visits - 1 month"); // log in mixpanel
        $("#no-visits-1m-downvote").addClass('active')
    }
})

// Number of visits: 1 day
var no_visits_1d_voted = false;
$("#no-visits-24h-upvote").click(function() {
    if (!no_visits_1d_voted) {
        no_visits_1d_voted = true;
        analytics.track("Upvoted number of visits - 24 hours"); // log in mixpanel
        $("#no-visits-24h-upvote").addClass('active')
    }
})

$("#no-visits-24h-downvote").click(function() {
    if (!no_visits_1d_voted) {
        no_visits_1d_voted = true;
        analytics.track("Downvoted number of visits - 24 hours"); // log in mixpanel
        $("#no-visits-24h-downvote").addClass('active')
    }
})

// Number of visits: 1 week
var no_visits_1w_voted = false;
$("#no-visits-7d-upvote").click(function() {
    if (!no_visits_1w_voted) {
        no_visits_1w_voted = true;
        analytics.track("Upvoted number of visits - 7 days"); // log in mixpanel
        $("#no-visits-7d-upvote").addClass('active')
    }
})

$("#no-visits-7d-downvote").click(function() {
    if (!no_visits_1w_voted) {
        no_visits_1w_voted = true;
        analytics.track("Downvoted number of visits - 7 days"); // log in mixpanel
        $("#no-visits-7d-downvote").addClass('active')
    }
})

// Number of visits: 1 year
var no_visits_1y_voted = false;
$("#no-visits-1y-upvote").click(function() {
    if (!no_visits_1y_voted) {
        no_visits_1y_voted = true;
        analytics.track("Upvoted number of visits - 1 year"); // log in mixpanel
        $("#no-visits-1y-upvote").addClass('active')
    }
})

$("#no-visits-1y-downvote").click(function() {
    if (!no_visits_1y_voted) {
        no_visits_1y_voted = true;
        analytics.track("Downvoted number of visits - 1 year"); // log in mixpanel
        $("#no-visits-1y-downvote").addClass('active')
    }
})

// Location Permission
var locationPermission_voted = false;
$("#locationPermission-upvote").click(function() {
    if (!locationPermission_voted) {
        locationPermission_voted = true;
        analytics.track("Upvoted location permission graph"); // log in mixpanel
        $("#locationPermission-upvote").addClass('active')
    }
})

$("#locationPermission-downvote").click(function() {
    if (!locationPermission_voted) {
        locationPermission_voted = true;
        analytics.track("Downoted location permission graph"); // log in mixpanel
        $("#locationPermission-downvote").addClass('active')
    }
})

// Notification Permission
var notificationPermission_voted = false;
$("#notificationPermission-upvote").click(function() {
    if (!notificationPermission_voted) {
        notificationPermission_voted = true;
        analytics.track("Upvoted notification permission graph"); // log in mixpanel
        $("#notificationPermission-upvote").addClass('active')
    }
})

$("#notificationPermission-downvote").click(function() {
    if (!notificationPermission_voted) {
        notificationPermission_voted = true;
        analytics.track("Downvoted notification permission graph"); // log in mixpanel
        $("#notificationPermission-downvote").addClass('active')
    }
})

// Open rate
var openRate_voted = false;
$("#openRate-upvote").click(function() {
    if (!openRate_voted) {
        openRate_voted = true;
        analytics.track("Upvoted open rate graph"); // log in mixpanel
        $("#openRate-upvote").addClass('active')
    }
})

$("#openRate-downvote").click(function() {
    if (!openRate_voted) {
        openRate_voted = true;
        analytics.track("Downvoted open rate graph"); // log in mixpanel
        $("#openRate-downvote").addClass('active')
    }
})