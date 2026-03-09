"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Lock, ChevronRight, Calendar, Building2, Beaker } from 'lucide-react';

interface ProposalMetadata {
  id: number;
  company: string;
  product: string;
  created_at: string;
}

export default function BoardPage() {
  const [proposals, setProposals] = useState<ProposalMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [password, setPassword] = useState('');
  const [detail, setDetail] = useState<any>(null);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/proposals')
      .then(res => res.json())
      .then(data => {
        setProposals(data);
        setLoading(false);
      });
  }, []);

  const handleVerify = async () => {
    setVerifying(true);
    setError('');
    try {
      const res = await fetch(`/api/proposals/${selectedId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const result = await res.json();
      if (result.success) {
        setDetail(result.data);
      } else {
        setError('비밀번호가 일치하지 않습니다.');
      }
    } catch (err) {
      setError('오류가 발생했습니다.');
    } finally {
      setVerifying(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A192F] text-slate-100 font-sans selection:bg-[#10B981] selection:text-[#0A192F] pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-[#10B981] hover:text-white transition-colors mb-4 inline-block text-sm font-bold tracking-widest uppercase">← Back to Home</Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Proposal Board</h1>
          <p className="text-slate-400 text-lg">제안하신 프로젝트의 예약 상태와 내용을 확인하실 수 있습니다.</p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#10B981]"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {proposals.map((item) => (
              <div 
                key={item.id}
                onClick={() => { setSelectedId(item.id); setDetail(null); setPassword(''); setError(''); }}
                className="group bg-[#112240] hover:bg-[#1d3359] border border-white/5 p-6 rounded-2xl transition-all duration-300 cursor-pointer flex justify-between items-center"
              >
                <div className="flex gap-6 items-center">
                  <div className="bg-[#10B981]/10 p-4 rounded-xl">
                    <Calendar className="w-6 h-6 text-[#10B981]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-bold text-[#10B981]">{new Date(item.created_at).toLocaleDateString()}</span>
                      <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                      <span className="text-sm text-slate-400">{item.product}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-[#10B981] transition-colors">{item.company}</h3>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-[#10B981] transform group-hover:translate-x-1 transition-all" />
              </div>
            ))}
            {proposals.length === 0 && (
              <div className="text-center py-20 bg-[#112240] rounded-3xl border border-dashed border-white/10">
                <p className="text-slate-500">등록된 제안서가 없습니다.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0A192F]/90 backdrop-blur-md" onClick={() => setSelectedId(null)}></div>
          <div className="relative bg-[#112240] border border-white/10 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 md:p-12">
              {!detail ? (
                <div className="text-center">
                  <div className="bg-[#10B981]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-10 h-10 text-[#10B981]" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Password Protected</h2>
                  <p className="text-slate-400 mb-8">내용을 확인하기 위해 제안 시 설정한 비밀번호를 입력해 주세요.</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                    className="w-full bg-[#1A2C4E] border border-white/5 focus:border-[#10B981] transition-colors py-4 px-6 rounded-2xl text-lg outline-none mb-4 text-center tracking-widest"
                    placeholder="••••••••"
                    autoFocus
                  />
                  {error && <p className="text-red-500 mb-4 font-bold">{error}</p>}
                  <button
                    onClick={handleVerify}
                    disabled={verifying}
                    className="w-full bg-[#10B981] hover:bg-[#0ea371] text-[#0A192F] font-bold py-4 rounded-2xl transition-all"
                  >
                    {verifying ? '확인 중...' : '비밀번호 확인'}
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-6 flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-black tracking-tighter text-white mb-2">{detail.company}</h2>
                      <p className="text-[#10B981] font-bold">{detail.name} 담당자님</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-500 block mb-1 uppercase tracking-widest">Date</span>
                      <span className="text-sm font-bold text-white">{new Date(detail.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <span className="text-xs font-bold text-slate-500 block mb-2 uppercase tracking-widest text-[#10B981]">Contact</span>
                      <p className="text-white font-medium">{detail.email}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 block mb-2 uppercase tracking-widest text-[#10B981]">Product</span>
                      <p className="text-white font-medium">{detail.product}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500 block mb-4 uppercase tracking-widest text-[#10B981]">Proposal Content</span>
                    <div className="bg-[#1A2C4E] p-6 rounded-2xl text-slate-300 leading-relaxed whitespace-pre-wrap">
                      {detail.proposal}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedId(null)}
                    className="w-full border border-white/10 hover:bg-white/5 py-4 rounded-2xl transition-all font-bold text-slate-400"
                  >
                    닫기
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
