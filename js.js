//Js code for file first.html

var testVariable = 'asda';
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');

/*innerHTML digunakan jika ingin melakukan modifikasi pada content Html*/
/*document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;*/

function saveToCookie(key, value, onCompletion) {
    var cookieValue = key + ';' + value;
    document.cookie += cookieValue;
    onCompletion(cookieValue);
}

function saveTextValue() {
    var textValue = document.getElementsByName('nama')[0].value;
    saveToCookie('nama', textValue, showTextSuccess);
}

function showTextSuccess(result) {
    window.alert('You successfully saved [' + result + '] from the text input to your cookie.');
}

function saveRadioValue() {
    var radioValue;
    var radioOptions = document.getElementsByName('department');
    for (var index = 0; index < radioOptions.length; index++) {
        if (radioOptions[index].checked) {
            radioValue = radioOptions[index].value;
            break;
        }
    }
    saveToCookie('Department', radioValue, function (result) {
       window.alert('You did it! You saved [' + result + ']');
    });
}

//Js code for file second.html

function handleClick(callback) {
    alert('This button has been clicked');
    if (callback) {
        callback();
    } else {
        alert('Tidak Ada Passing Dari Function');
    }
}

function doMore() {
    alert('I could process more logic here');
}

function doSomethingElse() {
    document.writeln('Test Message');
}

/*document.getElementById('dateButton').addEventListener('click', clickHandle);
function clickHandle() {
    document.getElementById('dateTarget2').innerHTML = Date();
}*/

//Js code for file third.html

var sections = document.getElementsByTagName('section');

for (var index = 0; index < sections.length; index++) {
    sections[index].onclick = handleClick;
}

function handleClick (event) {
    console.log('current element: ' + this.className + ' | target element: ' + event.target.className);

    //className maksudnya nama section classnnya di file third.html
    if (this.className == 'regular') {
        event.stopPropagation();
        console.log('event propogation stopped');
    }
}

//Js code for file fourth.html

function correctMethodName() {  
    return "Output Message";
}


//Untuk membuat error javascript muncul dalam browser, tidak dalam console
try {
    var result = wrongMethodName(3);
    document.writeln(result);
}
catch (error) {
    document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>");  
}