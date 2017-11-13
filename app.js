var firstAndPike = {
  min: 23,
  max: 65,
  avgCookieSale: 6.3,
  avgCust: function () {
    var ranNum = Math.random() * (this.max - this.min) + this.min;
    console.log('ranNum', ranNum);
    return ranNum;
  },
};

var seaTacAirport = {
  min: 3,
  max: 24,
  avgCookieSale: 1.2
};

var seattleCenter = {
  min: 11,
  max: 38,
  avgCookieSale: 3.7
};

var capitolHill = {
  min: 20,
  max: 38,
  avgCookieSale: 2.3
};

var alki = {
  min: 2,
  max: 16,
  avgCookieSale: 4.6
};
