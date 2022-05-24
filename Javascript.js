let CoursesButton = document.querySelector(".CoursesButton");

CoursesButton.addEventListener("click", ()=>{
    let showCourse = document.querySelector(".showCourse");
    if(showCourse.style.display == "block"){
        showCourse.style.display = "none";
        console.log("hiii");
        console.log("outerdddddd");
    }
    else {
        showCourse.style.display = "block";
        console.log("hiiiiiiiiiiiiii");
        console.log("outer");
    }
document.getElementById("ActiveIcon").classList.toggle('fa-angle-up');  
});


/**button click  Mobile View*/
let HumberButton = document.querySelector(".HumberButton");
    HumberButton.addEventListener("click",()=>{
    let CoursesButton = document.querySelector(".CoursesButton");
    let showCourse = document.querySelector(".showCourse");
    let Navbar = document.querySelector(".Navbar");
    let MobileViewCourse = document.getElementById("MobileViewCourse");

    if(HumberButton.checked){
        console.log("hiii");
        MobileViewCourse.style.display = "block";
        MobileViewCourse.textContent = " Courses";
        showCourse.style.display = "block";
        Navbar.style.display = "block";
        console.log(MobileViewCourse);


    } 
    else{
        MobileViewCourse.style.display = "none";
        showCourse.style.display = "none";
        Navbar.style.display = "none";
        console.log("no");
    }  
});

/************Apply Button Click */
let applyButtonContainer = document.querySelector(".applyButtonContainer");
let applyButtontransplate = document.querySelector(".applyButtontransplate");

window.onscroll = function() {myFunction()};

function myFunction(){
    if(document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < 700){
      
        applyButtontransplate.classList.remove('displayTranslate');
        // applyButtontransplate.classList.add('noneTranslate');
        applyButtontransplate.style.display = "none";
        
        
        console.log("hell");
        
    }
    else{

        // applyButtontransplate.classList.remove('noneTranslate');
        applyButtontransplate.classList.add('displayTranslate');
        applyButtontransplate.style.display = "flex";
        
    }
   

};