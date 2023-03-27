import React, { useContext } from 'react';
import { detailcontext } from './Home';
import { useParams } from 'react-router-dom';

function Detail() {
    const { product } = useContext(detailcontext);
    const { id } = useParams();

    const detail = product.filter(detail => detail.id === id)[0];

    if (!detail) {
        return (
            <div>
                Fetching product details...
            </div>
        );
    } else {
        return (
            <div className='fulldetail'>
                <div className='left'>
                    <img src={detail.image} alt={`${detail.brand} ${detail.model}`} />
                </div>
                <div className='right'>
                    <h1>{detail.brand} </h1>
                    <h2>{detail.model}</h2>
                    <ul>
                    <li>Rear camera: {detail.rear_camera}</li>
                    <li>Front camera: {detail.front_camera}</li>
                    <li>Screen: {detail.screen}</li>
                    <li>Storage: {detail.storage}</li>
                    <li>OS: {detail.os}</li>
                    <li>Cost: {detail.cost}</li>
                    </ul>
                    
                </div>
            </div>
        );
    }
}

export default Detail;
