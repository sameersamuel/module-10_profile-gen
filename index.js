// Manager
const Manager = require("./lib/Manager")
// Engineer
const Engineer = require("./lib/Engineer")
// Intern
const Intern = require("./lib/Intern")
//inquirer
const inquirer = require("inquirer")
// path
const path = require("path")
// fs
const fs = require("fs")
const { clear } = require("console")

//render page template
const renderPage = require("./src/render-template");
const outputPath = path.join(__dirname, "/dist/team.html");
// html
// ------ above imports

var teamMembers = [];
//inquirer
function mainMenu (){
    inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "input manager's name",
            validate: (response) => {
                if (response !== ""){
                    return true;
                
                    }
                    return "Enter at least one character for manager name";
            },

        },

        {
            type: "input",
            name: "managerID",
            message: "input manager's ID"

        },
        {
            type: "input",
            name: "email",
            message: "input manager's email"

        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "input manager's office number"

        },
    ])
        .then((userResponse) => {
            console.log("user response = ", userResponse);
            const mgr = new Manager(
                userResponse.manager,
                userResponse.managerID,
                userResponse.email,
                userResponse.managerOfficeNumber
            );
            teamMembers.push(mgr);
            addToTeam();
        })
    }
            
    function addToTeam (){
        inquirer.prompt([
            {
                type: "list",
                name: "action",
                message: "Who would you like to add to the team?",
                choices: [
                    "Engineer",
                    "Intern",
                    "Done adding memembers.",
                ]
            }
        ])
        .then((response) => {
            switch (response.action){
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    createTeam();

            }
        })
    }
    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineer",
                message: "input engineer's name",
                validate: (response) => {
                    if (response !== ""){
                        return true;
                    
                        }
                        return "Enter at least one character for engineer's name";
                },
    
            },
    
            {
                type: "input",
                name: "engineerID",
                message: "input engineer's ID"
    
            },
            {
                type: "input",
                name: "email",
                message: "input engineer's email"
    
            },
            {
                type: "input",
                name: "github",
                message: "input engineer's github"
    
            },
        ])
            .then((userResponse) => {
                console.log("user response = ", userResponse);
                const engr = new Engineer(
                    userResponse.engineer,
                    userResponse.engineerID,
                    userResponse.email,
                    userResponse.github
                );
                teamMembers.push(engr);
                addToTeam();
                console.log("Engineer added!")
            })
       
        
    }
    function addIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "intern",
                message: "input intern's name",
                validate: (response) => {
                    if (response !== ""){
                        return true;
                    
                        }
                        return "Enter at least one character for intern's name";
                },
    
            },
    
            {
                type: "input",
                name: "interID",
                message: "input intern's ID"
    
            },
            {
                type: "input",
                name: "email",
                message: "input intern's email"
    
            },
            {
                type: "input",
                name: "school",
                message: "input intern's school"
    
            },
        ])
            .then((userResponse) => {
                console.log("user response = ", userResponse);
                const intern = new Intern(
                    userResponse.intern,
                    userResponse.internID,
                    userResponse.email,
                    userResponse.school
                );
                teamMembers.push(intern);
                addToTeam();
                console.log("Intern added!")
    })
}
    function createTeam(){
        console.log("Team Members = ", teamMembers);
        fs.writeFileSync(outputPath, renderPage(teamMembers), "utf8");
        console.log("Team added!");
    }
        mainMenu();