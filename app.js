'strict';

var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var stores = [];

function Store(name, min, max, avgCookie) { //constructor
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookies = avgCookie;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.getHourlyCookies();
}


Store.prototype.getHourlyCookies = function() {
  for(var i = 0; i < hours.length; i++){
    this.hourlyCookies.push(Math.floor(this.custPerHour() * this.avgCookies));
    this.dailyTotal += this.hourlyCookies[i];
  }
  return this.hourlyCookies;
};

Store.prototype.custPerHour = function() { //for avg customers
  return getRandomNum(this.minCust, this.maxCust);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function getRandomNum(minCust, maxCust) {
  return Math.round(Math.random() * (maxCust - minCust) + minCust);
}

function createTable() {
  var tableEl = document.getElementById('main-tbl');
  tableEl.appendChild(createTableHead());
  tableEl.appendChild(createTableBody());
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

var formEl = document.getElementById('form');

function onSubmit(event) {
  event.preventDefault();
  console.log('submit event', event.target.area.value);
  console.log('the form was submitted');
var formData = {
    area: event.target.area.value,
    min: event.target.min.value,
    max: event.target.min.value,
    avgCookies: event.target.avgCookies.value
  };

  var newStore = new Store (formData.area, formData.min, formData.max, formDate.avgCookies);
  newStore.createTable();
}
formEl.addEventListener('submit', onSubmit);
console.log('submit', onSubmit());
