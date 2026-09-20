import { useState } from "react";
import {
  ArrowUpLeft,
  BriefcaseBusiness,
  ChevronDown,
  CircleCheck,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Quote,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const skills = [
  { label: "Java / C#", tone: "violet" },
  { label: "Oracle & PL/SQL", tone: "gold" },
  { label: "Linux / HP-UX", tone: "cyan" },
  { label: "Shell & AWK", tone: "violet" },
  { label: "Web Technologies", tone: "gold" },
  { label: "Telecom Systems", tone: "cyan" },
];

const aiWorks = [
  {
    number: "01",
    title: "حلاقة مولدة بالذكاء الاصطناعي",
    english: "AI Visual Scene",
    description: "مشهد بصري مولد بالذكاء الاصطناعي يختبر الإضاءة، التكوين، والشخصيات في لقطة واحدة.",
    tags: ["Generative Image", "Art Direction"],
    image: "/manus-storage/barber-ai_a9f329e9.jpeg",
    accent: "violet",
    source: "https://github.com/asmamohfar-hash/AsmaFinalWebsite",
  },
  {
    number: "02",
    title: "ورقة تصميم شخصية",
    english: "Character Design Sheet",
    description: "استكشاف هوية شخصية مرئية من خلال زوايا وتفاصيل متعددة، مع الحفاظ على اتساق الشكل.",
    tags: ["Character Design", "Consistency"],
    image: "/manus-storage/character-design_887dcb0c.jpeg",
    accent: "coral",
    source: "https://github.com/asmamohfar-hash/AsmaFinalWebsite",
  },
  {
    number: "03",
    title: "بطاقة تعلم الكهرباء",
    english: "Learning Card",
    description: "تبسيط مفهوم تعليمي إلى بطاقة بصرية واضحة تجمع بين المعلومة، الرسم، وسهولة التذكر.",
    tags: ["Visual Learning", "Infographic"],
    image: "/manus-storage/electricity-card_4d55ac17.jpg",
    accent: "cyan",
    source: "https://github.com/asmamohfar-hash/AsmaFinalWebsite",
  },
  {
    number: "04",
    title: "حملة صندوق التوصيل الذكي",
    english: "Smart Delivery Concept",
    description: "تصور إعلاني لمنتج ذكي يترجم الفكرة التقنية إلى صورة تسويقية جذابة وقابلة للمشاركة.",
    tags: ["Product Concept", "Marketing Visual"],
    image: "/manus-storage/smart-delivery_768200d6.jpg",
    accent: "violet",
    source: "https://github.com/asmamohfar-hash/AsmaFinalWebsite",
  },
  {
    number: "05",
    title: "أغنية لأطفالي الثلاثة",
    english: "AI Music Video",
    description: "عمل إبداعي يجمع بين الموسيقى والصورة المتحركة لصناعة تجربة شخصية دافئة بالذكاء الاصطناعي.",
    tags: ["AI Video", "Creative Storytelling"],
    image: "/manus-storage/Asongformy3littlechildrens_595eddad.mp4",
    accent: "coral",
    video: true,
  },
];

const journey = [
  {
    period: "2010 — 2015",
    role: "Technical Consultant / IT & Telecommunications",
    company: "HP Middle East — Jordan",
    description:
      "عملت ضمن Communication & Media Solutions في Enterprise Services، مع التركيز على تهيئة خدمات الهاتف المحمول، التطوير، الاختبار والدعم التقني.",
    icon: BriefcaseBusiness,
  },
  {
    period: "2005 — 2010",
    role: "بكالوريوس هندسة الحاسوب",
    company: "Jordan University of Science and Technology",
    description:
      "مشروعات أكاديمية في قواعد البيانات، C#، Linux/C، هندسة البرمجيات والذكاء الاصطناعي، مع مشروع تخرج حول بث الفيديو عبر شبكة حساسات لاسلكية.",
    icon: GraduationCap,
  },
];

const certifications = [
  "ITIL V3 Foundation",
  "Oracle Database Administrator",
  "Quality Assurance — Testing",
  "PMP Course — PMIJO Academy",
  "Photoshop, Illustrator & InDesign",
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <div className="topbar-inner">
          <button className="brand" onClick={() => goTo("top")} aria-label="العودة إلى البداية">
            <span className="brand-mark">A<span>.</span></span>
            <span className="brand-copy">
              <strong>ASMA AL-FAR</strong>
              <small>AI × TECHNOLOGY</small>
            </span>
          </button>
          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="التنقل الرئيسي">
            <button onClick={() => goTo("about")}>نبذة</button>
            <button onClick={() => goTo("work")}>أعمال الذكاء الاصطناعي</button>
            <button onClick={() => goTo("journey")}>المسيرة</button>
            <button onClick={() => goTo("contact")} className="nav-cta">تواصلي معي <ArrowUpLeft size={15} /></button>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="فتح القائمة">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true">
          <div className="hero-art-image" />
          <div className="hero-art-overlay" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-dot" /> مهندسة حاسوب · مستكشفة الذكاء الاصطناعي</div>
            <h1>
              أصنع <em>المعنى</em>
              <br />
              بين الإنسان
              <br />
              <span>والتقنية.</span>
            </h1>
            <p className="hero-intro">
              أنا أسما الفار — مهندسة حاسوب بخبرة خمس سنوات في تكنولوجيا المعلومات والاتصالات، أتعلم باستمرار وأحوّل الأدوات الذكية إلى أفكار ذات أثر.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => goTo("work")}>شاهدي أعمالي <ArrowUpLeft size={18} /></button>
              <button className="button button-ghost" onClick={() => goTo("contact")}>لنتحدث <Mail size={17} /></button>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Irbid, Jordan</span>
              <span className="meta-divider" />
              <span><Globe2 size={15} /> Arabic · English</span>
            </div>
          </div>
          <div className="hero-side reveal reveal-delay">
            <div className="signal-card glass-card">
              <div className="signal-top"><span>PROFILE / 01</span><span className="live-dot"><i /> AVAILABLE</span></div>
              <div className="monogram">A<span>.</span></div>
              <div className="signal-bottom">
                <div><small>FOCUS</small><strong>Human-centered AI</strong></div>
                <div><small>BASE</small><strong>JO / 32.5556° N</strong></div>
              </div>
            </div>
            <div className="floating-note note-one"><Sparkles size={16} /><span>Curious by nature</span></div>
            <div className="floating-note note-two"><Zap size={16} /><span>Systems thinker</span></div>
          </div>
        </div>
        <div className="scroll-cue"><span>اكتشفي الرحلة</span><ChevronDown size={16} /></div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="container intro-grid">
          <div className="section-kicker"><span>01</span><div /><span>ABOUT / نبذة</span></div>
          <div className="intro-statement">
            <p className="large-statement">الخبرة التقنية لا تكتمل إلا عندما تتحول إلى <span>وضوح.</span></p>
            <p className="body-copy">من أنظمة الاتصالات المعقدة إلى أدوات الذكاء الاصطناعي الجديدة، أحب تفكيك المشكلات، فهم الصورة الكبيرة، ثم بناء حل يبدو بسيطًا ومقصودًا.</p>
            <div className="quote-line"><Quote size={19} /><span>Strong systems. Clear thinking. Human outcomes.</span></div>
          </div>
          <div className="stat-stack">
            <div className="stat-item"><strong>05</strong><span>سنوات في<br />IT & Telecom</span></div>
            <div className="stat-item"><strong>∞</strong><span>فضول<br />لا ينتهي</span></div>
            <div className="stat-item"><strong>02</strong><span>لغات<br />باحتراف</span></div>
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker"><span>02</span><div /><span>AI EXPLORATIONS / استكشافات</span></div>
              <h2>أعمال صنعتها<br /><em>بفضول.</em></h2>
            </div>
            <p className="heading-aside">نماذج من مخرجات دورة الذكاء الاصطناعي — تجارب تجمع بين التفكير المنهجي، الحس البصري، والقدرة على تحويل الفكرة إلى نتيجة.</p>
          </div>
          <div className="work-grid">
            {aiWorks.map((work) => (
              <article className={`work-card work-${work.accent} ${work.video ? "work-video" : ""}`} key={work.number}>
                <div className="work-image-wrap">
                  {work.video ? (
                    <video className="work-image" src={work.image} controls preload="metadata" aria-label={work.title} />
                  ) : (
                    <img src={work.image} alt="" className="work-image" />
                  )}
                  <div className="work-image-shade" />
                  <span className="work-number">{work.number}</span>
                  <span className="work-arrow"><ExternalLink size={16} /></span>
                </div>
                <div className="work-card-body">
                  <span className="work-english">{work.english}</span>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="tag-row">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  {work.source && <a className="work-source" href={work.source} target="_blank" rel="noreferrer"><Github size={13} /> المصدر على GitHub <ArrowUpLeft size={13} /></a>}
                </div>
              </article>
            ))}
          </div>
          <div className="work-footer"><span className="line" /><span>كل تجربة هي بداية لسؤال جديد</span><Sparkles size={16} /></div>
        </div>
      </section>

      <section className="journey-section section-pad" id="journey">
        <div className="container journey-grid">
          <div className="journey-aside">
            <div className="section-kicker"><span>03</span><div /><span>THE JOURNEY / المسيرة</span></div>
            <h2>من الأنظمة<br />إلى <em>الأفكار.</em></h2>
            <p>مسار مهني يجمع بين الدقة الهندسية، العمل مع فرق متعددة، والرغبة الدائمة في تعلم شيء جديد.</p>
            <div className="skill-cloud">{skills.map((skill) => <span className={`skill-pill ${skill.tone}`} key={skill.label}>{skill.label}</span>)}</div>
          </div>
          <div className="timeline">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return <div className="timeline-item" key={item.period}>
                <div className="timeline-marker"><Icon size={16} /></div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                  {index === 0 && <div className="timeline-chips"><span>IUM v4.5 → v8</span><span>Oracle 10g / 11g</span><span>Java</span></div>}
                </div>
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="credentials-section section-pad">
        <div className="container credentials-grid">
          <div>
            <div className="section-kicker"><span>04</span><div /><span>DETAILS / التفاصيل</span></div>
            <h2>تعلم مستمر،<br /><em>بأساس متين.</em></h2>
          </div>
          <div className="credentials-list">
            <div className="credential-block"><div className="credential-title"><CircleCheck size={16} /> Certifications</div><div className="cert-grid">{certifications.map((cert) => <span key={cert}>{cert}</span>)}</div></div>
            <div className="credential-block"><div className="credential-title"><Network size={16} /> Languages</div><div className="language-row"><span>العربية</span><strong>Native</strong><span>English</span><strong>Excellent</strong></div></div>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="container contact-panel">
          <div className="contact-copy"><div className="section-kicker"><span>05</span><div /><span>LET'S CONNECT / تواصل</span></div><h2>فكرة تستحق<br /><em>أن تُروى؟</em></h2><p>يسعدني أن أتعرف على مشاريع جديدة، فرص تعاون، أو ببساطة أن أشاركك حديثًا عن التقنية والذكاء الاصطناعي.</p></div>
          <div className="contact-actions">
            <a className="contact-link" href="mailto:alfarasma@gmail.com"><span className="contact-icon"><Mail size={19} /></span><span><small>EMAIL</small><strong>alfarasma@gmail.com</strong></span><ArrowUpLeft size={18} /></a>
            <a className="contact-link" href="tel:+962779959148"><span className="contact-icon"><Phone size={19} /></span><span><small>PHONE</small><strong dir="ltr">+962 7 7995 9148</strong></span><ArrowUpLeft size={18} /></a>
            <div className="contact-socials"><a href="mailto:alfarasma@gmail.com" aria-label="Email"><Mail size={18} /></a><a href="https://github.com/asmamohfar-hash/asma-alfar-portfolio" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a></div>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="container footer-inner"><span>© 2026 ASMA AL-FAR</span><span>BUILT WITH CURIOSITY <Sparkles size={13} /></span><span>IRBID · JORDAN</span></div></footer>
    </main>
  );
}
