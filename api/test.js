const { MongoClient } = require("mongodb");
const fs = require('fs');

let db_username = '';
let db_password = '';

const credentials = JSON.parse(
fs.readFileSync('login.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
}));

// Connection URI
const uri = 'mongodb+srv://'.concat(credentials.username, ':', credentials.password, '@cluster-0.zpn5l.mongodb.net/cluster-o?retryWrites=true&w=majority');

// Create a new MongoClient
const client = new MongoClient(uri);

function get_covid_status(collection, fn) {
  const query = { firstname: fn };
  const options = {
    projection: { status: 1 },
  };

  const covid_status = collection.findOne(query, options);
  return covid_status;
}

async function run() {
  try {
    await client.connect();

    database = client.db("covid");
    collection = database.collection("usergraph");

    const movie = await get_covid_status(collection, "Mike");

    // since this method returns the matched document, not a cursor, print it directly
    console.log(movie);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
