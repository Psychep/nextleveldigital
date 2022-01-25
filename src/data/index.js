import logoLight from "@/images/logo.png";
import logoDark from "@/images/logo2.png";

export const LogoImage = {
  light: logoLight,
  dark: logoDark,
};

export const NavLinks = [
  {
    name: "Anasayfa",
    url: "/",

  },
  {
    name: "Hakkımızda",
    url: "/about",
  },
  {
    name: "Hizmetler",
    url: "/service",
    subItems: [
      {
        name: "Web Yazılım",
        url: "/webdesing",
      },
      {
        name: "E-ticaret",
        url: "/e-commerce",
      },
      {
        name: "Grafik Tasarım",
        url: "/graphic-design",
      },
      {
        name: "Sosyal Medya Yönetimi",
        url: "/social-media",
      },
      {
        name: "Fotoğraf Video Animasyon",
        url: "/film-details",
      },
    ],
  },
  {
    name: "Referanslarımız",
    url: "/portfolio",

  },

  {
    name: "İletişim",
    url: "/contact",
  },
];

import sliderOne01 from "@/images/slider/1_1.jpg";
import sliderOne02 from "@/images/slider/1_2.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "NEXT LEVEL",
    title: "DİJİTAL PAZARLAMA \n REKLAM AJANSI.",
    button: {
      label: "HAKKIMIZDA",
      url: "/about",
    },
  },
  {
    image: sliderOne02,
    subTitle: "NEXT LEVEL",
    title: "DİJİTAL PAZARLAMA \n REKLAM AJANSI.",
    button: {
      label: "HAKKIMIZDA",
      url: "/about",
    },
  },
];

import sliderTwo01 from "@/images/slider/2_1.jpg";
import sliderTwo02 from "@/images/slider/2_2.jpg";
import sliderTwo03 from "@/images/slider/2_3.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: "Next Level Dijital Pazarlama Ajansı",
    title: "DİJİTAL\nPAZARLAMA\nAJANSI.",
    button: {
      label: "KEŞFET",
      url: "/about",
    },
  },
  {
    image: sliderTwo02,
    subTitle: "Next Level Dijital Pazarlama Ajansı",
    title: "DİJİTAL\nPAZARLAMA\nAJANSI",
    button: {
      label: "KEŞFET",
      url: "/about",
    },
  },
  {
    image: sliderTwo03,
    subTitle: "Next Level Dijital Pazarlama Ajansı",
    title: "DİJİTAL\nPAZARLAMA\nAJANSI",
    button: {
      label: "KEŞFET",
      url: "/about",
    },
  },
];

import sliderThree01 from "@/images/slider/3_1.jpg";
import sliderThree02 from "@/images/slider/3_2.jpg";

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: "Next Level Dijital Pazarlama Ajansı",
    title: "DİJİTAL\nPAZARLAMA\nAJANSI",
    button: {
      label: "KEŞFET",
      url: "/about",
    },
  },
  {
    image: sliderThree02,
    subTitle: "Next Level Dijital Pazarlama Ajansı",
    title: "DİJİTAL\nPAZARLAMA\nAJANSI",
    button: {
      label: "KEŞFET",
      url: "/about",
    },
  },
];

export const ContactInfosBlock = {
  subTitle: "Ofisimiz",
  title: "Size Yakın Şubeler",
  description:
    "Siz değerli müşterilerimize en iyi hizmeti sunmak istiyoruz \n Deneyimli ekibimiz ile siz ve markanız için buradayız.",
};

export const ContactInfosList = [
  {
    title: "Gaziantep",
    infos: [
      {
        name: "Atatürk, Süleyman Kamçı Cd. No:14/A, 27560 Şehitkamil/Gaziantep",
      },
      {
        name: "info@nextleveldijital.com",
      },
      {
        name: "0850 223 4448",
      },
    ],
  },



];

export const ContactFormTitle = {
  subTitle: "Bizimle İletişime Geçin",
  title: "Bir mesaj bırak",
  description:
    "Siz değerli müşterilerimize en iyi hizmeti sunmak istiyoruz \n      Deneyimli ekibimiz ile siz ve markanız için buradayız. ",
};

import blogImage1 from "@/images/blog/1.jpg";
import blogImage2 from "@/images/blog/2.jpg";
import blogImage3 from "@/images/blog/3.jpg";
import blogImage4 from "@/images/blog/4.jpg";
import blogImage5 from "@/images/blog/5.jpg";
import blogImage6 from "@/images/blog/6.jpg";

