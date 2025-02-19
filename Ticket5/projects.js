let projects = [
    { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
    { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
    { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
];
let project1=projects.map(project=>project.projectName);
console.log(project1);
let project2=projects.filter(project=>project.status==="in progress");
console.log(project2);