'use strict'

class Student {
    learn() {
        console.log("the student is actually learning");
    }
    question(Teacher: any) {
        Teacher.answer()
    }
}

class Teacher {
    teach(Student: any) {
        Student.learn()
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