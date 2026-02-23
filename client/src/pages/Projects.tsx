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

import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const interStyle = { fontFamily: "'Inter', sans-serif" };

  const projects = [
    {
      title: 'ContabilidadeAPI',
      description: 'Plataforma robusta de gestão contábil desenvolvida com tecnologias modernas. Sistema completo para controle de receitas, despesas, relatórios financeiros e integração com múltiplos formatos de dados.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'REST API', 'JWT Auth'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      github: 'https://github.com/zzRonald/ContabilidadeAPI',
      live: '#',
      status: 'Em Desenvolvimento',
      features: [
        'Dashboard analítico em tempo real',
        'Geração de relatórios financeiros',
        'Autenticação segura com JWT',
        'API RESTful escalável',
        'Integração com múltiplos bancos de dados'
      ]
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
            <a href="/" className="text-sm transition-colors hover:text-primary" style={interStyle}>
              Home
            </a>
            <a href="/#services" className="text-sm transition-colors hover:text-primary" style={interStyle}>
              Serviços
            </a>
            <a href="/#about" className="text-sm transition-colors hover:text-primary" style={interStyle}>
              Sobre
            </a>
            <a href="/projects" className="text-sm font-semibold text-primary transition-colors" style={interStyle}>
              Projetos
            </a>
            <a href="/#contact" className="text-sm transition-colors hover:text-primary" style={interStyle}>
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
            Nossos Projetos
          </h1>
          <p className="mt-4 text-lg text-muted-foreground" style={interStyle}>
            Conheça os trabalhos que desenvolvemos com excelência técnica e atenção aos detalhes
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Project Image */}
                  <div className="relative h-96 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 md:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-between p-8">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-3xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
                          {project.title}
                        </h3>
                        <span className="inline-flex items-center rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-primary">
                          {project.status}
                        </span>
                      </div>
                      <p className="mb-6 text-lg text-muted-foreground" style={interStyle}>
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="mb-3 font-bold text-primary" style={interStyle}>Principais Funcionalidades:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-muted-foreground" style={interStyle}>
                              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="mb-3 font-bold text-primary" style={interStyle}>Tecnologias:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                        style={interStyle}
                      >
                        <Github className="h-5 w-5" />
                        GitHub
                      </a>
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                          style={interStyle}
                        >
                          <ExternalLink className="h-5 w-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-24 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 p-12 text-center">
            <h3 className="text-2xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
              Mais Projetos em Breve
            </h3>
            <p className="mt-4 text-lg text-muted-foreground" style={interStyle}>
              Estamos trabalhando em novos projetos inovadores. Acompanhe nossas redes sociais para atualizações!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white" style={{ ...interStyle, fontWeight: 700 }}>
            Tem um Projeto em Mente?
          </h2>
          <p className="mt-6 text-lg text-white/90" style={interStyle}>
            Vamos transformar sua ideia em realidade. Entre em contato conosco!
          </p>
          <a
            href="/#contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-bold text-primary transition-all duration-300 hover:shadow-lg"
            style={{ ...interStyle, fontWeight: 600 }}
          >
            Começar Projeto
          </a>
        </div>
      </section>

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
                <li><a href="/" className="transition-colors hover:text-primary">Home</a></li>
                <li><a href="/#services" className="transition-colors hover:text-primary">Serviços</a></li>
                <li><a href="/projects" className="transition-colors hover:text-primary">Projetos</a></li>
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
