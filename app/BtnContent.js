import Image from 'next/image'
import styles from './btncontent.module.scss'


import R from '/public/info/R.png'
import SR from '/public/info/SR.png'
import SSR from '/public/info/SSR.png'
import Fire from '/public/info/Fire1.png'
import Water from '/public/info/Water1.png'
import Wind from '/public/info/Wind1.png'
import Electric from '/public/info/Electric1.png'
import Iron from '/public/info/Iron1.png'
import Elysion from '/public/info/Elysion.webp'
import Missilis from '/public/info/Missilis.webp'
import Tetra from '/public/info/Tetra.webp'
import Pilgrim from '/public/info/Pilgrim.webp'
import Abnormal from '/public/info/Abnormal.webp'
import Attacker from '/public/info/Attacker.png'
import Defender from '/public/info/Defender.png'
import Supporter from '/public/info/Supporter.png'
import Step1 from '/public/info/Step1.png'
import Step2 from '/public/info/Step2.png'
import Step3 from '/public/info/Step3.png'
import Assault_Rifle from '/public/info/Assault_Rifle.png'
import Sub_Machine_Gun from '/public/info/Sub_Machine_Gun.png'
import Shotgun from '/public/info/Shotgun.png'
import Sniper_Rifle from '/public/info/Sniper_Rifle.png'
import Rocket_Launcher from '/public/info/Rocket_Launcher.png'
import Machine_Gun from '/public/info/Machine_Gun.png'
import Reset from '/public/info/Reset1.png'


export default function BtnContent({ name, isActive, onClick }) {
	const activeClass = isActive ? styles.active : '';
	const getButtonContent = (buttonName) => {
		switch (buttonName) {
			case 'R':
				return <Image className={styles.rarity} src={R} alt={name} />;
			case 'SR':
				return <Image className={styles.rarity} src={SR} alt={name} />;
			case 'SSR':
				return <Image className={styles.rarity} src={SSR} alt={name} />;
			case '작열':
				return <Image className={styles.code} src={Fire} alt={name} />;
			case '수냉':
				return <Image className={styles.code} src={Water} alt={name} />;
			case '풍압':
				return <Image className={styles.code} src={Wind} alt={name} />;
			case '전격':
				return <Image className={styles.code} src={Electric} alt={name} />;
			case '철갑':
				return <Image className={styles.code} src={Iron} alt={name} />;
			case '엘리시온':
				return <Image className={styles.faction} src={Elysion} alt={name} />;
			case '미실리스':
				return <Image className={styles.faction} src={Missilis} alt={name} />;
			case '테트라':
				return <Image className={styles.faction} src={Tetra} alt={name} />;
			case '필그림':
				return <Image className={`${styles.faction} ${styles.pilgrim}`} src={Pilgrim} alt={name} />;
			case '어브노말':
				return <Image className={styles.faction} src={Abnormal} alt={name} />;
			case '화력형':
				return <Image className={styles.class} src={Attacker} alt={name} />;
			case '방어형':
				return <Image className={`${styles.class} ${styles.defender}`} src={Defender} alt={name} />;
			case '지원형':
				return <Image className={`${styles.class} ${styles.supporter}`} src={Supporter} alt={name} />;
			case '1':
				return <Image className={styles.bust} src={Step1} alt={name} />;
			case '2':
				return <Image className={styles.bust} src={Step2} alt={name} />;
			case '3':
				return <Image className={styles.bust} src={Step3} alt={name} />;
			case '소총':
				return <Image className={`${styles.weapon} ${styles.ar}`} src={Assault_Rifle} alt={name} />;
			case '기관단총':
				return <Image className={`${styles.weapon} ${styles.smg}`} src={Sub_Machine_Gun} alt={name} />;
			case '샷건':
				return <Image className={`${styles.weapon} ${styles.sg}`} src={Shotgun} alt={name} />;
			case '저격소총':
				return <Image className={`${styles.weapon} ${styles.sr}`} src={Sniper_Rifle} alt={name} />;
			case '런처':
				return <Image className={`${styles.weapon} ${styles.rl}`} src={Rocket_Launcher} alt={name} />;
			case '머신건':
				return <Image className={`${styles.weapon} ${styles.mg}`} src={Machine_Gun} alt={name} />;
			case '리셋':
				return <Image className={styles.reset} src={Reset} alt={name} />;
			default:
				return null;
		}
	}

	const buttonContent = getButtonContent(name);

	let buttonClassName = styles.btn1;
	switch (name) {
		case '소총':
		case '기관단총':
		case '샷건':
		case '저격소총':
		case '런처':
		case '머신건':
			buttonClassName = `${styles.btn1} ${styles.btn2}`;
			break;
		case '리셋':
			buttonClassName = `${styles.btn1} ${styles.btn3}`;
			break;
		default:
			break;
	}

	return (
		<button title={name} className={`${buttonClassName} ${activeClass}`} onClick={onClick}>
			{buttonContent}
		</button>
	)
}