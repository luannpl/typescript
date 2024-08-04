// Type 
type Order = {
    price: number,
    id: string
}
type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string; /*opcional*/
    orders: Order[];
    register(): string
};

const user: User ={
    firstName: "Luan",
    age: 22,
    email: 'luan@1',
    orders: [
        {price: 20, id: "1"}
    ],
    register() {
        return "a";
    },
}

const pritnLOg = (message: string) => {
}
pritnLOg(user.password!)

// Unions

type Author = {
    books: string[];
}

const author: Author & User = {
    firstName: 'Paulo',
    age: 22,
    books: ["Tecnolo"],
    email: 'luan@1',
    orders: [
        {price: 20, id: "1"}
    ],
    register() {
        return "a";
    }
}

//Interfaces

interface UserInterface{
    firstName: string,
    age: number
}

interface AuthorInterface{
    books: string[]
}

const emailUser : UserInterface = {
    firstName: 'Luan',
    age: 22
}

const newAuthor: UserInterface & AuthorInterface = {
    firstName : 'JESUS',
    age: 33,
    books: []
}