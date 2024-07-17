// primitive types
// string, boolean, number, null, undefined, symbol, bigInt

//reference types
// object, function, arrays

//reference types
// более сложная структура, имеют свойства и методыб ссылочный тип данных (хранит ссылку)

// const a = {
//     id: 2
// } // #123

// const b = a // #123

// console.log('b: ', b)
// console.log('isEqual: ', a == b) // isEqual: true #123 == #123 -> true

// const c = {
//     id: 3
// } // #555

// const d = {
//     id: 3
// } // #666

// console.log('C: ', c)
// console.log('D: ', d)
// console.log('isEqual: ', c == d) // isEqual: false

//////////

// const obj1 = {
//     id: 1,
//     isStudent: false,
//     name: 'Bob'
// } // #333
//
// const obj2 = {
//     id: obj1.id,
//     isStudent: obj1.isStudent,
//     name: obj1.name,
// } // #444

/// Array.from(), spread operator

// const obj1 = {
//     id: 1,
//     isStudent: false,
//     name: 'Bob'
// } // #333
//
// const obj2 = {...obj1} // 1. create new obj; 2. ...(spread operator) - for copy properties; 3. У какого объекта или массива мы хотим сделать
// console.log(obj2) // obj2: {id: 1, isStudent: false, name: 'Bob'}
// console.log(obj1==obj2) // isEqual: false

// 1. Сделать копию массива или объекта; 2. Используем ее и изменяем
// Мутабельные - изменяют исходный массив
// Иммутабельные - не мутируют исходный массив (под капотом идет создание нового массива)
// push, pop, unshift, shift, reverse, splice - мутабельные

// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: true,
//     },
// ]

// const result = users.pop()
// console.log('users: ', users)

// const result = [...users].pop() //возвращает удаленный элемент
// console.log(users)

// const superUser = {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//         street: 'Kattie Turnpike',
//         suite: 'Suite 198',
//         city: 'Lebsackbury',
//         zipcode: '31428-2261',
//         geo: {
//             lat: '-38.2386',
//             lng: '57.2232',
//         },
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//         name: 'Hoeger LLC',
//         catchPhrase: 'Centralized empowering task-force',
//         bs: 'target end-to-end models',
//     },
// };

// const superUserCopy = {...superUser}
// superUserCopy.address.city = 'Toronto'
// console.log('City initial: ', superUser.address.city)
// console.log('City: ', superUserCopy.address.city)

// spread operator делает только поверхностную копию

// const superUserCopy2 = {...superUser, address: {...superUser.address, city: 'London'}}
// console.log('City initial: ', superUser.address.city)
// console.log('City new: ', superUserCopy2.address.city)

// structureClone

// const superUser = {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//         street: 'Kattie Turnpike',
//         suite: 'Suite 198',
//         city: 'Lebsackbury',
//         zipcode: '31428-2261',
//         geo: {
//             lat: '-38.2386',
//             lng: '57.2232',
//         },
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//         name: 'Hoeger LLC',
//         catchPhrase: 'Centralized empowering task-force',
//         bs: 'target end-to-end models',
//     },
// };
//
// const result = structuredClone(superUser)
// result.address.geo.lat = 'new lat value'
//
// console.log('initial lat', superUser.address.geo.lat)
// console.log('result lat', result.address.geo.lat)

/////////////// Деструктуризация

// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
// };

// const {firstName, lastName} = employee

// console.log(firstName, lastName)

// const firstName = "Test Value"

// const {firstName: newName} = employee
// console.log(newName)

// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     role: 'admin'
// };
// Если админ - то в объекте добавляется свойство role, а если не админ, то не добавляем его
//
// const {firstName, lastName, role = 'user'} = employee
// console.log('user: ', role) // user: user

// const employee = {
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     middleName: 'Ivanovich',
//     message: 'Hello world!',
//     permission: {
//         canEdit: true,
//         canDelete: false,
//         role: 'user',
//     },
// };
//
// let canEdit = 'Test'
//
// const {firstName, lastName, permission: {canEdit: newCanEdit, canDelete}} = employee;
//
// console.log(newCanEdit, canDelete, firstName, canEdit);

// const colors = ['red', 'blue', 'green', 'white', 'black'];

// const redColor = colors[0]
// const blueColor = colors[1]

// const [redColor, secondValue, thirdValue] = colors

// console.log(redColor)

// const colors = ['red', 'blue', 'green', 'white', 'black'];
// const [firstValue, , thirdValue, fourthValue] = colors

// console.log(firstValue, thirdValue, fourthValue)

// const colors = ['red', [1, 2], 'green', 'white', 'black'];
//
// const [firstValue, [ , secondNumber], , secondValue] = colors
// console.log(firstValue, secondNumber, secondValue)

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const [firstValue, secondValue, ...rest] = array

// console.log(rest)

const user = {
    name: 'Vika'
};

let name = 'Ivan';
({ name } = user);
console.log(name);
