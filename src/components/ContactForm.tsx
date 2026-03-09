"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    proposal: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(`[프로젝트 제안] ${formData.company} - ${formData.name}님의 문의`);
    const body = encodeURIComponent(
      `회사명: ${formData.company}\n` +
      `담당자: ${formData.name}\n` +
      `회신 이메일: ${formData.email}\n\n` +
      `제안 내용:\n${formData.proposal}`
    );
    window.location.href = `mailto:skshin5435@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <div className="group relative">
        <label className="absolute -top-6 left-0 text-[10px] md:text-xs font-bold text-[#10B981] tracking-widest uppercase opacity-60 group-focus-within:opacity-100 transition-opacity">Company</label>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-slate-800 focus:border-[#10B981] transition-colors py-4 px-0 text-lg md:text-xl font-light text-white outline-none placeholder-slate-700"
          placeholder="회사명"
          type="text"
          required
        />
      </div>
      <div className="group relative">
        <label className="absolute -top-6 left-0 text-[10px] md:text-xs font-bold text-[#10B981] tracking-widest uppercase opacity-60 group-focus-within:opacity-100 transition-opacity">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-slate-800 focus:border-[#10B981] transition-colors py-4 px-0 text-lg md:text-xl font-light text-white outline-none placeholder-slate-700"
          placeholder="담당자 성함"
          type="text"
          required
        />
      </div>
      <div className="group relative">
        <label className="absolute -top-6 left-0 text-[10px] md:text-xs font-bold text-[#10B981] tracking-widest uppercase opacity-60 group-focus-within:opacity-100 transition-opacity">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-slate-800 focus:border-[#10B981] transition-colors py-4 px-0 text-lg md:text-xl font-light text-white outline-none placeholder-slate-700"
          placeholder="이메일 주소"
          type="email"
          required
        />
      </div>
      <div className="group relative">
        <label className="absolute -top-6 left-0 text-[10px] md:text-xs font-bold text-[#10B981] tracking-widest uppercase opacity-60 group-focus-within:opacity-100 transition-opacity">Proposal</label>
        <textarea
          name="proposal"
          value={formData.proposal}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-slate-800 focus:border-[#10B981] transition-colors py-4 px-0 text-lg md:text-xl font-light text-white outline-none placeholder-slate-700 resize-none"
          placeholder="제안 내용 및 프로젝트 개요"
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full md:w-auto md:px-16 h-16 bg-white text-[#0A192F] font-bold text-lg rounded-full hover:bg-[#10B981] transition-all duration-300 mt-8"
      >
        제안서 보내기
      </button>
    </form>
  );
}
