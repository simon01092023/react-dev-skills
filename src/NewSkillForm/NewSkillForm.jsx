import "./NewSkillForm.css";
import { useState } from "react";

export default function NewSkillForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        level: "3",
    });

    console.log(props);
    function handleAddSkill(e) {
        e.preventDefault();
        props.addSkill(formData);
    }


    function handleChange(e) {
        const newFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newFormData)
    }


    //App logic return UI as JSX
    return (
        <>
            <form className="NewSkillForm" onSubmit={handleAddSkill}>
                <label>Skill
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        id="skillName"
                        className="skillName"
                        required // required the below pattern prop
                        pattern=".{1,}"
                    />
                </label>
                <label>Level
                    <select
                        id="skillLevel"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                        className="skillLevel">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </label>
                <button type="submit">ADD SKILL</button>
            </form>
        </>
    );
}

