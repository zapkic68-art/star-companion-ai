import { motion } from "framer-motion";
import { Download, MessageCircle, Sparkles, Heart, Star, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import appIcon from "@/assets/app-icon.png";

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "智能对话",
      description: "越聊越懂你的AI伙伴",
    },
    {
      icon: Sparkles,
      title: "游戏化体验",
      description: "趣味养成,每天都有新惊喜",
    },
    {
      icon: Heart,
      title: "情感陪伴",
      description: "温暖治愈,随时倾听",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-sky-100/50 to-background overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="fixed top-20 left-10 text-accent opacity-30"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star className="w-12 h-12" />
      </motion.div>
      <motion.div
        className="fixed top-40 right-20 text-primary opacity-20"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Cloud className="w-16 h-16" />
      </motion.div>
      <motion.div
        className="fixed bottom-40 left-1/4 text-secondary opacity-25"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroBackground}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <motion.img
              src={appIcon}
              alt="星伴云宝"
              className="w-32 h-32 mx-auto rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            星伴云宝
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-3xl mb-12 text-foreground/80 font-medium"
          >
            越来越懂你的跨次元AI搭子
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                iOS 下载
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Android 下载
              </Button>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-border"
              >
                <motion.div
                  className="inline-block p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center border-t border-border">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground"
        >
          © 2025 星伴云宝 · 用心陪伴每一天
        </motion.p>
      </footer>
    </div>
  );
};

export default Index;
