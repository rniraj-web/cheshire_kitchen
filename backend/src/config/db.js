import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (uri) {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
    return;
  }

  const { MongoMemoryServer } = await import("mongodb-memory-server");
  const memoryServer = await MongoMemoryServer.create();
  await mongoose.connect(memoryServer.getUri());
  console.log(
    "MONGODB_URI not set — using an in-memory MongoDB. Data will not persist across restarts. Set MONGODB_URI (e.g. a free MongoDB Atlas cluster) for real storage.",
  );
}
