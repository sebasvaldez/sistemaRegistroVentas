import app from "./app.js"
import {connectDD} from "./db.js"


connectDD();


//asigno un puerto para que escuche el servidor
app.listen(4000, () => {console.log("server on port 4000")})



