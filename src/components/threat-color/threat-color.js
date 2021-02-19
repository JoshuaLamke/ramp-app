import React, {useState, useEffect} from 'react';

let ThreatColor = (props) => {
    const [threatColor, setThreatColor] = useState('white');
    const [level, setLevel] = useState(props.level);
    useEffect(() => {
        setLevel(props.level);
        if(level <= 1.6) {
            setThreatColor('red');
        }
        else if(level <= 2.39) {
            setThreatColor('yellow');
        }
        else {
            setThreatColor('green');
        }
    }, [props.level, level])
    return (
        <div className="d-flex justify-content-center align-items-center" id="threat-rating" style={{'backgroundImage': `linear-gradient(to right, ${threatColor} 0%, rgb(255, 255, 255) 20%)`,'width': '50px'}}>
            {props.level}
        </div>
    )
}
export default ThreatColor;