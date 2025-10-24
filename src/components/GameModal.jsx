import { useEffect } from 'react';

const GameModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const openStandalone = () => {
    window.open('/game.html', '_blank', 'noopener');
  };

  useEffect(() => {
    function onMessage(e) {
      if (!e?.data) return;
      if (e.data.type === 'closeGameModal') {
        onClose();
      }
    }

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>

      <div className="relative z-10 w-[920px] max-w-[95%] bg-capital-gray/80 border border-white/10 rounded-2xl p-2 backdrop-blur-md">
        <div className="flex justify-between items-center mb-2 p-3">
          <h3 className="text-white text-lg font-semibold">Quiz: Giá trị thặng dư</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={openStandalone}
              className="px-3 py-1 text-sm bg-white/5 text-white rounded-md border border-white/10"
            >
              Mở cửa sổ riêng
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1 text-sm bg-red-600 text-white rounded-md"
            >
              Đóng
            </button>
          </div>
        </div>

        <div className="w-full h-[640px] p-2">
          <iframe src="/game.html?embed=1" title="Quiz Game" className="w-full h-full rounded-xl border border-white/10" />
        </div>
      </div>
    </div>
  );
};

export default GameModal;
