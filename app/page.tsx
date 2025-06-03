"use client"

import {Button} from "@/components/ui/button"
import Image from "next/image"
import {Settings, Smartphone, Palette, Code, Zap, Brain, Search, Presentation, PenTool, Menu, X} from "lucide-react"
import {useState} from "react"
import {ChevronUp} from "lucide-react"
import {useEffect} from "react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export default function NeuraptorLanding() {
  const [language, setLanguage] = useState<"pt" | "en">("pt")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const translations = {
    pt: {
      // Navbar
      inicio: "Início",
      servicos: "Serviços",
      tecnologias: "Tecnologias",
      processo: "Processo",
      contato: "Contato",
      solicitarProposta: "Solicitar uma Proposta",

      // Hero
      heroTitle: "Soluções Digitais",
      heroTitleHighlight: "Inteligentes",
      heroTitleEnd: "e Sob Medida",
      heroDescription:
        "A Neuraptor resolve problemas reais com tecnologia personalizada, IA e engenharia de software. Transformamos ideias em produtos digitais escaláveis e inteligentes.",
      faleConosco: "Fale conosco",

      // Services
      nossosServicos: "Nossos Serviços",
      sistemasWeb: "Sistemas Web Personalizados",
      sistemasWebDesc: "Desenvolvemos sistemas web sob medida para atender às suas necessidades específicas.",
      aplicativosMoveis: "Aplicativos Móveis",
      aplicativosMoveiDesc: "Criamos aplicativos móveis inovadores e intuitivos para diversas plataformas.",
      uxuiDesign: "UX/UI Design & Produto",
      uxuiDesignDesc: "Projetamos interfaces e produtos digitais com foco na experiência do usuário.",
      consultoria: "Consultoria & Arquitetura de Software",
      consultoriaDesc: "Oferecemos consultoria especializada em arquitetura de software e tecnologia.",
      integracoes: "Integrações & Automação",
      integracoesDesc: "Automatizamos processos e integramos sistemas para otimizar a eficiência.",
      inteligenciaArtificial: "Inteligência Artificial Aplicada",
      inteligenciaArtificialDesc: "Aplicamos IA para criar soluções inteligentes e inovadoras.",

      // Technologies
      tecnologiasUtilizadas: "Tecnologias utilizadas",
      tecnologiasDesc:
        "Por trás de cada projeto, usamos tecnologias modernas, seguras e robustas para criar soluções eficientes e escaláveis. Escolhemos cada ferramenta com cuidado para garantir um serviço confiável, ágil e pronto para crescer com seu negócio, porque tecnologia só faz sentido quando gera valor e impulsiona resultados.",

      // Process
      comoTrabalhamos: "Como Trabalhamos",
      compreensaoProblema: "Compreensão do Problema",
      compreensaoProblemaDesc: "Começamos entendendo seus desafios e objetivos.",
      planejamentoProposta: "Planejamento & Proposta",
      planejamentoPropostaDesc: "Criamos um plano e uma proposta detalhados, adaptados às suas necessidades.",
      designPrototipo: "Design & Protótipo",
      designPrototipoDesc: "Projetamos e prototipamos a solução para sua revisão.",
      desenvolvimentoAgil: "Desenvolvimento Ágil",
      desenvolvimentoAgilDesc: "Desenvolvemos a solução usando metodologias ágeis.",
      implementacaoSuporte: "Implementação & Suporte",
      implementacaoSuporteDesc: "Implementamos e fornecemos suporte contínuo para sua solução.",

      // Why Choose Us
      oQueNosTorna: "O que nos torna a escolha certa?",
      solucoesSobMedida: "Soluções sob medida",
      solucoesSobMedidaDesc:
        "Nada de pacotes genéricos. Criamos soluções personalizadas que resolvem exatamente o que seu negócio precisa.",
      focoResultado: "Foco em resultado real",
      focoResultadoDesc:
        "A tecnologia que entregamos é pensada para gerar valor, escalar com seu negócio e oferecer ROI mensurável.",
      dominioTecnico: "Domínio técnico e visão de produto",
      dominioTecnicoDesc:
        "Combinamos engenharia robusta, IA aplicada e um olhar estratégico de UX/UI para criar experiências impactantes.",

      // CTA
      transformeIdeias: "Transforme suas ideias em realidade digital",
      contatoWhatsApp: "Contato via WhatsApp",

      // Footer
      copyright: "Todos os direitos reservados.",

      // WhatsApp Messages
      whatsappProposal: "Olá! Gostaria de solicitar uma proposta para um projeto. Podem me ajudar?",
      whatsappContact: "Olá! Gostaria de saber mais sobre os serviços da Neuraptor. Podem me ajudar?",
    },
    en: {
      // Navbar
      inicio: "Home",
      servicos: "Services",
      tecnologias: "Technologies",
      processo: "Process",
      contato: "Contact",
      solicitarProposta: "Request a Proposal",

      // Hero
      heroTitle: "Smart Digital",
      heroTitleHighlight: "Solutions",
      heroTitleEnd: "Tailored for You",
      heroDescription:
        "Neuraptor solves real problems with personalized technology, AI and software engineering. We transform ideas into scalable and intelligent digital products.",
      faleConosco: "Contact us",

      // Services
      nossosServicos: "Our Services",
      sistemasWeb: "Custom Web Systems",
      sistemasWebDesc: "We develop custom web systems to meet your specific needs.",
      aplicativosMoveis: "Mobile Applications",
      aplicativosMoveiDesc: "We create innovative and intuitive mobile applications for various platforms.",
      uxuiDesign: "UX/UI Design & Product",
      uxuiDesignDesc: "We design interfaces and digital products focused on user experience.",
      consultoria: "Consulting & Software Architecture",
      consultoriaDesc: "We offer specialized consulting in software architecture and technology.",
      integracoes: "Integrations & Automation",
      integracoesDesc: "We automate processes and integrate systems to optimize efficiency.",
      inteligenciaArtificial: "Applied Artificial Intelligence",
      inteligenciaArtificialDesc: "We apply AI to create intelligent and innovative solutions.",

      // Technologies
      tecnologiasUtilizadas: "Technologies used",
      tecnologiasDesc:
        "Behind every project, we use modern, secure and robust technologies to create efficient and scalable solutions. We choose each tool carefully to ensure a reliable, agile service ready to grow with your business, because technology only makes sense when it generates value and drives results.",

      // Process
      comoTrabalhamos: "How We Work",
      compreensaoProblema: "Problem Understanding",
      compreensaoProblemaDesc: "We start by understanding your challenges and objectives.",
      planejamentoProposta: "Planning & Proposal",
      planejamentoPropostaDesc: "We create a detailed plan and proposal, adapted to your needs.",
      designPrototipo: "Design & Prototype",
      designPrototipoDesc: "We design and prototype the solution for your review.",
      desenvolvimentoAgil: "Agile Development",
      desenvolvimentoAgilDesc: "We develop the solution using agile methodologies.",
      implementacaoSuporte: "Implementation & Support",
      implementacaoSuporteDesc: "We implement and provide ongoing support for your solution.",

      // Why Choose Us
      oQueNosTorna: "What makes us the right choice?",
      solucoesSobMedida: "Tailored solutions",
      solucoesSobMedidaDesc:
        "No generic packages. We create personalized solutions that solve exactly what your business needs.",
      focoResultado: "Focus on real results",
      focoResultadoDesc:
        "The technology we deliver is designed to generate value, scale with your business and offer measurable ROI.",
      dominioTecnico: "Technical expertise and product vision",
      dominioTecnicoDesc:
        "We combine robust engineering, applied AI and a strategic UX/UI perspective to create impactful experiences.",

      // CTA
      transformeIdeias: "Transform your ideas into digital reality",
      contatoWhatsApp: "Contact via WhatsApp",

      // Footer
      copyright: "All rights reserved.",

      // WhatsApp Messages
      whatsappProposal: "Hello! I would like to request a proposal for a project. Can you help me?",
      whatsappContact: "Hello! I would like to know more about Neuraptor's services. Can you help me?",
    },
  }

  const t = translations[language]

  const techIcons = [
    {name: "Firebase", icon: "/tech-icons/tech-1.svg"},
    {name: "Google Analytics", icon: "/tech-icons/tech-8.svg"},
    {name: "Redis", icon: "/tech-icons/tech-3.svg"},
    {name: "Go", icon: "/tech-icons/tech-7.svg"},
    {name: "Figma", icon: "/tech-icons/tech-5.svg"},
    {name: "Next.js", icon: "/tech-icons/tech-6.svg"},
    {name: ".NET", icon: "/tech-icons/tech-2.svg"},
    {name: "Cloud", icon: "/tech-icons/tech-4.svg"},
  ]

  const currentYear = new Date().getFullYear()

  // Controle do botão "voltar ao topo"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppProposal = () => {
    const phoneNumber = "5531984354960"
    const message = encodeURIComponent(t.whatsappProposal)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const handleWhatsAppContact = () => {
    const phoneNumber = "5531984354960"
    const message = encodeURIComponent(t.whatsappContact)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }, 100)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <Analytics/>
      <SpeedInsights/>
      <div
        className="min-h-screen bg-gradient-to-b from-[#0A0909] via-[#09101F] to-[#000000] text-white font-['Poppins',sans-serif] relative overflow-hidden">
        {/* Corner Blue Shadows - More Intense */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-br from-blue-500/20 via-blue-600/15 to-transparent rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-blue-400/20 via-blue-500/15 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

        {/* Responsive Navbar */}
        <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
          {/* Desktop Navbar */}
          <div
            className="hidden lg:flex items-center justify-between bg-black/90 backdrop-blur-md rounded-full px-8 py-4 border border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image src="/neuraptor-logo.jpeg" alt="Neuraptor Logo" fill className="object-contain rounded-full"/>
              </div>
              <span className="font-bold text-xl text-white">Neuraptor</span>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <button
                onClick={() => handleNavClick("#inicio")}
                className="text-white hover:text-blue-400 transition-colors relative"
              >
                {t.inicio}
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400"></div>
              </button>
              <button
                onClick={() => handleNavClick("#servicos")}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {t.servicos}
              </button>
              <button
                onClick={() => handleNavClick("#tecnologias")}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {t.tecnologias}
              </button>
              <button
                onClick={() => handleNavClick("#processo")}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {t.processo}
              </button>
              <button
                onClick={() => handleNavClick("#contato")}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {t.contato}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={handleWhatsAppProposal}
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent rounded-full px-6 py-2 text-sm font-medium transition-all duration-300"
              >
                {t.solicitarProposta}
              </Button>

              {/* Language Switch */}
              <div className="flex items-center rounded-full overflow-hidden">
                <button
                  onClick={() => setLanguage("pt")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    language === "pt" ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-300 hover:bg-gray-500"
                  }`}
                >
                  PT
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    language === "en" ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-300 hover:bg-gray-500"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="lg:hidden">
            {/* Mobile Header */}
            <div
              className="flex items-center justify-between bg-black/90 backdrop-blur-md rounded-full px-6 py-4 border border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 relative">
                  <Image src="/neuraptor-logo.jpeg" alt="Neuraptor Logo" fill className="object-contain rounded-full"/>
                </div>
                <span className="font-bold text-lg text-white">Neuraptor</span>
              </div>

              <div className="flex items-center space-x-3">
                {/* Language Switch Mobile */}
                <div className="flex items-center rounded-full overflow-hidden">
                  <button
                    onClick={() => setLanguage("pt")}
                    className={`px-3 py-1 text-xs font-medium transition-colors ${
                      language === "pt" ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-300"
                    }`}
                  >
                    PT
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 text-xs font-medium transition-colors ${
                      language === "en" ? "bg-blue-500 text-white" : "bg-gray-600 text-gray-300"
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-white hover:text-blue-400 transition-colors"
                >
                  {mobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
              </div>
            </div>

            {/* Mobile Menu with Animation */}
            <div
              className={`mt-2 bg-black/95 backdrop-blur-md rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
                mobileMenuOpen
                  ? "max-h-96 opacity-100 transform translate-y-0"
                  : "max-h-0 opacity-0 transform -translate-y-2"
              }`}
            >
              <div className="flex flex-col">
                <button
                  onClick={() => handleNavClick("#inicio")}
                  className="px-6 py-4 text-left text-white hover:bg-blue-500/20 hover:text-blue-400 transition-colors border-b border-gray-700/50"
                >
                  {t.inicio}
                </button>
                <button
                  onClick={() => handleNavClick("#servicos")}
                  className="px-6 py-4 text-left text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors border-b border-gray-700/50"
                >
                  {t.servicos}
                </button>
                <button
                  onClick={() => handleNavClick("#tecnologias")}
                  className="px-6 py-4 text-left text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors border-b border-gray-700/50"
                >
                  {t.tecnologias}
                </button>
                <button
                  onClick={() => handleNavClick("#processo")}
                  className="px-6 py-4 text-left text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors border-b border-gray-700/50"
                >
                  {t.processo}
                </button>
                <button
                  onClick={() => handleNavClick("#contato")}
                  className="px-6 py-4 text-left text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors border-b border-gray-700/50"
                >
                  {t.contato}
                </button>
                <div className="p-4">
                  <Button
                    onClick={() => {
                      handleWhatsAppProposal()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 text-sm font-medium transition-all duration-300"
                  >
                    {t.solicitarProposta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="inicio" className="pt-32 pb-20 px-4 max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {t.heroTitle}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  {t.heroTitleHighlight}
                </span>{" "}
                  {t.heroTitleEnd}
                </h1>

                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {t.heroDescription}
                </p>
              </div>

              {/* Standalone "Fale conosco" button */}
              <div className="pt-4 flex justify-center lg:justify-start">
                <Button
                  onClick={handleWhatsAppContact}
                  size="lg"
                  className="bg-[#2194F2B2] hover:bg-[#2194F2] text-white rounded-lg px-12 py-4 text-lg font-medium"
                >
                  {t.faleConosco}
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Illustration with Floating Animation */}
            <div className="relative flex justify-center items-center">
              <div className="w-full max-w-lg animate-float">
                <Image
                  src="/hero-illustration.svg"
                  alt="Soluções Digitais Inteligentes"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 px-4 max-w-7xl mx-auto relative">
          {/* Central Blue Light Effect */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-500/15 via-blue-400/20 to-blue-500/15 rounded-full blur-3xl"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-cyan-400/10 via-blue-500/15 to-purple-500/10 rounded-full blur-2xl"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.nossosServicos}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            <div
              className="bg-gradient-to-br from-[#0A0909] to-[#09101F] backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-blue-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.sistemasWeb}</h3>
              <p className="text-gray-300">{t.sistemasWebDesc}</p>
            </div>

            <div
              className="bg-gradient-to-br from-[#0A0909] to-[#09101F] backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-purple-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.aplicativosMoveis}</h3>
              <p className="text-gray-300">{t.aplicativosMoveiDesc}</p>
            </div>

            <div
              className="bg-gradient-to-br from-[#0A0909] to-[#09101F] backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-pink-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.uxuiDesign}</h3>
              <p className="text-gray-300">{t.uxuiDesignDesc}</p>
            </div>

            <div
              className="bg-gradient-to-br from-[#0A0909] to-[#09101F] backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-green-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.consultoria}</h3>
              <p className="text-gray-300">{t.consultoriaDesc}</p>
            </div>

            <div
              className="bg-gradient-to-br from-[#0A0909] to-[#09101F] backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-yellow-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.integracoes}</h3>
              <p className="text-gray-300">{t.integracoesDesc}</p>
            </div>

            <div
              className="bg-gradient-to-br from-[#0A0909] to-[#09101F] backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-cyan-400"/>
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.inteligenciaArtificial}</h3>
              <p className="text-gray-300">{t.inteligenciaArtificialDesc}</p>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="tecnologias" className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-white">{t.tecnologiasUtilizadas}</h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">{t.tecnologiasDesc}</p>
          </div>

          {/* Infinite Carousel with proper spacing for hover effect */}
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll">
              {/* First set of icons */}
              {techIcons.map((tech, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                  style={{minHeight: "120px"}}
                >
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for infinite effect */}
              {techIcons.map((tech, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                  style={{minHeight: "120px"}}
                >
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Third set for seamless loop */}
              {techIcons.map((tech, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 mx-8 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                  style={{minHeight: "120px"}}
                >
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section id="processo" className="py-20 px-4 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">{t.comoTrabalhamos}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Process Step 1 */}
            <div
              className="bg-[#2A2D3A]/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="mb-6">
                <Search className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{t.compreensaoProblema}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.compreensaoProblemaDesc}</p>
            </div>

            {/* Process Step 2 */}
            <div
              className="bg-[#2A2D3A]/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="mb-6">
                <Presentation className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{t.planejamentoProposta}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.planejamentoPropostaDesc}</p>
            </div>

            {/* Process Step 3 */}
            <div
              className="bg-[#2A2D3A]/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="mb-6">
                <PenTool className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{t.designPrototipo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.designPrototipoDesc}</p>
            </div>

            {/* Process Step 4 */}
            <div
              className="bg-[#2A2D3A]/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="mb-6">
                <Code className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{t.desenvolvimentoAgil}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.desenvolvimentoAgilDesc}</p>
            </div>

            {/* Process Step 5 */}
            <div
              className="bg-[#2A2D3A]/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
              <div className="mb-6">
                <Settings className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{t.implementacaoSuporte}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.implementacaoSuporteDesc}</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="escolha" className="py-20 px-4 max-w-7xl mx-auto relative">
          {/* Blue glow effect */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2194F2]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#2194F2]/15 rounded-full blur-2xl"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">{t.oQueNosTorna}</h2>

          {/* Card container for all content */}
          <div
            className="bg-gradient-to-br from-[#09101F] to-[#0A0909] rounded-2xl border border-gray-800/50 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-16">
                {/* Feature 1 */}
                <div className="space-y-6">
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white tracking-wide">
                    {t.solucoesSobMedida}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{t.solucoesSobMedidaDesc}</p>
                  <div className="w-full h-px bg-gradient-to-r from-blue-500/60 via-blue-400/40 to-transparent"></div>
                </div>

                {/* Feature 2 */}
                <div className="space-y-6">
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white tracking-wide">
                    {t.focoResultado}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{t.focoResultadoDesc}</p>
                  <div className="w-full h-px bg-gradient-to-r from-blue-500/60 via-blue-400/40 to-transparent"></div>
                </div>

                {/* Feature 3 */}
                <div className="space-y-6">
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white tracking-wide">
                    {t.dominioTecnico}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{t.dominioTecnicoDesc}</p>
                </div>
              </div>

              {/* 3D Office Illustration - Removed strong shadows */}
              <div className="relative flex justify-center items-center">
                <Image
                  src="/office-3d-illustration.svg"
                  alt="Escritório 3D"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contato" className="py-20 px-4 max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.transformeIdeias}</h2>

            <div className="flex justify-center">
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-[#2194F2] hover:bg-[#1976D2] text-white rounded-lg px-8 py-4 text-lg font-medium flex items-center gap-3"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"
                    fill="currentColor"
                  />
                </svg>
                {t.contatoWhatsApp}
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-[#0A0909] to-[#09101F] rounded-t-[3rem] py-16 px-4 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-8">
              <nav className="flex items-center space-x-12">
                <button
                  onClick={() => handleNavClick("#inicio")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.inicio}
                </button>
                <button
                  onClick={() => handleNavClick("#servicos")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.servicos}
                </button>
                <button
                  onClick={() => handleNavClick("#contato")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.contato}
                </button>
              </nav>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Neuraptor. {t.copyright}
              </p>
            </div>
          </div>
        </footer>

        {/* Floating Buttons - Hidden on mobile */}
        <div className="fixed bottom-6 right-6 z-50 flex-col items-center space-y-3 hidden lg:flex">
          {/* Scroll to Top Button - appears above WhatsApp */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #2194F2 0%, #1976D2 100%)",
                borderRadius: "16px",
                width: "56px",
                height: "56px",
              }}
              aria-label="Voltar ao topo"
            >
              <ChevronUp className="w-6 h-6 mx-auto"/>
            </button>
          )}

          {/* WhatsApp Button with new icon */}
          <button
            onClick={handleWhatsAppContact}
            className="text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)",
              borderRadius: "16px",
              width: "64px",
              height: "64px",
            }}
            aria-label="Contato via WhatsApp"
          >
            <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={38} height={38} className="w-9 h-9"/>
          </button>
        </div>
      </div>
    </>
  )
}
