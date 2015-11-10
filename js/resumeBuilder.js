//Bio Object;
var bio = {

    "name": "Dawit G.Michael",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "703 659 5516",
        "email": "dazmera@hotmail.com",
        "github": "dazmera",
        "twitter": "@Adawit",
        "location": "Virginia,USA"
    },

    "welcomessage": "Welcome! I am available to help",
    "biopic": "images/dvdawit.jpg",
    "skills": ["HTML", "JAVASCRIPT", "CSS", "JSON", "JQUERY", "SQL", "SSRS"],

    display: function() {

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPicture);
        var formattedWelcomessage = HTMLWelcomeMsg.replace("%data%", bio.welcomessage);
        $("#header").append(formattedWelcomessage);
        //Contact information:
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").prepend(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedTwiter = HTMLtwitter.replace("%data%", bio.contacts.twiter);
        $("#topContacts").append(formattedTwiter);
        var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedContactLocation);

        //Footer contact section:
        var formattedFooterContactMobile = HTMLFootermobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").prepend(formattedFooterContactMobile);
        var formattedFooterContactEmail = HTMLFooteremail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(formattedFooterContactEmail);
        var formattedFooterContactGithub = HTMLFootergithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedFooterContactGithub);

        //Internationalize button:
        $("#main").append(internationalizeButton);

        if (bio.skills.length > 0) {
            //Skills:
            var formattedSkillsStart = HTMLskillsStart;
            $("#header").append(formattedSkillsStart);

            var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedSkills);
            formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formattedSkills);
            formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formattedSkills);
            formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
            $("#skills").append(formattedSkills);
            formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
            $("#skills").append(formattedSkills);
            formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
            $("#skills").append(formattedSkills);
            formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
            $("#skills").append(formattedSkills);

        }
    }
}

bio.display();

//Work Object:

var work = {
    "jobs": [{
        "title": "Web content management system head",
        "employer": "UNICEF",
        "location": "Asmara,Eritrea",
        "dates": "2007 - 2014",
        "description": "Develop and maintatain country office website."
    }, {
        "title": "Logistics officer and Office manager",
        "employer": "Samaritan's Purse International Relief Organization.",
        "location": "Asmara Eritrea",
        "dates": "2003 - 2007",
        "description": "Manage relief distribution and manage database record."
    }],

    display: function() {

        for (job in work.jobs) {

            var formattedWorkStart = HTMLworkStart;
            $("#workExperience").append(formattedWorkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedWorkYears = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation + formattedWorkYears + formattedWorkDescription);

        }


    }

}

work.display();


//Project Object
var projects = {

    "project": [{
        "title": "Onbeads of Prayer- all device compatible responsive website",
        "dates": "October 2015",
        "description": "Frontend web development project work.",
        "images": ["images/image1.jpg", "images/Beads.jpg"]
    }, {
        "title": "Interactive Resume Template",
        "dates": "November 2015",
        "description": "Front end web development project work.",
        "images": ["images/image2.jpg", "images/image3.jpg"]
    }],

    display: function() {


        for (project in projects.project) {

            var formattedProjectStart = HTMLprojectStart;
            $("#projects").append(formattedProjectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
            $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);

            if (projects.project[project].images.length > 0) {

                for (image in projects.project[project].images) {

                    var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
                    $(".project-entry:last").append(formattedProjectImages);

                }
            }
        }

    }

}



projects.display();


//Education Object:
var education = {
    "schools": [{
        "name": "University of Asmara",
        "degree": "Bacherlor of Science",
        "dates": "1992 - 1998",
        "location": "Asmara,Eritrea",
        "major": ["Chemistry", "Geology"],
        "url": "https://en.wikipedia.org/wiki/University_of_Asmara"
    }, {
        "name": "AddisKetema School",
        "degree": "Natural Science",
        "dates": "1989 - 1992",
        "location": "Ethiiopia",
        "major": ["Science"],
        "url": "http://wikimapia.org/106101/Addis-Ketema-High-School"
    }],

    "onlineCourses": [{

        "title": "Front end Web Development",
        "school": "Udacity Nano Degree Program",
        "dates": "October 2015",
        "url": "https://www.udacity.com"
    }],

    display: function() {


        for (school in education.schools) {

            var formattedEducationStart = HTMLschoolStart;
            $("#education").append(formattedEducationStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace('#', education.schools[school].url);
            var formattedScoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
            $(".education-entry:last").append(formattedSchoolName + formattedScoolDegree + formattedSchoolDates +
                formattedSchoolLocation + formattedSchoolMajor);

        }

        for (course in education.onlineCourses) {

            var formattedOnlineCourse = HTMLonlineClasses;
            $(".education-entry:last").append(HTMLonlineClasses);
            var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedOnlineCourseUrl = HTMLonlineURL.replace("%url%", education.onlineCourses[course].url).replace("%data%", education.onlineCourses[course].school);
            $(".education-entry:last").append(formattedOnlineCourseTitle + formattedOnlineSchool +
                formattedOnlineDates + formattedOnlineCourseUrl);

        }
    }
}


education.display();


//Map object:
var map = {

    init: function() {

        var map;
        var locations;
        var mapOptions = {
            disableDefaultUI: true
        };

        map = new google.maps.Map(document.querySelector('#map'), mapOptions);


        function locationFinder() {

            var locations = [];
            locations.push(bio.contacts.location);
            for (var school in education.schools) {
                locations.push(education.schools[school].location);
            }


            for (var job in work.jobs) {
                locations.push(work.jobs[job].location);
            }

            return locations;

        }


        function createMapMarker(placeData) {


            var lat = placeData.geometry.location.lat();
            var lon = placeData.geometry.location.lng();
            var name = placeData.formatted_address;
            var bounds = window.mapBounds;

            var marker = new google.maps.Marker({
                map: map,
                position: placeData.geometry.location,
                title: name
            });

            var infoWindow = new google.maps.InfoWindow({
                content: name
            });

            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.open(map, marker);
            });

            bounds.extend(new google.maps.LatLng(lat, lon));

            map.fitBounds(bounds);

            map.setCenter(bounds.getCenter());

        }


        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                createMapMarker(results[0])
            }
        }

        function pinPoster(locations) {

            var service = new google.maps.places.PlacesService(map);

            for (place in locations) {

                var request = {
                    query: locations[place]
                }

                service.textSearch(request, callback);
            }
        }

        window.mapBounds = new google.maps.LatLngBounds();


        locations = locationFinder();
        pinPoster(locations);

        window.addEventListener('resize', function(e) {
            map.fitBounds(mapBounds);
        });

    },

    display: function() {

        window.addEventListener('load', map.init);

        $('#mapDiv').append(googleMap);
    }

}



map.display();