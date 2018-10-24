var hoursOpen = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var table = document.getElementById('stores');
var franchiseLocations = [];
var pikePlace = franchiseLocations.push(new Franchise ('Pike Place', 8, 17, 88, 5.2, 'pikeRow'));
var seaTac = franchiseLocations.push(new Franchise ('SeaTac Airport', 8, 6, 24, 1.2, 'seaTacRow'));
var southcenter = franchiseLocations.push(new Franchise ('Southcenter', 8, 11, 38, 1.9, 'southcenterRow'));
var bellevueSquare = franchiseLocations.push(new Franchise ('Bellevue Square', 8, 20, 48, 3.3, 'bellevueRow'));
var alki = franchiseLocations.push(new Franchise ('Alki', 8, 3, 24, 2.6, 'alkiRow'));

function Franchise(storeLocation, hoursOpen, min, max, avgCookiesPerSale, storeRow) {
  this.name = storeLocation;
  this.min = min;
  this.max = max;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesSoldEachHour = [];
  this.totalSales = 0;
}

Franchise.prototype.maxcalculateCustomersPerHours = function() {
  return Math.random() * (this.max - this.min) + this.min;
};
Franchise.prototype.getHourlySales = function () {
  for (var i = 0; i< hoursOpen.length; i++) {
    var rand = Math.floor(this.maxcalculateCustomersPerHours() * this.avgCookiesPerSale);
    this.cookiesSoldEachHour.push(rand);
    this.totalSales += rand;
  }
};

Franchise.prototype.render = function() {
  var storeSection = document.getElementById('stores');
  var row = document.createElement('tr');
  var td = document.createElement('td');
  td.innerHTML = this.name;
  row.appendChild(td);

  for (var i = 0; i < this.cookiesSoldEachHour.length; i++) {
    var tdHourly = document.createElement('td');
    tdHourly.innerHTML = this.cookiesSoldEachHour[i];
    row.appendChild(tdHourly);
  }

  var total = document.createElement('td');
  total.innerHTML = this.totalSales;
  row.appendChild(total);

  storeSection.appendChild(row);
};

function generateTableHeading(){
  var storeSection = document.getElementById('stores');
  var thead = document.createElement('thead');
  storeSection.appendChild(thead);
  var row = document.createElement('tr');
  thead.appendChild(row);
  var td = document.createElement('td');
  td.innerHTML = 'Location';
  row.appendChild(td);

  for (var i = 0; i < hoursOpen.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = hoursOpen[i];
    row.appendChild(td);
  }

  var tdTotal = document.createElement('th');
  tdTotal.textContent = this.totalSales;
  tdTotal.innerHTML = 'Total';
  row.appendChild(tdTotal);
  storeSection.appendChild(row);
}

generateTableHeading();
franchiseLocations.forEach(function(store){
  store.getHourlySales();
  store.render();
});

var clearFields = function(event){
  event.target.storeLocal.value = null;
  event.target.minInput.value = null;
  event.target.maxInput.value = null;
  event.target.avgInput.value = null;
};

var formEl = document.getElementById('form');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  var newStoreName = event.target.storeLocal.value;
  var newMin = parseInt(event.target.minInput.value);
  var newMax = parseInt(event.target.maxInput.value);
  var newAvg = parseFloat(event.target.avgInput.value);
  var newRow = newStoreName + 'Row';
  var newStore = new Franchise(newStoreName, 8, newMin, newMax, newAvg, newRow);
  newStore.getHourlySales();
  newStore.render();
  franchiseLocations.push(newStore);
  clearFields(event);
});
