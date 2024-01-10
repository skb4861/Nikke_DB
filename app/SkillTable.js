import styles from "./skilltable.module.scss"

const SkillTable = ({ characterName }) => {
  const cooldown = "/info/time.png"
  let skillTableContent = null;

  switch (characterName) {
    case "엠마":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>머신건 : 스페셜 테라피스트</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>300발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 5.57% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 치어리딩</div>
            <div className={styles.skill_info}>
              ■ 피격 시 5% 확률로 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 10.77% <span style={{ color: "#ff7803" }}>회복</span>]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 템프테이션</div>
            <div className={styles.skill_info}>
              ■ 자신의 체력이 90% 이상일 때 한하여 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[체력 회복량 13.33% ▲] [지속]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 알투르이즘</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [시전자 최대 체력 비례 39.6% <span style={{ color: "#ff7803" }}>회복</span>]<br />
                [공격 대미지 비례 39.6% <span style={{ color: "#ff7803" }}>회복</span>] [5초 유지]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "프리바티":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 전우의 관</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 13.65% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : EX 매거진</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [공격력 23.61% ▲] [10초 유지]<br />
                [재장전 속도 51.16% ▲] [10초 유지]<br />
                [최대 장탄 수 50.66% ▼] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : LD 어설트</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 85.79% 추가 대미지]</span><br />
              ■ 마지막 탄환 명중 시 대상이 기절 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 1089% 추가 대미지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : AK 미사일</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 457.87% 대미지]<br />
                [기절] [3초 유지]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "시그널":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 드라마틱</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 8.1% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 어택 시그널</div>
            <div className={styles.skill_info}>
              ■ 일반공격 60회 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>
                [방어력 5.94% ▼] [5초 유지]<br />
                [공격력 5.94% ▼] [5초 유지]<br /></span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 웨이팅 포 시그널</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 44.08% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 이머전시 시그널</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 229.22% 대미지]<br />
                [방어력 12.34% ▼] [10초 유지]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "폴리":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 와일드 도그</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 201.5% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 브레이브 콜</div>
            <div className={styles.skill_info}>
              ■ 일반공격 5회 공격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [공격력 5.46% ▲] [10초 유지]<br /></span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 도그 테라피</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신과 자신을 제외한 체력이 가장 낮은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 23.51% ▲] [10초 유지]</span><br />
              ■ 마지막 탄환 명중 시 대상이 기절 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[피격 대미지 분배] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 폴리스 라인</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 22.27% <span style={{ color: "#ff7803" }}>보호막</span>]<br />
                [공격력 44.55% ▲] [10초 유지]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "미란다":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 인플렉서블</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.43초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 10.8%대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 헬스업!</div>
            <div className={styles.skill_info}>
              ■ 일반공격 30회 명중 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [명중률 5.44% ▲][5초 유지]<br /></span>
              ■ 일반공격 30회 명중 시 기관단총 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [명중률 3.79% ▲][5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 웨이크업!</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 32.99% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 파워 업!</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신을 제외한 공격력이 가장 높은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>
                [공격력 40.4% ▲] [10초 유지]<br />
                [크리티컬 대미지 56.23% ▲] [10초 유지]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "브리드":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 퍼펙트 라인</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.30초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 8.1% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 엑셀러레이션</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 30회 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>
                [공격력 18.52% ▲][10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 리크</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 211.2% 대미지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : AZX</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 1440% 대미지]<br /></span>
              ■ 자신의 체력이 최대라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 추가 1440% 대미지]<br /></span>
            </div>
          </div>
        </div>
      );
      break;
    case "솔린":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 크림슨 크루세이더</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 5.85% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 유능하게!</div>
            <div className={styles.skill_info}>
              ■ 일반공격 40회 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>
                [공격속도 7.26% ▲] [3초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 어른스럽게!</div>
            <div className={styles.skill_info}>
              ■ 자신의 체력이 최대일 때 한하여 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 21.62% ▲][지속]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 62.27% ▲][지속]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 나도 한다면 해!</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격범위 내 적들에게</span><br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 396% 대미지]<br /></span>
              ■ 자신의 체력이 최대라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 924% 추가 대미지]<br /></span>
            </div>
          </div>
        </div>
      );
      break;
    case "디젤":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>머신건 : 원더링 트랙</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>300발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.16초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 5.38% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 딸기향 이끌림</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>
                [방어력 25.92% ▲] [10초 유지]</span><br />
              ■ 풀 버스트 타임 지속 시간 중 피격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>
                [시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 12.96% 회복]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 딸기 사탕의 힘</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 100회 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[딸기 사탕: 최대 장탄 수 56.7% ▲] [10중첩] [10초 유지]</span><br />
              ■ 자신이 딸기 사탕 최대 중첩 상태라면 중첩 해제 후 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[탄환 충전 86.62%]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 스트로베리 쇼크</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 5기에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 299.66% 대미지]<br />
                <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>도발</span>] [5.06초 유지]</span></span>
            </div>
          </div>
        </div>
      );
      break;
    case "베스티":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 퓨어 몬스터</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 상상실현</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>
                [폭발범위 15.01% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 생존본능</div>
            <div className={styles.skill_info}>
              ■ 버스트 스킬 사용 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[사용 횟수 별 추가 효과]<span style={{ color: "#ff7803" }}> [하위 효과 중복 적용]</span></span><br />
              <span style={{ color: "#00aeff" }}>1회 : [생존본능 1: 공격력 5.35% ▲] [45초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [생존본능 2: 크리티컬 대미지 22.34% ▲] [45초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [생존본능 3: 크리티컬 확률 15.51% ▲]  [45초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 정당방위</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>
                [미사일 컨테이너 2기 호출]<br />
                기능: 체력이 가장 낮은 적에게 공격력 15.56% 대미지<br />
                공격 간격: 1초<br />
                유지 시간: 18초<br /></span>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [자신 상태 별 추가 효과] <span style={{ color: "#ff7803" }}> [하위 효과 중복 적용]</span>:<br />
                생존본능 1: [<span style={{ color: "#ff7803" }}>최종</span> 공격력 210.62% 추가 대미지]<br />
                생존본능 2: [<span style={{ color: "#ff7803" }}>최종</span> 공격력 247.25% 추가 대미지]<br />
                생존본능 3: [<span style={{ color: "#ff7803" }}>최종</span> 공격력 302.19% 추가 대미지]<br /></span>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[풀 버스트 타임 지속 시간 5초 ▼]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "은화":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 퍼펙셔니스트</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>1.30초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 71.07% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 준비 태세</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 공격 후 자신에게<br />
              <span style={{ color: "#00aeff" }}>[차지 대미지 37.28% ▲] [2발 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[차지 속도 15.53% ▲] [2발 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 약점 간파</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 공격 후 대상에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 29% ▼] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 전세 역전</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 10기에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 85.62% 대미지]<br />
                [방어력 2.43% ▼] [15초 유지]<br /></span>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [크리티컬 확률 4.65% ▲] [15초 유지]<br /></span>
            </div>
          </div>
        </div>
      );
      break;
    case "은화":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 퍼펙셔니스트</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>1.30초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 71.07% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 준비 태세</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 공격 후 자신에게<br />
              <span style={{ color: "#00aeff" }}>[차지 대미지 37.28% ▲] [2발 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[차지 속도 15.53% ▲] [2발 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 약점 간파</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 공격 후 대상에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 29% ▼] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 전세 역전</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 10기에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 85.62% 대미지]<br />
                [방어력 2.43% ▼] [15초 유지]<br /></span>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [크리티컬 확률 4.65% ▲] [15초 유지]<br /></span>
            </div>
          </div>
        </div>
      );
      break;
    case "길로틴":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>머신건 : 론리 프리덤</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>300발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 5.57%대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 유열</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 30회 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 9.28% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[현재 체력 2.01% ▼]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 흑화</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 150회 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 14.69% ▲] [5초 유지]<br /></span>
              ■ 자신의 체력이 70% 이하일 때 한하여 자신에게<br />
              <span style={{ color: "#00aeff" }}>[잃은 체력 1%당 공격력 0.96% ▲] [지속]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 마계흑룡파</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 1237.5% 대미지]<br /></span>
              ■ 자신의 체력이 50% 이하라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 1237.5% 대미지]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "메이든":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 센스리스 커먼센스</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 3발 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.03초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 231.6% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 언령: 기교의 언</div>
            <div className={styles.skill_info}>
              ■ 20회 피격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[복수: 공격력 26.66% ▲] [20초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 언령: 필중의 언</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>도발</span>] [10초 유지]<br /></span>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 152.84% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 언령: 힘있는 말</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 457.87% 대미지]<br /></span>
              ■ 자신이 복수 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 457.87% 대미지]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "D":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 스톰 센터</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 8.73% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 노도</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>우월 코드 공격 대미지</span> 46.93% 증가] [15초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 3.52% 회복] [15초 유지]</span><br />
              ■ 최초 발동 시 추가로 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 16.5% 회복] [15초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 기습</div>
            <div className={styles.skill_info}>
              ■ 타겟이 출현했다면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>버스트 게이지 충전</span> 98.56%] [전투 중 1회 발동]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>기절 면역</span>] [36.95초 유지]</span><br />
              ■ 타겟이 출현했다면 자신에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>우월 코드 공격 대미지</span> 91.09% 증가] [15초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 처단</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 426.24% 대미지]<br /></span>
              ■ 화력형 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>파츠 데미지</span> 42.38% ▲] [15초 유지]<br /></span>
              ■ 자신이 <span style={{ color: "#ff7803" }}>기절 면역</span> 상태라면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[풀 버스트 타임 지속 시간 5.04초 ▲]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "헬름":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 어너러블</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>1.30초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 69.04% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 진두지휘</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[일반 공격 크리티컬 확률 14.64% ▲] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 포문 개방</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>저지 부위 공격 대미지</span> 3.08% ▲] [지속]<br /></span>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 11.85% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 이지스 캐논</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 1237.5% 대미지]<br />
                [방어력 2.43% ▼] [15초 유지]<br /></span>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>
                [공격 대미지 비례 54.45% <span style={{ color: "#ff7803" }}>회복</span>] [10초 유지]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "네온:블루 오션":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 빅 빅 웨이브</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>300발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.50초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 5.57% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 어퍼 웨이브</div>
            <div className={styles.skill_info}>
              ■ 버스트 스킬 사용 시 자기 자신에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [<span style={{ color: "#ff7803" }}>파츠 대미지</span> 12.4% ▲] [20초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [<span style={{ color: "#ff7803" }}>파츠 대미지</span> 12.4% ▲] [20초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [<span style={{ color: "#ff7803" }}>파츠 대미지</span> 12.4% ▲] [20초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 워터 제트</div>
            <div className={styles.skill_info}>
              ■ 버스트 3단계 돌입 시 자기 자신에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [<span style={{ color: "#ff7803" }}>우월 코드 공격 대미지</span> 20.56% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [<span style={{ color: "#ff7803" }}>우월 코드 공격 대미지</span> 20.2% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [<span style={{ color: "#ff7803" }}>우월 코드 공격 대미지</span> 20.2% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 풀 하이드로 샷</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>
                <span style={{ color: "#00aeff" }}>[사용 무기 변경]</span><br />
                대미지 : <span style={{ color: "#ff7803" }}>최종</span> 공격력 33%<br /></span>
              <span style={{ color: "#00aeff" }}>유지 시간 : 7초</span><br />
              ■ 대상이 작열 속성이라면<br />
              <span style={{ color: "#00aeff" }}>
                [<span style={{ color: "#ff7803" }}>최종</span> 공격력 11% 추가 대미지]<br /></span>
            </div>
          </div>
        </div>
      );
      break;
    case "마스트":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 페로셔스</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 8.73% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 해적의 근성</div>
            <div className={styles.skill_info}>
              ■ 크리티컬 2회 적중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[해풍 : 시전자 기준 방어력 1.9% ▼] [50 중첩] [3초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[차지 속도 15.53% ▲] [2발 유지]</span><br />
              ■ 자신의 체력이 70% 이하일 때 한하여 자신과 자신을 제외한 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 50.93% ▲] [지속]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 해적의 안목</div>
            <div className={styles.skill_info}>
              ■ 전투 시작 시 자신과 자신을 제외한 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 23.56% ▲] [30초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 비바람을 뚫고!</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신과 자신을 제외한 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 기준 최대 체력만 86.2% ▲] [7초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 25.19% ▲] [7초 유지]</span><br />
              ■ 해풍 상태인 대상에게<br />
              <span style={{ color: "#00aeff" }}>[폭풍 : <span style={{ color: "#ff7803" }}>최종</span> 공격력 4.52% 대미지] [해풍 <span style={{ color: "#ff7803" }}>중첩 복사</span>] [1초 간격] [7초 유지]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "헬름:아쿠아마린":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 배틀쉽</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 71.07% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 위드 어드마이어</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 30회 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 131.34% 추가 대미지]</span><br />
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [버스트 스킬 재사용 시간 1.82초 ▼]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [버스트 스킬 재사용 시간 2.2초 ▼]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [버스트 스킬 재사용 시간 2.6초 ▼]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 이지스 캐논 견제 사격</div>
            <div className={styles.skill_info}>
              ■ 무작위 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 105.58% 대미지]</span><br />
              ■ 대상이 전격 코드라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>받는 대미지</span> 5.64% ▲] [5 중첩] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 이지스 캐논 오버로드</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 164.83% 대미지]</span><br />
              ■ 대상이 전격 코드라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 164.83% 추가 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "마르차나":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 이성의 눈</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 201.5% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 드론 서포터</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[차지 대미지 37.28% ▲] [2발 유지]</span><br />
              ■ 마지막 탄환 명중 시 공격력 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[체력 회복량 26.98% ▲] [3초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 양호 선생님</div>
            <div className={styles.skill_info}>
              ■ 버스트 스킬 사용 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 28.11% <span style={{ color: "#ff7803" }}>회복</span>]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 스승의 은혜</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[저장 : 시전자 기준 최대 체력 27.87%까지 초과 체력 회복량 저장]</span><br />
              <span style={{ color: "#00aeff" }}>[시전자 최대 체력 비례 28.11% <span style={{ color: "#ff7803" }}>회복</span>] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[시전자 방어력 비례 20.9% 방어력 ▲] [10초 유지]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "맥스웰":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 마이 러블리 베이비</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 69.04% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 스트레이트 샷</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[차지 속도 4.48% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격력 43.1% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 일렉트릭 샷</div>
            <div className={styles.skill_info}>
              ■ 니케를 제외한 적이 5기 이상일 때 한하여 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 4.83% ▲] [지속]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 13.91% ▲] [지속]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 피어스 샷</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[사용 무기 변경]:</span><br />
              <span style={{ color: "#00aeff" }}>차지 시간: 2초</span><br />
              <span style={{ color: "#00aeff" }}>대미지: <span style={{ color: "#ff7803" }}>최종</span> 공격력 813.42%</span><br />
              <span style={{ color: "#00aeff" }}>풀 차지 대미지: 300% 대미지</span><br />
              <span style={{ color: "#00aeff" }}>최대 장탄 수: 1발</span><br />
              <span style={{ color: "#00aeff" }}>추가 효과: 관통 특화</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "유니":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 포비든 기프트</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1.5초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : DMNS</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[차지 속도 8.97% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : SDS</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 2.77% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 2.77% <span style={{ color: "#ff7803" }}>회복</span>] [10초 유지]</span>
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 1발 ▲] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : BDG</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 348.73% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[이동 불가] [5초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "리타":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 드릴 펀치</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 8.73% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 리타 부스트</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 2.34초 ▼]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 2.7초 ▼]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 3.17초 ▼]</span><br />
              ■ 버스트 스킬 사용 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [최대 장탄 수 45.17% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [크리티컬 대미지 12.46% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [공격력 14.42% ▲] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 볼트 부스트</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 현재 체력이 가장 낮은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>엄폐물 체력 회복</span> 52.5%]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 더블 부스트</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 66% ▲] [5초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "율리아":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 클래시컬 아다지오</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.20초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 14.07% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 데크레센도</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 26.04% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 크레센도</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크레센도: 크리티컬 대미지 24.79% ▲] [5중첩] [15초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 클라이맥스</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 5기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 544.5% 대미지]</span><br />
              ■ 자신이 크레센도 최대 중첩 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 544.5% 추가 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "센티":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 마이티 봄버</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 2발 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>1.52초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 69.04% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 보수공사</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[스킬 2 <span style={{ color: "#ff7803" }}>재사용 시간</span> 9.16% ▼]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 현장검토</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />9초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 6.38% 아군 공용 <span style={{ color: "#ff7803" }}>보호막</span>] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 착공시작</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 체력이 가장 낮은 적 5기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 145.46% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 14.54% ▼] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "드레이크":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 사디스틱 카니발</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 3발 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.52초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 214.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 오버 차지</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[명중률 11.85% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격력 11.85% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 썬더볼트</div>
            <div className={styles.skill_info}>
              ■ 10회 공격 시 체력이 가장 낮은 적 3기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 98.55% 대미지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 드레이크 스페셜</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 1254% 대미지]</span><br />
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 72.18% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "크로우":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 알 수 없음</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.67초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 5.59% * 2 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 킬링타임</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 19.93% ▼] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 데어데블</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 89.09% 추가 대미지]</span><br />
              ■ 마지막 탄환 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 12.72% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 더 테러리스트</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 915.75% 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "페퍼":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 비타민 밤</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 3발 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.03초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 231.6% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 리프레쉬 하트</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 체력이 가장 낮은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 최대 체력 비례 4.45% 회복]</span><br />
              ■ 마지막 탄환 명중 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[리프레쉬 하트: 체력 회복량 6.53% ▲] [5 중첩] [15초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 비타민 파워</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />10초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 160% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격력 3.55% ▼] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 페퍼 테라피</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 1237.5% 대미지]</span><br />
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>중첩 가능 이로운 효과 중첩량</span> 1개 ▲]</span><br />
              ■ 자신이 리프레쉬 하트 최대 중첩 상태라면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 최대 체력 비례 27.22% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "애드미":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 애착의 관</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>1.73초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 67.37% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 응원의 손길</div>
            <div className={styles.skill_info}>
              ■ 20회 피격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[차지 대미지 9.59% 배율▲] [20초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 고양이 숨결</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>받는 대미지</span> 28.65% ▼] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 애정의 보은</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[재장전 속도 50.91% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 28.34% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "자칼":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : T.O.P</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.03초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 65.02% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 해피 자칼</div>
            <div className={styles.skill_info}>
              ■ 10회 피격 시 최대 체력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>받는 대미지</span> 9.09% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격력 9.09% ▼] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 치얼업 자칼</div>
            <div className={styles.skill_info}>
              ■ 전투 시작 시 자신과 자신을 제외한 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[피격 대미지 분배] [120초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 8.27% ▲] [120초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 크레이지 자칼</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[대상 설명이 '~ 적 1에게'로 끝나는 버스트 스킬 공격 대미지 38.91% ▲] [15초 유지] (추가 대미지 제외)</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 14.69% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "라플라스":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 히어로 신드롬</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.33초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 63.11% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 히어로 비전</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[히어로 비전: 폭발 범위 3.57% ▲] [5 중첩] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 히어로 봄버</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 81.66% 추가 대미지]</span><br />
              ■ 대상 파츠 명중 시 대상 본체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 14.78% 추가 대미지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 라플라스 버스터</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[사용 무기 변경]:</span><br />
              <span style={{ color: "#00aeff" }}>최초 대미지: <span style={{ color: "#ff7803" }}>최종</span> 공격력 897.6% 대미지</span><br />
              <span style={{ color: "#00aeff" }}>지속 대미지: <span style={{ color: "#ff7803" }}>최종</span> 공격력 14.52% 대미지</span><br />
              <span style={{ color: "#00aeff" }}>유지 시간: 5초</span><br />
              <span style={{ color: "#00aeff" }}>추가 효과: 관통 특화</span><br />
              <span style={{ color: "#00aeff" }}>특이 사항: 버스트 스킬 시전 중 엄폐 불가</span><br />
              ■ 자신이 히어로 비전 최대 중첩 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 11.9% 방어력 무시 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "길티":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 소프트 벨트</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.67초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 231.4% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 빌려 갈게에···.</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 6회 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[빌려 갈게에···. : 공격력이 가장 높은 아군 1기의 <span style={{ color: "#ff7803" }}>공격력 복제</span> 8.81%] [5중첩] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 같이 놀자아···.</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 12회 공격 시 풍압 코드 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>중첩 가능 이로운 효과 중첩량</span> 1개 ▲] [공격력 4.13% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 잡았다아···.</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 284.32% 대미지]</span><br />
              ■ 자신이 빌려 갈게에.... 최대 중첩 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 20.25% ▼] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 277.71% 추가 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "신":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 헤비토커</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 13.65% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 센텐스 엔딩스</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력이 가장 높은 아군 1기의 <span style={{ color: "#ff7803" }}>최대 체력 복제</span> 15.03%] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[주목: 적 전체를 <span style={{ color: "#ff7803" }}>도발</span>] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 허리 온</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 종료 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>버스트 게이지 충전 속도</span> 16.17% ▲] [5초 유지]</span><br />
              ■ 버스트 스킬 사용 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[사용 횟수 별 추가 효과]<span style={{ color: "#ff7803" }}> [하위 효과 중복 적용]</span></span><br />
              <span style={{ color: "#00aeff" }}>1회: [공격 대미지 비례 15.3% <span style={{ color: "#ff7803" }}>회복</span>] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회: [체력 회복량 51% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>3회: [방어력 43.2% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 워드 오브 킬</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 니케를 제외한 적이 4기 이상이라면 모든 적에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>받는 대미지</span> 12.23% ▲] [5초 유지]</span><br />
              ■ 공격 범위 내 적들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 176.32% 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "퀀시":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 리스트 제일</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.67초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 4.47% * 2 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 새로운 루트</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 60회 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력이 가장 높은 니케의 <span style={{ color: "#ff7803" }}>최대 체력 복제</span> 12.42%] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 은밀한 공범자</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />8초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 16.11% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 위대한 탈출</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력 43.87% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 29.9% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "앤:미라클 페어리":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 메이플라이</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 춤추는 요정</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 3회 공격 시 지원형 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 6.07% <span style={{ color: "#ff7803" }}>회복</span>] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 요정의 장난</div>
            <div className={styles.skill_info}>
              ■ 자신의 체력이 90% 이상일 때 한하여 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[체력 회복량 23.46% ▲] [지속]</span><br />
              ■ 마지막 탄환 명중 시 자신의 체력이 90% 이상이라면 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[체력 회복량 78.93% ▼] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 파란 나비의 꿈</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />60초</div>
            <div className={styles.skill_info}>
              ■ 화력형 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 38.61% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
              <span style={{ color: "#00aeff" }}>[공격력 77.22% ▲] [10초 유지]</span><br />
              ■ 사망한 화력형 아군 무작위 1기에게<br />
              <span style={{ color: "#00aeff" }}>[체력 99%로 <span style={{ color: "#ff7803" }}>부활</span>] [전투 중 1회 발동]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "에피넬":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 더 트릭스터</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 10.12% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 슈퍼 루키</div>
            <div className={styles.skill_info}>
              ■ 적 처치 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[슈퍼 루키: 공격력 13.86% ▲] [5중첩] [15초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 스파이더</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 5.05% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 6.4% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : SAFE 50-50 </div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 457.87% 대미지]</span><br />
              ■ 자신이 슈퍼 루키 최대 중첩 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 457.87% 추가 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "나가":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 엘레강트 녹턴</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 204.8% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 우정의 가드</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 12회 공격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>엄폐물 체력 회복</span> 14.57% ▲]</span><br />
              ■ 보호막 적용 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>코어 대미지</span> 85.17% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 우정의 서포트</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 5회 공격 시 공격력 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>코어 대미지</span> 40.07% ▲] [10초 유지]</span><br />
              ■ 일반 공격 5회 공격 시 남은 체력 비율이 가장 낮은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 9.58% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 친구들과 함께라면!</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[관통 특화] [10초 유지]</span><br />
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 기준 공격력 16.18% ▲] [10초 유지]</span><br />
              ■ 자신이 보호막 적용 상태라면 추가로 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 기준 공격력 31.02% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "티아":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 체이스 네일</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 파충류 애호가</div>
            <div className={styles.skill_info}>
              ■ 엄폐물 체력 회복 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 13초 ▼] [2중첩] [12초 유지]</span><br />
              ■ 엄폐물 체력 회복 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>공격 대미지</span> 32.11% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 카멜레온 은신술</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 5회 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 최대 체력 비례 <span style={{ color: "#ff7803" }}>엄폐물 최대 체력</span> 32.75% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[주목 : 적 전체 <span style={{ color: "#ff7803" }}>도발</span>] [5초 유지]</span><br />
              ■ 버스트 스킬 사용 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 최종 최대 체력 비례 <span style={{ color: "#ff7803" }}>엄폐물 체력 회복</span> 21.41% ▲]</span><br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 21.96% <span style={{ color: "#ff7803" }}>회복</span>] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 도마뱀의 보호</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 35.07% <span style={{ color: "#ff7803" }}>보호막</span>] [10초 유지]</span><br />
              ■ 자신을 제외한 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 10.21% <span style={{ color: "#ff7803" }}>보호막</span>] [10초 유지]</span><br />
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>버스트 재진입</span> 1단계]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "슈가":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 웜 아이스</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 3발 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.03초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 231.6% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 블랙 타이푼</div>
            <div className={styles.skill_info}>
              ■ 엄폐물 피격 시 20% 확률로 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 16.39% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[재장전 속도 12.12% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 느와르 센서</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 13.02% ▲] [10초 유지]</span><br />
              ■ 풀 버스트 타임 시작 시 샷건 소지 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 83.8% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 트러블 슈터</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격 속도 66% ▲] [15초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[명중률 33%▲] [15초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "엑시아":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 언락 유토피아</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 69.04% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 인베이젼</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 자신이 해킹 코드 수집 상태라면 대상에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 13.77% ▼] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 13.77% ▼] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 시크릿 코드</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[해킹 코드 수집 : 공격력 16.8% ▲] [5 중첩] [15초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 원사이드 프로토콜</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 10기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 공격력 122.32% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 2.71% ▼] [5초 유지]</span><br />
              ■ 자신이 해킹 코드 수집 최대 중첩 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 122.32% 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "앨리스":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 어메이징 원더랜드</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 69.04% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 힘나는 당근</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[차지 속도 11.67% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[차지 대미지 7% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 건강한 당근</div>
            <div className={styles.skill_info}>
              ■ 자신의 체력이 80% 이상이라면 자신에게<br />
              <span style={{ color: "#00aeff" }}>[관통 특화] [지속]</span><br />
              ■ 자신의 체력이 80% 미만이라면 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 8.12% <span style={{ color: "#ff7803" }}>회복</span>] [지속]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 신기하고 이상한 나라</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[차지 속도 80.15% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격력 55.12% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "블랑":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 화이트 폴룩스</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 13.65% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 럭키 가드</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 120회 공격 시<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 11.8% 아군 공용 <span style={{ color: "#ff7803" }}>보호막</span>] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 래빗 트윈즈 W</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 종료 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 최대 체력 비례 3.68% 지속 <span style={{ color: "#ff7803" }}>회복</span>] [1초 간격] [5초 유지]</span><br />
              ■ 풀 버스트 타임 종료 시 동일 스쿼드 아군이 있다면 자신에게<br />
              <span style={{ color: "#00aeff" }}>[버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 40.76초 ▼]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 쇼타임</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />60초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 3.84% 지속 회복] [1초 간격] [8초 유지]</span><br />
              ■ 자신을 제외한 체력이 가장 낮은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>불굴</span>] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[최대 체력 31.68% ▲] [10초 유지]</span><br />
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>받는 대미지</span> 39.26% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "누아르":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 블랙 카스토르</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 3발 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>0.70초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 204.6% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 럭키챰</div>
            <div className={styles.skill_info}>
              ■ 자신의 체력이 70% 이상이라면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 기준 공격력 14.08% ▲] [지속]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 래빗 트윈즈 B</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 5발 ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[탄환 충전 39.88%]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 피날레</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 351.64% 대미지]</span><br />
              ■ 샷건 소지 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[명중률 13.93% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>저지 부위 공격 대미지</span> 23.23% ▲] [10초 유지]</span><br />
              ■ 동일 스쿼드 아군이 있다면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[명중률 11.61% ▲] [30초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>저지 부위 공격 대미지</span> 19.36% ▲] [30초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "프림":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 레이지본즈</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>1.50초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 65.95% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : ...자고 싶다</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 4회 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 15.84% ▼] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : ...아</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력 6.09% ▲] [4초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : ...귀찮아</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 10기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 101.66% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 9.86% ▼] [10초 유지]</span><br />
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력 30.26% ▲] [4초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "메어리":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 카인드 하트</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 201.5% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : CPR</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 체력이 가장 낮은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 최대 체력 비례 8.4% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 너싱</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[체력 회복량 23.78% ▲] [15초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 백의의 천사</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신의 체력이 50% 이상이라면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 19.8% ▲] [10초 유지]</span><br />
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 최대 체력 비례 39.6% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "밀크":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 퍼펙트 위닝</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 69.04% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 승부욕</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 31.83% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 밀크 도핑</div>
            <div className={styles.skill_info}>
              ■ 자신의 체력이 80% 이상일 때 한하여 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 11.13% ▲] [지속]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 투 더 빅토리</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 367.34% 대미지]</span><br />
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 대미지 비례 16.16% <span style={{ color: "#ff7803" }}>회복</span>] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "율하":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 이타의 관</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>1.87초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 68.23% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 바이팅 리더십</div>
            <div className={styles.skill_info}>
              ■ 30회 피격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[평정심: 크리티컬 확률 24.53% ▲] [20초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 위크 메이커</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />30초</div>
            <div className={styles.skill_info}>
              ■ 체력이 가장 낮은 아군 5기에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 90.75% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[피격 대미지 분배] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 히스테릭 워커</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 457.87% 대미지]</span><br />
              ■ 자신이 평정심 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 457.87% 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "루드밀라":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 눈사태의 망령</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.76초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 10.32% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 노블레스 오블리주</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 8.4% ▼] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격력 8.4% ▼] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 여왕의 품격</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[주목 : 적 전체 <span style={{ color: "#ff7803" }}>도발</span>] [15.09초 유지]</span><br />
              ■ 풀 버스트 타임 시작 시 자신에게게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>받는 대미지</span> 57.86% ▼] [15초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 눈의 여왕</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 10기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 공격력 163.1% 대미지]</span><br />
              ■ 자신의 체력이 50% 이상이라면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 12.93% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "루피":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 쇼퍼 홀릭</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 13.65% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 프라이즈</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 100회 명중 시 철갑 코드 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>중첩 가능 이로운 효과 중첩량</span> 1개 ▲]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 2.24% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 마일리지</div>
            <div className={styles.skill_info}>
              ■ 30회 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[마일리지: 공격력 13.8% ▲] [5중첩] [15초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 싱글 페이먼트</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 274.28% 대미지]</span><br />
              ■ 자신이 마일리지 최대 중첩 상태라면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 19.8% ▲] [5초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "얀":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 알 수 없음</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 풍비박산</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[차지 대미지 21.55% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 다다익선</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 2.77% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 1.33% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 일확천금</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 348.73% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격 범위 중심으로 강제 이동] [2초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "도라":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 알 수 없음</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 69.04% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 기업가 정신</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />10초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 16.16% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 리스크 공유</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 1.82초 ▼]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 2.2초 ▼]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 2.6초 ▼]</span><br />
              ■ 버스트 스킬 사용 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [공격력 7.72% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [크리티컬 확률 4.21% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [크리티컬 대미지 13.22% ▲] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : R&D 샷</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 공격력 734.69% 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "노벨":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 식스 센스</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 8.1% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 수상한 것입니다!</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />10초</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 3기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 52.36% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 7.05% ▼] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 탐정 도구인 것입니다!</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 100회 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[증거품 수집 : 방어력 13.5% ▲] [5 중첩] [15초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 사건 해결인 것입니다!</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 공격력 330.61% 대미지]</span><br />
              ■ 자신의 증거품 수집 최대 중첩 상태라면 추가로 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>받는 대미지</span> 67.5% ▲] [5초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "폴크방":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 익스트림 핫</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.30초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 10.32% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 스타팅 휘슬</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />30초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 최대 체력 비례 13.71% <span style={{ color: "#ff7803" }}>보호막</span>] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[체력 회복량 45.7% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 페이스 다운</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>도발</span>] [5초 유지]</span><br />
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력 44.96% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 스플린트</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 최대 체력 비례 32.9% <span style={{ color: "#ff7803" }}>보호막</span>] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 65.81% <span style={{ color: "#ff7803" }}>회복</span>] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "사쿠라":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 이치겐킨</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>1.67초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 67% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 벚꽃차</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 3회 공격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[벚꽃차 : 방어력 8.15%] [10중첩] [15초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 꽃잎 떨구기</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>적 발사체 공격 시 해당 발사체에 가하는 대미지</span> 7.74% ▲] [지속]</span><br />
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 4.84초 ▼]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 앵화난만</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>풍압 코드 적으로부터 받는 대미지</span> 90.72% 감소] [30초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[전투 중 1회 발동]</span><br />
              <span style={{ color: "#00aeff" }}>[시전자 공격력 23.76%만큼 공격력 ▲] [10초 유지]</span><br />
              ■ 자신이 벚꽃차 최대 중첩 상태라면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>저지 부위 공격 대미지</span> 23.54% ▲] [30초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "바이퍼":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 러스트 체이서</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 3발 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.70초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 13.65% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 스네이크 센스</div>
            <div className={styles.skill_info}>
              ■ 타겟이 출현했다면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 25.98% ▲]</span><br />
              <span style={{ color: "#00aeff" }}>[명중률 11.13% ▲] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 스네이크 스케일</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[명중률 3.43% ▲] [지속]</span><br />
              ■ 풀 버스트 타임 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[애교: <span style={{ color: "#ff7803" }}>1인 공격 대상에서 제외.</span> 직접 피격 시 해제] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[무적] [1초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 스네이크 바이트</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 지정한 적 대상 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 462.85% 대미지]</span><br />
              ■ 대상이 타겟이라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 19.83% ▼] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "코코아":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 코코렐라</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 69.04% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 프로 종이접기</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>엄폐물 체력 회복</span> 17.76%]</span><br />
              ■ 해로운 효과 소지 아군 중 무작위 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>해로운 효과 해제</span> 1개]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 프로 케첩</div>
            <div className={styles.skill_info}>
              ■ 풀차지 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[프로 케첩 : 피격 대미지 4.37% ▼] [15 중첩] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 프로 메이드장</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>해로운 효과 해제</span> 1개]</span><br />
              ■ 자신이 프로 케첩 최대 중첩 상태라면 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 13.59% ▼] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "소다":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>머신건 : 브라이트 클리너</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>300발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 5.57% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 자리 청소 메이드</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 180회 공격 시 자기 자신에게<br />
              <span style={{ color: "#00aeff" }}>[메이드정신 : 최대 체력 13% ▲] [5 중첩] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 바닥 청소 메이드</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />12초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 3.23% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
              ■ 자신이 메이드 정신 최대 중첩 상태라면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 12.71% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 대청소 메이드</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 무작위 적 2기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 321.28% 대미지] [기절] [1초 유지]</span><br />
              ■ 작열 코드 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>중첩 가능 이로운 효과 중첩량</span> 1개 ▲]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "비스킷":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 해피퍼피</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 해피 퍼피</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 종료 시 화력형 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[일반 공격 크리티컬 확률 5.77% 증가] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 1.53% 지속 <span style={{ color: "#ff7803" }}>회복</span>] [1초 간격] [10초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 터그 놀이</div>
            <div className={styles.skill_info}>
              ■ 방어형 아군 누군가의 체력이 50% 이하라면 대상에게<br />
              <span style={{ color: "#00aeff" }}>[무적] [5초 유지] [전투 중 2회 발동]</span><br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 23.26% <span style={{ color: "#ff7803" }}>회복</span>] [전투 중 2회 발동]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 산책 훈련</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 엄폐물이 파괴된 아군 무작위 2기에게<br />
              <span style={{ color: "#00aeff" }}>[엄폐물 체력 93.6%로 <span style={{ color: "#ff7803" }}>엄폐물 부활</span>]</span><br />
              ■ 지원형 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 43.08% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 55.44% 회복] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "라이":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 스틸 베이비</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.83초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 9.15% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 선배의 응원</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 60회 공격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>버스트 게이지 충전</span> 2.47%]</span><br />
              ■ 디코이가 있다면 디코이에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 2.1% 회복]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 선배의 기합</div>
            <div className={styles.skill_info}>
              ■ 전투 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>디코이</span> : 시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 96% 분신] [240초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 선배의 모범</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[주목] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>받는 대미지</span> 14.4% ▼] [10초 유지]</span><br />
              ■ 디코이가 있다면 디코이에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 2.27% 지속 회복] [1초 간격] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "아리아":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>머신건 : 알 수 없음</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>300발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.33초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 5.47% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 알레그로</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 26.99%▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 라크리모소</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 7.03% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 아리아 디 캄포</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 37.86% <span style={{ color: "#ff7803" }}>보호막</span>] [10초 유지]</span><br />
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[명중률 30.37% ▲] [15초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "노이즈":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 알 수 없음</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 코러스</div>
            <div className={styles.skill_info}>
              ■ 20회 피격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>받는 대미지</span> 10.66% ▼] [20초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 싱잉 투게더</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>도발</span>] [2초 유지]</span><br />
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력 24.86% ▲] [1.8초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 에너제틱 노이즈</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 2.47% 지속 <span style={{ color: "#ff7803" }}>회복</span>] [1초 간격] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[최대 체력 49.5% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "볼륨":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 알 수 없음</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 8.73% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 프리스타일</div>
            <div className={styles.skill_info}>
              ■ 적 처치 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 12.6% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 드랍 더 비트</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 2.34초 ▼]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 2.7초 ▼]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 3.17초 ▼]</span><br />
              ■ 버스트 스킬 사용 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [크리티컬 대미지 10.77% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [크리티컬 대미지 12.46% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [크리티컬 대미지 14.42% ▲] [5초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 볼륨 업, 가이즈!</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 31.9% ▲] [5초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "루피:윈터 쇼퍼":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 쇼퍼 홀릭</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 13.65% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 윈터 프리미엄</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 19.02% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : VIP 기프트</div>
            <div className={styles.skill_info}>
              ■ 아군이 버스트 스킬 사용 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[쇼핑: 방어력 1.33% ▲] [4중첩] [20초 유지]</span><br />
              ■ 풀 버스트 타임 종료 시 자신이 쇼핑 최대 중첩 상태라면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>버스트 게이지 충전 속도</span> 7.9% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 쇼퍼홀릭 데이트</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[주목: 적 전체 <span style={{ color: "#ff7803" }}>도발</span>] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 50.47% <span style={{ color: "#ff7803" }}>회복</span>] [10초 유지]</span><br />
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[재장전 속도 63.17% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>버스트 재진입</span> 1단계]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "로산나":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>머신건 : 골든 토미</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>300발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.76초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 10.32% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 온 더 렘</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 120회 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[은신 : <span style={{ color: "#ff7803" }}>1인 공격 대상에서 제외</span> 직접 피격 시 해제] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 19.34% ▲] [3초 유지]</span>
              ■ 일반 공격 10회 명중 시 공격력이 가장 높은 적 2기에게<br />
              <span style={{ color: "#00aeff" }}><span style={{ color: "#ff7803" }}>이로운 효과 해제</span> 5개 [전투 중 1회 발동]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 카포 디 카피</div>
            <div className={styles.skill_info}>
              ■ 전투 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[은신 : <span style={{ color: "#ff7803" }}>1인 공격 대상에서 제외</span> 직접 피격 시 해제] [5초 유지]</span><br />
              ■ 니케 누군가 전투불능 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[광기 : 공격력 22.61% ▲] [10회 중첩] [30초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>버스트 게이지 충전</span> 36.54%]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 벤데타</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>우선적으로 화력형 적</span> 2기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 1310.4% 대미지]</span><br />
              ■ 자신이 은신 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 561.6% 추가 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "메어리:베이 갓데스":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격 소총 : 썸머 샷</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>1.50초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 65.95% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 해변의 햇살</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 1.05% 회복] [1초 간격] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 3.69% 회복] [1초 간격] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 6.86% 회복] [1초 간격] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 발을 적시는 파도</div>
            <div className={styles.skill_info}>
              ■ 버스트 스킬 사용 시 수냉 코드 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [<span style={{ color: "#ff7803" }}>우월 코드 공격 대미지</span> 20.85% ▲] [3초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [<span style={{ color: "#ff7803" }}>우월 코드 공격 대미지</span> 13.88% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [<span style={{ color: "#ff7803" }}>우월 코드 공격 대미지</span> 8.36% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 고요한 수면</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 수냉 코드 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 23.23% ▲] [3초 유지]</span><br />
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span>  최대 체력 비례 최대 체력 27.87% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "네로":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 야옹 야옹</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.30초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 8.39% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 고양이 보은</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>회복 효과 적용 시</span> 대상에게<br />
              <span style={{ color: "#00aeff" }}>[받는 대미지 14.14% ▼] [5초 유지]</span><br />
              ■ <span style={{ color: "#ff7803" }}>회복 효과 적용 시</span> 자신에게<br />
              <span style={{ color: "#00aeff" }}>[고양이 보은: 받는 대미지 8.43% ▼] [5 중첩] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 고양이 손</div>
            <div className={styles.skill_info}>
              ■ 피격 시 30% 확률로 대상에게<br />
              <span style={{ color: "#00aeff" }}>[받는 대미지 8.26% ▲] [5초 유지]</span><br />
              ■ 자신이 큰 고양이 상태라면 피격 시 30% 확률로 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 158.05% 대미지]</span><br />
              ■ 전투 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력 60.28% ▲] [지속]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 크고 난폭한 고양이</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 체력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 1104.91% 대미지]</span><br />
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[주목: 적 전체 도발] [15초 유지]</span><br />
              ■ 자신이 고양이 보은 최대 중첩 상태라면 자신에게<br />
              <span style={{ color: "#00aeff" }}>[큰 고양이: 체력 회복량 60.08% ▲] [15초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "아니스:스파클링 서머":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 리버틴 아쿠아</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>5발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 259.2% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 스파클링 부스트</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 전격 코드 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 공격력 55.31%만큼 공격력 ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[재장전 속도 49.28% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 스파클링 미사일</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 발사 시 공격력이 가장 높은 적 2기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 382.42% 대미지]</span><br />
              ■ 마지막 탄환 발사 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>저지 부위 공격 대미지</span> 6.91% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 스파클링 웨이브</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 73.92% ▼] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[재장전 속도 27.72% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>우월 코드 공격 대미지</span> 42.24% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "스노우 화이트":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 세븐스 드워프</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 14.71% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 순백의 의지</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 30회 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 82.8% 추가 대미지]</span><br />
              ■ 일반 공격 30회 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 8.28% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 세븐스 드워프 : V & VI</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 144.73% 대미지]</span><br />
              ■ 풀 버스트 타임 지속 시간 중 발동 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 26.1% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 세븐스 드워프 : I</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[사용 무기 변경]:</span><br />
              <span style={{ color: "#00aeff" }}>차지 시간: 5초</span><br />
              <span style={{ color: "#00aeff" }}>대미지: <span style={{ color: "#ff7803" }}>최종</span> 공격력 499.5%</span><br />
              <span style={{ color: "#00aeff" }}>풀 차지 대미지: 1000% 대미지</span><br />
              <span style={{ color: "#00aeff" }}>최대 장탄 수: 1발</span><br />
              <span style={{ color: "#00aeff" }}>추가 효과: 관통 특화</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "이사벨":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 익스트림 옵세서</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.86초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 타겟 마킹</div>
            <div className={styles.skill_info}>
              ■ 버스트 스킬 사용 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[사용 횟수 별 추가 효과]<span style={{ color: "#ff7803" }}> [하위 효과 중복 적용]</span></span><br />
              <span style={{ color: "#00aeff" }}>1회 : [타겟 마킹 1: 크리티컬 확률 6.26% ▲] [45초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [타겟 마킹 2: 크리티컬 대미지 18.03% ▲] [하위 효과 중복 적용] [45초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [타겟 마킹 3: 공격력 17.28% ▲] [하위 효과 중복 적용] [45초 유지]</span>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 페더 이젝션</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 5기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 170.58% 대미지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 소닉 체이서</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 149.85% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[사용 횟수 별 추가 효과]<span style={{ color: "#ff7803" }}> [하위 효과 중복 적용]</span></span><br />
              <span style={{ color: "#00aeff" }}>타겟 마킹 1: [받는 대미지 39.96% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>타겟 마킹 2: [<span style={{ color: "#ff7803" }}>최종</span> 공격력 299.7% 추가 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>타겟 마킹 3: [<span style={{ color: "#ff7803" }}>최종</span> 공격력 349.65% 추가 대미지]</span>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[풀 버스트 타임 지속 시간 5초 ▼]</span>
            </div>
          </div>
        </div>
      );
      break;
    case "라푼젤":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 홀리 그레이스</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.30초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 62.95% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 세크리파이스</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 시 체력이 가장 낮은 아군 3기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 최대 체력 비례 4.03% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 디바인 블레스</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력 8.19% ▲] [20초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[체력 회복량 13.65% ▲] [20초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 가든 오브 샹그릴라</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />60초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 40.83% 회복]</span><br />
              ■ 사망한 아군 무작위 1기에게<br />
              <span style={{ color: "#00aeff" }}>[체력 81.67%로 <span style={{ color: "#ff7803" }}>부활</span>]</span><br />
              ■ 자신의 체력이 30% 이하라면 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[기절] [1초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "홍련":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 화무십일홍</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>20발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.30초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 27.08% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 육참골단</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 10회 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 23.15% ▲] [5 중첩] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[현재 체력 4.01% ▼]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 검신합일</div>
            <div className={styles.skill_info}>
              ■ 피격 시 30% 확률로 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 138.24% 대미지]</span><br />
              ■ 자신의 체력이 60% 이하일 때 한하여 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 6.61% ▲] [지속]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 홍련일섬</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신의 체력이 50% 이하라면 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 19.57% ▲] [10초 유지]</span><br />
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 849.15% 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "하란":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 알 수 없음</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.30초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 70.89% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 역병 전이</div>
            <div className={styles.skill_info}>
              ■ 공격 시 25% 확률로 대상에게<br />
              <span style={{ color: "#00aeff" }}>[바이러스 전이 : <span style={{ color: "#ff7803" }}>최종</span> 공격력 17.28% 지속 대미지] [1초 간격] [5초 유지]</span><br />
              ■ 적 사망 시 대상이 바이러스 전이 상태였다면 가장 가까운 적 2기에게<br />
              <span style={{ color: "#00aeff" }}>[바이러스 전이 : <span style={{ color: "#ff7803" }}>최종</span> 공격력 17.28% 지속 대미지] [1초 간격] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 포식</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[관통 특화] [1발 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 2.95% ▲] [1발 유지]</span><br />
              ■ 적 처치 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 3.02% ▲] [15 중첩] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 사멸의 날</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 999% 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "노아":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 알 수 없음</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.50초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 32.02% * 2 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 아파 보이네?</div>
            <div className={styles.skill_info}>
              ■ 피격 시 10% 확률로 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[받는 대미지 8% ▼] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 때려볼래?</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>도발</span>] [2초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격력 13.25% ▼] [2초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 약오르죠?</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[주목: 적 전체 <span style={{ color: "#ff7803" }}>도발</span>] [10초 유지]</span><br />
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>무작</span>] [3초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 133.48% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "모더니아":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>머신건 : 뉴 에이지</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>300발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.30초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 7.71% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 고속진화</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 3.05% 추가 데미지]</span><br />
              ■ 일반 공격 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 14.25%▲] [5중첩] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 5.04%▼] [5중첩] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 대도약</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[명중률 8.56%▲] [15초 유지]</span><br />
              ■ 일반 공격 200회 명중 시 자신이 명중률 증가 상태라면 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 29.38%▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 신세계</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[풀 버스트 타임 지속 시간 5초▲]</span><br />
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[장탄수 무한] [15초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[섬멸 모드]:</span><br />
              <span style={{ color: "#00aeff" }}>기능: 조준선 확장 & 조준 범위 내 적 전체 동시 조준. 보스는 저지 부위 및 파츠 무관, 단일 적으로 간주</span><br />
              <span style={{ color: "#00aeff" }}>대미지: <span style={{ color: "#ff7803" }}>최종</span> 공격력 2.24% 대미지</span><br />
              <span style={{ color: "#00aeff" }}>유지 시간: 15초</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "니힐리스타":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 낡은 세계의 종말</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 69.04% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 버닝 샷</div>
            <div className={styles.skill_info}>
              ■ 풀차지 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[관통 특화] [1발 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[관통 범위 50% 확장] [1발 유지]</span><br />
              ■ 2기 이상을 동시에 명중시켰다면 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 50.33% 추가 대미지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 메기도 플레임</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />10초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 112.64% 대미지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 번 아포칼립스</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 158.59% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[화상 : <span style={{ color: "#ff7803" }}>최종</span> 공격력 13.19% 지속 대미지] [1초 간격] [10초 유지]</span><br />
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 6발 ▲] [15초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "도로시":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 홀언그레이트풀 오즈</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 13.65% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 성화</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 공격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 1.56초 ▼]</span><br />
              ■ 마지막 탄환 공격 시 자신이 발현 상태라면 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>파츠 대미지</span> 50.68% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 세례</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[초토화 : <span style={{ color: "#ff7803" }}>최종</span> 공격력 216% 분배 대미지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 실낙원</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[발현 : 스킬2 <span style={{ color: "#ff7803" }}>재사용 시간</span> 18초 ▼] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[관통 특화] [10초 유지]</span><br />
              ■ 지정한 적 대상 1기에게<br />
              <span style={{ color: "#00aeff" }}>[낙인 : 유지 시간 동안 해당 적의 피격 대미지 일괄 누적. 유지 시간 만료 후 누적 대미지만큼 적 전체에게 분배 대미지.
                대미지 최대 누적량은 시전자 <span style={{ color: "#ff7803" }}>최종</span> 공격력의 8900.83%만큼 가능.] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "마키마":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 언노운 웨폰</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 8.73% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 나에게 활약을 보여줄 수 있겠니?</div>
            <div className={styles.skill_info}>
              ■ 20회 피격 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[재장전 속도: 36.96%▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력: 14.78%▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 발각된 모양이네</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 120회 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[주목 : 적 전체 도발] [3초 유지]</span><br />
              ■ 전투불능에 이르는 공격에 피격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>불굴</span>] [7초 유지] [전투 중 1회 발동]</span><br />
              <span style={{ color: "#00aeff" }}>[버스트 스킬 <span style={{ color: "#ff7803" }}>재사용 시간</span> 11.58초▼]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 조용히 해주겠니?</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[관통 특화] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 34.02% 회복] [10초 유지]</span><br />
              ■ 자신이 <span style={{ color: "#ff7803" }}>불굴</span> 상태라면 자신에게<br />
              <span style={{ color: "#00aeff" }}>[체력 회복량 41.02%▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "파워":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 파워풀 파워</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 피의 마인</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[피의 마인 : 공격력 6.4% ▲] [5 중첩] [3초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 피의 폭발</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 18회 공격 시 자신이 피의 마인 최대 중첩 상태라면 자신에게<br />
              <span style={{ color: "#00aeff" }}>[폭발 범위 38.61% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[탄환 충전 100%] [전투 중 1회 발동]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 피의 해머</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />60초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 1584% 대미지]</span><br />
              ■ 자신이 피의 마인 최대 중첩 상태라면 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 1584% 추가 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "2B":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 백포</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>90발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 5.99% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 생존 행동</div>
            <div className={styles.skill_info}>
              ■ 버스트 스킬 사용 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [최대 체력 10.03% ▲] [지속]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [최대 체력 20.06% ▲] [지속]</span><br />
              <span style={{ color: "#00aeff" }}>3회 : [최대 체력 57.76% ▲] [지속]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 클러스터 봄</div>
            <div className={styles.skill_info}>
              ■ 300회 사격 시 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 167.45% 대미지]</span><br />
              ■ 전투 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력의 6.16%만큼 공격력 ▲] [지속]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 연속 공격</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 2439.36% 분배 대미지]</span><br />
              ■ 최대 체력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 792% 추가 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "A2":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 40식 참기도</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>1.50초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 67.65% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 출력 상승</div>
            <div className={styles.skill_info}>
              ■ 버스트 스킬 사용 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[차지 대미지 110.44% ▲] [15초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[폭발 범위 100.74% ▲] [15초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 완충전 공격</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 30.1% 추가 대미지]</span><br />
              ■ 풀 차지 공격 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>파츠 대미지</span> 40.88% ▲] [3초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : B 모드</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[B 모드] :</span><br />
              <span style={{ color: "#00aeff" }}>기능 : 1초마다 자신의 체력이 감소하는 대신 공격력과 차지 속도 증가.</span><br />
              <span style={{ color: "#00aeff" }}>자신의 체력이 40% 이하라면 B 모드 해제.</span><br />
              <span style={{ color: "#00aeff" }}>효과1 : [현재 체력 3.99% ▼] [1초 간격]</span><br />
              <span style={{ color: "#00aeff" }}>효과2 : [공격력 15.19% ▲]</span><br />
              <span style={{ color: "#00aeff" }}>효과3 : [차지 속도 35.88% ▲]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "라피":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 밀리터리아</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 13.65% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 포메이션 F.F</div>
            <div className={styles.skill_info}>
              ■ 20회 피격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 21.81%▲] [20초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 미사일</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 528.97% 추가 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>도발</span>] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 다탄두 미사일</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 657.72% 대미지]</span><br />
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 60.75% ▲][10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "네온":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 올 브레이크</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 3발 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.82초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 224.5% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 네온 특제탄</div>
            <div className={styles.skill_info}>
              ■ 적 처치 시 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 3.56% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 화력 만세!</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 45.93% ▲] [2발 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 오직 화력!</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 528.97% 대미지]</span><br />
              ■ 샷건 소지 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄수 3발 ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "델타":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 리멤버</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 속도
              <div className={styles.num}>2.33초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 65.95% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 리콜렉션</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력 8.82% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 라스트 메모리</div>
            <div className={styles.skill_info}>
              ■ 버스트 스킬 사용 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 51.42% ▲] [20초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 리멤버 미</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>디코이</span>: 시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 91.68% 분신] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[주목: 적 전체 <span style={{ color: "#ff7803" }}>도발</span>] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "앵커":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 큐리어스</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : GS</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>도발</span>] [5초 유지]</span><br />
              ■ 마지막 탄환 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 23.82% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : MDS</div>
            <div className={styles.skill_info}>
              ■ 전투 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>적 발사체 공격 시 해당 발사체에 가하는 대미지</span> 25.6% ▲] [지속]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : CIWS</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 304.45% 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "미하라":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 페인풀 월드</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.67초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 15.07% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 인듀어</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 18.7% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 페인 로드</div>
            <div className={styles.skill_info}>
              ■ 버스트 스킬 사용 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[시작 횟수별 효과] [<span style={{ color: "#ff7803" }}>하위 효과 중복 적용</span>]</span><br />
              <span style={{ color: "#00aeff" }}>1회 : [페인 로드 1: 공격력 15.56% ▲] [45초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>2회 : [페인 로드 2: 크리티컬 확률 11.28% ▲] [45초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 센스 쉐어링</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[풀 버스트 타임 지속 시간 5초 ▼]</span><br />
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 399.6% 대미지]</span><br />
              ■ 자신이 페인 로드 2 상태라면 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 266.4% 추가 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "N102":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 메이플라이</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 노트 위의 기억</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 시 공격력이 가장 높은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄수 3발 ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 대미지 10.34% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 부상하는 기억</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[차지 대미지 25.84% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 파란 나비의 기억</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 25.86% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "에테르":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 새크리파이스 카니발</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 214.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 부식물질 탑재탄환</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 체력이 가장 낮은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>받는 대미지</span> 52.5% ▼] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 예후 반응 실험</div>
            <div className={styles.skill_info}>
              ■ 방어력이 가장 높은 적 3기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 56.32% 대미지]</span><br />
              ■ 풀 버스트 타임 지속 시간 중 발동 시 동일 적 대상에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 9.38% ▼] [6초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 초거대 단세포</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 체력이 가장 낮은 아군 3기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 96% <span style={{ color: "#ff7803" }}>보호막</span>] [5초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "아니스":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 리버틴 테일</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 2발 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.03초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 65.02%대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 포메이션 D.H</div>
            <div className={styles.skill_info}>
              ■ 40회 피격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 120% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 포메이션 C.H</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />30초</div>
            <div className={styles.skill_info}>
              ■ 자신과 자신을 제외한 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 80% ▲] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[피격 대미지 분배] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 핀 포인트 미사일</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 156.73% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 32% ▼] [5초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "벨로타":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 알 수 없음</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 서프라이즈</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[폭발범위 9.55%▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 그리디</div>
            <div className={styles.skill_info}>
              ■ 4기 이상을 동시에 명중시켰다면 대상에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 3.52% ▼] [5초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span>공격력 14.96% 추가 대미지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 트릭키 봄버</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span>공격력 192% 대미지]</span><br />
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[차지 속도 2.82% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "미카":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 알 수 없음</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3%  대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 맛있는 별님</div>
            <div className={styles.skill_info}>
              ■ 20회 피격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 39.18% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 용감한 별님</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 2기에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 2발 ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 19.89% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 반짝반짝 별님</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 적 전체에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 152.22% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[방어력 13.32% ▼] [5초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "네베":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 큰곰자리의 겨울</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 201.5% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 북극곰의 힘</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />10초</div>
            <div className={styles.skill_info}>
              ■ 체력이 가장 낮은 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 145.45% 대미지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 북극곰의 겨울잠</div>
            <div className={styles.skill_info}>
              ■ 풀 버스트 타임 시작 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[관통 특화] [2발 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[공격력 124.8%▲] [2발 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 북극곰의 포효</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 31.95%▲] [20초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[명중 22.04%▲] [20초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "히메노":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : 고스트 사이트</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 속도
              <div className={styles.num}>2.30초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 70.89% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 약점 공략</div>
            <div className={styles.skill_info}>
              ■ 풀 차지 공격 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 6.94% ▼] [3초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 보이지 않는 손</div>
            <div className={styles.skill_info}>
              ■ 저격소총 소지 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 10.98% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 2발 ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 고스트</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신을 제외한 공격력이 가장 높은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[차지 대미지 23.76% ▲] [10초 유지]</span><br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 16.35% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "파스칼":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 개조 총기</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.50초 / 0초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 75% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 조심해요!</div>
            <div className={styles.skill_info}>
              ■ 10회 사격 시 방어력이 가장 높은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 6.28% 회복]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 최선을 다해볼게요.</div>
            <div className={styles.skill_info}>
              ■ 버스트 1단계 돌입 시 현재 체력이 가장 낮은 아군 3기에게<br />
              <span style={{ color: "#00aeff" }}>[체력 회복량 38.4% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 다들 다치지 말아요!</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 현재 체력이 가장 낮은 아군 3기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자의 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 55.29% 회복]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "솔져 E.G.":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 헌팅 이글</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.17초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 14.01% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 이글 아이</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 명중 시 5% 확률로 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 7.92% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 이글 택틱</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />9초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 112.77% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 이글 샷</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 720% 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "솔져 F.A.":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : 클러치 팔콘</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 214.3% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 팔콘 윙</div>
            <div className={styles.skill_info}>
              ■ 피격 시 10% 확률로 자신에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 9.09%▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 팔콘 네스트</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 20.19% 회복] [8초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 팔콘 부스트</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 체력 112.5%▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "솔져 O.W.":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 : 서치 아울</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.00초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 9.36% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 오울 크로</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 시 10% 확률로 대상에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 75.6% 추가 대미지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 오울 윈드</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />10초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 3기에게<br />
              <span style={{ color: "#00aeff" }}>[재장전 속도 128.57% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 오울 페더</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 작열 코드 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 280% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "프로덕트 08":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>저격소총 : MISR-03</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>6발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 시간
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 69.04% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 전술: 장갑 보강</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 명중 시 20% 확률로 체력이 가장 낮은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 9.09% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 전술: 정밀 사격</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />17초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[크리티컬 확률 22.99% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 전술: 출력 상승</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 19.39% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "프로덕트 12":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>머신건 : MIMG-07</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>300발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.67초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 5.67% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 행동: 공격 상승</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 2회 공격 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 8.28%▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 행동: 화력 집중</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />10초</div>
            <div className={styles.skill_info}>
              ■ 체력이 가장 낮은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 109.09% 대미지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 행동: 정밀 타격</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ <span style={{ color: "#ff7803" }}>공격 범위 내 적</span>들에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 720% 대미지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "프로덕트 23":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>샷건 : MISG-09</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>9발 / 3발 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>2.03초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 231.6% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 명령: 출력 보강</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 8.1% ▲] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 명령: 응급 조치</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격 대미지 비례 16.15% 회복] [10초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 명령: 특수 탄환</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 2기에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 48.75% ▼] [5초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "iDoll 플라워":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>런처 : 댄싱 플라워</span>
            <div className={styles.weapon_skill}>최대 장탄 수 / 장전 수
              <div className={styles.num}>6발 / 전탄 장전</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간 / 차지 속도
              <div className={styles.num}>2.00초 / 1초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 61.3%대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 플라워 리프</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 대상에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 16.52%▼] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 플라워 컬러</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 39.37%▼] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 플라워 퍼퓸</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 공격력이 가장 높은 적 1기에게<br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>최종</span> 공격력 330.61% 대미지]</span><br />
              <span style={{ color: "#00aeff" }}>[<span style={{ color: "#ff7803" }}>도발</span>] [2초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "iDoll 오션":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>기관단총 :스웨이 오션</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>120발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 8.73% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 오션 샤워</div>
            <div className={styles.skill_info}>
              ■ 마지막 탄환 명중 시 체력이 가장 낮은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 4.86% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 오션 클렌징</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />15초</div>
            <div className={styles.skill_info}>
              ■ 체력이 가장 낮은 아군 1기에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 9.69% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 오션 다이브</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />20초</div>
            <div className={styles.skill_info}>
              ■ 아군 전체에게<br />
              <span style={{ color: "#00aeff" }}>[시전자 <span style={{ color: "#ff7803" }}>최종</span> 최대 체력 비례 29.7% <span style={{ color: "#ff7803" }}>회복</span>]</span><br />
            </div>
          </div>
        </div>
      );
      break;
    case "iDoll 썬":
      skillTableContent = (
        <div className={styles.skill_table}>
          <div className={styles.skill_thead}>
            스킬 정보
          </div>
          <div className={styles.weapon_info}>
            <span className={styles.weapon_name}>소총 : 샤이닝 썬</span>
            <div className={styles.weapon_skill}>최대 장탄 수
              <div className={styles.num}>60발</div>
            </div>
            <div className={styles.weapon_skill}>재장전 시간
              <div className={styles.num}>1.50초</div>
            </div>
            <div className={styles.weapon_skill}>계수
              <div className={styles.num}>공격력 14.71% 대미지</div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 1 : 썬샤인</div>
            <div className={styles.skill_info}>
              ■ 일반 공격 10회 명중 시 자신에게<br />
              <span style={{ color: "#00aeff" }}>[방어력 7.56% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶스킬 2 : 썬라이트</div>
            <div className={styles.skill_info}>
              ■ 피격 시 20% 확률로 자신에게<br />
              <span style={{ color: "#00aeff" }}>[공격력 9.09% ▲] [5초 유지]</span><br />
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill_name}>▶버스트 스킬 : 썬셋</div>
            <div className={styles.cooldown_time}><img src={cooldown} alt="cooldown" className={styles.cooldown} />40초</div>
            <div className={styles.skill_info}>
              ■ 자신에게<br />
              <span style={{ color: "#00aeff" }}>[최대 장탄 수 787.5% ▲] [10초 유지]</span><br />
            </div>
          </div>
        </div>
      );
      break;
  }
  return skillTableContent;
}

export default SkillTable;
