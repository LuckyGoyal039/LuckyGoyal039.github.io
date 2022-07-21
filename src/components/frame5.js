import React from 'react';
import "../style/frame5.css";
// import Picker from 'emoji-picker-react';
import { Link } from 'react-router-dom';

function Frame5() {
    return (
        <React.Fragment>
            <div className='background' >
                <h1 className='heading1'>Hmm 😕</h1>
                <h1 className='heading2'>It seems You are not added any Number</h1>
                {/* <span className='heading3'>Try it Now</span> */}
                <Link to='/addNumber'>
                    <button className='button btn btn-primary btn-lg'>Create New</button>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Frame5;