import Btncatch from "./BtnCatch"
import styles from "./btnfilter.module.scss"

export default function Btnfilter() {
	return (
		<main>
			<section className={`${styles.categories}`}>
				<div className={`${styles.btn} ${styles.rarity}`}>
					<Btncatch name={"SSR"}></Btncatch>
					<Btncatch name={"SR"}></Btncatch>
					<Btncatch name={"R"}></Btncatch>
				</div>
				<div className={`${styles.btn} ${styles.weapon}`}>
					<Btncatch name={"소총"}></Btncatch>
					<Btncatch name={"기관단총"}></Btncatch>
					<Btncatch name={"샷건"}></Btncatch>
					<Btncatch name={"저격소총"}></Btncatch>
					<Btncatch name={"런처"}></Btncatch>
					<Btncatch name={"머신건"}></Btncatch>
				</div>
			</section>
			<section className={`${styles.categories}`}>
				<div className={`${styles.btn} ${styles.bust}`}>
					<Btncatch name={"1단계"}></Btncatch>
					<Btncatch name={"2단계"}></Btncatch>
					<Btncatch name={"3단계"}></Btncatch>
				</div>
				<div className={`${styles.btn} ${styles.code}`}>
					<Btncatch name={"작열"}></Btncatch>
					<Btncatch name={"수냉"}></Btncatch>
					<Btncatch name={"풍압"}></Btncatch>
					<Btncatch name={"전격"}></Btncatch>
					<Btncatch name={"철갑"}></Btncatch>
				</div>
				<div className={`${styles.btn} ${styles.faction}`}>
					<Btncatch name={"엘리시온"}></Btncatch>
					<Btncatch name={"미실리스"}></Btncatch>
					<Btncatch name={"테트라"}></Btncatch>
					<Btncatch name={"필그림"}></Btncatch>
					<Btncatch name={"어브노말"}></Btncatch>
				</div>
				<div className={`${styles.btn} ${styles.class}`}>
					<Btncatch name={"화력형"}></Btncatch>
					<Btncatch name={"방어형"}></Btncatch>
					<Btncatch name={"지원형"}></Btncatch>
				</div>
				<div className={`${styles.btn} ${styles.reset}`}>
					<Btncatch name={"리셋"}></Btncatch>
				</div>
			</section>
		</main>
	)
}