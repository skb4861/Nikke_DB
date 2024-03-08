import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { authOptions } from "@/pages/api/auth/[...nextauth].js"
import { getServerSession } from "next-auth"

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);

  if (요청.method == 'DELETE') {
    try {
      const { id, reviews, email, scorearr, scoreselect } = JSON.parse(요청.body);
      let db = (await connectDB).db('project1');
      let average = "-";
      console.log(scorearr);
      if (session) {
        if (email == session.user.email) {

          const filteredScores = scorearr
            .filter(score => score !== scoreselect)
            .map(score => parseInt(score));
          if (filteredScores.length > 0) {
            const sum = filteredScores.reduce((total, score) => total + score, 0);
            average = (sum / filteredScores.length).toFixed(1); // 여기서 let을 사용하지 않고 기존의 average 변수를 업데이트합니다.
          }
          else {
            average = "-";
          }

          const result = await db.collection('chara-info').updateOne(
            { _id: new ObjectId(id) },
            {
              $pull: { review: { review_content: reviews } },
              $set: { 유저평점: average }
            },
          );
          return 응답.status(200).json({ success: true, message: '리뷰 저장 성공' });
        }
        else {
          return 응답.status(500).json({ success: false, message: '현재유저와 작성자 불일치' })
        }
      }
      else {
        return 응답.status(500).json({ success: false, error: '로그인 정보없음' });
      }

    } catch (error) {
      console.error(error);
      return 응답.status(500).json({ success: false, error: '리뷰 저장 실패' });
    }
  }
  else {
    await db.collection('chara-info').updateOne(
      { _id: new ObjectId(요청.body.charaId) },
      { $set: { review: reviewArray, 유저평점: average } }
  );
  }
}