// Set the date we're counting down to
var countDownDate = new Date("Aug 31, 2024 16:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const ticketsLabel = document.getElementById("ticketsAmount");

let tickets = 0;

increaseBtn.onclick = function(){
    tickets ++;
    ticketsLabel.textContent = `${tickets} Tickets`;
    updateStats3()
    updateStatsOP()
    updateStatsW()
    updateStatsB()
    updateStatsK()
    updateStatsFS()
    updateStats13()
}

decreaseBtn.onclick = function(){
    tickets --;
    ticketsLabel.textContent = `${tickets} Tickets`;
    updateStats3()
    updateStatsOP()
    updateStatsW()
    updateStatsB()
    updateStatsK()
    updateStatsFS()
    updateStats13()
}

const updateStats3 = () => {
    const progress3 = (tickets/200)* 100
    const progressBar3 = document.getElementById('progressQuest3')
    progressBar3.style.width = `${progress3}%`
    const metaLabel = document.getElementById("quest3Progress");
    metaLabel.textContent = `${tickets} / 200`;

}

const updateStatsOP = () => {
    const progressOP = (tickets/15)* 100
    const progressBarOP = document.getElementById('progressOctoPlush')
    progressBarOP.style.width = `${progressOP}%`
    const metaLabel = document.getElementById("octoPlushProgress");
    metaLabel.textContent = `${tickets} / 15`;
}

const updateStatsW = () => {
    const progressW = (tickets/25)* 100
    const progressBarW = document.getElementById('progressWacom')
    progressBarW.style.width = `${progressW}%`
    const metaLabel = document.getElementById("wacomProgress");
    metaLabel.textContent = `${tickets} / 25`;
}


const updateStatsB = () => {
    const progressB = (tickets/50)* 100
    const progressBarB = document.getElementById('progressBackpack')
    progressBarB.style.width = `${progressB}%`
    const metaLabel = document.getElementById("backpackProgress");
    metaLabel.textContent = `${tickets} / 50`;
}

const updateStatsK = () => {
    const progressK = (tickets/75)* 100
    const progressBarK = document.getElementById('progressKeyboard')
    progressBarK.style.width = `${progressK}%`
    const metaLabel = document.getElementById("keyboardProgress");
    metaLabel.textContent = `${tickets} / 75`;
}


const updateStatsFS = () => {
    const progressFS = (tickets/120)* 100
    const progressBarFS = document.getElementById('progressFrameworkSeconds')
    progressBarFS.style.width = `${progressFS}%`
    const metaLabel = document.getElementById("frameworkSecondsProgress");
    metaLabel.textContent = `${tickets} / 120`;
}

const updateStats13 = () => {
    const progress13 = (tickets/175)* 100
    const progressBar13 = document.getElementById('progressFramework13Inch')
    progressBar13.style.width = `${progress13}%`
    const metaLabel = document.getElementById("framework13InchProgress");
    metaLabel.textContent = `${tickets} / 175`;

}


