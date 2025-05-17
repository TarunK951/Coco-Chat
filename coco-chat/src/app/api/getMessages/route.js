import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("chatDB");
    const collection = db.collection("messages");

    const messages = await collection.find({}).sort({ createdAt: 1 }).toArray();

    return new Response(JSON.stringify(messages), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return new Response("Failed to fetch messages", { status: 500 });
  }
}
