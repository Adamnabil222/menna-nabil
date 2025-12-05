import React from 'react';
import { Award, GraduationCap, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-lg bg-gray-100">
               {/* Placeholder for Therapist Photo */}
               <img 
                src="https://picsum.photos/600/750" 
                alt="Menna Nabil" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary-200 rounded-full -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 border-4 border-primary-100 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              أهلاً بك، أنا <span className="text-primary-600">منة نبيل</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              أخصائية نفسية معتمدة أؤمن بأن كل إنسان يمتلك القوة الداخلية للتعافي والنمو. هدفي هو توفير مساحة آمنة وخالية من الأحكام حيث يمكنك استكشاف مشاعرك وأفكارك بحرية.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              أعتمد في عملي على مزيج من العلاج المعرفي السلوكي والأساليب الحديثة لمساعدتك على فهم جذور التحديات التي تواجهها وتطوير أدوات عملية للتعامل معها.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-4 hover:bg-white hover:shadow-md transition-all border border-gray-100">
                <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">مؤهلات علمية</h4>
                  <p className="text-sm text-slate-500 mt-1">ماجستير علم النفس الإكلينيكي</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-4 hover:bg-white hover:shadow-md transition-all border border-gray-100">
                <div className="p-2 bg-secondary-100 text-secondary-800 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">خبرة عملية</h4>
                  <p className="text-sm text-slate-500 mt-1">أكثر من ٥ سنوات في العلاج النفسي</p>
                </div>
              </div>

               <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-4 hover:bg-white hover:shadow-md transition-all border border-gray-100 sm:col-span-2">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">ترخيص مهني</h4>
                  <p className="text-sm text-slate-500 mt-1">معتمدة من وزارة الصحة ونقابة المهن النفسية</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};