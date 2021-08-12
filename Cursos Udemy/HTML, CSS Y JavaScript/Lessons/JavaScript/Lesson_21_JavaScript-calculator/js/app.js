function sum(){
    let form = document.forms['form'];
    let operandA = form['operandA'];
    let operandB = form['operandB'];
    let result = parseInt(operandA.value) + parseInt(operandB.value);
    if(isNaN(result)){
        result = `This operation doesn't have numbers`;
    }
    document.getElementById('result').innerHTML = `Result: ${result}`;
}