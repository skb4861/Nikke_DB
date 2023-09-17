import { connectDB } from "@/util/database";

export default async function Characontent() {

  let db = (await connectDB).db('project1');
  let result = await db.collection('chara-data').find().toArray();
  // console.log(result);

  return (
    <table>
      <thead>
        <tr>
          <th className="thum"></th>
          <th>등급</th>
          <th>코드</th>
          <th className="info-name">이름</th>
          <th>기업</th>
          <th>클래스</th>
          <th>버스트</th>
          <th>무기</th>
          <th>스쿼드</th>
          <th>유저 평점</th>  
        </tr>
      </thead>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>
      <tbody className="chara-list">
        <tr>
          <td>
            <div className="image-container faction-hidden">
              <img src="/faction/Tetra_logo.webp" className="faction"></img>
            </div>
            <div className="image-container">
              <img src="/chara/c001.png" className="chara-img"></img>
            </div>
          </td>
          <td className="data-container info-rarity">
            <img src="/info/SSR.png" alt="SSR" className="icon-rarity"/>
          </td>
          <td className="data-container info-code">
            <img src="/info/Fire1.png" alt="작열" className="icon-code"/>
          </td>
          <td className="data-container info-name">{result[0].이름}</td>
          <td className="data-container info-data">
            <img src="/info/Tetra.webp" alt="테트라" className="icon-faction"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Attacker.png" alt="화력형" className="icon-class"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Step3.png" alt="버스트3" className="icon-bust"/>
          </td>
          <td className="data-container info-data">
            <img src="/info/Sniper_Rifle.png" alt="스나이퍼" className="icon-weapon"/>
          </td>
          <td className="data-container">{result[0].스쿼드}</td>
          <td>
            <div className="data-container">{result[0].유저평점}</div>
          </td>
        </tr>
      </tbody>

    </table>
  )
} 