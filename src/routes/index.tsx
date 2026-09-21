import { createFileRoute } from '@tanstack/react-router'
import { ArrowDownRight, ArrowUpRight, BarChart3, CheckCircle2, Download, Globe2, Mail, MapPin, Megaphone, MousePointerClick, Palette, Search, Sparkles, Target } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Portfolio })

const capabilities = [
  { icon: Search, no: '01', title: 'Search & SEO', text: 'Keyword research, on-page and off-page SEO, technical foundations, and website optimization that make brands easier to find.' },
  { icon: MousePointerClick, no: '02', title: 'Paid campaigns', text: 'Google Ads and Meta Ads campaigns shaped around strong creative, smart targeting, and continuous performance optimization.' },
  { icon: Megaphone, no: '03', title: 'Social & content', text: 'Platform-ready content calendars, organic campaigns, brand awareness, lead generation, and email marketing.' },
  { icon: Globe2, no: '04', title: 'Web experiences', text: 'Responsive WordPress and Elementor sites, landing pages, contact journeys, and SEO-ready layouts built to convert.' },
  { icon: BarChart3, no: '05', title: 'Analytics', text: 'Google Analytics, Search Console, Trends, Excel, Power BI, and Tableau to turn activity into clear next steps.' },
  { icon: Palette, no: '06', title: 'Creative direction', text: 'Brand-consistent graphics, ad creatives, short-form video, banners, and brochures made with Adobe, Canva, and AI tools.' },
]

const work = [
  { tag: 'Web / Brand', title: 'Business portfolio redesign', description: 'A responsive, multi-page WordPress experience with custom layouts, clear navigation, contact forms, and a cohesive visual identity.', tools: ['WordPress', 'Elementor', 'HTML / CSS', 'Photoshop'], accent: 'coral' },
  { tag: 'Paid / Organic Social', title: 'Four-week growth campaign', description: 'An integrated Instagram and Facebook campaign spanning content planning, ad creative, audience targeting, and performance tracking.', tools: ['Meta Ads', 'Canva', 'Google Analytics'], accent: 'lime' },
  { tag: 'Events / Community', title: 'Momentum for live events', description: 'Cross-channel promotion for national-level hackathons, college fests, and community programs using social, email, posters, and video.', tools: ['Social Media', 'Email', 'Canva', 'CapCut'], accent: 'blue' },
]

