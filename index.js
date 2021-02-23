// Code your solution in this file!


const returnFirstTwoDrivers = function(driversArr){
  let firstDrivers = []
  firstDrivers.push(driversArr[0], driversArr[1])

  return firstDrivers;
};


const returnLastTwoDrivers = function(driversArr){
  let lastDrivers = []
  lastDrivers.push(driversArr[driversArr.length - 2],driversArr[driversArr.length - 1])

  return lastDrivers;
};


const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]


function createFareMultiplier(int){
  return function(fare){
    return fare * int
  }
};


const fareDoubler = function(fare){
  const double = createFareMultiplier(2)
  return double(fare);
};


const fareTripler = function(fare){
  const triple = createFareMultiplier(3)
  return triple(fare)
};


function selectDifferentDrivers(driversArray, returnDriversFunktion){
  return returnDriversFunktion(driversArray)
};
