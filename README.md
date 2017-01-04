# React News

### Overview
This is a full stack web app that lets users write notes while reading articles. The articles are web scraped from http://www.echojs.com

### Demo
[Click to view Demo](https://obscure-ravine-46220.herokuapp.com/)

### Technologies used

* Node.js, Express, Cheerio, Request, Body Parser, Morgan
* MongoDB, Mongoose
* React, Redux, React-Redux, Thunk, fetch

### Challenges faced

* How to webscrape the data?
* How to how to associate the two collections mongoDB collections?

### Solutions found

* Using request and Cheerio npm modules helped with webscraping
* One to many relationship can be established by storing the ids in the children in the parent collection.

### How it works

* When the user visits the site the news articles are webscraped, and checked if they already exist in the database. If they don't, then they added to the database.

* The use can navigate to different articles and leave his notes.

* The user also has an option to delete the notes

##### Developed by Bhagya
