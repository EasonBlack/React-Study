import express from 'express';
import React from 'react';
import ReactDOMServer  from 'react-dom/server';

import path from 'path';

import App from '../app/App';
import template from './template';

const app = new express();

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    const isMobile = true;
    const initialState = { isMobile };
    const appString = ReactDOMServer.renderToString(<App {...initialState}/>);
  
    res.send(template({
      body: appString,
      title: 'Hello World from the server',
      initialState: JSON.stringify(initialState)
    }));
  });

app.listen(3000,function(){
    console.log('server is running at 3000');
});

export default app;

