import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import {SpeedInsights} from "@vercel/speed-insights/next"

import "./globals.css"

export const metadata: Metadata = {
    title: "Neuraptor | ERP, CRM, Software Sob Medida e Inteligência Artificial",
    description:
        "A Neuraptor é uma software house inovadora que oferece ERP, CRM global e inteligente, desenvolvimento de software sob medida, freelancers especializados e atendimento via IA integrada ao WhatsApp.",
    keywords: [
        "Neuraptor",
        "ERP global",
        "CRM inteligente",
        "software sob medida",
        "freelancers de sistemas",
        "desenvolvimento personalizado",
        "software house inovadora",
        "IA para empresas",
        "chatbot no WhatsApp",
        "ERP com inteligência artificial",
        "automação empresarial",
        "integração ERP e CRM",
        "soluções empresariais",
        "desenvolvimento de software",
        "sistemas personalizados",
        "inteligência artificial aplicada",
        "consultoria em tecnologia",
        "aplicativos móveis",
        "UX/UI design",
        "arquitetura de software",
    ],
    authors: [{ name: "Neuraptor" }],
    creator: "Neuraptor",
    publisher: "Neuraptor",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://neuraptor.com.br",
        title: "Neuraptor | ERP, CRM, Software Sob Medida e IA",
        description:
            "Transforme sua empresa com ERP, CRM, software sob medida e IA da Neuraptor. Flexível, automatizado e integrado com WhatsApp.",
        siteName: "Neuraptor",
        images: [
            {
                url: "https://neuraptor.com.br/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Neuraptor - Soluções Digitais Inteligentes",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Neuraptor | ERP, CRM, Software Sob Medida e IA",
        description:
            "Soluções em ERP, CRM, software sob medida e IA com atendimento via WhatsApp. Totalmente adaptável para qualquer tipo de empresa.",
        images: ["https://neuraptor.com.br/twitter-image.jpg"],
        creator: "@neuraptor",
        site: "@neuraptor",
    },
    verification: {
        google: "google-site-verification-code",
        yandex: "yandex-verification-code",
        yahoo: "yahoo-site-verification-code",
        other: {
            me: ["https://neuraptor.com.br", "mailto:contato@neuraptor.com.br"],
        },
    },
    alternates: {
        canonical: "https://neuraptor.com.br",
        languages: {
            "pt-BR": "https://neuraptor.com.br",
            "en-US": "https://neuraptor.com.br/en",
        },
    },
    category: "technology",
    classification: "Business Software",
    generator: "Next.js",
    applicationName: "Neuraptor",
    referrer: "origin-when-cross-origin",
    colorScheme: "dark",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#2194F2" },
        { media: "(prefers-color-scheme: dark)", color: "#2194F2" },
    ],
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#2194F2",
            },
        ],
    },
    manifest: "/site.webmanifest",
    other: {
        "msapplication-TileColor": "#2194F2",
        "msapplication-config": "/browserconfig.xml",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <head>
                {/* Structured Data - JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            name: "Neuraptor",
                            url: "https://neuraptor.com.br",
                            logo: "https://neuraptor.com.br/neuraptor-logo.jpeg",
                            image: "https://neuraptor.com.br/og-image.jpg",
                            description:
                                "ERP e CRM desacoplados, desenvolvimento de software sob medida e freelancers com integração por IA e atendimento personalizado pelo WhatsApp. Solução global para todos os tipos de negócios.",
                            applicationCategory: "BusinessApplication",
                            operatingSystem: "Web",
                            softwareVersion: "1.0",
                            datePublished: "2024-01-01",
                            dateModified: new Date().toISOString().split("T")[0],
                            inLanguage: ["pt-BR", "en-US"],
                            isAccessibleForFree: false,
                            offers: {
                                "@type": "Offer",
                                price: "Sob consulta",
                                priceCurrency: "BRL",
                                availability: "https://schema.org/InStock",
                                validFrom: "2024-01-01",
                            },
                            creator: {
                                "@type": "Organization",
                                name: "Neuraptor",
                                url: "https://neuraptor.com.br",
                                logo: "https://neuraptor.com.br/neuraptor-logo.jpeg",
                                contactPoint: {
                                    "@type": "ContactPoint",
                                    telephone: "+55-31-98435-4960",
                                    contactType: "customer service",
                                    availableLanguage: ["Portuguese", "English"],
                                },
                                sameAs: [
                                    "https://linkedin.com/company/neuraptor",
                                    "https://instagram.com/neuraptor",
                                    "https://twitter.com/neuraptor",
                                ],
                            },
                            featureList: [
                                "ERP Global e Inteligente",
                                "CRM Personalizado",
                                "Desenvolvimento de Software Sob Medida",
                                "Inteligência Artificial Aplicada",
                                "Integração com WhatsApp",
                                "Automação Empresarial",
                                "Consultoria em Tecnologia",
                                "Aplicativos Móveis",
                                "UX/UI Design",
                            ],
                            screenshot: "https://neuraptor.com.br/screenshot.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "5.0",
                                ratingCount: "50",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        }),
                    }}
                />

                {/* Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Neuraptor",
                            alternateName: "Neuraptor Software House",
                            url: "https://neuraptor.com.br",
                            logo: "https://neuraptor.com.br/neuraptor-logo.jpeg",
                            description:
                                "Software house inovadora especializada em ERP, CRM, desenvolvimento de software sob medida e soluções de inteligência artificial para empresas.",
                            foundingDate: "2024",
                            founders: [
                                {
                                    "@type": "Person",
                                    name: "Equipe Neuraptor",
                                },
                            ],
                            address: {
                                "@type": "PostalAddress",
                                addressCountry: "BR",
                                addressRegion: "MG",
                            },
                            contactPoint: [
                                {
                                    "@type": "ContactPoint",
                                    telephone: "+55-31-98435-4960",
                                    contactType: "customer service",
                                    availableLanguage: ["Portuguese", "English"],
                                    contactOption: "TollFree",
                                },
                            ],
                            sameAs: [
                                "https://linkedin.com/company/neuraptor",
                                "https://instagram.com/neuraptor",
                                "https://twitter.com/neuraptor",
                            ],
                            knowsAbout: [
                                "Desenvolvimento de Software",
                                "ERP",
                                "CRM",
                                "Inteligência Artificial",
                                "Automação Empresarial",
                                "UX/UI Design",
                                "Consultoria em Tecnologia",
                            ],
                            serviceArea: {
                                "@type": "GeoCircle",
                                geoMidpoint: {
                                    "@type": "GeoCoordinates",
                                    latitude: "-19.9167",
                                    longitude: "-43.9345",
                                },
                                geoRadius: "1000000",
                            },
                        }),
                    }}
                />

                {/* WebSite Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Neuraptor",
                            url: "https://neuraptor.com.br",
                            description: "Software house especializada em ERP, CRM, desenvolvimento sob medida e IA",
                            publisher: {
                                "@type": "Organization",
                                name: "Neuraptor",
                            },
                            potentialAction: {
                                "@type": "SearchAction",
                                target: "https://neuraptor.com.br/search?q={search_term_string}",
                                "query-input": "required name=search_term_string",
                            },
                            inLanguage: ["pt-BR", "en-US"],
                        }),
                    }}
                />

                {/* Service Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            name: "Desenvolvimento de Software Personalizado",
                            description: "Serviços completos de desenvolvimento de software, ERP, CRM e soluções de IA para empresas",
                            provider: {
                                "@type": "Organization",
                                name: "Neuraptor",
                                url: "https://neuraptor.com.br",
                            },
                            serviceType: "Software Development",
                            areaServed: {
                                "@type": "Country",
                                name: "Brazil",
                            },
                            hasOfferCatalog: {
                                "@type": "OfferCatalog",
                                name: "Serviços de Software",
                                itemListElement: [
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "ERP Personalizado",
                                        },
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "CRM Inteligente",
                                        },
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Desenvolvimento de Software Sob Medida",
                                        },
                                    },
                                    {
                                        "@type": "Offer",
                                        itemOffered: {
                                            "@type": "Service",
                                            name: "Inteligência Artificial Aplicada",
                                        },
                                    },
                                ],
                            },
                        }),
                    }}
                />

                {/* Preconnect to external domains */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://wa.me" />

                {/* DNS Prefetch */}
                <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                <link rel="dns-prefetch" href="//fonts.gstatic.com" />
                <link rel="dns-prefetch" href="//wa.me" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://neuraptor.com.br" />

                {/* Hreflang for internationalization */}
                <link rel="alternate" hrefLang="pt-BR" href="https://neuraptor.com.br" />
                <link rel="alternate" hrefLang="en-US" href="https://neuraptor.com.br/en" />
                <link rel="alternate" hrefLang="x-default" href="https://neuraptor.com.br" />
            </head>
            <body>
                {children}
                <Analytics/>
                <SpeedInsights/>
                </body>
        </html>
    )
}
