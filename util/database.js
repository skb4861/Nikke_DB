import { MongoClient } from 'mongodb'
const MONGODB_URI = 'mongodb+srv://vercel-admin-user:GUMX2UDya2HICLpF@cluster0.euvqotd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(MONGODB_URI, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(MONGODB_URI, options).connect()
}
export { connectDB }