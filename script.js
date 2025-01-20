
function copyTextField() {
  generateOutput();

  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Show output message
  document.getElementById("output").innerHTML = "Text copied!";

  // Revert output message
  setTimeout(function() {
    document.getElementById("output").innerHTML = ""
  }, 3000);
};

function setStartTime() {
  var now = new Date();
  const hours = now.getHours().toString().padStart (2,'0');
  const minutes = now.getMinutes().toString().padStart (2, '0');
  document.getElementById('startTime').value = `${hours}:${minutes}`;
};

function setEndTime() {
  var now = new Date();
  const hours = now.getHours().toString().padStart (2,'0');
  const minutes = now.getMinutes().toString().padStart (2, '0');
  document.getElementById('endTime').value = `${hours}:${minutes}`;
};

var x;
var toggle = 0;

function toggleTimer() {
  toggle++
  if (toggle === 1) {
    startTimer();
    document.getElementById("start").innerHTML = "Stop";
  } else if (toggle === 2) {
    document.getElementById("start").innerHTML = "Start";
    toggle = 0
    stopTimer();
  }
}

function startTimer() {
  x = setInterval(timer, 10);
}

function stopTimer() {
  clearInterval(x);
}

var sec = 0
var min = 0

var secOut = 0
var minOut = 0

function timer() {

  sec++;

  if (sec == 60) {
    min++;
    sec = 0;
  }

  secOut = checkTime(sec);
  minOut = checkTime(min);

  document.getElementById("timerSeconds").innerHTML = secOut;
  document.getElementById("timerMinutes").value = minOut;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function resetTimer() {

  sec = 0;
  min = 0;

  document.getElementById("timerSeconds").innerHTML = "00";
  document.getElementById("timerMinutes").value = "00";
}

function clearAll() {
  sec = 0
  min = 0
  document.getElementById("startTime").value = 0;
  document.getElementById("endTime").value = 0;
  document.getElementById("timerSeconds").innerHTML = "00";
  document.getElementById("timerMinutes").value = "00";
}

// Generate timeBased

function generateOutput() {
  var startTime = document.getElementById("startTime").value;
  var splitStart = startTime.split(":");
  var startMin = Number(splitStart[0]) * 60 + Number(splitStart[1]);
  var endTime = document.getElementById("endTime").value;
  var splitEnd = endTime.split (":");
  var endMin = Number(splitEnd[0]) * 60 + Number(splitEnd[1]);
  var visitMinutes = endMin - startMin;
  var addMinutes = document.getElementById("timerMinutes").value;
  var totalTime = visitMinutes + Number(addMinutes);
  var finalOutput = "Visit start time: " + startTime + "\nVisit end time: " + endTime;
  if (addMinutes > 0) {
    finalOutput += "\nAdditional minutes outside of visit (reviewing notes, ordering tests, prescribing medications): " + addMinutes;
  };
  finalOutput += "\nTotal minutes spent on encounter: " + totalTime;

  if (document.getElementById("myInput").value) {
    finalOutput += "\nNotes: " + document.getElementById("myInput").value;
  }

  document.getElementById("myInput").value = finalOutput;
  // document.getElementById("myInput").innerHTML = finalOutput;

}
