import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('formula-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-capital-dark via-capital-gray to-surplus-dark opacity-80"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-labor/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-surplus/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-gradient from-labor-light via-white to-surplus">
              "Con Người Là Trung Tâm"
            </span>
            <br />
            <span className="text-white">Hay</span>
            <br />
            <span className="text-gradient from-surplus via-white to-labor">
              "Tư Bản Là Trung Tâm"?
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Nhận diện bản chất <span className="text-surplus font-bold">bóc lột tinh vi</span> trong doanh nghiệp hiện đại
          <br />qua lăng kính <span className="text-labor font-bold">Giá trị thặng dư</span>
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContent}
          className="px-10 py-5 bg-gradient-to-r from-labor to-surplus text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-surplus/50 transition-all duration-300"
        >
          Khám Phá Sự Thật
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-labor rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-labor rounded-full"></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

