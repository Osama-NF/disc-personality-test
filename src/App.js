// App.jsx
import React, { useState, useMemo } from "react";


const questions = [
  { id: 1, text: "أفضل اتخاذ القرارات سريعًا دون تردد.", color: "D" },
  { id: 2, text: "أستمتع بالمنافسة وتحقيق الإنجازات.", color: "D" },
  { id: 3, text: "أحب تحمل المسؤولية وقيادة المواقف.", color: "D" },
  { id: 4, text: "لا أتردد في قول رأيي بوضوح حتى لو كان حادًا.", color: "D" },
  { id: 5, text: "أواجه التحديات بثقة حتى تحت الضغط.", color: "D" },
  { id: 6, text: "أسعى دائمًا لتحقيق نتائج ملموسة.", color: "D" },
  { id: 7, text: "أفضّل اتخاذ خطوات جريئة بدلاً من التأجيل.", color: "D" },
  { id: 8, text: "أتفاعل بسرعة مع الظروف المتغيرة.", color: "D" },
  { id: 9, text: "لا أمانع في المخاطرة لتحقيق أهدافي.", color: "D" },
  { id: 10, text: "أركز على الحلول العملية أكثر من التفاصيل الصغيرة.", color: "D" },
  { id: 11, text: "أدفع الآخرين للتقدم وإنهاء المهام.", color: "D" },
  { id: 12, text: "أحب التحكم في مسار الأحداث بدلاً من متابعتها فقط.", color: "D" },

  { id: 13, text: "أستمتع بالتواصل مع الناس والتعرف على شخصيات جديدة.", color: "I" },
  { id: 14, text: "أشعر بالراحة عندما أعمل ضمن فريق.", color: "I" },
  { id: 15, text: "أحب مشاركة أفكاري مع الآخرين.", color: "I" },
  { id: 16, text: "أميل لنشر الحماس والطاقة بين من حولي.", color: "I" },
  { id: 17, text: "أستخدم مهاراتي الاجتماعية لحل المشكلات.", color: "I" },
  { id: 18, text: "أعبّر عن مشاعري بسهولة.", color: "I" },
  { id: 19, text: "أفضّل العمل الذي فيه تواصل وتفاعل.", color: "I" },
  { id: 20, text: "أحب التأثير على الآخرين وإقناعهم بوجهة نظري.", color: "I" },
  { id: 21, text: "أجد من السهل تكوين صداقات جديدة.", color: "I" },
  { id: 22, text: "أشعر بالسعادة عندما أكون في مركز الاهتمام.", color: "I" },
  { id: 23, text: "أستطيع التكيف اجتماعيًا بطريقة سريعة.", color: "I" },
  { id: 24, text: "أستخدم الإبداع والمرح لتخفيف التوتر.", color: "I" },

  { id: 25, text: "أفضل الاستقرار في العمل والحياة.", color: "S" },
  { id: 26, text: "أميل إلى التمهل وعدم العجلة في القرارات.", color: "S" },
  { id: 27, text: "أحاول دائمًا الحفاظ على الهدوء في المواقف الصعبة.", color: "S" },
  { id: 28, text: "أهتم بالعلاقات الهادئة وغير التصادمية.", color: "S" },
  { id: 29, text: "أستمع للآخرين باهتمام وصبر.", color: "S" },
  { id: 30, text: "أفضل الروتين على التغيير المفاجئ.", color: "S" },
  { id: 31, text: "أسعى لدعم الآخرين بدلًا من قيادتهم.", color: "S" },
  { id: 32, text: "أتجنب الصراعات قدر الإمكان.", color: "S" },
  { id: 33, text: "أحب العمل بمعدل ثابت دون ضغط.", color: "S" },
  { id: 34, text: "أفضّل التعاون على المنافسة.", color: "S" },
  { id: 35, text: "أقدّر الأمان العاطفي والعملي.", color: "S" },
  { id: 36, text: "أشعر بالراحة في المهام المتكررة والواضحة.", color: "S" },

  { id: 37, text: "أهتم بالتفاصيل الدقيقة في أي مهمة.", color: "C" },
  { id: 38, text: "أميل للتخطيط قبل البدء بأي قرار.", color: "C" },
  { id: 39, text: "أفضل اتباع القواعد والإجراءات الواضحة.", color: "C" },
  { id: 40, text: "أفكر بمنطق وتحليل قبل أي خطوة.", color: "C" },
  { id: 41, text: "أراجع عملي أكثر من مرة للتأكد من صحته.", color: "C" },
  { id: 42, text: "أتعامل بحذر مع المخاطر.", color: "C" },
  { id: 43, text: "أطلب التوضيحات قبل البدء في المشاريع.", color: "C" },
  { id: 44, text: "أفضّل الجودة على السرعة.", color: "C" },
  { id: 45, text: "أدوّن المعلومات بشكل منظّم.", color: "C" },
  { id: 46, text: "أحتاج وقتًا للتفكير قبل الرد.", color: "C" },
  { id: 47, text: "أحلل الأخطاء لمعرفة سبب حدوثها.", color: "C" },
  { id: 48, text: "ألتزم بالمعايير والمقاييس بدقة.", color: "C" },
];

