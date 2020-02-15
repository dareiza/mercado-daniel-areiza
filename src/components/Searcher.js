import React, { Component } from 'react';

class Searcher extends Component {

    searchRef = React.createRef();

    getData = (e) =>{
        e.preventDefault();

        //Se toma el valor del input
        const term =this.searchRef.current.value;

        // Se envia el valor al componente principal
        this.props.dataSearch(term);
    }

    render() { 
        return ( 
            <form onSubmit={this.getData}> 
                <div className="row">
                    
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control
                        form-control-lg" placeholder="Busca un artículo
                        Ejemplo: balón"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" 
                        value="Buscar"/>
                    </div>
                </div>
            </form>
         );
    }
}

 
export default Searcher;