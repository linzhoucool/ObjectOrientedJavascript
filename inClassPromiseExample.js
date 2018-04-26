const myPromiseFunc = function(sundaeFlavor) {
  return new Promise(function(resolve, reject) {
    if(sundaeFlavor == "Chocolate"){
      resolve(sundaeFlavor)
    } else {
      reject("Sorry, we only have chocolate")
    }
  })
}

function success(flavor) {
  console.log(flavor)
}

function failure(message) {
  console.log(message)
}

myPromiseFunc("Chocolate" ).then(success, failure);
myPromiseFunc("Vanilla" ).then(success, failure);
myPromiseFunc("Strawberry" ).then(success, failure);
