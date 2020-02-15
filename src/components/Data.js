import React from 'react';

const Data = (props) =>{

    
    const {permalink,thumbnail, title, price, condition, id} = props.dato;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={thumbnail} alt={condition} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{price} COP </p>
                    <p className="card-text">{title} </p>
                    <p className="card-text">{id} ID</p>

                    <a href={permalink} target="_blank" className="btn btn-primary btn-block">Ver</a>
                </div>
            </div>
        </div>
    )

    
}

export default Data;