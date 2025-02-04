import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/Card";
import { db } from "../firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const HealthyRecipesLibrary = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const recipesCollection = collection(db, "recipes");

        // Fetch data in real-time
        const unsubscribe = onSnapshot(recipesCollection, (snapshot) => {
          setRecipes(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

        setLoading(false);

        // Cleanup for real-time updates
        return () => unsubscribe();
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to load recipes. Please try again later.");
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes =
    filter === "All"
      ? recipes
      : recipes.filter(
          (recipe) => recipe.dietType?.toLowerCase() === filter.toLowerCase()
        );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 dark:text-gray-300 text-xl">
          {currentLanguage === "en"
            ? "Loading recipes..."
            : "جاري تحميل الوصفات..."}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 dark:text-red-400 text-xl">
          {currentLanguage === "en"
            ? "Failed to load recipes. Please try again later."
            : "فشل تحميل الوصفات. يرجى المحاولة لاحقًا."}
        </p>
      </div>
    );
  }

  return (
    <div
      id="health-library"
      className="p-4 text-center mt-[-50px] dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all min-h-screen"
    >
      <h1 className="text-2xl font-bold mb-4">
        {currentLanguage === "en"
          ? " Healthy Recipes Library 🍲"
          : "مكتبة الوصفات الصحية 🍲"}
      </h1>

      {/* filter */}
      <div className="flex gap-4 mb-6 justify-center items-center">
        {[
          { type: "All", label: currentLanguage === "en" ? "All" : "الكل" },
          { type: "Keto", label: currentLanguage === "en" ? "Keto" : "كيتو" },
          {
            type: "Vegan",
            label: currentLanguage === "en" ? "Vegan" : "نباتي",
          },
          {
            type: "LowCarb",
            label: currentLanguage === "en" ? "Low Carb" : "منخفض الكربوهيدرات",
          },
        ].map(({ type, label }) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-lg border ${
              filter === type
                ? "bg-emerald-500 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-400 hover:text-white"
            } transition`}
            onClick={() => setFilter(type)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            className="rounded-lg shadow-md dark:shadow-lg bg-white dark:bg-gray-800"
          >
            <img
              src={recipe.image || "No Image Found"}
              alt={recipe.name[currentLanguage] || "Recipe"}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardContent className="p-4">
              <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
                {recipe.name[currentLanguage] || "Untitled"}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                <strong>
                  {currentLanguage === "en" ? "Description:" : "الوصف:"}
                </strong>{" "}
                {recipe.description[currentLanguage] ||
                  "No description available."}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                <strong>
                  {currentLanguage === "en" ? "Calories:" : "السعرات:"}
                </strong>{" "}
                {recipe.calories || "No calories available."}{" "}
                {currentLanguage === "en" ? "Cal" : "كال"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
          {currentLanguage === "en"
            ? "No recipes found for the selected diet type."
            : "لم يتم العثور على وصفات لنوع الدايت المحدد."}
        </p>
      )}
    </div>
  );
};

export default HealthyRecipesLibrary; 