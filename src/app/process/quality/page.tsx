export default function QualityPage() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#10B981]">검증된 양산 및 QC</h1>
        <p className="text-lg text-slate-300">
          국내 최고 수준 제조 인프라 연계 및 공인시험성적서 확보로<br/>
          안전하고 검증된 스케일업 생산을 보장합니다.
        </p>
        <a href="/" className="inline-block mt-8 text-sm font-bold tracking-widest uppercase border-b border-[#10B981] pb-1 text-[#10B981] hover:text-white transition-colors">
          메인으로 돌아가기
        </a>
      </div>
    </main>
  );
}
