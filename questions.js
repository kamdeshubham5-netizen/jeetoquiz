const questionBank = [
  {
    id: 1,
    category: "India GK",
    difficulty: "Easy",
    question: "भारत की राजधानी क्या है?",
    options: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"],
    answer: 1,
    explanation: "नई दिल्ली भारत की राजधानी है।"
  },
  {
    id: 2,
    category: "India GK",
    difficulty: "Easy",
    question: "भारत का राष्ट्रीय पशु कौन सा है?",
    options: ["शेर", "हाथी", "बाघ", "मोर"],
    answer: 2,
    explanation: "बाघ भारत का राष्ट्रीय पशु है।"
  },
  {
    id: 3,
    category: "India GK",
    difficulty: "Easy",
    question: "भारत का राष्ट्रीय पक्षी कौन सा है?",
    options: ["मोर", "तोता", "कबूतर", "हंस"],
    answer: 0,
    explanation: "मोर भारत का राष्ट्रीय पक्षी है।"
  },
  {
    id: 4,
    category: "Geography",
    difficulty: "Easy",
    question: "भारत में कुल कितने राज्य हैं?",
    options: ["26", "27", "28", "29"],
    answer: 2,
    explanation: "भारत में 28 राज्य हैं।"
  },
  {
    id: 5,
    category: "Geography",
    difficulty: "Easy",
    question: "भारत की सबसे लंबी नदी कौन सी है?",
    options: ["यमुना", "गंगा", "गोदावरी", "नर्मदा"],
    answer: 1,
    explanation: "गंगा भारत की प्रमुख और सबसे लंबी नदी है।"
  },
  {
    id: 6,
    category: "Science",
    difficulty: "Easy",
    question: "पृथ्वी का प्राकृतिक उपग्रह कौन है?",
    options: ["सूर्य", "मंगल", "चंद्रमा", "शुक्र"],
    answer: 2,
    explanation: "चंद्रमा पृथ्वी का प्राकृतिक उपग्रह है।"
  },
  {
    id: 7,
    category: "Science",
    difficulty: "Easy",
    question: "पानी का रासायनिक सूत्र क्या है?",
    options: ["CO2", "O2", "H2O", "NaCl"],
    answer: 2,
    explanation: "पानी का रासायनिक सूत्र H2O है।"
  },
  {
    id: 8,
    category: "Science",
    difficulty: "Easy",
    question: "लाल ग्रह किसे कहा जाता है?",
    options: ["बृहस्पति", "मंगल", "शनि", "बुध"],
    answer: 1,
    explanation: "मंगल ग्रह को उसकी लाल सतह के कारण लाल ग्रह कहा जाता है।"
  },
  {
    id: 9,
    category: "World GK",
    difficulty: "Easy",
    question: "विश्व का सबसे बड़ा महासागर कौन सा है?",
    options: ["हिंद महासागर", "अटलांटिक महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    answer: 2,
    explanation: "प्रशांत महासागर क्षेत्रफल के आधार पर सबसे बड़ा महासागर है।"
  },
  {
    id: 10,
    category: "World GK",
    difficulty: "Easy",
    question: "जापान की राजधानी क्या है?",
    options: ["ओसाका", "टोक्यो", "क्योटो", "नारा"],
    answer: 1,
    explanation: "टोक्यो जापान की राजधानी है।"
  },
  {
    id: 11,
    category: "Sports",
    difficulty: "Easy",
    question: "क्रिकेट में एक ओवर में कितनी गेंदें होती हैं?",
    options: ["4", "5", "6", "8"],
    answer: 2,
    explanation: "सामान्य क्रिकेट में एक ओवर में 6 वैध गेंदें होती हैं।"
  },
  {
    id: 12,
    category: "Sports",
    difficulty: "Easy",
    question: "फुटबॉल की एक टीम में मैदान पर कितने खिलाड़ी होते हैं?",
    options: ["9", "10", "11", "12"],
    answer: 2,
    explanation: "फुटबॉल की एक टीम के 11 खिलाड़ी मैदान पर होते हैं।"
  },
  {
    id: 13,
    category: "History",
    difficulty: "Easy",
    question: "ताजमहल किस शहर में स्थित है?",
    options: ["दिल्ली", "आगरा", "जयपुर", "लखनऊ"],
    answer: 1,
    explanation: "ताजमहल उत्तर प्रदेश के आगरा में स्थित है।"
  },
  {
    id: 14,
    category: "History",
    difficulty: "Easy",
    question: "कुतुब मीनार किस शहर में है?",
    options: ["मुंबई", "दिल्ली", "भोपाल", "पटना"],
    answer: 1,
    explanation: "कुतुब मीनार दिल्ली में स्थित है।"
  },
  {
    id: 15,
    category: "Technology",
    difficulty: "Easy",
    question: "CPU का पूरा नाम क्या है?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Computer Processing Utility"
    ],
    answer: 0,
    explanation: "CPU का पूरा नाम Central Processing Unit है।"
  },
  {
    id: 16,
    category: "Technology",
    difficulty: "Easy",
    question: "HTML का उपयोग मुख्य रूप से किसके लिए किया जाता है?",
    options: [
      "वेब पेज की संरचना",
      "वीडियो रिकॉर्डिंग",
      "फोटो प्रिंटिंग",
      "ऑडियो रिकॉर्डिंग"
    ],
    answer: 0,
    explanation: "HTML वेब पेज की संरचना बनाने के लिए उपयोग होता है।"
  },
  {
    id: 17,
    category: "Science",
    difficulty: "Easy",
    question: "मनुष्य सामान्यतः किस गैस को सांस के साथ अंदर लेते हैं?",
    options: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "हीलियम", "हाइड्रोजन"],
    answer: 0,
    explanation: "मनुष्य सांस लेते समय मुख्य रूप से ऑक्सीजन ग्रहण करता है।"
  },
  {
    id: 18,
    category: "Geography",
    difficulty: "Easy",
    question: "भारत का सबसे बड़ा राज्य क्षेत्रफल के आधार पर कौन सा है?",
    options: ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "उत्तर प्रदेश"],
    answer: 2,
    explanation: "राजस्थान क्षेत्रफल के आधार पर भारत का सबसे बड़ा राज्य है।"
  },
  {
    id: 19,
    category: "India GK",
    difficulty: "Easy",
    question: "भारत की मुद्रा क्या है?",
    options: ["डॉलर", "रुपया", "येन", "पाउंड"],
    answer: 1,
    explanation: "भारत की मुद्रा भारतीय रुपया है।"
  },
  {
    id: 20,
    category: "World GK",
    difficulty: "Easy",
    question: "विश्व का सबसे बड़ा महाद्वीप कौन सा है?",
    options: ["अफ्रीका", "यूरोप", "एशिया", "दक्षिण अमेरिका"],
    answer: 2,
    explanation: "एशिया क्षेत्रफल के आधार पर सबसे बड़ा महाद्वीप है।"
  }
];

// Export for use in the website
if (typeof module !== "undefined") {
  module.exports = questionBank;
}
