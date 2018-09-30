'use strict';

var pikePlace = {
  name: 'First and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
  cookiesSum: [],
  hoursOpen: ['6:00 AM - ', '7:00 AM - ', '8:00 AM - ', '9:00 AM - ', '10:00 AM - ', '11:00 AM - ', '12:00 PM - ', '1:00 PM - ', '2:00 PM - ', '3:00 PM - ', '4:00 PM - ', '5:00 PM - ', '6:00 PM - ', '7:00 PM - ', '8:00 PM - ']
};

pikePlace.calculateCustomersPerHours = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  return Math.round(randomAmount);
};


pikePlace.calculateCookiesSoldEachHours = function(){
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
console.log(pikePlace.cookiesSoldEachHour);

pikePlace.renderHours = function(){
  this.calculateCookiesSoldEachHours();
  var storesContainer = document.getElementById('pikePlace');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  console.log(headerEl);
  headerEl.textContent = this.name;
  console.log(headerEl.textContent);
  storesContainer.appendChild(headerEl);
  var ulEl = document.createElement('ul'); //create an element

  for(var i in this.cookiesSoldEachHour){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl);
};
pikePlace.renderHours();

var seaTac = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
  cookiesSoldEachHour: [],
  cookiesSum: [],
  hoursOpen: ['6:00 AM - ', '7:00 AM - ', '8:00 AM - ', '9:00 AM - ', '10:00 AM - ', '11:00 AM - ', '12:00 PM - ', '1:00 PM - ', '2:00 PM - ', '3:00 PM - ', '4:00 PM - ', '5:00 PM - ', '6:00 PM - ', '7:00 PM - ', '8:00 PM - ']
};

seaTac.calculateCustomersPerHours = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  return Math.round(randomAmount);
};


seaTac.calculateCookiesSoldEachHours = function(){
  for(var i = 0; i < 15; i++){
    var cookies = Math.round(this.calculateCustomersPerHours() * this.avgCookiesPerSale);
    var hours = this.hoursOpen[i];
    this.cookiesSum.push(cookies);
    this.cookiesSoldEachHour.push(hours + cookies);
  }
  //reducing (finding sum of array - found at https://medium.freecodecamp.org/reduce-f47a7da511a9 )
  const sum = this.cookiesSum.reduce((total, amount) => total + amount);
  this.cookiesSoldEachHour.push('Total : ' + sum + ' cookies sold');
};
console.log(seaTac.cookiesSoldEachHour);

seaTac.renderHours = function(){
  this.calculateCookiesSoldEachHours();
  var storesContainer = document.getElementById('seaTac');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  console.log(headerEl);
  headerEl.textContent = this.name;
  console.log(headerEl.textContent);
  storesContainer.appendChild(headerEl);
  var ulEl = document.createElement('ul'); //create an element

  for(var i in this.cookiesSoldEachHour){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl);
};
seaTac.renderHours();

var seaCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookiesPerSale: 3.7,
  cookiesSoldEachHour: [],
  cookiesSum: [],
  hoursOpen: ['6:00 AM - ', '7:00 AM - ', '8:00 AM - ', '9:00 AM - ', '10:00 AM - ', '11:00 AM - ', '12:00 PM - ', '1:00 PM - ', '2:00 PM - ', '3:00 PM - ', '4:00 PM - ', '5:00 PM - ', '6:00 PM - ', '7:00 PM - ', '8:00 PM - ']
};

seaCenter.calculateCustomersPerHours = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  return Math.round(randomAmount);
};


seaCenter.calculateCookiesSoldEachHours = function(){
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
console.log(seaCenter.cookiesSoldEachHour);

seaCenter.renderHours = function(){
  this.calculateCookiesSoldEachHours();
  var storesContainer = document.getElementById('seaCenter');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  console.log(headerEl);
  headerEl.textContent = this.name;
  console.log(headerEl.textContent);
  storesContainer.appendChild(headerEl);
  var ulEl = document.createElement('ul'); //create an element

  for(var i in this.cookiesSoldEachHour){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl);
};
seaCenter.renderHours();

var capHill = {
  name: 'Capitol Hill',
  min: 11,
  max: 38,
  avgCookiesPerSale: 3.7,
  cookiesSoldEachHour: [],
  cookiesSum: [],
  hoursOpen: ['6:00 AM - ', '7:00 AM - ', '8:00 AM - ', '9:00 AM - ', '10:00 AM - ', '11:00 AM - ', '12:00 PM - ', '1:00 PM - ', '2:00 PM - ', '3:00 PM - ', '4:00 PM - ', '5:00 PM - ', '6:00 PM - ', '7:00 PM - ', '8:00 PM - ']
};

capHill.calculateCustomersPerHours = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  return Math.round(randomAmount);
};


capHill.calculateCookiesSoldEachHours = function(){
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
console.log(capHill.cookiesSoldEachHour);

capHill.renderHours = function(){
  this.calculateCookiesSoldEachHours();
  var storesContainer = document.getElementById('capHill');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  console.log(headerEl);
  headerEl.textContent = this.name;
  console.log(headerEl.textContent);
  storesContainer.appendChild(headerEl);
  var ulEl = document.createElement('ul'); //create an element

  for(var i in this.cookiesSoldEachHour){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl);
};
capHill.renderHours();

var alki = {
  name: 'Alki Beach',
  min: 11,
  max: 38,
  avgCookiesPerSale: 3.7,
  cookiesSoldEachHour: [],
  cookiesSum: [],
  hoursOpen: ['6:00 AM - ', '7:00 AM - ', '8:00 AM - ', '9:00 AM - ', '10:00 AM - ', '11:00 AM - ', '12:00 PM - ', '1:00 PM - ', '2:00 PM - ', '3:00 PM - ', '4:00 PM - ', '5:00 PM - ', '6:00 PM - ', '7:00 PM - ', '8:00 PM - ']
};

alki.calculateCustomersPerHours = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  return Math.round(randomAmount);
};


alki.calculateCookiesSoldEachHours = function(){
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
console.log(alki.cookiesSoldEachHour);

alki.renderHours = function(){
  this.calculateCookiesSoldEachHours();
  var storesContainer = document.getElementById('alki');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  console.log(headerEl);
  headerEl.textContent = this.name;
  console.log(headerEl.textContent);
  storesContainer.appendChild(headerEl);
  var ulEl = document.createElement('ul'); //create an element

  for(var i in this.cookiesSoldEachHour){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl);
};
alki.renderHours();


