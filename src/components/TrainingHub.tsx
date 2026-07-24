import React, { useState } from 'react';
import { TRAINING_COURSES_DATA } from '../data/trainingData';
import { TrainingCourse } from '../types';
import { GraduationCap, Calendar, Clock, Users, CheckCircle2, ArrowLeft, X, Sparkles, Award, BookOpen } from 'lucide-react';

interface TrainingHubProps {
  onOpenProposalForTraining: (courseTitle: string) => void;
}

export const TrainingHub: React.FC<TrainingHubProps> = ({ onOpenProposalForTraining }) => {
  const [selectedCourse, setSelectedCourse] = useState<TrainingCourse | null>(null);
  const BOOTCAMP_IMAGE_PATH = '/src/assets/images/training_bootcamp_cover_1784865175736.jpg';

  return (
    <section id="training" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-4 text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>أكاديمية التدريب والتطوير المؤسسي</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              رفع كفاءة فريقك الداخلي عبر برامج وتطبيقات مباشرة
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              لا نكتفي بتقديم الخدمات البرمجية والتصميمية، بل نساعد شركتك على بناء قدرات ذاتية مستدامة. نقدم معسكرات عمل حضورية وعن بعد موجهة للشركات والأفراد.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800">
                <Award className="w-4 h-4 text-amber-400" />
                <span>شهادات معتمدة وتطبيق 100%</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800">
                <Users className="w-4 h-4 text-orange-400" />
                <span>برامج مخصصة لمنتجات شركتك</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
            <img
              src={BOOTCAMP_IMAGE_PATH}
              alt="ورش عمل وتدريب التطبيقات"
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-6">
              <div className="text-xs text-slate-200">
                <strong className="text-white block text-sm font-bold">معسكرات ورش عمل حية للشركات</strong>
                تغطية شاملة لـ UX/UI، أنظمة التصميم، وكتابة تجربة المستخدم.
              </div>
            </div>
          </div>
        </div>

        {/* Courses Catalog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRAINING_COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="bg-slate-950 rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-amber-500/40 transition-all space-y-6 flex flex-col justify-between group shadow-xl"
              id={`course-card-${course.id}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                    {course.level}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    الموعد: {course.nextCohortDate}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {course.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {course.description}
                </p>

                {/* Topics List */}
                <div className="space-y-2 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 block">المحاور الرئيسية:</span>
                  {course.topics.slice(0, 3).map((topic, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Info & Action */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    المدة: {course.duration}
                  </span>
                  <span className="text-emerald-400 font-bold">
                    متبقي {course.seatsRemaining} مقاعد فقط
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors text-center"
                    id={`btn-syllabus-${course.id}`}
                  >
                    عرض المنهج التفصيلي
                  </button>
                  <button
                    onClick={() => onOpenProposalForTraining(`تدريب ورشة: ${course.title}`)}
                    className="py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-md shadow-amber-600/20 transition-all flex items-center justify-center gap-1.5"
                    id={`btn-book-course-${course.id}`}
                  >
                    <span>حجز مقعد / طلب للشركة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Course Detail Syllabus Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 text-slate-100 relative shadow-2xl my-8">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold">
                  {selectedCourse.level}
                </span>
                <h3 className="text-xl font-bold text-white pt-2">{selectedCourse.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                id="btn-close-course-modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedCourse.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>المحاور والمهارات التي سيتم إتقانها:</span>
              </h4>
              <div className="space-y-2">
                {selectedCourse.topics.map((topic, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
              <strong className="text-white block font-bold">الجمهور المستهدف:</strong>
              <p className="text-slate-400 leading-relaxed">{selectedCourse.targetAudience}</p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">
                الدفعة القادمة: <strong className="text-white">{selectedCourse.nextCohortDate}</strong>
              </span>
              <button
                onClick={() => {
                  const title = selectedCourse.title;
                  setSelectedCourse(null);
                  onOpenProposalForTraining(`حجز ورشة تدريبية: ${title}`);
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-lg shadow-amber-600/30 flex items-center gap-2"
              >
                <span>طلب حجز البرنامج للشركة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
