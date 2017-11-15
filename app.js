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

new Store('1st and Pike', 23, 65, 6.3);
new Store('seaTacAirport', 3, 24, 1.2);
new Store('seattleCenter', 11, 38, 3.7);
new Store('capitolHill', 20, 38, 2.3);
new Store('alki', 2, 16, 4.6);

Store.prototype.getHourlyCookies = function() {
  for(var i = 0; i < hours.length; i++){
    this.hourlyCookies.push(Math.floor(this.getCustomersPerHour() * this.avgCookies));
    this.dailyTotal += this.hourlyCookies[i];
  }
};

Store.prototype.ranNumCust = function() { //for avg customers
  return Math.round(Math.random() * (this.max - this.min) + this.min);
};

Store.prototype.cSales = function() { // cookie sales
  return Math.round(this.ranNumCust() * this.avgCookie);
};

Store.prototype.tblhours = function() { //creates table for table hours
  var tableEl = document.getElementById('main-tbl');
  var tbody = document.createElement('tbody');
  tbody.id = 'tbodyEL';
  tableEl.appendChild(tbody);
  var trEl = document.createElement('tr');
  tbody.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = ' ';
  trEl.appendChild(tdEl);
  for(var i = 0; i <= 15; i++) {
    var time = hours[i];
    trEl.textContent = time;
    trEl.appendChild(tdEl);
  }
};

Store.prototype.cPerHour = function() {
  var totalDay = 0;
  var tableEl = document.getElementById('main-tbl');
  var tbody = document.createElement('tbody');
  tbody.id = 'tbodyEl';
  tableEl.appendChild(tbody);
  var trEl = document.createElement('tr');
  tbody.appendChild(trEl);
  var tdel = document.createElement('td');
  tdEl.textContent = stores[i].name;
  trEl.appendChild(tdEl);
  for(var i = 0; i <= 14; i++) {
    var sales = this.cSales();
    tdEl = document.createElement('td');
    var cookies = sales;
    tdEl.textContent = cookies;
    trEl.appendChild(tdEl);
  }
  var trTotal = document.createElement('td');
  tdEl.textContent = totalDay;
  tableEL.appendChild(trTotal);
};
