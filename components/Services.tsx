import React from 'react';
import { SERVICES, WHATSAPP_LINK } from '../constants';
import * as Icons from 'lucide-react';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">كيف يمكنني مساعدتك؟</h2>
          <p className="text-lg text-slate-600">
            أقدم مجموعة متنوعة من الخدمات النفسية المصممة لتلبية احتياجاتك الخاصة، سواء كنت تبحث عن الدعم الفردي أو تحسين علاقاتك.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            // Dynamically resolve icon
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

            return (
              <div key={service.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-500 bg-gray-50 px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                   <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-bold text-sm hover:text-primary-700">
                    احجز الآن &larr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-secondary-50 rounded-2xl border border-secondary-100">
                <p className="text-slate-700 mb-4">
                    لست متأكداً ما هي الخدمة المناسبة لك؟
                </p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm">
                        تحدثي معي لاستشارة سريعة
                    </Button>
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};