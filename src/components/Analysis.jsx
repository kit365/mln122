import { motion } from 'framer-motion';

const Analysis = () => {
  const exploitationTypes = [
    {
      type: "Giá trị thặng dư TUYỆT ĐỐI",
      icon: "⏰",
      color: "surplus",
      description: "Kéo dài thời gian làm việc",
      examples: [
        "Văn hóa overtime không lương",
        "Always-on, always-connected",
        "Email/Slack sau giờ làm việc",
        "Deadline phi thực tế"
      ],
      formula: "Tăng m bằng cách kéo dài thời gian lao động"
    },
    {
      type: "Giá trị thặng dư TƯƠNG ĐỐI",
      icon: "📈",
      color: "labor",
      description: "Tăng năng suất lao động",
      examples: [
        "Đào tạo & phát triển kỹ năng",
        "KPI & OKR áp lực cao",
        "Tự động hóa & AI thay thế",
        "\"Làm nhiều hơn với ít hơn\""
      ],
      formula: "Tăng m bằng cách giảm thời gian lao động cần thiết"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-capital-dark via-capital-gray to-capital-dark opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hai Hình Thức <span className="text-surplus">Bóc Lột</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Doanh nghiệp hiện đại sử dụng cả hai phương pháp để tối đa hóa lợi nhuận
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {exploitationTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`glass-effect p-8 rounded-2xl border-2 transition-all duration-300 ${
                item.color === 'surplus' 
                  ? 'border-surplus/30 hover:border-surplus' 
                  : 'border-labor/30 hover:border-labor'
              }`}
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${
                item.color === 'surplus' ? 'text-surplus' : 'text-labor'
              }`}>
                {item.type}
              </h3>
              <p className="text-lg text-gray-300 mb-6 font-semibold">
                {item.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-bold">
                  Biểu hiện thực tế:
                </h4>
                <ul className="space-y-2">
                  {item.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`mr-2 flex-shrink-0 ${
                        item.color === 'surplus' ? 'text-surplus' : 'text-labor'
                      }`}>▸</span>
                      <span className="text-gray-300">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-4 rounded-lg ${
                item.color === 'surplus' 
                  ? 'bg-surplus/10 border border-surplus/30' 
                  : 'bg-labor/10 border border-labor/30'
              }`}>
                <p className="text-sm text-gray-400 italic">
                  {item.formula}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-effect p-8 rounded-2xl border-2 border-surplus/50"
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">💡</span>
            <div>
              <h4 className="text-2xl font-bold mb-3 text-surplus">Nhận diện then chốt:</h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                Khi doanh nghiệp nói "phát triển bạn", họ đang <span className="text-labor font-bold">tăng năng suất của bạn</span> (v) 
                để <span className="text-surplus font-bold">tăng giá trị thặng dư</span> (m). 
                Khi họ yêu cầu "commitment" và "passion", họ đang <span className="text-surplus font-bold">kéo dài thời gian bóc lột</span> mà 
                không cần trả thêm tiền.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analysis;

