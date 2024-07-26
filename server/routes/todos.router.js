const router = require('express').Router();
const pool = require('../modules/pool');


// ------- GET route goes here --------

router.get('/', (req, res) => {
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
    // router.post('/',  (req, res) => {
    //     let newBook = req.body;
    //     console.log(`Adding book`, newBook);
    
    //     let queryText = `INSERT INTO "books" ("author", "title")
    //                     VALUES ($1, $2);`;
    //     pool.query(queryText, [newBook.author, newBook.title])
    //     .then(result => {
    //         res.sendStatus(201);
    //     })
    //     .catch(error => {
    //         console.log(`Error adding new book`, error);
    //         res.sendStatus(500);
    //     });
    // });



// ------- DELETE route goes here ----------
    // router.delete('/:book_id', (req, res) => {
    //     // console.log('DELETE /books received a request!');
    //     // console.log('req.params is:', req.params);
    
    //     const bookIdToDelete = req.params.book_id;
    //     // console.log('bookIdToDelete: ', bookIdToDelete);
    
    //     const sqlText = `
    //     DELETE FROM "books"
    //         WHERE "id" = $1;
    //     `;
    //     const sqlValues = [bookIdToDelete];
    
    //     pool.query(sqlText, sqlValues)
    
    //     .then((dbResult) => {
    //     res.sendStatus(200);
    //     })
    //     .catch((dbError) => {
    //     console.log('SQL query in DELETE /books/:book_id error: ', dbError);
    //     res.sendStatus(500);
    //     })
    // })



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
