// Class to represent a Student
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name}, Age: ${this.age}`;
    }
}

// Class to manage a list of students (the "menu app")
class Classroom {
    constructor() {
        this.students = []; // Array to hold student objects
    }

    start() {
        let selection = this.showMainMenu();

        while (selection !== '0') {
            switch (selection) {
                case '1':
                    this.createStudent();
                    break;
                case '2':
                    this.viewStudents();
                    break;
                case '3':
                    this.deleteStudent();
                    break;
                default:
                    alert("Invalid option. Please try again.");
            }
            selection = this.showMainMenu();
        }

        alert("Goodbye!");
    }

    showMainMenu() {
        return prompt(`
        STUDENT MANAGER
        0) Exit
        1) Add a student
        2) View all students
        3) Delete a student
        `);
    }

    createStudent() {
        let name = prompt("Enter the student's name:");
        let age = prompt("Enter the student's age:");
        this.students.push(new Student(name, age));
        alert("Student added.");
    }

    viewStudents() {
        if (this.students.length === 0) {
            alert("No students available.");
        } else {
            let studentList = this.students.map((student, index) => {
                return `${index}) ${student.describe()}`;
            }).join("\n");
            alert(studentList);
        }
    }

    deleteStudent() {
        let index = prompt("Enter the index of the student to delete:");
        if (index >= 0 && index < this.students.length) {
            this.students.splice(index, 1);
            alert("Student removed.");
        } else {
            alert("Invalid index.");
        }
    }
}

// Run the app
let classroomApp = new Classroom();
classroomApp.start();