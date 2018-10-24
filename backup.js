'use strict';

// Global Variables
var hoursOpen = ['6:00 AM - ', '7:00 AM - ', '8:00 AM - ', '9:00 AM - ', '10:00 AM - ', '11:00 AM - ', '12:00 PM - ', '1:00 PM - ', '2:00 PM - ', '3:00 PM - ', '4:00 PM - ', '5:00 PM - ', '6:00 PM - ', '7:00 PM - ', '8:00 PM - '];
var franchiseLocations = [];
var salesTable = document.getElementById('salesTable');
var salesInput = document.getElementById('salesInput');

//constructing the franchies
var pikePlace = franchiseLocations.push (new Franchise('1st and Pike',23,65,6.3,hoursOpen));
var seaTac = franchiseLocations.push(new Franchise('SeaTac Airport', 3,24,1.2,hoursOpen));
var seaCenter = franchiseLocations.push(new Franchise('Seattle Center', 11,38,3.7,hoursOpen));
var capHill = franchiseLocations.push(new Franchise('Capitol Hill', 20,38,2.3,hoursOpen));
var alki = franchiseLocations.push(new Franchise('Alki Beach',2,16,4.6,hoursOpen));


//franchise constructor
function Franchise(name,min,max,avgCookiesPerSale,hoursOpen){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesSoldEachHour = [];
  this.cookiesSum = [],
  this.hoursOpen = hoursOpen;

  // this.calculateCookiesSoldEachHours = calculateCookiesSoldEachHours;
  // this.calculateCustomersPerHours = calculateCustomersPerHours;
  // this.renderHours = renderHours;

}

Franchise.prototype.calculateCustomersPerHours = function() {
  var randomAmount = Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  return Math.round(randomAmount);
};


Franchise.prototype.calculateCookiesSoldEachHours = function() {
  for(var i = 0; i < 15; i++){
    var cookies = Math.round(this.calculateCustomersPerHours() * this.avgCookiesPerSale);
    this.cookiesSum.push(cookies);
    var hours = this.hoursOpen[i];
    this.cookiesSoldEachHour.push(hours + cookies);
  }
  //reducing (finding sum of array - found at https://medium.freecodecamp.org/reduce-f47a7da511a9 )
  const sum = this.cookiesSum.reduce((total, amount) => total + amount);
  this.cookiesSoldEachHour.push('Total : ' + sum + ' cookies sold');
};

