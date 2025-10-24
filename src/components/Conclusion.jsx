import { motion } from 'framer-motion';

const Conclusion = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-capital-dark via-surplus-dark to-capital-dark"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-labor rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-surplus rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Question */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="text-gradient from-labor via-white to-surplus">
              Câu Hỏi Cuối Cùng
            </span>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-effect p-12 rounded-3xl border-2 border-white/20"
          >
            <p className="text-3xl md:text-5xl font-bold leading-relaxed">
              <span className="text-white">Liệu doanh nghiệp</span>
              <br />
              <span className="text-white">thực sự vì</span>
              <br />
              <span className="text-labor text-4xl md:text-6xl">CON NGƯỜI</span>
              <br />
              <span className="text-white">hay vì</span>
              <br />
              <span className="text-surplus text-4xl md:text-6xl">GIÁ TRỊ THẶNG DƯ</span>
              <span className="text-white">?</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Summary Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="glass-effect p-6 rounded-xl border border-capital-light/30">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="text-xl font-bold text-capital-light mb-2">Tư bản bất biến (c)</h3>
            <p className="text-sm text-gray-400">Công cụ, máy móc không tạo giá trị mới</p>
          </div>

          <div className="glass-effect p-6 rounded-xl border border-labor/30">
            <div className="text-4xl mb-3">👷</div>
            <h3 className="text-xl font-bold text-labor mb-2">Tư bản khả biến (v)</h3>
            <p className="text-sm text-gray-400">Con người - nguồn tạo ra mọi giá trị</p>
          </div>

          <div className="glass-effect p-6 rounded-xl border border-surplus/30">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-xl font-bold text-surplus mb-2">Giá trị thặng dư (m)</h3>
            <p className="text-sm text-gray-400">Phần giá trị bị chiếm đoạt</p>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="glass-effect p-10 rounded-2xl border-2 border-surplus/50 mb-12"
        >
          <h3 className="text-3xl font-bold mb-6 text-surplus">Thông Điệp</h3>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Trong nền kinh tế tư bản chủ nghĩa, mọi quyết định của doanh nghiệp đều hướng tới một mục tiêu duy nhất: 
            <span className="text-surplus font-bold"> tối đa hóa lợi nhuận</span> (m).
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            <span className="text-labor font-bold">"Con người là trung tâm"</span> là khẩu hiệu đẹp, 
            nhưng <span className="text-surplus font-bold">giá trị thặng dư mới là trung tâm</span> thực sự.
          </p>
          <p className="text-xl text-labor font-bold">
            Nhận thức được điều này không phải để bi quan, mà để tỉnh táo bảo vệ quyền lợi chính đáng của mình.
          </p>
        </motion.div>

        {/* Formula Reminder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 text-4xl md:text-6xl font-black"
        >
          <span className="text-white">W</span>
          <span className="text-gray-500">=</span>
          <span className="text-capital-light">c</span>
          <span className="text-gray-500">+</span>
          <span className="text-labor">v</span>
          <span className="text-gray-500">+</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-surplus"
          >
            m
          </motion.span>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 text-gray-500 text-sm"
        >
          <p>Được xây dựng với mục đích giáo dục và nâng cao nhận thức</p>
          <p className="mt-2">© 2025 - Hiểu để thay đổi</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;

