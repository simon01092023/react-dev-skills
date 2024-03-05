import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillList from './SkillList/SkillList'
import NewSkillForm from './NewSkillForm/NewSkillForm'

function App() {
  return (
    <div className='App'>
      {/* <h1> */}
      <h1>React Dev Skills</h1>
      {/* <SkillList> */}
      <SkillList />

      {/* <hr> */}
      <hr />
      {/* <NewSkillForm> */}
      <NewSkillForm />
    </div>

  );
}

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

export default App
