const http = require('http');
const { readFile } = require('fs').promises;

const hostAddress = '127.0.0.1';
const hostPort = 1245;

async function parseStudentData(filePath) {
  try {
    const fileContent = await readFile(filePath, 'utf-8');
    const studentData = {};
    const courseCounts = {};
    let totalStudents = 0;
    let resultOutput = '';

    const fileLines = fileContent.split('\n').filter((line) => line);

    fileLines.forEach((line, index) => {
      if (index > 0) { // Skip the header line
        totalStudents += 1;
        const [name, , , course] = line.split(',');

        if (!studentData[course]) {
          studentData[course] = [];
        }
        studentData[course].push(name);

        courseCounts[course] = (courseCounts[course] || 0) + 1;
      }
    });

    resultOutput += `Number of students: ${totalStudents}\n`;

    for (const [course, count] of Object.entries(courseCounts)) {
      resultOutput += `Number of students in ${course}: ${count}. `;
      resultOutput += `List: ${studentData[course].join(', ')}\n`;
    }

    return resultOutput.trim(); // Remove any trailing newline
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const serverApp = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    try {
      const studentOutput = await parseStudentData(process.argv[2]);
      res.end(studentOutput);
    } catch (err) {
      res.statusCode = 404;
      res.end(err.message);
    }
  }
});

serverApp.listen(hostPort, hostAddress, () => {});

module.exports = serverApp;
