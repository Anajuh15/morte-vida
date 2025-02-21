document.getElementById('calculateButton').addEventListener('click', function () {
    // Recupera os valores do formulário
    const fullName = document.getElementById('fullName').value;
    const birthdate = document.getElementById('birthdate').value;
    const deathdate = document.getElementById('deathdate').value;

    // Verifica se os campos estão preenchidos
    if (!fullName || !birthdate) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria objetos Date
    const birthDate = new Date(birthdate);
    const currentDate = new Date();

    // Verifica se a data de nascimento é válida (não é no futuro)
    if (birthDate > currentDate) {
        alert("A data de nascimento não pode ser no futuro.");
        return;
    }

    // Calcula a diferença em milissegundos
    const differenceInMilliseconds = currentDate - birthDate;

    // Converte a diferença para dias, semanas, meses e anos
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsPerWeek = millisecondsPerDay * 7;
    const millisecondsPerMonth = millisecondsPerDay * 30.4375; // Média de dias por mês
    const millisecondsPerYear = millisecondsPerDay * 365.25; // Considerando anos bissextos

    const ageInDays = Math.floor(differenceInMilliseconds / millisecondsPerDay);
    const ageInWeeks = Math.floor(differenceInMilliseconds / millisecondsPerWeek);
    const ageInMonths = Math.floor(differenceInMilliseconds / millisecondsPerMonth);
    const ageInYears = Math.floor(differenceInMilliseconds / millisecondsPerYear);

    // Exibe o resultado no formato solicitado
    const result = `
        <p>Olá, <strong>${fullName}</strong>!</p>
        <p>Você já viveu aproximadamente:</p>
        <ul>
            <li>${ageInDays.toLocaleString()} dias</li>
            <li>${ageInWeeks.toLocaleString()} semanas</li>
            <li>${ageInMonths.toLocaleString()} meses</li>
            <li>${ageInYears.toLocaleString()} anos</li>
        </ul>
    `;

    document.getElementById('result').innerHTML = result;
});