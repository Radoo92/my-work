'use strict'

/*Create Student and Teacher classes
Student
learn() -> prints: the student is actually learning
question(teacher) -> calls the teacher's giveAnswer() method
Teacher
teach(student) -> calls the student's learn() method
giveAnswer() -> prints: the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method*/

class Student {
    learn() {
        console.log("the student is actually learning");
    }
    question(teacher: Teacher) {
        teacher.answer()
    }
}

class Teacher {
    teach(student: Student) {
        student.learn()
    }
    answer() {
        console.log("The teacher is answering a question");
    }
}

let student01 = new Student();
let teacher01 = new Teacher();

student01.question(teacher01);
teacher01.teach(student01);

export { };