import { do_hyeon } from "./font"
import Characontent from "./CharaContent";
import Btnfilter from "./BtnFilter";
import SearchBar from "./SearchBar";

export default async function Home() {
	return (
    <main className={do_hyeon.className}>
			<div className="container">
				<div className="row">
					<div className="col">
						<Btnfilter></Btnfilter>
						<SearchBar></SearchBar>
						<Characontent></Characontent>
					</div>
				</div>
			</div>
    </main>
	)
}