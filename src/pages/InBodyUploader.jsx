import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const InBodyAnalyzer = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to parse extracted text
  const parseInBodyData = (text) => {
    const weightMatch = text.match(/Weight[:\s]+(\d+\.?\d*)/i);
    const bmiMatch = text.match(/BMI[:\s]+(\d+\.?\d*)/i);

    return {
      weight: weightMatch
        ? `${weightMatch[1]} كجم`
        : t("inbody_analyzer.not_available"),
      bmi: bmiMatch ? bmiMatch[1] : t("inbody_analyzer.not_available"),
    };
  };

  // Function to handle the API call and analysis
  const handleAnalyze = async () => {
    if (!selectedFile) {
      alert(t("inbody_analyzer.error_message"));
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/ocr",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const parsedData = parseInBodyData(data.extractedText);
      setAnalysisResult(parsedData);
    } catch (error) {
      console.error("Error during analysis:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen px-4 md:px-20 py-5 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {t("inbody_analyzer.title")}
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <label className="block text-gray-700 dark:text-gray-300 font-medium">
          {t("inbody_analyzer.upload_prompt")}
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="border p-2 rounded dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
        />
        <button
          onClick={handleAnalyze}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          {loading
            ? t("inbody_analyzer.analyzing")
            : t("inbody_analyzer.analyze_button")}
        </button>
        {analysisResult && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded shadow text-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold mb-2">
              {t("inbody_analyzer.results")}
            </h2>
            <p>
              {t("inbody_analyzer.weight")}: {analysisResult.weight}
            </p>
            <p>
              {t("inbody_analyzer.bmi")}: {analysisResult.bmi}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InBodyAnalyzer;
