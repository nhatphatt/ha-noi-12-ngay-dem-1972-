
import React from 'react';

interface TimelineItemProps {
  title: string;
  date: string;
  children: React.ReactNode;
  isFirst?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, children, isFirst }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    {!isFirst && <div className="absolute left-0 w-px h-full bg-slate-700 sm:left-20 top-0"></div>}
    <div className="absolute left-0 w-px h-full bg-slate-700 sm:left-20"></div>
    <div className="absolute w-4 h-4 bg-red-600 rounded-full left-[-8px] sm:left-[72px] mt-1 z-10 border-2 border-slate-900 group-hover:bg-amber-400 transition-colors"></div>
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg group-hover:shadow-red-900/50 transition-shadow">
      <time className="sm:absolute right-full sm:mr-12 text-sm text-amber-400 mb-2 sm:mb-0">{date}</time>
      <h3 className="text-xl font-bold text-red-500 mb-2">{title}</h3>
      <div className="prose prose-sm prose-invert max-w-none prose-p:text-slate-300 prose-ul:list-disc prose-ul:ml-6 prose-li:my-1">{children}</div>
    </div>
  </div>
);

const DiaryPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
        TÁI HIỆN CHI TIẾT 12 NGÀY ĐÊM KHÓI LỬA
      </h1>
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-amber-300 text-center py-4 border-y-2 border-slate-700">Giai đoạn 1: Đòn phủ đầu & Cú sốc đầu tiên cho Washington (18/12 - 20/12)</h2>
        <TimelineItem title="ĐÊM 18/12: Mở Màn Lịch Sử" date="18/12" isFirst>
          <ul>
            <li><strong>19h10:</strong> Còi báo động toàn thành phố.</li>
            <li><strong>19h40:</strong> Mỹ huy động 90 lần chiếc B-52 (chia 3 đợt) ném bom Sân bay Nội Bài, Gia Lâm, Đông Anh, Yên Viên...</li>
            <li><strong>20h13 (Giờ Lịch sử):</strong> Tiểu đoàn tên lửa 59 (Trung đoàn 261) từ trận địa Yên Viên, bằng phương pháp "vạch nhiễu", đã phóng 2 quả đạn SAM-2.</li>
            <li><strong>Kết quả:</strong> Một chiếc B-52D bốc cháy, rơi tại chỗ ở Cánh Đồng Chuôm (Yên Viên). Đây là chiếc B-52 đầu tiên bị bắn hạ tại chỗ trên bầu trời Hà Nội.</li>
            <li><strong>Tổng kết đêm:</strong> 3 B-52 bị bắn rơi. Cú sốc lớn cho Lầu Năm Góc.</li>
          </ul>
        </TimelineItem>
        <TimelineItem title="ĐÊM 19/12: Tiếp tục giáng trả" date="19/12">
            <p>Mỹ tiếp tục sử dụng B-52 đánh cường độ cao. Ta tiếp tục bắn rơi 2 B-52.</p>
        </TimelineItem>
        <TimelineItem title='ĐÊM 20/12: "Mẻ lưới" tên lửa lớn nhất' date="20/12">
            <p>Mỹ thay đổi chiến thuật, đánh từ nhiều hướng (Tây Bắc, Tây Nam) với 99 lần chiếc B-52. Ta đã dự đoán được và tổ chức "mẻ lưới" đón lõng.</p>
            <p><strong>Kết quả:</strong> Một đêm chiến thắng rực rỡ. Ta bắn hạ 7 chiếc B-52 (tỷ lệ B-52 bị bắn rơi lên đến 10%).</p>
            <p><strong>Tác động:</strong> Nixon "choáng váng". Chiến dịch bị đe dọa phá sản.</p>
        </TimelineItem>

        <h2 className="text-2xl font-bold text-amber-300 text-center py-4 border-y-2 border-slate-700">Giai đoạn 2: Tội ác chiến tranh và 36 giờ "Vàng" (21/12 - 24/12)</h2>
        <TimelineItem title="ĐÊM 21/12 & 22/12: Chuyển Hướng và Tội Ác" date="21-22/12">
            <p>Sau tổn thất nặng nề, Mỹ giảm số lượng B-52 đánh Hà Nội, chuyển hướng đánh Hải Phòng, Thái Nguyên và dùng F-111 (Cánh cụp cánh xòe) đánh "lẻ" vào Hà Nội.</p>
            <p><strong>Tội ác:</strong> Rạng sáng 22/12, B-52 ném bom rải thảm trúng Bệnh viện Bạch Mai, một cơ sở y tế dân sự, làm 28 y bác sĩ và bệnh nhân thiệt mạng.</p>
        </TimelineItem>
        <TimelineItem title='NGÀY 24/12 (Lễ Giáng Sinh): 36 giờ "Vàng"' date="24/12">
            <p>Mỹ tuyên bố ngừng ném bom 36 giờ. Đây không phải là lúc nghỉ ngơi. Quân dân ta tận dụng từng giây.</p>
            <ul>
                <li>Các đoàn xe gấp rút bổ sung đạn tên lửa (vốn đã cạn kiệt) từ các kho dự trữ.</li>
                <li>Các kíp chiến đấu họp rút kinh nghiệm nóng, phân tích các kiểu nhiễu mới của địch. Hà Nội chuẩn bị cho một cuộc đọ sức lớn hơn.</li>
            </ul>
        </TimelineItem>

        <h2 className="text-2xl font-bold text-amber-300 text-center py-4 border-y-2 border-slate-700">Giai đoạn 3: Đòn "Knock-out" & Sự sụp đổ của Linebacker II (25/12 - 29/12)</h2>
        <TimelineItem title="ĐÊM 26/12: TRẬN QUYẾT CHIẾN LỊCH SỬ" date="26/12">
            <p><strong>Phía Mỹ:</strong> Quyết định tung đòn "knock-out". Huy động 105 lần chiếc B-52 (lớn nhất chiến dịch) đánh đồng loạt vào 3 mục tiêu chính: Hà Nội, Hải Phòng, Thái Nguyên.</p>
            <p><strong>Phía ta:</strong> Trận đánh "sinh tử". Tất cả các đơn vị tên lửa còn lại được lệnh "dồn đạn cho B-52".</p>
            <p><strong>Tội ác:</strong> Hàng ngàn quả bom trút xuống Phố Khâm Thiên, một khu dân cư đông đúc. 287 người dân thường (chủ yếu là phụ nữ, trẻ em) thiệt mạng.</p>
            <p><strong>Chiến thắng:</strong> Đêm 26/12, lưới lửa phòng không Hà Nội đã lập kỳ tích vô song, bắn rơi 8 chiếc B-52 (4 chiếc rơi tại chỗ). Đây là đòn "chí mạng" đánh gục ý chí của Không lực Hoa Kỳ.</p>
        </TimelineItem>
        <TimelineItem title="ĐÊM 27/12: KỲ TÍCH CỦA KHÔNG QUÂN" date="27/12">
            <p>Sau khi tên lửa "dọn cỗ", Không quân ta xuất kích. Phi công Phạm Tuân, lái chiếc MiG-21 (số hiệu 5121), đã tiếp cận, bắn hạ một chiếc B-52 trên bầu trời Mộc Châu (Sơn La), trở thành phi công đầu tiên trên thế giới bắn hạ B-52.</p>
        </TimelineItem>
         <TimelineItem title="NGÀY 28-29/12: Mỹ 'hết vốn'" date="28-29/12">
            <p>Số lượng B-52 giảm hẳn, chỉ dám đánh "cầm chừng" ở vòng ngoài. Tinh thần phi công Mỹ suy sụp, nhiều phi công ở căn cứ Guam có dấu hiệu "nổi loạn", từ chối bay.</p>
        </TimelineItem>
        <TimelineItem title="SÁNG 30/12: Chiến dịch chấm dứt" date="30/12">
            <p>Nixon buộc phải tuyên bố ngừng hoàn toàn Chiến dịch Linebacker II (ngừng ném bom phía Bắc vĩ tuyến 20).</p>
        </TimelineItem>
        
        <div className="text-center bg-red-900/50 p-6 rounded-lg mt-8">
            <h3 className="text-2xl font-bold text-white">KẾT QUẢ CUỐI CÙNG</h3>
            <p className="text-4xl font-extrabold text-amber-300 mt-2">81</p>
            <p className="text-lg text-slate-200">máy bay Mỹ bị bắn rơi</p>
            <p className="text-slate-400 text-sm mt-4">Trong đó:</p>
            <p className="text-3xl font-bold text-white mt-1">34 MÁY BAY B-52</p>
            <p className="text-base text-slate-300">(16 chiếc rơi tại chỗ)</p>
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
