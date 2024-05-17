"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageAge = exports.sortStudentsByGrade = exports.getStudentNames = exports.filterPassedStudents = void 0;

function filterPassedStudents(students) {
    return students.filter((student) => student.grade >= 50);
}
exports.filterPassedStudents = filterPassedStudents;

function getStudentNames(students) {
    return students.map((student) => student.name);
}
exports.getStudentNames = getStudentNames;

function sortStudentsByGrade(students) {
    return [...students].sort((a, b) => a.grade - b.grade);
}
exports.sortStudentsByGrade = sortStudentsByGrade;

function getAverageAge(students) {
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);
    return totalAge / students.length;
}
exports.getAverageAge = getAverageAge;
