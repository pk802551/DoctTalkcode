import React from 'react'
import '../assets/css/loader.css';
import { IMAGE_TYPES } from '../utility-files/default-values/DefaultValues';
import Image from '../pages/common-module/Image';

function CustomLoader() {
    return (
        <div className='loader-wrapper'>
            <Image src={IMAGE_TYPES.LOAD_GIF} alt="loader" />
        </div>
    )
}

export default CustomLoader