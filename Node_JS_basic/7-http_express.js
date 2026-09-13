const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

app.get('/', (request, response) => {
  response.type('text/plain');
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  response.type('text/plain');

  fs.readFile(database, 'utf8', (error, data) => {
    if (error) {
      response.send(
        'This is the list of our students\nCannot load the database',
      );
      return;
    }

    const students = data
      .split('\n')
      .slice(1)
      .filter((line) => line.trim() !== '');

    const fields = {};

    students.forEach((student) => {
      const columns = student.trim().split(',');
      const firstName = columns[0];
      const field = columns[3];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName);
    });

    let output = 'This is the list of our students\n';
    output += `Number of students: ${students.length}`;

    Object.keys(fields).forEach((field) => {
      const names = fields[field].join(', ');
      output += `\nNumber of students in ${field}: `;
      output += `${fields[field].length}. List: ${names}`;
    });

    response.send(output);
  });
});

app.listen(1245);

module.exports = app;
