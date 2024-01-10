import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "@/pages/api/auth/[...nextauth].js"
import { getServerSession } from "next-auth"
import FormContent from "./FormContent";

export default async function Form(props) {
	const db = (await connectDB).db('project1');
  let result = await db.collection('chara-info').findOne({_id: new ObjectId(props.params.id)})

	result._id = result._id.toString();

	let session = await getServerSession(authOptions);

	return (
			<FormContent selectedCharaData={result} session={session}></FormContent>
	)
}