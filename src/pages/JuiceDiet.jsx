// src/pages/JuiceDiet.jsx
import React from "react";

function JuiceDiet() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">رجيم العصير</h2>
      <p className="mb-4">
        رجيم العصير هو نظام غذائي يعتمد على استهلاك العصائر الطازجة فقط لفترة
        محددة، بهدف تطهير الجسم وفقدان الوزن.
      </p>
      <h3 className="text-xl font-semibold mb-2">كيفية التطبيق:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>اختيار مجموعة متنوعة من الفواكه والخضروات الطازجة.</li>
        <li>عصر المكونات باستخدام عصارة أو خلاط.</li>
        <li>
          تناول العصائر بدلاً من الوجبات الصلبة لمدة تتراوح بين 3 إلى 7 أيام.
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">الإيجابيات:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>زيادة استهلاك الفيتامينات والمعادن.</li>
        <li>قد يساعد في فقدان الوزن السريع على المدى القصير.</li>
        <li>يساهم في تطهير الجسم من السموم.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">السلبيات:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          نقص البروتين والألياف، مما قد يؤدي إلى الشعور بالجوع وفقدان الكتلة
          العضلية.
        </li>
        <li>قد لا يكون مستدامًا على المدى الطويل.</li>
        <li>
          احتمالية استعادة الوزن المفقود بسرعة بعد العودة إلى النظام الغذائي
          المعتاد.
        </li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">نصائح إضافية:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>استشارة أخصائي تغذية قبل البدء في هذا النظام.</li>
        <li>التأكد من شرب كميات كافية من الماء.</li>
        <li>تجنب إضافة السكر إلى العصائر.</li>
        <li>مراقبة استجابة الجسم والتوقف في حالة الشعور بأي أعراض سلبية.</li>
      </ul>
    </div>
  );
}

export default JuiceDiet;
