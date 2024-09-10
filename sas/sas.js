function classificarNota() {
    var nota = parseFloat(document.getElementById('nota').value);
    
    if (isNaN(nota) || nota < 0 || nota > 10) {
        document.getElementById('resultado').innerText = 'Por favor, insira uma nota válida entre 0 e 10.';
        return;
    }

    var conceito;
    if (nota >= 9) {
        conceito = 'A';
    } else if (nota >= 7) {
        conceito = 'B';
    } else if (nota >= 5) {
        conceito = 'C';
    } else if (nota >= 3) {
        conceito = 'D';
    } else {
        conceito = 'E';
    }

    document.getElementById('resultado').innerText = `Nota: ${nota.toFixed(1)} - Conceito: ${conceito}`;
}