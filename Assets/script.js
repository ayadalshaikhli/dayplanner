var scheduler = [
    {
        time: 1,
        task: ""
    },
    {
        time: 2,
        task: ""
    },
    {
        time: 3,
        task: ""
    },
    {
        time: 4,
        task: ""
    },
    {
        time: 5,
        task: ""
    },
    {
        time: 6,
        task: ""
    },
    {
        time: 7,
        task: ""
    },
    {
        time: 9,
        task: ""
    },
    {
        time: 9,
        task: ""
    },
    {
        time: 10,
        task: ""
    },
    {
        time: 11,
        task: ""
    },
    {
        time: 12,
        task: ""
    },
    {
        time: 13,
        task: ""
    },
    {
        time: 14,
        task: ""
    },
    {
        time: 15,
        task: ""
    },
    {
        time: 16,
        task: ""
    },
    {
        time: 17,
        task: ""
    },
    {
        time: 18,
        task: ""
    },
    {
        time: 19,
        task: ""
    },
    {
        time: 20,
        task: ""
    },
    {
        time: 21,
        task: ""
    },
    {
        time: 22,
        task: ""
    },
    {
        time: 23,
        task: ""
    },
    {
        time: 24,
        task: ""
    },
]

let myTasks;
let storageArray=[];

// =============
// For the Heading Getting Todays Date 
// =============
function getToday() {
    var currentDate = moment().format('dddd MMMM Do');
    $("#currentDay").text(currentDate);
}


// =============
// Pulling  tasks from ourlocal storage when we load the page 
// ============= 
function getTasks(){
    myTasks = JSON.parse(localStorage.getItem("Tasks"))
    if (myTasks == null){
        console.log('+++');

        myTasks = scheduler;   
        
    } else {
         renderTasks();
         console.log('+++');
    } 
}

// -------------- Rendering tasks to each input when we load the page --------------
function renderTasks(){
    $("li").each(function(index) {
         $(this).find("input").val(myTasks[index].task);
    });
}

// -------------- Setting Tasks to local storage --------------
function setTasks(){
    localStorage.setItem("Tasks", JSON.stringify(scheduler));
}

// -------------- Button click event --------------
$(".btn").on("click", function(event){
    event.preventDefault();
    $("li").each(function(index) {
        storageArray[index] = $(this).find("input").val();
   });
   console.log("storageArray: ",storageArray) 
    for (i=0; i < scheduler.length; i++){
        scheduler[i].task = storageArray[i];
    }
    setTasks();
})

// -------------- Check the time and color scheduler  --------------
function passCheck() {
  var currentTime = moment().format('HH') ;
  $("li").each(function(index) {
    if (scheduler[index].time > currentTime) {
        $(this).find("input").css("background-color", "green");
    }
    if (scheduler[index].time < currentTime){
    $(this).find("input").css("background-color", "gray");
    }
    if (scheduler[index].time == currentTime){
        $(this).find("input").css("background-color", "	red");
        }
});
}



// Animation 
const tm = TweenMax;
const tl = gsap.timeline({defaults: {ease: "power1.out"}})
tl.from(".display-3", 2, {
    y: "0%",
    opacity: 0,
    scale: "0.8",
    stagger: .25,
    ease: Expo.easeInOut,
});
tl.from(".lead", 2, {
    y: "-30",
    opacity: 0,
    scale: "0.8",
    ease: Expo.easeInOut,
}, "-=2");
tl.from(".list-group-item", 2, {
    y: "240",
    opacity: 0,
    scale: "0.8",
    stagger: .25,
    delay: 1.5,
    ease: Expo.easeInOut,
}, "-=4");
tl.from(".time-span", 2, {
    x: "100",
    opacity: 0,
    stagger: .25,
    scale: "0.8",
    ease: Expo.easeInOut,
}, "-=8");
tl.from(".form-control", 3, {
    x: "100",
    opacity: 0,
    stagger: .25,
    scale: "0.8",
    ease: Expo.easeInOut,
}, "-=8");
tl.from(".btn", 2, {
    x: "-100",
    opacity: 0,
    stagger: .25,
    scale: "0.1",
    ease: Expo.easeInOut,
}, "-=8");



getToday();
getTasks();
passCheck();


