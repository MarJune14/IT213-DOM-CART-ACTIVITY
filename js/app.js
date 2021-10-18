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
    //Create an Object with course data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    //Add into cart
    addIntoCart(courseInfo);

}
//Display the course into the Shopping Cart

function addIntoCart() {
     //create a <tr>
     const row = document.createElement('tr');

     //Build the Template
     row.innerHTML = `
     
     `;

}