const instructors = [
    { name: 'Quincy', speciality: 'Quantum Mechanics' },
    { name: 'Kenn', speciality: 'Norse Mythology'},
    { name: 'Paul', speciality: 'Tuvan throat singing'},
    { name: 'Aaron', speciality: 'Entomology' },
    { name: 'Carolyn', speciality: 'Kung Fu'}
]

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name);
}
console.log(instructor_names);

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNames);

// fix this code:
// const instructorInfo = `${instructor.map(instructor => ${instructor.name}: ${instructors.specialty}`)}`;

var kvArray = [
    {key: 1, value: 10 },
    {key: 2, value: 20 },
    {key: 3, value: 30 }
];
console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})