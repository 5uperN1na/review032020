//Synchronous Programming

function evenOrOdd(a) {
    if (a % 2 === 0) {
        return 'even';
    }

    return 'odd';
}

console.log(`15 is ${evenOrOdd(15)}`);
console.log(`20 is ${evenOrOdd(20)}`);
console.log(`25 is ${evenOrOdd(25)}`);

//Asynchronous Programming

$('button').click(function () {
    console.log('A button has been clicked!');
});

//Synchronous Callback

function greet(name) {
    alert('Hello ' + name);
}

function greetUser(callback) {
    let userName = prompt('Please enter your name.');
    callback(userName);
}

greetUser(greet);


//Asynchronous Callback 
let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

function getPosition(successCallback, geoOptions) {
    navigator.geolocation.getCurrentPosition(successCallback, error, geoOptions);
    console.log('Retrieving position');
}

function success(pos) {
    let crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

getPosition(success, options);