export const BlogData = [
  {
    title: "basic rules of running web agency business",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage1,
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2,
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3,
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4,
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5,
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6,
  },
];

import blogImageTwo1 from "@/images/blog/14.jpg";
import blogImageTwo2 from "@/images/blog/15.jpg";

export const BlogTwoData = [
  {
    title:
      "Dynamically procrastinate unique vortals with global best practices.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo1,
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2,
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3,
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4,
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5,
  },
  {
    title:
      "Holisticly conceptualize backend scenarios via accurate technologies.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo2,
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6,
  },
];




export const BlogSidebarPost = [

];

export const BlogComments = [

];

import portfolio01 from "@/images/portfolio/1.jpg";
import portfolio02 from "@/images/portfolio/2.jpg";
import portfolio03 from "@/images/portfolio/3.jpg";
import portfolio04 from "@/images/portfolio/4.jpg";
import portfolio05 from "@/images/portfolio/5.jpg";
import portfolio06 from "@/images/portfolio/6.jpg";
import portfolio07 from "@/images/portfolio/s-7.jpg";
import portfolio08 from "@/images/portfolio/s-8.jpg";
import portfolio09 from "@/images/portfolio/9.jpg";

export const PortfolioData = [
  {
    title: "Next Level Photography",
    categories: ["all", "photography"],
    image: portfolio01,
    url: "/portfolio-details",
  },
  {
    title: "Next Level Photography",
    categories: ["all", "photography"],
    image: portfolio02,
    url: "/portfolio-details",
  },
  {
    title: "Next Level Photography",
    categories: ["all", "photography"],
    image: portfolio03,
    url: "/portfolio-details",
  },
  {
    title: "Next Level Photography",
    categories: ["all", "photography"],
    image: portfolio04,
    url: "/portfolio-details",
  },
  {
    title: "Next Level Photography",
    categories: ["all", "photography"],
    image: portfolio05,
    url: "/portfolio-details",
  },
  {
    title: "Next Level Photography",
    categories: ["all", "photography"],
    image: portfolio06,
    url: "/portfolio-details",
  },
  {
    title: "Next Level Photography",
    categories: ["all", "photography"],
    image: portfolio07,
    url: "/portfolio-details",
  },
  {
    title: "Next Level Photography",
    categories: ["all", "photography"],
    image: portfolio08,
    url: "/portfolio-details",
  },
  {
    title: "Next Level Photography",
    categories: ["all", "photography"],
    image: portfolio09,
    url: "/portfolio-details",
  },
];

export const PortfolioFilters = [
  { name: "all" },
  { name: "graphic" },
  { name: "branding" },
  { name: "marketing" },
  { name: "logos" },
];

import portfolioD01 from "@/images/portfolio/7.jpg";
import portfolioD02 from "@/images/portfolio/8.jpg";

export const PortfolioDetailsData = {
  gallery: [{ image: portfolioD01 }, { image: portfolioD02 }],
  title: "Tasarım",
  text:
    "",
  client: "",
  categories: [
    {
      name: "Graphic,",
      url: "#",
    },
    {
      name: "Illustrations,",
      url: "#",
    },
  ],
  date: "8 Nov, 2018",
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/nextleveldijital",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/nextleveldijital",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/nextleveldijital/",
    },
  ],
};

export const ServicePostData = [
  {
    title: "Modern Tasarım",
    text:
      "Next Level Dijital Sizlere modern ve yenilikçi hizmetler sunar",
    iconName: "next-settings",
    url: "/service-details",
  },
  {
    title: "Dijital Ürünler",
    text:
      "Next Level Dijital Sizlere modern ve yenilikçi hizmetler sunar",
    iconName: "next-transfer",
    url: "/service-details",
  },
  {
    title: "Market Stratejisi",
    text:
      "Next Level Dijital Sizlere modern ve yenilikçi hizmetler sunar",
    iconName: "next-pie-chart",
    url: "/service-details",
  },
];

export const ServiceHomeTwoData = {
  subTitle: "Next Level Dijital",
  title: "Sizlere özgün dijital hizmetler sunuyor \n markanızın büyümesinde yardımcı oluyoruz.",
  text:
    "Siz değerli müşterilerimize en iyi hizmeti sunmak istiyoruz\n Deneyimli ekibimiz ile siz ve markanız için buradayız.",
};

