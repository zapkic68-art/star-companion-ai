import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.png";
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
            <motion.div
              className="w-32 h-32 mx-auto bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={appIcon}
                alt="星伴云宝"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(50deg, rgb(110, 194, 250), rgb(80, 112, 241))' }}
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
                className="text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundImage: 'linear-gradient(105deg, #5FBDFB, #2D51DE)' }}
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4759">
                  <path d="M836.608 675.84q41.984 59.392 96.256 76.8-23.552 72.704-74.752 151.552-78.848 118.784-155.648 118.784-28.672 0-84.992-19.456-52.224-19.456-91.136-19.456t-86.016 20.48q-49.152 19.456-80.896 19.456-92.16 0-181.248-156.672-89.088-154.624-89.088-304.128 0-138.24 67.584-226.304 69.632-88.064 172.032-88.064 22.528 0 50.176 5.632t57.344 20.992q31.744 17.408 52.224 24.064t31.744 6.656q13.312 0 40.96-6.144t55.296-22.528q29.696-16.384 51.2-24.576t44.032-8.192q71.68 0 129.024 38.912 30.72 20.48 62.464 60.416-47.104 40.96-68.608 71.68-39.936 57.344-39.936 124.928 0 74.752 41.984 135.168z m-205.824-478.208q-35.84 33.792-65.536 44.032-10.24 3.072-26.112 5.632t-36.352 4.608q1.024-90.112 47.104-155.648T701.44 6.144q2.048 10.24 3.072 14.336v11.264q0 36.864-17.408 82.944-18.432 45.056-56.32 82.944z" fill="#ffffff" p-id="4760"></path>
                </svg>
                iOS 下载
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundImage: 'linear-gradient(105deg, #5FBDFB, #2D51DE)' }}
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5806">
                  <path d="M141.1 331.2c-35 0-63.3 28.3-63.3 63.2v264.7c0 34.9 28.4 63.2 63.3 63.2 35 0 63.3-28.3 63.3-63.2V394.4c0-34.9-28.3-63.2-63.3-63.2zM228.9 753.3c0 37.3 30.3 67.5 67.6 67.5h46.1v140c0 34.9 28.4 63.2 63.3 63.2 35 0 63.3-28.3 63.3-63.2v-140h85.5v140c0 34.9 28.4 63.2 63.3 63.2 35 0 63.3-28.3 63.3-63.2v-140h46.1c37.3 0 67.6-30.2 67.6-67.5V343.1H228.9v410.2zM651.8 93.4L696 13c2.4-4.2 0.8-9.6-3.5-11.9-4.2-2.3-9.6-0.8-11.9 3.5l-44.7 81.2C598.4 69.2 556.4 59.9 512 59.9c-44.4 0-86.4 9.3-123.9 25.8L343.4 4.6c-2.3-4.3-7.7-5.8-11.9-3.5-4.3 2.3-5.9 7.7-3.5 11.9l44.2 80.4c-86.8 44.8-145.5 130-145.5 227.7h570.5c0.1-97.8-58.6-182.9-145.4-227.7zM382.2 218c-13.2 0-23.9-10.7-23.9-23.9s10.7-23.9 23.9-23.9 23.9 10.7 23.9 23.9c-0.1 13.2-10.8 23.9-23.9 23.9z m259.7 0c-13.2 0-23.9-10.7-23.9-23.9s10.7-23.9 23.9-23.9 23.9 10.7 23.9 23.9c-0.1 13.2-10.8 23.9-23.9 23.9zM882.9 331.2c-35 0-63.3 28.3-63.3 63.2v264.7c0 34.9 28.4 63.2 63.3 63.2 35 0 63.3-28.3 63.3-63.2V394.4c0-34.9-28.3-63.2-63.3-63.2z" fill="#ffffff" p-id="5807"></path>
                </svg>
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

      {/* Company Introduction */}
      <section className="relative z-10 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center mb-6 text-gray-800"
          >
            深圳赛博迈石科技有限公司
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-center text-[#6C7993] leading-relaxed"
          >
            深圳赛博迈石科技有限公司成立于2024年08月21日，注册地位于深圳市南山区粤海街道科技园社区科发路222号康泰集团大厦1406，法定代表人为巫希楠。经营范围包括技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；人工智能应用软件开发；网络与信息安全软件开发；软件开发；信息技术咨询服务；人工智能公共服务平台技术咨询服务；信息咨询服务（不含许可类信息咨询服务）；专业设计服务；教育咨询服务（不含涉许可审批的教育培训活动）；文艺创作；企业形象策划；广告设计、代理；广告制作；组织文化艺术交流活动；市场营销策划；咨询策划服务；电影摄制服务；翻译服务；国内贸易代理；电子产品销售；广告发布；软件外包服务；数字文化创意软件开发；区块链技术相关软件和服务；软件销售；人工智能行业应用系统集成服务；智能控制系统集成；互联网销售（除销售需要许可的商品）；计算机软硬件及辅助设备批发；计算机系统服务；信息系统运行维护服务；信息系统集成服务；网络技术服务；动漫游戏开发；人工智能理论与算法软件开发；人工智能基础软件开发；工业控制计算机及系统销售。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）第二类增值电信业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center border-t border-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <a 
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030002005091" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              粤公网安备 44030002005091号
            </a>
            <span className="text-muted-foreground mx-2">｜</span>
            <a 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              粤ICP备2024318595号-5
            </a>
          </div>
          <p className="text-muted-foreground">
            地址：深圳市南山区粤海街道科技园社区科发路222号康泰集团大厦1406
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
