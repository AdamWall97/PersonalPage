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
    <div className="container container-fluid">
      <h1 id="languages" className="title">Languages</h1>
        <div className="row p-2">
            <div className="col-lg">
                <SkillCard title="C#" rating={4} text="Experience creating Web API and supporting development of Data Acquisition Applications"  />
            </div>
            <div className="col-lg">
                <SkillCard title="Typescript" rating={4.5} text="Created dashboard for lab users to access global lab data"/>
            </div>
            <div className="col-lg">
                <SkillCard title="SQL" rating={3} text="Maintained global lab data management system along with create measurement data tables"  />
            </div>
        </div>
        <div className="row p-2">
        <div className="col-lg">
            <SkillCard title="HTML / CSS" rating={3.5} text="Developing Web API and support development of Data Acquisition Applications"  />
        </div>
        <div className="col-lg">
            <SkillCard title="Visual Basic" rating={2} text="Developing Web API and support development of Data Acquisition Applications"  />
        </div>
        <div className="col-lg">
            <SkillCard title="4D" rating={2} text="Developing Web API and support development of Data Acquisition Applications"  />
        </div>
    </div>
    <h1 id="frameworks" className="title">Frameworks</h1>
        <div className="row p-2">
            <div className="col-lg">
                <SkillCard title="React" rating={5} text="Experience creating Web API and supporting development of Data Acquisition Applications"  />
            </div>
            <div className="col-lg">
                <SkillCard title=".NET" rating={3} text="Focus on developing web API's using libraries such as EF Core, Swashbuckle, NUnit, and Automapper"/>
            </div>
            <div className="col-lg">
                <SkillCard title="NextJS" rating={4} text="Maintained global lab data management system along with create measurement data tables"  />
            </div>
        </div>
    <h1 id="tools" className="title">Software Tools</h1>
        <div className="row p-2">
            <div className="col-lg">
                <SkillCard title="Git" rating={5} text="Experience creating Web API and supporting development of Data Acquisition Applications"  />
            </div>
            <div className="col-lg">
                <SkillCard title="Azure Devops" rating={3} text="Focus on developing web API's using libraries such as EF Core, Swashbuckle, NUnit, and Automapper"/>
            </div>
            <div className="col-lg">
                <SkillCard title="Amazon Web Services" rating={4} text="Maintained global lab data management system along with create measurement data tables"  />
            </div>
        </div>
        <div className="row p-2">
            <div className="col-lg">
                <SkillCard title="PowerBI" rating={5} text="Experience creating Web API and supporting development of Data Acquisition Applications"  />
            </div>
            <div className="col-lg">
                <SkillCard title="Azure Devops" rating={3} text="Focus on developing web API's using libraries such as EF Core, Swashbuckle, NUnit, and Automapper"/>
            </div>
            <div className="col-lg">
                <SkillCard title="Amazon Web Services" rating={4} text="Maintained global lab data management system along with create measurement data tables"  />
            </div>

        </div>
    </div>
   
  );
}

export default Skills;
