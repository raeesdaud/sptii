"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import Training from "../CorpTraining/page";

const Page = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const trainingData = [
    // 1st
    {
      title: "Work at Height Training",
      description:
        "Work at height training is crucial for individuals involved in tasks that require working from elevated positions, such as construction workers, maintenance personnel, and window cleaners. This training equips participants with the knowledge and skills to identify and control hazards associated with working at height, preventing falls and minimizing the risk of serious injuries or fatalities.",
      mainText:
        "This training is designed for anyone who works at height, including:",
      listItem1: "Construction workers",
      listItem2: "Roofers",
      listItem3: "Window cleaners",
      listItem4: "Telecommunications workers",
      listItem5: "Maintenance personnel",
      listItem6: "Engineers",
      listItem7: "Surveyors",
      outlineText1: "Recognizing and assessing fall hazards.",
      outlineText2:
        "Implementing fall protection measures, including personal protective equipment (PPE), guardrails, and safety nets.",
      outlineText3: "Emergency rescue procedures for fall victims.",
      outlineText4: "Work at height regulations and compliance.",
      duration: "4-8 Hours",
    },
    // 2nd
    {
      title: "Scaffolding Training",
      description:
        "Scaffolding Training provides comprehensive instruction for individuals involved in the erection, inspection, and dismantling of scaffolds. This training ensures that participants possess the necessary skills and knowledge to safely work on scaffolds, preventing scaffold collapses and falls from heights.",
      mainText:
        "This training is designed for anyone who works with scaffolds, including:",
      listItem1: "Scaffolders",
      listItem2: "Carpenters",
      listItem3: "Roofers",
      listItem4: "Electricians",
      listItem5: "Plumbers",
      listItem6: "Painters",
      listItem7: "Laborers",
      outlineText1: "Scaffolding components and types",
      outlineText2: "Scaffolding erection and dismantling procedures",
      outlineText3: "Scaffolding inspection and maintenance techniques",
      outlineText4: "Scaffolding safety regulations and compliance",
      duration: "4-8 Hours",
    },
    // 3rd
    {
      title: "Work Permit Training",
      description:
        "Work Permit Training equips participants with the knowledge and skills to effectively manage and coordinate work activities that require specific permits or authorizations. This training ensures that hazards are identified, controlled, and monitored, minimizing the risk of accidents and ensuring compliance with safety regulations.",
      mainText:
        "This training is designed for anyone who issues, reviews, or approves work permits, including:",
      listItem1: "Supervisors",
      listItem2: "Foremen",
      listItem3: "Site managers",
      listItem4: "Safety officers",
      listItem5: "Engineers",
      listItem6: "Project managers",
      outlineText1: "Work permit identification and authorization procedures",
      outlineText2:
        "Hazard identification, risk assessment, and control measures",
      outlineText3: "Emergency response and evacuation plans",
      outlineText4: "Work permit documentation and recordkeeping",
      duration: "4-8 Hours",
    },
    // 4th
    {
      title: "Emergency Response Training",
      description:
        "Emergency Response Training provides participants with the skills and knowledge to effectively respond to emergencies in the workplace. This training enables participants to identify, assess, and control hazards, providing first aid and emergency care, and coordinating evacuation procedures.",
      mainText:
        "This training is designed for anyone who may be involved in responding to an emergency at work, including:",
      listItem1: "Emergency response team members",
      listItem2: "Supervisors",
      listItem3: "First aid responders",
      listItem4: "Employees who work in hazardous environments",
      outlineText1: "Types of emergencies and their potential consequences",
      outlineText2: "Emergency preparedness and response plans",
      outlineText3: "Incident management procedures",
      outlineText4: "First aid and CPR training",
      outlineText5: "Evacuation procedures and crowd control",
      duration: "4-8 Hours",
    },
    // 5th
    {
      title: "Risk Assessment Training",
      description:
        "Risk Assessment Training equips participants with the skills and knowledge to identify, assess, and control hazards in the workplace. This training ensures that risks are systematically evaluated, appropriate control measures are implemented, and residual risks are managed.",
      mainText:
        "This training is designed for anyone who is responsible for conducting risk assessments, including:",
      listItem1: "Supervisors",
      listItem2: "Safety officers",
      listItem3: "Engineers",
      listItem4: "Project Managers",
      outlineText1: "Risk assessment principles and methodologies",
      outlineText2: "Hazard identification and risk assessment techniques",
      outlineText3: "Risk control hierarchy and implementation strategies",
      outlineText4: "Risk assessment documentation and reporting",
      duration: "4-8 Hours",
    },
    // 6th
    {
      title: "Accident Investigation Training",
      description:
        "Accident Investigation Training provides participants with the skills and knowledge to effectively investigate workplace accidents. This training enables participants to gather evidence, analyze causes, identify contributing factors, and develop corrective actions to prevent future incidents.",
      mainText:
        "This training is designed for anyone who may be involved in investigating workplace accidents, including:",
      listItem1: "Safety officers",
      listItem2: "Supervisors",
      listItem3: "Human resources personnel",
      listItem4: "Insurance investigators",
      outlineText1: "Accident investigation principles and methodologies",
      outlineText2: "Evidence collection and preservation techniques",
      outlineText3:
        "Root cause analysis and contributing factors identification",
      outlineText4: "Corrective action plan development and implementation",
      outlineText5: "Accident investigation reporting and documentation",
      duration: "4-8 Hours",
    },
    // 7th
    {
      title: "Confined Space Entry Training",
      description:
        "Confined Space Entry Training equips participants with the knowledge and skills necessary to safely enter and work in confined spaces. This training ensures that participants understand the hazards associated with confined spaces, identify and control potential hazards, and implement safe entry procedures.",
      mainText:
        "This training is designed for anyone who works in or enters confined spaces, including:",
      listItem1: "Construction workers",
      listItem2: "Maintenance personnel",
      listItem3: "Utility workers",
      listItem4: "Tank cleaners",
      listItem5: "Wastewater treatment workers",
      outlineText1: "Recognizing confined spaces and identifying hazards",
      outlineText2: "Confined space entry procedures and permit systems",
      outlineText3: "Atmospheric monitoring and ventilation requirements",
      outlineText4:
        "Personal protective equipment (PPE) for confined space entry",
      outlineText5:
        "Emergency rescue procedures for confined space emergencies",
      duration: "4-8 Hours",
    },
    // 8th
    {
      title: "H2S Safety Training",
      description:
        "H2S Safety Training provides participants with the knowledge and skills to safely work in environments where hydrogen sulfide (H2S) may be present. This training ensures that participants understand the hazards of H2S, identify and control H2S exposure risks, and respond to H2S emergencies.",
      mainText:
        "This training is designed for anyone who works may be exposed to H2S, including:",
      listItem1: "Oil and gas workers",
      listItem2: "Wastewater treatment workers",
      listItem3: "Pulp and paper mill workers",
      listItem4: "Tannery workers",
      listItem5: "Sewer workers",
      outlineText1: "Properties and hazards of H2S",
      outlineText2: "H2S exposure limits and monitoring requirements",
      outlineText3: "Personal protective equipment (PPE) for H2S exposure",
      outlineText4: "H2S detection and alarm systems",
      outlineText5: "Emergency response procedures for H2S exposure incidents",
      duration: "4-8 Hours",
    },
    // 9th
    {
      title: "Oil Rig Safety Training",
      description:
        "Oil Rig Safety Training provides participants with the knowledge and skills to safely work on oil and gas rigs. This training ensures that participants understand the hazards of oil and gas operations, identify and control potential hazards, and implement safe work practices.",
      mainText:
        "This training is designed for anyone who works on oil and gas rigs, including:",
      listItem1: "Drillers",
      listItem2: "Riggers",
      listItem3: "Roustabouts",
      listItem4: "Mud Loggers",
      listItem5: "Geologists",
      outlineText1:
        "Hazards of oil and gas operations, including fire, explosion, and toxic exposure.",
      outlineText2:
        "Safe work practices for oil and gas operations, including personal protective equipment (PPE), emergency response procedures, and confined space entry procedures.",
      outlineText3: "Regulatory requirements for oil and gas operations.",
      duration: "4-8 Hours",
    },
    // 10th
    {
      title: "Fire Safety Training",
      description:
        "Fire Safety Training provides participants with the knowledge and skills to prevent and respond to fires in the workplace. This training ensures that participants understand the causes of fires, identify and control fire hazards, and use fire extinguishers and other fire safety equipment effectively.",
      mainText: "This training is designed for all employees, including:",
      listItem1: "Office Workers",
      listItem2: "Industrial Workers",
      listItem3: "Construction Workers",
      listItem4: "Healthcare Workers",
      outlineText1: "Fire prevention and control principles.",
      outlineText2: "Fire hazard identification and assessment.",
      outlineText3: "Fire extinnguisher training.",
      outlineText4: "Fire alarm systems and evacuation procedures.",
      outlineText5: "Fire safety regulations and compliance.",
      duration: "4-8 Hours",
    },
    // 11th
    {
      title: "First Aid Training",
      description:
        "First Aid Training provides participants with the knowledge and skills to provide basic first aid care for common injuries and illnesses. This training ensures that participants can assess the situation, provide appropriate first aid, and call for emergency assistance when necessary.",
      mainText: "This training is designed for all employees, including:",
      listItem1: "Office Workers",
      listItem2: "Industrial Workers",
      listItem3: "Construction Workers",
      listItem4: "Teachers",
      listItem5: "Parents",
      outlineText1: "Basic first aid principles and procedures",
      outlineText2: "Assessing the situation and prioritizing care",
      outlineText3:
        "First aid for common injuries, such as cuts, burns, and sprains",
      outlineText4:
        "First aid for common illnesses, such as choking, heart attack, and stroke",
      outlineText5: "Emergency response procedures",
      duration: "4-8 Hours",
    },
    // 12th
    {
      title: "Food Safety Training",
      description:
        "Food Safety Training equips participants with the knowledge and skills necessary to handle and prepare food safely to prevent foodborne illnesses. This training ensures that participants understand the principles of food safety, identify and control food hazards, and implement safe food handling practices.",
      mainText:
        "This training is designed for anyone who handles or prepares food, including:",
      listItem1: "Restaurant Workers",
      listItem2: "School cafeteria  Workers",
      listItem3: "Food truck Workers",
      listItem4: "Home Cook",
      outlineText1: "Principles of food safety and sanitation",
      outlineText2: "Foodborne illness prevention and control",
      outlineText3: "Personal hygiene practices for food handlers",
      outlineText4: "Food temperature control and handling",
      outlineText5: "Cleaning and sanitizing procedures",
      outlineText6: "Pest control and food storage",
      duration: "4-8 Hours",
    },
    // 13th
    {
      title: "Crane Safety Training program",
      description:
        "Crane Safety Training equips individuals with the knowledge and skills to safely operate and work around cranes, minimizing the risk of accidents and injuries. This training is essential for anyone involved in crane operations, including crane operators, riggers, signal persons, supervisors, and maintenance personnel.",
      mainText:
        "This training is designed for anyone who works with scaffolds, including:",
      listItem1: "Crane operators",
      listItem2: "Riggers",
      listItem3: "Signal Persons",
      listItem4: "Supervisors",
      listItem5: "Maintenance personnel",
      outlineText1: (
        <>
          <p>Introduction to Cranes and Crane Safety:</p>
          <ul className="pl-2 py-2 text-gray-600">
            <li>Types of cranes and their applications</li>
            <li>Crane components and their functions</li>
            <li>Crane safety hazards and risk assessment</li>
          </ul>
        </>
      ),
      outlineText2: (
        <>
          <p>Crane Operation and Control Procedures:</p>
          <ul className="pl-2 py-2 text-gray-600">
            <li>Preparing the crane for operation</li>
            <li>Pre-operation inspections and checklists</li>
            <li>Crane control systems and maneuvering techniques</li>
            <li>Load handling and lifting procedures</li>
          </ul>
        </>
      ),
      outlineText3: (
        <>
          <p>Crane Safety Hazards and Risk Control:</p>
          <ul className="pl-2 py-2 text-gray-600">
            <li>Identifying and assessing crane safety hazards</li>
            <li>Implementing risk control measures for crane operations</li>
            <li>
              Personal protective equipment PPE for crane operators and riggers
            </li>
            <li>Ground conditions and stability assessments</li>
          </ul>
        </>
      ),

      outlineText4: (
        <>
          <p>Crane Signal Systems and Communication:</p>
          <ul className="pl-2 py-2 text-gray-600">
            <li>Understanding crane signal systems and hand signals</li>
            <li>
              Effective communication between crane operators, riggers, and
              signal persons
            </li>
            <li>Establishing clear and concise communication protocols</li>
          </ul>
        </>
      ),
      outlineText5: (
        <>
          <p>Emergency Response Procedures for Crane Incidents:</p>
          <ul className="pl-2 py-2 text-gray-600">
            <li>
              Responding to crane tip-overs, load swings, and other emergencies.
            </li>
            <li>
              Evacuation procedures and emergency rescue techniques o Incident
              reporting and investigation procedures.
            </li>
            <li>Incident reporting and investigation procedures.</li>
          </ul>
        </>
      ),
      duration: "4-8 Hours",
    },
  ];

  return (
    <div>
      <Container>
        <div className="p-4">
          <h1 className="py-6 text-2xl font-bold my-4 text-primary-green">
            CORPORATE TRAININGS
          </h1>
          <div>
            <div className="pb-8 text-[14px] md:text-[16px] flex flex-col xl:flex-row gap-8">
              <div className="left py-4 h-[100%] w-[100%] xl:w-[25%] bg-gray-100 flex flex-col text-center">
                {/* Map Function */}
                {trainingData.map((item, index) => (
                  <div
                    key={index}
                    className={`py-4 cursor-pointer ${
                      selectedItem === index
                        ? "bg-primary-green text-white"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleItemClick(index)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
              <div className="right w-[100%] xl:w-[75%] ">
                {selectedItem !== null && (
                  <Training
                    title={trainingData[selectedItem].title}
                    description={trainingData[selectedItem].description}
                    mainText={trainingData[selectedItem].mainText}
                    listItem1={trainingData[selectedItem].listItem1}
                    listItem2={trainingData[selectedItem].listItem2}
                    listItem3={trainingData[selectedItem].listItem3}
                    listItem4={trainingData[selectedItem].listItem4}
                    listItem5={trainingData[selectedItem].listItem5}
                    listItem6={trainingData[selectedItem].listItem6}
                    listItem7={trainingData[selectedItem].listItem7}
                    outlineText1={trainingData[selectedItem].outlineText1}
                    outlineText2={trainingData[selectedItem].outlineText2}
                    outlineText3={trainingData[selectedItem].outlineText3}
                    outlineText4={trainingData[selectedItem].outlineText4}
                    outlineText5={trainingData[selectedItem].outlineText5}
                    outlineText6={trainingData[selectedItem].outlineText6}
                    duration={trainingData[selectedItem].duration}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
