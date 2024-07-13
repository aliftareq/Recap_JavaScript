const phones = [
    { name: "iphone", camera: 10, storage: '32gb', price: 92000, color: 'silver' },
    { name: "xiami", camera: 10, storage: '32gb', price: 52000, color: 'silver' },
    { name: "oppo", camera: 10, storage: '32gb', price: 20000, color: 'silver' },
    { name: "nokia", camera: 10, storage: '32gb', price: 42000, color: 'silver' },
    { name: "htc", camera: 10, storage: '32gb', price: 62000, color: 'silver' },
]


function findtheCheapestPhone(phones) {
    let cheapestPhone = phones[0];
    for (i = 0; i < phones.length; i++) {
        if (phones[i].price < cheapestPhone.price) {
            cheapestPhone = phones[i]
        }
    }
    return cheapestPhone;
}

const mySelection = findtheCheapestPhone(phones)
console.log(mySelection);