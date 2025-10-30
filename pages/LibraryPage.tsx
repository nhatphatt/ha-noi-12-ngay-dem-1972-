import React from "react";
import Section from "../components/Section";

const QuoteCard: React.FC<{
  author: string;
  children: React.ReactNode;
  affiliation: string;
}> = ({ author, children, affiliation }) => (
  <blockquote className="card-hover glass-effect p-8 rounded-2xl border-l-4 border-red-600 shadow-xl">
    <div className="text-5xl text-amber-500 mb-4">"</div>
    <p className="italic text-slate-200 text-lg leading-relaxed mb-6">
      {children}
    </p>
    <footer className="flex items-center justify-between border-t border-slate-700 pt-4">
      <div>
        <cite className="font-bold text-amber-300 not-italic text-xl block">
          {author}
        </cite>
        <span className="text-sm text-slate-400 mt-1 block">{affiliation}</span>
      </div>
      <div className="text-3xl opacity-50">💬</div>
    </footer>
  </blockquote>
);

const PhotoAlbum: React.FC<{
  title: string;
  images: string[];
  description?: string;
}> = ({ title, images, description }) => (
  <div className="glass-effect p-6 rounded-2xl border border-slate-700/50">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-2xl">📸</span>
      <h3 className="text-2xl font-bold text-amber-300">{title}</h3>
    </div>
    {description && <p className="text-slate-400 mb-4 italic">{description}</p>}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <div key={index} className="image-overlay">
          <img
            src={src}
            alt={`${title} - ảnh ${index + 1}`}
            className="rounded-xl object-cover w-full h-48 shadow-lg hover:opacity-90 transition-all"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
);

const LibraryPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <div className="badge mx-auto mb-6">📚 THƯ VIỆN LỊCH SỬ</div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
          <span className="gradient-text">HÌNH ẢNH</span> & TIẾNG NÓI
        </h1>
        <p className="text-2xl text-amber-400 font-semibold">
          Từ Quá Khứ Vẻ Vang
        </p>
      </div>

      <Section title="1. Album ảnh lịch sử">
        <div className="space-y-8 not-prose">
          <PhotoAlbum
            title="Hà Nội trong chiến tranh"
            description="Những khoảnh khắc lịch sử về Thủ đô anh hùng"
            images={[
              "https://cdn.petrotimes.vn/stores/news_dataimages/2023/122023/09/07/7-170197101737520231209072724.9978500.jpg",
              "https://cdn.petrotimes.vn/stores/news_dataimages/2023/122023/09/07/9-170197101733820231209072725.7204580.jpg",
              "https://cdn.petrotimes.vn/stores/news_dataimages/2023/122023/09/07/8-170197101732120231209072725.3497790.jpg",
            ]}
          />
          <PhotoAlbum
            title="Trận địa phòng không"
            description="Hệ thống phòng không bảo vệ bầu trời Thủ đô"
            images={[
              "https://cdn.petrotimes.vn/stores/news_dataimages/2023/122023/09/07/10-170197101763220231209072726.0499560.jpg",
              "https://th.bing.com/th/id/R.16c843888aa3e264b1733fd80fe4d614?rik=QNvahct%2bmLOwJg&riu=http%3a%2f%2fquocphongthudo.vn%2fupload%2f2001606%2ffck%2fhaiyennguyen.qptd%2fUntitled(52).png&ehk=vcf5Gb97HslG%2foOlEPoGdD8h0%2bZWdi36V5uXVg1%2fvvY%3d&risl=&pid=ImgRaw&r=0",
              "https://media.hanamtv.vn/upload/image/202205/medium/75028_2e239c6e836e0a8cf964126c78094717.jpg",
            ]}
          />
          <PhotoAlbum
            title="B-52 bị bắn rơi"
            description="Những chiến tích lịch sử - biểu tượng chiến thắng"
            images={[
              "https://th.bing.com/th/id/R.6a62889cca318c9282d17b260312cddd?rik=gzpD52fEW567cg&pid=ImgRaw&r=0",
              "https://th.bing.com/th/id/R.f64e99994b28ade81891676447e680d4?rik=2FbE32USwRceXw&pid=ImgRaw&r=0",
              "https://cdn.vovlive.vn/2022/12/27/media.vov.vn-sites-default-files-styles-large-public-2022-12-_xac_b-52_bi_ban_roi_dem_26-12.jpg",
            ]}
          />
        </div>
      </Section>

      <Section title="2. Video & Phim tài liệu">
        <p className="mb-6 text-lg">
          Xem các thước phim tư liệu quý giá để cảm nhận không khí lịch sử:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
          <a
            href="https://www.youtube.com/watch?v=zeBifINvYYE"
            className="card-hover glass-effect p-6 rounded-2xl border border-slate-700/50 text-center group block"
          >
            <div className="text-5xl mb-4">🎬</div>
            <h4 className="text-red-400 group-hover:text-amber-400 font-bold text-lg mb-2 transition-colors">
              HÀ NỘI 12 NGÀY ĐÊM
            </h4>
            <p className="text-slate-400 text-sm">"Bản HÙNG CA lịch sử"</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=JGTpBZuaO_Y"
            className="card-hover glass-effect p-6 rounded-2xl border border-slate-700/50 text-center group block"
          >
            <div className="text-5xl mb-4">🎙️</div>
            <h4 className="text-red-400 group-hover:text-amber-400 font-bold text-lg mb-2 transition-colors">
              Ký sự lịch sử
            </h4>
            <p className="text-slate-400 text-sm">
              Vũ Xuân Thiều - người anh hùng đã tự biến mình thành quả tên lửa thứ 3 trên bầu trời , diệt B52
            </p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=7fwAZD3-V3s"
            className="card-hover glass-effect p-6 rounded-2xl border border-slate-700/50 text-center group block"
          >
            <div className="text-5xl mb-4">📹</div>
            <h4 className="text-red-400 group-hover:text-amber-400 font-bold text-lg mb-2 transition-colors">
              Diễn Biến
            </h4>
            <p className="text-slate-400 text-sm">
              DIỄN BIẾN 12 NGÀY ĐÊM TRẬN ĐIỆN BIÊN PHỦ TRÊN KHÔNG
            </p>
          </a>
        </div>
      </Section>

      <Section title="3. Tiếng nói Chứng nhân">
        <div className="space-y-8">
          <QuoteCard
            author="Đại tướng Võ Nguyên Giáp"
            affiliation="Phía Việt Nam"
          >
            Chiến thắng Điện Biên Phủ trên không là một chiến thắng của sức mạnh
            chính trị, tinh thần của toàn dân tộc Việt Nam, là chiến thắng của
            trí tuệ Việt Nam.
          </QuoteCard>
          <QuoteCard
            author="Tổng thống Mỹ Richard Nixon"
            affiliation="Phía Hoa Kỳ (ghi trong Hồi ký)"
          >
            Sự lo lắng của tôi không phải là các cuộc biểu tình phản đối ở trong
            nước nữa, mà chính là sự tổn thất về B-52. Con số B-52 bị bắn rơi
            mỗi ngày là quá cao.
          </QuoteCard>
          <QuoteCard
            author="Đại tá James R. McCarthy"
            affiliation="Phi công B-52 bị bắt"
          >
            Tôi đã bay ở nhiều nơi, nhưng chưa thấy ở đâu có hỏa lực phòng không
            dày đặc, hiệu quả và có tổ chức như ở Hà Nội. Đối với tôi, đây là
            địa ngục.
          </QuoteCard>
        </div>
      </Section>
    </div>
  );
};

export default LibraryPage;
