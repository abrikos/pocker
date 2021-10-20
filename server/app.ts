import express from "express";
import path from "path";
const app = express();
const port = 3001; // default port to listen

// Configure Express to use EJS
//app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.send( {ok:200} );
} );

// start the express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );