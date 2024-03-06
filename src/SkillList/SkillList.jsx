import SkillListItem from "../SkillListItem/SkillListItem";

export default function SkillList({ skills }) {
    const skillListItems = skills.map((s, idx) => <SkillListItem skill={s} key={idx} />);
    //App logic return UI as JSX
    return (
        <ul>
            {skillListItems}
            {/* alternative to the above
             {skills.map(s => <SkillListItem />} */}
        </ul>
    );
}