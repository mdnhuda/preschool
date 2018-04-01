import React from 'react';
import PropTypes from 'prop-types';

const OneWord = (props) => ({
    render() {
        const wordElem = this.props.word.split('').map((c, idx) => {
            return <span style={{fontSize: '24px', padding: '5px'}}>{idx % 2 == 1 ? '_' : c}</span>
        });

        return props.image &&
            <div style={{border: '1px dotted gray', width: '200px', float: 'left'}}>
                <span>{wordElem}</span>
                <span style={{paddingLeft: '10px'}}><img src={this.props.image} width="50px" height="50px"/></span>
            </div>;
    }
});

OneWord.propTypes = {
    word: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default OneWord;