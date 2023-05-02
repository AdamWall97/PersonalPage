import React from "react";
import ParkMap from "componets/ParkMap";


export default function Experience(){
  
  return (
    <div className="jumbotron">
        <div className="w-75 mx-auto">
        <div>
            <h1>Software Experience</h1>
            <hr className="my-4 bg-secondary"></hr>
                <div className="d-flex justify-context-between">
                <h2 className="flex mr-auto p-3">Automation Test Engineer at CommScope Inc.</h2>
                <h2 className="flex p-3">June 2020 - Current</h2>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">Test Lab Automation and Global Data Harmonization</h4>
                    <div className="flex py-3">August 2022 - Current</div>
                </div>
                <ul className="py-3 list-group list-group-flush">
                    <li className="list-group-item   bg-secondary">
                        Designed global data architechture solution for all department test lab data to have a common structure for analysis
                    </li>
                    <li className="list-group-item   bg-secondary">
                        Developed measurement and equipment RESTful API using .NET and SQL to store test lab data and utilizations
                    </li>
                    <li className="list-group-item   bg-secondary">
                        Created optical and lab management tools with Typescript and React, initial features improving utilization tracking and increased lab efficiency by 5%
                    </li>
                    <li className="list-group-item bg-secondary">
                        Designed modular data acquisition systems as a global solutiion for environmental monitoring in all CommScope test labs
                    </li>
                    <li className="list-group-item bg-secondary">
                        Tested and Documented lab automation application using .NET tools (Nunit and Swagger) to fulfill A2LA/IEC lab accredidiations and ensure valid results
                    </li>
                    <li className="list-group-item   bg-secondary">
                        Implemented automated build/deploy pipelines using Azure Devops to eliminate developer configuration time and increase security
                    </li>
                    <li className="list-group-item   bg-secondary">
                        Documented API to be usable by all Commscope application engineers.
                    </li>
                    <li className="list-group-item   bg-secondary">
                        Tested dashboard results and optical calculations to ensure proper data and to meet ISO/IEC and A2LA accredidations.
                    </li>
                </ul>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">Lab Request Management System Development</h4>
                    <div className="flex py-3">February 2023 - Current</div>
                </div>
                <ul className="py-3 list-group list-group-flush">
                    <li className="list-group-item bg-secondary">
                        Picked up a new web framework (4D) on a short timeline and was able to make impactful changes for the team within the first month of learning
                    </li>
                    <li className="list-group-item bg-secondary">
                        Influcened development team to implement automated test builds and developed bug tracking page to increase developer efficency and reduce scope creep
                    </li>
                    <li className="list-group-item bg-secondary">
                        Mentored team members on using Git as project transferred from TFS version control
                    </li>
                    <li className="list-group-item bg-secondary">
                        Used knowledge of API's to eliminate user and project database upkeep by hooking in Microsoft graph and Planview
                    </li>
                </ul>
            </div>
        <div className="m-3">
            <div className="d-flex justify-context-between"> 
                <h4 className="flex  p-3">Fiber Performance Calculator</h4>
                <div className="flex mr-auto">
                    <a href="https://calcfiberperformance.commscope.com" className="btn btn-primary m-2 ">Link</a>    
                </div>.
                <div className="flex py-3">September 2021 - Current</div>
            </div>
            <ul className="py-3 list-group list-group-flush">
                <li className="list-group-item bg-secondary">
                    Designed top level algorthims and logic for calculator tool used by CommScope customers
                </li>
                <li className="list-group-item bg-secondary">
                    Oversaw tasks and worked with different technical groups to ensure the product met customer and technical requirements
                </li>
                <li className="list-group-item bg-secondary">
                    Managed team to meet go-to production timeline and validated that data met CommScope guidelines and warrenties      
                </li>
            </ul>
        </div>
        </div>
        <div className="jumbotron my-0">
            <h1>Mechanical and Management Experience</h1>
            <hr className="my-4 bg-secondary"></hr>
                <div className="d-flex justify-context-between">
                <h2 className="flex mr-auto p-3">R&D Test Engineer at CommScope Inc.</h2>
                <h2 className="flex p-3">June 2020 - Current</h2>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">Metrology Lab Failure Analysis Engineer</h4>
                    <div className="flex py-3">January 2021 - March 2023</div>
                </div>
                <ul className="py-4 list-group list-group-flush">
                    <li className="list-group-item bg-secondary">
                        Performed Xray analysis on a wide variety of parts from fiber connectors to RF circuit boards to determine root cause of customer complaints or requirement nono-conformance
                    </li>
                    <li className="list-group-item bg-secondary">
                        Trained multiple technicians and created 3D metrology calibration test method to allow CT scanner operation for failure and metrology analysis
                    </li>
                    <li className="list-group-item bg-secondary">
                        Streamlined scanning operation and created a file management system to get final product to customers 30% quicker
                    </li>
                </ul>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">Fiber Lab Failure Analysis Engineer</h4>
                    <div className="flex py-3">June 2020 - October 2022</div>
                </div>
                <ul className="py-4 list-group list-group-flush">
                    <li className="list-group-item bg-secondary">
                        Managed new product R&D validation testing which included scheduling, managing technicians, and troubleshooting failures.
                    </li>
                    <li className="list-group-item bg-secondary">
                        Created test procedures based on customer requirements, global and domestic standards (IEC and GR), and previous test results of similar products    
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
);
}
