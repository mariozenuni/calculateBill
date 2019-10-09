# Calculate Bill kata

 `Create a function that takes the price of the bill, the VAT rate and the tip rate and returns the total amount the customer needs to pay, formatted as a currency string. `

## Step by step

1 - Create a folder/directory to home your kata in, eg *calculate-bill-kata*

    mkdir calculate-bill-kata

2 -  Access the folder/directory you just created

    cd calculate-bill-kata

3 - Initialise your kata folder/directory as a git repository by running the command below (notice the *.git* file when you do `ls -a` on your project directory after the command runs)

    git init

4 - Initialise your kata folder/directory as a node project by running the command below and press *enter* for each option so it accepts the default, except on `test` which we will complete with the string `jest` (notice the *package.json* file when you do `ls` on your project directory after the command runs)

    npm init

5 - Install the standard node dependencies for every node project by running `npm install` or `npm i` (notice the *node_modules* folder when you do `ls` on your project directory after the finishes running)

    npm install

6 - Install `jest`, a non-standard node dependency that will help us with our testing

    npm install jest --dev

7 - Create some files - `index.js` (entry point to our kata, notice the extension), `.gitignore` (notice the `.`) and a directory named `test` with a file inside `index.test.js` (the file where our tests will reside)

    touch index.js
    touch .gitignore
    mkdir test
    touch test/index.test.js

8 - Open VSCode by typing `code .` or by opening it mannually and navigating to the kata folder/directory

9 - Add the `node_modules` directory to the `.gitignore file. This means that the installed dependencies will not be pushed to github

10 - Inspect the `package.json` file. Check that there's a test script that refers to jest, if there's not update it like so:

    {
        "scripts": {
            "test": "jest --watch"
        }
    }

11 - Look at the task at hand - can you write it in `pseudocode`? Which steps would it take? Maybe something like:

    // create a function
    // this function will have to have 3 arguments - amount, vat and tip?
    // this function will have to return a string with a currency sign

12 - We will now start writing our first test (in `index.test.js`) and then implement the 

13 - Follow the commit path and notice how commits can signpost changes in code and testing/implementation steps. You can check what changed with each step by clicking on the hash button (the middle button of the three next to each commit). Commits are ordered from most recent to oldest.

    https://github.com/MCRcodes/calculate-bill-kata/commits

Keep a terminal window open and run your test by doing `npm test` or `npm t`

14 - Things to nose at:  
    * Jest: https://jestjs.io/  
    * Test driven development (TDD): https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80 AND https://www.freecodecamp.org/news/  an-introduction-to-test-driven-development-c4de6dce5c/  
    * Git ignore: https://git-scm.com/docs/gitignore  
    * package.json: https://flaviocopes.com/package-json/   
    * module.exports and require: https://www.sitepoint.com/understanding-module-exports-exports-node-js/

