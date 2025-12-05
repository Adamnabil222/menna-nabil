import { Service, Testimonial, FaqItem, NavItem } from './types';

export const WHATSAPP_NUMBER = "201020848384"; // Updated number
export const WHATSAPP_MESSAGE = "مرحباً منة، أود حجز جلسة علاجية.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من أنا', href: '#about' },
  { label: 'خدماتي', href: '#services' },
  { label: 'آراء العملاء', href: '#testimonials' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'العلاج النفسي الفردي',
    description: 'جلسات خاصة تهدف إلى فهم الذات، معالجة القلق، الاكتئاب، والصدمات النفسية في بيئة آمنة وداعمة.',
    iconName: 'User',
    duration: '٥٠ دقيقة'
  },
  {
    id: '2',
    title: 'استشارات العلاقات',
    description: 'تحسين مهارات التواصل وحل النزاعات بين الشركاء لبناء علاقة صحية ومتوازنة.',
    iconName: 'Heart',
    duration: '٦٠ دقيقة'
  },
  {
    id: '3',
    title: 'تطوير الذات',
    description: 'دعمك في تحقيق أهدافك الشخصية والمهنية واكتشاف نقاط قوتك الكامنة.',
    iconName: 'Sun',
    duration: '٤٥ دقيقة'
  },
  {
    id: '4',
    title: 'علاج المراهقين',
    description: 'مساحة آمنة للمراهقين للتعبير عن مشاعرهم وفهم التغيرات النفسية والاجتماعية.',
    iconName: 'Users',
    duration: '٥٠ دقيقة'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'سارة م.',
    content: 'تجربتي مع د. منة كانت نقطة تحول في حياتي. ساعدتني كثيراً في فهم مشاعري والتعامل مع القلق.',
    rating: 5
  },
  {
    id: '2',
    name: 'نيره احمد',
    content: 'أسلوبها مهني جداً ومريح. شعرت بالأمان والتقدير منذ الجلسة الأولى.',
    rating: 5
  },
  {
    id: '3',
    name: 'ليلى ع.',
    content: 'أنصح بشدة بالتعامل معها. تتميز بالاستماع الجيد والحلول العملية.',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: '1',
    question: 'كيف يمكنني حجز جلسة؟',
    answer: 'يمكنك حجز جلسة بسهولة عن طريق الضغط على زر "احجز جلستك" وسيتم تحويلك مباشرة إلى محادثة واتساب لتنسيق الموعد المناسب.'
  },
  {
    id: '2',
    question: 'هل الجلسات سرية؟',
    answer: 'نعم، تماماً. نحن نلتزم بأعلى معايير السرية والخصوصية المهنية. كل ما يدور في الجلسة يبقى بينك وبين المعالج.'
  },
  {
    id: '3',
    question: 'هل تقدمين جلسات أونلاين؟',
    answer: 'نعم، تتوفر جلسات عبر مكالمات الفيديو لضمان راحتك وتوفير الوقت، بنفس كفاءة الجلسات الحضورية.'
  },
];