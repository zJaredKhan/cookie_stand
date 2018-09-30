var alki = {
  name: 'Alki Beach',
  min: 11,
  max: 38,
  avgCookiesPerSale: 3.7,
  cookiesSoldEachHour: [],
  hoursOpen: ['6:00 AM - ', '7:00 AM - ', '8:00 AM - ', '9:00 AM - ', '10:00 AM - ', '11:00 AM - ', '12:00 PM - ', '1:00 PM - ', '2:00 PM - ', '3:00 PM - ', '4:00 PM - ', '5:00 PM - ', '6:00 PM - ', '7:00 PM - ', '8:00 PM - ']
};

alki.calculateCustomersPerHours = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  return Math.round(randomAmount);
};


alki.calculateCookiesSoldEachHours = function(){
  for(var i = 0; i < 15; i++){
    var cookies = Math.round(this.calculateCustomersPerHours() * this.avgCookiesPerSale);
    var hours = this.hoursOpen[i];
    this.cookiesSoldEachHour.push(hours + cookies);
  }
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

