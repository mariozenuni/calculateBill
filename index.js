const calculateBill = (price, vat, tip) => {
    if (typeof price !== 'number') {
        return "error";
    }

    if (typeof vat !== 'number') {
        return "error";
    }

    if (typeof tip !== 'number') {
        return "error";
    }
    
    const bill = price + (price * vat / 100) + tip;

    return "£" + bill;
}

module.exports =  calculateBill;