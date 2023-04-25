import React from "react";
import SkillCard from "componets/SkillCard";
function Skills() {
  
  /*
    Languges
    C#
    Typescript
    HTML / CSS 
    SQL
    Visual Basic
    4D (php)
    
    Frameworks / Libraries
    React
    .NET
    NextJS
    Jquery
    Tools
    Engineering

    Failure Mode and Effects Analysis (FMEA)
    Process Improvement
    <html /><css /><javascript</javascript>
  */
    return (
    <div className="jumbotron">
    <div className="w-75 m-auto">
        <h1 className="mt-3">Languages</h1>
        <hr className="my-3 bg-secondary"></hr>
        <div className="row p-2">
            <div className="col-lg">
                <SkillCard title="C#" rating={4} text="Created Web API for cross-function lab data management and supporting development of Data Acquisition Applications"  />
            </div>
            <div className="col-lg">
                <SkillCard title="Typescript" rating={4.5} text="Created data analysis tools and lab management tools to increase lab efficency and quality."/>
            </div>
            <div className="col-lg">
                <SkillCard title="SQL" rating={3} text="Maintained enterprise management system and worked on data transfer to a new platform"  />
            </div>
        </div>
        <div className="row p-2">
        <div className="col-lg">
            <SkillCard title="Visual Basic" rating={2} text="Created scripts for lab automation and rich excel functions to perform lab analysis."  />
        </div>
        <div className="col-lg">
            <SkillCard title="4D" rating={2} text="Pushed development 4D system across the final sprint to release to thousands of users."  />
        </div>
        <div className="col-lg">
            <SkillCard title="HTML / CSS" rating={3.5} text="Experience creating this website along with using my standard html / CSS to edit development 4D system to integrate."  />
        </div>
        </div>
        <h1 className="mt-3">Frameworks</h1>
        <hr className="my-3 bg-secondary"></hr>
        <div className="row p-2">
            <div className="col-lg">
                <SkillCard title="React" rating={5} text="1.5 years experience, first framework I picked up on the front end side and fell in love with modularity and hooks."  />
            </div>
            <div className="col-lg">
                <SkillCard title="ASP.NET Core" rating={3} text="Focus on developing web API's using libraries such as EF Core, Swashbuckle, NUnit, and Automapper"/>
            </div>
            <div className="col-lg">
                <SkillCard title="NextJS" rating={4} text="Framework used to create Test Lab Central application for data centralization and management."  />
            </div>
        </div>
        <h1 className="mt-3">Software Tools</h1>
        <hr className="my-3 bg-secondary"></hr>
        <div className="row gy-2 p-2">
            <div className="col-lg">
                <SkillCard title="Git" rating={4} text="Worked in teams of 2 or 3 where Git is essential to provide version control and management of different environments."  />
            </div>
            <div className="col-lg">
                <SkillCard title="Azure Devops" rating={4} text="Created fully autoamted CI/CD pipeline from scratch for Test Lab Central Development along with integrated"/>
            </div>
            <div className="col-lg">
                <SkillCard title="Amazon Web Services" rating={1.5} text="Created full CI/CD pipeline and cloud hosted EC2 machines to build and host this website."  />
            </div>
        </div>
        <div className="row p-2">
            <div className="col-lg">
                <SkillCard title="PowerBI" rating={2} text="Created bi-yearly dashboards for equipment utilization and environmental lab data."  />
            </div>
            <div className="col-lg">
                <SkillCard title="Swagger / OpenAPI" rating={3} text="Used Swagger to create tools for front end development, document API's for engineers to use in desktop Data Acquision software."/>
            </div>
            <div className="col-lg">
                <SkillCard title="Microsoft Graph API" rating={3} text="Integrated Microsoft Graph API with Azure Active Directory to create SSO and User Funcationality for Test Lab Central"  />
            </div>
        </div>
    </div>
    </div>
  );
}

export default Skills;