function Portfolio() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Back to top">MSA<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></nav>
        <a className="nav-cta" href="mailto:asraruddeen313@gmail.com">Let’s talk <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit" aria-hidden="true"><span>SEO</span><span>ADS</span><span>WEB</span></div>
        <div className="hero-main reveal">
          <p className="eyebrow"><span className="status-dot" /> Dubai, UAE · Available immediately</p>
          <h1>Ideas that<br /><em>earn attention.</em></h1>
          <p className="hero-copy">I’m <strong>Mahammad Sayyad Asraruddeen</strong>, a digital marketer and website professional combining strategy, design, and data to help brands move forward.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">See selected work <ArrowDownRight size={18} /></a><a className="text-link" href="/assets/mahammad-asraruddeen-cv.pdf" download>Download CV <Download size={17} /></a></div>
        </div>
        <div className="portrait-wrap reveal delay-1">
          <div className="portrait-frame"><img src="/.netlify/images?url=/assets/mahammad-asraruddeen.png&w=720&fm=webp" alt="Mahammad Sayyad Asraruddeen" /></div>
          <div className="portrait-stamp"><Sparkles size={17} /><span>Strategy<br />+ craft</span></div>
        </div>
        <div className="hero-note reveal delay-2"><span>Digital Marketing Executive</span><span>Website Professional</span><span>Creative Problem Solver</span></div>
      </section>

      <section className="ticker" aria-label="Core skills"><div>WORDPRESS <i>✦</i> GOOGLE ADS <i>✦</i> SEO <i>✦</i> META ADS <i>✦</i> ANALYTICS <i>✦</i> CREATIVE DESIGN <i>✦</i></div></section>

      <section className="section capabilities" id="about">
        <div className="section-heading"><p className="kicker">What I bring</p><h2>Full-funnel thinking,<br /><em>hands-on execution.</em></h2><p>From the first search query to the final performance report, I connect every touchpoint into one clear brand experience.</p></div>
        <div className="capability-grid">{capabilities.map(({ icon: Icon, no, title, text }) => <article className="capability" key={title}><div className="capability-top"><span>{no}</span><Icon size={24} strokeWidth={1.6} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-label"><span>Selected work</span><span>2024—2026</span></div><h2>Built to be seen.<br /><em>Designed to perform.</em></h2>
        <div className="work-list">{work.map((item, index) => <article className={`work-card ${item.accent}`} key={item.title}><div className="work-index">0{index + 1}</div><div className="work-content"><p className="work-tag">{item.tag}</p><h3>{item.title}</h3><p>{item.description}</p><div className="tool-list">{item.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div><ArrowUpRight className="work-arrow" size={32} strokeWidth={1.5} /></article>)}</div>
        <div className="retail-note"><Target size={25} /><div><strong>Also in the mix</strong><p>Retail launch promotion with social posts, short-form videos, posters, and opening-day digital content.</p></div></div>
      </section>

      <section className="section experience" id="experience">
        <div className="experience-title"><p className="kicker">Experience</p><h2>Where strategy<br /><em>meets delivery.</em></h2></div>
        <div className="timeline">
          <article><div className="timeline-date">MAR 2024 — DEC 2025</div><div><p className="company">OceanX · India</p><h3>Website Designer, Graphic Designer & Digital Marketing Executive</h3><ul><li>Built and maintained responsive, SEO-ready WordPress websites.</li><li>Created brand-consistent social, print, and advertising creatives.</li><li>Managed SEO, content calendars, Google Ads, Meta Ads, and campaign reporting.</li></ul></div></article>
          <article><div className="timeline-date">APR — JUN 2025</div><div><p className="company">CDAC · Bangalore</p><h3>Machine Learning & Analytics Intern</h3><ul><li>Completed a practicum in analytics using Excel, SQL, Power BI, and Tableau.</li><li>Handled data cleaning, validation, analysis, reporting, and Agile documentation.</li></ul></div></article>
        </div>
      </section>

      <section className="proof section">
        <div className="proof-card education"><p className="kicker">Education</p><h3>Master of Computer Applications</h3><p>Yenepoya University · 2023—2025</p><hr /><h3>Bachelor of Computer Applications</h3><p>Yenepoya University · 2020—2023</p></div>
        <div className="proof-card leadership"><p className="kicker">Leadership</p><h3>Led national-level technical events from idea to execution.</h3><p>Organized YENIXA 2023 and Project Omega 2025, coordinating planning, teams, promotion, and delivery.</p></div>
        <div className="proof-card certification"><p className="kicker">Certified learning</p>{['Advanced Microsoft Power BI','Advanced Data & Analytics in Tableau','Fundamentals of Business Analysis'].map(x => <div className="cert-row" key={x}><CheckCircle2 size={18}/><span>{x}</span></div>)}</div>
      </section>

      <section className="contact"><div><p className="kicker">Have a role or project in mind?</p><h2>Let’s make it<br /><em>matter.</em></h2></div><div className="contact-side"><p>I’m currently based in Dubai and available for immediate joining.</p><a className="button button-light" href="mailto:asraruddeen313@gmail.com"><Mail size={18} /> Start a conversation</a><div className="contact-links"><a href="tel:+971502415159">+971 50 241 5159</a><a href="https://www.linkedin.com/in/asraruddeen" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a></div></div></section>
      <footer><a className="monogram" href="#top">MSA<span>.</span></a><p><MapPin size={14}/> Abu Hail, Dubai, UAE</p><p>© {new Date().getFullYear()} Mahammad Sayyad Asraruddeen</p></footer>
    </main>
  )
}
