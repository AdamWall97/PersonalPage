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
                <SkillCard title="C#" rating={4} text="1 year of experience building RESTful APIs and supporting development in data acquisition applications"  />
            </div>
            <div className="col-lg">
                <SkillCard title="Typescript" rating={4.5} text="2 years of experience building my personal page and building company test lab web tools"/>
            </div>
            <div className="col-lg">
                <SkillCard title="SQL" rating={3} text="1.5 years of experience maintaining enterprise lab request system and designing relational tables for lab applications"  />
            </div>
        </div>
        <div className="row p-2">
        <div className="col-lg">
            <SkillCard title="Visual Basic" rating={2} text="4 years of experience creating test lab scripts for lab automation and created rich excel spreadsheets to perform lab analysis"/>
        </div>
        <div className="col-lg">
            <SkillCard title="4D" rating={2} text="6 months of experience fixing bugs and creating new features on an extensive codebase"  />
        </div>
        <div className="col-lg">
            <SkillCard title="HTML / CSS" rating={3.5} text="1.5 years of experience creating functional web applications in a wide vareity of frameworks"  />
        </div>
        </div>
        <h1 className="mt-3">Frameworks</h1>
        <hr className="my-3 bg-secondary"></hr>
        <div className="row p-2">
            <div className="col-lg">
                <SkillCard title="React" rating={5} text="1.5 years of experience building web applications using tools such as React-Query, Highcharts, and hooks"  />
            </div>
            <div className="col-lg">
                <SkillCard title="ASP.NET Core" rating={3} text="1 year of experience building web API using libraries such as EF Core, Swashbuckle, NUnit, and Automapper"/>
            </div>
            <div className="col-lg">
                <SkillCard title="NextJS" rating={4} text="1 year of experience with React used to create Test Lab Central application for data centralization and management"  />
            </div>
        </div>
        <h1 className="mt-3">Software Tools</h1>
        <hr className="my-3 bg-secondary"></hr>
        <div className="row gy-2 p-2">
            <div className="col-lg">
                <SkillCard title="Git" rating={4} text="Worked in software development teams where Git is essential to provide version control and management of different environments"  />
            </div>
            <div className="col-lg">
                <SkillCard title="Azure Devops" rating={4} text="Created automated CI/CD pipeline from scratch for Test Lab Central Development along with editing existing pipelines in enterprise request management system"/>
            </div>
            <div className="col-lg">
                <SkillCard title="Amazon Web Services" rating={1.5} text="Created full CI/CD pipeline and cloud hosted EC2 machines to build and host this website" />
            </div>
        </div>
        <div className="row p-2">
            <div className="col-lg">
                <SkillCard title="PowerBI" rating={2} text="Created bi-yearly dashboards for equipment utilization and environmental lab data"  />
            </div>
            <div className="col-lg">
                <SkillCard title="Swagger / OpenAPI" rating={3} text="Used Swagger to document API's for application engineers to use in Data Acquision software"/>
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
