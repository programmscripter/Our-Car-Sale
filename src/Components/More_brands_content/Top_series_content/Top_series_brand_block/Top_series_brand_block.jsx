import React, { useState } from 'react';
import classes from '../../../../Css/More_brands_page_content_css/top_series_brand_block.module.css';
import { Link } from 'react-router-dom';

const Top_series_brand_block = ({ first_img, second_img, title, index }) => {
    const [imageSrc, setImageSrc] = useState(second_img);

    const handleMouseOver = () => {
        setImageSrc(second_img);
    };

    const handleMouseOut = () => {
        setImageSrc(first_img);
    };
    return (
        <Link to={`/brands/${index}`}>
            <div className={classes.block}>
                <div className={classes.img_block}>
                    <img 
                        src={imageSrc} 
                        alt=""
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut} 
                    />
                </div>
                <div className={classes.title_block}>
                    <p className={classes.title}>{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default Top_series_brand_block