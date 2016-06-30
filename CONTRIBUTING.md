# Getting Setup
The website is using Node.js and ExpressJS for the backend infrastructure with MongoDB as our database. Please make sure that all three of these are installed before using the project.

Below are the installation instructions for Node.js for the major ecosystems:
  * Mac OS X:
    * Download the .pkg file from https://nodejs.org/en/download/. The file will be stored where you send your downloads to
    * Go to the location of the .pkg file, open it and follow the instructions
    
  * Windows: 
   * http://blog.teamtreehouse.com/install-node-js-npm-windows
   
  * Linux (Ubuntu, Linux Mint, Debian, OpenSUSE, Fedora, Arch):
   * https://nodejs.org/en/download/package-manager/
   * NOTE: If you are using Ubuntu, please use version 15.10
   
  
Instructions for installing MongoDB:
  * Mac OS X:
    * https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
    
  * Windows:
    * https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/
    
  * Linux:
    * Ubuntu: https://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/ 
    * Debian: https://docs.mongodb.org/manual/tutorial/install-mongodb-on-debian/
    * Red Hat/Fedora: https://docs.mongodb.org/manual/tutorial/install-mongodb-on-red-hat/
    * SUSE/OpenSUSE: https://docs.mongodb.org/manual/tutorial/install-mongodb-on-suse/
    * Arch (Antergos, Manjaro, etc): `Sudo pacman -S mongodb` or `yaourt -S mongodb`
    
  * IMPORTANT FOR OSX AND LINUX USERS! Running `mongod` as root (`sudo`) is a bad idea. To avoid running `sudo mongod`, follow the instructions below:
   ```shell
   # Create a /data/db directory
   sudo mkdir -p /data/db
   
   # Give /data/db access permissions
   # Mac OS X
   sudo chmod 777 /data/db
   
   # Linux
   sudo chown -R ${whoami} /data/db
   
   # Run the mongod command to make sure it worked
   mongod
   ```
   
  * For more information on MongoDB, you can look here: http://searchdatamanagement.techtarget.com/definition/MongoDB
  
Once you've installed Node.js and MongoDB, fork the project and then follow the steps below:
```shell
# Clone and change into the project directory
git clone https://github.com/YourUserName/CSC-at-CSM.git
cd CSC-at-CSM

# Add remote
git remote add upstream https://github.com/csccsm/CSC-at-CSM.git

# Install dependencies
npm install

# Start MongoDB instance
mongod

# Run server
node server.js

# If nodemon is installed, use ONE of these commands to run the server
npm start
npm run watch
nodemon server.js
```
  * NOTE: If any changes are made, you would have to hit `ctrl + c` to stop the server then start it again. Installing `nodemon` will automatically restart the server once changes are made. You can install `nodemon` by using the command `npm install -g nodemon`
    * NOTE: After you have initially installed Node.js, you can only globally install `npm` packages using `sudo`. This is also bad so you need to fix your permissions which you can do here: https://docs.npmjs.com/getting-started/fixing-npm-permissions
    * Once `nodemon` is installed, you can run the server: `nodemon server.js`
  
# Contributing and Pull Requests
It is a good idea to create a separate branch if you are working on something specific. This easily allows for others to get an idea of the change you are trying to make and allows for less conflicts when trying to merge. Here are some tips for creating a new branch:
 * Create a new branch: `git checkout -b branch-name`
 * For bug, logic, etc. fixes, your branch name should be something like `fix/name-of-fix`
 * For additions: `addition/name-of-addition` or `feature/name-of-featrue`

Once you have made changes, these are the steps to applying the changes to your fork:
  1. Run `git status` to see the current branch you are working in and see the files that have changed
  2. There are a few ways to `git add` files:
      * `git add <filename>` will add a single file
      * `git add <folder-name>` will add a folder
      * `git add <folder-name>/<filename>` will add a single file if it is in a certain folder
      * `git add .` adds everything
  3. Once you've added the file(s) changed, you now need to commit by `git commit -m 'Short message that explains the change you made'`
  4. `git pull origin master` is a check to ensure that there are no conflicts
  5. If there are no conflicts, you can now push the changes to your fork, but instead of pushing to `master`, you do `git push origin branch-name`

Submitting a Pull Request:
  * Go to the Pull requests tab in your fork, then hit the New Pull Request button
  * Then hit the Create Pull Request button

If you run into any issues, please post them in `issues`. Issues can be bugs, logic issues, or suggestions to improve the website as a whole. Also, code review is very important! When someone makes a pull request, if you have time, please review their PR.
   
  
