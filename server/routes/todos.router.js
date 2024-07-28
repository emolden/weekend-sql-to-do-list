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
router.put('/:taskId', (req, res) => {
    console.log('PUT /todos/:taskId received a request!');
        
    const taskIdToUpdate = req.params.taskId;
    const isComplete = req.body.isComplete;
    
    console.log('taskIdToUpdate is:', taskIdToUpdate);
    console.log('isComplete is:', isComplete);
    
    // Conditionally assign a SQL query based on what
    // direction we want the song's rank to go:
    let sqlText;
        sqlText = `
            UPDATE "todos"
                SET "isComplete" = NOT $1
                WHERE "id" = $2;
        `;
        const sqlValues = [isComplete, taskIdToUpdate];
    
        pool.query(sqlText, sqlValues)
        .then((dbResult) => {
            res.sendStatus(200);
        })
        .catch((dbError) => {
            console.log('SQL query error in PUT /todos/:taskId', dbError);
            res.sendStatus(500);
        })
    })


module.exports = router;
