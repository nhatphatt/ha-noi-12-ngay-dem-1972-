import React from "react";
import Section from "../components/Section";

const HanoiPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <div className="badge mx-auto mb-6">🏙️ HÀ NỘI 1972</div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
          HÀ NỘI <span className="gradient-text">"Mắt Bão"</span>
        </h1>
        <p className="text-2xl text-amber-400 font-semibold">
          Sự Sống Và Bản Lĩnh Dưới Mưa Bom
        </p>
      </div>

      <Section title="1. Tội ác chiến tranh: Khâm Thiên & Bạch Mai">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 not-prose">
          <div className="card-hover glass-effect p-8 rounded-2xl border-2 border-red-900/50">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💔</span>
              <h3 className="text-2xl font-bold text-amber-300">
                Phố Khâm Thiên
              </h3>
            </div>
            <div className="badge mb-4">📅 Đêm 26/12/1972</div>
            <div className="image-overlay mb-6">
              <img
                src="https://tse3.mm.bing.net/th/id/OIP.W6x9c2vuiABeWJ52rEO7EgHaFm?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Phố Khâm Thiên đổ nát"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              Đây là một hành động ném bom hủy diệt dân thường có chủ đích. Một
              dải bom B-52 (gồm 48 quả bom 500-1000 bảng Anh) đã được rải chính
              xác dọc con phố lao động.
              <span className="block mt-3 text-red-400 font-bold">
                287 người dân
              </span>
              (trong đó có 94 phụ nữ, 40 cụ già, 55 trẻ em) đã thiệt mạng. Cả
              con phố bị san phẳng, biến thành "hẻm núi" của gạch vụn và nỗi
              đau.
            </p>
          </div>
          <div className="card-hover glass-effect p-8 rounded-2xl border-2 border-red-900/50">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏥</span>
              <h3 className="text-2xl font-bold text-amber-300">
                Bệnh viện Bạch Mai
              </h3>
            </div>
            <div className="badge mb-4">📅 Đêm 22/12/1972</div>
            <div className="image-overlay mb-6">
              <img
                src="https://img.cand.com.vn/resize/800x800/NewFiles/Images/2022/12/23/6_benh_vien_bach_mai_bi_may_bay-1671765411045.jpeg"
                alt="Bệnh viện Bạch Mai bị tàn phá"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              Gần 100 quả bom trút xuống bệnh viện. Khoa Da liễu, Khoa Dược,
              Khoa Tai Mũi Họng bị san phẳng.
              <span className="block mt-3 text-red-400 font-bold">
                28 y bác sĩ, bệnh nhân thiệt mạng.
              </span>
              Nhưng ngay sáng hôm sau, giữa đống đổ nát, các y bác sĩ đã dựng
              lều bạt, đặt biển:
              <span className="block mt-2 text-amber-400 font-bold italic">
                "BỆNH VIỆN VẪN TIẾP TỤC LÀM VIỆC"
              </span>
              tiếp tục mổ, cấp cứu thương binh.
            </p>
          </div>
        </div>
      </Section>

      <Section title='2. "Thành phố chiến đấu": Cuộc sống trong lòng đất'>
        <div className="bg-gradient-to-r from-amber-900/20 to-red-900/20 p-6 rounded-xl border-l-4 border-amber-500 mb-8 not-prose">
          <p className="text-lg text-slate-200 font-semibold">
            <span className="text-amber-400">Hà Nội không bất ngờ:</span> Hàng
            chục vạn người đã sơ tán. Hà Nội còn lại là "thành phố của những
            người chiến đấu".
          </p>
        </div>

        <div className="space-y-8 not-prose">
          <div className="timeline-item">
            <div className="glass-effect p-6 rounded-xl">
              <h4 className="text-2xl font-bold text-amber-300 mb-3 flex items-center gap-3">
                <span>🛡️</span> Hầm trú ẩn
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                Hàng vạn hầm trú ẩn cá nhân (hầm "chữ A") được đào khắp vỉa hè.
                Hầm trú ẩn tập thể trở thành "làng" dưới lòng đất. Khi còi báo
                động vang lên, cả thành phố nhanh chóng "biến mất" xuống lòng
                đất.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="glass-effect p-6 rounded-xl">
              <h4 className="text-2xl font-bold text-amber-300 mb-3 flex items-center gap-3">
                <span>🎵</span> "Tiếng hát át tiếng bom"
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                Ngay trong những ngày căng thẳng nhất, các đoàn văn công, nghệ
                sĩ (như Trần Hiếu, Thanh Hoa...) vẫn biểu diễn tại trận địa,
                trong nhà máy để cổ vũ tinh thần chiến đấu.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="glass-effect p-6 rounded-xl">
              <h4 className="text-2xl font-bold text-amber-300 mb-3 flex items-center gap-3">
                <span>⚔️</span> "Tay súng tay búa"
              </h4>
              <p className="text-slate-300 text-lg leading-relaxed">
                Các "Tổ đội tự vệ" (gồm công nhân, dân quân) trực chiến trên các
                nóc nhà, nhà máy (như Nhà máy dệt 8/3, Nhà máy Cơ khí Trần Hưng
                Đạo). Họ dùng súng 12.7mm, 14.5mm tạo thành lưới lửa tầm thấp,
                góp phần bắn hạ máy bay F-111 và bảo vệ các trận địa tên lửa.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
          <div className="image-overlay">
            <img
              src="https://th.bing.com/th/id/R.076a417cc64cd8ad63b362a6f70617a1?rik=upDU72I4lKIAmA&riu=http%3a%2f%2fsovhtt.hanoi.gov.vn%2fwp-content%2fuploads%2f2020%2f11%2fcollage-photocat.jpg&ehk=KtMjt0HnvubJZj3%2b3qXIcnih06XjONBaaiLta9ql9bA%3d&risl=&pid=ImgRaw&r=0"
              alt="Hầm trú ẩn chữ A"
              className="rounded-2xl object-cover w-full h-64 shadow-lg"
            />
          </div>
          <div className="image-overlay">
            <img
              src="https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/dataimages/201404/original/images945615_4_Dien_Bien_Phu.jpg"
              alt="Văn công biểu diễn"
              className="rounded-2xl object-cover w-full h-64 shadow-lg"
            />
          </div>
          <div className="image-overlay">
            <img
              src="http://mod.gov.vn/wcm/connect/33b4af7e-93df-4b6a-a4ff-c0930e3f0f5b/1/image001.jpg?MOD=AJPERES"
              alt="Tự vệ trực chiến"
              className="rounded-2xl object-cover w-full h-64 shadow-lg"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HanoiPage;
