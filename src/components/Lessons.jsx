import { motion } from 'framer-motion';

const Lessons = () => {
  const lessons = [
    {
      icon: "🧠",
      title: "Hiểu đúng bản chất quan hệ lao động",
      description: "Đừng nhầm lẫn giữa 'phúc lợi' và 'quyền lợi'. Mọi khoản đầu tư vào bạn đều hướng tới việc tăng m.",
      color: "surplus"
    },
    {
      icon: "💪",
      title: "Phát triển năng lực NHƯNG nhận thức quyền lợi",
      description: "Học hỏi, nâng cao kỹ năng là cần thiết. Nhưng đừng để điều đó biến bạn thành công cụ bóc lột hiệu quả hơn.",
      color: "labor"
    },
    {
      icon: "⛔",
      title: "Biết nói 'KHÔNG' với bóc lột tinh vi",
      description: "Từ chối OT không lương. Không trả lời email ngoài giờ. Yêu cầu đền bù xứng đáng với công sức.",
      color: "surplus"
    },
    {
      icon: "🤝",
      title: "Đoàn kết với người lao động khác",
      description: "Sức mạnh tập thể mới có thể đối trọng với tư bản. Chia sẻ lương, kinh nghiệm, hỗ trợ lẫn nhau.",
      color: "labor"
    },
    {
      icon: "📚",
      title: "Học tập lý luận, hiểu rõ vị thế của mình",
      description: "Đọc Marx, hiểu kinh tế chính trị. Nhận thức về giai cấp giúp bạn không bị 'tẩy não' bởi văn hóa doanh nghiệp.",
      color: "surplus"
    },
    {
      icon: "🎯",
      title: "Đòi hỏi quyền được hưởng thành quả lao động",
      description: "Lợi nhuận công ty tăng → Lương phải tăng. Năng suất tăng → Thời gian làm việc phải giảm. Đó là công bằng.",
      color: "labor"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-capital-gray via-capital-dark to-capital-gray opacity-70"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bài Học Cho <span className="text-gradient from-labor to-white">Sinh Viên & Người Lao Động</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Những điều cần biết trước khi bước vào thị trường lao động
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`glass-effect p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                lesson.color === 'surplus' 
                  ? 'border-surplus/30 hover:border-surplus' 
                  : 'border-labor/30 hover:border-labor'
              }`}
            >
              <div className="text-5xl mb-4">{lesson.icon}</div>
              <h3 className={`text-xl font-bold mb-3 ${
                lesson.color === 'surplus' ? 'text-surplus' : 'text-labor'
              }`}>
                {lesson.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {lesson.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-effect p-10 rounded-2xl border-2 border-surplus/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 text-[200px] text-surplus/10 font-bold leading-none">"</div>
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-bold text-center mb-6 leading-relaxed">
                <span className="text-surplus">Doanh nghiệp đầu tư vào bạn</span>
                <br />
                <span className="text-white">–</span>
                <br />
                <span className="text-labor">để khai thác bạn hiệu quả hơn.</span>
              </p>
              <p className="text-center text-gray-400 italic">
                Đừng quên điều này khi ký hợp đồng lao động.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6">
            Nhận thức đúng không có nghĩa là từ bỏ cơ hội
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Hãy làm việc, học hỏi, phát triển - nhưng với <span className="text-labor font-bold">sự tỉnh táo</span> và 
            <span className="text-surplus font-bold"> ý thức về quyền lợi</span> của chính mình.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Lessons;

