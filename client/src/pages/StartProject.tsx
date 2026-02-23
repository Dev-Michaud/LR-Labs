import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('VWn2dZKwjxp1UViy4');

const interStyle = {
  fontFamily: 'Inter, sans-serif',
};

export default function StartProject() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    budget: '',
    timeline: '',
    projectDescription: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Construção de Sites',
    'Sistemas de Pagamento',
    'Integração com API',
    'Automação',
    'Portfólios',
    'Banco de Dados',
    'Infraestrutura em Nuvem',
    'Otimização de Processos',
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_df10kj6',
        'template_vw9jfpj',
        {
          nome: formData.name,
          email: formData.email,
          empresa: formData.company,
          telefone: formData.phone,
          cidade: formData.city,
          servico: formData.service,
          orcamento: formData.budget,
          prazo: formData.timeline,
          descricao_projeto: formData.projectDescription,
          informacoes_adicionais: formData.additionalInfo,
        }
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        city: '',
        service: '',
        budget: '',
        timeline: '',
        projectDescription: '',
        additionalInfo: '',
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error: any) {
      console.error('Email send failed:', error);
      console.error('Error details:', error?.response || error?.message || JSON.stringify(error));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
            L&R Labs
          </a>
          <div className="flex gap-8">
            <a href="/" className="text-foreground transition-colors hover:text-primary" style={interStyle}>
              Home
            </a>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-accent/30 to-background py-20">
        <div className="container mx-auto">
          <a href="/" className="mb-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80" style={interStyle}>
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </a>
          <h1 className="text-5xl font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
            Vamos Começar Seu Projeto
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground" style={interStyle}>
            Preencha o formulário abaixo com as informações do seu projeto. Entraremos em contato em breve para discutir detalhes e apresentar uma proposta personalizada.
          </p>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
            {submitStatus === 'success' && (
              <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800" style={interStyle}>
                ✓ Projeto enviado com sucesso! Entraremos em contato em breve.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800" style={interStyle}>
                ✗ Erro ao enviar o projeto. Tente novamente.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Company */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-primary" style={interStyle}>
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={interStyle}
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-primary" style={interStyle}>
                    Empresa / Negócio *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Nome da sua empresa"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={interStyle}
                  />
                </div>
              </div>

              {/* Row 2: Email and Phone */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-primary" style={interStyle}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={interStyle}
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-primary" style={interStyle}>
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(XX) XXXXX-XXXX"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={interStyle}
                  />
                </div>
              </div>

              {/* Row 3: City and Service */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-primary" style={interStyle}>
                    Cidade *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Sua cidade"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={interStyle}
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-primary" style={interStyle}>
                    Serviço Desejado *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={interStyle}
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Budget and Timeline */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-primary" style={interStyle}>
                    Orçamento Estimado
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={interStyle}
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="ate-5k">Até R$ 5.000</option>
                    <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                    <option value="10k-20k">R$ 10.000 - R$ 20.000</option>
                    <option value="20k-50k">R$ 20.000 - R$ 50.000</option>
                    <option value="acima-50k">Acima de R$ 50.000</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-primary" style={interStyle}>
                    Prazo Desejado
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={interStyle}
                  >
                    <option value="">Selecione um prazo</option>
                    <option value="urgente">Urgente (até 2 semanas)</option>
                    <option value="1-mes">1 mês</option>
                    <option value="2-3-meses">2-3 meses</option>
                    <option value="3-6-meses">3-6 meses</option>
                    <option value="aberto">Prazo aberto</option>
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="mb-2 block font-semibold text-primary" style={interStyle}>
                  Descrição do Projeto *
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  placeholder="Descreva seu projeto, objetivos, funcionalidades desejadas e qualquer outra informação relevante..."
                  rows={5}
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  style={interStyle}
                />
              </div>

              {/* Additional Info */}
              <div>
                <label className="mb-2 block font-semibold text-primary" style={interStyle}>
                  Informações Adicionais
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Referências, links, documentos ou qualquer outra informação que possa ajudar..."
                  rows={3}
                  className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  style={interStyle}
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-lg bg-primary px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={interStyle}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Projeto'}
                </button>
                <a
                  href="/"
                  className="flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 font-bold text-primary transition-all duration-300 hover:bg-primary/5"
                  style={interStyle}
                >
                  Cancelar
                </a>
              </div>

              <p className="text-center text-sm text-muted-foreground" style={interStyle}>
                * Campos obrigatórios
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-r from-primary/10 to-accent/10 py-20">
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
              Enviar Email
            </a>
            <a
              href="tel:+5541988353340"
              className="rounded-lg border-2 border-primary px-8 py-3 font-bold text-primary transition-all duration-300 hover:bg-primary/5"
              style={interStyle}
            >
              Ligar para Luís
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-primary" style={{ ...interStyle, fontWeight: 700 }}>
                L&R Labs
              </h3>
              <p className="text-sm text-muted-foreground" style={interStyle}>
                Soluções digitais de excelência para seu negócio.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground" style={interStyle}>
                Contato
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground" style={interStyle}>
                <li>
                  <a href="mailto:noreplylrlabs@gmail.com" className="hover:text-primary">
                    noreplylrlabs@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+5541988353340" className="hover:text-primary">
                    +55 (41) 98835-3340 - Luís
                  </a>
                </li>
                <li>
                  <a href="tel:+554198764783" className="hover:text-primary">
                    +55 (41) 98764-7836 - Ronald
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground" style={interStyle}>
                Serviços
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground" style={interStyle}>
                <li><a href="/" className="hover:text-primary">Construção de Sites</a></li>
                <li><a href="/" className="hover:text-primary">Sistemas de Pagamento</a></li>
                <li><a href="/" className="hover:text-primary">Integração com API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground" style={interStyle}>
                Empresa
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground" style={interStyle}>
                <li><a href="/" className="hover:text-primary">Sobre Nós</a></li>
                <li><a href="/projects" className="hover:text-primary">Projetos</a></li>
                <li><a href="/" className="hover:text-primary">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground" style={interStyle}>
            <p>&copy; 2026 L&R Labs. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
