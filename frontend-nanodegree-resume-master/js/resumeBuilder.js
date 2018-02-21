
//-----------------------Code for Display bio-------------------------//
var bio = {
  "name" : "Daniel Ybanez",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "928-640-3433",
    "email" : "danielrubenybanez@gmail.com",
    "github" : "desecdanny",
    "twitter" : "@desecdaniel",
    "location" : "Page, Az, US"
  },
  "welcomeMessage" : "Hallo ! My name is Daniel and i'm a junior web developer that's looking for work. I'm putting full effort in this career change and hope it will have some great results. 🚀 😎",
  "skills" : [
    "JavaScript", "HTML", "CSS", "BootStrap", "jQuery", "Git"
  ],
  "biopic" : "images/fry.jpg"
};
bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedPhoto = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPhoto);
    $("#header").append(formattedMsg);

  var formattedContacts = [];
    formattedContacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContacts.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContacts.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContacts.push(HTMLlocation.replace("%data%", bio.contacts.location));

  for(var i=0; i<formattedContacts.length; i++){
    $("#topContacts, #footerContacts").append(formattedContacts[i]);
  }

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
      $('#skills').append(formattedSkill);
    }
  }
};
bio.display();
//-----------------------Code for Display Work------------------------//
var work = {
  "jobs" : [
    {
      "employer" : "Mcdonalds",      
      "title" : "Cook",
      "dates" : "9/20/15 - 4/20/16",
      "description" : "make the orders, restock all food products, maintain a clean kitchen, keep up with orders under a certain time limit, being able to work with a team",
      "location" : "Page, AZ"
    },
    {
      "employer" : "Pizza Hut",      
      "title" : "Cook",
      "dates" : "6/20/16 - currently",
      "description" : "make the orders, restock all food products, maintain a clean kitchen, keep up with orders under a certain time limit, being able to work with a team",
      "location" : "Page, AZ"
    }
  ]
};

work.display =  function(){ 
  work.jobs.forEach(function appendJobs(value, index){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
      $(".work-entry:last").append(formattedLocation);
  }); 
};
work.display();

//-----------------------Code for Display project---------------------//
var projects = {
"projects" : [
    {
      "title" : "Animal Trading Cards" , 
      "dates" : "11/1/17",
      "description" : "I used my knowledge of html but mostly css to create a web based trading card depicting my favorite animal" ,
      "images" : ["images/197x148.gif"] 
    },
    {
      "title" : "Mock Article" , 
      "dates" : "11/19/17",
      "description" : "A project that depended on my HTML knowledge to be created, show casing an article without any framework to use." ,
      "images" : ["images/197x148.gif"]
    },
    {
      "title" : "Portofilio Site" , 
      "dates" : "12/10/17",
      "description" : "my portofilio site as a responsive design to be on mobile or on desktop, tablet" ,
      "images" : ["images/197x148.gif"]
    },
    {
    "title" : "Online Resume" , 
    "dates" : "11/22/17",
    "description" : "A portofilio site for me - made with much more JSON and methos such as replace.() and %data% and an HTML templetes" ,
    "images" : ["images/197x148.gif"]
  }
  ]
};
projects.display = function(){
  if (projects.projects.length > 0) {
    projects.projects.forEach(function appendProjects(value, index){
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

     if(projects.projects[index].images.length > 0){
      projects.projects[index].images.forEach(function proImg(value, x){
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[x]);
        $(".project-entry:last").append(formattedProjectImage);
      });
     }
    });
  }
};
projects.display();

//-----------------------Code for Display education-------------------//
var education = {
  "schools" : [
    {
      "name" : "Page High School",      
      "location" : "page, Az",      
      "degree" : "High School Diploma",
      "majors" : ["science", " English"],
      "dates" : "From : 2012 To : 2016"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-end web developer nanodegree",
      "school" : "Udacity",
      "dates" : "From : 2017 To : 2017",
      "url" : "https://www.udacity.com"
    }
  ]
};
education.display = function() {
  if(education.schools.length>0 || education.onlineCourses.length>0){
    education.schools.forEach(function appendSchools(value, index){
      $("#education").append(HTMLschoolStart);
      
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].majors);

      $(".education-entry:last").append(formattedSchoolName);
      $(".education-entry:last").append(formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    });
    education.onlineCourses.forEach(function appendCourses(value, index){
      $("#education").append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);

      $(".education-entry:last").append(formattedOnlineTitle);
      $(".education-entry:last").append(formattedOnlineSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    });
  }
};
education.display();

//--------------------Code to internationalize name------------------//
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}
$("#main").append(internationalizeButton);

//--------------------Code for Display Where i worked-----------------//
$("#mapDiv").append(googleMap);
initializeMap();
