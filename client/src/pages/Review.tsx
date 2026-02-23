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

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Review() {
  const interStyle = { fontFamily: "'Inter', sans-serif" };
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    comentario: '',
    rating: 5
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_df10kj6',
        'template_vw9jfpj',
        {
          nome: formData.nome,
          empresa: formData.empresa,
          comentario: formData.comentario,
          rating: formData.rating,
          email: 'review@lrlabs.com'
        },
        'VWn2dZKwjxp1UViy4'
      );

      setSubmitted(true);
      setFormData({ nome: '', empresa: '', comentario: '', rating: 5 });
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar avaliacao:', error);
      alert('Erro ao enviar avaliacao. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

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
              Servicos
            </a>
            <a href="/#about" className="text-sm transition-colors hover:text-primary" style={interStyle}>
              Sobre
            </a>
            <a href="/projects" className="text-sm transition-colors hover:text-primary" style={interStyle}>
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
            Deixe Sua Avaliação
          </h1>
          <p className="mt-4 text-lg text-muted-foreground" style={interStyle}>
            Sua opinião é muito importante para nós. Compartilhe sua experiência trabalhando com a L&R Labs.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-2xl bg-accent/10 p-12 text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <svg className="h-8 w-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <h2 className="mb-3 text-3xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
                Obrigado!
              </h2>
              <p className="mb-6 text-lg text-muted-foreground" style={interStyle}>
                Sua avaliação foi enviada com sucesso. Redirecionando para a home em alguns segundos...
              </p>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                style={{ ...interStyle, fontWeight: 600 }}
              >
                Voltar para Home
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-6">
                <label className="mb-2 block font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>
                  Nome *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  style={interStyle}
                />
              </div>

              <div className="mb-6">
                <label className="mb-2 block font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>
                  Empresa *
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  placeholder="Nome da sua empresa"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  style={interStyle}
                />
              </div>

              <div className="mb-6">
                <label className="mb-2 block font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>
                  Avaliação (Estrelas) *
                </label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  style={interStyle}
                >
                  <option value={5}>★★★★★ Excelente (5 estrelas)</option>
                  <option value={4}>★★★★☆ Muito Bom (4 estrelas)</option>
                  <option value={3}>★★★☆☆ Bom (3 estrelas)</option>
                  <option value={2}>★★☆☆☆ Regular (2 estrelas)</option>
                  <option value={1}>★☆☆☆☆ Precisa Melhorar (1 estrela)</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="mb-2 block font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>
                  Comentário *
                </label>
                <textarea
                  name="comentario"
                  value={formData.comentario}
                  onChange={handleChange}
                  required
                  placeholder="Compartilhe sua experiencia trabalhando com a L&R Labs..."
                  rows={6}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  style={interStyle}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary px-8 py-3 font-bold text-white transition-all duration-300 disabled:opacity-50 hover:bg-primary/90 hover:shadow-lg"
                style={{ ...interStyle, fontWeight: 600 }}
              >
                {loading ? 'Enviando...' : 'Enviar Avaliação'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white py-12">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>L&R Labs</h3>
              <p className="text-sm text-muted-foreground" style={interStyle}>
                Transformando demandas tecnologicas em ativos digitais estrategicos.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground" style={interStyle}>
                <li><a href="/" className="transition-colors hover:text-primary">Home</a></li>
                <li><a href="/#services" className="transition-colors hover:text-primary">Servicos</a></li>
                <li><a href="/projects" className="transition-colors hover:text-primary">Projetos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold text-primary" style={{ ...interStyle, fontWeight: 600 }}>Contato</h4>
              <p className="text-sm text-muted-foreground" style={interStyle}>
                📧 noreplylrlabs@gmail.com<br />
                📱 +55 (41) 98835-3340 - Luis<br />
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
                title="LinkedIn - Luis"
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
