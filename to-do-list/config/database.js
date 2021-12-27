const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo-list',
 {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(()=>console.log("Banco mongodb conectado"))
.catch((e)=>console.error(e))