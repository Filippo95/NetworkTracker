var sqlite3=require('sqlite3').verbose()
var md5=require('md5')

const DBSOURCE="../database.sqlite"
let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }
});


module.exports = db

