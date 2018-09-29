'use strict';

var pikePlace = {
  name: 'First and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
};

pikePlace.calculateCustomersPerHours = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  return Math.round(randomAmount * this.avgCookiesPerSale);
};
console.log(pikePlace.calculateCustomersPerHours());

pikePlace.calculateCookiesSoldEachHours = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.pikePlace.calculateCustomersPerHours());
  }
};
console.log(pikePlace.calculateCookiesSoldEachHours());

pikePlace.renderHours = function(){
  this.calculateCookiesSoldEachHours();
  var storesContainer = document.getElementById('stores');
  var headerEl = document.createElement('h2');
  console.log(headerEl);
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
pikePlace.calculateCookiesSoldEachHours();
