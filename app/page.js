import Characontent from "./CharaContent";
import Btnfilter from "./BtnFilter";
import { do_hyeon } from "./font"

export default async function Home() {
	return (
    <main className={do_hyeon.className}>
			<div className="container">
				<div className="row">
					<div className="col">
						<Btnfilter></Btnfilter>
						<Characontent></Characontent>
					</div>
				</div>
			</div>
    </main>
	)
}