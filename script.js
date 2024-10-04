document.getElementById('bodyFatForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const gender = document.getElementById('gender').value;

    let bodyFatPercentage;

    // Using a simplified formula for calculation
    if (gender === 'male') {
        bodyFatPercentage = (1.20 * (weight / (height / 100) ** 2)) + (0.23 * age) - 16.2;
    } else {
        bodyFatPercentage = (1.20 * (weight / (height / 100) ** 2)) + (0.23 * age) - 5.4;
    }

    document.getElementById('result').innerHTML = `Estimated Body Fat Percentage: ${bodyFatPercentage.toFixed(2)}%`;
});
  