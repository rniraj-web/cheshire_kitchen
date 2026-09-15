import mongoose from "mongoose";

// Cache the connection on the global object so Next.js's dev-mode hot
// reloading (which re-evaluates modules but not the process) doesn't open a
// new connection on every request.
let cached = global._mongooseConn;
if (!cached) {
  cached = global._mongooseConn = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;

    cached.promise = uri
      ? mongoose.connect(uri)
      : import("mongodb-memory-server").then(async ({ MongoMemoryServer }) => {
          const memoryServer = await MongoMemoryServer.create();
          console.log(
            "MONGODB_URI not set — using an in-memory MongoDB for enquiries. Data will not persist across restarts.",
          );
          return mongoose.connect(memoryServer.getUri());
        });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
