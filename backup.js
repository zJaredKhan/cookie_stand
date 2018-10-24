'use strict';

var hoursOpen = ['6:00 AM - ', '7:00 AM - ', '8:00 AM - ', '9:00 AM - ', '10:00 AM - ', '11:00 AM - ', '12:00 PM - ', '1:00 PM - ', '2:00 PM - ', '3:00 PM - ', '4:00 PM - ', '5:00 PM - ', '6:00 PM - ', '7:00 PM - ', '8:00 PM - '];

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

//constructing the franchies
var pikePlace = new Franchise('1st and Pike',23,65,6.3,hoursOpen);
var seaTac = new Franchise('SeaTac Airport', 3,24,1.2,hoursOpen);
var seaCenter = new Franchise('Seattle Center', 11,38,3.7,hoursOpen);
var capHill = new Franchise('Capitol Hill', 20,38,2.3,hoursOpen);
var alki = new Franchise('Alki Beach',2,16,4.6,hoursOpen);
var storeNames = [pikePlace, seaTac,seaCenter, capHill, alki,];

Franchise.prototype.renderHours = function() {
  this.calculateCookiesSoldEachHours();
  var storesContainer = document.getElementById('franchies');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);
  var ulEl = document.createElement('ul'); //create an element

  for(var i in this.cookiesSoldEachHour){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl);
};

// pikePlace.renderHours();
// seaTac.renderHours();
// seaCenter.renderHours();
// capHill.renderHours();
// alki.renderHours();

//create table
var rowsTotal = storeNames.length;
var cellsTotal = hoursOpen.length;


function createTable() {
  var table = document.createElement('table');
  function createTableHead() {
    
  }
for (var i = 1; i < 4; i++){
    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var text1 = document.createTextNode('Text1');
    var text2 = document.createTextNode('Text2');

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}
document.body.appendChild(table);
 
createTable();
