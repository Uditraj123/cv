window.onload=function() {
    show(0);
}
let questions=[
    {
        id:1,
        question:"Q.1 Who is the owner of this website?",
        answer:"Uditraj",
        options:[
            "Udit kumar",
            "Raja",
            "Uditraj",
            "EK Engineer"
        ]
    },
    {
        id:2,
        question:"Q.2 What does UDIT like the most as Enginner?",
        answer:"Tea",
        options:[
            "Tea",
            "Coffee",
            "Beer",
            "Wine"
        ]
    },
    {
        id:3,
        question:"Q.3 what does Udit like to play mostly?",
        answer:"Cricket",
        options:[
            "Football",
            "Cricket",
            "Hide and Seek",
            "Kho-Kho"
        ]
    },
    {
        id:4,
        question:"Q.4 What does Udit hate most?",
        answer:"Education System",
        options:[
            "Rich",
            "Poor",
            "Politics",
            "Education System"
        ]
    },
    {
        id:5,
        question:"Q.5 What does Udit look like?",
        answer:"Simple and Smart(moodwise)",
        options:[
            "Depressed",
            "Funnny",
            "Simple and Smart(moodwise)",
            "Cool"
        ]
    },
    {
        id:6,
        question:"Q.6 What does Udit like to eat?",
        answer:"Chhole Bhatura",
        options:[
            "Chhole Bhatura",
            "Pizza",
            "Momos",
            "Egg Roll"
        ]
    },
    {
        id:7,
        question:"Q.7 Whom does Udit trust much?",
        answer:"Big Bro",
        options:[
            "Friend",
            "Teacher",
            "Education system",
            "Big Bro"
        ]
    },
    {
        id:8,
        question:"Q.8 Where does Udit want to travel?",
        answer:"Sikkim",
        options:[
            "Delhi",
            "Mumbai",
            "Jaipur",
            "Sikkim"
        ]
    },
    {
        id:9,
        question:"Q.9 What is the nickname of Udit?",
        answer:"Raja",
        options:[
            "Ud",
            "Raja",
            "Uditraj",
            "Udit"
        ]
    },
    {
        id:10,
        question:"Q.10 What is short term goal of Udit?",
        answer:"Being Financial Stable",
        options:[
            "None of these",
            "Professional skills",
            "Have a bike",
            "Being Financial Stable"
        ]
    },

];
//DECLARE GLOBAL VARIABLE//
let question_count=0;
let quiz_point=0;

function next() {


    let user_answer=document.querySelector("li.option.active").innerHTML;
    //check user answer//
    if(user_answer==questions[question_count].answer) {
    quiz_point+=10;
    let point=sessionStorage.setItem("points",quiz_point);
    }

if(question_count==questions.length-1) {
    sessionStorage.setItem("time",minutes + " " + "minutes" + " " +  "and" + " " + seconds + " " + "seconds");

clearInterval(clear_time);


location.href="end.html";
return;

}


   

    question_count++;
    show(question_count);
}

function show(count) {
    let question1=document.getElementById("question");
    question1.innerHTML="<h2 class=questions>" +  questions[question_count].question + "</h2>" +
    "<ul class=options>" + 
    "<li class=option>" + questions[question_count].options[0] + "</li>" +
    "<li class=option>" + questions[question_count].options[1] + "</li>" +
    "<li class=option>" + questions[question_count].options[2] + "</li>" +
    "<li class=option>" + questions[question_count].options[3] + "</li>" +
  "</ul>";

  toggleactive();

}



  function toggleactive() {
    let option=document.querySelectorAll("li.option");


    for(let i=0; i<option.length; i++) {
        option[i].onclick= function() {
            for(let j=0; j<option.length; j++) {
                if(option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}


function submitform() {
    let name=document.forms["frmname"]["username"].value;


  
    //set temporay storage until browser open: sessionstorage/
    sessionStorage.setItem("playername",name);
   
}
function quiz_start(){
    location.href="quiz.html";
}
