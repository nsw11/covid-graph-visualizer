const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://bigbrain:vermin-supreme@cluster-0.zpn5l.mongodb.net/cluster-o?retryWrites=true&w=majority";
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

    // Query for a movie that has the title 'The Room'
    /*const query = { firstname: "Mike" };

    const options = {
      // sort matched documents in descending order by rating
      // sort: { rating: -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { status: 1},
    };*/

    const movie = await get_covid_status(collection, "Mike");

    // since this method returns the matched document, not a cursor, print it directly
    console.log(movie);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
