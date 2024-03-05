export default function NewSkillForm() {
    //App logic return UI as JSX
    return (
        <form>
            <label for="skillName">Skill</label>
            <input type="text" id="skillName" className="skillName" />
            <label for="skillLevel">Level</label>
            <select id="skillLevel" name="skillLevel">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button type="submit">ADD SKILL</button>
        </form>
    );
}

