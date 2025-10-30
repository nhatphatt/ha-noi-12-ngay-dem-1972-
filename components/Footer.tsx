import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-amber-500"></div>
              <span className="text-3xl">🕊️</span>
              <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
          </div>

          <blockquote className="text-lg md:text-xl text-amber-400 font-semibold italic mb-6 leading-relaxed">
            "Bản hùng ca 12 ngày đêm đã lùi xa, nhưng tầm vóc của nó vẫn còn
            mãi."
          </blockquote>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
            Trang web này được lập nên với lòng thành kính, tri ân những người
            đã chiến đấu và ngã xuống vì bầu trời bình yên của Tổ quốc.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-red-500">❤️</span>
              <span>Tưởng nhớ các anh hùng</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500">⭐</span>
              <span>Tự hào dân tộc</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">🌿</span>
              <span>Hòa bình & Độc lập</span>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-600">
              © 2025 Hà Nội 12 Ngày Đêm • Lịch sử để nhớ, không để quên
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
