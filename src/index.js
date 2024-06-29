import'./scss/main.scss';
import {SpyneApp} from 'spyne';
import {AppView} from './app/app-view';

const config = {
  debug:true,
  strict: false
};

SpyneApp.init(config);

new AppView().prependToDom(document.body);
