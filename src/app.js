import React, {Component} from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<div>
		Hello World!
	</div>,
	document.getElementById('root')
);

if(module.hot){ 
    module.hot.accept()
}
