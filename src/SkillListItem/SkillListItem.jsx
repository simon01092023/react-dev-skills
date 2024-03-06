
import './SkillListItem.css'

export default function SkillListItem({ skill }) {
    //App logic return UI as JSX
    return (
        <li className="SkillListItem">{skill.name}
            <div className='flex-ctr-ctr'>{` LEVEL ${skill.level}`}
            </div>
        </li>

    );
}