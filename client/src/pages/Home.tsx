import { Button } from "@/components/ui/button";
import { 
  Globe, 
  CreditCard, 
  Zap,
  Database,
  Cloud,
  Code2,
  Workflow,
  TrendingUp
} from "lucide-react";

/**
 * Design Philosophy: Elegant Corporate with Earthy & Mint Palette
 * - Primary: Teal (#689B88) - Trust, professionalism, technology
 * - Accent: Mint (#82EBBA) - Fresh, modern, approachable
 * - Neutrals: Beige (#A49E8D), Brown (#504136) - Warmth, stability
 * - Background: Off-white (#FAFAF8) - Clean, sophisticated
 * 
 * Typography: Inter (modern, clean sans-serif)
 * Spacing: Generous whitespace, elegant card design
 * Interactions: Smooth transitions, subtle hover effects
 */

export default function Home() {
  const interStyle = { fontFamily: "'Inter', sans-serif" };

  const handleWhatsApp = () => {
    const phoneNumber = '5541988353340';
    const message = 'Ola! Gostaria de saber mais sobre os servicos da L&R Labs.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const services = [
    {
      icon: Globe,
      title: "Construção de Sites",
      description: "Websites modernos, responsivos e otimizados para conversão. Presença digital profissional com design único, SEO integrado e funcionalidade impecável para empresas que querem se destacar online."
    },
    {
      icon: CreditCard,
      title: "Sistemas de Pagamento",
      description: "Integração completa com gateways de pagamento (Stripe, PayPal, PagSeguro). Suporte a cartões, PIX, boletos e transferências bancárias com segurança PCI-DSS, criptografia de ponta a ponta e compliance total."
    },
    {
      icon: Code2,
      title: "Integração com API",
      description: "Conexão seamless com serviços externos. Integração com APIs REST, GraphQL, webhooks e microsserviços. Autenticação OAuth2, rate limiting, tratamento de erros e documentação completa para máxima confiabilidade."
    },
    {
      icon: Workflow,
      title: "Automação",
      description: "Automação de processos repetitivos e fluxos de trabalho. Bots inteligentes, agendamento de tarefas, processamento em background, notificações automáticas e redução de tempo operacional em até 80%."
    },
    {
      icon: TrendingUp,
      title: "Portfólios",
      description: "Showcase profissional dos seus produtos e serviços. Galerias otimizadas, catálogos digitais, apresentações impactantes, integração com redes sociais, analytics avançado e geração de leads qualificados."
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Design de bancos de dados escaláveis e performáticos. Modelagem relacional e não-relacional, otimização de queries, backup automatizado, replicação de dados, disaster recovery e conformidade com LGPD/GDPR."
    },
    {
      icon: Cloud,
      title: "Infraestrutura em Nuvem",
      description: "Deploy e hospedagem em AWS, Google Cloud e Azure. Containerização com Docker, orquestração com Kubernetes, auto-scaling, load balancing, CDN global, monitoramento 24/7 e garantia de uptime 99.9%."
    },
    {
      icon: Zap,
      title: "Otimização de Processos",
      description: "Análise e melhoria de performance e eficiência. Otimização de código, caching inteligente, compressão de assets, redução de latência, Core Web Vitals otimizados e tempo de resposta < 2 segundos."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
            L&R Labs
          </div>
          <div className="flex gap-8">
            <a href="#services" className="text-sm transition-colors hover:text-primary" style={interStyle}>
              Serviços
            </a>
            <a href="#about" className="text-sm transition-colors hover:text-primary" style={interStyle}>
              Sobre
            </a>
            <a href="/projects" className="text-sm transition-colors hover:text-primary" style={interStyle}>
              Projetos
            </a>
            <a href="#tech" className="text-sm transition-colors hover:text-primary" style={interStyle}>
              Tecnologias
            </a>
            <a href="#contact" className="text-sm transition-colors hover:text-primary" style={interStyle}>
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-24">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight text-primary lg:text-6xl" style={{ ...interStyle, fontWeight: 700 }}>
                Soluções Digitais de Excelência
              </h1>
              <p className="mt-6 text-lg text-muted-foreground" style={interStyle}>
                Transformamos demandas tecnológicas em ativos digitais estratégicos. Arquitetura moderna, performance escalável e experiência do usuário impecável.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="/start-project" className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg" style={interStyle}>
                  Começar Projeto
                </a>
                <button className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 font-bold text-primary transition-all duration-300 hover:bg-primary/5" style={interStyle}>
                  Conhecer Mais
                </button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663031343414/CyTRwRxSkIKtcBXF.jpeg"
                alt="L&R Labs Logo"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent pb-6">
                <p className="text-xl font-semibold text-white">Software Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
              Nossos Serviços
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card group">
                  <div className="service-icon bg-primary group-hover:bg-accent">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground" style={interStyle}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-secondary/10 py-24">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
                Sobre Nós
              </h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
              <p className="mt-8 text-lg text-foreground" style={interStyle}>
                Somos <span className="font-bold">Luís Eduardo Carvalho Michaud</span> e <span className="font-bold">Ronald Felipe Fernandes Carvalho</span>, dois programadores apaixonados por tecnologia e inovação.
              </p>
              <p className="mt-6 text-foreground" style={interStyle}>
                Nossa jornada começou com curiosidade genuína sobre como sistemas funcionam. Essa curiosidade evoluiu para uma paixão profunda pelo desenvolvimento de software, engenharia de aplicações web e arquitetura de soluções digitais.
              </p>
              <p className="mt-6 text-foreground" style={interStyle}>
                Atualmente no 7º período de Sistemas da Informação, unimos conhecimento acadêmico com experiência prática em projetos de média complexidade. Nosso diferencial: visão estratégica de negócio aliada à excelência técnica.
              </p>
              <p className="mt-6 text-muted-foreground" style={interStyle}>
                Este portfólio é nossa vitrine profissional — um ambiente onde apresentamos projetos, demonstramos capacidades técnicas e evidenciamos a qualidade das soluções que desenvolvemos.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/dev-michaud/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                  style={{ ...interStyle, fontWeight: 600 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Luís - LinkedIn
                </a>
                <a
                  href="https://www.linkedin.com/in/dev-ronald/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                  style={{ ...interStyle, fontWeight: 600 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Ronald - LinkedIn
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <h3 className="mb-2 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Missão</h3>
                <p className="text-sm text-muted-foreground" style={interStyle}>
                  Projetar e desenvolver soluções digitais inteligentes que potencializem a eficiência e o crescimento sustentável dos nossos clientes.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <h3 className="mb-2 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Visão</h3>
                <p className="text-sm text-muted-foreground" style={interStyle}>
                  Consolidar-nos como empresa reconhecida pela excelência técnica, confiabilidade de entrega e capacidade de transformar demandas em soluções escaláveis.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <h3 className="mb-2 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Valores</h3>
                <p className="text-sm text-muted-foreground" style={interStyle}>
                  Excelência em engenharia, compromisso com performance e segurança, transparência, evolução contínua e foco estratégico no cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-24">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
              Tecnologias & Stacks
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Frontend */}
            <div className="rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 p-6">
              <h3 className="mb-4 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Front-end</h3>
              <ul className="space-y-2 text-sm text-foreground" style={interStyle}>
                <li>• React & Vue.js</li>
                <li>• Angular</li>
                <li>• HTML, CSS, JavaScript</li>
                <li>• Tailwind CSS</li>
                <li>• TypeScript</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
              <h3 className="mb-4 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Back-end</h3>
              <ul className="space-y-2 text-sm text-foreground" style={interStyle}>
                <li>• Node.js</li>
                <li>• Python</li>
                <li>• PHP</li>
                <li>• C# (.NET)</li>
                <li>• APIs RESTful</li>
              </ul>
            </div>

            {/* Database */}
            <div className="rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 p-6">
              <h3 className="mb-4 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Data & Persistence</h3>
              <ul className="space-y-2 text-sm text-foreground" style={interStyle}>
                <li>• MongoDB</li>
                <li>• PostgreSQL</li>
                <li>• MySQL</li>
                <li>• Firebase</li>
                <li>• Redis</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="rounded-xl bg-gradient-to-br from-secondary/20 to-primary/10 p-6">
              <h3 className="mb-4 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Cloud & DevOps</h3>
              <ul className="space-y-2 text-sm text-foreground" style={interStyle}>
                <li>• AWS</li>
                <li>• Google Cloud</li>
                <li>• Docker</li>
                <li>• Git & CI/CD</li>
                <li>• Kubernetes</li>
              </ul>
            </div>
          </div>

          {/* Stacks */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["MERN", "MEVN", "MEAN", ".NET"].map((stack) => (
              <div
                key={stack}
                className="flex items-center justify-center rounded-xl border-2 border-primary bg-white py-8 font-bold text-primary transition-all hover:bg-primary hover:text-white"
                style={{ ...interStyle, fontWeight: 600 }}
              >
                {stack}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-r from-primary to-secondary py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white" style={{ ...interStyle, fontWeight: 700 }}>
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="mt-6 text-lg text-white/90" style={interStyle}>
            Vamos conversar sobre como podemos ajudar sua empresa a crescer digitalmente.
          </p>
          <a
            href="/start-project"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-bold text-primary transition-all duration-300 hover:shadow-lg"
            style={{ ...interStyle, fontWeight: 600 }}
          >
            Começar Projeto
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/5 py-24">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
              O que Nossos Clientes Dizem
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 py-16">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
              Compartilhe Sua Avaliação
            </h3>
            <p className="mb-8 max-w-md text-center text-muted-foreground" style={interStyle}>
              Sua opinião é muito importante para nós. Deixe seu comentário e ajude outros clientes a conhecer nosso trabalho.
            </p>
            <a
              href="/review"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              style={{ ...interStyle, fontWeight: 600 }}
            >
              Deixar Avaliação
            </a>
          </div>
        </div>
      </section>

      {/* Dúvidas Section */}
      <section className="border-t border-border bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
            Dúvidas?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground" style={interStyle}>
            Entre em contato conosco diretamente
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:noreplylrlabs@gmail.com"
              className="rounded-lg bg-primary px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-primary/90"
              style={interStyle}
            >
              📧 Email
            </a>
            <a
              href="https://wa.me/5541988353340"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-green-500 px-8 py-3 font-bold text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white"
              style={interStyle}
            >
              💬 WhatsApp - Luís
            </a>
            <a
              href="https://wa.me/5541987647836"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-green-500 px-8 py-3 font-bold text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white"
              style={interStyle}
            >
              💬 WhatsApp - Ronald
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-xl"
        title="Fale conosco no WhatsApp"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.519.754-2.753 1.771-3.745 3.016 1.211-1.605 2.652-2.876 4.391-3.643 1.739-.767 3.682-1.039 5.227-.544z"/>
        </svg>
      </button>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-12">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>L&R Labs</h3>
              <p className="text-sm text-muted-foreground" style={interStyle}>
                Transformando demandas tecnológicas em ativos digitais estratégicos.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground" style={interStyle}>
                <li><a href="#services" className="transition-colors hover:text-primary">Serviços</a></li>
                <li><a href="#about" className="transition-colors hover:text-primary">Sobre</a></li>
                <li><a href="#tech" className="transition-colors hover:text-primary">Tecnologias</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Contato</h4>
              <p className="text-sm text-muted-foreground" style={interStyle}>
                📧 noreplylrlabs@gmail.com<br />
                📱 +55 (41) 98835-3340 - Luís<br />
                📱 +55 (41) 98764-7836 - Ronald
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8">
            <div className="mb-6 flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/dev-michaud/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white transition-all hover:bg-primary/90 hover:shadow-lg"
                title="LinkedIn - Luís"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/dev-ronald/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white transition-all hover:bg-primary/90 hover:shadow-lg"
                title="LinkedIn - Ronald"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <p className="text-center text-sm text-muted-foreground" style={interStyle}>
              © 2026 L&R Labs. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
