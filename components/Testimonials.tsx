import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">قصص نجاح</h2>
          <p className="text-slate-600">كلمات من أشخاص شاركوني رحلة التعافي.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-6 left-6 text-primary-200" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary-200 text-secondary-200" />
                ))}
              </div>

              <p className="text-slate-700 italic leading-relaxed mb-6 relative z-10">
                "{t.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="font-bold text-slate-900">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};