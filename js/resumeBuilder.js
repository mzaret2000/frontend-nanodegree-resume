var skills = ["R","Python","SQL","Classification Algorithms"];
var contacts = {
	"email":"michael.zaret@gmail.com",
	"mobile":"770-598-8538",
	"twitter":"mzaret2000",
	"github":"mzaret2000",
	"location":"Oakland, CA"
};

var work = {
	jobs:[
	{"employer":"Vinyl Interactive",
	"title":"Marketing Analyst",
	"location":"San Francisco",
	"dates":"2009-2011",
	"description":"Build and maintain algorithms to rank leads for online education clients",
	"url":"http://vinylinteractive.com/"
	},
	{"employer":"Zynga",
	"title":"Analytics Manager",
	"location":"Los Angeles",
	"dates":"2011-2013",
	"description":"Add quantitative insights and maintain dashboards for analytically driven game studios",
	"url":"http://www.zynga.com"
	},
	{"employer":"Uber",
	"title":"Operations Manager",
	"location":"Chicago",
	"dates":"2014-",
	"description":"Develop Incentive Programs to keep partners engaged.Make sure team is making decisions informed by data.",
	"url":"https://www.uber.com/"
	}]
};

var projects = {
	detail:[
	{"title":"P1:Coffee Mug",
	"dates":"January 2015",
	"description":"Build a webpage from a mockup using boostrap framework.",
	"image":"images/mug.png"
	},
	{"title":"P2: Interactive Resume",
	"dates":"February 2015",
	"description":"Build an interactive webpage with JavaScript",
	"image":"images/p2.png"
	}]
};

var bio = {
	"name":"Michael Zaret",
	"role":"Web Developer",
	"welcomeMessage":"Hi Michael Zaret, and I am learning to become a Front-End Web Developer",
	"biopic":"images/biopic.png",
	"contacts":contacts,
	"skills":skills
};

var education = {
	"schools":[
	{"name":"Princeton University",
	"location":"Princeton, New Jersey",
	"degree":"BA",
	"majors":["Economics","Finance Certificate"],
	"dates":"2007",
	"url":"http://www.princeton.edu"
	}],
	"onlineCourses":[
	{"title":"JavaScript Basics",
	"school":"Udacity",
	"dates":"2015",
	"url":"http://www.udacity.com/course/ud804"
	},
	{"title":"Build a Blog",
	"school":"Udacity",
	"dates":"2014",
	"url":"https://www.udacity.com/course/cs253"
	},
	{"title":"Intro to Computer Science",
	"school":"Udacity",
	"dates":"2013",
	"url":"https://www.udacity.com/course/cs101"
	},
	{"title":"Intro to Machine Learning",
	"school":"Coursera",
	"dates":"2012",
	"url":"https://www.coursera.org/course/ml"
	}]
};

contactWrap = function(id) {
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$(id).append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$(id).append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$(id).append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$(id).append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$(id).append(formattedLocation);
};

bio.display = function() {
	var formattedHeaderRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedHeaderRole);
	var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedHeaderName);
	contactWrap("#topContacts");
	var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedBiopic)
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(HTMLskillsStart);
	for (s in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[s]);
		$("#skills").append(formattedSkill);
	};
};



work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		formattedEmployer = formattedEmployer.replace("#",work.jobs[job].url);
		var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + "-" + formattedworkTitle);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDates);
		$(".work-entry:last").append(formattedworkDescription);
	};
};

projects.display = function() {
	for (p in projects.detail) {
		$("#projects").append(HTMLprojectStart);
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.detail[p].title);
		var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.detail[p].dates);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.detail[p].description);
		var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.detail[p].image);
		$(".project-entry:last").append(formattedprojectTitle);
		$(".project-entry:last").append(formattedprojectDates);
		$(".project-entry:last").append(formattedprojectDescription);
		$(".project-entry:last").append(formattedprojectImage);

	};
};

education.display = function() {
	for (univ in education.schools) {
	$("#education").append(HTMLschoolStart);
	var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[univ].name);
	formattedSchoolName = formattedSchoolName .replace("#",education.schools[univ].url);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[univ].location);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[univ].degree);
	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[univ].majors);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[univ].dates);
	var formattedSchool = formattedSchoolName + formattedSchoolDegree
	$(".education-entry:last").append(formattedSchool);
	$(".education-entry:last").append(formattedSchoolDates);
	$(".education-entry:last").append(formattedSchoolLocation);
	$(".education-entry:last").append(formattedSchoolMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		formattedOnlineTitle = formattedOnlineTitle.replace("#",education.onlineCourses[course].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		var titlePlusSchool = formattedOnlineTitle + " - " + formattedOnlineSchool
		$(".education-entry:last").append(titlePlusSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		//$(".education-entry:last").append(formattedOnlineURL);
	};
};

projects.display();
work.display();
bio.display();
education.display();
contactWrap("#footerContacts");

$("#mapDiv").append(googleMap);

$(document).ready(function(){
    $("#workExperience, #education").children("h2").click(function(){
        $(".work-entry,.education-entry").slideToggle();
    });
});

$(document).ready(function(){
    $(".project-entry").children("a").click(function(){
    	$proj = $(this);
    	$proj.siblings("img").slideToggle();
    });
});

$(document).ready(function(){
    $("#mapDiv").children("h2").click(function(){
        $("#map").slideToggle();
    });
});


