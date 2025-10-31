import React, { useRef, useEffect, useState } from "react";

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  type: "B52" | "F111";
  active: boolean;
}

interface Bullet {
  x: number;
  y: number;
  speed: number;
  active: boolean;
}

interface Explosion {
  x: number;
  y: number;
  frame: number;
  maxFrames: number;
}

const landmarks = [
  "🏛️ Khu vực Hồ Hữu Tiệp",
  "🏥 Bệnh viện Bạch Mai",
  "🏘️ Phố Khâm Thiên",
  "🌾 Cánh đồng Chuôm",
  "🏛️ Trung tâm Hà Nội",
];

interface B52GameProps {
  onGameOver: (score: number) => void;
  soundEnabled: boolean;
}

const B52Game: React.FC<B52GameProps> = ({ onGameOver, soundEnabled }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentLandmark, setCurrentLandmark] = useState(landmarks[0]);
  const gameLoopRef = useRef<number>();
  const [isPaused, setIsPaused] = useState(false);

  // Game state
  const playerRef = useRef({ x: 400, y: 550, width: 60, height: 40 });
  const planesRef = useRef<GameObject[]>([]);
  const bulletsRef = useRef<Bullet[]>([]);
  const explosionsRef = useRef<Explosion[]>([]);
  const keysRef = useRef<{ [key: string]: boolean }>({});
  const lastShotRef = useRef(0);
  const enemiesDestroyedRef = useRef(0);
  const enemiesMissedRef = useRef(0);

  // Initialize game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Spawn planes
    const spawnPlane = () => {
      if (planesRef.current.length < 5) {
        const type = Math.random() > 0.3 ? "B52" : "F111";
        const plane: GameObject = {
          x: Math.random() > 0.5 ? -100 : canvas.width + 100,
          y: Math.random() * 200 + 50,
          width: type === "B52" ? 80 : 50,
          height: type === "B52" ? 40 : 25,
          speed: type === "B52" ? 6 : 8,
          type,
          active: true,
        };
        if (plane.x < 0) plane.speed = Math.abs(plane.speed);
        else plane.speed = -Math.abs(plane.speed);

        planesRef.current.push(plane);
      }
    };

    // Game loop
    const gameLoop = () => {
      if (isPaused) {
        gameLoopRef.current = requestAnimationFrame(gameLoop);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw night sky background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0a1628");
      gradient.addColorStop(1, "#1e3a5f");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      ctx.fillStyle = "#ffffff";
      for (let i = 0; i < 50; i++) {
        const x = (i * 137) % canvas.width;
        const y = (i * 193) % canvas.height;
        ctx.fillRect(x, y, 2, 2);
      }

      // Draw city silhouette
      ctx.fillStyle = "#0d1b2a";
      ctx.fillRect(0, 500, canvas.width, 100);
      ctx.fillStyle = "#1b263b";
      for (let i = 0; i < 10; i++) {
        const x = i * 100 + Math.sin(i) * 20;
        const h = Math.random() * 100 + 50;
        ctx.fillRect(x, 500 - h, 60, h);
      }

      // Draw landmark text
      ctx.fillStyle = "#ffd700";
      ctx.font = "bold 16px Arial";
      ctx.fillText(currentLandmark, 20, 30);

      // Draw player (SAM-2 launcher)
      const player = playerRef.current;
      ctx.save();
      ctx.translate(player.x + player.width / 2, player.y + player.height / 2);

      // Launcher base
      ctx.fillStyle = "#4a5568";
      ctx.fillRect(-30, -10, 60, 20);

      // Missile tubes
      ctx.fillStyle = "#2d3748";
      ctx.fillRect(-25, -20, 15, 30);
      ctx.fillRect(10, -20, 15, 30);

      // Highlight
      ctx.fillStyle = "#718096";
      ctx.fillRect(-22, -18, 5, 25);
      ctx.fillRect(13, -18, 5, 25);

      ctx.restore();

      // Handle player movement
      if (keysRef.current["ArrowLeft"] || keysRef.current["a"]) {
        player.x = Math.max(0, player.x - 5);
      }
      if (keysRef.current["ArrowRight"] || keysRef.current["d"]) {
        player.x = Math.min(canvas.width - player.width, player.x + 5);
      }

      // Handle shooting
      if (keysRef.current[" "] || keysRef.current["Enter"]) {
        const now = Date.now();
        if (now - lastShotRef.current > 300) {
          bulletsRef.current.push({
            x: player.x + player.width / 2,
            y: player.y,
            speed: 8,
            active: true,
          });
          lastShotRef.current = now;

          // Play shooting sound
          if (soundEnabled) {
            const audio = new Audio(
              "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZURE="
            );
            audio.volume = 0.1;
            audio.play().catch(() => {});
          }
        }
      }

      // Update and draw bullets
      bulletsRef.current = bulletsRef.current.filter((bullet) => {
        if (!bullet.active) return false;
        bullet.y -= bullet.speed;

        // Draw missile
        ctx.save();
        ctx.fillStyle = "#ef4444";
        ctx.shadowColor = "#fbbf24";
        ctx.shadowBlur = 10;
        ctx.fillRect(bullet.x - 3, bullet.y - 15, 6, 15);
        ctx.fillStyle = "#fbbf24";
        ctx.beginPath();
        ctx.moveTo(bullet.x, bullet.y - 15);
        ctx.lineTo(bullet.x - 5, bullet.y - 5);
        ctx.lineTo(bullet.x + 5, bullet.y - 5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        return bullet.y > 0;
      });

      // Spawn planes
      if (Math.random() < 0.015) {
        spawnPlane();
      }

      // Update and draw planes
      planesRef.current = planesRef.current.filter((plane) => {
        if (!plane.active) return false;

        plane.x += plane.speed;

        // Draw plane
        ctx.save();
        ctx.translate(plane.x + plane.width / 2, plane.y + plane.height / 2);
        if (plane.speed < 0) ctx.scale(-1, 1);

        if (plane.type === "B52") {
          // B-52 body
          ctx.fillStyle = "#4b5563";
          ctx.fillRect(-40, -15, 80, 30);

          // Wings
          ctx.fillStyle = "#374151";
          ctx.fillRect(-50, 0, 100, 8);

          // Engines
          ctx.fillStyle = "#1f2937";
          ctx.fillRect(-35, 8, 10, 12);
          ctx.fillRect(-15, 8, 10, 12);
          ctx.fillRect(5, 8, 10, 12);
          ctx.fillRect(25, 8, 10, 12);

          // Cockpit
          ctx.fillStyle = "#60a5fa";
          ctx.fillRect(-35, -5, 15, 10);
        } else {
          // F-111 body
          ctx.fillStyle = "#6b7280";
          ctx.fillRect(-25, -10, 50, 20);

          // Wings
          ctx.fillStyle = "#4b5563";
          ctx.fillRect(-30, 0, 60, 5);

          // Tail
          ctx.fillRect(15, -15, 10, 15);

          // Cockpit
          ctx.fillStyle = "#60a5fa";
          ctx.fillRect(-20, -5, 10, 10);
        }

        ctx.restore();

        // Check if plane escaped
        if (
          (plane.speed > 0 && plane.x > canvas.width + 100) ||
          (plane.speed < 0 && plane.x < -100)
        ) {
          enemiesMissedRef.current++;
          if (enemiesMissedRef.current % 5 === 0) {
            setLives((prev) => {
              const newLives = prev - 1;
              if (newLives <= 0) {
                onGameOver(score);
              }
              return newLives;
            });
          }
          return false;
        }

        return true;
      });

      // Collision detection
      bulletsRef.current.forEach((bullet) => {
        planesRef.current.forEach((plane) => {
          if (!bullet.active || !plane.active) return;

          if (
            bullet.x > plane.x &&
            bullet.x < plane.x + plane.width &&
            bullet.y > plane.y &&
            bullet.y < plane.y + plane.height
          ) {
            bullet.active = false;
            plane.active = false;

            // Add explosion
            explosionsRef.current.push({
              x: plane.x + plane.width / 2,
              y: plane.y + plane.height / 2,
              frame: 0,
              maxFrames: 20,
            });

            // Update score
            const points = plane.type === "B52" ? 100 : 50;
            setScore((prev) => prev + points);
            enemiesDestroyedRef.current++;

            // Play explosion sound
            if (soundEnabled) {
              const audio = new Audio(
                "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZURE="
              );
              audio.volume = 0.2;
              audio.play().catch(() => {});
            }
          }
        });
      });

      // Draw and update explosions
      explosionsRef.current = explosionsRef.current.filter((explosion) => {
        const progress = explosion.frame / explosion.maxFrames;
        const radius = 30 * (1 - progress);

        // Outer explosion
        const gradient = ctx.createRadialGradient(
          explosion.x,
          explosion.y,
          0,
          explosion.x,
          explosion.y,
          radius * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 100, ${1 - progress})`);
        gradient.addColorStop(0.3, `rgba(255, 100, 0, ${0.8 - progress})`);
        gradient.addColorStop(1, `rgba(100, 0, 0, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(explosion.x, explosion.y, radius * 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright core
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - progress})`;
        ctx.beginPath();
        ctx.arc(explosion.x, explosion.y, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();

        explosion.frame++;
        return explosion.frame < explosion.maxFrames;
      });

      // Draw HUD
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 20px Arial";
      ctx.fillText(`Điểm: ${score}`, 20, canvas.height - 60);
      ctx.fillText(`❤️ x ${lives}`, 20, canvas.height - 35);

      ctx.fillText(
        `Tiêu diệt: ${enemiesDestroyedRef.current}`,
        canvas.width - 200,
        canvas.height - 35
      );
      ctx.fillText(
        `Bỏ lỡ: ${enemiesMissedRef.current}`,
        canvas.width - 200,
        canvas.height - 10
      );

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    // Keyboard events
    const handleKeyDown = (e: KeyboardEvent) => {
      keysRef.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [score, lives, soundEnabled, isPaused, currentLandmark, onGameOver]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-slate-800 p-4 rounded-lg shadow-2xl border-2 border-red-900">
        <canvas
          ref={canvasRef}
          className="rounded border-2 border-slate-600"
          style={{ imageRendering: "pixelated" }}
        />
      </div>

      <div className="flex gap-4 items-center text-white">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-bold transition"
        >
          {isPaused ? "▶️ Tiếp tục" : "⏸️ Tạm dừng"}
        </button>

        <div className="bg-slate-700 px-4 py-2 rounded-lg">
          <p className="text-sm">⌨️ Di chuyển: ← → hoặc A D</p>
          <p className="text-sm">🎯 Bắn: SPACE hoặc ENTER</p>
        </div>
      </div>
    </div>
  );
};

export default B52Game;
