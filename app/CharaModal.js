import { React, useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./charamodal.module.scss"
import { do_hyeon } from "./font"
import SkillTable from "./SkillTable";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Code = {
  작열: "/info/Fire1.png",
  수냉: "/info/Water1.png",
  풍압: "/info/Wind1.png",
  전격: "/info/Electric1.png",
  철갑: "/info/Iron1.png"
}

const Rarity = {
  SSR: "/info/SSR.png",
  SR: "/info/SR.png",
  R: "/info/R.png",
};

const Faction = {
  엘리시온: "/info/Elysion.png",
  미실리스: "/info/Missilis.png",
  테트라: "/info/Tetra.png",
  필그림: "/info/Pilgrim.png",
  어브노말: "/info/Abnormal.png"
}

const Class = {
  화력형: "/info/Attacker1.png",
  방어형: "/info/Defender1.png",
  지원형: "/info/Supporter1.png"
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

const CharaModal = ({ isOpen, onRequestClose, selectedCharaData }) => {
  let router = useRouter()


  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }
  
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [isOpen]);

  return (
    <Modal className={`${styles.modal_container} ${do_hyeon.className}`}
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onRequestClose}>
      <button className={styles.close_btn} onClick={onRequestClose}>
        <img src="/info/close.png" alt="close" className={styles.close_img} />
      </button>
      {selectedCharaData && selectedCharaData.이름 && (
        <div className={styles.modal_content_wrap}>
          <div className={styles.modal_content}>
            <Link href={'/form/' + selectedCharaData._id} className={`${styles.review_btn} ${do_hyeon.className}`}>
              유저 평가
            </Link>
            <h2 className={styles.chara_name}>{selectedCharaData.이름}</h2>
            <div className={styles.content_wrap}>
              <div className={styles.info_container}>
                <div className={styles.img_container}>
                  <img
                    src={`/faction/${(selectedCharaData.기업)}.webp`}
                    alt={selectedCharaData.기업}
                    className={styles.faction_img} />
                  <img
                    src={`/chara_full/${(selectedCharaData._id)}.png`}
                    alt={selectedCharaData._id}
                    className={styles.chara_img} />
                  <img src={Rarity[selectedCharaData.레어리티]} alt={selectedCharaData.레어리티} className={styles.icon_rarity} />
                  <img src={Code[selectedCharaData.코드]} alt={selectedCharaData.코드} className={styles.icon_code} />
                  <img src={Faction[selectedCharaData.기업]} alt={selectedCharaData.기업} className={`${styles.icon} ${styles.icon_faction}`} />
                  <img src={Class[selectedCharaData.클래스]} alt={selectedCharaData.클래스} className={`${styles.icon} ${styles.icon_class}`} />
                  <img src={Bust[selectedCharaData.버스트]} alt={selectedCharaData.버스트} className={`${styles.icon} ${styles.icon_bust}`} />
                  <img src={Weapon[selectedCharaData.무기]} alt={selectedCharaData.무기} className={`${styles.icon} ${styles.icon_weapon}`} />
                </div>
                <SkillTable characterName={selectedCharaData.이름}></SkillTable>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CharaModal;