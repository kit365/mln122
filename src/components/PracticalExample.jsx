import { motion } from 'framer-motion';

const PracticalExample = () => {
  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-labor/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-surplus/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ví Dụ Thực Tiễn: <span className="text-gradient from-labor to-surplus">Tập Đoàn Công Nghệ</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Phân tích sự mâu thuẫn giữa lời nói và hành động
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - The Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl border-2 border-labor/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎭</span>
              <h3 className="text-3xl font-bold text-labor">Câu Chuyện Được Kể</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-labor/10 p-4 rounded-lg">
                <h4 className="font-bold text-labor mb-2">🏢 "Con người là tài sản quý nhất"</h4>
                <p className="text-gray-300 text-sm">
                  Văn hóa doanh nghiệp đề cao sự sáng tạo, tự do làm việc
                </p>
              </div>

              <div className="bg-labor/10 p-4 rounded-lg">
                <h4 className="font-bold text-labor mb-2">🎉 Phúc lợi "đỉnh cao"</h4>
                <p className="text-gray-300 text-sm">
                  Gym miễn phí, bàn bi-a, đồ ăn free, massage, game room...
                </p>
              </div>

              <div className="bg-labor/10 p-4 rounded-lg">
                <h4 className="font-bold text-labor mb-2">🚀 "Phát triển kỹ năng"</h4>
                <p className="text-gray-300 text-sm">
                  Đào tạo liên tục, học công nghệ mới, certification support
                </p>
              </div>

              <div className="bg-labor/10 p-4 rounded-lg">
                <h4 className="font-bold text-labor mb-2">💰 Lương cao & Stock options</h4>
                <p className="text-gray-300 text-sm">
                  Đãi ngộ tốt nhất thị trường, cơ hội trở thành triệu phú
                </p>
              </div>

              <div className="bg-labor/10 p-4 rounded-lg">
                <h4 className="font-bold text-labor mb-2">🌈 "Work-life balance"</h4>
                <p className="text-gray-300 text-sm">
                  WFH linh hoạt, không checkin/checkout, tự do sắp xếp thời gian
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - The Reality */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl border-2 border-surplus/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🔍</span>
              <h3 className="text-3xl font-bold text-surplus">Bản Chất Bóc Lột</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-surplus/10 p-4 rounded-lg border border-surplus/30">
                <h4 className="font-bold text-surplus mb-2">🎯 Chiếm đoạt dữ liệu & sáng tạo</h4>
                <p className="text-gray-300 text-sm">
                  Mọi ý tưởng, code, data đều thuộc về công ty. Giá trị thặng dư khổng lồ.
                </p>
              </div>

              <div className="bg-surplus/10 p-4 rounded-lg border border-surplus/30">
                <h4 className="font-bold text-surplus mb-2">⏰ "Blur" giờ làm việc</h4>
                <p className="text-gray-300 text-sm">
                  Gym tại công ty → Ở lại lâu hơn. Ăn free → Không cần về nhà. = Kéo dài thời gian bóc lột.
                </p>
              </div>

              <div className="bg-surplus/10 p-4 rounded-lg border border-surplus/30">
                <h4 className="font-bold text-surplus mb-2">📊 Tăng năng suất = Tăng bóc lột</h4>
                <p className="text-gray-300 text-sm">
                  Đào tạo bạn để bạn làm việc của 3 người. Tăng v để tăng m gấp bội.
                </p>
              </div>

              <div className="bg-surplus/10 p-4 rounded-lg border border-surplus/30">
                <h4 className="font-bold text-surplus mb-2">💸 Golden handcuffs</h4>
                <p className="text-gray-300 text-sm">
                  Lương cao + vesting → Khóa chặt 4 năm. Sợ mất tiền nên chịu đựng mọi áp lực.
                </p>
              </div>

              <div className="bg-surplus/10 p-4 rounded-lg border border-surplus/30">
                <h4 className="font-bold text-surplus mb-2">📱 Always-connected culture</h4>
                <p className="text-gray-300 text-sm">
                  WFH linh hoạt = làm việc 24/7. Slack/Email lúc nào cũng phải rep. Không có ranh giới.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl border-2 border-white/20"
        >
          <div className="flex items-start gap-4">
            <span className="text-5xl">⚡</span>
            <div>
              <h4 className="text-2xl font-bold mb-4">Kết luận:</h4>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Tất cả những "lợi ích" trên không phải là <span className="text-labor font-bold">tặng thêm</span>, 
                mà là <span className="text-surplus font-bold">đầu tư chiến lược</span> để:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-surplus mr-2">▸</span>
                  <span><strong>Tăng thời gian</strong> bạn ở công ty (tuyệt đối)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-surplus mr-2">▸</span>
                  <span><strong>Tăng năng suất</strong> làm việc của bạn (tương đối)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-surplus mr-2">▸</span>
                  <span><strong>Tối đa hóa m</strong> (giá trị thặng dư) từ mỗi nhân viên</span>
                </li>
              </ul>
              <p className="text-lg text-surplus font-bold mt-4 italic">
                "Doanh nghiệp phát triển bạn – để khai thác bạn hiệu quả hơn."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticalExample;

