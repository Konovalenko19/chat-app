import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'Components/Button';

import './index.css';

const App = () => (
    <div>
        My first react-webpack app 1!
        <hr />
        <Button>Hello!</Button>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
