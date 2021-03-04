import React, {useState, useEffect} from 'react';

let ThreatColor = (props) => {

    const [threatColor, setThreatColor] = useState('white');
    const [level, setLevel] = useState(props.level);
    let width = '50px'
    let height = '30px'
    if(props.size) {
        width = props.size.width;
        height = props.size.height;
    }
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
        if(props.color) {
            setThreatColor(props.color);
        }
    }, [props.level, level])
    return (
        <div className="d-flex justify-content-center align-items-center" id="threat-rating" style={{'backgroundImage': `linear-gradient(to right, ${threatColor} 0%, rgb(255, 255, 255) 20%)`,'width': width,'height': height}}>
            {props.level}
        </div>
    )
}
export default ThreatColor;