import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SkillList from './SkillList/SkillList';
import NewSkillForm from './NewSkillForm/NewSkillForm';


export default function App() {
  //const showSkills =  useState(skills);
  const [skills, setSkills] = useState([{ name: "HTML", LEVEL: 5 },
  { name: "CSS", lEVEL: 3 },
  { name: "JavaScript", LEVEL: 4 },
  { name: "Python", LEVEL: 2 },]);

  //const [] = useState(); boilder plate
  const [showSkills, setShowSkills] = useState(true);
  //skill perimeter respresent the form data argument 
  function addSkill(skill) {
    //replace state
    setSkills([...skills, skill]);

  }

  return (
    <>
      <div className='App'>
        {/* <h1> */}
        <h1 className='teal-text'>React Dev Skills</h1>
        {/* <SkillList>  constionally render/set by useState*/}
        {showSkills && <SkillList skills={skills} />}
        {/* <hr> */}
        <hr />
        {/* <NewSkillForm> */}
        <NewSkillForm addSkill={addSkill} />
      </div>
    </>
  );
}