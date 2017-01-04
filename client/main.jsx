import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';


// Some initialization code (in our client/main.js client JavaScript entrypoint), in a Meteor.startup block, which knows how to call code when the page is loaded and ready. This code loads the other components and renders them into the #render-target html element.
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
