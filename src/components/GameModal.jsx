import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const GameModal = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [showScoreTable, setShowScoreTable] = useState(false);
  const [autoExitTimer, setAutoExitTimer] = useState(10);

  const allQuestions = [
    {
      id: 1,
      question: "Theo lý thuyết Marx, khi doanh nghiệp nói 'con người là tài sản quý giá nhất', họ thực sự đang nói gì?",
      options: [
        "Con người là trung tâm của sự phát triển",
        "Con người là nguồn tạo ra giá trị thặng dư",
        "Con người cần được bảo vệ và phát triển",
        "Con người là động lực chính của tổ chức"
      ],
      correct: 1,
      explanation: "Theo Marx, 'tài sản quý giá nhất' chỉ có nghĩa là nguồn tạo ra giá trị thặng dư. Doanh nghiệp quan tâm đến con người vì họ tạo ra lợi nhuận, không phải vì giá trị nhân văn."
    },
    {
      id: 2,
      question: "Giá trị thặng dư tương đối là gì?",
      options: [
        "Kéo dài thời gian làm việc",
        "Tăng năng suất lao động mà không tăng lương",
        "Tăng lương cho người lao động",
        "Giảm giá thành sản phẩm"
      ],
      correct: 1,
      explanation: "Giá trị thặng dư tương đối là tăng năng suất lao động (v) để tăng giá trị thặng dư (m) mà không cần tăng lương. Đây là cách bóc lột tinh vi nhất."
    },
    {
      id: 3,
      question: "Trong trường hợp của Long, tỷ lệ bóc lột là bao nhiêu?",
      options: [
        "50%",
        "75%",
        "90%",
        "95.6%"
      ],
      correct: 3,
      explanation: "Long tạo ra 250 triệu VNĐ/tháng nhưng chỉ nhận 11 triệu VNĐ, nghĩa là 95.6% giá trị anh tạo ra bị bóc lột."
    },
    {
      id: 4,
      question: "Khi doanh nghiệp 'đào tạo' nhân viên, mục đích thực sự là gì?",
      options: [
        "Phát triển kỹ năng cá nhân",
        "Tăng năng suất lao động để tạo thêm giá trị thặng dư",
        "Chuẩn bị cho thăng tiến",
        "Nâng cao chất lượng cuộc sống"
      ],
      correct: 1,
      explanation: "Đào tạo trong doanh nghiệp tư bản chủ yếu nhằm tăng năng suất lao động (v) để tăng giá trị thặng dư (m), không phải vì lợi ích của người lao động."
    },
    {
      id: 5,
      question: "Theo SDG 8, 'việc làm thỏa đáng' có nghĩa là gì?",
      options: [
        "Có việc làm là đủ",
        "Lương cao",
        "Việc làm bền vững, công bằng và có ý nghĩa",
        "Làm việc trong môi trường hiện đại"
      ],
      correct: 2,
      explanation: "SDG 8 định nghĩa 'việc làm thỏa đáng' là việc làm bền vững, công bằng, có ý nghĩa và tôn trọng quyền lợi người lao động."
    },
    {
      id: 6,
      question: "Giá trị thặng dư tuyệt đối là gì?",
      options: [
        "Tăng năng suất lao động",
        "Kéo dài thời gian làm việc mà không trả thêm lương",
        "Tăng lương cho người lao động",
        "Giảm chi phí sản xuất"
      ],
      correct: 1,
      explanation: "Giá trị thặng dư tuyệt đối là kéo dài thời gian làm việc (m) mà không cần tăng lương. Đây là cách bóc lột trực tiếp và dễ nhận biết."
    },
    {
      id: 7,
      question: "Trong công thức Marx: W = c + v + m, 'v' đại diện cho gì?",
      options: [
        "Tư bản cố định",
        "Tư bản khả biến (tiền lương)",
        "Giá trị thặng dư",
        "Tổng giá trị sản phẩm"
      ],
      correct: 1,
      explanation: "Trong công thức Marx, 'v' đại diện cho tư bản khả biến, tức là tiền lương trả cho người lao động."
    },
    {
      id: 8,
      question: "Văn hóa 'We are family' trong doanh nghiệp có mục đích gì?",
      options: [
        "Tạo môi trường làm việc thân thiện",
        "Khuyến khích làm việc ngoài giờ không lương",
        "Xây dựng tinh thần đoàn kết",
        "Cải thiện chất lượng cuộc sống"
      ],
      correct: 1,
      explanation: "Văn hóa 'We are family' thường được sử dụng để khuyến khích nhân viên làm việc ngoài giờ, cống hiến mà không đòi hỏi thêm lương."
    },
    {
      id: 9,
      question: "Theo Marx, bản chất của quan hệ lao động trong chủ nghĩa tư bản là gì?",
      options: [
        "Hợp tác bình đẳng",
        "Bóc lột giá trị thặng dư",
        "Phát triển con người",
        "Tạo ra của cải xã hội"
      ],
      correct: 1,
      explanation: "Theo Marx, quan hệ lao động trong chủ nghĩa tư bản về bản chất là bóc lột giá trị thặng dư từ người lao động."
    },
    {
      id: 10,
      question: "Khi startup nói 'passion over money', họ đang làm gì?",
      options: [
        "Khuyến khích tinh thần sáng tạo",
        "Biện minh cho việc trả lương thấp",
        "Tạo động lực làm việc",
        "Xây dựng văn hóa tích cực"
      ],
      correct: 1,
      explanation: "Câu nói 'passion over money' thường được dùng để biện minh cho việc trả lương thấp, yêu cầu nhân viên làm việc vì 'đam mê' thay vì tiền bạc."
    },
    {
      id: 11,
      question: "Stock options trong startup thường có vấn đề gì?",
      options: [
        "Giá trị thực tế không chắc chắn",
        "Chỉ có giá trị khi công ty IPO",
        "Cả hai đáp án trên",
        "Không có vấn đề gì"
      ],
      correct: 2,
      explanation: "Stock options thường có giá trị thực tế không chắc chắn và chỉ có giá trị khi công ty IPO thành công, điều này không đảm bảo."
    },
    {
      id: 12,
      question: "Theo Marx, mục đích cuối cùng của sản xuất tư bản chủ nghĩa là gì?",
      options: [
        "Thỏa mãn nhu cầu xã hội",
        "Tối đa hóa lợi nhuận",
        "Phát triển con người",
        "Tạo ra việc làm"
      ],
      correct: 1,
      explanation: "Theo Marx, mục đích cuối cùng của sản xuất tư bản chủ nghĩa là tối đa hóa lợi nhuận, không phải phục vụ nhu cầu xã hội."
    },
    {
      id: 13,
      question: "Khi doanh nghiệp nói 'flexible hours', điều này thường có nghĩa là gì?",
      options: [
        "Nhân viên có thể chọn giờ làm việc",
        "Nhân viên phải làm việc mọi lúc",
        "Có thể làm việc từ xa",
        "Không cần đến văn phòng"
      ],
      correct: 1,
      explanation: "'Flexible hours' thường có nghĩa là nhân viên phải sẵn sàng làm việc mọi lúc, không phải được chọn giờ làm việc."
    },
    {
      id: 14,
      question: "Theo lý thuyết Marx, 'con người là trung tâm' trong doanh nghiệp có nghĩa là gì?",
      options: [
        "Con người được tôn trọng và phát triển",
        "Con người là trung tâm tạo ra lợi nhuận",
        "Con người có quyền quyết định",
        "Con người được bảo vệ quyền lợi"
      ],
      correct: 1,
      explanation: "Theo Marx, 'con người là trung tâm' trong doanh nghiệp tư bản có nghĩa là con người là trung tâm tạo ra lợi nhuận, không phải được tôn trọng."
    },
    {
      id: 15,
      question: "Tại sao doanh nghiệp thích thuê sinh viên mới ra trường?",
      options: [
        "Họ có kỹ năng tốt nhất",
        "Họ dễ bóc lột và chấp nhận lương thấp",
        "Họ có kinh nghiệm phong phú",
        "Họ có mạng lưới quan hệ rộng"
      ],
      correct: 1,
      explanation: "Doanh nghiệp thích thuê sinh viên mới ra trường vì họ dễ bóc lột, chấp nhận lương thấp và làm việc nhiều giờ."
    }
  ];

  // Hàm shuffle câu hỏi
  const shuffleQuestions = (questions) => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10); // Chọn 10 câu ngẫu nhiên
  };

  useEffect(() => {
    if (isOpen) {
      // Shuffle questions mỗi khi mở modal
      const shuffled = shuffleQuestions(allQuestions);
      setShuffledQuestions(shuffled);
      setCurrentQuestion(0);
      setScore(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setGameCompleted(false);
      setShowScoreTable(false);
      setAutoExitTimer(10);
    }
  }, [isOpen]);

  // Auto exit timer
  useEffect(() => {
    if (showScoreTable && autoExitTimer > 0) {
      const timer = setTimeout(() => {
        setAutoExitTimer(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (showScoreTable && autoExitTimer === 0) {
        onClose();
      }
  }, [showScoreTable, autoExitTimer, onClose]);

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === shuffledQuestions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameCompleted(true);
      // Hiển thị bảng điểm sau 1 giây
      setTimeout(() => {
        setShowScoreTable(true);
      }, 1000);
    }
  };

  const handleRestart = () => {
    const shuffled = shuffleQuestions(allQuestions);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameCompleted(false);
    setShowScoreTable(false);
    setAutoExitTimer(10);
  };

  const handleExit = () => {
    onClose();
  };

  const getScoreMessage = () => {
    const percentage = (score / shuffledQuestions.length) * 100;
    if (percentage >= 80) return { message: "Xuất sắc! Bạn đã hiểu rõ bản chất của bóc lột tư bản.", color: "tech-text" };
    if (percentage >= 60) return { message: "Tốt! Bạn có hiểu biết cơ bản về vấn đề này.", color: "text-text-secondary" };
    if (percentage >= 40) return { message: "Cần cải thiện! Hãy đọc lại nội dung để hiểu sâu hơn.", color: "marx-text" };
    return { message: "Cần học thêm! Đây là vấn đề quan trọng cần hiểu rõ.", color: "marx-text" };
  };

  const getScoreDetails = () => {
    const percentage = (score / shuffledQuestions.length) * 100;
    const correctAnswers = score;
    const wrongAnswers = shuffledQuestions.length - score;
    
    return {
      percentage: Math.round(percentage),
      correctAnswers,
      wrongAnswers,
      totalQuestions: shuffledQuestions.length,
      grade: percentage >= 80 ? 'A' : percentage >= 60 ? 'B' : percentage >= 40 ? 'C' : 'D'
    };
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative bg-philosophy rounded-3xl border-2 border-philosophy max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="p-6 border-b border-philosophy">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-title text-text-primary">
                🎯 Trắc Nghiệm: Hiểu Về Bóc Lột Tư Bản
              </h2>
            <button
              onClick={onClose}
                className="text-text-accent hover:text-text-primary transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
          </div>
        </div>

          {/* Content */}
          <div className="p-6">
            {!gameCompleted ? (
              <>
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-secondary font-body">
                      Câu {currentQuestion + 1} / {shuffledQuestions.length}
                    </span>
                    <span className="text-text-accent font-body">
                      Điểm: {score} / {shuffledQuestions.length}
                    </span>
                  </div>
                  <div className="w-full bg-background-light rounded-full h-2">
                    <div 
                      className="contrast-gradient h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-6">
                  <h3 className="text-xl font-heading text-text-primary mb-4 leading-relaxed">
                    {shuffledQuestions[currentQuestion]?.question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {shuffledQuestions[currentQuestion]?.options.map((option, index) => {
                    let optionClass = "p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer font-body ";
                    
                    if (selectedAnswer === index) {
                      if (index === shuffledQuestions[currentQuestion].correct) {
                        optionClass += "border-tech bg-tech/10 text-tech";
                      } else {
                        optionClass += "border-marx bg-marx/10 text-marx";
                      }
                    } else if (showResult && index === shuffledQuestions[currentQuestion].correct) {
                      optionClass += "border-tech bg-tech/5 text-tech";
                    } else {
                      optionClass += "border-philosophy hover:border-tech/50 hover:bg-tech/5";
                    }

                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                        whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={selectedAnswer !== null}
                        className={optionClass}
                      >
                        <div className="flex items-center">
                          <span className="mr-3 text-lg font-bold">
                            {String.fromCharCode(65 + index)}.
                          </span>
                          <span>{option}</span>
                          {selectedAnswer === index && (
                            <span className="ml-auto">
                              {index === shuffledQuestions[currentQuestion].correct ? "✓" : "✗"}
                            </span>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl border border-philosophy bg-gradient-to-r from-tech/5 to-marx/5 mb-6"
                  >
                    <h4 className="font-bold text-text-primary mb-2 flex items-center">
                      <span className="mr-2">💡</span>
                      Giải thích:
                    </h4>
                    <p className="text-text-secondary font-body leading-relaxed">
                      {shuffledQuestions[currentQuestion]?.explanation}
                    </p>
                  </motion.div>
                )}

                {/* Next Button */}
                {showResult && (
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNextQuestion}
                      className="px-8 py-3 contrast-gradient text-text-primary font-bold rounded-full transition-all duration-300"
                    >
                      {currentQuestion < shuffledQuestions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
                    </motion.button>
                  </div>
                )}
              </>
            ) : showScoreTable ? (
              /* Score Table */
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <div className="mb-8">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-3xl font-title text-text-primary mb-6 text-shadow">
                    Bảng Điểm Chi Tiết
                  </h3>
                </div>

                {/* Score Summary */}
                <div className="bg-gradient-to-r from-tech/10 to-marx/10 rounded-3xl p-8 mb-8 border border-philosophy">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold tech-text mb-2">
                        {getScoreDetails().percentage}%
                      </div>
                      <div className="text-text-secondary font-body">Tổng điểm</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-text-primary mb-2">
                        {getScoreDetails().grade}
                      </div>
                      <div className="text-text-secondary font-body">Xếp loại</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold tech-text mb-2">
                        {getScoreDetails().correctAnswers}
                      </div>
                      <div className="text-text-secondary font-body">Đúng</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold marx-text mb-2">
                        {getScoreDetails().wrongAnswers}
                      </div>
                      <div className="text-text-secondary font-body">Sai</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-background-light rounded-full h-4 mb-4">
                    <div 
                      className="contrast-gradient h-4 rounded-full transition-all duration-1000"
                      style={{ width: `${getScoreDetails().percentage}%` }}
                    />
                  </div>

                  {/* Score Message */}
                  <p className={`text-xl font-body ${getScoreMessage().color} font-bold`}>
                    {getScoreMessage().message}
                  </p>
                </div>

                {/* Detailed Stats */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-tech/5 p-6 rounded-2xl border border-tech/30">
                    <h4 className="text-lg font-bold tech-text mb-4">📈 Thống kê tích cực</h4>
                    <ul className="space-y-2 text-text-secondary font-body text-left">
                      <li>• Tổng câu hỏi: {getScoreDetails().totalQuestions}</li>
                      <li>• Câu trả lời đúng: {getScoreDetails().correctAnswers}</li>
                      <li>• Tỷ lệ chính xác: {getScoreDetails().percentage}%</li>
                      <li>• Xếp loại: {getScoreDetails().grade}</li>
                    </ul>
                  </div>
                  <div className="bg-marx/5 p-6 rounded-2xl border border-marx/30">
                    <h4 className="text-lg font-bold marx-text mb-4">📉 Cần cải thiện</h4>
                    <ul className="space-y-2 text-text-secondary font-body text-left">
                      <li>• Câu trả lời sai: {getScoreDetails().wrongAnswers}</li>
                      <li>• Tỷ lệ sai: {100 - getScoreDetails().percentage}%</li>
                      <li>• Cần học thêm: {getScoreDetails().wrongAnswers} chủ đề</li>
                      <li>• Mục tiêu: Đạt 80% trở lên</li>
                    </ul>
                  </div>
                </div>

                {/* Auto Exit Timer */}
                <div className="mb-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-text-accent bg-background-light">
                    <svg className="w-5 h-5 mr-2 text-text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-text-secondary font-body">
                      Tự động thoát sau <span className="font-bold text-text-primary">{autoExitTimer}s</span>
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRestart}
                    className="px-8 py-3 contrast-gradient text-text-primary font-bold rounded-full transition-all duration-300"
                  >
                    🔄 Chơi lại
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleExit}
                    className="px-8 py-3 bg-philosophy-light text-text-primary font-bold rounded-full border border-philosophy transition-all duration-300"
                  >
                    ❌ Thoát ngay
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              /* Loading/Transition */
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-6"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-3xl font-title text-text-primary mb-4">
                    Hoàn thành!
                  </h3>
                  <p className="text-text-secondary font-body">
                    Đang tính toán điểm số...
                  </p>
                </motion.div>
              </div>
            )}
    </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameModal;