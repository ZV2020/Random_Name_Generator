// personGenerator.js
const personGenerator = {
    surnameJson: `{  
          "count": 15,
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
    middleNameJson: `{
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
        "count": 15,
        "list": {
            "id_1": "Водитель",
            "id_2": "Механик",
            "id_3": "Учитель",
            "id_4": "Програмист",
            "id_5": "Повар",
            "id_6": "Врач",
            "id_7": "Предприниматель",
            "id_8": "Кассир",
            "id_9": "Бухгалтер",
            "id_10": "Танцовщик", 
            "id_11": "Танкист",
            "id_12": "Тракторист",
            "id_13": "Агроном",
            "id_14": "Писатель",
            "id_15": "Спортсмен",
            "id_16": "Телеведущий"
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
      return this.person.gender == this.GENDER_MALE
        ? this.randomValue(this.firstNameMaleJson)
        : this.randomValue(this.firstNameFemaleJson);
    },
  
    randomMiddleName: function () {
      let randomMiddleName = this.randomValue(this.middleNameJson);
      return this.person.gender == this.GENDER_FEMALE
        ? randomMiddleName.replace("ич", "на")
        : randomMiddleName;
    },
  
    randomBirthYear: function (min, max) {
        min = Math.ceil(1960);
        max = Math.floor(2011);
        return Math.floor(Math.random() * (max - min + 1) + min)
    },

    randomOccupation: function () {
      let randomOccupation = this.randomValue(this.occupationJson);
      return this.person.gender == this.GENDER_FEMALE
        ? randomOccupation.replace("ист", "истка") 
        : randomOccupation;
    }, 
  
    getPerson: function () {
      this.person = {};
      this.person.gender = this.randomGender();
      this.person.surname = this.randomSurname();
      this.person.firstName = this.randomFirstName();
      this.person.middleName = this.randomMiddleName();
      this.person.birthYear = this.randomBirthYear();
      this.person.occupation = this.randomOccupation();
      return this.person;
    }
  };
  
  // init.js
  function generate() {
    const initPerson = personGenerator.getPerson();
    document.getElementById("surnameOutput").innerText = initPerson.surname;
    document.getElementById("firstNameOutput").innerText = initPerson.firstName;
    document.getElementById("middleNameOutput").innerText = initPerson.middleName;
    document.getElementById("genderOutput").innerText = initPerson.gender;
    document.getElementById("birthYearOutput").innerText = initPerson.birthYear;
    document.getElementById("occupationOutput").innerText = initPerson.occupation;
  }
  
  window.addEventListener("load", () => {
    generate();
  });
  
  document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
  
  document.querySelector("#reset").addEventListener("click", () => {
    document.getElementById("surnameOutput").innerText = "Генерация фамилии";
    document.getElementById("firstNameOutput").innerText = "Генерация имени";
    document.getElementById("middleNameOutput").innerText = "Генерация фамилии";
    document.getElementById("genderOutput").innerText = "Генерация пола";
    document.getElementById("birthYearOutput").innerText = 'Генерация года рождения';
    document.getElementById("occupationOutput").innerText = 'Генерация професии';
  });
  