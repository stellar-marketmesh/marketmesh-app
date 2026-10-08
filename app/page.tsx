import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>MarketMesh</h1><p>Non-custodial marketplace settlement and escrow tooling.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
