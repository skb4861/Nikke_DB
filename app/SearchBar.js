import styles from "./searchbar.module.scss"
import Image from 'next/image'
import { do_hyeon } from "./font"
import searchi from '/public/info/search.png'

export default function SearchBar({searchText, searchInputChange}) {
  return (
    <form className={`${styles.search} ${do_hyeon.className}`}>
      <div className={styles.searchicon}><Image className={styles.searchi} src={searchi} alt="search"></Image></div>
      <input
        type="text"
        placeholder="검색할 니케를 입력해주세요 ex)앨리스, ㅇㄹㅅ / 스킬 태그도 검색할 수 있습니다 ex) #보호막 "
        className={styles.searchbar}
        name="searchText"
        value={searchText}
        onChange={searchInputChange}
      />
    </form>
  )
}