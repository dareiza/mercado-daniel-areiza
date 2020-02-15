import React, { Component } from 'react';
import Data from './Data'
import Pagination from './Pagination';
class Result extends Component {
    showData =()=> {

        const data =this.props.data;

        if(data.length === 0) return null;


        // console.log(data);

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {data.map(dato=>(
                        <Data
                            key={data.id}
                            dato={dato}
                        />
                    ))}
                </div>
                <Pagination
                    previousPage={this.props.previousPage}
                    nextPage={this.props.nextPage}
                />
            </React.Fragment>
        )
    }
    
    render() { 
        return ( 
            <React.Fragment>
                {this.showData()}
            </React.Fragment>
         );
    }
}
 
export default Result;