export const ServiceHomeThreeData = {
  subTitle: "Hizmetlerimiz",
  title: "Diğer Hizmetlerimiz",
  text:
    "Siz değerli müşterilerimize en iyi hizmeti sunmak istiyoruz\n Deneyimli ekibimiz ile siz ve markanız için buradayız.",
};

export const ServicePostTwoData = {
  sectionContent: {
    title: " GAZİANTEP'İN  \n YENİ NESİL DİJİTAL REKLAM AJANSIYIZ.",
    subTitle: "Sunduğumuz Hizmetler",
    text:
      "Markalar Burada Büyüyecek \n ",
  },
  posts: [
    {
      title: "Web Yazılımı",
      iconName: "mei-web-design",
      url: "/webdesing",
    },
    {
      title: "Sosyal Medya Yönetimi",
      iconName: "mei-development-1",
      url: "/social-media",
    },
    {
      title: "Grafik Tasarım",
      iconName: "mei-computer-graphic",
      url: "/graphic-design",
    },
    {
      title: "E-Ticaret",
      iconName: "mei-app-development",
      url: "/e-commerce",
    },
    {
      title: "Tanıtım Filmi",
      iconName: "mei-development",
      url: "/film-details",
    },

  ],
};

import serviceOne01 from "@/images/home_1/6.png";
import serviceOne02 from "@/images/home_1/7.png";
import serviceOne03 from "@/images/home_1/8.png";

export const ServicePostThreeData = {
  sectionContent: {
    title: "Sizler için özgün, yaratıcı fikirler",
    subTitle: "Neler Yapıyoruz?",
    text:
      "Siz değerli müşterilerimize en iyi hizmeti sunmak istiyoruz \n Deneyimli ekibimiz ile siz ve markanız için buradayız.",
  },
  posts: [
    {
      title: "web yazılımı",
      image: serviceOne01,
      url: "/webdesing",
    },
    {
      title: "sosyal medya yönetimi",
      image: serviceOne02,
      url: "/social-media",
    },
    {
      title: "e-ticaret",
      image: serviceOne03,
      url: "/e-commerce",
    },
  ],
};

export const FunfactData = [
  {
    title: "Tamamlanan İş",
    countNumber: 705,
  },
  {
    title: "Aktif Müşteri",
    countNumber: 480,
  },
  {
    title: "Bardak Kahve ☕",
    countNumber: 626,
  },
  {
    title: "Mutlu Müşteri",
    countNumber: 774,
  },
];

import trustClient01 from "@/images/home_1/4.jpg";

export const TrustClientData = {
  image: trustClient01,
  title: "200'den fazla mutlu müşteri ile çalışıyoruz",
  text: "Next Level Dijital Sizlere şirketinize yenilik katma fırsatı sunar. Markanızı ön plana çıkartmak, yaratıcı reklamlar ile yeni müşterilerinizin dikkatini çekmek artık çok kolay. Sadece bizimle iletişime geçin ve markanız için en uygun dijital pazarlama ajansı ile tanışın.",
  url: "/about",
};

import ClientCarousel01 from "@/images/client/1.png";
import ClientCarousel02 from "@/images/client/2.png";
import ClientCarousel03 from "@/images/client/3.png";
import ClientCarousel04 from "@/images/client/4.png";
import ClientCarousel05 from "@/images/client/5.png";

export const ClientCarouselData = {
  sectionContent: {
    title: "YENİLİKÇİ TEKNOLOJİLER",
    subTitle: "EN YENİ TEKNOLOJİLERİ KULLANIYORUZ",
    text:
      "Müşterilerimize en hızlı ve en dikkat çekici içerikleri üretmek için \n Teknolojileri yakından takip ediyoruz!",
  },
  items: [
    {
      url: "#",
      image: ClientCarousel01,
    },
    {
      url: "#",
      image: ClientCarousel02,
    },
    {
      url: "#",
      image: ClientCarousel03,
    },
    {
      url: "#",
      image: ClientCarousel04,
    },
    {
      url: "#",
      image: ClientCarousel05,
    },
  ],
};

import aboutOne01 from "@/images/about/2.jpg";
import aboutOne02 from "@/images/about/2.png";

