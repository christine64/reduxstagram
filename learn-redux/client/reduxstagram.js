import React from 'react';

import { render } from 'react-dom';

// import CSS
// webpack handles CSS loading, so don't need link tag inside html
import css from './styles/style.styl'

render(<p>Hi</p>, document.getElementById('root'));

