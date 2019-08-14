import React from "react";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";
import Activity from "./Activity";

export default class Acitivities extends React.Component {
    render() {
        return (
            <div className="Section">
                <StyledText style={TextStyle.DISPLAY}>Activities</StyledText>
                <div className="SectionContent">
                    <Activity
                        title="Peer Mentor"
                        entity="Department of Computer Science & Engineering, University of Nebraska - Lincoln"
                        startDate="January 2018"
                    />
                    <Activity
                        title="Initialize UNL (Formerly Computer Science and Engineering Ambassadors)"
                        entity="University of Nebraska - Lincoln"
                        description="Public Relations Chair"
                        startDate="January 2017"
                        endDate="May 2018"
                    />
                    <Activity
                        title="Peer Mentor"
                        entity="University Honors Program, University of Nebraska - Lincoln"
                        startDate="January 2016"
                        endDate="October 2017"
                    />
                </div>
            </div>
        )
    }
}