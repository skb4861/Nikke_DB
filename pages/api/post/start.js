import { connectDB } from "@/util/database"

export default async function handler(요청, 응답) {

  if (요청.method == 'PATCH') {
    const db = (await connectDB).db('project1');
    const { 유저평점 } = 요청.body;
    await db.collection('chara-info').updateMany(
      {},
      { $set: { 유저평점 } }
    );
  }
}