// get all dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var path = require('path');
var request = require('request');
var Promise = require('bluebird');

var Article = require('../models/Article');

mongoose.Promise = Promise;


// home page
router.get("/", function(req, res) {
  console.log("root request");
  res.redirect("/scrape");
});

// A GET request to scrape the echojs website
router.get("/scrape", function(req, res) {
   console.log("scrape request");
   res.redirect("/articles");
  // First, we grab the body of the html with request
  // request("http://www.echojs.com/", function(error, response, html) {
  //   // Then, we load that into cheerio and save it to $ for a shorthand selector
  //   var $ = cheerio.load(html);
  //   // Now, we grab every h2 within an article tag, and do the following:
  //   $("article h2").each(function(i, element) {

  //     // Save an empty result object
  //     var result = {};

  //     // Add the text and href of every link, and save them as properties of the result object
  //     result.title = $(this).children("a").text();
  //     result.link = $(this).children("a").attr("href");
  //     result.notes=[];
      
      
  //     // Check if the article already exists

  //     Article.find({where:{title: result.title}})
       
  //      .exec(function(error, docs) {
  //         // Log any errors
  //         if (error) {
  //           console.log(error);
  //           res.send(error);
  //         }
  //         // Or send the doc to the browser as a json object
  //         else {

  //           if(!docs.length){

  //             // Using our Article model, create a new entry
  //             // This effectively passes the result object to the entry (and the title and link)
        
  //               var entry = new Article(result);

  //              // Now, save that entry to the db
  //               entry.save(function(err, doc) {
  //                   // Log any errors
  //                   if (err) {
  //                     console.log(err);
  //                     res.send(err);
  //                   }else { // Or log the doc
  //                   console.log(doc);
  //                    res.redirect('/articles')
  //                   }
  //               });
  //           }else{
  //             res.send("here");
  //           }
           
  //         }
  //       });
  //   });

  // });
  
});

// This will get the articles we scraped from the mongoDB
router.get("/articles", function(req, res) {
   console.log("articles request");
  Article.find({})
   
   .exec(function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Or send the doc to the browser as a json object
    else {
      console.log(doc);
      res.json(doc);
    }
  });
});


// Create a new note or replace an existing note
router.post("/articles/:id", function(req, res) {
  console.log(req.body);
  // Create a new note and pass the req.body to the entry
     
     // Associate the note with the article
      Article.findOneAndUpdate({
          "_id": req.params.id
        }, {
          $push: {
            "notes": req.body.text
          }
        })
      .exec(function(err, doc1) {
        // Log any errors
        if (err) {
          console.log(err);
          res.send(err);
        }else {
          res.json(doc1);
        }
      });
    
 });



// deleting all notes associated with an article 
router.delete('/notes/:articleId', function(req, res) {
  console.log('delete req body');
  console.log(req.body);
     
     Article.findOneAndUpdate({ "_id": req.params.articleId }, { "notes": [] })
    .exec(function(err, doc) {

      console.log(doc);
      res.end();
      
    });
});

// deleting all notes associated with an article 
router.delete('/notes/:articleId/:noteIndex', function(req, res) {
  console.log('delete req body');
  console.log(req.body);
     var key = "notes."+req.params.noteIndex;

     Article.findOne({ "_id": req.params.articleId })
    .exec(function(err1, doc1) {

        var notes = doc1.notes.slice();
        console.log(notes);
        console.log(parseInt(req.params.noteIndex));

        notes.splice(parseInt(req.params.noteIndex),1);
        console.log("modified notes");
        console.log(notes);

       

        Article.findOneAndUpdate({ "_id": req.params.articleId }, {$set : {"notes": notes } })
         .exec(function(err2, doc2) {
          console.log(doc2);
          res.end();
        
        });
    });
});
module.exports = router;