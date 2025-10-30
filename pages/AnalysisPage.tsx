
import React from 'react';
import Section from '../components/Section';

const ComparisonTableRow: React.FC<{
  label: string;
  val1954: React.ReactNode;
  val1972: React.ReactNode;
}> = ({ label, val1954, val1972 }) => (
    <>
        <div className="bg-slate-800 p-3 font-bold text-amber-300">{label}</div>
        <div className="bg-slate-800 p-3">{val1954}</div>
        <div className="bg-slate-800 p-3">{val1972}</div>
    </>
);


const AnalysisPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
        GIẢI MÃ "ĐIỆN BIÊN PHỦ TRÊN KHÔNG": TRÍ TUỆ VIỆT NAM VÀ TẦM VÓC LỊCH SỬ
      </h1>

      <Section title='Phần 1: Giải mã "Cách đánh B-52" (Trí tuệ)' subtitle="Làm thế nào tên lửa SAM-2 (do Liên Xô sản xuất, vốn được thiết kế để chống máy bay ném bom bay đơn lẻ) lại có thể bắn hạ B-52, một 'siêu pháo đài bay' được bảo vệ bởi tổ hợp gây nhiễu điện tử (ECM) cực mạnh?">
        <p><strong>Thử thách "Màn tuyết":</strong> Khi B-52 hoạt động, chúng bật các thiết bị gây nhiễu công suất lớn. Trên màn hình radar của ta, toàn bộ bầu trời là một "màn tuyết" trắng xoá. Chúng ta không thể thấy B-52 đâu để ngắm bắn.</p>
        <p><strong>"Cẩm nang Bìa đỏ":</strong> Qua nhiều năm nghiên cứu, đặc biệt là thực chiến ở Vĩnh Linh, bộ đội tên lửa đã đúc kết được "Phương pháp đánh B-52".</p>
        <h3>Nghệ thuật "Vạch nhiễu":</h3>
        <ul className="space-y-4">
            <li>
                <strong>Phát hiện "Nhiễu" chính là "Thù":</strong> Các radar cảnh giới tầm xa phát hiện ra rằng: Mặc dù B-52 làm nhiễu màn hình, nhưng chính nguồn gốc của khối nhiễu đó (chấm nhiễu mạnh nhất) chính là vị trí của B-52.
            </li>
            <li>
                <strong>Phương pháp "Vượt trước" (của Radar):</strong> Ta dùng radar cảnh giới để biết hướng B-52. Radar tên lửa sẽ quay đón về hướng đó, bật ở chế độ "vượt trước" và phóng tên lửa "mù" vào giữa khối nhiễu.
            </li>
            <li>
                <strong>Phương pháp "Đánh bồi" (Hai quả) - Đòn quyết định:</strong> Khi quả đạn thứ nhất bay lên, B-52 phát hiện và bắt buộc phải cơ động (nghiêng cánh, lượn) để tránh.
            </li>
            <li>
                <strong>Thời điểm Vàng:</strong> Khi B-52 cơ động, nó sẽ tạm thời ra khỏi trục nhiễu chính và để lộ tín hiệu thật trên màn hình radar trong vài giây. Ngay lập tức, kíp chiến đấu bắn bồi quả thứ hai. Quả đạn này sẽ được "dẫn" chính xác vào mục tiêu đã lộ diện.
            </li>
        </ul>
        <h3 className="mt-6">Sự phối hợp hoàn hảo:</h3>
        <p>Đây là một trận "dàn" hoàn hảo giữa các lực lượng:</p>
        <ul>
            <li><strong>Radar:</strong> Phát hiện từ xa.</li>
            <li><strong>Không quân (MiG-21):</strong> Quấy nhiễu, xé lẻ đội hình địch.</li>
            <li><strong>Tên lửa (SAM-2):</strong> Lực lượng tiêu diệt chủ lực.</li>
            <li><strong>Pháo phòng không:</strong> Bảo vệ trận địa tên lửa, tiêu diệt máy bay bay thấp (như F-111).</li>
        </ul>
      </Section>
      
      <Section title='Phần 2: Vì sao là "Điện Biên Phủ trên không"? (Tầm vóc)' subtitle="Cái tên này không phải là một sự ví von văn học, mà là một sự tương đồng chính xác về tầm vóc lịch sử.">
        <div className="grid grid-cols-[auto_1fr_1fr] gap-px bg-slate-700 my-6 rounded-lg overflow-hidden text-sm md:text-base">
            <div className="bg-slate-900 p-3 font-bold text-white">Yếu tố</div>
            <div className="bg-slate-900 p-3 font-bold text-white">Điện Biên Phủ 1954</div>
            <div className="bg-slate-900 p-3 font-bold text-white">Điện Biên Phủ trên không 1972</div>

            <ComparisonTableRow label="Bản chất" val1954='Đánh bại "Tập đoàn cứ điểm" mạnh nhất, bất khả xâm phạm của Pháp.' val1972='Đánh bại "Siêu pháo đài bay" B-52 mạnh nhất, bất khả xâm phạm của Mỹ.' />
            <ComparisonTableRow label="Tính chất" val1954="Trận quyết chiến chiến lược trên bộ." val1972="Trận quyết chiến chiến lược trên không." />
            <ComparisonTableRow label="Đối tượng" val1954="Đội quân viễn chinh nhà nghề Pháp." val1972="Không lực Hoa Kỳ (SAC) - lực lượng hiện đại và tinh nhuệ nhất thế giới." />
            <ComparisonTableRow label="Kết quả" val1954="Buộc Pháp ký Hiệp định Genève (1954), kết thúc chiến tranh ở Đông Dương." val1972="Buộc Mỹ ký Hiệp định Paris (1973), rút quân khỏi Việt Nam." />
            <ComparisonTableRow label="Ý nghĩa" val1954="Đánh sập chủ nghĩa thực dân kiểu cũ." val1972="Đánh bại ý chí xâm lược của chủ nghĩa thực dân kiểu mới." />
        </div>
      </Section>
    </div>
  );
};

export default AnalysisPage;
