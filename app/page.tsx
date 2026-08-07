"use client";
import { useState } from "react";
import "./research.css";

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

    <section className="moonshots longevity-system" id="moonshots">
      <div className="moonshot-head">
        <p className="tag">25-YEAR / Research institutions</p>
        <h2>Health is the objective.<br/><em>Longevity is the measure.</em></h2>
        <p className="moonshot-intro">Metropolitan’s research institutions are built around a simple long-horizon premise: the highest form of medicine is not increasingly expensive treatment after failure, but increasingly precise understanding before it. The flagship Institute of Health Longevity studies why healthy systems decline—and how more of that decline can be prevented, delayed, or corrected.</p>
      </div>
      <div className="longevity-feature">
        <article className="longevity-flagship"><span>FLAGSHIP INSTITUTE</span><h3>Institute of<br/>Health Longevity</h3><p>Study the mechanisms that transform healthy biology into disease, identify the pathways that drive biological aging and loss of resilience, and build interventions aimed at preserving healthy function across a longer human life.</p><em>AGING BIOLOGY · HEALTHSPAN · PREVENTION</em></article>
        <div className="longevity-statement"><span>THE PUBLIC MISSION</span><strong>Help people remain healthy<br/>before they become patients.</strong><p>Over generations, Metropolitan intends to make prevention, prediction, and biological correction the center of healthcare—not an accessory to treatment.</p></div>
      </div>
      <div className="supporting-institutes">
        <article><span>01</span><h3>Computational Oncology</h3><p>Earlier detection, tumor-state modeling, and increasingly precise intervention.</p></article>
        <article><span>02</span><h3>Brain Intelligence</h3><p>Earlier understanding of neurodegeneration, cognition, and psychiatric disease.</p></article>
        <article><span>03</span><h3>Digital Human Modeling</h3><p>Patient-specific computational models that connect biological state across time.</p></article>
        <article><span>04</span><h3>Clinical Intelligence</h3><p>Clinician-directed AI that turns multimodal evidence into accountable decisions.</p></article>
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

    <section className="frontier-research" id="research-horizon">
      <div className="frontier-head century-head">
        <p className="tag">100-YEAR / Strategic horizon</p>
        <div><h2>The next century of medicine<br/><em>begins before disease.</em></h2><p>Metropolitan is being built for a future in which a trusted health institution succeeds by keeping people well for longer—not by maximizing the cost, frequency, or complexity of treatment after disease has already taken hold.</p></div>
      </div>
      <div className="century-principles">
        <article><span>01</span><h3>Trusted by design.</h3><p>Align institutional success with healthier lives, measurable prevention, transparent evidence, and durable public trust.</p></article>
        <article><span>02</span><h3>Earlier than disease.</h3><p>Move intervention upstream—from symptoms and irreversible damage toward molecular trajectory, resilience, and prevention.</p></article>
        <article><span>03</span><h3>Solve the harmful path.</h3><p>Reduce dependence on repeated expensive treatment by understanding why biological systems fail and correcting those processes at their source.</p></article>
      </div>
      <div className="research-tracks refined-tracks">
        <article className="research-track longevity-track">
          <span>01 / HEALTH LONGEVITY</span>
          <h3>Preserve healthy function.</h3>
          <p>Aging is one of the strongest risk factors for many chronic diseases. Metropolitan’s long-term research focuses on the mechanisms that reduce biological resilience over time—and on interventions that can preserve, stabilize, or restore healthy function where science permits.</p>
          <ul><li>Cellular senescence and repair</li><li>Inflammatory and immune regulation</li><li>Epigenetic and metabolic change</li><li>Tissue resilience and regeneration</li></ul>
        </article>
        <article className="research-track infrastructure-track">
          <span>02 / UNDERLYING INFRASTRUCTURE</span>
          <h3>Model the individual.</h3>
          <p>Digital human modeling supports this work beneath the surface: a continuously updated, patient-specific computational representation integrating molecular measurements, imaging, physiology, clinical history, environment, behavior, and treatment response.</p>
          <ul><li>Longitudinal multimodal data</li><li>Mechanistic + learned biological models</li><li>Counterfactual treatment simulation</li><li>Continuous patient-specific updating</li></ul>
        </article>
      </div>
      <div className="north-star century-star">
        <span>NORTH STAR</span>
        <div><strong>A body that no longer<br/><em>turns against itself.</em></strong><p>Whether through cancerous growth, destructive immune activity, neurodegeneration, pathological inflammation, metabolic dysfunction, or age-related decline, Metropolitan’s deepest objective is to understand the transition from healthy function to harmful biology well enough to prevent it, interrupt it, or redirect it.</p></div>
      </div>
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

    <section className="manifesto">
      <div className="manifesto-head">
        <p className="tag">11 / The Metropolitan manifesto</p>
        <h2>Different companies.<br/>Independent purposes.<br/><em>A shared respect for truth.</em></h2>
        <p>Metropolitan is united by doctrine, not by forcing every company into one industry. We believe complex systems can be improved only after they are understood—and only when the intervention preserves what makes the system itself.</p>
      </div>
      <div className="articles">
        <article><span>I</span><h3>We pursue a simple, difficult goal.</h3><p>Understand why processes harm the human body, then help straighten their path with molecular fidelity, evidence, patience, and care.</p></article>
        <article><span>II</span><h3>Our companies remain their own.</h3><p>Yukora, Omega, and Eunoe are not health companies. Each has its own mission, customers, culture, community, incentives, and definition of success.</p></article>
        <article><span>III</span><h3>No company must justify itself through medicine.</h3><p>Eunoe may exist to restore a childhood game beautifully. Omega may answer a strategic question. Yukora may reveal a hidden path. Independent value is sufficient.</p></article>
        <article><span>IV</span><h3>Methods may travel. Identity does not.</h3><p>Metropolitan may learn from navigation, historical inference, constrained generation, or simulation. It may never appropriate a subsidiary’s purpose, community, or creative life.</p></article>
        <article><span>V</span><h3>Integration must not become erasure.</h3><p>We share capital, infrastructure, general principles, and selected discoveries deliberately. We preserve the distinct people and conditions from which valuable work emerges.</p></article>
        <article><span>VI</span><h3>We intervene to preserve, not dominate.</h3><p>Whether the system is a game, a historical model, a hidden grid, or a living body: preserve its truth, understand its process, and correct the path that causes harm.</p></article>
      </div>
      <div className="pledge"><span>OUR DOCTRINE</span><strong>Preserve the system.<br/>Understand the process.<br/>Correct the harmful path.</strong></div>
    </section>

    <section className="closing" id="contact"><div className="closing-cell"><i/><i/><b>M</b></div><p className="tag">Metropolitan / Long-horizon institution</p><h2>The body is complex.<br/><em>The mission is clear.</em></h2><p>Build a health institution trusted for generations because its highest measure of success is not how much disease it treats—but how much disease it helps humanity avoid.</p><a className="button red" href="mailto:mission@metropolitan.health">Join the mission ↗</a></section>
    <footer><a className="brand" href="#top"><span>M</span>METROPOLITAN</a><p>Human systems · Historical systems · Generative systems · Life systems</p><span>© 2026</span></footer>
  </main>
}
