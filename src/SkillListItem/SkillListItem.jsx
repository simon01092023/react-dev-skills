
import './SkillListItem.css'

export default function SkillListItem({ skill }) {
    //App logic return UI as JSX
    return (
        <div>
        <li className="SkillListItem">{skill.name}
            <span className='level'>Level {skill.level}
            </span>
        </li>
        </div>

    );
}