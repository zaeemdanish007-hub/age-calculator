let dobEl = document.querySelector("#dob");
let calculateBtn = document.querySelector("#calculate");
let clearBtn = document.querySelector("#clear");
let resultEl = document.querySelector("#result");

let yearsEl = document.querySelector("#years");
let monthsEl = document.querySelector("#months");
let daysEl = document.querySelector("#days");
// Get today's date
let today = new Date();

// Format today's date as YYYY-MM-DD
let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2, "0");
let day = String(today.getDate()).padStart(2, "0");

let todayFormatted = `${year}-${month}-${day}`;

// Prevent selecting a future date
dobEl.max = todayFormatted;

function calculateAge() {
  // Check if date is empty
  if (!dobEl.value) {
    resultEl.innerHTML = "Please enter your date of birth.";
    return;
  }

  let birthDate = new Date(dobEl.value);
  let today = new Date();

  // Check for future date
  if (birthDate > today) {
    resultEl.innerHTML = "Date of birth cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Borrow days from previous month
  if (days < 0) {
    months--;

    let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);

    days += previousMonth.getDate();
  }

  // Borrow months from previous year
  if (months < 0) {
    years--;
    months += 12;
  }

  resultEl.style.display = "block";

  yearsEl.textContent = years;
  monthsEl.textContent = months;
  daysEl.textContent = days;
}

calculateBtn.addEventListener("click", calculateAge);
clearBtn.addEventListener("click", function () {
  dobEl.value = "";

  yearsEl.textContent = "0";
  monthsEl.textContent = "0";
  daysEl.textContent = "0";

  resultEl.style.display = "none";
});
