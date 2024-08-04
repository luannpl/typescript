const returnValue = <T>(value: T): T => value;

const message = returnValue<String>('Hello World');

const count = returnValue<number>(5);

function getValue <T>(array: T[]){
    return array[0]
}

const valueString = getValue(['a', 'b']);
const valueNumber = getValue([1, 2]);
