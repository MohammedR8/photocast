import Coming from './Coming.js'
import Humidity from './Humidity.js'
import Exposure from './Exposure.js'
import c from './Exposure.js'

const MoreInfo = ({weatherData}) => {
  console.log(weatherData)
  return (
    <div id="moreinfo">
      __________________________________________
      <div className="linesInfo">
        <Coming name="Alexis" due="28.02"/>
      </div>
      <div className="linesInfo">
        <Exposure cloudCover={50}/>
      </div>

      <div className="blockInfo">
        <Coming name="Jhanvi" due="4.03" />
      </div>

      <div className="linesInfo ext">
        <Humidity humidity="10%" cloud="40%" visibility={weatherData['visibility']}/> 
      </div>

      <div className="blockInfo">
        <Coming name="Mohammed" due="4.03" comment={"isMetric : boolean"}/>
      </div>

    </div>
  )
}

export default MoreInfo
