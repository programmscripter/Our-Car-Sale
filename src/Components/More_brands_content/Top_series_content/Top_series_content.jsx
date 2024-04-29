import React from 'react';
import classes from '../../../Css/More_brands_page_content_css/top_series_content.module.css';
import { topSeriesContentList } from './top_series_content_list';
import Top_series_brand_block from './Top_series_brand_block/Top_series_brand_block';

const Top_series_content = () => {
    const title = "Top Series";
  return (
    <div className={classes.main_block}>
        <div className={classes.main_block_inner}>
            <p>{title}</p>
            <div className={classes.grid}>
                <div className={classes.grid_inner}>
                    {topSeriesContentList.map((brand, index) => {
                        return (
                            <Top_series_brand_block 
                                key={index}
                                index={index}
                                first_img={brand.first_img}
                                second_img={brand.second_img}
                                title={brand.title}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top_series_content