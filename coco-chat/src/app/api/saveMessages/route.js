import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

export async function POST(req) {
  if (!uri) {
    console.error("❌ MONGO_URI is not defined");
    return new Response("Server config error", { status: 500 });
  }

  const client = new MongoClient(uri);

  try {
    const { message } = await req.json();

    await client.connect();
    const db = client.db("chatDB"); // Make sure this is the exact name you want
    const collection = db.collection("messages");

    const newMessage = { text: message, createdAt: new Date() };
    const result = await collection.insertOne(newMessage);

    console.log("✅ Message inserted:", result.insertedId);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Error saving message:", error);
    return new Response("Error saving message", { status: 500 });
  } finally {
    await client.close();
  }
}
