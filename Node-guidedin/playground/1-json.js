
const fs= require('fs')
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// fs.writeFileSync('1-json.json',bookJSON)


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON= dataBuffer.toLocaleString()
// const data = JSON.parse(dataJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name='Miguel'
user.age=20

const userJSON=JSON.stringify(user)
fs.writeFileSync('1-json.json',user)