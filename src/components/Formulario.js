import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Formulario extends Component {

//crear refs

ciudadRef= React.createRef();
paisRef= React.createRef();


    enviarClima = (e) =>{
e.preventDefault();

//leer refs
const respuesta = {

ciudad: this.ciudadRef.current.value,
pais: this.paisRef.current.value

}


//console.log(respuesta);
//enviar props

this.props.datosConsulta(respuesta);
////opcional reset form

    }
    render() { 
        return (

<div className="contenedor-form"
>

    <div className="container">
        <div className="row">
            <form onSubmit={this.enviarClima}>
<div className="input-field col s12 m8 l4 offset-m2" >
    <input id="ciudad" ref={this.ciudadRef} type="text" />
    <label htmlFor="ciudad">Ciudad: </label>

</div>
<div className="input-field col s12 m8 l4 offset-m2" >
    <select ref={this.paisRef}>
        <option value="" defaultValue>Elige un Pais</option>
        <option value="AR">ARGENTINA</option> 
        <option value="CO"> COLOMBIA</option> 
        <option value="CR"> COSTA RICA</option> 
        <option value="ES"> ESPAÑA</option> 
        <option value="US"> ESTADOS UNIDOS</option> 
        <option value="MX"> MEXICO</option> 
        <option value="PE"> PERU</option> 
        



    </select>
    <label htmlFor="pais">Pais: </label>

</div>
<div className="input-field col s12 m8 l4 offset-m2 buscador">

<input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar" />

</div>
            </form>


        </div>

    </div>
</div>

          );
    }
}
 

Formulario.propTypes ={

    datosConsulta: PropTypes.func.isRequired
}
export default Formulario;