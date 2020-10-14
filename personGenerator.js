// personGenerator.js
const personGenerator = {
    surnameJson: `{  
          "count": 16,
          "list": {
              "id_1": "Иванов",
              "id_2": "Смирнов",
              "id_3": "Кузнецов",
              "id_4": "Васильев",
              "id_5": "Петров",
              "id_6": "Михайлов",
              "id_7": "Новиков",
              "id_8": "Федоров",
              "id_9": "Кравцов",
              "id_10": "Николаев",
              "id_11": "Семёнов",
              "id_12": "Славин",
              "id_13": "Степанов",
              "id_14": "Павлов",
              "id_15": "Александров",
              "id_16": "Морозов"
          }
      }`,
    firstNameMaleJson: `{
          "count": 10,
          "list": {     
              "id_1": "Александр",
              "id_2": "Максим",
              "id_3": "Иван",
              "id_4": "Артем",
              "id_5": "Дмитрий",
              "id_6": "Никита",
              "id_7": "Михаил",
              "id_8": "Даниил",
              "id_9": "Егор",
              "id_10": "Андрей"
          }
      }`,
    firstNameFemaleJson: `{
          "count": 10,
          "list": {     
              "id_1": "Александра",
              "id_2": "Марфа",
              "id_3": "Иванна",
              "id_4": "Алевтина",
              "id_5": "Дина",
              "id_6": "Нина",
              "id_7": "Милена",
              "id_8": "Дарья",
              "id_9": "Ева",
              "id_10": "Алевтина"
          }
      }`,
      patronymicJson: `{
          "count": 10,
          "list": {  
              "id_1": "Александрович",
              "id_2": "Максимович",
              "id_3": "Иванович",
              "id_4": "Артемьевич",
              "id_5": "Дмитриевич",
              "id_6": "Никитович",
              "id_7": "Михаилович",
              "id_8": "Даниилович",
              "id_9": "Егорович",
              "id_10": "Андреевич"
          }
      }`,
    occupationJson: `{  
          "count": 16,
          "list": {
              "id_1": "Водитель",
              "id_2": "Архитектор",
              "id_3": "Персональный тренер",
              "id_4": "Програмист",
              "id_5": "Повар",
              "id_6": "Врач",
              "id_7": "Предприниматель",
              "id_8": "Кассир",
              "id_9": "Бухгалтер",
              "id_10": "Библиотекарь", 
              "id_11": "Танкист",
              "id_12": "Тракторист",
              "id_13": "Агроном",
              "id_14": "Фермер",
              "id_15": "Машинист",
              "id_16": "Пианист"
          }
      }`,  
    monthJson: `{  
          "count": 12,
          "list": {
              "id_1": "Января",
              "id_2": "Февраля",
              "id_3": "Марта",
              "id_4": "Апреля",
              "id_5": "Мая",
              "id_6": "Июня",
              "id_7": "Июля",
              "id_8": "Августа",
              "id_9": "Сентября",
              "id_10": "Октября", 
              "id_11": "Ноября",
              "id_12": "Декабря"
          }
      }`,  
  
    GENDER_MALE: "Мужчина",
    GENDER_FEMALE: "Женщина",
  
    randomIntNumber: (max = 1, min = 0) =>
      Math.floor(Math.random() * (max - min + 1) + min),
  
    randomValue: function (json) {
      const obj = JSON.parse(json);
      const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
      return obj.list[prop];
    },

    randomGender: function () {
      return (this.randomIntNumber(1, 0) > 0)
        ? this.GENDER_MALE
        : this.GENDER_FEMALE;
    },
  
    randomSurname: function () {
      const randomSurename = this.randomValue(this.surnameJson);
      return (this.person.gender == this.GENDER_FEMALE)
        ? `${randomSurename}a`
        : randomSurename;
        
    },
  
    randomFirstName: function () {
      return this.person.gender == this.GENDER_FEMALE
        ? this.randomValue(this.firstNameFemaleJson)
        : this.randomValue(this.firstNameMaleJson);
    },
  
    randomPatronymic: function () {
      let randomPatronymic = this.randomValue(this.patronymicJson);
      return this.person.gender == this.GENDER_FEMALE
        ? randomPatronymic.replace("ич", "на")
        : randomPatronymic;
    },

    // randomBirthDay: function (min, max) {
    //   min = Math.ceil(1);
    //   max = Math.floor(31);
    //   return Math.floor(Math.random() * (max - min + 1) + min)
    // },
  
    // randomBirthYear: function (min, max) {
    //     min = Math.ceil(1960);
    //     max = Math.floor(2011);
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    // },

    

    randomOccupation: function () {
      let randomOccupation = this.randomValue(this.occupationJson);
      return this.person.gender == this.GENDER_FEMALE
        ? randomOccupation.replace("ист", "истка") 
        : randomOccupation;
    }, 

    randomMonth: function () {

      return this.randomValue(this.monthJson);

  },    
  
    getPerson: function () {
      this.person = {};
      this.person.gender = this.randomGender();
      this.person.surname = this.randomSurname();
      this.person.firstName = this.randomFirstName();
      this.person.patronymic = this.randomPatronymic();
      this.person.occupation = this.randomOccupation();
      let date='';
      let month='';
      month = this.randomMonth();
      if ((month == "апрель") || (month == "июнь") || (month == "сентябрь") || (month == "ноябрь")){
          date = Math.floor(Math.random() * (30 - 1 + 1) + 1);
      }
      if (month == "февраль") {
          date = Math.floor(Math.random() * (29 - 1 + 1) + 1);
      } else {
          date = Math.floor(Math.random() * (31 - 1 + 1) + 1);    
      }

      this.person.year = Math.floor(Math.random() * (2020 - 1950 + 1) + 1950);

      date = String(date)+' '+String(month)+' '+String(Math.floor(Math.random() * (2020 - 1950 + 1) + 1950));
      this.person.year = date;
      return this.person;
  }
}
  
  // init.js
  function generate() {
    const initPerson = personGenerator.getPerson();
    document.getElementById("surnameOutput").innerText = 'Фамилия:' + ' ' + initPerson.surname;
    document.getElementById("firstNameOutput").innerText = 'Имя:' + ' ' + initPerson.firstName;
    document.getElementById("patronymicOutput").innerText = 'Отчество:' + ' ' + initPerson.patronymic;
    document.getElementById("genderOutput").innerText = initPerson.gender;
    document.getElementById("birthYearOutput").innerText = initPerson.year;
    document.getElementById("occupationOutput").innerText = initPerson.occupation;
    
  }
  
  // window.addEventListener("load", () => {
  //   generate();
  // });
  
  document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  document.querySelector("#reset").addEventListener("click", () => {
    document.getElementById("surnameOutput").innerText = "Генерация фамилии";
    document.getElementById("firstNameOutput").innerText = "Генерация имени";
    document.getElementById("patronymicOutput").innerText = "Генерация фамилии";
    document.getElementById("genderOutput").innerText = "Генерация пола";
    document.getElementById("birthYearOutput").innerText = 'Генерация года рождения';
    document.getElementById("occupationOutput").innerText = 'Генерация професии';
    
  });
  