import styles from "./searchbar.module.scss"
import Image from 'next/image'
import searchi from '/public/info/search.png'

export default function SearchBar() {
  return (
    <form className={styles.search}>
      <div className={styles.searchicon}><Image className={styles.searchi} src={searchi} alt="search"></Image></div>
      <input
        type="text"
        placeholder="검색할 니케를 입력해주세요 ex)앨리스, ㅇㄹㅅ"
        className={styles.searchbar}
        name="searchText"
      />
    </form>
  )
}