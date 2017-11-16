'strict';

var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];

function Store(name, minCust, maxCust, avgCookie) { //constructor/function definition.
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookie;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.getHourlyCookies();
}

Store.prototype.getHourlyCookies = function() { //creating a get hourly cookie series of steps.
  for(var i = 0; i < hours.length; i++){
    this.hourlyCookies.push(Math.floor(this.custPerHour() * this.avgCookies));
    this.dailyTotal += this.hourlyCookies[i];
  }
  return this.hourlyCookies;
};

Store.prototype.custPerHour = function() { //for avg customers
  return getRandomNum(this.minCust, this.maxCust);
};

function createTable() {
  var tableEl = document.getElementById('main-tbl');
  tableEl.id = 'newBody';
  tableEl.appendChild(createTableHead());
  tableEl.appendChild(createTableBody());
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function getRandomNum(minCust, maxCust) {
  return Math.round(Math.random() * (maxCust - minCust) + minCust);
}

function createTableHead() {
  var theadEl = document.createElement('thead');
  var headRow = createTableRow('', hours, 'Totals');
  theadEl.appendChild(headRow);
  return theadEl;
}

function createTableBody() {
  var tbodyEl = document.createElement('tbody');

  for(var k = 0; k < stores.length; k++) {
    var bodyRow = createTableRow(stores[k].name, stores[k].hourlyCookies, stores[k].dailyTotal);
    tbodyEl.appendChild(bodyRow);
  }
  return tbodyEl;
}

function createTableRow(vertHead, dataPoints, vertFoot) {
  var trEl = document.createElement('tr');
  var tdElOne = document.createElement('td');
  tdElOne.textContent = vertHead;
  trEl.appendChild(tdElOne);

  for(var j = 0; j < dataPoints.length; j++) {
    var tdElTwo = document.createElement('td');
    tdElTwo.textContent = dataPoints[j];
    trEl.appendChild(tdElTwo);
  }

  var tdElThree = document.createElement('td');
  tdElThree.textContent = vertFoot;
  trEl.appendChild(tdElThree);

  return trEl;
}

createTable();

var newNumber = 5;
var formEl = document.getElementById('form');

function onSubmit(event) {
  event.preventDefault();
  var myFormData = {
    name: event.target.name.value,
    minCust: event.target.minCust.value,
    maxCust: event.target.maxCust.value,
    avgCookies: event.target.avgCookies.value
  };
  console.log(myFormData);
  new Store(myFormData.name, myFormData.minCust, myFormData.maxCust, myFormData.avgCookies);
  function updateBody() {
    var bodyElupdate = document.getElementById('newBody');
    var bodyRow = createTableRow(stores[newNumber].name, stores[newNumber].hourly, stores[newNumber].dailyTotal);
    bodyElupdate.appendChild(bodyRow);
    newNumber += 1;
    return bodyElupdate;
  }
  updateBody();
}

formEl.addEventListener('submit', onSubmit);
