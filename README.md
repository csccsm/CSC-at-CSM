# CSC-at-CSM
The Computer Science Club at the College of San Mateo website is a collaborative website built by the memebers of the club. It will contain our upcoming events and pictures of the events we've had, links to projects that we've created and worked on, and all the memebers of the club.

# Getting Setup and Running The Project
We are using `Node.js` for our sever infrastructure and `Parse` to store our data. These two running alongside each other allow us to not worry about setting up database logic with allowing us to configure our server to how we want it to run. 

If you haven't already, below are the instructions to install `Node.js`:
  * Mac OS X:
    * Download the .pkg file from https://nodejs.org/en/download/. The file will be stored where you send your downloads to
    * Go to the location of the .pkg file, open it and follow the instructions
  
  * Windows: 
    * http://blog.teamtreehouse.com/install-node-js-npm-windows
  
  * Linux (Preferably Ubuntu 14.04/15.10, or Linux Mint 17.3):
    * https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
    * After installing, run `sudo apt-get update` for good measure

If you don't know what `Parse` is, http://parse.com/ explains who they are and what they do.
  * To use `Parse`, you need the application and JavaScript keys which will not be given here. You must be part of the clubs `Slack` in order to obtain the keys
  * Here is an example of how `Parse` is being used
  ```javascript
  var Events = Parse.Object.extend("Events");

  $("#event-form").submit(function(event) {
     var title = $("#event-title").val();
     var description = $("#event-description").val();
  
     var newEvent = new Events();
  
     newEvent.set("title", title);
     newEvent.set("description", description);
  
     newEvent.save({
        success: function(suc) {
           console.log("Success: " + suc.message);
        },
        error: function(err) {
           console.log("Error: " + err.message)
        }
     });
  });
  ```
  * Here is a getting started guide for the JavaScript SDK: https://parse.com/docs/js/guide
  
Once you have installed `Node.js`, here are the steps to getting the project onto your computer:
  1. Fork the project
  2. `git clone` the `HTTP` link from your fork in your terminal/command prompt
  3. Connect to the main `CSC-at-CSM` branch by running `git remote add upstream https://github.com/csccsm/CSC-at-CSM.git`
  4. `cd` into the project directory then run `npm install` to install all `Node.js` dependencies
  5. Once everything is installed, run `node server.js` to launch the server

# Contributing
NOTE: When you make changes to the code, the server will not pick up those changes right away. To get the changes to work, you have to shutdown the server by hitting `ctrl + c` in the terminal/command prompt, then relaunch the server. Installing the `Node.js` package `nodemon` will allow you to make changes and not have to restart the server since this package knows when you make changes so it will restart for you. You can install `nodemon` by using the command `sudo npm install -g nodemon`.

Once you have made changes, these are the steps to applying the changes to your fork:
  1. There are a few ways to `git add` files, but here are three:
      * `git add <filename>` will add a single file
      * `git add <folder-name>/<filename>` will add a single file if it is in a certain folder
      * `git add .` adds everything
  2. Once you've added the file(s) changed, run `git commit -m 'Short message that explains the change you made'`
  3. Run `git pull upstream master` to make sure that there are no conflicts
  4. If there are no conflicts, run `git push origin master` to push the changes to your fork

Submitting a Pull Request:
  * Go to the Pull requests tab in your fork, then hit the New Pull Request button
  * Then hit the Create Pull Request button

If you run into any issues, please post them in `issues`. Issues can be bugs, logic issues, or suggestions to improve the website as a whole

# Have Fun!
The club has a wide range of skill sets ranging from beginner to expert. If you have any questions, please do not hesitate to ask. If you have any ideas, do not hesitate to tell us. Some of us will not know `Node.js` or `Prase` as much as someone else does. Some of us will not know as much `CSS` or `HTML` as someone else.But we are all here to help and learn from each other. Do not be afraid to contribute! Have fun and happy coding!
