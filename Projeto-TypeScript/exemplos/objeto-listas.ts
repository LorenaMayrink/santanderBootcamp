const student = {
    name: 'Lorena',
    age: 21,
    course: 'psychology'
}

student.age = 22;

const Guilherme: {name: string, age: number, course: string} = {
   name: 'Guilherme',
   age: 21,
   course: 'programming',
}


const ana = {
    name: 'Ana',
    age: 25,
    course: 'psychology'
}

enum Course {
    Medicine,
    Psychology,
    Programming,
}

interface Person {
    name: string,
    age: number,
    course: Course;
}

interface Universaty extends Person {
    materials: string[]
}


const maria: Person = {
    name: 'Maria',
    age: 23,
    course: Course.Psychology
}

const joao: Universaty = {
    name: 'João',
    age: 22,
    course: Course.Medicine,
    materials: ['stethoscope', 'coat']
}