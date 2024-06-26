
class Table{
    constructor(num1){
        this.num1 = num1;
    }

    multiplyTbales(){
        for(let i = 1; i < 10 + 1; i++ ){
            var num2 = i
            var multiply = this.num1 * num2
            console.log(`${this.num1} x ${num2} = ${multiply}`)

    }}
}


const table1 = new Table(1);
const table2 = new Table(2);
const table3 = new Table(3);
const table4 = new Table(4);
const table5 = new Table(5);
const table6 = new Table(6);
const table7 = new Table(7);
const table8 = new Table(8);
const table9 = new Table(9);
const table10 = new Table(10);

table1.multiplyTbales();
table2.multiplyTbales();
table3.multiplyTbales();
table4.multiplyTbales();
table5.multiplyTbales();
table6.multiplyTbales();
table7.multiplyTbales();
table8.multiplyTbales();
table9.multiplyTbales();
table10.multiplyTbales();