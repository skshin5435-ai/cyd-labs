"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    product: '',
    proposal: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ company: '', name: '', email: '', product: '', proposal: '', password: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-10" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="group relative">
          <label className="absolute -top-6 left-0 text-[10px] md:text-xs font-bold text-[#10B981] tracking-widest uppercase opacity-60 group-focus-within:opacity-100 transition-opacity">Company</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-slate-800 focus:border-[#10B981] transition-colors py-4 px-0 text-lg font-light text-white outline-none placeholder-slate-700"
            placeholder="회사명"
            required
          />
        </div>
        <div className="group relative">
          <label className="absolute -top-6 left-0 text-[10px] md:text-xs font-bold text-[#10B981] tracking-widest uppercase opacity-60 group-focus-within:opacity-100 transition-opacity">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-slate-800 focus:border-[#10B981] transition-colors py-4 px-0 text-lg font-light text-white outline-none placeholder-slate-700"
            placeholder="담당자 성함"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="group relative">
          <label className="absolute -top-6 left-0 text-[10px] md:text-xs font-bold text-[#10B981] tracking-widest uppercase opacity-60 group-focus-within:opacity-100 transition-opacity">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-slate-800 focus:border-[#10B981] transition-colors py-4 px-0 text-lg font-light text-white outline-none placeholder-slate-700"
            placeholder="이메일 주소"
            type="email"
            required
          />
        </div>
        <div className="group relative">
          <label className="absolute -top-6 left-0 text-[10px] md:text-xs font-bold text-[#10B981] tracking-widest uppercase opacity-60 group-focus-within:opacity-100 transition-opacity">Product</label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-slate-800 focus:border-[#10B981] transition-colors py-4 px-0 text-lg font-light text-white outline-none appearance-none cursor-pointer"
            required
          >
            <option value="" disabled className="bg-[#0A192F]">의뢰 제품 선택</option>
            <option value="Bio-Active Compounds" className="bg-[#0A192F]">Bio-Active Compounds</option>
            <option value="Clinical Turnkey" className="bg-[#0A192F]">Clinical Turnkey</option>
            <option value="R&D Consulting" className="bg-[#0A192F]">R&D Consulting</option>
            <option value="Other" className="bg-[#0A192F]">기타 문의</option>
          </select>
        </div>
      </div>

      <div className="group relative">
        <label className="absolute -top-6 left-0 text-[10px] md:text-xs font-bold text-[#10B981] tracking-widest uppercase opacity-60 group-focus-within:opacity-100 transition-opacity">Proposal</label>
        <textarea
          name="proposal"
          value={formData.proposal}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-slate-800 focus:border-[#10B981] transition-colors py-4 px-0 text-lg font-light text-white outline-none placeholder-slate-700 resize-none"
          placeholder="제안 내용 및 프로젝트 개요"
          rows={4}
          required
        ></textarea>
      </div>

      <div className="group relative">
        <label className="absolute -top-6 left-0 text-[10px] md:text-xs font-bold text-[#10B981] tracking-widest uppercase opacity-60 group-focus-within:opacity-100 transition-opacity">Password</label>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          className="w-full bg-transparent border-b border-slate-800 focus:border-[#10B981] transition-colors py-4 px-0 text-lg font-light text-white outline-none placeholder-slate-700"
          placeholder="비밀번호 설정 (상태 확인 시 필요)"
          required
        />
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full md:w-auto md:px-16 h-16 rounded-full font-bold text-lg transition-all duration-300 ${
            isSubmitting ? 'bg-slate-800 text-slate-500' : 'bg-white text-[#0A192F] hover:bg-[#10B981]'
          }`}
        >
          {isSubmitting ? '전송 중...' : '제안서 보내기'}
        </button>
        {status === 'success' && (
          <p className="text-[#10B981] font-bold">제안서가 성공적으로 등록되었습니다. 게시판에서 확인하실 수 있습니다.</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 font-bold">전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
        )}
      </div>
    </form>
  );
}
