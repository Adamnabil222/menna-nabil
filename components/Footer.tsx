import React from 'react';
import { HeartHandshake, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary-400">
              <HeartHandshake size={32} />
              <span className="text-2xl font-bold">منة نبيل</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              أخصائية نفسية مكرسة لمساعدتك في العثور على طريقك نحو الصحة النفسية والرفاهية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">روابط سريعة</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">عن المعالجة</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">الخدمات</a></li>
              <li><a href="#testimonials" className="hover:text-primary-400 transition-colors">تجارب العملاء</a></li>
              <li><a href="#faq" className="hover:text-primary-400 transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">تواصل معي</h4>
             <p className="text-slate-400 mb-4">
              للحجز والاستفسار يرجى التواصل عبر واتساب.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} منة نبيل. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};