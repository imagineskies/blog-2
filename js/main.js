'use strict';
// Variable
var pdwCopyBtn = document.getElementById('pdwCopy');
var numberSlideRange = $("#numberSlide").val();
var techMenuTemp = document.getElementById('techMenuTemp');
var techMenuValue = 0;
var poemBody = document.getElementById('poemBody');
var formRecTextbox = document.getElementById('formRecTextbox');
var checkMarkOnePlace = 'clicked';
var checkMarkTwoPlace = 'clicked';
var checkMarkThreePlace = 'unclicked';
var checkMarkFourPlace = 'unclicked';
var checkMarkFivePlace = 'unclicked';
var checkMarkSixPlace = 'unclicked';
var checkMarkSevenPlace = 'unclicked';
var checkMarkEightPlace = 'unclicked';
var checkMarkNinePlace = 'unclicked';
var checkMarkTenPlace = 'unclicked';
var checkMarkElevenPlace = 'unclicked';
var harded = 'unactive';
var base64Place = 'encode';
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "";
var special = "";
var extnd = "";
/* var dataTransferAmount = document.getElementById('dataTransferAmount').value;
var dataTransferSpeed = document.getElementById('dataTransferSpeed').value;
var estimatedTimeDays = document.getElementById('estimatedTimeDays').innerHTML;
var estimatedTimeHours = document.getElementById('estimatedTimeHours').innerHTML;
var estimatedTimeMinutes = document.getElementById('estimatedTimeMinutes').innerHTML;
var estimatedTimeSeconds = document.getElementById('estimatedTimeSeconds').innerHTML;
*/
var dtcStart = document.getElementById('dtcStart');
var dataSize = 0;
var dataSpeed = 0;
var factorAmount;
var gameSubMenuTop = $('#gameSubMenuTop');
var shortImgScale = document.getElementById('shortImgScale');
var longImgScale = document.getElementById('longImgScale');

// Constants
const checkMarkOne = document.querySelector('#checkMarkOne');
const checkMarkTwo = document.querySelector('#checkMarkTwo');
const checkMarkThree = document.querySelector('#checkMarkThree');
const checkMarkFour = document.querySelector('#checkMarkFour');
const checkMarkFive = document.querySelector('#checkMarkFive');
const checkMarkSix = document.querySelector('#checkMarkSix');
const checkMarkSeven = document.querySelector('#checkMarkSeven');
const checkMarkEight = document.querySelector('#checkMarkEight');
const checkMarkEleven = document.querySelector('#checkMarkEleven');
const base64ConvertBtn = $('#base64ConvertButton')[0];
const base64Title = $('#base64Title')[0];
const base64Output = $("#base64EncodeTextBoxEnd")[0];
const base64Input = $("#base64EncodeTextBoxStart")[0];
const numberSlider = $("#numberSlide")[0];
const content = $('content');
const mainNav = $('menuTemp');
const textOne = $('textOne');
const textTwo = $('textTwo');

/*
____________________________________________________________________________________
Functions / Actions
____________________________________________________________________________________
*/

var imageOneScore= 1400;
var imageTwoScore= 1400;
var imageThreeScore= 1400;
var imageFourScore= 1400;
var imageFiveScore= 1400;
var imageSixScore= 1400;
const testingData = ["#imageOne", "#imageTwo", "#imageThree", "#imageFour", "#imageFive", "#imageSix"];
function createTestingPairs(data) {
  let pairs = [];

  // Loop through the array to form all unique pairs
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      pairs.push([data[i], data[j]]);
    }
  }

  return pairs;
}
// Example usage:
const pairs = createTestingPairs(testingData);
console.log(pairs);
console.log("Number of pairs: ", pairs.length);



document.documentElement.style.setProperty("--figureShortHight", shortImgScale);
document.documentElement.style.setProperty("--figureLongHight", longImgScale);