export const AboutOneData = {
  sectionContent: {
    title: "MARKANIZ İÇİN HIZLI BİR BÜYÜME SAĞLAYIN ",
    subTitle: "",
  },
  gallery: [aboutOne01, aboutOne02],
  counter: {
    title: "Next Level Dijital",
    number: 2021,
  },
};

import team01 from "@/images/team/1.jpg";
import team02 from "@/images/team/2.jpg";
import team03 from "@/images/team/3.jpg";
import team04 from "@/images/team/4.jpg";
import team05 from "@/images/team/5.jpg";
import team06 from "@/images/team/6.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "Bizi Tanıyın",
    subTitle: "Profesyonel ekimiz",
    text:
      "Deneyimli ekibimiz ile siz ve markanız için buradayız.",
  },
  posts: [
    {
      image: team01,
      name: "İbrahim DEMİRTURK",
      designation: "DIGITAL MARKETING SPECIALIST",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
    },
    {
      image: team02,
      name: "Zeliha DEMİRTURK",
      designation: "Social Media Manager",
      url: "",
      socials: [
        {
          name: "Facebook",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
    },
    {
      image: team03,
      name: "Salih Güngörmez",
      designation: "Full Stack Developer",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
    },
    {
      image: team04,
      name: "Yasin TOPRAK",
      designation: "VIDEO EDITOR, SOCIAL MEDIA MANAGER",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
    },
    {
      image: team05,
      name: "Nihat Toprak",
      designation: "Photographer",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
    },
    {
      image: team06,
      name: "Kevser",
      designation: "Intern",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#",
        },
        {
          name: "Twitter",
          url: "#",
        },
        {
          name: "Linkedin",
          url: "#",
        },
      ],
    },
  ],
};

import video01 from "@/images/about/3.jpg";

export const VideoOneData = {
  sectionContent: {
    title: "Markanız için en iyisini bize bırakın",
    subTitle: "ihtiyacınız olan sadece profesyonel bir dokunuş",
    text: "Deneyimli ekibimiz ile siz ve markanız için buradayız.",
  },
  video: {
    image: video01,
    ID: "6upFoOHNAvk",
    title: "Watch Video",
  },
};

export const SubscribeFormData = {

};

import testimonial01 from "@/images/clients/c25.png";
import testimonial02 from "@/images/clients/c17.png";
import testimonial03 from "@/images/clients/c16.png";

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: "Çalıştığımız Firmalar",
    title: "mutlu müşteriler",
  },
  posts: [
    {
      name: "Mabel Güzellik ",
      designation: "Sağlık&Güzellik",
      image: testimonial01,
      content: "22 Şubemizin tanıtım filmleri başarı ile çekildi, ayrıca sosyal medya yönetimi ve web sitemizden de çok memnunuz, Next Level Dijital'e hizmetlerinden dolayı teşekkür ederiz.",
      date: "9 eyl, 2021",
    },
    {
      name: "GÖRGÜLÜ İnşaat A.Ş",
      designation: "İnşaat",
      image: testimonial02,
      content: "Sosyal medya yönetimimizi ve tanıtım filmlerimizi next level dijital üstlendi, Firmamız için yaptıkları harika işler için teşekkür ederiz. ",
      date: "10 eyl, 2021",
    },
    {
      name: "GÖKLER Yapı",
      designation: "İnşaat",
      image: testimonial03,
      content: "Firmamız için yaptığı özgün içerikler, kaliteli sosyal medya yönetimi için Next Level Dijital'e Gökler Yapı olarak teşekkürlerimizi iletiyoruz.",
      date: "8 eyl, 2021",
    },

  ],
};

import featureTab01 from "@/images/home_1/6.png";
import featureTab02 from "@/images/home_1/7.png";
import featureTab03 from "@/images/home_1/8.png";

