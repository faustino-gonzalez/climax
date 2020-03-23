import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {
    

    mostrarResultado=()=>{

const {name, weather, main}= this.props.resultado;

if (!name  || !weather || !main) {
    return null;

}
const kelvin = 273.15;
const alt = `clima de: ${name}`;
const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
return (<div className="row">
<div className="col s12 m6">
  <div className="card blue-grey darken-1">
    <div className="card-content white-text">
<span className="card-title">{name}</span>
      <p>Temeratura actal: {(main.temp - kelvin).toFixed(2)  } &deg;C 
      <img src={urlIcono}  alt={alt}/>
      </p>

      <p>Max.  {main.temp_mx - kelvin  } &deg;C </p>
      <p>Min.  {main.temp_min - kelvin  } &deg;C </p>

    </div>
    <div className="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div>)

    }
    
    render() { 

        console.log(this.props.resultado);
        return ( 

            <div className="container">

{this.mostrarResultado()}            </div>
         );
    }
}
 

Clima.propTypes ={

resultado: PropTypes.object.isRequired

}

export default Clima;