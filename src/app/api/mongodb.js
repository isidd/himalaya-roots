import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017/himalaya-roots";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let database;

async function connectDatabase() {
  if (!client) {
    client = new MongoClient(uri, options);
  }

  if (!client.isConnected()) {
    console.log("database connected")
    await client.connect();
  }

  database = client.db(process.env.MONGODB_DB);
  return database;
}

export { connectDatabase };
