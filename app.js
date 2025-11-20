// Grab elements from HTML (DOM)
const startBtn = document.querySelector('#startBtn');
const saveBtn = document.querySelector('#saveBtn');
const transcript = document.querySelector('#transcript');
const notesList = document.querySelector('#notesList');
// Array to hold saved notes (like a list in JS)
let notes = [];

// Load saved notes from localStorage (if any)
if (localStorage.getItem('notes')) {
  notes = JSON.parse(localStorage.getItem('notes'));
  renderNotes(); // We'll define this later
}
// Function to show notes in list
function renderNotes() {
  notesList.innerHTML = ''; // Clear old list
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.textContent = note;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteNote(index));
    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}