const DISC_META = {
  D: { label: "الحزم (D)", color: "#ef4444" },   // Red
  I: { label: "التأثير (I)", color: "#eab308" }, // Yellow
  S: { label: "الاستقرار (S)", color: "#22c55e" }, // Green
  C: { label: "الانضباط (C)", color: "#3b82f6" }, //  Blue
};


function DiscPieChart({ scores }) {
  const segments = useMemo(() => {
    const entries = Object.entries(scores);
    const positive = entries.map(([key, value]) => [key, Math.max(value, 0)]);
    const total = positive.reduce((sum, [_, v]) => sum + v, 0);

    const safeTotal = total === 0 ? positive.length : total;

    let cumulative = 0;
    return positive.map(([key, value]) => {
      const meta = DISC_META[key];
      const rawPercent = safeTotal === 0 ? 0 : value / safeTotal;
      const percent = total === 0 ? 1 / positive.length : rawPercent;

      const dashArray = `${percent * 100} ${100 - percent * 100}`;
      const dashOffset = -cumulative * 100;
      cumulative += percent;

      return {
        key,
        label: meta.label,
        color: meta.color,
        percent: Math.round(percent * 100),
        dashArray,
        dashOffset,
      };
    });
  }, [scores]);

  return (
    <div className="flex flex-col items-center gap-4">

      {/* The Pie Chart */}
      <svg
        viewBox="0 0 32 32"
        className="w-48 h-48 rounded-full"
        aria-hidden="true"
      >
        {/* BG */}
        <circle
          cx="16"
          cy="16"
          r="16"
          fill="transparent"
          stroke="#1f2937"
          strokeWidth="8"
        />
        {/* segments */}
        {segments.map((seg) => (
          <circle
            key={seg.key}
            cx="16"
            cy="16"
            r="16"
            fill="transparent"
            stroke={seg.color}
            strokeWidth="8"
            strokeDasharray={seg.dashArray}
            strokeDashoffset={seg.dashOffset}
            strokeLinecap="butt"
          />
        ))}
      </svg>

      <div className="space-y-4 w-full">
  {segments.map((seg) => {
    let desc = "";

    switch (seg.key) {
      case "D":
        desc =
          "حازم وطموح، يركز على النتائج ويحب اتخاذ القرارات السريعة. يحفّزه التحدي وتحقيق التأثير.";
        break;
      case "I":
        desc =
          "ودود ومُلهم للآخرين، يحب التواصل والعلاقة الإيجابية. يعبر عن أفكاره بسهولة ويحفّز بروح المتعة.";
        break;
      case "S":
        desc =
          "هادئ ومتوازن، يفضل الاستقرار والعلاقات المتعاونة. يميل للصبر ويبحث عن بيئة يسودها الانسجام.";
        break;
      case "C":
        desc =
          "منظم ودقيق، يهتم بالحقائق والجودة والأنظمة. يفضل التحليل والوضوح قبل اتخاذ القرار.";
        break;
    }

    return (
      <div
        key={seg.key}
        className="space-y-1 border-b pb-2 last:border-none"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded"
              style={{ backgroundColor: seg.color }}
            />
            <span className="font-medium">{seg.label}</span>
          </div>
          <span className="font-semibold">{seg.percent}%</span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    );
  })}
</div>

    </div>
  );
}


