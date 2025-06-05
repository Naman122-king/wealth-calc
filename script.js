function calculateWealthPercentile() {
  const netWorth = parseFloat(document.getElementById("networth").value);
  const income = parseFloat(document.getElementById("income").value);

  if (isNaN(netWorth) || isNaN(income)) {
    alert("Please enter valid numbers for Net Worth and Income.");
    return;
  }

  let rank;
  if (netWorth > 1000000 || income > 100000) {
    rank = "Top 1%";
  } else if (netWorth > 100000 || income > 50000) {
    rank = "Top 10%";
  } else if (netWorth > 10000 || income > 10000) {
    rank = "Top 25%";
  } else {
    rank = "Below Top 25%";
  }

  document.getElementById("result").textContent =
    "You are in the " + rank + " of the population.";
}

// 🧠 Yeh part ensure karo ke JS form submit hone par function chalaye:
document.getElementById("wealth-form").addEventListener("submit", function (e) {
  e.preventDefault(); // page reload na ho
  calculateWealthPercentile();
});
