let guessedBirthday = '';
let guessCount = 0;

function guessBirthday() {
  const age = document.getElementById('ageInput').value;
  
  if (age && age > 0) {
    guessCount++;  
    const today = new Date();
    const currentYear = today.getFullYear();
    
    const startYear = currentYear - age - 1;
    const endYear = currentYear - age;

    const startDate = new Date(endYear, today.getMonth(), today.getDate() + 1);

    const endDate = new Date(startYear, today.getMonth(), today.getDate());

    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

    const formattedDate = `${randomDate.getMonth() + 1}/${randomDate.getDate()}/${randomDate.getFullYear()}`;
    guessedBirthday = formattedDate;
    
    document.getElementById('result').innerText = `Is your birthday ${guessedBirthday} ?`;

    //  "Correct" button
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
    
    // hide the question and "Correct" button
    document.getElementById('result').style.display = 'none';
    document.getElementById('correctButton').style.display = 'none';

    // birthday and guess count
    document.getElementById('correctMessage').innerText = `You were born on ${guessedBirthday}. I knew it, ${guessCount}${suffix} time's the charm!`;
  }
}

//  dark and light theme
function toggleTheme() {
  const body = document.body;
  const themeButton = document.getElementById('themeToggle');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeButton.innerText = 'Switch to Light Mode';
  } else {
    themeButton.innerText = 'Switch to Dark Mode';
  }
}
