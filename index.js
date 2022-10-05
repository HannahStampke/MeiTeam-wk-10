const generateHTML = require('./src/generateHTML');

//profile creation
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const fs = require('fs');
const inquirer = require('inquirer'); 

const teamArray = [];

const newManager = () => {
    return inquirer.prompt ([
        {
            type:'input',
            name: 'name',
            message: 'Manager name?',
        },
        {   type:'input',
            name: 'id',
            message: 'Manager ID',

        },
        {
            type:'input',
            name:'email',
            message:'Manager email',
        },
        {
            type: 'input',
            name:'workNumber',
            message: 'Manager work phone number',
        }
    ])
    .then(managerInput => {
        const {name, id, email, workNumber} = managerInput;
        const manager = new Manager (name, id, email, workNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`Adding employees to the team`);

    return inquirer.prompt ([
        {
            type:'list',
            name:'role',
            message:'New employee role',
            choices: ['Engineer','Intern']
        },
        {
            type:'input',
            name:'name',
            message:"Name of new employee",
        },
        {
           type:'input',
           name:'id',
           message:'New employee id',
        },
        {
            type:'input',
            name:'email',
            message:"New employee email",
        },
        {
            type:'input',
            name:'github',
            message:"New employee github",
        },
        {
            type:'input',
            name:'school',
            message:"Intern school",
            when: (input) => input.role === "Intern",
        },
        {
            type:'confirm',
            name:'confirmAddEmployee',
            message:'Add another?',
            default:false
        }

    ])
    .then(employeeData => {
        let{ name, id, email, role, github, school, confirmAddEmployee} = employeeData;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        teamArray.push(employee);
        if(confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        } 
    })
};

// Generate the html file
const writeFile = data => {
    fs.writeFile('./dist/indexhtml', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("Your new employee data has been a success")
        }
    })
};

newManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
}) 
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});