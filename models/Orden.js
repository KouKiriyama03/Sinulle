const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");

const ordenSchema = new mongoose.Schema({
 cliente:
      {
        type: mongoose.Schema.ObjectId,
        ref: "Usuarios", 
    //required: true,
      },
    
      colaborador: { type: String,
       /* type: mongoose.Schema.ObjectId,
        ref: "Usuarios", */
      },
    
      servicio: String,
   
    direccion: String,
      
      fechaSolicitud: Date,

      //hora: String,

      descripcion:{
        type: String,
        //required: true,
        trim: true,
      },
      fechaCreacion: Date,
       total: Number,

});

ordenSchema.pre("save", function (next){
this.fechaCreacion = Date.now();

next();

});

module.exports = mongoose.model("Ordenes", ordenSchema);