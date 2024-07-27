console.log('JS is sourced!');

// ------- GET route goes here --------
//create a function that initiates a GET route
//and calls a render function when the data is sent back 
// from the server and resets inputs


//load existing tasks upon page load
getTasks();
//======STILL NEED TO CALL RENDER FUNCTION
function getTasks() {
    console.log('in getTasks function');
    axios ({
        method: 'GET',
        url: '/todos'
    })
    .then(function(response) {
        console.log('getTasks() response', response.data);
        renderTasks(response.data);
    })
    .catch(function(error){
        console.log('error in GET', error);
    });
}


//create a function that renders the data on the webpage
// //This will have something like this in it:

function renderTasks (array) {
    //create variables: task location
    //LOOP through array, adding a new table row each time
    //IF object.isComplete is false, create a complete button
    //IF object.isComplete is true, put a checkmark
    let toDoLocation = document.getElementById('taskListLocation');
    toDoLocation.innerHTML = '';

    for(let object of array) {
    toDoLocation.innerHTML += `
    <tr>
        <td class="completed" data-testid="toDoItem">${object.text}</td>
        <td class="completed">date</td>
        <td class="completed">
            <button data-testid="completeButton">${object.isComplete}</button>
        </td>
        <td class="completed">
            <button data-testid="deleteButton">Delete</button>
        </td>
    </tr>
    `;
    }
}




// ------- POST route goes here ---------
//Create a funtion that is called when the submit button is pushed
//This function creates an object with the inputs and calls a function
//that sends the data



//Create a function that initiates a POST route and sends the object that was created
// to the server that will look something like this:

    // axios({
    //     method: 'POST',
    //     url: '/books',
    //     data: bookToAdd,
    //     }).then(function(response) {
    //     console.log('addBook()', response.data);
    //     refreshBooks();
    //     }).catch(function(error) {
    //     console.log('Error in POST', error)
    //     alert('Unable to add book at this time. Please try again later.');
    //     });



// ------- DELETE route goes here ----------
//create a function that is called when the delete button is pushed
//function initiates a delete request to the server.
//It will look something like this
    // axios({
    //     method: 'DELETE',
    //     url: `/books/${bookId}`
    // })
    // .then(function(response) {
    //     console.log('deleteBooks() response', response.data);
    //     refreshBooks(response.data);
    // })
    // .catch(function(error){
    //     console.log('error in GET', error);
    // });



// -------- PUT route goes here ----------
//create a function that is called when the complete button is pushed
// that changes that changes the isComplete to true;
    // axiaxios({
    //     method: 'PUT',
    //     url: `/books/${bookId}`,
    //     data: {isRead: 'TRUE'}
    //   })
    //     .then((response) => {
    //       refreshBooks();
    //     })
    //     .catch((error) => {
    //       console.log('downvoteSong() error:', error);
    //     })
    
