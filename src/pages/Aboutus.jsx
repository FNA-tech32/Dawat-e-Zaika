import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUsMarathi = () => {
  return (
    <div className="bg-white text-gray-800 poppins">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight poppins">
            🌟 आमच्याबद्दल – दावत-ए-जायका
          </h1>
          <p className="text-lg text-gray-600 poppins">
            स्वाद, सेवा आणि संस्कृती यांचा मिलाफ – मुंबई आणि कल्याणमधील
            सर्वोत्तम कॅटरिंग सेवा
          </p>
        </motion.header>

        {/* Section: चविष्ट अन्न */}
        <motion.section
          className="mb-12 poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-400 pl-4">
            चविष्ट अन्न, मनमिळावणी सेवा
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed poppins">
            <strong>दावत-ए-जायका</strong> मध्ये आम्ही अन्न बनवत नाही – आम्ही
            अनुभव घडवतो. आमच्यासाठी अन्न ही कला आहे – जी लोकांना एकत्र आणते,
            आठवणी निर्माण करते आणि प्रत्येक कार्यक्रमाची शान वाढवते.
            <br />
            <br />
            आमच्या प्रत्येक पदार्थामध्ये पारंपरिक चव, समर्पण आणि सर्जनशीलता
            यांचा मिलाफ असतो. आम्ही महाराष्ट्रीयन, पंजाबी, साऊथ इंडियन, गुजराती,
            चायनीज आणि कॉन्टिनेंटल स्टाईलचे अन्न तुमच्या गरजेनुसार सादर करतो.
            आमच्या मेनूमध्ये तुम्हाला बुफे, थाळी, स्टॉल्स आणि लाईव्ह काउंटर याचे
            पर्याय मिळतील – तेही स्वच्छ, उत्तम दर्जेदार आणि सुसज्ज सादरीकरणासह.
            <br />
            <br />
            प्रत्येक पाहुण्याच्या चेहऱ्यावर समाधानाचे हास्य हेच आमचे खरे बक्षीस
            आहे. म्हणूनच आम्ही
            <strong> मुंबई आणि कल्याणमधील प्रीमियम केटरिंग सेवा</strong> म्हणून
            ओळखले जातो.
          </p>
        </motion.section>

        {/* Section: व्यवस्थापन */}
        <motion.section
          className="mb-12 poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-400 pl-4 poppins">
            उत्कृष्ट व्यवस्थापन, अचूक अंमलबजावणी
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed poppins">
            कोणताही कार्यक्रम छोटा असो की मोठा – यशस्वी होण्यासाठी त्यामागे
            उत्तम नियोजन आवश्यक असते.
            <strong> दावत-ए-जायका</strong> मध्ये आमचं प्रत्येक इव्हेंट
            प्लॅनिंग हे खास तुमच्या गरजेनुसार आणि बजेटनुसार केलं जातं.
            <br />
            <br />
            आमचा फोकस असतो: वेळेचं पालन, स्वच्छता, अन्नाची सुरक्षितता, स्टाफचे
            सौजन्य, आणि सर्व गोष्टींची सुसूत्रता. आम्ही प्रत्येक इव्हेंटला
            वैयक्तिक प्रोजेक्टसारखं घेतो आणि त्यासाठी पूर्ण समर्पणाने काम करतो.
          </p>
          <ul className="list-disc list-inside mt-4 text-lg text-gray-700 poppins">
            <li className="poppins">कस्टमाइज आणि सिझनल मेनू पर्याय</li>
            <li className="poppins">व्यवस्थित बुफे/लाईव्ह काउंटर सेटअप</li>
            <li className="poppins">स्वच्छतेसाठी प्रोटोकॉलनुसार काम</li>
            <li className="poppins">ट्रेंडिंग आणि पारंपरिक डेकोर ऑप्शन्स</li>
            <li className="poppins">प्रत्येक पाहुण्याला वैयक्तिक सेवा</li>
          </ul>
        </motion.section>

        {/* Section: परवडणारी गुणवत्ता */}
        <motion.section
          className="mb-12 poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-amber-700 mb-4 border-l-4 border-amber-400 pl-4 poppins">
            परवडणारी गुणवत्ता – दर्जा कायम
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed poppins">
            अनेकांना वाटतं की प्रीमियम केटरिंग म्हणजे खर्चिक असतो – पण आमचं
            तत्त्व वेगळं आहे. आम्ही
            <strong>दर्जेदार जेवण आणि सेवा अत्यंत परवडणाऱ्या दरात</strong> देतो.
            <br />
            <br />
            आमचं ध्येय आहे की तुमचं प्रत्येक आयोजन हे तुमच्या अपेक्षेपेक्षा अधिक
            सुंदर व्हावं – तेही बजेटमध्ये. आमच्याकडे छोट्या पार्टीसाठी मिनी
            पॅकेजेसपासून ते मोठ्या रिसेप्शनसाठी कस्टम प्लॅन्स उपलब्ध आहेत. दर
            स्पष्ट, सुलभ आणि कोणतीही लपवाछपवी नाही.
            <br />
            <br />
            आमचा विश्वास आहे – "स्वाद आणि सेवा ही प्रत्येकाची हक्काची बाब आहे".
          </p>
        </motion.section>

        {/* Ending Statement */}
        <motion.div
          className="text-center mt-16 poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-xl font-medium text-gray-800 leading-relaxed poppins">
            ✨ तुमच्या प्रत्येक खास क्षणाचा स्वाद वाढवण्यासाठी – <br />
            <span className="text-amber-700 font-semibold text-2xl poppins">
              दावत-ए-जायका
            </span>{" "}
            ला आजच संपर्क करा ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsMarathi;
