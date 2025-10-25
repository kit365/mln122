import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Import images so Vite bundles them correctly for production
import img_m5ph from '../asset/Gemini_Generated_Image_m5phxem5phxem5ph.png';
import img_dn498 from '../asset/Gemini_Generated_Image_dn498ydn498ydn49.png';
import img_unnamed from '../asset/unnamed.jpg';
import img_sfp8 from '../asset/Gemini_Generated_Image_sfp8v1sfp8v1sfp8.png';
import img_64xl from '../asset/Gemini_Generated_Image_64xlwn64xlwn64xl.png';

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const timelineData = [
    {
      year: "2024 - Tháng 6",
      title: "Tốt nghiệp Đại học",
      description: "Long tốt nghiệp ngành Công nghệ thông tin với điểm số cao, đầy nhiệt huyết và kỳ vọng lớn về sự nghiệp.",
      detailedContent: `
        <h4 class="text-lg font-bold mb-3 text-labor">🎯 Hoàn cảnh ban đầu:</h4>
        <ul class="space-y-2 mb-4">
          <li>• Điểm GPA: 3.8/4.0, top 10% của khóa</li>
          <li>• Có kinh nghiệm thực tập tại 2 công ty công nghệ</li>
          <li>• Thành thạo 3 ngôn ngữ lập trình: Python, JavaScript, Java</li>
          <li>• Có chứng chỉ AWS và Google Cloud</li>
          <li>• Kỳ vọng mức lương: 15-20 triệu VNĐ/tháng</li>
        </ul>
        <p class="text-gray-300 italic">"Mình sẵn sàng học hỏi và cống hiến hết mình cho công ty!"</p>
      `,
  imagePlaceholder: img_m5ph,
      icon: "🎓",
      color: "labor",
      status: "Bắt đầu",
      marxAnalysis: "Đây là giai đoạn 'sản xuất sức lao động' - Long đã đầu tư thời gian và tiền bạc để tạo ra giá trị sức lao động có kỹ năng cao."
    },
    {
      year: "2024 - Tháng 7",
      title: "Ứng tuyển vào Startup",
      description: "Long được nhận vào một startup công nghệ với slogan 'Con người là tài sản quý giá nhất'. Mức lương khởi điểm thấp nhưng hứa hẹn 'phát triển bản thân'.",
      detailedContent: `
        <h4 class="text-lg font-bold mb-3 text-surplus">🚨 Những dấu hiệu đỏ:</h4>
        <ul class="space-y-2 mb-4">
          <li>• Mức lương: 8 triệu VNĐ/tháng (thấp hơn kỳ vọng 50%)</li>
          <li>• Lời hứa: "Sau 6 tháng sẽ tăng lương dựa trên performance"</li>
          <li>• Văn hóa: "We're a family", "Passion over money"</li>
          <li>• Yêu cầu: Làm việc 6 ngày/tuần, "flexible hours"</li>
          <li>• Lợi ích: "Cơ hội học hỏi vô giá", "Stock options"</li>
        </ul>
        <div class="bg-surplus/10 p-3 rounded-lg mb-4">
          <p class="text-sm text-surplus font-bold">💬 Lời CEO: "Chúng tôi không chỉ trả lương, chúng tôi đầu tư vào tương lai của bạn!"</p>
        </div>
        <p class="text-gray-300 italic">Long nghĩ: "Có lẽ đây là cơ hội tốt để học hỏi và phát triển..."</p>
      `,
  imagePlaceholder: img_dn498,
      icon: "🚀",
      color: "surplus",
      status: "Bị lừa dối",
      marxAnalysis: "Đây là giai đoạn 'mua sức lao động' - Tư bản mua sức lao động của Long với giá thấp hơn giá trị thực tế mà nó có thể tạo ra."
    },
    {
      year: "2024 - Tháng 8-10",
      title: "Giai đoạn 'Đào tạo'",
      description: "Long được 'đào tạo' liên tục: học thêm kỹ năng mới, làm việc 12-14 tiếng/ngày, tham gia các khóa học 'phát triển bản thân'. Công ty nói đây là 'đầu tư vào nhân tài'.",
      detailedContent: `
        <h4 class="text-lg font-bold mb-3 text-red-400">⏰ Lịch làm việc thực tế:</h4>
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div class="bg-red-400/10 p-3 rounded-lg">
            <h5 class="font-bold text-red-400 mb-2">Thứ 2-6:</h5>
            <ul class="text-sm space-y-1">
              <li>• 8:00-12:00: Code features mới</li>
              <li>• 13:00-17:00: Fix bugs, code review</li>
              <li>• 18:00-22:00: Học thêm kỹ năng</li>
              <li>• 22:00-23:00: Check email, Slack</li>
            </ul>
          </div>
          <div class="bg-red-400/10 p-3 rounded-lg">
            <h5 class="font-bold text-red-400 mb-2">Thứ 7:</h5>
            <ul class="text-sm space-y-1">
              <li>• 9:00-12:00: Team building</li>
              <li>• 13:00-17:00: Hackathon, workshop</li>
              <li>• 18:00-20:00: "Optional" meeting</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-lg font-bold mb-3 text-surplus">📚 Các khóa học 'bắt buộc':</h4>
        <ul class="space-y-2 mb-4">
          <li>• "Agile Development" - 40 giờ (cuối tuần)</li>
          <li>• "Leadership Skills" - 20 giờ (sau giờ làm)</li>
          <li>• "Company Culture" - 16 giờ (online)</li>
          <li>• "Advanced Programming" - 60 giờ (tự học)</li>
        </ul>
        
        <div class="bg-labor/10 p-3 rounded-lg">
          <p class="text-sm text-labor font-bold">💡 Kết quả: Long tạo ra giá trị gấp 3 lần mức lương nhưng vẫn nhận 8 triệu/tháng</p>
        </div>
      `,
  imagePlaceholder: img_unnamed,
      icon: "📚",
      color: "surplus",
      status: "Bóc lột tinh vi",
      marxAnalysis: "Đây là giá trị thặng dư tương đối - tăng năng suất lao động (v) để tăng giá trị thặng dư (m) mà không cần tăng lương. 'Đào tạo' chỉ là cách tinh vi để tăng mức độ bóc lột."
    },
    {
      year: "2024 - Tháng 11-12",
      title: "Nhận ra sự thật",
      description: "Long nhận ra: mình đang tạo ra giá trị thặng dư khổng lồ cho công ty nhưng chỉ nhận được mức lương cơ bản. 'Phát triển' chỉ là cách tăng năng suất lao động.",
      detailedContent: `
        <h4 class="text-lg font-bold mb-3 text-labor">💡 Khoảnh khắc tỉnh ngộ:</h4>
        <div class="bg-labor/10 p-4 rounded-lg mb-4">
          <p class="text-sm text-labor italic mb-3">"Tôi tính toán lại và nhận ra mình đã bị lừa dối..."</p>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 class="font-bold text-labor mb-2">Giá trị tôi tạo ra:</h5>
              <ul class="space-y-1">
                <li>• 3 features chính: 150 triệu VNĐ</li>
                <li>• Fix bugs: 50 triệu VNĐ</li>
                <li>• Code review: 30 triệu VNĐ</li>
                <li>• Training team: 20 triệu VNĐ</li>
                <li><strong>Tổng: 250 triệu VNĐ/tháng</strong></li>
              </ul>
            </div>
            <div>
              <h5 class="font-bold text-surplus mb-2">Tôi nhận được:</h5>
              <ul class="space-y-1">
                <li>• Lương: 8 triệu VNĐ</li>
                <li>• Thưởng: 2 triệu VNĐ</li>
                <li>• Stock options: 0 (chưa vest)</li>
                <li>• Lợi ích khác: 1 triệu VNĐ</li>
                <li><strong>Tổng: 11 triệu VNĐ/tháng</strong></li>
              </ul>
            </div>
          </div>
          <p class="text-center text-labor font-bold mt-3">Tỷ lệ bóc lột: 95.6%!</p>
        </div>
        
        <h4 class="text-lg font-bold mb-3 text-surplus">🔍 Những phát hiện khác:</h4>
        <ul class="space-y-2 mb-4">
          <li>• CEO mua xe Tesla mới bằng tiền lợi nhuận</li>
          <li>• Công ty thuê thêm 5 nhân viên mới với mức lương tương tự</li>
          <li>• "Stock options" chỉ có giá trị nếu công ty IPO (không chắc chắn)</li>
          <li>• "Phát triển bản thân" chỉ làm tăng giá trị cho công ty</li>
        </ul>
      `,
  imagePlaceholder: img_sfp8,
      icon: "💡",
      color: "labor",
      status: "Tỉnh ngộ",
      marxAnalysis: "Long đã nhận ra bản chất của giá trị thặng dư - phần giá trị do lao động tạo ra vượt quá giá trị sức lao động (tiền lương). Đây là cơ sở của sự bóc lột trong chủ nghĩa tư bản."
    },
    {
      year: "2025 - Hiện tại",
      title: "Hành động",
      description: "Long quyết định: hoặc đòi hỏi mức lương xứng đáng với giá trị mình tạo ra, hoặc tìm công ty khác. Không còn tin vào những lời hứa 'phát triển' mà không có lợi ích thực tế.",
      detailedContent: `
        <h4 class="text-lg font-bold mb-3 text-surplus">⚡ Kế hoạch hành động:</h4>
        <div class="space-y-4 mb-4">
          <div class="bg-surplus/10 p-4 rounded-lg">
            <h5 class="font-bold text-surplus mb-2">Bước 1: Đàm phán lương</h5>
            <ul class="text-sm space-y-1">
              <li>• Chuẩn bị báo cáo performance chi tiết</li>
              <li>• So sánh mức lương thị trường</li>
              <li>• Yêu cầu tăng lương lên 25 triệu VNĐ/tháng</li>
              <li>• Đề xuất cơ chế thưởng dựa trên giá trị tạo ra</li>
            </ul>
          </div>
          
          <div class="bg-labor/10 p-4 rounded-lg">
            <h5 class="font-bold text-labor mb-2">Bước 2: Tìm kiếm cơ hội mới</h5>
            <ul class="text-sm space-y-1">
              <li>• Cập nhật CV với thành tích thực tế</li>
              <li>• Tham gia các cộng đồng developer</li>
              <li>• Ứng tuyển vào các công ty có chính sách lương minh bạch</li>
              <li>• Phỏng vấn với 5 công ty khác nhau</li>
            </ul>
          </div>
          
          <div class="bg-gradient-to-r from-labor/20 to-surplus/20 p-4 rounded-lg">
            <h5 class="font-bold text-white mb-2">Bước 3: Quyết định cuối cùng</h5>
            <p class="text-sm text-gray-300">Nếu công ty hiện tại không đồng ý tăng lương, Long sẽ chuyển sang công ty mới với mức lương 30+ triệu VNĐ/tháng.</p>
          </div>
        </div>
        
        <h4 class="text-lg font-bold mb-3 text-labor">📈 Kết quả mong đợi:</h4>
        <ul class="space-y-2 mb-4">
          <li>• Mức lương tăng 200-300%</li>
          <li>• Làm việc trong môi trường công bằng hơn</li>
          <li>• Có cơ chế thăng tiến rõ ràng</li>
          <li>• Không bị bóc lột dưới danh nghĩa "phát triển"</li>
        </ul>
      `,
  imagePlaceholder: img_64xl,
      icon: "⚡",
      color: "surplus",
      status: "Hành động",
      marxAnalysis: "Long đã nhận ra rằng trong chủ nghĩa tư bản, người lao động phải đấu tranh để giành lại phần giá trị thặng dư mà họ tạo ra. Đây là cuộc đấu tranh giai cấp trong thời đại mới."
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Bắt đầu": return "tech-text";
      case "Bị lừa dối": return "marx-text";
      case "Bóc lột tinh vi": return "marx-text";
      case "Tỉnh ngộ": return "tech-text";
      case "Hành động": return "marx-text";
      default: return "text-text-accent";
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "Bắt đầu": return "bg-tech/20 border-tech/50";
      case "Bị lừa dối": return "bg-marx/20 border-marx/50";
      case "Bóc lột tinh vi": return "bg-marx/20 border-marx/50";
      case "Tỉnh ngộ": return "bg-tech/20 border-tech/50";
      case "Hành động": return "bg-marx/20 border-marx/50";
      default: return "bg-text-accent/20 border-text-accent/50";
    }
  };

  const nextTimeline = () => {
    setCurrentIndex((prev) => (prev + 1) % timelineData.length);
  };

  const prevTimeline = () => {
    setCurrentIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  const goToTimeline = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen py-20 px-6 relative bg-philosophy">
      {/* Background */}
      <div className="absolute inset-0 philosophy-gradient opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-title mb-6 text-shadow">
            Câu Chuyện Của <span className="tech-text">Long</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-body">
            Hành trình của một sinh viên mới ra trường nhận ra bản chất thực sự của "con người là trung tâm"
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <button
              onClick={prevTimeline}
              className="p-3 rounded-full bg-tech/20 hover:bg-tech/30 border border-tech/50 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-tech" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {timelineData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTimeline(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-tech scale-125' 
                      : 'bg-text-accent hover:bg-text-secondary'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTimeline}
              className="p-3 rounded-full bg-marx/20 hover:bg-marx/30 border border-marx/50 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-marx" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Current Timeline Item */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="glass-effect p-8 rounded-3xl border-2 border-philosophy hover:border-tech/50 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl">{timelineData[currentIndex].icon}</div>
                  <div>
                    <div className="text-sm text-text-accent font-semibold mb-1">
                      {timelineData[currentIndex].year}
                    </div>
                    <h3 className="text-3xl font-title text-text-primary mb-2 text-shadow">
                      {timelineData[currentIndex].title}
                    </h3>
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getStatusBg(timelineData[currentIndex].status)}`}>
                      <span className={getStatusColor(timelineData[currentIndex].status)}>
                        {timelineData[currentIndex].status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="mb-6">
                <div className="relative rounded-2xl overflow-hidden border border-philosophy">
                  {timelineData[currentIndex].imagePlaceholder ? (
                    <img 
                      src={timelineData[currentIndex].imagePlaceholder}
                      alt={`Hình ảnh cho ${timelineData[currentIndex].title}`}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="w-full h-64 bg-gradient-to-r from-tech/10 to-marx/10 flex items-center justify-center"
                    style={{ display: timelineData[currentIndex].imagePlaceholder ? 'none' : 'flex' }}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-text-secondary italic text-lg font-body">
                        Chưa có hình ảnh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-xl text-text-secondary leading-relaxed font-body">
                  {timelineData[currentIndex].description}
                </p>
              </div>

              {/* Detailed Content */}
              <div 
                className="mb-6 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: timelineData[currentIndex].detailedContent }}
              />

              {/* Marx Analysis */}
              <div className="p-6 bg-gradient-to-r from-tech/10 to-marx/10 rounded-2xl border border-philosophy">
                <h4 className="text-lg font-bold mb-3 marx-text flex items-center">
                  <span className="mr-2">📚</span>
                  Phân tích Marx - Lênin:
                </h4>
                <p className="text-text-secondary leading-relaxed font-body">
                  {timelineData[currentIndex].marxAnalysis}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Timeline Progress */}
        <div className="mt-12 text-center">
          <div className="text-sm text-text-accent mb-2 font-body">
            Timeline {currentIndex + 1} / {timelineData.length}
          </div>
          <div className="w-full bg-background-light rounded-full h-2">
            <div 
              className="contrast-gradient h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / timelineData.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Key Lessons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <div className="glass-effect p-8 rounded-3xl border-2 border-philosophy">
            <h3 className="text-3xl font-title mb-8 text-center tech-text text-shadow">
              📚 Bài Học Cho Sinh Viên Mới Ra Trường
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-marx/10 p-6 rounded-2xl border border-marx/30">
                  <h4 className="text-xl font-bold marx-text mb-4 flex items-center">
                    <span className="mr-2">🚨</span>
                    Cảnh giác với:
                  </h4>
                  <ul className="space-y-3 text-text-secondary font-body">
                    <li className="flex items-start">
                      <span className="mr-2 marx-text">•</span>
                      <span>"Phát triển bản thân" không đi kèm tăng lương</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 marx-text">•</span>
                      <span>Văn hóa "passion" và "commitment" quá mức</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 marx-text">•</span>
                      <span>Lời hứa "cơ hội thăng tiến" mơ hồ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 marx-text">•</span>
                      <span>Áp lực làm việc ngoài giờ không lương</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 marx-text">•</span>
                      <span>"Stock options" không có giá trị thực tế</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 marx-text">•</span>
                      <span>Lương thấp với lý do "học hỏi kinh nghiệm"</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-tech/10 p-6 rounded-2xl border border-tech/30">
                  <h4 className="text-xl font-bold tech-text mb-4 flex items-center">
                    <span className="mr-2">✅</span>
                    Hành động đúng:
                  </h4>
                  <ul className="space-y-3 text-text-secondary font-body">
                    <li className="flex items-start">
                      <span className="mr-2 tech-text">•</span>
                      <span>Đòi hỏi mức lương xứng đáng với giá trị tạo ra</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 tech-text">•</span>
                      <span>Tìm hiểu kỹ về công ty và văn hóa làm việc</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 tech-text">•</span>
                      <span>Phát triển kỹ năng để tăng giá trị thị trường</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 tech-text">•</span>
                      <span>Không ngại thay đổi khi bị bóc lột</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 tech-text">•</span>
                      <span>Tham gia các cộng đồng nghề nghiệp</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 tech-text">•</span>
                      <span>Luôn có kế hoạch B và C</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SDG 8 Connection */}
            <div className="bg-gradient-to-r from-tech/20 to-marx/20 p-6 rounded-2xl border border-philosophy mb-6">
              <h4 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                <span className="mr-2">🌍</span>
                Kết nối với Mục tiêu Phát triển Bền vững SDG 8
              </h4>
              <p className="text-text-secondary leading-relaxed mb-4 font-body">
                <strong className="tech-text">SDG 8: Việc làm bền vững và tăng trưởng kinh tế</strong> - Mục tiêu này hướng đến 
                "thúc đẩy tăng trưởng kinh tế bền vững, toàn diện và bền vững, việc làm đầy đủ, năng suất 
                và việc làm thỏa đáng cho tất cả mọi người."
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-bold tech-text mb-2">Thực trạng hiện tại:</h5>
                  <ul className="space-y-1 text-text-secondary font-body">
                    <li>• Tỷ lệ bóc lột lao động cao (như trường hợp Long)</li>
                    <li>• Lương không tương xứng với giá trị tạo ra</li>
                    <li>• Điều kiện làm việc không công bằng</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold marx-text mb-2">Cần thay đổi:</h5>
                  <ul className="space-y-1 text-text-secondary font-body">
                    <li>• Tăng lương tối thiểu và công bằng</li>
                    <li>• Bảo vệ quyền lợi người lao động</li>
                    <li>• Tạo cơ hội phát triển thực sự</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-tech/20 to-marx/20 rounded-2xl border border-philosophy">
              <p className="text-center text-text-secondary italic text-lg font-body">
                <strong className="tech-text">Nhớ rằng:</strong> Trong chủ nghĩa tư bản, "con người là trung tâm" chỉ có nghĩa là 
                con người là trung tâm của việc tạo ra giá trị thặng dư cho tư bản. 
                <span className="marx-text font-bold"> Hãy đấu tranh để giành lại phần giá trị mà bạn tạo ra!</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
