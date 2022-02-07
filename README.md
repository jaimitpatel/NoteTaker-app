# Note Taking application

## Deployed Heroku Application:

https://jaimit-note-taker.herokuapp.com

## Description
An application that uses express in order to get api requests from back end, including 'GET', 'POST', 'DELETE', and allows the user to save and pull up notes.
  

## Screenshots

node server:

![routes](https://user-images.githubusercontent.com/3880463/152720687-0dc06563-5bda-4c9b-a938-8c7e0b91ba4c.png)<br>
Each new note is given a unique id, and when the user wants to delete that specific note, the app looks for <br>
the specific id and deletes it from the db.json file. Every time you add or delete a file, it is logged into node.

Website:

![Website](https://user-images.githubusercontent.com/3880463/152721050-5534b77f-60d0-462b-9b84-48472df755c3.png)

Server file: <br>
![Server](https://user-images.githubusercontent.com/3880463/152721221-a5efb6f7-d45d-472e-b49f-cd7e6b3844fa.png)


Delete request:

![Code snippet](https://user-images.githubusercontent.com/3880463/152721972-c6000887-4d26-4064-a064-90fbbd14e47e.png) <br>
This app used UUID to give each note a seperate id, and this function is responsible for looking for that specific ID <br>
and deleting it from the db.json file, and updating it at the same time.



## Installation
Clone the repo onto your local machine, and open a command terminal inside the cloned folder. Type "NPM I" into <br>
the terminal to download required dependencies. After its downloaded, run the application using "Node Server". <br>
It will run the server on port '3001' which can be accessed by opening 'localhost:3001' in your default browser. <br>
This will allow you to run the application without issues. <br>
Or, you can go directly to the deployed link at : https://jaimit-note-taker.herokuapp.com

## License
Available for use under. <br>
![GitHub](https://img.shields.io/github/license/jaimitpatel/NoteTaker-app)
![GitHub last commit](https://img.shields.io/github/last-commit/jaimitpatel/NoteTaker-app)

 
## Contact Me

Email: (Jaimit_12@hotmail.com) <br>
Github: (https://github.com/jaimitpatel)
 
