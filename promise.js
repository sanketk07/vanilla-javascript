//A Promise is an object representing the eventual completion or failure of an asynchronous operation. 

function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

doSomething(successCallback, failureCallback);

const promise = doSomething(); 
promise.then(successCallback, failureCallback);

doSomething().then(successCallback, failureCallback);

//chaining
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);


// chaining after an error/catch
'use strict';

new Promise(function (resolve, reject) {
    console.log('Initial');

    resolve();
}).then(function () {
    throw new Error('Something failed');

    console.log('Do this');
}).catch(function () {
    console.log('Do that');
}).then(function () {
    console.log('Do this whatever happened before');
});

