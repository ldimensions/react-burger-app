import React, {Components} from 'react';
import PropTypes from 'prop-types';

import className from './BurgerIngredient.css'

class BurgerIngredient extends React.Component {
    
    render () {
        let ingredient = null;
        
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={className.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={className.BreadTop}>
                        <div className={className.Seeds1}></div>
                        <div className={className.Seeds2}></div>
                    </div>
                );
                break; 
            case ('meat'):
                ingredient = <div className={className.Meat}></div>
                break;  
            case ('cheese'):
                ingredient = <div className={className.Cheese}></div>
                break;      
            case ('bacon'):
                ingredient = <div className={className.Bacon}></div>
                break;    
            case ('salad'):
                ingredient = <div className={className.Salad}></div>
                break;       
            default:
            ingredient = null;                                                    
        }
        return ingredient;
    };
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;