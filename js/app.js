//variables
const courses = document.querySelector('#courses-list');

//eventlisteners

loadEventListeners();

function loadEventListeners() {
    //adding course
    courses.addEventListener('click', buyCourse);

}


//functions

function buyCourse(e) {
    e.preventDefault();

    //use delegation to find the course added

    if(e.target.classList.contains('add-to-cart')) {
        //read the course value
        const course = e.target.parentElement.parentElement;

        //read the values
        getCourseInfo(course);
    }
}

function getCourseInfo(course) {
    console.log(course);
}