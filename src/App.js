import React, {useEffect, useState} from "react";
import './App.css';
import Team from "./Team";

const App = () => {
    const [teams,setTeams] = useState([]);
    useEffect(()=>{
        const getData = async () => {fetch("https://degerlendirmesistemi.online/scoreboard-ajax.php").then((response)=>{
            return response.json();
        }).then((data)=>{
            setTeams(data);
            console.log("Done");
        })}
        setTimeout(()=>{
            getData();
        },3000)
    },[teams]);

    return <Team data={teams}></Team>;


};

export default App;
