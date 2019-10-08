const calculateBill = (price, vat, tip) => {
    const bill = price + (price * vat / 100) + tip;

    return "£" + bill;
}

module.exports =  calculateBill;