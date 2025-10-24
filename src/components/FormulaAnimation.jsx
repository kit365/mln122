import { motion } from 'framer-motion';
import { useState } from 'react';

const FormulaAnimation = () => {
  const [hoveredPart, setHoveredPart] = useState(null);

  const tooltips = {
    c: {
      title: "Tư bản bất biến (c)",
      desc: "Máy móc, công cụ, nguyên liệu - Không tạo ra giá trị mới"
    },
    v: {
      title: "Tư bản khả biến (v)",
      desc: "Sức lao động của con người - Tạo ra giá trị mới"
    },
    m: {
      title: "Giá trị thặng dư (m)",
      desc: "Phần giá trị bị chiếm đoạt - Lợi nhuận của chủ tư bản"
    }
  };

  return (
    <section id="formula-section" className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-capital-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-surplus/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          Công Thức <span className="text-surplus">Giá Trị Thặng Dư</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-20 text-lg"
        >
          Quan sát sự phân tách giá trị trong quá trình sản xuất
        </motion.p>

        {/* Formula Animation */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mb-20 flex-wrap">
          {/* W = */}
          <motion.div
            initial={{ scale: 2, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-white"
          >
            W =
          </motion.div>

          {/* c */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            onHoverStart={() => setHoveredPart('c')}
            onHoverEnd={() => setHoveredPart(null)}
            className="relative cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-6xl md:text-8xl font-black text-capital-light"
            >
              c
            </motion.div>
            {hoveredPart === 'c' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-64 glass-effect p-4 rounded-xl shadow-2xl z-20"
              >
                <h4 className="font-bold text-capital-light mb-2">{tooltips.c.title}</h4>
                <p className="text-sm text-gray-300">{tooltips.c.desc}</p>
              </motion.div>
            )}
          </motion.div>

          <div className="text-5xl md:text-7xl font-light text-gray-500">+</div>

          {/* v */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
            onHoverStart={() => setHoveredPart('v')}
            onHoverEnd={() => setHoveredPart(null)}
            className="relative cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-6xl md:text-8xl font-black text-labor"
            >
              v
            </motion.div>
            {hoveredPart === 'v' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-64 glass-effect p-4 rounded-xl shadow-2xl z-20"
              >
                <h4 className="font-bold text-labor mb-2">{tooltips.v.title}</h4>
                <p className="text-sm text-gray-300">{tooltips.v.desc}</p>
              </motion.div>
            )}
          </motion.div>

          <div className="text-5xl md:text-7xl font-light text-gray-500">+</div>

          {/* m */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, type: "spring" }}
            onHoverStart={() => setHoveredPart('m')}
            onHoverEnd={() => setHoveredPart(null)}
            className="relative cursor-pointer"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              whileHover={{ scale: 1.4, rotate: 10 }}
              className="text-6xl md:text-8xl font-black text-surplus"
            >
              m
            </motion.div>
            {hoveredPart === 'm' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-64 glass-effect p-4 rounded-xl shadow-2xl z-20"
              >
                <h4 className="font-bold text-surplus mb-2">{tooltips.m.title}</h4>
                <p className="text-sm text-gray-300">{tooltips.m.desc}</p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Explanation Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-effect p-8 rounded-2xl"
        >
          <p className="text-xl text-center leading-relaxed">
            <span className="text-white font-bold">W</span> (Giá trị hàng hóa) = 
            <span className="text-capital-light font-bold"> c</span> (tư bản bất biến) + 
            <span className="text-labor font-bold"> v</span> (tư bản khả biến) + 
            <span className="text-surplus font-bold"> m</span> (giá trị thặng dư)
          </p>
          <p className="text-gray-400 text-center mt-4">
            Chỉ có <span className="text-labor font-semibold">sức lao động (v)</span> mới tạo ra giá trị mới, 
            nhưng <span className="text-surplus font-semibold">phần giá trị thặng dư (m)</span> lại bị chiếm đoạt bởi chủ tư bản.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FormulaAnimation;

