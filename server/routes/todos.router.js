const router = require('express').Router();
const pool = require('../modules/pool');


// ------- GET route goes here --------

router.get('/', (req, res) => {
    //could request todos by date order
    let queryText = `
    SELECT * FROM "todos"; 
    `;
    pool.query(queryText)
    .then(result => {
    // Sends back the results in an object
    // console.log('in GET route. here are the tasks: ', result.rows)
    res.send(result.rows);
    })
    .catch(error => {
    console.log('error getting tasks', error);
    res.sendStatus(500);
    });
});


// ------- POST route goes here ---------
router.post('/',  (req, res) => {
    let newTask = req.body;
    console.log(`Adding task`, newTask);
    
    let queryText = `
        INSERT INTO "todos"
 	        ("text")
 	        VALUES
 	        ($1);
    `;
    pool.query(queryText, [newTask.text])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new book`, error);
            res.sendStatus(500);
        });
    });



// ------- DELETE route goes here ----------
    router.delete('/:taskId', (req, res) => {
        // console.log('DELETE /books received a request!');
        // console.log('req.params is:', req.params);
    
        const taskIdToDelete = req.params.taskId;
        // console.log('taskIdToDelete: ', taskIdToDelete);
    
        const sqlText = `
         DELETE FROM "todos"
            WHERE "id" = $1;
        `;
        const sqlValues = [taskIdToDelete];
    
        pool.query(sqlText, sqlValues)
    
        .then((dbResult) => {
        res.sendStatus(200);
        })
        .catch((dbError) => {
        console.log('SQL query in DELETE /todos/:taskId error: ', dbError);
        res.sendStatus(500);
        })
    })



// -------- PUT route goes here ----------
    // router.put('/:book_id', (req, res) => {
    //     console.log('PUT /songs/:book_id received a request!');
        
    //     const bookIdToUpdate = req.params.book_id;
    //     const isRead = req.body.isRead;
    
    //     console.log('bookIdToUpdate is:', bookIdToUpdate);
    //     console.log('isREad is:', isRead);
    
    // Conditionally assign a SQL query based on what
    // direction we want the song's rank to go:
    // let sqlText;
    //     sqlText = `
    //         UPDATE "books"
    //         SET "isRead" = $1
    //         WHERE "id" = $2;
    //     `
    //     const sqlValues = [isRead, bookIdToUpdate];
    
    //     pool.query(sqlText, sqlValues)
    //     .then((dbResult) => {
    //         res.sendStatus(200);
    //     })
    //     .catch((dbError) => {
    //         console.log('SQL query error in PUT /books/:book_id', dbError);
    //         res.sendStatus(500);
    //     })
    // })


module.exports = router;
