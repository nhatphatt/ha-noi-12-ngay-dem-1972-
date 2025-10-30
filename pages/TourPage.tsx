import React from "react";
import Section from "../components/Section";
import InteractiveMap from "../components/InteractiveMap";

const TourPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <div className="badge mx-auto mb-6">🗺️ HÀNH TRÌNH LỊCH SỬ</div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
          THEO DẤU <span className="gradient-text">B-52</span> TẠI HÀ NỘI
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Khám phá những địa điểm đã đi vào lịch sử trong 12 ngày đêm khói lửa
        </p>
      </div>

      <Section
        title="Bản đồ Tương tác"
        subtitle="Nhấn vào các marker để khám phá câu chuyện lịch sử"
      >
        <div className="bg-gradient-to-r from-amber-900/20 to-red-900/20 p-6 rounded-xl border-l-4 border-amber-500 mb-6 not-prose">
          <p className="text-lg text-slate-200">
            Hơn 50 năm đã trôi qua, Hà Nội đã thay đổi rất nhiều, nhưng những
            dấu tích của cuộc chiến vẫn còn đó. Bản đồ này sẽ đưa bạn đến những
            địa điểm quan trọng, từ nơi B-52 rơi, nơi hứng chịu bom đạn, đến
            những nơi trưng bày các hiện vật chiến tranh.
          </p>
          <p className="text-amber-400 font-semibold mt-3 italic">
            💡 Đây không chỉ là một chuyến tham quan, mà là một hành trình để
            cảm nhận và ghi nhớ.
          </p>
        </div>
      </Section>

      <div className="mt-10">
        <InteractiveMap />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="glass-effect p-6 rounded-2xl border border-amber-500/30 text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-amber-400 mb-2">6 Địa Điểm</h3>
          <p className="text-slate-400">Các điểm đánh dấu lịch sử quan trọng</p>
        </div>
        <div className="glass-effect p-6 rounded-2xl border border-red-500/30 text-center">
          <div className="text-4xl mb-4">📸</div>
          <h3 className="text-xl font-bold text-red-400 mb-2">Hình Ảnh</h3>
          <p className="text-slate-400">Tư liệu và ảnh chụp thực tế</p>
        </div>
        <div className="glass-effect p-6 rounded-2xl border border-blue-500/30 text-center">
          <div className="text-4xl mb-4">📖</div>
          <h3 className="text-xl font-bold text-blue-400 mb-2">Câu Chuyện</h3>
          <p className="text-slate-400">Chi tiết lịch sử từng địa điểm</p>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
