// src/pages/KetoDiet.jsx
import React from "react";

function KetoDiet() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">الكيتو دايت</h2>
      <p className="mb-4">
        الكيتو دايت هو نظام غذائي منخفض الكربوهيدرات وعالي الدهون يهدف إلى إدخال
        الجسم في حالة الكيتوزية، حيث يستخدم الدهون كمصدر رئيسي للطاقة بدلاً من
        الكربوهيدرات.
      </p>
      <h3 className="text-xl font-semibold mb-2">كيفية التطبيق:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>تقليل تناول الكربوهيدرات إلى أقل من 50 جرامًا في اليوم.</li>
        <li>زيادة تناول الدهون الصحية مثل الأفوكادو وزيت الزيتون والمكسرات.</li>
        <li>تناول كميات معتدلة من البروتين.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">الإيجابيات:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>قد يساعد في فقدان الوزن بسرعة.</li>
        <li>قد يساهم في تحسين مستويات السكر في الدم.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">السلبيات:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>قد يسبب أعراضًا جانبية مثل "إنفلونزا الكيتو" في البداية.</li>
        <li>قد يكون من الصعب الالتزام به على المدى الطويل.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">نصائح إضافية:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>استشارة أخصائي تغذية قبل البدء في هذا النظام.</li>
        <li>مراقبة مستويات الإلكتروليتات وشرب كميات كافية من الماء.</li>
      </ul>
    </div>
  );
}

export default KetoDiet;
