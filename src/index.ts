// Tipos Básicos

let age : number = 8;
const firstName : string = "Luan";
const isValid : boolean = true;
let evitar : any = 5;

evitar = "oi";
evitar = true;

// Array

const ids : number[] = [1,2,3,5,4];
const names : string[] = ["Luan","Michele","Luana"];

// Tupla

const person : [number, string] = [2, "Luan"];
const people : [number, string][] = [[1,"Luam"],[2,"uuu"]];

// Intersections(pode ser um tipo ou outro)

const productId: string | number = 1;

// Enum

enum Direction{
    Up = 1,
    Down = 2
}

const direction = Direction.Up;

console.log(direction)

// TypeAssertions

const productName: any = "Boné";

// let itemId = productName as string; 
let itemId = <string>productName

