// src/pages/IntermittentFasting.jsx
import React from "react";

function IntermittentFasting() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">الصيام المتقطع</h2>
      <p className="mb-4">
        الصيام المتقطع هو نمط غذائي يتنقل بين فترات الصيام والأكل. لا يحدد
        الصيام المتقطع الأطعمة التي يجب تناولها، بل يحدد متى يجب تناولها.
      </p>
      <h3 className="text-xl font-semibold mb-2">كيفية التطبيق:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>طريقة 16/8: الصيام لمدة 16 ساعة وتناول الطعام خلال 8 ساعات.</li>
        <li>
          طريقة 5:2: تناول الطعام بشكل طبيعي 5 أيام في الأسبوع وتقليل السعرات
          الحرارية إلى 500-600 في اليومين الآخرين.
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">الإيجابيات:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>قد يساعد في فقدان الوزن وتحسين التمثيل الغذائي.</li>
        <li>قد يساهم في تحسين صحة القلب وتقليل مخاطر الأمراض المزمنة.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">السلبيات:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>قد يسبب الجوع والضعف في البداية.</li>
        <li>
          قد لا يكون مناسبًا للجميع، خاصةً للأشخاص الذين يعانون من بعض الحالات
          الصحية.
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">نصائح إضافية:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>استشارة أخصائي تغذية قبل البدء في هذا النظام.</li>
        <li>شرب كميات كافية من الماء خلال فترات الصيام.</li>
      </ul>
    </div>
  );
}

export default IntermittentFasting;
