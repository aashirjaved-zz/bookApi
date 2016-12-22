/**
 * Created by aashirjaved on 22/12/2016.
 */
var express = require('express');


var routes = (Book)=>{
    var bookRouter = express.Router();


//calling route
    bookRouter.route('/Books')
        .post((req, res)=> {
            var book = new Book(req.body);
            book.save();

            res.status(201).send(book);
        })
        .get((req, res)=> {
            var query = {};
            if (req.query.genre) {
                query.genre = req.query.genre;
            }
            Book.find(query, (err, books)=> {
                if (err)
                    res.status(500).send(err);
                else {
                    res.json(books);
                }
            });
        });
    bookRouter.route('/Books/:bookId').get((req,res)=> {
        Book.findById(req.params.bookId, (err, book)=> {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.json(book);
            }

        });

    });
    bookRouter.route('/Authors').get((req, res)=> {
        var ResponseJSON = {
            name: 'Mr Khan',
            Books: '6'
        };
        res.send(ResponseJSON);
    });
    return bookRouter;
};

module.exports = routes;