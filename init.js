
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById("surnameOutput").innerText = "Генерация фамилии";
    document.getElementById("firstNameOutput").innerText = "Генерация имени";
    document.getElementById("patronymicOutput").innerText = "Генерация фамилии";
    document.getElementById("genderOutput").innerText = "Генерация пола";
    document.getElementById("birthYearOutput").innerText = 'Генерация года рождения';
    document.getElementById("occupationOutput").innerText = 'Генерация професии';
};

