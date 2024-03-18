/* ===================================== 
   ALERT BANNER
======================================== */  

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
`<div class="alert-banner">
   <p><strong>Alert: </strong>you have anread messages</p>
   <p class="alert-banner-close">x</p>
</div>`;

alertBanner.addEventListener("click", e => {
   const element= e.target;
   if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display="none"
   }
});

/* ===================================== 
   Notification
======================================== */  
const bellIcon= document.getElementsByClassName("bell-icon")[0];

bellIcon.addEventListener("click", () => {
    alert("Message1: You have a Message from Joniko Samasori.\nMessage 2: Paul A. want to left a comment on you last post.");
    // const notification = document.getElementById('notifications');
    // notification.classList.remove('notification');
});


/* ===================================== 
   CHART
======================================== */  

// Traffic Chart

let trafficCanvas= document.getElementById("traffic-chart");

let trafficData = {
   labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
   datasets: [{
         data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
         backgroundColor: 'rgba(116, 119, 191, .3)',
         borderWidth: 1,
      }]
   };

let trafficOptions = {
   backgroundColor: 'rgba(112, 104, 201, .5)',
   fill: true,
   aspectRatio: 2.5,
   animation: {
      duration: 0
   },
   scales: {
      y: {
      beginAtZero: true
      }
   },
   plugins: {
      legend: {
      display: false
      }
   }
};

let trafficChart = new Chart(trafficCanvas, {
   type: 'line',
   data: trafficData,
   options: trafficOptions
});


/* ===================================== 
   CHART Menu
======================================== */  

// Holen der DOM-Elemente
const hourly = document.getElementById("hourly");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

// Traffic Chart Daten für verschiedene Zeiträume
const hourlyData = {
    labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    datasets: [{
        data: [30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 100, 95, 110, 105, 120, 115, 130, 125, 140, 135],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

const dailyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
        data: [120, 130, 110, 140, 150, 130, 140],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

const weeklyData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [{
        data: [500, 550, 600, 650, 700],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        data: [2500, 2800, 2700, 3000, 3200, 3100, 3300, 3500, 3400, 3700, 3600, 3800],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

// Funktion zum Anzeigen der Charts.

function showHourlyChart() {
    if (trafficChart) {
        trafficChart.destroy();
    }
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: hourlyData,
        options: trafficOptions
    });
}

function showDailyChart() {
    if (trafficChart) {
        trafficChart.destroy();
    }
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: dailyData,
        options: trafficOptions
    });
}

function showWeeklyChart() {
    if (trafficChart) {
        trafficChart.destroy();
    }
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: weeklyData,
        options: trafficOptions
    });
}

function showMonthlyChart() {
    if (trafficChart) {
        trafficChart.destroy();
    }
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: monthlyData,
        options: trafficOptions
    });
}



// Event-Listener für die Menüpunkte
hourly.addEventListener('click', showHourlyChart);
daily.addEventListener('click', showDailyChart);
weekly.addEventListener('click', showWeeklyChart);
monthly.addEventListener('click', showMonthlyChart);



// Daily Chart

const dailyCanvas = document.getElementById("daily-chart");
const dailyTrafficData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};


let dailyChart = new Chart(dailyCanvas, {
    type:'bar',
    data: dailyTrafficData,
    options: dailyOptions
});


// Mobile Chart


const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};


let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});



/* ===================================== 
   Messaging Section
======================================== */  

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please make sure you fill in the user field");
    } else if (message.value === "") {
        alert("Please fill in the message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

/* ===================================== 
   Autocomplete Feature 
======================================== */

let availableKeywords = [
    "Victoria Chambers",
    "Dale Byrd",
    "Dawn Wood",
    "Dan Oliver"
];

const inputBox = document.getElementById("userField");
const resultBox = document.getElementById("resultBox");

// Event-Listener für die Eingabe
inputBox.addEventListener("input", function () {
    const userInput = inputBox.value.toLowerCase();
    const matchedKeywords = availableKeywords.filter(keyword =>
        keyword.toLowerCase().includes(userInput)
    );

    displayResults(matchedKeywords);
});

// Funktion zum Anzeigen der Suchergebnisse
function displayResults(matchedKeywords) {
    // Lösche vorherige Ergebnisse
    resultBox.innerHTML = "";

    // Zeige neue Ergebnisse an
    matchedKeywords.forEach(keyword => {
        const suggestion = document.createElement("div");
        suggestion.textContent = keyword;
        suggestion.addEventListener("click", function () {
            // Füge den ausgewählten Vorschlag in das Eingabefeld ein
            inputBox.value = keyword;
            // Lösche die Ergebnisbox
            resultBox.innerHTML = "";
        });
        resultBox.appendChild(suggestion);
    });
}




/* ===================================== 
   Alert Safe & Cancel
======================================== */  

const settingsButton= document.getElementById("settingsButton");

settingsButton.addEventListener("click", (event)=>{
    if(event.target.className === "safe-button") {
        alert("Youre Settings are saved!");
  } else {
        alert("The process was aborted!");
  }     
})

/* ===================================== 
   Local Storage
======================================== */

// Save Settings with Local Storage
// Holen der DOM-Elemente
const emailToggle = document.getElementById('emailToggle');
const publicProfileToggle = document.getElementById('publicProfileToggle');
const timezoneDropdown = document.getElementById('timezone');
const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');

// Laden der Einstellungen aus dem Local Storage
function loadSettings() {
    const emailSetting = localStorage.getItem('emailSetting') === 'true';
    const publicProfileSetting = localStorage.getItem('publicProfileSetting') === 'true';
    const timezoneSetting = localStorage.getItem('timezoneSetting') || 'Select a Timezone';

    emailToggle.checked = emailSetting;
    publicProfileToggle.checked = publicProfileSetting;
    timezoneDropdown.value = timezoneSetting;
}

// Speichern der Einstellungen im Local Storage
function saveSettings() {
    localStorage.setItem('emailSetting', emailToggle.checked);
    localStorage.setItem('publicProfileSetting', publicProfileToggle.checked);
    localStorage.setItem('timezoneSetting', timezoneDropdown.value);
}

// Funktion zum Löschen der Einstellungen (optional)
function clearSettings() {
    localStorage.removeItem('emailSetting');
    localStorage.removeItem('publicProfileSetting');
    localStorage.removeItem('timezoneSetting');
    loadSettings(); // aktualisiere die Anzeige nach dem Löschen
}

// Event-Listener für die Buttons
saveButton.addEventListener('click', saveSettings);
cancelButton.addEventListener('click', clearSettings);

// Laden der Einstellungen, wenn die Seite geladen wird
loadSettings();



