var student = {
    name: 'Lorena',
    age: 21,
    course: 'psychology'
};
student.age = 22;
var Guilherme = {
    name: 'Guilherme',
    age: 21,
    course: 'programming'
};
var ana = {
    name: 'Ana',
    age: 25,
    course: 'psychology'
};
var Course;
(function (Course) {
    Course[Course["Medicine"] = 0] = "Medicine";
    Course[Course["Psychology"] = 1] = "Psychology";
    Course[Course["Programming"] = 2] = "Programming";
})(Course || (Course = {}));
var maria = {
    name: 'Maria',
    age: 23,
    course: Course.Psychology
};
var joao = {
    name: 'João',
    age: 22,
    course: Course.Medicine,
    materials: ['stethoscope', 'coat']
};
