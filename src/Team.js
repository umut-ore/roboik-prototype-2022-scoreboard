import React, {forwardRef} from "react";
import FlipMove from "react-flip-move";

const TeamData = forwardRef((props, ref) => (

    <tr ref={ref}>
            <td className="pr-3 py-3">{props.projectName}</td>
            <td className="pr-3">{props.projectTeam}</td>
            <td className="pr-3">{(!isNaN(parseFloat(props.scoreOne).toFixed(2)))?parseFloat(props.scoreOne).toFixed(2):"Henüz Puanlanmadı"}</td>
            <td className="pr-3">{(!isNaN(parseFloat(props.scoreTwo).toFixed(2)))?parseFloat(props.scoreTwo).toFixed(2):"Henüz Puanlanmadı"}</td>
            <td className="pr-3">{(!isNaN(parseFloat(props.scoreJudge).toFixed(2)))?parseFloat(props.scoreJudge).toFixed(2):"Henüz Puanlanmadı"}</td>
            <td className="pr-3">{(!isNaN(parseFloat(props.scoreAvg).toFixed(2)))?parseFloat(props.scoreAvg).toFixed(2):"Henüz Puanlanmadı"}</td>
    </tr>
));

// you do not have to modify the parent component
// this will stay as described in the quickstart
const Team = (props) => (
    <FlipMove typeName='tbody' duration="1500">
        {props.data.map(team => (
            <TeamData key={team.id} {...team} />
        ))}
    </FlipMove>
);

export default Team;