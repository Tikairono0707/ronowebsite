document.getElementById('teachingForm').addEventListener('submit', function(event) {
2    event.preventDefault(); // Prevent the form from submitting the traditional way
3
4    // Get the values from the input fields
5    const title = document.getElementById('teachingTitle').value;
6    const content = document.getElementById('teachingContent').value;
7
8    // Create a new list item for the teaching
9    const li = document.createElement('li');
10    li.innerHTML = `<strong>${title}</strong><p>${content}</p>`;
11
12    // Append the new teaching to the list
13    document.getElementById('teachings').appendChild(li);
14
15    // Clear the input fields
16    document.getElementById('teachingForm').reset();
17});