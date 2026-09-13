const http = require('http');
const fs = require('fs');

const database = process.argv[2];

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if (request.url === '/') {
    response.end('Hello Holberton School!');
    return;
  }

  if (request.url === '/students') {
    response.write('This is the list of our students\n');

    fs.readFile(database, 'utf8', (error, data) => {
      if (error) {
        response.end('Cannot load the database');
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

      let output = `Number of students: ${students.length}`;

      Object.keys(fields).forEach((field) => {
        const names = fields[field].join(', ');
        output += `\nNumber of students in ${field}: `;
        output += `${fields[field].length}. List: ${names}`;
      });

      response.end(output);
    });

    return;
  }

  response.end();
});

app.listen(1245);

module.exports = app;
