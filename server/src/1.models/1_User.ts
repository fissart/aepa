import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    foto: String,
    rol: String,
    celular: String,
    carrera: String,
    mension: String,
    ciclo: String,
    sexo: String,
    dni: String,
    password: String,
    name: String,
    email: String,
    filosophy: String,
},{
    timestamps: true
});

export interface IUser extends Document {
    foto: string;
    rol: string;
    celular: string,
    carrera: string,
    mension: string,
    ciclo: string,
    sexo: string,
    dni: string,
    password: string;
    name: string;
    email: string;
    filosophy: string
}

export default model<IUser>('User', schema);
/*
foto: String,
rol: String,
password: String,
name: String,
dni: String,
email: String, %dni-añoingreso(last_two)%
ingreso: String,
egreso: String,
matricula: String,
indiceacdemico: String,
dscp: String,
codigo: String,
nacimiento: String,
sexo: String,
celular: String,
ciclo: String,
carrera: String,
sisfoh: String,
*/


/*

//ingreso
nrecibo
fecha
remitente
descripcion
monto

//EGRESos
fecha
tipodocumento
nreciboemisor
nombre
cantidad
preciounitario
concepto
monto
*/
