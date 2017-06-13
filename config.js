var config = {
    // Language for the mirror (currently not implemented)
    language : "ko",
    greeting : ["창설 1조 거울"], // An array of greetings to randomly choose from
    // forcast.io
    forcast : {
        key : "d28346e21a7a660a93081365b82cf45c", // Your forcast.io api key
        units : "auto" // See forcast.io documentation if you are getting the wrong units
    },
    // Calendar (An array of iCals)
    calendar: {
      icals : ["https://calendar.google.com/calendar/ical/8335crvd0861q3h8v5av230ak0%40group.calendar.google.com/public/basic.ics"],
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 365 // Number of days to display (Default is one year)
    },
    traffic: {
        key : "fGLPu49xIvLFVL7CNPy1~PAdtvL6fqOuROa6fgFxYeg~AlBldY12m437C-eA6wxq2L1BJVWRzalvlfD0YA_QdfobLPhQCAHDhMyrN9lwRwnz", // Bing Maps API Key
      mode : "Driving", // Possibilities: Driving / Transit / Walking
      origin : "구미시", // Start of your trip. Human readable address.
      destination : "안동시", // Destination of your trip. Human readable address.
      name : "창설 1", // Name of your destination ex: "work"
      reload_interval : 5 // Number of조 minutes the information is refreshed
    },

    youtube: {
      key:"AIzaSyBSoiSmxbVVRykgTY4R11upz4NJ_QPgWNs"
    },

    subway: {
      key:"4b726b47446b696d37325254725350"
    },
    soundcloud: {
    	key:"....."
    }
}

//https://calendar.google.com/calendar/ical/8335crvd0861q3h8v5av230ak0%40group.calendar.google.com/public/basic.ics