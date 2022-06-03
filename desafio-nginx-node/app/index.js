import http from 'http'
import { createConnection } from 'mysql'

const PORT = 3000

const connection = createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

connection.connect(() => {
    createTable()
    // createDB()
    console.log(`Database connected!!!`)
})
function createDB(params) {
    connection.query(`
    CREATE DATABASE nodedb
)`)
}

function createTable() {
    connection.query(`
    CREATE TABLE IF NOT EXISTS PEOPLE(
        ID INT NOT NULL AUTO_INCREMENT, 
        NAME VARCHAR(50) NOT NULL,
        PRIMARY KEY (ID)
)`)
}

let indexPeople = 0
const server = http.createServer((req, res) => {
    connection.query(`INSERT INTO PEOPLE (name) values ("LUCAO ${indexPeople} DO PHP RULES")`, (err, results, _) => {
        connection.query(`SELECT * FROM PEOPLE as people`, (err, results, _) => {
            res.end(response(results))
            indexPeople++
        })
    })
})

function response(results) {
    console.log(results)
    return `
    <h1>Full Cycle Rocks!</h1>
    <ul>
        ${results.map(({ NAME }) => `<li>${NAME}</li>`)}
    </ul>
    `
}

server.listen(PORT, () => console.log(`Server is running at ${PORT}`))