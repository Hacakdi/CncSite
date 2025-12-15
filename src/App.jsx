import React, { useState, useEffect } from 'react';
import {
  Menu, X, ArrowRight, Settings,
  CheckCircle,
  Cpu, Wrench, Factory, Layers, Zap
} from 'lucide-react';

// Translations object
const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetler',
      technology: 'Teknoloji',
      gallery: 'Galeri',
      projects: 'Projeler',
      contact: 'İletişim'
    },
    hero: {
      title1: 'Hassasiyet ve',
      title2: 'Teknoloji',
      title3: 'ile Üretim',
      subtitle: 'Modern CNC teknolojisi ile kalite standartlarını aşan, yüksek hassasiyetli parça üretimi',
      getQuote: 'Teklif Alın',
      ourServices: 'Hizmetlerimiz'
    },
    features: {
      iso: 'ISO 9001:2015 Kalite Belgeli',
      experience: '25+ Yıl Deneyim',
      precision: '±0.005mm Hassasiyet',
      production: '7/24 Üretim Kapasitesi'
    },
    about: {
      title1: 'Endüstride',
      title2: 'Öncü',
      title3: 'Çözümler',
      text1: 'Son teknoloji CNC makineleriyle alüminyum, çelik, paslanmaz çelik, pirinç ve titanyum gibi çeşitli metallerde mikron hassasiyetinde işleme yapabilen kapsamlı bir üretim kuruluşudur.',
      text2: 'CNC torna, freze, 5 eksen işleme merkezi, lazer kesim ve oyma, kalıp imalatı, parça tasarımı, prototip geliştirme ve seri üretim hizmetleri sunmaktadır. Otomotiv, havacılık, savunma sanayi, medikal cihazlar, enerji ve endüstriyel otomasyon sektörlerine özel çözümler üreten, ölçüm ve kalite kontrol sistemleriyle desteklenen güvenilir bir üretim ortağıdır.',
      points: [
        'Avrupa standartlarında kalite yönetim sistemi',
        'Uzman mühendislik ve tasarım desteği',
        'Hızlı prototip ve seri üretim kapasitesi'
      ],
      stats: {
        experience: 'Yıl Deneyim',
        staff: 'Uzman Personel',
        projects: 'Proje',
        clients: 'Müşteri'
      }
    },
    services: {
      title1: 'Hizmet',
      title2: 'lerimiz',
      subtitle: 'Modern teknoloji ve deneyimli kadromuzla geniş yelpazede CNC imalat hizmetleri sunuyoruz',
      items: [
        {
          title: 'CNC Torna',
          description: 'Yüksek hassasiyetli torna işleme hizmetleri ile karmaşık geometrilerde üretim'
        },
        {
          title: 'CNC Freze',
          description: '3, 4 ve 5 eksen freze işleme teknolojisi ile kusursuz yüzey kalitesi'
        },
        {
          title: 'Lazer Kesim',
          description: 'Son teknoloji fiber lazer ile hassas kesim ve gravür işlemleri'
        },
        {
          title: 'Kalıp İmalatı',
          description: 'Enjeksiyon ve preslenmiş parça kalıpları tasarımı ve üretimi'
        },
        {
          title: 'Özel Parça Üretimi',
          description: 'Prototipten seri üretime özel parça imalatı ve mühendislik desteği'
        },
        {
          title: 'Seri Üretim',
          description: 'Yüksek kapasiteli makine parkurumuz ile hızlı ve kaliteli seri üretim'
        }
      ],
      details: 'Detaylar'
    },
    technology: {
      title1: 'Makine',
      title2: 'Parkurumuz',
      subtitle: 'Son teknoloji CNC makinelerimiz ve ölçüm cihazlarımızla en hassas işleme garantisi',
      items: [
        { name: 'CNC Torna Merkezi', specs: '5 Eksen, Ø500mm' },
        { name: 'CNC Dik İşleme Merkezi', specs: '1000x600x500mm' },
        { name: 'Fiber Lazer Kesim', specs: '6kW, 3000x1500mm' },
        { name: 'EDM Tel Erozyon', specs: '±0.002mm Hassasiyet' },
        { name: 'CMM Ölçüm Cihazı', specs: 'Zeiss Coordinate 700x1000mm' },
        { name: 'CNC Taşlama', specs: 'Yüzey Taşlama Ra 0.2' }
      ],
      area: 'kapalı üretim alanı',
      continuous: 'kesintisiz üretim'
    },
    gallery: {
      title1: 'Üretim',
      title2: 'Galerimiz',
      subtitle: 'Modern CNC tezgahlarımız ve üretim tesislerimizden görüntüler'
    },
    projects: {
      title1: 'Referans',
      title2: 'Projelerimiz',
      subtitle: 'Farklı sektörlerde gerçekleştirdiğimiz başarılı projelerden örnekler',
      items: [
        { title: 'Otomotiv Kalıp Parçası', category: 'Kalıp' },
        { title: 'Havacılık Komponenti', category: 'Torna' },
        { title: 'Medikal Cihaz Parçası', category: 'Freze' },
        { title: 'Savunma Sanayi Parça', category: 'Lazer' },
        { title: 'Enerji Sektörü Bileşen', category: 'Özel' },
        { title: 'İmalat Fikstürü', category: 'Kalıp' }
      ],
      details: 'Proje Detayları'
    },
    contact: {
      title1: 'Bize',
      title2: 'Ulaşın',
      subtitle: 'Projeleriniz için teklif almak veya detaylı bilgi için bizimle iletişime geçin',
      formTitle: 'Mesaj Gönderin',
      nameLabel: 'Ad Soyad',
      emailLabel: 'E-posta',
      phoneLabel: 'Telefon',
      messageLabel: 'Mesajınız',
      namePlaceholder: 'Adınız ve soyadınız',
      emailPlaceholder: 'ornek@email.com',
      phonePlaceholder: '+90 5XX XXX XX XX',
      messagePlaceholder: 'Projeniz hakkında detaylı bilgi verin...',
      send: 'Gönder',
      successMessage: 'Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.',
      contactInfo: 'Detaylı bilgi için info@zetacnc.com.tr adresine mail gönderebilirsiniz.'
    },
    footer: {
      tagline: 'Hassasiyet ve kalitede öncü CNC imalat çözümleri',
      quickLinks: 'Hızlı Linkler',
      ourServices: 'Hizmetlerimiz',
      contactUs: 'İletişim',
      copyright: 'Tüm hakları saklıdır.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      technology: 'Technology',
      gallery: 'Gallery',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title1: 'Precision and',
      title2: 'Technology',
      title3: 'in Manufacturing',
      subtitle: 'High-precision parts manufacturing exceeding quality standards with modern CNC technology',
      getQuote: 'Get a Quote',
      ourServices: 'Our Services'
    },
    features: {
      iso: 'ISO 9001:2015 Certified',
      experience: '25+ Years of Experience',
      precision: '±0.005mm Precision',
      production: '24/7 Production Capacity'
    },
    about: {
      title1: 'Leading',
      title2: 'Solutions',
      title3: 'in Industry',
      text1: 'Operating in the CNC manufacturing sector since 1998, our company provides the highest quality service to its customers with state-of-the-art equipment and expert staff.',
      text2: 'We are with you as a reliable business partner with projects in automotive, aviation, defense industry, medical and energy sectors.',
      points: [
        'European standard quality management system',
        'Expert engineering and design support',
        'Fast prototyping and serial production capacity'
      ],
      stats: {
        experience: 'Years of Experience',
        staff: 'Expert Staff',
        projects: 'Projects',
        clients: 'Clients'
      }
    },
    services: {
      title1: 'Our',
      title2: 'Services',
      subtitle: 'We offer a wide range of CNC manufacturing services with modern technology and experienced staff',
      items: [
        {
          title: 'CNC Turning',
          description: 'High-precision turning services for complex geometries'
        },
        {
          title: 'CNC Milling',
          description: '3, 4 and 5-axis milling technology with perfect surface quality'
        },
        {
          title: 'Laser Cutting',
          description: 'Precise cutting and engraving with state-of-the-art fiber laser'
        },
        {
          title: 'Mold Manufacturing',
          description: 'Design and production of injection and pressed part molds'
        },
        {
          title: 'Custom Part Manufacturing',
          description: 'Custom part manufacturing and engineering support from prototype to serial production'
        },
        {
          title: 'Serial Production',
          description: 'Fast and quality serial production with our high-capacity machine park'
        }
      ],
      details: 'Details'
    },
    technology: {
      title1: 'Our Machine',
      title2: 'Park',
      subtitle: 'Most precise machining guarantee with our state-of-the-art CNC machines and measuring devices',
      items: [
        { name: 'CNC Turning Center', specs: '5 Axis, Ø500mm' },
        { name: 'CNC Vertical Machining Center', specs: '1000x600x500mm' },
        { name: 'Fiber Laser Cutting', specs: '6kW, 3000x1500mm' },
        { name: 'EDM Wire Erosion', specs: '±0.002mm Precision' },
        { name: 'CMM Measuring Device', specs: 'Zeiss Coordinate 700x1000mm' },
        { name: 'CNC Grinding', specs: 'Surface Grinding Ra 0.2' }
      ],
      area: 'indoor production area',
      continuous: 'continuous production'
    },
    gallery: {
      title1: 'Production',
      title2: 'Gallery',
      subtitle: 'Images from our modern CNC machines and production facilities'
    },
    projects: {
      title1: 'Our Reference',
      title2: 'Projects',
      subtitle: 'Examples of successful projects in different sectors',
      items: [
        { title: 'Automotive Mold Part', category: 'Mold' },
        { title: 'Aviation Component', category: 'Turning' },
        { title: 'Medical Device Part', category: 'Milling' },
        { title: 'Defense Industry Part', category: 'Laser' },
        { title: 'Energy Sector Component', category: 'Custom' },
        { title: 'Manufacturing Fixture', category: 'Mold' }
      ],
      details: 'Project Details'
    },
    contact: {
      title1: 'Contact',
      title2: 'Us',
      subtitle: 'Get in touch with us for a quote or detailed information about your projects',
      formTitle: 'Send Message',
      nameLabel: 'Full Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      messageLabel: 'Your Message',
      namePlaceholder: 'Your name and surname',
      emailPlaceholder: 'example@email.com',
      phonePlaceholder: '+90 5XX XXX XX XX',
      messagePlaceholder: 'Provide detailed information about your project...',
      send: 'Send',
      successMessage: 'Your message has been sent! We will get back to you as soon as possible.',
      infoTitle: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      contactInfo: 'For detailed information, you can send an email to info@zetacnc.com.tr'
    },
    footer: {
      tagline: 'Leading CNC manufacturing solutions in precision and quality',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      contactUs: 'Contact',
      copyright: 'All rights reserved.'
    }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('tr');

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-cnc-dark text-gray-100 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cnc-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Factory className="w-8 h-8 text-cnc-blue" />
              <span className="text-2xl font-bold">ZETA <span className="text-cnc-blue">CNC</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['anasayfa', 'hakkimizda', 'hizmetler', 'galeri', 'iletisim'].map((item, idx) => {
                const labels = language === 'tr'
                  ? ['Ana Sayfa', 'Hakkımızda', 'Hizmetler', 'Teknoloji', 'İletişim']
                  : ['Home', 'About Us', 'Services', 'Technology', 'Contact'];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-cnc-blue transition-colors duration-200"
                  >
                    {labels[idx]}
                  </button>
                );
              })}

              {/* Language Switcher */}
              <div className="flex items-center gap-3 ml-4 border-l border-gray-600 pl-4">
                <button
                  onClick={() => toggleLanguage('tr')}
                  className={`p-1 rounded-md transition-all transform hover:scale-110 ${
                    language === 'tr'
                      ? 'ring-2 ring-cnc-blue shadow-lg shadow-cnc-blue/50'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  title="Türkçe"
                >
                  <img src="/flags/tr.svg" alt="Türkçe" className="w-8 h-6 rounded" />
                </button>
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`p-1 rounded-md transition-all transform hover:scale-110 ${
                    language === 'en'
                      ? 'ring-2 ring-cnc-blue shadow-lg shadow-cnc-blue/50'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  title="English"
                >
                  <img src="/flags/gb.svg" alt="English" className="w-8 h-6 rounded" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-cnc-blue"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-cnc-gray/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              {['anasayfa', 'hakkimizda', 'hizmetler', 'galeri', 'iletisim'].map((item, idx) => {
                const labels = language === 'tr'
                  ? ['Ana Sayfa', 'Hakkımızda', 'Hizmetler', 'Teknoloji', 'İletişim']
                  : ['Home', 'About Us', 'Services', 'Technology', 'Contact'];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-gray-300 hover:text-cnc-blue transition-colors duration-200 py-2"
                  >
                    {labels[idx]}
                  </button>
                );
              })}

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-4 pt-3 border-t border-gray-600 justify-center">
                <button
                  onClick={() => toggleLanguage('tr')}
                  className={`p-2 rounded-md transition-all transform hover:scale-110 ${
                    language === 'tr'
                      ? 'ring-2 ring-cnc-blue shadow-lg shadow-cnc-blue/50'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  title="Türkçe"
                >
                  <img src="/flags/tr.svg" alt="Türkçe" className="w-12 h-8 rounded" />
                </button>
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`p-2 rounded-md transition-all transform hover:scale-110 ${
                    language === 'en'
                      ? 'ring-2 ring-cnc-blue shadow-lg shadow-cnc-blue/50'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  title="English"
                >
                  <img src="/flags/gb.svg" alt="English" className="w-12 h-8 rounded" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="anasayfa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cnc-dark via-cnc-gray to-cnc-dark"></div>
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cnc-blue rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cnc-orange rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t.hero.title1} <span className="text-gradient">{t.hero.title2}</span>
              <br />{t.hero.title3}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('iletisim')}
                className="group px-8 py-4 bg-gradient-to-r from-cnc-blue to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cnc-blue/50 transition-all duration-300 flex items-center gap-2"
              >
                {t.hero.getQuote}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('hizmetler')}
                className="px-8 py-4 glass-effect rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                {t.hero.ourServices}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="relative py-20 bg-cnc-gray overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.about.title1} <span className="text-cnc-blue">{t.about.title2}</span> {t.about.title3}
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              {t.about.text1}
            </p>
            <p className="text-gray-400 text-lg mb-8">
              {t.about.text2}
            </p>

            <div className="space-y-4">
              {t.about.points.map((item, index) => (
                <div key={index} className="flex items-start gap-3 justify-center">
                  <CheckCircle className="w-6 h-6 text-cnc-blue flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="relative py-20 bg-cnc-dark overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-cnc-blue">{language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => {
              const icons = [
                <Settings className="w-12 h-12" />,
                <Cpu className="w-12 h-12" />,
                <Zap className="w-12 h-12" />,
                <Layers className="w-12 h-12" />,
                <Wrench className="w-12 h-12" />,
                <Factory className="w-12 h-12" />
              ];
              return (
                <div
                  key={index}
                  className="group glass-effect rounded-xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="text-cnc-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                    {icons[index]}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="relative py-20 bg-cnc-dark overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, title: { tr: 'CNC Torna Merkezi', en: 'CNC Turning Center' }, category: { tr: 'Torna', en: 'Turning' }, img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80' },
              { id: 2, title: { tr: 'CNC Freze Tezgahı', en: 'CNC Milling Machine' }, category: { tr: 'Freze', en: 'Milling' }, img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80' },
              { id: 3, title: { tr: '5 Eksen İşleme Merkezi', en: '5-Axis Machining Center' }, category: { tr: 'Freze', en: 'Milling' }, img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80' },
              { id: 4, title: { tr: 'Fiber Lazer Kesim', en: 'Fiber Laser Cutting' }, category: { tr: 'Lazer', en: 'Laser' }, img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80' },
              { id: 5, title: { tr: 'Üretim Hattı', en: 'Production Line' }, category: { tr: 'Genel', en: 'General' }, img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80' },
              { id: 6, title: { tr: 'Kalite Kontrol', en: 'Quality Control' }, category: { tr: 'Ölçüm', en: 'Measurement' }, img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80' },
              { id: 7, title: { tr: 'CNC Torna İşleme', en: 'CNC Turning Process' }, category: { tr: 'Torna', en: 'Turning' }, img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80' },
              { id: 8, title: { tr: 'Hassas İşleme', en: 'Precision Machining' }, category: { tr: 'Freze', en: 'Milling' }, img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80' },
              { id: 9, title: { tr: 'EDM Tel Erozyon', en: 'EDM Wire Erosion' }, category: { tr: 'Erozyon', en: 'Erosion' }, img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80' },
              { id: 10, title: { tr: 'Üretim Tesisi', en: 'Production Facility' }, category: { tr: 'Genel', en: 'General' }, img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80' },
              { id: 11, title: { tr: 'Makine Parkuru', en: 'Machine Park' }, category: { tr: 'Genel', en: 'General' }, img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80' },
              { id: 12, title: { tr: 'CNC Programlama', en: 'CNC Programming' }, category: { tr: 'Kontrol', en: 'Control' }, img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80' },
              { id: 13, title: { tr: 'Parça İşleme', en: 'Part Machining' }, category: { tr: 'Torna', en: 'Turning' }, img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80' },
              { id: 14, title: { tr: 'Ölçüm ve Test', en: 'Measurement & Testing' }, category: { tr: 'Ölçüm', en: 'Measurement' }, img: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?w=800&q=80' },
              { id: 15, title: { tr: 'Seri Üretim', en: 'Serial Production' }, category: { tr: 'Genel', en: 'General' }, img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80' },
              { id: 16, title: { tr: 'Kalıp İmalatı', en: 'Mold Manufacturing' }, category: { tr: 'Kalıp', en: 'Mold' }, img: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80' }
            ].map((item) => (
              <div
                key={item.id}
                className="relative glass-effect rounded-xl overflow-hidden group transition-transform duration-300 hover:scale-105"
              >
                <div className="aspect-video relative overflow-hidden bg-cnc-gray">
                  <img
                    src={item.img}
                    alt={item.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cnc-dark via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-xs text-cnc-orange font-semibold mb-1">{item.category[language]}</div>
                  <h3 className="text-lg font-bold">{item.title[language]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="relative py-20 bg-cnc-gray overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.contact.title1} <span className="text-cnc-blue">{t.contact.title2}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="text-center">
              <p className="text-gray-300 text-2xl font-bold">
                {t.contact.contactInfo}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cnc-dark border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Factory className="w-8 h-8 text-cnc-blue" />
                <span className="text-2xl font-bold">ZETA <span className="text-cnc-blue">CNC</span></span>
              </div>
              <p className="text-gray-400 text-sm">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.quickLinks}</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <button onClick={() => scrollToSection('hakkimizda')} className="block hover:text-cnc-blue transition-colors">{t.nav.about}</button>
                <button onClick={() => scrollToSection('hizmetler')} className="block hover:text-cnc-blue transition-colors">{t.nav.services}</button>
                <button onClick={() => scrollToSection('iletişim')} className="block hover:text-cnc-blue transition-colors">{t.nav.gallery}</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.ourServices}</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                {t.services.items.slice(0, 4).map((service, idx) => (
                  <div key={idx}>{service.title}</div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.footer.contactUs}</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>info@zetacnc.com.tr</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 ZETA CNC. {t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