/* Number Counter */
function numberCount(item) {
  item = item.innerText;
  item = item.split(/[\s]+|(?!['])\W+/);
  item = item.filter(word => word.length > 0);
  item = item.length;
  item = item / 200;
  item = Math.ceil(item)
  item = item + " min";
  return item;
}

/* Data Transfer Calculator */

function roundUp(num, precision) {
  precision = Math.pow(10, precision);
  return Math.ceil(num / precision);
}

function roundDown(num, precision) {
  precision = Math.pow(10, precision);
  return Math.ceil(num * precision);
}

function calculateSpeed() {

  var dataTransferAmount = document.getElementById('dataTransferAmount').value;
  var dataAmountType = document.getElementById('dataAmountType').innerHTML;
  var dataTransferSpeed = document.getElementById('dataTransferSpeed').value;
  var dataTransferType = document.getElementById('dataTransferType').innerHTML;

  console.log('starting calculateSpeed')

  // Determin Data Size - Measured in Bytes

  if (dataAmountType == 'B') {
    dataSize = dataTransferAmount;
  } else if (dataAmountType == 'Kb') {
    dataSize = dataTransferAmount * 1024;
  } else if (dataAmountType == 'Mb') {
    dataSize = dataTransferAmount * 1024 * 1024;
  } else if (dataAmountType == 'Gb') {
    dataSize = dataTransferAmount * 1024 * 1024 * 1024;
  } else if (dataAmountType == 'Tb') {
    dataSize = dataTransferAmount * 1024 * 1024 * 1024 * 1024;
  }

  console.log('dataSize is ' + dataSize);

  // Determin Data Speed - Measured in Bits

  if (dataTransferType == 'Bps/s') {
    dataSpeed = dataTransferSpeed;
  } else if (dataTransferType == 'Kbps/s') {
    dataSpeed = dataTransferSpeed * 1024;
  } else if (dataTransferType == 'Mbps/s') {
    dataSpeed = dataTransferSpeed * 1024 * 1024;
  } else if (dataTransferType == 'Gbps/s') {
    dataSpeed = dataTransferSpeed * 1024 * 1024 * 1024;
  }

  console.log('dataSpeed is ' + dataSpeed);

  // Calculate Estimated Time

  estimatedTimeSeconds = dataSize * 8 / dataSpeed;
  estimatedTimeMinutes = estimatedTimeSeconds / 60;
  estimatedTimeHours = estimatedTimeMinutes / 60;
  estimatedTimeDays = estimatedTimeHours / 24;

  // Here I round up the total to the closest hundredths placec

  estimatedTimeSeconds = Math.round(estimatedTimeSeconds * 100)/100;
  estimatedTimeMinutes = Math.round(estimatedTimeMinutes * 100)/100;
  estimatedTimeHours = Math.round(estimatedTimeHours * 100)/100;
  estimatedTimeDays = Math.round(estimatedTimeDays);

  // If the amount of time is less than one then a zero will populate

  if (estimatedTimeDays < 1) {
    estimatedTimeDays = "00";
  }

  if (estimatedTimeHours < 1) {
    estimatedTimeHours = "00";
  }

  if (estimatedTimeMinutes < 1) {
    estimatedTimeMinutes = "00";
  }

  if (estimatedTimeSeconds < 1) {
    estimatedTimeSeconds = "00";
  }

  console.log('estimatedTimeSeconds is ' + estimatedTimeSeconds);
  console.log('estimatedTimeMinutes is ' + estimatedTimeMinutes);
  console.log('estimatedTimeHours is ' + estimatedTimeHours);
  console.log('estimatedTimeDays is ' + estimatedTimeDays);

  // The last things I do it set the page to display all estimatedTime

  document.getElementById('estimatedTimeDays').innerHTML = estimatedTimeDays;
  document.getElementById('estimatedTimeHours').innerHTML = estimatedTimeHours;
  document.getElementById('estimatedTimeMinutes').innerHTML = estimatedTimeMinutes;
  document.getElementById('estimatedTimeSeconds').innerHTML = estimatedTimeSeconds;

  // If anything comes up as NaN, make it a number.

  if (isNaN(estimatedTimeSeconds)) {
    document.getElementById('estimatedTimeDays').innerHTML = "00";
    document.getElementById('estimatedTimeHours').innerHTML = "00";
    document.getElementById('estimatedTimeMinutes').innerHTML = "00";
    document.getElementById('estimatedTimeSeconds').innerHTML = "00";
  }
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(".sliding-link").click(function(e) {
  e.preventDefault();
  var aid = $(this).attr("href");
  console.log(aid)
  $('html,body').animate({
    scrollTop: $(aid).offset().top - 100
  }, 1500);
});

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var h = new Uint32Array(1);
        window.crypto.getRandomValues(h);
        var j = h[0] % (i + 1);
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function clearBox(elementID){
  document.getElementById(elementID).innerHTML = "";
}

function removeCheck(i) {
  i.classList.add('checkMarkEmpty');
  i.classList.remove('checkMarkFull');
}

function addCheck(i) {
  i.classList.add('checkMarkFull');
  i.classList.remove('checkMarkEmpty');
}

function adLCL() {
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
}

function addSN() {
  var numbers = '0123456789';
}

function addNB() {
  var special = '!@#$%^&*()';
}

function addEA() {
  var extnd = '€‚¢ƒÆµ„ŒÇøŠ•‡†';
}

function makeid(length) {
  var characterTotal = upperCase + lowerCase + numbers + special + extnd;
  if (characterTotal == "") {
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "You must make a selection for this to work.";
  }
  else if (harded == 'active') {
    var characterTotal = characterTotal.shuffle();
    var result = '';
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "";
    var charactersLength = characterTotal.length;
    for (var i = 0; i < length; i++) {
      result += characterTotal.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
  else {
    var result = '';
    document.getElementById("numberSlideTextBoxLabel").innerHTML = "";
    var charactersLength = characterTotal.length;
    for (var i = 0; i < length; i++) {
      result += characterTotal.charAt(Math.floor(Math.random() * charactersLength));
    }
  }
  return result;
}

function slideRange() {
  var numberSlideRange = $("#numberSlide").val();
  document.getElementById("thumb").innerHTML = numberSlideRange;
  document.getElementById("numberSlideTextBox").value = "";
  document.getElementById("numberSlideTextBox").value = makeid(numberSlideRange);
}

function base64Convertion() {
  if (base64Place == 'encode') {
    // Encodes text to base64
    base64Output.value = btoa(base64Input.value);
  } else {
    // Decodes text to base64
    base64Output.value = atob(base64Input.value);
  }
}


function techMenuTempDisply() {
  if (techMenuValue === 0) {
    techMenuValue = 1;
    techMenuTemp.style.display = "block";
    console.log(techMenuValue)
  } else {
    techMenuValue = 0;
    techMenuTemp.style.display = "none";
    console.log(techMenuValue)
  }
}

/*
____________________________________________________________________________________
Event Listeners
____________________________________________________________________________________
*/

/*window.onscroll = function() {
  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
  console.log(scrollPos);
  if (scrollPos <= 115) {
    menuTemp.classList.remove('animate__animated', 'animate__slideInDown');
    menuTemp.classList.add('animate__animated', 'animate__slideOutUp');
  }
  if (scrollPos >= 115) {
    menuTemp.classList.remove('animate__animated', 'animate__slideOutUp', 'hidden');
    menuTemp.classList.add('animate__animated', 'animate__slideInDown');
  }
}*/

checkMarkOne.addEventListener('click', function() {
  if (checkMarkOnePlace == 'unclicked') {
    addCheck(checkMarkOne);
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    checkMarkOnePlace = 'clicked';
  } else {
    removeCheck(checkMarkOne);
    upperCase = "";
    checkMarkOnePlace = 'unclicked';
  }
});

checkMarkTwo.addEventListener('click', function() {
  if (checkMarkTwoPlace == 'unclicked') {
    addCheck(checkMarkTwo);
    lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    checkMarkTwoPlace = 'clicked';
  } else {
    removeCheck(checkMarkTwo);
    lowerCase = "";
    checkMarkTwoPlace = 'unclicked';
  }
});

checkMarkThree.addEventListener('click', function() {
  if (checkMarkThreePlace == 'unclicked') {
    addCheck(checkMarkThree);
    numbers = '0123456789';
    checkMarkThreePlace = 'clicked';
  } else {
    removeCheck(checkMarkThree);
    numbers = "";
    checkMarkThreePlace = 'unclicked';
  }
});

checkMarkFour.addEventListener('click', function() {
  if (checkMarkFourPlace == 'unclicked') {
    addCheck(checkMarkFour);
    special = '!@#$%^&*()';
    checkMarkFourPlace = 'clicked';
  } else {
    removeCheck(checkMarkFour);
    special = "";
    checkMarkFourPlace = 'unclicked';
  }
});

checkMarkSeven.addEventListener('click', function() {
  if (checkMarkSevenPlace == 'unclicked') {
    addCheck(checkMarkSeven);
    extnd = '€‚¢ƒÆµ„ŒÇøŠ•‡†'
    checkMarkSevenPlace = 'clicked';
  } else {
    removeCheck(checkMarkSeven);
    extnd = "";
    checkMarkSevenPlace = 'unclicked';
  }
});

checkMarkEight.addEventListener('click', function() {
  if (checkMarkEightPlace == 'unclicked') {
    addCheck(checkMarkEight);
    numberSlider.max = 256;
    checkMarkEightPlace = 'clicked';
  } else {
    removeCheck(checkMarkEight);
    numberSlider.max = 64;
    checkMarkEightPlace = 'unclicked';
  }
});

checkMarkNine.addEventListener('click', function() {
  if (checkMarkNinePlace == 'unclicked') {
    addCheck(checkMarkNine);
		harded = 'active';
    checkMarkNinePlace = 'clicked';
  } else {
    removeCheck(checkMarkNine);
		harded = 'unactive';
    checkMarkNinePlace = 'unclicked';
  }
});



// 5 is encode, 6 is decode

checkMarkFive.addEventListener('click', function() {
  removeCheck(checkMarkSix);
  addCheck(checkMarkFive);
  base64Title.innerHTML = 'Base 64 Encoder';
  base64Place = 'encode';
});

checkMarkSix.addEventListener('click', function() {
  addCheck(checkMarkSix);
  removeCheck(checkMarkFive);
  base64Title.innerHTML = 'Base 64 Decoder';
  base64Place = 'decode';
});

// Password Copy Button

pdwCopyBtn.addEventListener('click', function() {
  var nubContent = document.getElementById("numberSlideTextBox");
  nubContent.select();
  nubContent.setSelectionRange(0, 256)
  document.execCommand("copy", );
  alert('Text has been coppied!');
});

// Data Transfer Calculator
dtcStart.addEventListener('click', function() {
  calculateSpeed();
  console.log('click');
});

/*

const inputElement = document.querySelector('input[class="dtc"]');

dataTransferAmount.addEventListener('compositionupdate', function() {
  if (dataTransferAmount == '') {

  }
});
*/
