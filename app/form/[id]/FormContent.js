'use client'
import styles from "./formcontent.module.scss"
import SkillTable from "../../SkillTable";
import StarRate from "./StarRate";
import { do_hyeon } from "../../font"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { signIn, signOut } from 'next-auth/react'

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

export default function FormContent({ selectedCharaData, session }) {
  const [reviewInput, setReviewInput] = useState("");
  const [reviews, setReviews] = useState([]);
  const [scores, setScores] = useState([]);
  const [times, setTimes] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const ratings = [1, 2, 3, 4, 5];
  let router = useRouter();

  useEffect(() => {
    if (selectedCharaData && selectedCharaData.review && Array.isArray(selectedCharaData.review)) {
      setReviews(selectedCharaData.review.map(item => item.review_content));
      setScores(selectedCharaData.review.map(item => item.review_score));
      setTimes(selectedCharaData.review.map(item => item.time));
    }
  }, [selectedCharaData]);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const getCurrentTime = () => {
    const Time = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const currentTime = new Intl.DateTimeFormat('ko-KR', options).format(Time);
    return currentTime;
  };

  const calculateAverageScore = () => {
    if (scores.length === 0) {
      return "-"
    }
    const intScore = scores.map(score => parseInt(score));
    const sum = intScore.reduce((total, score) => total + score, 0);
    const average = sum / intScore.length;
    return average.toFixed(1); // 소수점 둘째 자리까지 표시하도록 평균값을 반올림합니다.
  };

  const average = calculateAverageScore();

  const renderReviews = () => {
    const reviews_latest = reviews.slice().reverse();
    const scores_latest = scores.slice().reverse();
    const times_latest = times.slice().reverse();

    return reviews.map((a, i) => (
      <div key={i} className={styles.review_box}>
        <div className={styles.score}>
          <span className={styles.score_left}>★ {scores_latest[i]}</span>
          <span className={styles.score_right}>{times_latest[i]}</span>
          <span className={styles.close_btn} onClick={() => {
            if (session) {
              fetch('/api/post/delete', {
                method: 'DELETE',
                body: JSON.stringify({
                  id: selectedCharaData._id,
                  reviews: reviews_latest[i],
                  scoreselect: scores_latest[i],
                  scorearr: scores_latest,
                  email: session.user.email,
                  time: times_latest[i],
                }),
              })
                .then(response => response.json())
                .then(data => {
                  if (data.success) {
                    router.refresh();
                  }
                  else {
                    alert(data.message);
                  }
                })
                .catch(error => {
                  console.error('리뷰 삭제 오류:', error);
                });
            }
            else {
              alert('로그인이 필요한 작업입니다.');
            }
          }}>X</span>
        </div>
        <div className={styles.review}>{reviews_latest[i]}</div>
      </div>
    ));
  };

  const handleButtonClick = () => {
    if (session) {
      if (selectedRating !== '' && reviewInput.trim() !== '') {
        const currentTime = getCurrentTime();
        const allScores = [...scores, selectedRating];
        fetch('/api/post/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            review: reviewInput,
            score: selectedRating,
            scorearr: allScores,
            charaId: selectedCharaData._id,
            currentTime: currentTime,
            email: session.user.email,
          }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              setReviewInput("");
              setSelectedRating("");
              router.refresh();
            }
            else {
              console.error('리뷰 저장 실패:', data.error);
            }
          })
          .catch(error => {
            // 네트워크 오류 등에 대한 처리
            console.error('리뷰 저장 오류:', error);
          });
      }
      else {
        alert('평점과 리뷰를 모두 입력해주세요.');
      }
    }
    else {
      alert('로그인이 필요한 작업입니다.');
    }
  };

  return (
    <div className={styles.form_body}>
      <div className={styles.form_wrap}>
        <div className={`${styles.container} ${do_hyeon.className}`}>
          <div className={styles.content_wrap}>
            <div className={styles.content}>
              <h2 className={styles.chara_name}>{selectedCharaData.이름}</h2>
              <img className={styles.github} src="/info/github-mark.png" />
              {
                session
                  ? <button className={`${styles.sign_btn} ${do_hyeon.className}`} onClick={() => { signOut() }}>로그아웃</button>
                  : <button className={`${styles.sign_btn} ${do_hyeon.className}`} onClick={() => { signIn() }}>로그인</button>
              }
              <button className={`${styles.home_btn} ${do_hyeon.className}`} onClick={() => { router.push('/') }}>홈으로</button>
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
                <div className={styles.form_container}>
                  <div className={styles.score_sum}>
                    <StarRate average={average}></StarRate>
                    {average !== "아직 평가가 없습니다." ? <div>유저평점 : <span className={styles.score_bold}>{average}</span> 점</div> : average}
                  </div>
                  <form className={styles.form_wrap}>
                    <div className={styles.review_contents}>
                      {renderReviews()}
                    </div>
                  </form>
                  <div className={styles.input_box}>
                    <textarea className={`${styles.input_content} ${do_hyeon.className}`} name="review" placeholder="해당 니케에 대한 평가 혹은 팁을 알려주세요!" value={reviewInput} onChange={(e) => setReviewInput(e.target.value)} />
                    <select className={styles.rating_dropdown} value={selectedRating || ''} onChange={(e) => handleRatingSelect(e.target.value)}>
                      <option value="" disabled hidden>⭐</option>
                      {ratings.map((rating) => (
                        <option key={rating} value={rating} className={`${do_hyeon.className}`}>
                          {rating}
                        </option>
                      ))}
                    </select>
                    <input name="charaId" type="hidden" value={selectedCharaData._id} />
                    <button className={`${styles.submit_btn} ${do_hyeon.className}`} onClick={handleButtonClick} type="submit">게시</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>Copyright 2023. SHIFTUP. All rights reserved.</footer>
    </div>
  )
}