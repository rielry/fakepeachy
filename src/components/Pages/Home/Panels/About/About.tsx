import React from "react";
import "./About.scss";
import StyledText from "../../../../StyledText/StyledText";
import { TextStyle } from "../../../../../constants/TextStyles";

export default class About extends React.Component {
    render() {
        return (
            <div className="About">
                <div className="Content">
                    <div className="Welcome">
                        <StyledText style={TextStyle.DISPLAY}>Welcome, thanks for stopping by!</StyledText>
                    </div>
                    <div className="Image">
                        <div className="placeholder"></div>
                    </div>
                    <div className="Text">
                        <StyledText style={TextStyle.BODY}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et dui ligula. Vestibulum vestibulum iaculis sapien eu varius. Maecenas fermentum eu ante vel fermentum. Nam nec varius felis. Fusce commodo urna sed enim condimentum maximus. Proin scelerisque tempus sagittis. Pellentesque tristique magna vitae massa pharetra, et convallis felis feugiat. Morbi pharetra vitae velit vitae commodo. Mauris sagittis sit amet justo ac dictum. Nullam tristique sem sed erat mattis, pharetra scelerisque ex maximus. Maecenas tincidunt mauris vel massa consectetur, ut porta enim rhoncus. Sed sed diam sit amet nisl iaculis eleifend. Sed scelerisque pulvinar magna non commodo. Sed vitae diam non nunc viverra dictum.

Nulla et ante nec eros auctor maximus. Suspendisse potenti. Aenean sed egestas libero. Sed magna sem, porttitor quis cursus eget, venenatis vel diam. Maecenas posuere quam risus, ac consectetur est fermentum nec. Aenean laoreet neque ut sapien auctor, a malesuada nisi ultrices. In ac placerat neque, id hendrerit ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ultricies felis. Maecenas vel erat nisl. Curabitur porta nisl ut neque vehicula fermentum. Fusce nec odio libero. Integer felis felis, commodo in ex vel, sagittis dignissim sem. Nunc tempus tellus eu nibh molestie, sed accumsan ligula tincidunt. Duis ultricies, sem eget placerat finibus, augue eros luctus risus, non blandit dui libero vitae justo.
                        </StyledText>
                    </div>
                </div>
            </div>
        )
    }
}