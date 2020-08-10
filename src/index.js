import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
router.get('/some-server-route', (req, res) => {
    res.redirect('/assets/some-local-file');
});
