import mongoose from 'mongoose';

const connection = {}; // Cache for the connection

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect("mongodb+srv://meetpbrainerhub:meetp01bhub@next-framer.rmvtwiz.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
