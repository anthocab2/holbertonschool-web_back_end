const fs = require('fs');

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error);
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

      resolve(fields);
    });
  });
}
