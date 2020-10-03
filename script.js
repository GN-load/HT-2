const obj = [
    { name: 'Radar', price: 1300, quantity: 8 },
    { name: 'Scaner', price: 1330, quantity: 6 },
    { name: 'Droid', price: 1320, quantity: 5 },
    { name: 'Zahvat', price: 1350, quantity: 3 }
];
const arr = []
const func = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (b == 'name') {
            arr.push(a[i].name)
        } else if (b == 'price') {
            arr.push(a[i].price)
        } else if (b == 'quantity') {
            arr.push(a[i].quantity)
        }
    };
    console.log(arr)
};
func(obj, 'price')