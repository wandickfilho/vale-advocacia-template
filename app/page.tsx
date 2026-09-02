import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, Clock3, HeartHandshake, Landmark, MapPin, Menu, MessageCircle, Phone, Scale, ShieldCheck } from "lucide-react";

const whatsapp = "https://wa.me/5583999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";
const areas = [
  { icon: HeartHandshake, title: "Direito de Família", text: "Divórcio, guarda, pensão alimentícia, inventário e soluções familiares conduzidas com discrição." },
  { icon: BriefcaseBusiness, title: "Direito Trabalhista", text: "Orientação preventiva e atuação estratégica para trabalhadores e empresas." },
  { icon: Building2, title: "Direito Empresarial", text: "Suporte jurídico para contratos, sociedades e decisões seguras no seu negócio." },
  { icon: Landmark, title: "Direito Previdenciário", text: "Aposentadorias, benefícios e revisão previdenciária com análise cuidadosa do seu caso." },
];

export default function Home() {
  return <main>
    <header className="header"><div className="shell nav">
      <a className="brand" href="#inicio"><span className="brand-mark"><Scale size={25}/></span><span><strong>ALMEIDA &amp; RAMOS</strong><small>ADVOCACIA</small></span></a>
      <nav><a href="#inicio">Início</a><a href="#escritorio">O escritório</a><a href="#atuacao">Atuação</a><a href="#contato">Contato</a></nav>
      <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Fale conosco</a><Menu className="mobile-menu"/>
    </div></header>

    <section id="inicio" className="hero"><div className="shell hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span/> ADVOCACIA ESTRATÉGICA E HUMANIZADA</p><h1>Segurança jurídica para as decisões que <em>movem a sua vida.</em></h1><p className="lead">Atuação ética, próxima e transparente. Cuidamos de cada caso com a dedicação e a estratégia que ele merece.</p>
        <div className="hero-actions"><a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">Agende uma conversa <ArrowRight size={18}/></a><a className="text-link" href="#atuacao">Conheça nossa atuação <ArrowRight size={16}/></a></div>
        <div className="hero-proof"><div><strong>12+</strong><span>anos de experiência</span></div><div><strong>500+</strong><span>casos acompanhados</span></div><div><strong>100%</strong><span>atendimento próximo</span></div></div>
      </div><div className="hero-visual"><div className="law-card"><Scale size={104}/><span>ÉTICA • ESTRATÉGIA • CONFIANÇA</span></div><div className="floating-note"><ShieldCheck size={28}/><div><strong>Atuação responsável</strong><span>Clareza em todas as etapas</span></div></div></div>
    </div></section>

    <section id="escritorio" className="about section"><div className="shell about-grid">
      <div className="about-art"><div className="initials">A<span>&amp;</span>R</div><div className="experience"><strong>12</strong><span>anos de<br/>experiência</span></div></div>
      <div className="about-copy"><p className="eyebrow dark"><span/> SOBRE O ESCRITÓRIO</p><h2>Conhecimento jurídico com um olhar <em>humano.</em></h2><p>O Almeida &amp; Ramos nasceu para oferecer uma advocacia diferente: técnica, acessível e verdadeiramente próxima de quem precisa.</p><p>Acreditamos que cada pessoa merece entender seus direitos e participar de todas as decisões. Por isso, traduzimos o juridiquês e construímos caminhos juntos.</p><div className="values"><div><CheckCircle2/><span><strong>Transparência</strong> em cada etapa</span></div><div><CheckCircle2/><span><strong>Estratégia</strong> personalizada</span></div><div><CheckCircle2/><span><strong>Atendimento</strong> direto e próximo</span></div></div></div>
    </div></section>

    <section id="atuacao" className="practice section"><div className="shell"><div className="section-head"><div><p className="eyebrow dark"><span/> ÁREAS DE ATUAÇÃO</p><h2>Experiência para cuidar do que <em>importa.</em></h2></div><p>Assessoria jurídica completa, com soluções construídas para a realidade de cada cliente.</p></div><div className="cards">{areas.map(({icon: Icon,title,text},i)=><article key={title}><span className="card-number">0{i+1}</span><Icon className="card-icon"/><h3>{title}</h3><p>{text}</p><a href={whatsapp} target="_blank" rel="noreferrer">Falar sobre meu caso <ArrowRight size={15}/></a></article>)}</div></div></section>

    <section className="why section"><div className="shell why-grid"><div><p className="eyebrow"><span/> NOSSO COMPROMISSO</p><h2>Você não precisa enfrentar isso <em>sozinho.</em></h2><p>Do primeiro contato à conclusão do seu caso, você terá informação clara, acompanhamento e uma equipe realmente comprometida.</p><a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">Converse com nossa equipe <MessageCircle size={18}/></a></div><div className="why-list"><div><ShieldCheck/><span><strong>Confidencialidade</strong><small>Suas informações tratadas com total sigilo.</small></span></div><div><Clock3/><span><strong>Agilidade e retorno</strong><small>Comunicação clara sobre o andamento do caso.</small></span></div><div><Scale/><span><strong>Conduta ética</strong><small>Atuação responsável e alinhada aos seus direitos.</small></span></div></div></div></section>

    <section id="contato" className="contact section"><div className="shell contact-box"><div><p className="eyebrow dark"><span/> VAMOS CONVERSAR?</p><h2>O primeiro passo pode ser <em>mais simples.</em></h2><p>Conte brevemente o que está acontecendo. Nossa equipe retornará para orientar os próximos passos.</p></div><div className="contact-actions"><a className="button dark-btn" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20}/> Chamar no WhatsApp</a><span><Phone size={17}/> (83) 99999-9999</span><span><MapPin size={17}/> Patos e Sousa — PB</span></div></div></section>
    <footer><div className="shell footer-grid"><div className="brand"><span className="brand-mark"><Scale size={25}/></span><span><strong>ALMEIDA &amp; RAMOS</strong><small>ADVOCACIA</small></span></div><p>Atendimento presencial e online em todo o Brasil.</p><p>© 2026 Almeida &amp; Ramos. Todos os direitos reservados.<br/><small>Site demonstrativo desenvolvido por <strong>Vale Code</strong>.</small></p></div></footer>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={26}/></a>
  </main>;
}
