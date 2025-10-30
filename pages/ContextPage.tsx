import React from "react";
import Section from "../components/Section";

const ContextPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
        NGUỒN CƠN CỦA "CƠN GIẬN DỮ CUỐI CÙNG" (LINEBACKER II)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Section title='1. Bàn đàm phán Paris & Bế tắc "Trở bàn"'>
            <p>
              Năm 1972, cuộc đàm phán 4 bên tại Paris (Pháp) đi đến những vòng
              cuối cùng. Chiến lược "Việt Nam hóa chiến tranh" của Mỹ đang đứng
              trước nguy cơ sụp đổ sau Mùa hè đỏ lửa 1972.
            </p>
            <p>
              <strong>Tháng 10/1972:</strong> Phái đoàn Việt Nam Dân chủ Cộng
              hòa (Lê Đức Thọ) và Mỹ (Henry Kissinger) đã đạt được một bản dự
              thảo hiệp định. Kissinger tuyên bố "Hòa bình đã ở trong tầm tay"
              (Peace is at hand).
            </p>
            <p>
              <strong>Sự "Trở bàn":</strong> Tuy nhiên, do sức ép từ chính quyền
              Nguyễn Văn Thiệu (Sài Gòn) và ý đồ muốn giành lợi thế tuyệt đối,
              phía Mỹ lật lọng. Nixon muốn "chỉnh sửa" 126 điểm trong dự thảo,
              thực chất là phá vỡ các điều khoản cốt lõi.
            </p>
            <p>
              <strong>Mục đích của Nixon:</strong> Ông ta muốn dùng sức mạnh
              quân sự cuối cùng để "dạy cho Hà Nội một bài học", buộc chúng ta
              phải chấp nhận các điều khoản phi lý của Mỹ.
            </p>
          </Section>

          <Section title='2. Chiến dịch Linebacker II: Đòn "Răn đe" tàn bạo'>
            <p>
              <strong>Tên gọi:</strong> Operation Linebacker II (Chiến dịch
              Người ném bóng bầu dục II).
            </p>
            <h3>Mục tiêu:</h3>
            <ul>
              <li>Hủy diệt tối đa tiềm lực kinh tế và quân sự miền Bắc.</li>
              <li>Đánh sập ý chí chiến đấu của nhân dân ta.</li>
              <li>Tạo sức ép tối đa trên bàn đàm phán Paris.</li>
            </ul>
            <h3>Lực lượng huy động (Khổng lồ):</h3>
            <ul>
              <li>
                193 máy bay B-52 (từ 2 căn cứ: Andersen ở Guam và U-Tapao ở Thái
                Lan).
              </li>
              <li>1.077 máy bay chiến thuật (F-111, F-4, A-7, F-105...).</li>
              <li>6 tàu sân bay tại Vịnh Bắc Bộ.</li>
              <li>
                Hàng chục máy bay gây nhiễu, máy bay tiếp dầu và tàu chỉ huy.
              </li>
            </ul>
          </Section>

          <Section title="3. Hà Nội và Lời tiên đoán của Chủ tịch Hồ Chí Minh">
            <p>Đối với Việt Nam, cuộc tập kích này không hoàn toàn bất ngờ.</p>
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-slate-400 my-4">
              "Sớm muộn gì đế quốc Mỹ cũng sẽ đưa B-52 ra ném bom Hà Nội... Ở
              Việt Nam, Mỹ nhất định thua. Nhưng nó chỉ chịu thua sau khi thua
              trên bầu trời Hà Nội".
            </blockquote>
            <h3>Công tác chuẩn bị:</h3>
            <ul>
              <li>
                <strong>Sơ tán:</strong> Hàng chục vạn người dân (người già, trẻ
                em, các cơ quan không trực tiếp chiến đấu) đã được sơ tán khỏi
                nội thành từ trước. Hà Nội sẵn sàng cho một "cuộc chiến đường
                phố trên không".
              </li>
              <li>
                <strong>Lực lượng:</strong> Các Sư đoàn phòng không chủ lực
                (361, 363) và các Trung đoàn tên lửa (như 261 "Thành Loa", 257
                "Cờ Đỏ") đã vào vị trí "sẵn sàng chiến đấu" cao nhất.
              </li>
              <li>
                <strong>"Cẩm nang đỏ":</strong> Quan trọng nhất, qua nhiều năm
                nghiên cứu và thực chiến (tại tuyến lửa Vĩnh Linh), bộ đội tên
                lửa đã đúc kết được cuốn cẩm nang quý giá "Cách đánh B-52" (hay
                còn gọi là "Cẩm nang bìa đỏ").
              </li>
            </ul>
          </Section>
        </div>
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-slate-800 p-6 rounded-lg shadow-lg">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.UNq6gHU03sYWwFhaw1tG3gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="B-52 Stratofortress"
              className="rounded-lg mb-4 w-full h-auto object-cover"
            />
            <h3 className="text-xl font-bold text-amber-300">
              "Siêu Pháo Đài Bay" B-52
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              B-52 Stratofortress là máy bay ném bom chiến lược phản lực được
              Không quân Hoa Kỳ (USAF) sử dụng từ năm 1955. Có khả năng mang tới
              32 tấn vũ khí, B-52 được coi là biểu tượng sức mạnh không thể bị
              ngăn chặn của không lực Hoa Kỳ thời điểm đó.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextPage;
