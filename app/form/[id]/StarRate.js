import { useState, useEffect } from "react";
import styles from "./starrate.module.scss";

function StarRate({average}) {
  const avr_rate = average;
  const ratings = ['first', 'second', 'third', 'fourth', 'last'];
  const [starFill, setStarFill] = useState([0, 0, 0, 0, 0]);
  const calcStarRates = () => {
    let tempStarRate = [0, 0, 0, 0, 0];
    let starVerScore = (avr_rate * 70) / 5;
    let index = 0;
    while (starVerScore > 14) {
      tempStarRate[index] = 14;
      index += 1;
      starVerScore -= 14;
    }
    tempStarRate[index] = starVerScore;
    tempStarRate = tempStarRate.map(score => isNaN(score) ? 0 : score);
    return tempStarRate;
  };
  useEffect(() => {
    setStarFill(calcStarRates)
  }, [average])
  
  return (
    <div className={styles.star_box}>
      {ratings.map((a, index) => {
        return <span key={index}>
          <svg xmlns='http://www.w3.org/2000/svg' width='40' height='39' viewBox='0 0 14 13' fill='#cacaca'>
            <clipPath id={`${a}StarClip`}>
              <rect width={`${starFill[index]}`} height='39' />
            </clipPath>
            <path
              id={`${a}Star`}
              d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
              transform='translate(-2 -2)'
            />
            <use clipPath={`url(#${a}StarClip)`} href={`#${a}Star`} fill='#00aeff'
            />
          </svg>
        </span>
      })
      }
    </div>
  )
}

export default StarRate;