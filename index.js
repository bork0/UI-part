let input = document.getElementById('input');
let confirm = document.getElementById('confirm');

confirm.addEventListener('click', function() {
    let array = input.value.split(`,`);
    const toNum = array.map(x => Number(x));
    console.log(toNum);

    if (toNum.length !== 12 || toNum.some(isNaN)) {
        console.log('Error! Please enter 12 numbers');
    } else {
        console.log(`The smallest number is ` + Math.min(...toNum));
        console.log(`The index of the biggest number is ` + toNum.indexOf((Math.max(...toNum))));

        const filtered = toNum.filter(num => num < 0);
        console.log(`Amount of numbers less than 0 is ` + filtered.length);

        const filteredOdd = toNum.filter(num => num % 2 !== 0);
        console.log(`Amount of odd numbers is ` + filteredOdd.length);

        const filteredEven = toNum.filter(num => num % 2 === 0);
        console.log(`Amount of even numbers is ` + filteredEven.length);
    }
});