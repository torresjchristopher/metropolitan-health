"use client";
import { useState } from "react";

const years = [
  ["2026–28","Foundation","Acquire diagnostic, molecular-data, and clinical research platforms."],
  ["2028–31","Integration","Unify talent, evidence, models, and therapeutic development systems."],
  ["2031–34","Prediction","Move from observing disease to forecasting molecular state transitions."],
  ["2034–36","Intervention","Translate prediction into earlier, more precise biological action."],
];

export default function Home(){
  const [active,setActive]=useState(0);
  const [open,setOpen]=useState(false);
  return <main>
    <nav><a className="brand" href="#top"><span>M</span>METROPOLITAN</a><button className="menu" onClick={()=>setOpen(!open)}><i/><i/></button><div className={open?"links open":"links"}><a href="#mission">Mission</a><a href="#strategy">Strategy</a><a href="#companies">Companies</a><a className="navcta" href="#contact">Enter the mission ↗</a></div></nav>
    <section className="hero" id="top">
      <div className="grid"/><div className="cell"><i/><i/><i/><i/><b>M</b></div>
      <p className="kicker"><span/> Metropolitan / Life systems · 2026—2036</p>
      <h1>Build what medicine<br/>has been waiting for.</h1>
      <p className="lead">Metropolitan acquires exceptional medical companies and talent to develop predictive technologies capable of understanding—and ultimately solving—the body’s longest-standing diseases at the molecular level.</p>
      <div className="actions"><a className="button red" href="#mission">Explore the mission ↓</a><a className="button" href="#strategy">View the decade ↗</a></div>
      <div className="hero-foot"><span>ACQUIRE</span><i/><span>INTEGRATE</span><i/><span>PREDICT</span><i/><span>SOLVE</span></div>
    </section>

    <section className="mandate" id="mission"><p className="tag">01 / The mandate</p><div><h2>Humanity has treated symptoms for millennia.<br/><em>It is time to understand causes.</em></h2><p>From chronic inflammation and neurodegeneration to cancer, autoimmune disease, metabolic dysfunction, and harmful cellular behavior, the body still presents questions older than modern science. Metropolitan exists to assemble the people, data, tools, and companies required to answer them.</p></div></section>

    <section className="problem">
      <div className="problem-head"><p className="tag">02 / The unfinished work</p><h2>The oldest problems<br/>demand a new system.</h2></div>
      <div className="problem-grid">
        <article><span>01</span><h3>Fragmented evidence</h3><p>Critical biological knowledge remains separated across institutions, specialties, formats, and generations.</p></article>
        <article><span>02</span><h3>Late detection</h3><p>Medicine often recognizes harmful processes only after molecular change becomes physical damage.</p></article>
        <article><span>03</span><h3>Isolated talent</h3><p>World-class researchers and clinicians lack a shared operating system for compounding discovery.</p></article>
        <article><span>04</span><h3>Reactive care</h3><p>Systems are optimized to respond to disease, not forecast and interrupt its earliest trajectories.</p></article>
      </div>
    </section>

    <section className="thesis">
      <div className="thesis-copy"><p className="tag">03 / Investment thesis</p><h2>Acquire the capabilities.<br/>Unify the intelligence.</h2><p>Over ten years, Metropolitan will selectively acquire medical companies whose technology, evidence, talent, or access closes a critical gap in the path from molecular observation to predictive intervention.</p></div>
      <div className="targets">
        {["Molecular diagnostics","Longitudinal health data","AI-native drug discovery","Precision therapeutics","Clinical research networks","Computational biology","Medical imaging","Specialist talent platforms"].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b><em>ACQUISITION TERRITORY</em></div>)}
      </div>
    </section>

    <section className="decade" id="strategy">
      <div className="decade-head"><p className="tag">04 / The ten-year horizon</p><h2>A decade designed<br/>to compound.</h2></div>
      <div className="year-tabs">{years.map((y,i)=><button key={y[0]} className={active===i?"active":""} onClick={()=>setActive(i)}><span>{y[0]}</span><b>{y[1]}</b></button>)}</div>
      <div className="year-detail"><span>0{active+1}</span><div><p>{years[active][0]}</p><h3>{years[active][1]}</h3><p>{years[active][2]}</p></div><div className="progress"><i style={{width:`${25*(active+1)}%`}}/></div></div>
    </section>

    <section className="engine">
      <div className="engine-copy"><p className="tag">05 / Predictive medicine engine</p><h2>From molecular signal<br/>to strategic action.</h2><p>Metropolitan’s operating model connects historical evidence, biological measurement, simulation, and clinical judgment—creating a continuous system that learns across companies and diseases.</p></div>
      <div className="engine-loop">
        <div><span>01</span><b>Observe</b><p>Molecular, clinical, behavioral, environmental data</p></div><i>→</i>
        <div><span>02</span><b>Model</b><p>Mechanisms, trajectories, interactions, risk</p></div><i>→</i>
        <div><span>03</span><b>Predict</b><p>Transitions before irreversible damage</p></div><i>→</i>
        <div><span>04</span><b>Intervene</b><p>Precise action at the earliest viable moment</p></div>
      </div>
    </section>

    <section className="companies" id="companies">
      <div className="companies-head"><p className="tag">06 / The Metropolitan system</p><h2>Four companies.<br/>One compounding mission.</h2><p>Each Metropolitan company solves a different layer of the same problem: how to preserve truth, understand complexity, simulate possibility, and turn intelligence into better outcomes.</p></div>
      <div className="company-grid">
        <article className="yukora"><div><span>01</span><b>Y</b></div><h3>Yukora</h3><p>The human and creative intelligence layer—shaping how ideas, systems, and experiences are designed around people.</p><em>HUMAN SYSTEMS</em></article>
        <article className="omega"><div><span>02</span><b>Ω</b></div><h3>Omega</h3><p>The historical intelligence layer—finding patterns across recorded history to improve prediction and strategy.</p><em>HISTORICAL SYSTEMS</em></article>
        <article className="eunoe"><div><span>03</span><b>E</b></div><h3>Eunoe</h3><p>A joyful future for games—restoring the worlds people loved as children and creating endless new adventures without losing the characters, physics, or mechanics that made them matter.</p><em>PLAY · PRESERVATION · GENERATION</em></article>
        <article className="metro"><div><span>04</span><b>M</b></div><h3>Metropolitan</h3><p>The integration layer—acquiring medical capability and directing the combined system toward human disease.</p><em>LIFE SYSTEMS</em></article>
      </div>
    </section>

    <section className="immutable">
      <p className="tag">07 / A shared philosophy</p>
      <div className="immutable-title"><h2>Preserve what is true.<br/><em>Correct what causes harm.</em></h2><p>Eunoe makes this principle visible in its lightest form: a childhood game can feel magically new—restored graphics, richer worlds, endless stories—while its essential identity remains untouched. The same idea becomes consequential in medicine.</p></div>
      <div className="immutable-grid">
        <div><span>IN PLAY</span><h3>The game remains itself.</h3><p>Characters, physics, and the mechanics of mastery provide the stable truth. Generative systems expand expression around them.</p></div>
        <i>↔</i>
        <div><span>IN LIFE</span><h3>The body remains itself.</h3><p>Molecular understanding should help a biological process return to a non-harmful path—not replace the integrity of the living system.</p></div>
      </div>
      <blockquote>Understand the process faithfully enough to straighten its path without corrupting the system itself.</blockquote>
    </section>

    <section className="convergence">
      <p className="tag">08 / Convergence</p><h2>History teaches.<br/>Simulation tests.<br/>Human judgment directs.<br/><em>Medicine advances.</em></h2>
      <div className="converge-map"><div>YUKORA<span>Human context</span></div><i>×</i><div>OMEGA<span>Historical pattern</span></div><i>×</i><div>EUNOE<span>Generative simulation</span></div><i>=</i><div>METROPOLITAN<span>Predictive medicine</span></div></div>
    </section>

    <section className="talent">
      <div><p className="tag">09 / Talent mandate</p><h2>Companies provide capability.<br/>People create breakthroughs.</h2></div>
      <div className="talent-list">
        {["Molecular biologists","Physician-scientists","Computational chemists","Machine-learning researchers","Clinical operators","Systems engineers"].map((x,i)=><div key={x}><span>0{i+1}</span><h3>{x}</h3><p>Integrated into multidisciplinary teams with long horizons, shared infrastructure, and direct paths from discovery to application.</p></div>)}
      </div>
    </section>

    <section className="principles"><p className="tag">10 / Operating principles</p>
      <div><span>01</span><h3>Mission before momentum.</h3><p>Acquire only what materially advances the path toward predictive, molecular medicine.</p></div>
      <div><span>02</span><h3>Evidence before certainty.</h3><p>Preserve provenance, uncertainty, competing explanations, and clinical accountability.</p></div>
      <div><span>03</span><h3>Integration without erasure.</h3><p>Protect the identity and expertise of acquired teams while connecting their capabilities.</p></div>
      <div><span>04</span><h3>Decades, not quarters.</h3><p>Build for the timescale of biology, trust, scientific proof, and durable human benefit.</p></div>
    </section>

    <section className="closing" id="contact"><div className="closing-cell"><i/><i/><b>M</b></div><p className="tag">Metropolitan / 2026—2036</p><h2>The body is complex.<br/><em>The mission is clear.</em></h2><p>We are building the company capable of pursuing medicine’s oldest questions with the intelligence, patience, and scale they deserve.</p><a className="button red" href="mailto:mission@metropolitan.health">Join the mission ↗</a></section>
    <footer><a className="brand" href="#top"><span>M</span>METROPOLITAN</a><p>Human systems · Historical systems · Generative systems · Life systems</p><span>© 2026</span></footer>
  </main>
}
