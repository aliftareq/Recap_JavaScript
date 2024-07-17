//notation : dot notation(.), bracket notation([])

const student = {
    name: 'Kolim uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}

//dot notation
const marks = student.marks
const mathMarks = student.marks.math

//bracket notation
const chemistry = student['marks']['chemistry']
console.log("chemistry", chemistry);

const subject = 'math'
const subjectMarks = student.marks[subject]
console.log("Math", subjectMarks);
