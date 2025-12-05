import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      
      {/* Decorative Circles */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-right order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-primary-700 text-sm font-semibold border border-primary-100">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            مساحتك الآمنة للتعافي
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
            رحلتك نحو <span className="text-primary-600 relative inline-block">
              التوازن النفسي
              <svg className="absolute bottom-1 w-full h-3 -z-10 fill-primary-200/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" />
              </svg>
            </span> تبدأ هنا
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            معاً، نبني جسراً نحو سلامك الداخلي. جلسات علاجية مهنية في بيئة آمنة وداعمة تساعدك على تجاوز العقبات وتحقيق ذاتك.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-primary-200/50">
                ابدأ رحلتك الآن
                <ArrowLeft size={20} className="mr-2" />
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm">
                تعرف عليّ أكثر
              </Button>
            </a>
          </div>

          <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
              <span>سرية تامة</span>
            </div>
             <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
              <span>جلسات مرنة</span>
            </div>
             <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
              <span>دعم مستمر</span>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://picsum.photos/800/800?grayscale" 
              alt="Calming therapy environment" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-6 -right-6 lg:right-[-20px] bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-gray-100 hidden sm:block">
            <p className="text-4xl font-bold text-primary-600 mb-1">+٥٠٠</p>
            <p className="text-gray-600 text-sm font-medium">جلسة علاجية ناجحة</p>
          </div>
        </div>

      </div>
    </section>
  );
};