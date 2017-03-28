/*
This is empty on purpose! Your code to build the resume will go here.
 */
//                                          B I O
var bio = {
    name: "Sultan",
    role: "Front-End Web Developer",
    contacts: {
        mobile: "+99988223322",
        email: "CEO@ov9n.er",
        github: "ov9ner",
        twitter: "@oov",
        location: "South Korea"
    },
    welcomeMessage: "A coder who loves linux and coding...",
    skills: ['C/C++', 'Java', 'x86 assembly', 'Javascript', 'PHP', 'C#', 'HTML', 'CSS', 'Linux', 'Windows', 'MySQL', 'ASP.NET'],
    biopic: "http://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png",
    display: function print() {

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);


        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);

        var i, formattedSkills;
        for (i = 0; i < bio.skills.length; i++) {
            formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);

    }
};

//                                          E D U C A T I O N
var education = {
    schools: [{
        name: "mit",
        location: "Cambridge, Massachusetts, usa",
        degree: "bachelor's degree",
        majors: ["computer science"],
        dates: "1/1/2012-12/12/2017",
        url: "localhost",
    }],
    onlineCourses: [{
        title: "Front-End Developer course",
        school: "udacity",
        dates: "jan/17-jun/17",
        url: "https://classroom.udacity.com"
    }],
    display: function print() {

        $("#education").append(HTMLschoolStart);
        var i = 0;
        for (i = 0; i < education.schools.length; i++) {
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

            $(".education-entry").append(formattedschoolName + formattedschoolDegree);
            $(".education-entry").append(formattedschoolDates);
            $(".education-entry").append(formattedschoolLocation);

            for (var y = 0; y < education.schools[i].majors.length; y++) {
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[y]);
                $(".education-entry").append(formattedschoolMajor);
            }


        }

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        for (var o = 0; o < education.onlineCourses.length; o++) {

            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[o].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[o].school);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[o].dates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[o].url);

            $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
            $(".education-entry:last").append(formattedonlineDates);
            $(".education-entry:last").append(formattedonlineURL);
        }

    }
};

//                                          W O R K
var work = {
    jobs: [{
        employer: "Apple",
        title: "Visual Interface Design Intern",
        location: "USA, ",
        dates: "2011 - 2012",
        description: "Created usable interactions. Designed user flows. Worked on new features with the iTunes Apps Design team. Ideated new interfaces."
    }, {
        employer: "AAA",
        title: "Web Developer",
        location: "Birmingham",
        dates: "2014 - 2015",
        description: "training in the company as a trainee..."
    }],
    display: function() {

        $("#workExperience").append(HTMLworkStart);
        var i = -1;
        for (i = 0; i < work.jobs.length; i++) {
            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            $(".work-entry:last").append(formattedworkEmployer);
            $(".work-entry:last").append(formattedworkTitle);
            $(".work-entry:last").append(formattedworkDates);
            $(".work-entry:last").append(formattedworkLocation);
            $(".work-entry:last").append(formattedworkDescription);
        }

    }
};

//                                          P R O J E C T S
var projects = {
    projects: [{
        title: "OTM Mobile App",
        dates: "jan/2016-nov/2016",
        description: "an online trading marketplace",
        images: ["images/Newp.png"]
    }],
    display: function print() {


        $("#projects").append(HTMLprojectStart);
        for (i = 0; i < projects.projects.length; i++) {
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedprojectTitle);
            $(".project-entry:last").append(formattedprojectDates);
            $(".project-entry:last").append(formattedprojectDescription);
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedprojectImage);
            }


            // var internationalizeButton =internationalizeButton.replace("%data%",);
            // var googleMap = googleMap.replace("%data%",);


        }

    }

};




bio.display();
education.display();
work.display();
projects.display();

