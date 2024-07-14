/*
1. if ticket number is less than 100, per ticket price: 100tk
2. if ticket number is more than 100, but less than 200. first ticket will be 100tk/ticket, rest ticket will be 90 per piece.
3.if purchase more than 200 tickets, 
    ----first 100 tickets -> 100tk,
    ----101-200 tickets -> 90tk,
    ----200+ tickets  ->70 tk
*/



var numberOfTickets = 130;

if (numberOfTickets <= 100) {
    totalPrice = numberOfTickets * 100;
    console.log('Your total cost is:', totalPrice);
}
else if (numberOfTickets > 100 && numberOfTickets <= 200) {
    totalPrice = (100 * 100) + ((numberOfTickets - 100) * 90)
    console.log('Your total cost is:', totalPrice);
}
else {
    totalPrice = (100 * 100) + (100 * 90) + ((numberOfTickets - 200) * 70)
    console.log('Your total cost is:', totalPrice);
}