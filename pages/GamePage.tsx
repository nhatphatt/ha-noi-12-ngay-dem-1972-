import React, { useState, useEffect } from "react";
import B52Game from "../components/B52Game";
import GameMenu from "../components/GameMenu";

type GameState = "MENU" | "PLAYING" | "GAME_OVER";

const GamePage: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>("MENU");
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [shareMessage, setShareMessage] = useState("");

  // Load high score from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem("b52-highscore");
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  // Save high score
  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem("b52-highscore", currentScore.toString());
    }
  }, [currentScore, highScore]);

  const handleStartGame = () => {
    setGameState("PLAYING");
    setCurrentScore(0);
  };

  const handleGameOver = (score: number) => {
    setCurrentScore(score);
    setGameState("GAME_OVER");
    setShareMessage(
      `Tôi đã bắn hạ ${Math.floor(
        score / 100
      )} máy bay B-52 trong game "Điện Biên Phủ trên không"! 🎮✈️🇻🇳`
    );
  };

  const handleBackToMenu = () => {
    setGameState("MENU");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Điện Biên Phủ trên không - Game",
          text: shareMessage,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(shareMessage + " " + window.location.href);
      alert("Đã sao chép vào clipboard!");
    }
  };

  return (
    <div className="min-h-screen py-8">
      {/* Sound Toggle */}
      <div className="fixed top-24 right-4 z-40">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border-2 border-yellow-600 font-bold transition"
        >
          {soundEnabled ? "🔊 Âm thanh: BẬT" : "🔇 Âm thanh: TẮT"}
        </button>
      </div>

      {gameState === "MENU" && (
        <GameMenu onStartGame={handleStartGame} highScore={highScore} />
      )}

      {gameState === "PLAYING" && (
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
              🎮 Điện Biên Phủ trên không
            </h2>
            <p className="text-yellow-400 text-lg">
              Bảo vệ Hà Nội - Thủ đô anh hùng!
            </p>
          </div>

          <B52Game onGameOver={handleGameOver} soundEnabled={soundEnabled} />

          <div className="text-center">
            <button
              onClick={handleBackToMenu}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
            >
              ← Quay lại Menu
            </button>
          </div>
        </div>
      )}

      {gameState === "GAME_OVER" && (
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="max-w-2xl mx-4 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-4 border-red-600 shadow-2xl text-white text-center space-y-6">
            <h2 className="text-4xl font-bold text-red-400">
              ⚔️ KẾT THÚC TRẬN CHIẾN
            </h2>

            <div className="bg-slate-700/50 p-6 rounded-xl border-2 border-yellow-500">
              <p className="text-2xl mb-4">
                Hà Nội vẫn đứng vững, nhưng ta cần cố gắng hơn!
              </p>
              <div className="space-y-2 text-lg">
                <p>
                  🎯 Điểm số:{" "}
                  <span className="text-yellow-400 font-bold text-2xl">
                    {currentScore}
                  </span>
                </p>
                <p>
                  🏆 Kỷ lục cao nhất:{" "}
                  <span className="text-green-400 font-bold">{highScore}</span>
                </p>
                <p>
                  ✈️ Máy bay bắn hạ:{" "}
                  <span className="text-red-400 font-bold">
                    {Math.floor(currentScore / 100)}
                  </span>
                </p>
              </div>
            </div>

            {currentScore === highScore && currentScore > 0 && (
              <div className="bg-yellow-600/20 border-2 border-yellow-500 p-4 rounded-lg animate-pulse">
                <p className="text-2xl font-bold text-yellow-300">
                  🎉 KỶ LỤC MỚI! 🎉
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600">
                <h3 className="text-blue-300 font-bold mb-2">
                  📊 Xếp hạng của bạn
                </h3>
                <p className="text-sm">
                  {currentScore < 500 && "Chiến sĩ mới - Tiếp tục luyện tập!"}
                  {currentScore >= 500 &&
                    currentScore < 1000 &&
                    "Pháo thủ giỏi - Tốt lắm!"}
                  {currentScore >= 1000 &&
                    currentScore < 2000 &&
                    "Anh hùng phòng không!"}
                  {currentScore >= 2000 && "Huyền thoại Hà Nội! 🏆"}
                </p>
              </div>

              <div className="bg-green-900/30 p-4 rounded-lg border border-green-600">
                <h3 className="text-green-300 font-bold mb-2">💡 Mẹo chơi</h3>
                <p className="text-sm">
                  Ưu tiên bắn B-52 để ghi điểm cao hơn. Di chuyển liên tục và
                  đừng để máy bay thoát!
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleStartGame}
                className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-green-400"
              >
                🔄 CHƠI LẠI
              </button>

              <button
                onClick={handleShare}
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-blue-400"
              >
                📤 CHIA SẺ KẾT QUẢ
              </button>

              <button
                onClick={handleBackToMenu}
                className="w-full px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white text-lg font-bold rounded-xl transition border-2 border-slate-500"
              >
                ← Quay lại Menu
              </button>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-red-900/50 to-yellow-900/50 rounded-lg border-2 border-yellow-600">
              <p className="text-yellow-200 italic">
                "Không có gì quý hơn độc lập, tự do!"
              </p>
              <p className="text-sm text-gray-300 mt-1">
                - Chủ tịch Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
