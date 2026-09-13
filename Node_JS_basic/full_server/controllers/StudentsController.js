import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const database = process.argv[2];

    readDatabase(database)
      .then((students) => {
        const fields = Object.keys(students).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        let output = 'This is the list of our students';

        fields.forEach((field) => {
          output += `\nNumber of students in ${field}: `;
          output += `${students[field].length}. List: `;
          output += students[field].join(', ');
        });

        response.type('text/plain');
        response.status(200).send(output);
      })
      .catch(() => {
        response.type('text/plain');
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.type('text/plain');
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const database = process.argv[2];

    readDatabase(database)
      .then((students) => {
        response.type('text/plain');
        response.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch(() => {
        response.type('text/plain');
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
