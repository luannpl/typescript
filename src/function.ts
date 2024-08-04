const sum = (x:number, y:number) => {
    return x + y
}

sum(2,4);

const log = (message: string): void => {
    console.log(message)
};

interface MathFunc {
    (x:number, y:number): number
}
 
const soma: MathFunc = (x:number, y:number) =>{
    return x+y
}

const sub: MathFunc = (x:number, y:number) =>{
    return x-y
}