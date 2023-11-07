function insert(value) {
    const resultado = document.getElementById('resultado');
    resultado.value += value;
}

function calcular() {
    const resultado = document.getElementById('resultado');
    let expression = resultado.value;
    try {
        let result = eval(expression);
        resultado.value = result;
        historico(expression);
    } catch (error) {
        resultado.value = 'Erro';
    }
}

function clean() 
{
    document.getElementById('resultado').value = '';
}

function back()
{
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length -1);
}

function historico(expression) 
{
    const historyTable = document.querySelector('.history table');
    const newRow = historyTable.insertRow(-1);
    const dateCell = newRow.insertCell(0);
    const expressionCell = newRow.insertCell(1);
    

    expressionCell.textContent = expression;
    dateCell.textContent = new Date().toLocaleString();
}