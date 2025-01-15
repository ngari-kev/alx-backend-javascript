const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 1245;

app.get('/', (_req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];
  if (!databaseFile) {
    res.send('This is the list of our students\n');
    return;
  }

  const databasePath = path.resolve(databaseFile);
  fs.readFile(databasePath, 'utf8', (error, fileContent) => {
    if (error) {
      res.send('This is the list of our students\nCannot load the database');
      return;
    }

    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');
    const studentRecords = lines.slice(1).map((line) => line.split(','));

    const courses = {};
    studentRecords.forEach((record) => {
      const course = record[3];
      if (!courses[course]) {
        courses[course] = [];
      }
      courses[course].push(record[0]);
    });

    let responseMessage = 'This is the list of our students\n';
    responseMessage += `Number of students: ${studentRecords.length}\n`;
    for (const [course, students] of Object.entries(courses)) {
      responseMessage += `Number of students in ${course}: ${students.length}. `;
      responseMessage += `List: ${students.join(', ')}\n`;
    }

    res.send(responseMessage.trim());
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
