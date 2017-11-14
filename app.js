var firstAndPike = {
  min: 23,
  max: 65,
  avgCookieSale: 6.3,
  avgCust: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
  cookiesPerHour: function(){
    var output = [];
    for(var i = 0; i <= this.hours.length; i++) {
      output.push(Math.round(this.avgCookieSale * this.avgCust()));
    }
    return output;
  },
};

var seaTacAirport = {
  min: 3,
  max: 24,
  avgCookieSale: 1.2,
  avgCust: function () {
    var ranNum = Math.random() * (this.max - this.min) + this.min;
    return ranNum;
  },
};

var seattleCenter = {
  min: 11,
  max: 38,
  avgCookieSale: 3.7,
  avgCust: function () {
    var ranNum = Math.random() * (this.max - this.min) + this.min;
    return ranNum;
  },

};

var capitolHill = {
  min: 20,
  max: 38,
  avgCookieSale: 2.3,
  avgCust: function () {
    var ranNum = Math.random() * (this.max - this.min) + this.min;
    return ranNum;
  },
};

var alki = {
  min: 2,
  max: 16,
  avgCookieSale: 4.6,
  avgCust: function () {
    var ranNum = Math.random() * (this.max - this.min) + this.min;
    return ranNum;
  },
};
