import { MongoClient } from 'mongodb'
MONGODB_URI = 'mongodb+srv://admin:skb113028@cluster0.euvqotd.mongodb.net/project1?retryWrites=true'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }