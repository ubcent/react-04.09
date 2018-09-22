/********************************************************************
 * Includes                                                          *
 ********************************************************************/

/*import styles*/
import './Archive.scss';

/*import libs*/
import React, {Component} from 'react';
import  PropTypes from 'prop-types';

/*User input*/

/********************************************************************
 * Code                                                             *
 ********************************************************************/

/**
 * @brief  Отрисовка бокового окна с ссылками на архив
 * @retval  Отрисованное окно со спискм ссылок
 */
export default class Archive extends Component {
    static propertyTypes = {
        archiveList: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    render() {
        const {archiveList} = this.props;
        return (
            <div className={'archive'}>
                <h3>Архив</h3>
                <ul>
                    {archiveList.slice(0,10).map((item, index)=>{
                        return <li className="archiveItem" key={index}><a href={item.href} className="archivelink">{item.date}</a></li>;
                    })}
                </ul>
            </div>
        )
    }
}