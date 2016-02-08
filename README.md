# CSC-at-CSM
The Computer Science Club at the College of San Mateo website is a collaborative website built by the memebers of the club. It will contain our upcoming events and pictures of the events we've had, links to projects that we've created and worked on, and all the memebers of the club.

# Getting Setup and Running The Project
We are using Node.js for our sever infrastructure and MongoDB as our database. Together, they make it easy to setup our backend infrastructure.

If you haven't already, below are the instructions to install Node.js:
  * Mac OS X:
   * Download the .pkg file from https://nodejs.org/en/download/. The file will be stored where you send your downloads to
   * Go to the location of the .pkg file, open it and follow the instructions
  
  * Windows: 
   * http://blog.teamtreehouse.com/install-node-js-npm-windows
  
  * Linux (Ubuntu, Linux Mint, Debian, OpenSUSE, Fedora):
   * https://nodejs.org/en/download/package-manager/

MongoDB is a NoSQL database. A NoSQL (originally referring to "non SQL" or "non relational") database provides a mechanism for storage and retrieval of data which is modeled in means other than the tabular relations used in relational databases. You can read https://www.mongodb.com/nosql-explained to get an in-depth understanding of what NoSQL really is and how it works. Below are the instructions for installing MongoDB on your system:
 * Mac OS X:
  * https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
 
 * Windows:
  * https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/
  
 * Linux:
  * Ubuntu: https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/ 
  * Debian: https://docs.mongodb.org/manual/tutorial/install-mongodb-on-debian/
  * Red Hat/Fedora: https://docs.mongodb.org/manual/tutorial/install-mongodb-on-red-hat/
  * SUSE/OpenSUSE: https://docs.mongodb.org/manual/tutorial/install-mongodb-on-suse/

IMPORTANT FOR OSX AND LINUX USERS! NEVER RUN MONGODB AS ROOT (sudo). For most Linux distributions, the installation instructions tell you to run `sudo service mongod start` to start MongoDB and `sudo service mongod stop` to stop it. DO NOT do this. To avoid this, do the following:
 * Create a `/data/db` directory in your terminal: `sudo mkdir -p /data/db`
 * Then run `sudo chmod 777 /data/db`
 * Then run `mongod` to check if it worked

Node.js tutorial: https://www.youtube.com/playlist?list=PLVjmhljdg0BEj7EpSXaxYJiCWwHwXhuV1

MongoDB tutorial: https://www.youtube.com/playlist?list=PLGLfVvz_LVvRfdt8_W0dV311Xa8SayfCY

Tutorial of how to use MongoDB with Node.js: https://www.youtube.com/watch?v=Do_Hsb_Hs3c

Once you have installed Node.js and MongoDB installed, here are the steps to getting the project onto your computer:
  1. Fork the project
  2. `git clone` the HTTPS link from your fork in your terminal/command prompt
  3. Remotely connect to the main CSC-at-CSM repo using `git remote add upstream https://github.com/csccsm/CSC-at-CSM.git`
  4. `cd` into the project directory then run `npm install` to install all dependencies
  5. Once everything is installed, run `node server.js` to launch the server

# Contributing
NOTE: When you make changes to the code, the server will not pick up those changes right away. To get the changes to work, you have to shutdown the server by hitting `ctrl + c` in the terminal/command prompt, then relaunch the server. Installing the Node.js package `nodemon` will allow you to make changes and not have to restart the server since this package knows when you make changes so it will restart for you. You can install `nodemon` by using the command `sudo npm install -g nodemon`.

It is a good idea to create a separate branch if you are working on something specific. This easily allows for others to get an idea of the change you are trying to make and allows for less conflicts when trying to merge. Here are some tips for creating a new branch:
 * Create a new branch: `git checkout -b branch-name`
 * For bug, logic, etc. fixes, your branch name should be something like `fix/name-of-fix`
 * For additions: `addition/name-of-addition` or `feature/name-of-featrue`

Once you have made changes, these are the steps to applying the changes to your fork:
  1. Run `git status` to see the current branch you are working in and see the files that have changed
  2. There are a few ways to `git add` files, but here are three:
      * `git add <filename>` will add a single file
      * `git add <folder-name>/<filename>` will add a single file if it is in a certain folder
      * `git add .` adds everything
  3. Once you've added the file(s) changed, you now need to commit by `git commit -m 'Short message that explains the change you made'`
  4. `git pull upstream master` is a check to ensure that there are no conflicts
  5. If there are no conflicts, you can now push the changes to your fork, but instead of pushing to `master`, you do `git push origin branch-name`

Submitting a Pull Request:
  * Go to the Pull requests tab in your fork, then hit the New Pull Request button
  * Then hit the Create Pull Request button

If you run into any issues, please post them in `issues`. Issues can be bugs, logic issues, or suggestions to improve the website as a whole

# Have Fun!
The club has a wide range of skill sets ranging from beginner to expert. If you have any questions, please do not hesitate to ask. If you have any ideas, do not hesitate to tell us. Some of us will not know `Node.js` or `Prase` as much as someone else does. Some of us will not know as much `CSS` or `HTML` as someone else.But we are all here to help and learn from each other. Do not be afraid to contribute! Have fun and happy coding!
