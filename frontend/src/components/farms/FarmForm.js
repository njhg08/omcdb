import FarmPests from "./FarmPests"
import FarmDiseases from "./FarmDiseases"
import FarmPractices from "./FarmPractices"

const FarmForm = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Coordinates</label>
                    <input type='number' placeholder='Latitude' />
                    <input type='number' placeholder='Longitude' />
                </div>
                <div>
                    <label>Farm Area:</label>
                    <input type='number' placeholder="in hectares"/>
                </div>
                <div>
                    <label>Number of Trees:</label>
                    <input type='number' placeholder='less than 5 years'/>
                    <input type='number' placeholder='5 years or more'/>
                </div>
                <div>
                    <label>Calamansi Production:</label>
                    <input type='number' placeholder='during peak season'/>
                    <input type='number' placeholder='during off season'/>
                </div>
            </form>
            <FarmPests/>
        </div>
    )
}

export default FarmForm
