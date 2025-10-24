import { useRef, useEffect, useState } from 'react';

const Game = ({ width = 480, height = 300 }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationId;
    let cx = Math.random() * (width - 40) + 20;
    let cy = Math.random() * (height - 40) + 20;
    let vx = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1);
    let vy = (Math.random() * 2 + 1) * (Math.random() > 0.5 ? 1 : -1);
    const radius = 18;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // background
      ctx.fillStyle = '#0b1220';
      ctx.fillRect(0, 0, width, height);

      // circle
      ctx.beginPath();
      ctx.fillStyle = '#00acc1';
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(update);
    }

    function update() {
      cx += vx;
      cy += vy;
      if (cx - radius < 0 || cx + radius > width) vx *= -1;
      if (cy - radius < 0 || cy + radius > height) vy *= -1;
      draw();
    }

    draw();

    return () => cancelAnimationFrame(animationId);
  }, [width, height]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft]);

  const handleClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // approximate check for circle hit
    // we used radius 18 above
    // read current pixel from canvas to check color is circle (simple heuristic)
    const ctx = canvasRef.current.getContext('2d');
    const p = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
    // if pixel is not background (0x0b,0x12,0x20) treat as hit
    if (!(p[0] === 11 && p[1] === 18 && p[2] === 32)) {
      setScore((s) => s + 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="flex items-center gap-4">
        <div className="text-white">Thời gian: <span className="font-bold">{timeLeft}s</span></div>
        <div className="text-white">Điểm: <span className="font-bold">{score}</span></div>
      </div>

      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onClick={handleClick}
        style={{ borderRadius: 12, cursor: 'crosshair' }}
      />

      <div className="text-sm text-gray-300">Nhấp vào quả bóng để ghi điểm.</div>
    </div>
  );
};

export default Game;
