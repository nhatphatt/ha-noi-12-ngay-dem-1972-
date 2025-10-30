import React from "react";
import { Page } from "../types";
import Section from "../components/Section";

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const navButtons: { page: Page; label: string; description: string }[] = [
  {
    page: "CONTEXT",
    label: "Bối Cảnh Lịch Sử",
    description: "Vì sao có Linebacker II?",
  },
  {
    page: "DIARY",
    label: "Nhật Ký 12 Ngày Đêm",
    description: "Diễn biến chi tiết từng trận đánh.",
  },
  {
    page: "HANOI",
    label: 'Hà Nội "Mắt Bão"',
    description: "Sự sống và Tội ác chiến tranh.",
  },
  {
    page: "ANALYSIS",
    label: "Giải Mã Kỳ Tích",
    description: '"Cách đánh B-52" và Tầm vóc lịch sử.',
  },
  {
    page: "TOUR",
    label: "Hành Trình Trải Nghiệm",
    description: "Theo dấu B-52 tại Hà Nội hôm nay.",
  },
  {
    page: "LIBRARY",
    label: "Thư Viện & Chứng Nhân",
    description: "Hình ảnh, thước phim và tiếng nói.",
  },
];

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <div className="space-y-20">
      <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl -z-10">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <div className="badge mb-4 pulse-glow">🎖️ CHIẾN THẮNG LỊCH SỬ</div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl mb-4 leading-tight">
            HÀ NỘI <span className="gradient-text">12 NGÀY ĐÊM</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-amber-400 font-bold drop-shadow-lg mb-6">
            "ĐIỆN BIÊN PHỦ TRÊN KHÔNG" 1972
          </h2>
          <p className="mt-4 max-w-4xl text-slate-200 md:text-xl leading-relaxed font-medium">
            Hành trình khám phá nơi "Pháo đài bay B-52" gãy cánh, nơi ý chí, trí
            tuệ và lòng dũng cảm của Việt Nam toả sáng, làm thay đổi cục diện
            Chiến tranh.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button onClick={() => navigateTo("DIARY")} className="btn-primary">
              🔥 Khám phá ngay
            </button>
            <button
              onClick={() => navigateTo("TOUR")}
              className="glass-effect px-8 py-3 rounded-lg font-semibold hover:bg-slate-700/70 transition-all"
            >
              📍 Hành trình Di tích
            </button>
          </div>
        </div>
      </div>

      <Section title="12 NGÀY ĐÊM THAY ĐỔI LỊCH SỬ">
        <p>
          Tháng 12 năm 1972, Tổng thống Mỹ Richard Nixon đã mở chiến dịch quân
          sự "Linebacker II" - một cuộc tập kích đường không chiến lược quy mô
          lớn nhất kể từ Thế chiến II, với mục tiêu "đưa Hà Nội về thời kỳ đồ
          đá" nhằm ép Việt Nam ký vào Hiệp định Paris theo các điều khoản của
          Mỹ.
        </p>
        <p>
          Huy động gần 200 "siêu pháo đài bay" B-52 (gần 50% tổng số B-52 của
          Mỹ) và hơn 1.000 máy bay chiến thuật, Mỹ đã trút hàng chục ngàn tấn
          bom xuống Hà Nội, Hải Phòng và các tỉnh lân cận.
        </p>
        <p>
          Nhưng trong 12 ngày đêm (từ 18/12 đến 29/12), bằng một cuộc chiến đấu
          "thần thánh", quân và dân ta đã đập tan cuộc tập kích. 81 máy bay các
          loại, trong đó có 34 chiếc B-52, đã bị bắn rơi. Lần đầu tiên trong
          lịch sử, "biểu tượng sức mạnh" của không lực Hoa Kỳ đã bị đánh bại.
        </p>
        <p>
          Chiến thắng này được thế giới gọi là "Điện Biên Phủ trên không", buộc
          Mỹ phải ngừng ném bom vô điều kiện và chấp nhận ký Hiệp định Paris,
          rút quân về nước.
        </p>
        <p>
          Trang web này là một hành trình trải nghiệm, đưa bạn trở lại những
          ngày đêm lịch sử đó, không chỉ để tìm hiểu về các số liệu, mà để cảm
          nhận được:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4 text-amber-300">
          <li>
            <strong>Trí tuệ:</strong> Làm thế nào chúng ta "vạch nhiễu" tìm
            B-52?
          </li>
          <li>
            <strong>Bản lĩnh:</strong> Người Hà Nội đã sống và chiến đấu ra sao
            dưới mưa bom?
          </li>
          <li>
            <strong>Tầm vóc:</strong> Vì sao đây lại là một "Điện Biên Phủ" thứ
            hai?
          </li>
        </ul>
      </Section>

      <section>
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black text-white mb-4">
            Khám Phá <span className="gradient-text">Hành Trình</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Hãy bắt đầu cuộc hành trình khám phá lịch sử vẻ vang của dân tộc
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navButtons.map(({ page, label, description }, index) => {
            const icons = ["📜", "📖", "🏙️", "🔍", "🗺️", "📚"];
            return (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                className="card-hover glass-effect p-8 rounded-2xl text-left border border-slate-700/50 shadow-xl group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {icons[index]}
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-amber-400 mb-3 transition-colors">
                  {label}
                </h4>
                <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                  {description}
                </p>
                <div className="mt-6 flex items-center text-amber-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Tìm hiểu thêm <span className="ml-2">→</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
