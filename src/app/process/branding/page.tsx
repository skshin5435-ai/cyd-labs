export default function BrandingPage() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#10B981]">브랜드 런칭</h1>
        <p className="text-lg text-slate-300">
          시장을 관통하는 제품 브랜딩 및 하이엔드 패키지 디자인을 통해<br/>
          당신의 아이디어를 최종 마스터피스로 승화시킵니다.
        </p>
        <a href="/" className="inline-block mt-8 text-sm font-bold tracking-widest uppercase border-b border-[#10B981] pb-1 text-[#10B981] hover:text-white transition-colors">
          메인으로 돌아가기
        </a>
      </div>
    </main>
  );
}
