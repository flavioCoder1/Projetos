/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return ids;
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animals) => animals.name === animal).residents.every((resAge) => resAge.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((value) => value === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  return (species ? data.species.find((animal) => animal.name === species).residents.length
    : data.species.reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {}));
}

function calculateEntry(entrants) {
  if (!entrants || entrants === 0) return 0;
  const totalPrices = Object.keys(entrants);
  return totalPrices.reduce((prevValue, currValue) => prevValue + (entrants[currValue] * data.prices[currValue]), 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const days = Object.keys(data.hours);
  const scheduleDays = days.reduce((acc, currValue) => {
    if (currValue === 'Monday') {
      acc[currValue] = 'CLOSED';
      return acc;
    }
    acc[currValue] = `Open from ${data.hours[currValue].open}am until ${data.hours[currValue].close - 12}pm`;
    return acc;
  }, {});
  if (!dayName) {
    return scheduleDays;
  }
  return { [dayName]: scheduleDays[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const searchID = data.employees.find((empID) => empID.id === id);
  const firstSpecie = searchID.responsibleFor[0];
  const searchSpecie = data.species.find((animal) => animal.id === firstSpecie);
  const sortAnimalsAge = searchSpecie.residents.sort((animalAge1, animalAge2) => animalAge2.age - animalAge1.age);
  const oldestAnimal = [sortAnimalsAge[0].name, sortAnimalsAge[0].sex, sortAnimalsAge[0].age];
  return oldestAnimal;
}

function increasePrices(percentage) {
  const percentageAdjust = (percentage / 100) + 1;
  prices.Adult = Math.round(prices.Adult * percentageAdjust * 100) / 100;
  prices.Child = Math.round(prices.Child * percentageAdjust * 100) / 100;
  prices.Senior = Math.round(prices.Senior * percentageAdjust * 100) / 100;
}

function getEmployeeCoverage(idOrName) {
  const objEmployee = {};
  const filterEmployee = data.employees.filter((employee) => employee.firstName === idOrName || employee.lastName === idOrName || employee.id === idOrName);
  if (!idOrName) {
    data.employees.forEach((employee) => {
      const animalsResponsible = employee.responsibleFor.map((id) => data.species.find((animals) => animals.id === id).name);
      objEmployee[`${employee.firstName} ${employee.lastName}`] = animalsResponsible;
    });
    return objEmployee;
  }
  filterEmployee.forEach((employee) => {
    const animalsResponsbile = employee.responsibleFor.map((id) => data.species.find((animals) => animals.id === id).name);
    objEmployee[`${employee.firstName} ${employee.lastName}`] = animalsResponsbile;
  });
  return objEmployee;
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
