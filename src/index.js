//import './css/main.css';
import './scss/main.scss';

import {hello, other} from './js/module';

console.log("hi from webpack")
hello();
other();

console.log("webpack watch is working")