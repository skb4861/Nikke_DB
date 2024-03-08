import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
const { ObjectId } = require('mongodb');

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청, 응답, authOptions)
    
    if (요청.method == 'POST') {

        try {
            const db = (await connectDB).db('project1');
            const findId = await db.collection('chara-info').findOne({ _id: new ObjectId(요청.body.charaId) });

            const reviewArray = findId.review instanceof Array ? findId.review : [];
            const scoreArray = 요청.body.scorearr;
            const reviewData = {
                review_content: 요청.body.review,
                review_score: 요청.body.score,
                email: 요청.body.email,
                time: 요청.body.currentTime
            };

            reviewArray.push(reviewData);

            const allScores = scoreArray.map(score => parseInt(score));
            const sum = allScores.reduce((total, score) => total + score, 0);
            const average = (sum / allScores.length).toFixed(1);
            
            await db.collection('chara-info').updateOne(
                { _id: new ObjectId(요청.body.charaId) },
                { $set: { review: reviewArray, 유저평점: average } }
            );
            return 응답.status(200).json({ success: true, message: '리뷰 저장 성공' });
            // return 응답.redirect(302, `/form/${요청.body.charaId}`);
            
        } catch (error) {
            console.error(error);
            return 응답.status(500).json({ success: false, error: '리뷰 저장 실패' });
        }
    }
}