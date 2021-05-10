
import React from 'react'
import './donor.css';
function Card(){
    return(
        <div className='card-container'>
            <div className="image-container">
                <img className="pic" src={`${process.env.PUBLIC_URL}/mypic.jpg`} alt="pic"/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>card title</h3>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt.</p>
                </div>
                <div className="btn">
                    <button>
                        <a>View more</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card;