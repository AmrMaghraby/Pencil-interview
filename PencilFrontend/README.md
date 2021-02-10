## Pencil Interview Process

## Backend 
Requirement 1: Store all questions and their annotations from the following sheet into your database: Questions and Topics

Requirement 2: Figure out the right schema and store all topics from the Topics sheet in the above file also into the database. Each row in the sheet is a unique path in the topics tree.

Requirement 3: Create an API endpoint as follows
METHOD: GET
endpoint: /search
query param: q=”name of topic” for e.g ?q=”Quantum Mechanics”

The response to this query, should be an array of question numbers, that match the following requirement.

Search requirement: All questions that contain an annotation which is anywhere in the subtree of the query topic, should be returned. 
For e.g In the previous example with 4 questions and their annotations, for a query of “Modern Physics”, Question 1, Question 2 and Question 3 should be returned in response, and Question 4 should not. Because Question 4 contains the annotation “Electron Charge” which is not under Modern Physics.

Requirement 4: Make sure your code is making efficient queries, regardless of which topic is queried, including the root topic of the tree.

Requirement 5: Host your code in any cloud provider, and your database in MongoDB Atlas (which gives free access) and share the exact details on how to access it and query it with example queries.

Requirement 6: Upload your code into GitHub and share it along with your submission. Make sure to provide example request URLs.

## Development steps

First I wrote nodejs script to read and parse Questions sheet nd anther script for Topics sheet.

Second created account on MongoDB Atlas and connect nodejs scripts to database instance on MongoDB Atlas. The link for my instance could be found here.

Third I created express and nodejs server which exposes RESTful API to query and return questions that match the query.

Fourth the created server local deployed on heroku and link could be found here.

Fifth tested the deployed APP through postman and chrome both worked well.

## Prove that Backend development works well

I have recorded this video while testing backend task:

## Installtion process

For setting data in MongoDB from attached sheets
node read-store-Topics
node read-store-questions

Run `npm install`
Run `node_modules/.bin/babel-node app.js`

## Frontend

Build an Angular 8+ application with the following:

1. User authentication: Use Firebase to support authentication in your application, so that the first screen a user sees, asks them to login via their google account. If the user is detected to have been already authenticated, then directly take them to the 2nd page.
2. Text editor: Once logged in, show a large textbox on the page integrated with the Medium editor (https://github.com/yabwe/medium-editor) and allow the user to write content in this editor area.
3. Everything the user writes here, should be synced into the Firebase database in real-time for that user’s account, automatically, without hitting a submit button.
When the user logs back in, retrieve their last written and auto-saved document and show it in the editor ready for editing.
4. Host your project using Firebase hosting and send us a link, along with your code on GitHub.
5. Allow the user to enter LaTeX equations into the editor inside 2 enclosing $ symbols (e.g. $1+1=2$) and once the user is done typing them out, render the actual equation.

## Development steps

First I have created frontend project in angular 10 and integrated it with Firebase Authentication.

Second integrat it wtih medium editor able to wrote after sign in.

Third integrate what wrotw in the editor with user id sign in by firebase Authenication.

Fourth integrated latex equations with the editor and being able to render the equation after writting it between two enclosed $$.

Fifth hosted on firebase and link could be found here.

Sixth tested it on both hosted link and local on chrome and both worked well.

## Prove that Frontend development works well

I have recorded this video while testing frontend task:


## Installation Process
Run `npm install` to install all the required dependencies

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
