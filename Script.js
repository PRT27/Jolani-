// script.js
const userPreferences = [];
const matchingUsers = [];

function addUserPreference(preference) {
  userPreferences.push(preference);
}

function findMatches() {
  const potentialMatches = [];
  // Implement matching logic here
  return potentialMatches;
}

function displayMatches(matches) {
  const matchingList = document.getElementById('matching-list');
  matches.forEach((match) => {
    const listItem = document.createElement('LI');
    listItem.textContent = `${match.name} (${match.lookingFor})`;
    matchingList.appendChild(listItem);
  });
}

document.getElementById('registration-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userPreference = {
    name: formData.get('name'),
    lookingFor: formData.get('lookingFor'),
  };
  addUserPreference(userPreference);
  const matches = findMatches();
  displayMatches(matches);
});
