# Calculate Bill kata

 `Create a function that takes the price of the bill, the VAT rate and the tip rate and returns the total amount the customer needs to pay, formatted as a currency string. `

## Step by step

1. Fork this repo to your account

1. Clone down the repo:

    ```bash
        git clone <YOUR_BRANCH_URL>
    ```

2. Open the repo in you terminal:

    ```bash
        cd calculate-bill-kata
    ```

3. Install the project:

    ```bash
    npm i # shorter version of npm install
    ```

4. Run the tests:

    ```bash
    npm test # they will fail to run. We haven't written any code yet.
    ```

8. Open VSCode by typing `code .` or by opening it mannually and navigating to the kata folder/directory

12. In `index.js`, declare a function called `calculateBill`. Leave the function body empty for now. `Export` your function at the bottom of the file with:

    ```js
    module.exports = calculateBill;
    ```

1. Commit and push your work to github

11. Look at `test/index.test.js`, what is the first test expecting? - can you write it in `pseudocode`? Which steps would it take? Maybe something like:
```js
    // create a function
    // this function will have to have 3 arguments - amount, vat and tip?
    // this function will have to return a string with a currency sign
    
```

13. Write the code to pass the first test. Keep a terminal window open and run your test by doing `npm test` or `npm t`

14. Things to nose at:  
    * Jest: https://jestjs.io/  
    * Test driven development (TDD): https://medium.com/javascript-scene/tdd-changed-my-life-5af0ce099f80 AND https://www.freecodecamp.org/news/  an-introduction-to-test-driven-development-c4de6dce5c/  
    * Git ignore: https://git-scm.com/docs/gitignore  
    * package.json: https://flaviocopes.com/package-json/   
    * module.exports and require: https://www.sitepoint.com/understanding-module-exports-exports-node-js/

