import React from 'react'
import ReactDom from 'react-dom';
import {SpeechProvider} from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDom.render(
    <SpeechProvider appId="2476790b-6eb4-48f6-baf0-b13205489f90" language="en-US">
        <Provider>
        <App/>
    </Provider>
    </SpeechProvider>
    ,
    document.getElementById('root')
);



