

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://?:?@ds127536.mlab.com:27536/myappdb';
// Connect
const connection = (closure) => {
    return MongoClient.connect(url, (err, db) => {
        if (err) {
            return console.log(err);
        }
        else {
            return console.log('mongo connection done');
        }
        closure(db);

    });
};





// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get tblQuestionAnswer
router.get('/ques', (req, res) => {
   
    var parama = req.query;
    
    return MongoClient.connect(url, (err, db) => {
        if (err) {
            return err;
        }
        else {
            db.collection('tblQuestionAnswer')
            .find(parama)
            .toArray()
            .then((result) => {                          
                response.data = result;                
                res.json(response.data);
            })
            .catch((err) => {
                sendError(err, res);
            });
        }
        
    });


    
    /* return connection((db) => {
        db.collection('tblQuestionAnswer')
            .find()
            .toArray()
            .then((result) => {                
                response.data = result;                
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    }); */

});

module.exports = router;
