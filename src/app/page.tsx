import React, { Suspense } from 'react';
import Link from 'next/link';
import Spline from '@splinetool/react-spline/next';
import Script from 'next/script';
import ContactForm from '@/components/ContactForm';

export default function Home() {

  return (
    <main className="font-sans antialiased bg-[#0A192F] text-slate-100 selection:bg-[#10B981] selection:text-[#0A192F]">

      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 md:py-8 flex justify-between items-center bg-[#0A192F]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="text-3xl md:text-5xl font-black tracking-tighter text-white">CYD Bio-Innovation</div>
        </div>
        <div className="flex items-center gap-12">
          <Link href="/legacy/index.html" target="_blank" className="flex items-center gap-4 group/heritage bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 px-8 py-4 rounded-full transition-all duration-300">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[#D4AF37]">청유담 브랜드</span>
            <svg className="w-5 h-5 text-[#D4AF37] group-hover/heritage:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <div className="flex items-center gap-6 cursor-pointer group">
            <span className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-[#10B981]/80 group-hover:text-[#10B981] transition-colors">Menu</span>
            <div className="w-12 h-[2px] bg-[#10B981] group-hover:w-16 transition-all duration-300"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 overflow-hidden"
        style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.95)), url('/images/hero-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10B981]/10 blur-[120px] rounded-full -mr-48 -mt-24 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto w-full gap-12 mt-12 md:mt-0">

          {/* Left Text Content */}
          <div className="space-y-8 w-full lg:w-1/2 relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10B981]/30 bg-[#10B981]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-[#10B981] uppercase">Global R&amp;D Masterpiece</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white text-balance">
              당신의 아이디어,<br />
              특허가 되고<br />
              시장을 지배하는<br />
              <span className="text-[#10B981]">마스터피스로.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 font-light tracking-wide max-w-xl leading-relaxed">
              단순한 OEM/ODM이 아닙니다.<br />
              CYD Bio-Innovation은 독자적 데이터 설계부터<br />
              공인된 양산, 특허 확보까지 책임지는<br />
              <span className="text-white font-medium">'Clinical-Backed Turnkey Platform'</span>입니다.
            </p>

            <div className="pt-8">
              <Link href="#contact" scroll={true}>
                <button className="group relative w-full sm:w-auto px-12 h-16 bg-[#10B981] hover:bg-[#10B981]/90 transition-all duration-300 rounded-full flex items-center justify-center overflow-hidden">
                  <span className="relative z-10 text-[#0A192F] font-bold text-lg tracking-tight">프로젝트 제안받기</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Right 3D Spline Content */}
          <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] relative mt-12 lg:mt-0 flex-shrink-0 z-50 flex items-center justify-center scale-150 md:scale-[2] origin-center pointer-events-auto overflow-hidden">
            {/* Watermark Mask - Absolute block covering bottom right */}
            <div className="absolute bottom-0 right-0 w-[200px] h-[60px] bg-[#0A192F] z-[60] pointer-events-none rounded-tl-3xl blur-[2px]"></div>

            <div className="w-full h-full" style={{ clipPath: 'inset(0px 0px 45px 0px)' }}>
              <Suspense fallback={<div className="text-[#10B981] text-sm font-bold animate-pulse tracking-widest uppercase mb-12 flex h-full items-center justify-center">Loading 3D Engine...</div>}>
                <Spline
                  scene="https://prod.spline.design/JzJndxp7Vu6wC6ix/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </Suspense>
            </div>
          </div>

        </div>

        <div className="absolute bottom-12 left-6 md:left-12">
          <div className="flex flex-col gap-2 items-center">
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#10B981] to-transparent"></div>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          </div>
        </div>
      </section>

      {/* Core Business Areas Section */}
      <section className="px-6 py-24 md:py-32 relative bg-[#050C17] border-t border-white/5 relative z-30 shadow-2xl">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-[#10B981] uppercase mb-4">Core Business Areas</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">미래 산업을 선도하는 핵심 역량</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Area 1 */}
            <div className="bg-[#0A192F] border border-white/10 p-8 rounded-3xl hover:border-[#10B981]/50 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">식품 / 건강기능식품</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-light">최신 임상 데이터 트렌드에 맞춘 독자적인 기능성 원료 발굴 및 차별화된 영양학적 배합 설계</p>
            </div>

            {/* Area 2 */}
            <div className="bg-[#0A192F] border border-white/10 p-8 rounded-3xl hover:border-[#10B981]/50 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.288a2 2 0 01-1.647 0l-.628-.288a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V18.14a2 2 0 001.022 1.742l2.387 1.194a2 2 0 001.789 0l2.387-1.194a2 2 0 011.789 0l2.387 1.194a2 2 0 001.789 0l2.387-1.194a2 2 0 001.022-1.742v-2.712z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">화장품 기능성 소재</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-light">피부 과학 기반의 고효능성 코스메슈티컬 신소재 적용 및 프리미엄 더마 기능성 화장품 연구</p>
            </div>

            {/* Area 3 */}
            <div className="bg-[#0A192F] border border-white/10 p-8 rounded-3xl hover:border-[#10B981]/50 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">특허 기술 개발</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-light">선행 기술 및 시장 니즈 기반 지적 재산권(IP) 확보와 철저한 특허 회피 사업화 모델 구축</p>
            </div>

            {/* Area 4 */}
            <div className="bg-[#0A192F] border border-white/10 p-8 rounded-3xl hover:border-[#10B981]/50 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">제품 개발 (Turn-key)</h4>
              <p className="text-sm text-slate-400 leading-relaxed font-light">제품 디자인부터 엄격한 품질 관리(QC) 양산까지 완벽을 기하는 하이엔드 턴키 솔루션 제공</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proprietary Process (Value Chain) Section */}
      <section className="px-6 py-24 md:py-32 relative z-20"
        style={{ backgroundImage: `linear-gradient(to top, rgba(10, 25, 47, 1), rgba(10, 25, 47, 0.90)), url('/images/network-bg.jpg')`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24">
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-[#10B981] uppercase mb-4">Value Chain</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Proprietary Process</h3>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Step 01 */}
            <Link href="/process/strategy" className="col-span-1 md:col-span-2 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 md:p-12 rounded-[2rem] relative group overflow-hidden hover:bg-white/[0.05] transition-colors block">
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20">
                  <svg className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <span className="text-6xl md:text-8xl font-black text-white/5 tracking-tighter select-none">01</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-[#10B981] transition-colors">전략 및 특허 설계 &rarr;</h4>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light">데이터 기반 시장 분석 및 특허 회피 전략, 최적의 사업화 계획 수립</p>
            </Link>

            {/* Step 02 */}
            <Link href="/process/science" className="col-span-1 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-[2rem] flex flex-col justify-between hover:bg-white/[0.05] transition-colors aspect-square md:aspect-auto group block">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20 mb-8">
                  <svg className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.288a2 2 0 01-1.647 0l-.628-.288a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V18.14a2 2 0 001.022 1.742l2.387 1.194a2 2 0 001.789 0l2.387-1.194a2 2 0 011.789 0l2.387 1.194a2 2 0 001.789 0l2.387-1.194a2 2 0 001.022-1.742v-2.712z"></path>
                    <circle cx="12" cy="12" r="3" strokeWidth="1.5"></circle>
                  </svg>
                </div>
                <span className="text-4xl font-black text-white/5 tracking-tighter select-none block mb-4">02</span>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#10B981] transition-colors">과학적 배합 및 공정 &rarr;</h4>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">대한약사한림원 최신 기술 자문 적용, 독자적 공정 설계</p>
              </div>
            </Link>

            {/* Step 03 */}
            <Link href="/process/quality" className="col-span-1 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-[2rem] flex flex-col justify-between hover:bg-white/[0.05] transition-colors aspect-square md:aspect-auto group block">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20 mb-8">
                  <svg className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <span className="text-4xl font-black text-white/5 tracking-tighter select-none block mb-4">03</span>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#10B981] transition-colors">검증된 양산 및 QC &rarr;</h4>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">국내 최고 수준 제조 인프라 연계 및 공인시험성적서 확보</p>
              </div>
            </Link>

            {/* Step 04 */}
            <Link href="/process/branding" className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/20 p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row justify-between items-start md:items-center group hover:border-[#10B981]/40 transition-colors block">
              <div>
                <span className="text-4xl font-black text-[#10B981]/20 tracking-tighter select-none block mb-4">04</span>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-[#10B981] transition-colors">브랜드 런칭 &rarr;</h4>
                <p className="text-base md:text-lg text-slate-300 font-light max-w-xl">시장을 관통하는 제품 브랜딩 및 하이엔드 패키지 디자인</p>
              </div>
              <div className="w-16 h-16 rounded-full border border-[#10B981]/40 flex items-center justify-center group-hover:bg-[#10B981] group-hover:text-[#0A192F] text-[#10B981] transition-all duration-500 mt-8 md:mt-0 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Proof of Authority Section */}
      <section className="px-6 py-24 md:py-32 relative"
        style={{ backgroundImage: `linear-gradient(to top, rgba(10, 25, 47, 1), rgba(10, 25, 47, 0.85)), url('/images/pharmacy-academy.jpg')`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="text-[10px] font-bold tracking-[0.3em] text-[#10B981] uppercase mb-4">Authority</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Trust Network</h3>
          </div>

          <div className="space-y-6">
            {/* Hero Partner: 대한약사한림원 */}
            <div className="w-full bg-white/[0.03] backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] border-t-2 border-[#10B981]/40 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#10B981]/10 blur-[60px] pointer-events-none"></div>

              <div className="flex flex-col items-center text-center space-y-8 relative z-10">
                <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-500">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">대한약사한림원</h4>
                  <p className="text-[#10B981] text-xs md:text-sm font-bold tracking-widest uppercase">Premium Strategic Partner</p>
                </div>
                <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">최신 약학 기술 및 제형 연구 자문 (R&amp;D 정점)</p>
              </div>
            </div>

            {/* Sub Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sub Partner 1 */}
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors relative group h-full min-h-[240px]">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/40 group-hover:text-white transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.288a2 2 0 01-1.647 0l-.628-.288a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V18.14a2 2 0 001.022 1.742l2.387 1.194a2 2 0 001.789 0l2.387-1.194a2 2 0 011.789 0l2.387 1.194a2 2 0 001.789 0l2.387-1.194a2 2 0 001.022-1.742v-2.712z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">양산부산대학교병원</h5>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">임상적 효능 검증 및 의료급 R&amp;D 네트워크</p>
              </div>

              {/* Sub Partner 2 */}
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors relative group h-full min-h-[240px]">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/40 group-hover:text-white transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">코스맥스바이오 &amp; 한국씨엔에스팜</h5>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">글로벌 스탠다드 제조 인프라</p>
              </div>

              {/* Sub Partner 3 */}
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors relative group h-full min-h-[240px]">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/40 group-hover:text-white transition-colors duration-300">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h5 className="text-lg font-bold text-white mb-2">경남항노화연구원</h5>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">천연물 약용작물 기반 검증 및 인증 지원</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 md:py-40 bg-[#0A192F] relative overflow-hidden border-t border-white/[0.03]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Start the<br />Conversation</h2>
            <p className="text-slate-200 font-medium text-xl md:text-2xl mb-4 tracking-tight">미래를 설계할 마스터피스, 지금 문의하십시오.</p>
            <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 px-4 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <p className="text-[#10B981] text-sm md:text-base font-bold tracking-tight">
                담당 : 신상규 CTO (대한약사한림원 기술연구소 소장, 부산시 항노화정책위원)
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 md:py-24 border-t border-white/10 text-center bg-[#050C17]">
        <div className="mb-12 flex flex-col items-center">
          <div className="text-white font-black tracking-tighter text-4xl md:text-5xl lg:text-6xl mb-6">Chung Yoo Dam Inc.</div>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-400 mb-8 font-light leading-relaxed max-w-3xl">
            경남 양산시 물금읍 금오로20,<br />
            양산부산대학교병원 의생명창의연구동 218A호
          </p>
          <p className="text-sm md:text-base text-slate-500 uppercase tracking-widest font-bold">© 2026 CYD Bio-Innovation</p>
        </div>
        <div className="flex justify-center gap-8 text-slate-400">
          <button className="hover:text-[#10B981] transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </button>
          <button className="hover:text-[#10B981] transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </button>
        </div>
      </footer>

    </main>
  );
}
