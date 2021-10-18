//variables


//eventlisteners
function eventlisteners(){
    // from submission
    document.querySelector('#form').addEventListener('submit', newTweet);
}

//functions

function newTweet(e) {
    e.preventDefault();

    console.log('Form Submitted');
}