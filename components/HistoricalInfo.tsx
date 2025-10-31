import React from "react";

interface HistoricalEvent {
  level: number;
  title: string;
  description: string;
  date: string;
}

interface HistoricalInfoProps {
  event: HistoricalEvent;
  onContinue: () => void;
  score: number;
}

const HistoricalInfo: React.FC<HistoricalInfoProps> = ({
  event,
  onContinue,
  score,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="max-w-2xl mx-4 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-4 border-yellow-600 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-xl font-bold mb-4">
            🎖️ HOÀN THÀNH CÂP ĐỘ {event.level}
          </div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">
            {event.title}
          </h2>
          <p className="text-red-400 text-lg font-semibold">📅 {event.date}</p>
        </div>

        {/* Historical Content */}
        <div className="bg-slate-700/50 p-6 rounded-xl border-2 border-yellow-500 mb-6">
          <h3 className="text-yellow-300 text-xl font-bold mb-3 flex items-center gap-2">
            <span>📜</span> Sự kiện lịch sử thực tế:
          </h3>
          <p className="text-white text-lg leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Additional Historical Facts */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600">
            <h4 className="text-blue-300 font-bold mb-2">
              ✈️ Máy bay bị bắn rơi
            </h4>
            <p className="text-white text-sm">
              Trong 12 ngày đêm, quân dân Hà Nội đã bắn rơi tổng cộng
              <span className="text-red-400 font-bold"> 81 máy bay</span> các
              loại, trong đó có{" "}
              <span className="text-red-400 font-bold">34 chiếc B-52</span>.
            </p>
          </div>

          <div className="bg-green-900/30 p-4 rounded-lg border border-green-600">
            <h4 className="text-green-300 font-bold mb-2">
              🛡️ Vũ khí phòng không
            </h4>
            <p className="text-white text-sm">
              Tên lửa SAM-2, pháo cao xạ 37mm, 57mm, 85mm, 100mm và súng máy
              phòng không đã lập nên chiến công hiển hách.
            </p>
          </div>
        </div>

        {/* Score Display */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-red-600/20 p-4 rounded-lg border-2 border-yellow-500 mb-6">
          <p className="text-center text-2xl font-bold text-yellow-300">
            🏆 Điểm số hiện tại: <span className="text-white">{score}</span>
          </p>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-green-400"
        >
          ▶️ TIẾP TỤC CHIẾN ĐẤU
        </button>

        {/* Motivational Message */}
        <p className="text-center text-yellow-200 mt-4 italic">
          "Hà Nội vững như núi đồng, quyết chiến quyết thắng!"
        </p>
      </div>
    </div>
  );
};

export default HistoricalInfo;
