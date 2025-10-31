import React from "react";

interface GameMenuProps {
  onStartGame: () => void;
  highScore: number;
}

const GameMenu: React.FC<GameMenuProps> = ({ onStartGame, highScore }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] text-white">
      <div className="max-w-3xl mx-auto text-center space-y-8 bg-slate-900/80 p-12 rounded-2xl border-4 border-red-800 shadow-2xl backdrop-blur">
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 animate-pulse">
            Điện Biên Phủ Trên Không
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-red-400">
            Hà Nội – 12 Ngày Đêm
          </h2>
          <p className="text-xl text-yellow-300 font-semibold">
            Tháng 12 năm 1972
          </p>
        </div>

        {/* Description */}
        <div className="bg-slate-800/80 p-6 rounded-xl border-2 border-yellow-600">
          <p className="text-lg leading-relaxed text-gray-200">
            Bạn là{" "}
            <span className="text-red-400 font-bold">pháo thủ phòng không</span>{" "}
            bảo vệ Thủ đô Hà Nội trong chiến dịch lịch sử. Nhiệm vụ:{" "}
            <span className="text-yellow-400 font-bold">
              bắn hạ máy bay B-52 và máy bay chiến đấu Mỹ
            </span>
            , bảo vệ nhân dân và Thủ đô anh hùng!
          </p>
        </div>

        {/* High Score */}
        {highScore > 0 && (
          <div className="bg-yellow-600/20 border-2 border-yellow-500 p-4 rounded-lg">
            <p className="text-2xl font-bold">
              🏆 Kỷ lục cao nhất:{" "}
              <span className="text-yellow-400">{highScore}</span> điểm
            </p>
          </div>
        )}

        {/* Menu Buttons */}
        <div className="space-y-4">
          <button
            onClick={onStartGame}
            className="w-full max-w-md mx-auto block px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-2xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-red-400"
          >
            🎮 CHƠI NGAY
          </button>
        </div>

        {/* Game Info */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="bg-slate-800/60 p-4 rounded-lg border border-red-700">
            <h3 className="text-yellow-400 font-bold text-lg mb-2">
              🎯 Cách chơi
            </h3>
            <ul className="text-left space-y-1 text-sm">
              <li>
                → Di chuyển:{" "}
                <span className="text-yellow-300">← → hoặc A D</span>
              </li>
              <li>
                → Bắn: <span className="text-yellow-300">SPACE hoặc ENTER</span>
              </li>
              <li>
                → Bắn hạ B-52: <span className="text-green-400">+100 điểm</span>
              </li>
              <li>
                → Bắn hạ F-111: <span className="text-green-400">+50 điểm</span>
              </li>
              <li>
                → Để lỡ 5 máy bay: <span className="text-red-400">-1 mạng</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-lg border border-red-700">
            <h3 className="text-yellow-400 font-bold text-lg mb-2">
              ✈️ Đối thủ
            </h3>
            <ul className="text-left space-y-1 text-sm">
              <li>
                → <span className="text-red-400">B-52</span>: Oanh tạc cơ lớn,
                chậm
              </li>
              <li>
                → <span className="text-orange-400">F-111</span>: Tiêm kích nhỏ,
                nhanh
              </li>
            </ul>
          </div>
        </div>

        {/* Historical Quote */}
        <div className="mt-8 p-6 bg-gradient-to-r from-red-900/50 to-yellow-900/50 rounded-lg border-2 border-yellow-600">
          <p className="text-lg italic text-yellow-200">
            "Hà Nội - Điện Biên Phủ trên không, chiến thắng mùa đông năm 1972 đã
            buộc Mỹ phải ký Hiệp định Paris, công nhận độc lập, chủ quyền của
            Việt Nam."
          </p>
          <p className="text-sm text-gray-300 mt-2">- Sách lịch sử Việt Nam</p>
        </div>
      </div>
    </div>
  );
};

export default GameMenu;
