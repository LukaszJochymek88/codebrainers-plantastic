import React from 'react';
import PropTypes from 'prop-types'

class Plant extends  React.PureComponent {

    render () {
        return(
            <div>
                <p>{ this.props.name }</p>
            </div>
        )
    }
}

Plant.propTypes = {
    name: PropTypes.string.isRequired
};

export default Plant;
 
 