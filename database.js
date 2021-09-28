const sqlite = require('sqlite')
async function setup() {
    const db = await sqlite.open('./db.sqlite')
    await db.migrate({force: 'last'})
}
setup()