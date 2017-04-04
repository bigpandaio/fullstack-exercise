# BigPanda Fullstack Exercise

## To start hacking:

1. Make sure you have Node.JS installed: https://nodejs.org/en/download/
1. Make sure you have MongeDB installed:  https://www.mongodb.com/download-center#community
1. Clone the git repository
1. Run `npm install` inside the repo directory
1. Run `npm start` to run the server

This will launch both the backend server and the frontend, which you can access through [this url](http://localhost:3000).

## Exercise Instructions

The application is a very simple comments feed. We would like you to extend it in a way that will allow users to rate comments on a scale of 1-5.

We expect the solution to include:

1. A new "rating" **directive** that will allow users to express their opinion on the comment. This widget should display the current **average** rating and allow users to set their rating.  
**Bonus:** Use a shiny stars widget to make us extra happy! :star::star::star::star::star: == :+1::+1:
1. Extension of the API to support sending the rating to the server side.
1. Extension of the server side to support persisting the rating on MongoDB.
1. An understandable README.md is required, with running instructions.
1. **Bonus:** Change the implementation to support real time updates of ratings. This means that if you have two browser windows of the application open, then any changes in one browser should be reflected in the other.

## Final Notes

A working solution isn't the only requirement. The code should be simple (to read and understand), robust and testable (you don't have to write the actual tests though..).

Create a repository in Github and send us the link when you're ready.
