import mongoose from "mongoose";

async function connectDatabase() {
  await mongoose.connect(
    "mongodb://Tiago:cacli200900@ac-wzei49q-shard-00-00.dym7xwx.mongodb.net:27017,ac-wzei49q-shard-00-01.dym7xwx.mongodb.net:27017,ac-wzei49q-shard-00-02.dym7xwx.mongodb.net:27017/?ssl=true&replicaSet=atlas-9tdgcf-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
}

export default connectDatabase;
