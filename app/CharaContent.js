'use client'
import { useEffect, useState } from "react"
import styles from "./characontent.module.scss"
import CharaModal from "./CharaModal";
import { do_hyeon } from "./font"
import "../public/styles/styles.scss";


const Rarity = {
  SSR: "/info/SSR.png",
  SR: "/info/SR.png",
  R: "/info/R.png",
};

const Logo = {
  엘리시온: "/faction/엘리시온.webp",
  미실리스: "/faction/미실리스.webp",
  테트라: "/faction/테트라.webp",
  필그림: "/faction/필그림.webp",
  어브노말: "/faction/어브노말.webp"
};

const logoStyles = {
  엘리시온: {
    position: "absolute",
    top: "-65px",
    left: "-5px",
    transform: "scale(0.45)",
    filter: "invert(5%)",
  },
  미실리스: {
    position: "absolute",
    top: "-30px",
    left: "-20px",
    transform: "scale(0.5)",
    filter: "invert(5%)",
  },
  테트라: {
    position: "absolute",
    top: "30px",
    left: "-30px",
    transform: "scale(0.65)",
    filter: "invert(5%)",
  },
  필그림: {
    position: "absolute",
    top: "-90px",
    left: "50px",
    transform: "scale(0.4)",
    filter: "invert(5%)",
  },
  어브노말: {
    position: "absolute",
    top: "-60px",
    left: "80px",
    transform: "scale(0.5)",
    filter: "invert(5%)",
  },
};

const Code = {
  작열: "/info/Fire1.png",
  수냉: "/info/Water1.png",
  풍압: "/info/Wind1.png",
  전격: "/info/Electric1.png",
  철갑: "/info/Iron1.png"
}

const Faction = {
  엘리시온: "/info/Elysion.webp",
  미실리스: "/info/Missilis.webp",
  테트라: "/info/Tetra.webp",
  필그림: "/info/Pilgrim.webp",
  어브노말: "/info/Abnormal.webp"
}

const Class = {
  화력형: "/info/Attacker.png",
  방어형: "/info/Defender.png",
  지원형: "/info/Supporter.png"
}

const Bust = {
  1: "/info/Step1.png",
  2: "/info/Step2.png",
  3: "/info/Step3.png"
}

const Weapon = {
  소총: "/info/AR.png",
  기관단총: "/info/SMG.png",
  샷건: "/info/SG.png",
  저격소총: "/info/SRF.png",
  런처: "/info/RL.png",
  머신건: "/info/MG.png"
}



export default function Characontent({ DataArray }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCharaData, setSelectedCharaData] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const openModal = (data) => {
    setSelectedCharaData(data);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCharaData(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <CharaModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedCharaData={selectedCharaData}>
      </CharaModal>
      <table className={`${styles.chara_table} ${do_hyeon.className}`}>
        <thead className={styles.chara_thead}>
          <tr>
            <th className={styles.thum}></th>
            <th className={styles.rarity}>등급</th>
            <th className={styles.code}>코드</th>
            <th className={styles.info_name}>이름</th>
            <th>기업</th>
            <th>클래스</th>
            <th>버스트</th>
            <th>무기</th>
            <th className={styles.squad}>스쿼드</th>
            <th className={styles.score}>유저 평점</th>
          </tr>
        </thead>
        <tbody className={styles.chara_list}>
          {DataArray.map((data, index) => (
            <tr
              key={data._id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => openModal(data)}
              className={`${[data._id]} ${index === hoveredIndex ? styles.chara_list_hovered : ''}`}>
              <td>
                <div className={`${styles.image_container} ${styles.faction_hidden}`}>
                  <img src={Logo[data.기업]} alt={data.기업} className={styles.faction} style={logoStyles[data.기업]} />
                </div>
                <div className={styles.image_container}>
                  <img src={`/chara/${(data._id)}.png`} alt={data._id} className={styles.chara_img} />
                </div>
              </td>
              <td className={`${styles.data_container} ${styles.info_rarity}`}>
                <img src={Rarity[data.레어리티]} alt={data.레어리티} className={styles.icon_rarity} />
              </td>
              <td className={`${styles.data_container} ${styles.info_code}`}>
                <img src={Code[data.코드]} alt={data.코드} className={styles.icon_code} />
              </td>
              <td className={`${styles.data_container} ${styles.info_name}`}>{data.이름}</td>
              <td className={`${styles.data_container} ${styles.info_data}`}>
                <img src={Faction[data.기업]} alt={data.기업} className={`${styles.icon} ${styles.icon_faction}`} />
              </td>
              <td className={`${styles.data_container} ${styles.info_data}`}>
                <img src={Class[data.클래스]} alt={data.클래스} className={`${styles.icon} ${styles.icon_class}`} />
              </td>
              <td className={`${styles.data_container} ${styles.info_data}`}>
                <img src={Bust[data.버스트]} alt={data.버스트} className={`${styles.icon} ${styles.icon_bust}`} />
              </td>
              <td className={`${styles.data_container} ${styles.info_data}`}>
                <img src={Weapon[data.무기]} alt={data.무기} className={`${styles.icon} ${styles.icon_weapon}`} />
              </td>
              <td><div className={styles.data_container}>{data.스쿼드}</div></td>
              <td>
                <div className={styles.data_container}>{data.유저평점}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 