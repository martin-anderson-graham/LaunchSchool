const EXAM_WEIGHT = 0.65;
const EXERCISES_WEIGHT = 0.35;

const GRADING_SCALE = {
  A: [93, 100],
  B: [85, 92],
  C: [77,84],
  D: [69,76],
  E: [60,68],
  F: [0,59]
};

function getLetterGrade(percent) {
  let letterGrade = Object.entries(GRADING_SCALE).filter( entry => {
    return percent >= entry[1][0] && percent <= entry[1][1];
  })[0][0];

  return `${percent} (${letterGrade})`;
}

function getFinalGrade(examGrade, exercisesGrade) {
  return parseFloat(Math.round(100 *(examGrade * EXAM_WEIGHT + exercisesGrade * EXERCISES_WEIGHT))).toFixed(0);
}

function getExamGrade(examScoresArray) {
  let score = examScoresArray.reduce( (sum, ele) => sum + ele, 0);
  let total = examScoresArray.length * 100;
  return score / total;
}

function getExercisesGrade(exercisesScoreArray) {
  return exercisesScoreArray.reduce( (sum, ele) => sum + ele, 0) / 100;
}

function getStudentGrades(scores) {
  return Object.values(scores).map( student => {
    
    let examGrade = getExamGrade(student.scores.exams);
    let exercisesGrade = getExercisesGrade(student.scores.exercises);

    let finalGrade = getFinalGrade(examGrade, exercisesGrade);
    return getLetterGrade(finalGrade);
  });

}

function getAverage(arr) {
  let total = 0;
  let sum = 0;
  arr.forEach( ele => {
    total += 100;
    sum += ele;
  });
  return parseFloat(100 *sum / total).toFixed(1);
}

function getMinimum(arr) {
  return arr.reduce( (min, ele) => {
    if(ele < min) min = ele;
    return min;
  });
}

function getMaximum(arr) {
  return arr.reduce( (max, ele) => {
    if(ele > max) max = ele;
    return max;
  });
}

function getExamStatistics(scores) {
  let examScores = Object.values(scores).reduce( (result, student) => {
    student.scores.exams.forEach( (exam, index) => {
      result[index].push(exam);
    })
    return result;
  }, [[],[],[],[]]);

  return examScores.map( (scores) => {
    return {
      average: getAverage(scores),
      minimum: getMinimum(scores),
      maximum: getMaximum(scores)
    }
  });
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let studentGrades = getStudentGrades(scores);
  let exams = getExamStatistics(scores);

  return {
    studentGrades,
    exams
  }
}

let result = generateClassRecordSummary(studentScores);

console.log(result.studentGrades);
result.exams.forEach(ele => console.log(ele));



/* returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/

