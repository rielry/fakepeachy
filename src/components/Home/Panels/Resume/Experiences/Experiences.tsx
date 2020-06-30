import React from "react";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";
import Experience from "./Experience";

export default class Experiences extends React.Component {
    render() {
        return (
            <div className="Section">
                <StyledText style={TextStyle.DISPLAY}>Experience</StyledText>
                <div className="SectionContent">
                    <Experience
                        title="Software Development Intern"
                        employer="TD Ameritrade"
                        startDate="May 2019"
                        location="Omaha, NE"
                        description={
                            [
                                "Developed ReactJS application for TD Ameritrade analysts to aggregate datapoints",
                                "Assisted and participated in creating intuitive and meaningful UX designs through Design Thinking and Lean UX principles"
                            ]
                        }
                    />
                    <Experience
                        title="Undergraduate Teaching Assistant"
                        employer="University of Nebraska - Lincoln"
                        startDate="January 2017"
                        endDate="August 2019"
                        location="Lincoln, NE"
                        description={
                            [
                                "Developed solutions for homework and lab assignments",
                                "Assisted students in learning C, Java, JavaScript, PHP, object oriented programming, relational databases, introduction to discrete mathematics"
                            ]
                        }
                    />
                    <Experience
                        title="Undergraduate Research Assistant"
                        employer="University of Nebraska - Lincoln"
                        startDate="January 2018"
                        endDate="January 2019"
                        location="Lincoln, NE"
                        description={
                            [
                                "Developed online archive using Omeka, a PHP tool for digital humanities created with non technicians in mind",
                                "Created interactive relationship visualization web of relationships and a chronology using D3.js"
                            ]
                        }
                    />
                    <Experience
                        title="Software Development Intern"
                        employer="Union Pacific Railroad"
                        startDate="May 2018"
                        endDate="August 2018"
                        location="Omaha, NE"
                        description={
                            [
                                "Created mobile interface to improve the way inspection and maintenance records are kept for Union Pacific's lift equipments"
                            ]
                        }
                    />
                    <Experience
                        title="Senior Capstone Student Developer"
                        employer="TD Ameritrade"
                        startDate="August 2017"
                        endDate="May 2018"
                        location="Lincoln, NE"
                        description={
                            [
                                "Developed internal application for TD Ameritrade analysts that eliminated many of the cumbersome and error prone processes in practice"
                            ]
                        }
                    />
                    <Experience
                        title="Software Engineering Intern"
                        employer="Experian PLC"
                        startDate="May 2017"
                        endDate="August 2017"
                        location="Lincoln, NE"
                        description={
                            [
                                "Designed and developed a system to replace an old internal software through Alteryx Designer"
                            ]
                        }
                    />
                </div>
            </div>
        )
    }
}