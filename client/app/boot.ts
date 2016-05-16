//Import Library.
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

//Import Components.
import {Main} from './component/main/main';

//Bootstraping.
bootstrap(Main,[HTTP_PROVIDERS]);