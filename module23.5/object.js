const nayok = {
    name: 'Sakib khan',
    id: 121,
    address: "BFDC",
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'amir'],
    movies: [{ name: 'No. 1 sakib khan', year: 2010 }, { name: 'king khan', year: 2012 }],
    act: function () {
        console.log('Acting like sakib khan');
    },
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon musk',
            country: 'USA'
        }
    }
}
console.log(nayok);
console.log(nayok.address);
console.log(nayok.act);
nayok.act()