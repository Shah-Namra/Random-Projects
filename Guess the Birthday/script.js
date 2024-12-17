let guessedBirthday = '';
let guessCount = 0;

function guessBirthday() {
  const age = document.getElementById('ageInput').value;
  
  if (age && age > 0) {
    guessCount++;  // Increment the number of guesses

    const today = new Date();
    const currentYear = today.getFullYear();
    
    // Calculate the birth year range
    const startYear = currentYear - age - 1;
    const endYear = currentYear - age;

    // Start date: The day after the user's birthday N years ago
    const startDate = new Date(endYear, today.getMonth(), today.getDate() + 1);

    // End date: The day before their birthday (N+1) years ago
    const endDate = new Date(startYear, today.getMonth(), today.getDate());

    // Generate a random date between the startDate and endDate
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

    // Format the random date into a readable format (MM/DD/YYYY)
    const formattedDate = `${randomDate.getMonth() + 1}/${randomDate.getDate()}/${randomDate.getFullYear()}`;
    guessedBirthday = formattedDate;
    
    // Display the guessed birthday
    document.getElementById('result').innerText = `Is your birthday ${guessedBirthday} ?`;

    // Show the "Correct" button
    document.getElementById('correctButton').style.display = 'inline-block';
  } else {
    document.getElementById('result').innerText = 'Please enter a valid age!';
  }
}

function correctGuess() {
  if (guessedBirthday) {
    let suffix = 'th';
    if (guessCount % 10 === 1 && guessCount !== 11) suffix = 'st';
    if (guessCount % 10 === 2 && guessCount !== 12) suffix = 'nd';
    if (guessCount % 10 === 3 && guessCount !== 13) suffix = 'rd';
    
    // Hide the question and "Correct" button
    document.getElementById('result').style.display = 'none';
    document.getElementById('correctButton').style.display = 'none';

    // Show the final message with the birthday and guess count
    document.getElementById('correctMessage').innerText = `You were born on ${guessedBirthday}. I knew it, ${guessCount}${suffix} time's the charm!`;
  }
}