export const FeatureTabData = {
  sectionContent: {
    title: "Neden bizi seçmelisiniz?",
    subTitle: "Markanıza en uygun paketler",
    text: "Markanız için en uygun paketleri sizler için özelleştirip markanız için çalışmaya başlıyoruz.\n Siz de hemen Next Level Dijital ile markanıza değer katın!",
  },
  posts: [
    {
      title: "En Yeni Teknolojiler",
      content: "Siz müşterilerimize en iyi hizmeti verebilmek için güncel teknoloji ve güçlü araçlardan faydalanıyoruz.",
      image: featureTab01,
      lists: [
        {
          item: "Yüksek kaliteli görüntüler için son model makinalar",
        },
        {
          item: "Profesyonel ışıklandırma ve stüdyo deneyimi.",
        },
        {
          item: "Üstün abode deneyimi",
        },
        {
          item: "Yaptığı işi seven profesyonel bir ekip",
        },

      ],
    },
    {
      title: "Harika Destek",
      content:
        "Müşterilerimizi asla yalnız bırakmıyoruz. Her Sorununuzla ilgilenmek için buradayız.",
      image: featureTab02,
      lists: [
        {
          item: "Sosyal medya yönetimi, reklam yönetimi.",
        },
        {
          item: "Sözleşme süresi boyunca tam destek.",
        },
        {
          item: "Siz müşterilerimize yardımcı olmaya hazır profesyonel ekip",
        },

      ],
    },
    {
      title: "Markanız için en uygun paket",
      content: "Siz ve markanız için en uygun teklifi sunuyoruz, ",
      image: featureTab03,
      lists: [
        {
          item: "Marka değerlendirmesi",
        },
        {
          item: "İhtiyaç analizi",
        },
        {
          item: "Müşteri analizi",
        },

      ],
    },
  ],
};

export const ParallaxOneData = {
  iconName: "next-team",
  title: "ŞAHANE İŞLER TEK BİR KİŞİ TARAFINDAN YAPILAMAZ",
  specialText: " BAŞARI BİR EKİP İŞİDİR.",
  text:
    "Müşterilerimize alışmadıkları bir hizmet sunmayı taahhüt ediyoruz.",
};

export const PortfolioHomeData = {
  sectionContent: {
    title: "İşlerimiz",
    subTitle: "portfolyo",
    text:
      "Siz değerli müşterilerimize en iyi hizmeti sunmak istiyoruz\n Deneyimli ekibimiz ile siz ve markanız için buradayız.",
  },
};

import video02 from "@/images/home_1/3.jpg";

export const VideoTwoData = {
  sectionContent: {
    title: "DİJİTAL DENEYİM",
    subTitle: "Neden Next Level Dijital?",
    text:
      "200'ü aşkın müşteri ile \n Dijital Deneyim sahibi bir ekip!",
  },
  video: {
    title: "",
    ID: "6upFoOHNAvk",
    image: video02,
  },
};

import aboutTwo01 from "@/images/home_1/2.png";
import aboutTwo02 from "@/images/home_1/1.png";

export const AboutTwoData = {
  sectionContent: {
    title: "Gaziantep'in en iddialı Dijital Pazarlama Ajansıyız!",
    subTitle: "Next Level Dijital Pazarlama Ajansı ",
    text: "Sosyal medya yönetimi, Drone çekimleri, Web yazılım ve daha bir çok hizmetimiz ile markanızı ön plana çıkartmak için bizimle iletişime geçin!",
  },
  button: {
    label: "İletişime Geç",
    url: "/contact",
  },
  gallery: [aboutTwo01, aboutTwo02],
};

import featureTwo01 from "@/images/home_1/5.jpg";

export const FeatureTwoData = {
  sectionContent: {
    title: "Gerçek Deneyim",
    subTitle: "temel özelliklerimiz",
    text:
      " Müşterilerimize alışmadıkları bir hizmet sunmayı taahhüt ediyoruz. ",
  },
  posts: [
    {
      title: "Web sitelerinizi kodluyoruz",
      text:
        "Müşterileriniz sizinle ilgili en detaylı bilgilere ulaşabilsin diye, Yeni nesil, hızlı ve fonksiyonel web siteleri oluşturuyoruzsuffered.",
    },
    {
      title: "Zaman tasarrufu sağlıyoruz",
      text:
        "Yeni müşteriler ile tanışmak için sarf edeceğiniz eforu ve zamanı sizin yerinize biz üstleniyoruz.",
    },
    {
      title: "Tanınmanızı kolaylaştırıyoruz",
      text:
        "Müşterilerinizin hangi ihtiyaçlarına çözüm yarattığınızı, en iyi şekilde anlatmayı tahhüt ediyoruz.",
    },
  ],
  image: {
    text: "Özgün tasarım \n Markanız için.",
    path: featureTwo01,
  },
};

export const CallToActionTwoData = [
  {
    label: "Son Çalışmalarımızı Görüntüleyin",
    url: "/portfolio",
  },
  {
    label: "Ücretsiz bir fiyat teklifi alın.",
    url: "/contact",
  },
];

