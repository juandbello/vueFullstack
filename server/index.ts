import app from './app';
import {mongoConn} from './database';
mongoConn();
app.listen(3000);
console.log('Serever port 3000')