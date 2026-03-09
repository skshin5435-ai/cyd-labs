export default function SciencePage() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#10B981]">과학적 배합 및 공정</h1>
        <p className="text-lg text-slate-300">
          대한약사한림원 최신 기술 자문 적용 및 독자적 공정 설계를 통해<br/>
          압도적인 제품의 품질을 결정하는 단계입니다.
        </p>
        <a href="/" className="inline-block mt-8 text-sm font-bold tracking-widest uppercase border-b border-[#10B981] pb-1 text-[#10B981] hover:text-white transition-colors">
          메인으로 돌아가기
        </a>
      </div>
    </main>
  );
}
