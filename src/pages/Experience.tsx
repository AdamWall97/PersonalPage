import React from "react";
import ParkMap from "componets/ParkMap";


export default function Experience(){
  
        /*

    
    <div>
        Professional Experience


    <div>
        CommScope Inc. -- Test Engineer 
    </div>

    <div>
        Lab automation and centralization
    </div>
        <div>
            Skills:

            C# .NET API Development

            Next.JS Front End Development

            Azure Devops for bug tracking, timelines, CI/CD pipeline.

            Modular software and hardware design to fit multiple desgins and environments
        </div>

    <div>
        ULIMS Lab Management System Final Sprint and Global Release
    </div>


    <div>
        Work on Large existing codebase millions a lines and move it across the finish line in a limited time period.

        Learned new web framework language and technology over the course of 1 month to help implement required features for full release globally

        Worked with global IT teams to obtain API information regarding projects and user information instead of using existing database system

    </div>

    <div>
        Technologies:

        JQuery

        4D Backend (Similar to PHP)


    
    </div>


    <div>
        Software Project Management -- Fiber Performance Calculator
    </div>
        <div>
            Skills Used:

            Highly Effective communication skills between different technical groups

            Understanding of how to deal with requirements from global customers and dealing with diverse inputs and points of view.
        </div>
    <div>
        ULIMS - Lab Request Management System
    </div>
    <div className="col-sm">
      <ParkMap />
    </div>
    <div className="col-sm">
      <h1>Test</h1>
    </div>
    </div>
    </div>
    */
  return (
    // Important! Always set the container height explicitly
    <div className="jumbotron">
        <div className="w-75 mx-auto">
        <div className="my-0 pb-2">
            <h1>Education</h1>
            <hr className="my-4 bg-secondary"></hr>
            <div className="d-flex justify-context-between">
                <h2 className="flex mr-auto p-3 jumbotron-title">University of Minnesota -- Twin Cities</h2>
                <h2 className="flex p-3">August 2016 - May 2020</h2>
            </div>
            <div className="m-3">
                <h4>Bachlors of Science in Mechanical Engineering with a minor in Computer Science</h4>
                <p className="p-4">
                    Relevent courseworks includes Robotics, Controls, Software  Engineer and Object Oriented Design, and  
                </p>
            </div>
        </div>
        <div>
            <h1>Software Experience</h1>
            <hr className="my-4 bg-secondary"></hr>
                <div className="d-flex justify-context-between">
                <h2 className="flex mr-auto p-3">Automation Test Engineer <i>CommScope Inc.</i></h2>
                <h2 className="flex p-3">June 2020 - Current</h2>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">Lab Data Harmonization and Automation</h4>
                    <div className="flex py-3">August 2022 - Current</div>
                </div>
                <ul className="py-3 list-group list-group-flush">
                    <li className="list-group-item   bg-secondary">
                        Kickstarted and designed a global data architechture solution for all department test lab data
                    </li>
                    <li className="list-group-item   bg-secondary">
                        Developed measurement API to log lab equipment to a remote database for increased analysis efficency along with allowing for automated test reports
                    </li>
                    <li className="list-group-item   bg-secondary">
                        Used modular software and hardware design to create real-time environmental monitoring system that increased department lab efficency by 5%
                    </li>
                    <li className="list-group-item   bg-secondary">
                        Created fully automated build and deploy pipeline usinig Azure Devops to eliminate configuration time and increase security
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
                        Learned a new web framework (4D) on a time crunch to assist in bringing application to production
                    </li>
                    <li className="list-group-item bg-secondary">
                        Influcened development team to implement automated test builds to increase efficency
                    </li>
                    <li className="list-group-item bg-secondary">
                        Mentored team members on how to use Git effectivly
                    </li>
                </ul>
            </div>
        <div className="m-3">
            <div className="d-flex justify-context-between"> 
                <h4 className="flex  p-3">Fiber Performance Calculator</h4>
                <button className="flex mr-auto btn btn-primary ">Link</button>
                <div className="flex py-3">September 2021 - Current</div>
            </div>
            <ul className="py-3 list-group list-group-flush">
                <li className="list-group-item bg-secondary">
                    Managed top level design on calculator tool used by CommScope customers
                </li>
                <li className="list-group-item bg-secondary">
                    Oversaw tasks and work with different technical groups to ensure the product met customer and technical requirements
                </li>
                <li className="list-group-item bg-secondary">
                    Ensured cross-team understanding to ensure go-live met timeline live date and validated that data met CommScope guidelines and warrenties      
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
                        Performed metrology failure analysis on a wide variety of parts from fiber connectors to RF circuit boards
                    </li>
                    <li className="list-group-item bg-secondary">
                        Trained multiple technicians and created 3D calibration test method to allow CT scanner operation for failure and metrology analysis
                    </li>
                    <li className="list-group-item bg-secondary">
                        Streamlined scanning operation and analysis and created a file management system to bring in timelines  
                    </li>
                </ul>
            </div>
            <div className="m-3">
                <div className="d-flex justify-context-between"> 
                    <h4 className="flex mr-auto p-3">Fiber Lab Failure Analysis Engineer</h4>
                    <div className="flex py-3">February 2023 - Current</div>
                </div>
                <ul className="py-4 list-group list-group-flush">
                    <li className="list-group-item">
                        Managed new product testing which included scheduling, managing technicians, and troubleshooting failures.
                    </li>
                    <li className="list-group-item">
                        Worked on cross functional team to validate new design for customers
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
);
}
