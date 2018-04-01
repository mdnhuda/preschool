import React from 'react';
import {render} from 'react-dom';
import OneWord from './OneWord';
import words from './words';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {words};
    }

    render() {
        const list = this.state.words.map(it => {return <OneWord word={it.word} image={it.image} />});
        return <div>{list}</div>;
    }
}


render(<App/>, document.getElementById('app'));