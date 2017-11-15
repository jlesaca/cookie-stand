'strict';

var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var stores = [];
console.log(stores);

function Store(name, min, max, avgCookie) { //constructor
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  stores.push(this);
}

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('seaTacAirport', 3, 24, 1.2);
var seattleCenter = new Store('seattleCenter', 11, 38, 3.7);
var capitolHill = new Store('capitolHill', 20, 38, 2.3);
var alki = new Store('alki', 2, 16, 4.6);

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

//
// var seaTacAirport = {
//   min: 3,
//   max: 24,
//   avgCookieSale: 1.2,
//   avgCust: function () {
//     return Math.random() * (this.max - this.min) + this.min;
//   },
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
//   cookiesPerHour: function(){
//     var output = [];
//     for(var i = 0; i <= this.hours.length; i++) {
//       output.push(Math.round(this.avgCookieSale * this.avgCust()));
//     }
//     return output;
//   },
// };
//
// var seattleCenter = {
//   min: 11,
//   max: 38,
//   avgCookieSale: 3.7,
//   avgCust: function () {
//     return Math.random() * (this.max - this.min) + this.min;
//   },
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
//   cookiesPerHour: function(){
//     var output = [];
//     for(var i = 0; i <= this.hours.length; i++) {
//       output.push(Math.round(this.avgCookieSale * this.avgCust()));
//     }
//     return output;
//   },
//
// };
//
// var capitolHill = {
//   min: 20,
//   max: 38,
//   avgCookieSale: 2.3,
//   avgCust: function () {
//     return Math.random() * (this.max - this.min) + this.min;
//   },
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
//   cookiesPerHour: function(){
//     var output = [];
//     for(var i = 0; i <= this.hours.length; i++) {
//       output.push(Math.round(this.avgCookieSale * this.avgCust()));
//     }
//     return output;
//   },
// };
//
// var alki = {
//   min: 2,
//   max: 16,
//   avgCookieSale: 4.6,
//   avgCust: function () {
//     return Math.random() * (this.max - this.min) + this.min;
//   },
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
//   cookiesPerHour: function(){
//     var output = [];
//     for(var i = 0; i <= this.hours.length; i++) {
//       output.push(Math.round(this.avgCookieSale * this.avgCust()));
//     }
//     return output;
//   },
// };
