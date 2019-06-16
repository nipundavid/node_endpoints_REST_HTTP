const express = require("express");

function routes(Book) {
    const bookRouter = express.Router();
        bookRouter.route("/books")
        .post((req,res)=> {
            const book = new Book(req.body);   
            book.save();
            return res.status(201).json(book);
        })
        .get((req,res)=> {
            const query = {};
            if(req.query.genre) {
                query.genre = req.query.genre;
            }
            // const query = req.query;
            Book.find(query, (err,books) => {
                if(err){
                    return res.send(err)
                }
                return res.json(books);
            });
        });

    bookRouter.route("/books/:bookId")
        .get((req,res)=> {
            Book.findById(req.params.bookId, (err,books) => {
                if(err){
                    res.send(err)
                }else {
                    res.json(books);
                }
            });
    });

    return bookRouter;
}

module.exports = routes;