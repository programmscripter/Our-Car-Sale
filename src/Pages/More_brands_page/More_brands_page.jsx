import React from 'react';
import classes from '../../Css/More_brands_page_content_css/more_brands_page.module.css';
import Main_content from '../../Components/More_brands_content/Main_content/Main_content';
import Other_brands_content from '../../Components/More_brands_content/Other_brands_content/Other_brands_content';
import Top_series_content from '../../Components/More_brands_content/Top_series_content/Top_series_content';

const More_brands_page = () => {
  return (
    <div className={classes.main_block}>
      <div className={classes.main_block_inner}>
        <div className={classes.main_content}>
          <Main_content />
        </div>
        <div className={classes.other_brands_content}>
          <Other_brands_content />
        </div>
        <div className={classes.top_series_content}>
          <Top_series_content />
        </div>
      </div>
    </div>
  )
}

export default More_brands_page