// - Calculate Bill - Create a function that takes the price of the bill, the VAT rate and the tip 
// rate and returns the total amount the customer needs to pay, formatted as a currency string.


// create a function
// takes price, VAT and tip rate as numbers
// retuns the total ammout formated as a currency string
// calculation should be -> amount + (amount * vat / 100) ) + tip 



const errorMessage = "error";

function calculateBill(price, vat, tip){

   if(price===parseInt(price) && vat===parseInt(vat) && tip===parseInt(tip)){

        return  `${"£"+(price + (price * vat / 100) + tip)}`

   }else {
    return  errorMessage;
   }


   

    

}; 







console.log(calculateBill("100","20","10"))











module.exports = calculateBill;