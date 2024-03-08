import { do_hyeon } from "./font"
import { connectDB } from "@/util/database";
import Btnfilter from "./BtnFilter";


export default async function Home() {
  const db = (await connectDB).db('project1');
  let result = await db.collection('chara-info').find().toArray();

  const DataArray = result.map(data => ({
    _id: data._id.toString(),
    이름: data.이름,
    기업: data.기업,
    클래스: data.클래스,
    코드: data.코드,
    레어리티: data.레어리티,
    버스트: data.버스트,
    무기: data.무기,
    스쿼드: data.스쿼드,
    유저평점: data.유저평점,
    태그: data.태그,
    review: data.review,
    score: data.score,
    time: data.time
  }))

  const sortDataArray = DataArray.sort((a, b) => {
    const sortRarity = { SSR: 3, SR: 2, R: 1 };
    const rarityComp = sortRarity[b.레어리티] - sortRarity[a.레어리티];

    if (rarityComp !== 0) {
      return rarityComp;
    } else {
      // 레어리티가 같은 경우 기업을 우선순위에 따라 정렬
      const sortFaction = {
        엘리시온: 5,
        미실리스: 4,
        테트라: 3,
        필그림: 2,
        어브노말: 1
      };
      return sortFaction[b.기업] - sortFaction[a.기업];
    }
  });

  // console.log(DataArray);

  fetch('/api/post/start', {
    method: 'PATCH',
    body: JSON.stringify({
      유저평점: DataArray.유저평점
    }),
  })

  return (
    <main className={do_hyeon.className}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="navi">
              <Btnfilter DataArray={sortDataArray}></Btnfilter>
            </div>
            <footer>Copyright 2023. SHIFTUP. All rights reserved.</footer>
          </div>
        </div>
      </div>
    </main>
  )
}