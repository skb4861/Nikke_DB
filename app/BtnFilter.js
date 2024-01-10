'use client'
import { useEffect, useState } from 'react'
import BtnContent from "./BtnContent"
import SearchBar from "./SearchBar";
import CharaContent from "./CharaContent"
import styles from "./btnfilter.module.scss"

export default function Btnfilter({ DataArray }) {
  const [activeButton, setActiveButton] = useState([])
  const [data, setData] = useState(DataArray)
  const [searchText, setSearchText] = useState("");
  const Hangul = require('hangul-js');

  useEffect(() => {
    if (activeButton.length > 0) {
      const filteredData = DataArray.filter((item) => {
        return activeButton.every((buttonName) => {
          for (const key in item) {
            if (item[key] === buttonName) {
              return true;
            }
          }
          return false;
        });
      });
      filterSearchText(filteredData);
    } else {
      filterSearchText(DataArray);
    }
  }, [activeButton, DataArray, searchText]);

  const handleButtonClick = (buttonName) => {
    setActiveButton((prevActiveButtons) => {
      if (buttonName === null) {
        return [];
      }
      if (prevActiveButtons.includes(buttonName)) {
        return prevActiveButtons.filter((btn) => btn !== buttonName);
      } else {
        return [...prevActiveButtons, buttonName];
      }
    });
  };

  function addChosung(str) {
    const disassemble = Hangul.disassemble(str, true);
    let cho = "";
    for (let i = 0; i < disassemble.length; i++) {
      cho += disassemble[i][0];
    }
    return cho;
  }

  function filterSearchText(DataArray) {
    const choSearchText = addChosung(searchText);
    const filteredData = DataArray.filter((item) => {
      const choName = addChosung(item.이름);
      return choName.includes(choSearchText) || 
      item.이름.includes(searchText) || 
      item.스쿼드.includes(searchText)|| 
      (searchText.startsWith('#') && item.태그 && item.태그.includes(searchText));
    });
    setData(filteredData);
  }

  const searchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <section className={`${styles.categories}`}>
        <div className={`${styles.btn} ${styles.rarity}`}>
          <BtnContent
            name={"SSR"}
            isActive={activeButton.includes("SSR")}
            onClick={() => handleButtonClick("SSR")} />
          <BtnContent
            name={"SR"}
            isActive={activeButton.includes("SR")}
            onClick={() => handleButtonClick("SR")} />
          <BtnContent
            name={"R"}
            isActive={activeButton.includes("R")}
            onClick={() => handleButtonClick("R")} />
        </div>
        <div className={`${styles.btn} ${styles.weapon}`}>
          <BtnContent
            name={"소총"}
            isActive={activeButton.includes("소총")}
            onClick={() => handleButtonClick("소총")} />
          <BtnContent
            name={"기관단총"}
            isActive={activeButton.includes("기관단총")}
            onClick={() => handleButtonClick("기관단총")} />
          <BtnContent
            name={"샷건"}
            isActive={activeButton.includes("샷건")}
            onClick={() => handleButtonClick("샷건")} />
          <BtnContent
            name={"저격소총"}
            isActive={activeButton.includes("저격소총")}
            onClick={() => handleButtonClick("저격소총")} />
          <BtnContent
            name={"런처"}
            isActive={activeButton.includes("런처")}
            onClick={() => handleButtonClick("런처")} />
          <BtnContent
            name={"머신건"}
            isActive={activeButton.includes("머신건")}
            onClick={() => handleButtonClick("머신건")} />
        </div>
      </section>
      <section className={`${styles.categories}`}>
        <div className={`${styles.btn} ${styles.bust}`}>
          <BtnContent
            name={"1"}
            isActive={activeButton.includes("1")}
            onClick={() => handleButtonClick("1")} />
          <BtnContent
            name={"2"}
            isActive={activeButton.includes("2")}
            onClick={() => handleButtonClick("2")} />
          <BtnContent
            name={"3"}
            isActive={activeButton.includes("3")}
            onClick={() => handleButtonClick("3")} />
        </div>
        <div className={`${styles.btn} ${styles.code}`}>
          <BtnContent
            name={"작열"}
            isActive={activeButton.includes("작열")}
            onClick={() => handleButtonClick("작열")} />
          <BtnContent
            name={"수냉"}
            isActive={activeButton.includes("수냉")}
            onClick={() => handleButtonClick("수냉")} />
          <BtnContent
            name={"풍압"}
            isActive={activeButton.includes("풍압")}
            onClick={() => handleButtonClick("풍압")} />
          <BtnContent
            name={"전격"}
            isActive={activeButton.includes("전격")}
            onClick={() => handleButtonClick("전격")} />
          <BtnContent
            name={"철갑"}
            isActive={activeButton.includes("철갑")}
            onClick={() => handleButtonClick("철갑")} />
        </div>
        <div className={`${styles.btn} ${styles.faction}`}>
          <BtnContent
            name={"엘리시온"}
            isActive={activeButton.includes("엘리시온")}
            onClick={() => handleButtonClick("엘리시온")} />
          <BtnContent
            name={"미실리스"}
            isActive={activeButton.includes("미실리스")}
            onClick={() => handleButtonClick("미실리스")} />
          <BtnContent
            name={"테트라"}
            isActive={activeButton.includes("테트라")}
            onClick={() => handleButtonClick("테트라")} />
          <BtnContent
            name={"필그림"}
            isActive={activeButton.includes("필그림")}
            onClick={() => handleButtonClick("필그림")} />
          <BtnContent
            name={"어브노말"}
            isActive={activeButton.includes("어브노말")}
            onClick={() => handleButtonClick("어브노말")} />
        </div>
        <div className={`${styles.btn} ${styles.class}`}>
          <BtnContent
            name={"화력형"}
            isActive={activeButton.includes("화력형")}
            onClick={() => handleButtonClick("화력형")} />
          <BtnContent
            name={"방어형"}
            isActive={activeButton.includes("방어형")}
            onClick={() => handleButtonClick("방어형")} />
          <BtnContent
            name={"지원형"}
            isActive={activeButton.includes("지원형")}
            onClick={() => handleButtonClick("지원형")} />
        </div>
        <div className={`${styles.btn} ${styles.reset}`}>
          <BtnContent
            name={"리셋"}
            onClick={() => handleButtonClick(null)} />
        </div>
      </section>
      <SearchBar searchText={searchText} searchInputChange={searchInputChange}></SearchBar>
      <CharaContent DataArray={data}></CharaContent>
    </div>
  )
}