function shuffleQuestions(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({ D: 0, I: 0, S: 0, C: 0 });
  const [finished, setFinished] = useState(false);
  const [history, setHistory] = useState([]);


  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    shuffleQuestions(questions)
  );

  const totalQuestions = shuffledQuestions.length;
  const remaining = totalQuestions - currentIndex;

  const handleAnswer = (isYes) => {
    const question = shuffledQuestions[currentIndex];
    if (!question) return;

    const amount = isYes ? 1 : 0;

    // Apply score
    setScores((prev) => ({
      ...prev,
      [question.color]: prev[question.color] + amount,
    }));

    // Store in history so we can undo later
    setHistory((prev) => [...prev, { color: question.color, amount }]);

    const nextIndex = currentIndex + 1;

    if (nextIndex >= totalQuestions) {
      setFinished(true);
    }

    setCurrentIndex(nextIndex);
  };


  const reset = () => {
    setCurrentIndex(0);
    setScores({ D: 0, I: 0, S: 0, C: 0 });
    setFinished(false);
    setHistory([]);
    setShuffledQuestions(shuffleQuestions(questions));
  };


  const goBack = () => {
    if (currentIndex === 0 || history.length === 0) return;

    const last = history[history.length - 1];

    // Undo the last score change
    setScores((prev) => ({
      ...prev,
      [last.color]: prev[last.color] - last.amount,
    }));

    // Remove last history entry
    setHistory((prev) => prev.slice(0, -1));

    // Move back one question
    setCurrentIndex((prev) => prev - 1);
    setFinished(false);
  };


  return (
    <div className="min-h-screen bg-zinc-200 text-zinc-900 flex items-center justify-center px-4">
      <main
        className="w-full max-w-md bg-zinc-100 border border-zinc-300 rounded-2xl shadow-md p-6 space-y-6 relative"
        dir="rtl"
      >
        {/* BACK BUTTON */}
        <button
          onClick={goBack}
          disabled={currentIndex === 0}
          className={`absolute top-3 right-3 text-[11px] px-2.5 py-1 rounded-md border
            border-zinc-400 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 transition
            ${currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""}
          `}
        >
          السؤال السابق
        </button>

        <header className="space-y-1 pt-1">
          <h1 className="text-xl font-semibold text-zinc-900 text-center">
            اختبار شخصية (DISC)
          </h1>

          <p className="text-xs text-zinc-600 text-center">
            أجب بـ{" "}
            <span className="font-semibold text-teal-600">نعم</span> أو{" "}
            <span className="font-semibold text-rose-600">لا</span> بحسب ما يصفك غالبًا.
            بدون تدخل عوامل خارجية
          </p>
          <p className="text-xs text-zinc-500 text-center">
            إذا ترددت، اختر الأقرب لطبيعتك.
          </p>
        </header>

        {!finished && currentIndex < totalQuestions && (
          <section className="space-y-4">
            <div className="flex items-center justify-between text-[11px] text-zinc-600">
              <span>
                السؤال {currentIndex + 1} من {totalQuestions}
              </span>
              <span>المتبقي: {remaining}</span>
            </div>

            <div className="bg-zinc-50 border border-zinc-300 rounded-xl p-4 text-right shadow-sm">
              <p className="text-base leading-relaxed text-zinc-800">
                {shuffledQuestions[currentIndex].text}
              </p>
            </div>

            {/* Yes / No buttons */}
            <div className="flex gap-3" dir="ltr">
              <button
                onClick={() => handleAnswer(false)}
                className="w-full border border-rose-300 text-rose-700 bg-zinc-50 hover:bg-rose-50 active:scale-[0.98] transition rounded-xl py-2 text-sm font-medium"
              >
                لا
              </button>
              <button
                onClick={() => handleAnswer(true)}
                className="w-full bg-teal-500 hover:bg-teal-600 active:scale-[0.98] transition rounded-xl py-2 text-sm font-semibold text-white"
              >
                نعم
              </button>
            </div>
          </section>
        )}

        {(finished || currentIndex >= totalQuestions) && (
          <section className="space-y-6">
            <h2 className="text-lg font-semibold text-center text-zinc-900">
              نتيجتك في DISC
            </h2>

            <DiscPieChart scores={scores} />

            <button
              onClick={reset}
              className="w-full mt-4 border border-zinc-400 text-zinc-800 bg-zinc-200 hover:bg-zinc-300 rounded-xl py-2 text-sm font-medium transition"
            >
              إعادة الاختبار
            </button>
          </section>
        )}
      </main>
    </div>
  );

}
