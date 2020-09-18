import randomNum from "../../utils/randomNum"

export default function geraArrayNumeros(quantidade) {
    let arrayNums = [];
    for (let index = 0; index < quantidade; index++) {
        let num = randomNum(1, 100);
        arrayNums.includes(num) ? index -= 1 : arrayNums.push(num);
    }
    return arrayNums.sort((a, b) => a - b);
}
