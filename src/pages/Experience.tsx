import React from "react";


export default function Experience(){
  
  return (
    <div className="jumbotron">
        <div className="w-75 mx-auto">
            <h1>Work Experience -- CommScope Inc</h1>
            <hr className="my-4 bg-secondary"></hr>
            <div className="d-flex justify-context-between">
                <h2 className="flex mr-auto p-3">Test Engineer</h2>
                <h2 className="flex p-3">June 2020 - Current</h2>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">Lab Execution and Management System</h4>
                </div>
                <ul className="py-3 list-group list-group-flush">
                    <li className="list-group-item   bg-secondary">
                        Designed custom lab information management system to monitor utilization, store data efficiently, and automate analysis
                    </li>
                    <li className="list-group-item   bg-secondary">
                        Developed RESTful API using .NET with SQL to create management and execution application to connect data acquisition systems to enterprise resource planning systems 
                    </li>
                    <li className="list-group-item   bg-secondary">
                        Created lab tools with Typescript and React, initial features
                        improved utilization tracking, improved response time to failure
                        mode by 200%, and increased lab efficiency by 7%
                    </li>
                    <li className="list-group-item bg-secondary">
                    Built data acquisition hardware and software for environmental
                    monitoring in test labs
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
                </ul>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">Enterprise Lab Request and Resource Management System</h4>
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
                        Used knowledge of API's, corperate directory technologies (Azure Active Directory), and enterprise project management systems to eliminate user and project database upkeep by connecting application to Microsoft Graph and Planview
                    </li>
                </ul>
            </div>
        <div className="m-3">
            <div className="d-flex justify-context-between"> 
                <h4 className="flex  p-3">Fiber Performance Calculator</h4>
                <div className="flex mr-auto">
                    <a href="https://calcfiberperformance.commscope.com" className="btn btn-primary m-2 ">Link</a>    
                </div>
              </div>
            <ul className="py-3 list-group list-group-flush">
                <li className="list-group-item bg-secondary">
                    Designed top level algorthims and logic for calculator tool used by CommScope customers
                </li>
                <li className="list-group-item bg-secondary">
                    Oversaw tasks and worked with different technical groups to ensure the product met customer and technical requirements
                </li>
                <li className="list-group-item bg-secondary">
                    Managed team to meet production timeline and validated that data met guidelines and warrenties      
                </li>
            </ul>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">CT Subject Matter Expert</h4>
                </div>
                <ul className="py-4 list-group list-group-flush">
                    <li className="list-group-item bg-secondary">
                        Performed Xray analysis on a wide variety of parts from fiber connectors to RF circuit boards to determine root cause of customer complaints or requirement non-conformance
                    </li>
                    <li className="list-group-item bg-secondary">
                        Trained multiple technicians and created 3D metrology calibration test method to allow CT scanner operation for failure and metrology analysis
                    </li>
                    <li className="list-group-item bg-secondary">
                        Streamlined scanning operation and created a file management system to get final product to customers 20% quicker
                    </li>
                </ul>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">Fiber Lab Failure Analysis Engineer</h4>
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
            <hr className="my-4 bg-secondary"></hr>
            <div className="d-flex justify-context-between">
                <h2 className="flex mr-auto p-3">Engineering Co-op</h2>
                <h2 className="flex p-3">May 2018 - April 2020</h2>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">Test Lab Automation Development</h4>
                </div>
                <ul className="py-4 list-group list-group-flush">
                    <li className="list-group-item bg-secondary">
                        Worked closely with customers to obtain functional requirements for optical analysis tools</li>
                    <li className="list-group-item bg-secondary">
                        Developed visual basic for application (VBA) tools, increasing lab efficiency by 5%
                    </li>
                    <li className="list-group-item bg-secondary">
                        Assisted in maintenance and design for C# data acquisition applications
                    </li>
                    <li className="list-group-item bg-secondary">
                        Created visual basic scripts to streamline user experience with remote file storage system    
                    </li>
                </ul>
            </div>
        </div>
    </div>
);
}
