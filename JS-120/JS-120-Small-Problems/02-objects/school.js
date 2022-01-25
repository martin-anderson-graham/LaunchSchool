/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

let school = {
  students: [],

  addStudent(name, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th', '6th'].includes(year)) {
      console.log('Invalid year');
      return;
    }
    let newStudent = createStudent(name, year);
    this.students.push(newStudent);
    // eslint-disable-next-line consistent-return
    return newStudent;
  },

  enrollStudent(student, courseObj) {
    this.getStudentFromName(student).addCourse(courseObj);
  },

  addGrade(student, courseCode, grade) {
    this.getStudentFromName(student).setGrade(courseCode, grade);
  },

  getReportCard(studentName) {
    let student = this.getStudentFromName(studentName);
    student.getCourses().forEach(course => {
      let result = course.name + ': ';
      if (course.grade) {
        result += course.grade;
      } else {
        result += "In Progress";
      }
      console.log(result);
    });
  },

  courseReport(courseName) {
    let sum = 0;
    let numStudents = 0;
    this.students.forEach(student => {
      let matchedCourse = student.getCourses().find(course => course.name === courseName);
      if (matchedCourse && matchedCourse.grade) {
        if (numStudents === 0) console.log(`==${matchedCourse.name} Grades==`);
        console.log(`${student.name}: ${matchedCourse.grade}`);
        sum += matchedCourse.grade;
        numStudents++;
      }
    });
    if (sum) {
      console.log('---');
      console.log(`Course Average: ${Math.round(sum / numStudents)}`);
    } else {
      console.log(undefined);
    }
  },

  getStudentFromName(name) {
    return this.students.find(stu => stu.name === name);
  }
};

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      console.log(this.courses);
    },

    getCourses() {
      return this.courses;
    },

    getCourseFromCode(courseCode) {
      return this.courses.find(course => courseCode === course.code);
    },

    addCourse(courseObj) {
      this.courses.push(courseObj);
    },

    setGrade(courseCode, grade) {
      let matchedCourse = this.getCourseFromCode(courseCode);
      if (matchedCourse) {
        matchedCourse.grade = grade;
      }
    },

    addNote(courseNumber, noteText) {
      let currentCourse = this.courses.find(course => course.code === courseNumber);
      if (currentCourse) {
        if (!currentCourse.notes) {
          currentCourse.notes = [];
        }
        currentCourse.notes.push(noteText);
      }
    },

    viewNotes() {
      this.courses.filter(course => course.notes)
        .forEach(course => {
          console.log(`${course.name}: ${course.notes.join('; ')}`);
        });
    },

    updateNote(courseNumber, noteText) {
      let currentCourse = this.courses.find(course => course.code === courseNumber);
      if (currentCourse) {
        currentCourse.notes = [noteText];
      }
    }
  };
}

let mathCourse = { name: 'Math', code: 101 };
let advMathCourse = { name: 'Advanced Math', code: 102 };
let physicsCourse = { name: 'Physics', code: 202 };

school.addStudent('foo', '3rd');
school.enrollStudent('foo', Object.assign({}, mathCourse));
school.enrollStudent('foo', Object.assign({}, advMathCourse));
school.enrollStudent('foo', Object.assign({}, physicsCourse));
school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);

school.addStudent('bar', '1st');
school.enrollStudent('bar', Object.assign({}, mathCourse));
school.addGrade('bar', 101, 91);

school.addStudent('qux', '2nd');
school.enrollStudent('qux', Object.assign({}, advMathCourse));
school.enrollStudent('qux', Object.assign({}, mathCourse));
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

school.courseReport('Advanced Math');