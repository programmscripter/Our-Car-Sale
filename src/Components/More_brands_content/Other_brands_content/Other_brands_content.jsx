import React from 'react';
import classes from '../../../Css/More_brands_page_content_css/other_brands_content.module.css';
import { fifth_list, first_list, fourth_list, second_list, third_list } from './other_brands_list';
import { Arrow_icon } from '../../../Svg/svg';
import { Link } from 'react-router-dom';

const Other_brands_content = () => {
    const title = "Other brands";
  return (
    <div className={classes.main_block}>
        <div className={classes.main_block_inner}>
            <p className={classes.title}>{title}</p>
            <div className={classes.grid}>
                <div className={classes.grid_inner}>
                    <div className={classes.block}>
                        {first_list.map((item, index) => {
                            return (
                                <Link to={index === 0 ? "/" : `/${item}`} key={index}>
                                    <Arrow_icon />
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                    <div className={classes.block}>
                        {second_list.map((item, index) => {
                            return (
                                <Link to={index === 0 ? "/" : `/${item}`} key={index}>
                                    <Arrow_icon />
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                    <div className={classes.block}>
                        {third_list.map((item, index) => {
                            return (
                                <Link to={index === 0 ? "/" : `/${item}`} key={index}>
                                    <Arrow_icon />
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                    <div className={classes.block}>
                        {fourth_list.map((item, index) => {
                            return (
                                <Link to={index === 0 ? "/" : `/${item}`} key={index}>
                                    <Arrow_icon />
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                    <div className={classes.block}>
                        {fifth_list.map((item, index) => {
                            return (
                                <Link to={index === 0 ? "/" : `/${item}`} key={index}>
                                    <Arrow_icon />
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Other_brands_content