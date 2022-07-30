console.clear();
console.log("Hola mundo 4");
import path from "path";
import morgan from "morgan";
import createExpressServer from "express";
import router  from "./routes/services.js";

//Se instancia el servidor para poder configurar
const expressApp = createExpressServer();



//routes
expressApp.use('/',router);


//settings
expressApp.set('port', process.env.PORT || 4000);
expressApp.set('views', path.join('.', 'views'));
//app.set('view engine', 'ejs'); 



//middlewares
expressApp.use(morgan('dev'));
expressApp.use(createExpressServer.urlencoded({extended: false}));

expressApp.listen(expressApp.get('port'),()=>{
	 console.log(`Server on port ${expressApp.get('port')}`); 
});


