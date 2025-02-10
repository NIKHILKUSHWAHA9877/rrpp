// AImodels.tsx
import React from 'react';
import './AImodels.css'; // Import the CSS file

const AImodels: React.FC = () => {
  return (
    <section className="ai-model-bg flex justify-center items-center flex-col py-20">
      {/* Grid of AI Models - First Row */}
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 px-10">
        {/* ChatGPT */}
        <div className="flex flex-col items-center justify-center bg-white p-16 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 h-100">
  <img
    src="https://cdn.relinns.com/assets/images/home-ai-model-one.png"
    alt="ChatGPT"
    width={40}
    className="mb-4" // Ensure space between the image and text
  />
  <p className="mt-4 font-bold text-lg text-gray-800">ChatGPT</p>
</div>


        {/* DALL·E */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 h-45">
          <img src="https://cdn.relinns.com/assets/images/home-ai-model-two.png" alt="DALL·E" width={80} />
          <p className="mt-4 font-bold text-lg text-gray-800">DALL·E</p>
        </div>

        {/* Whisper */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 h-45">
          <img src="https://cdn.relinns.com/assets/images/home-ai-model-three.png" alt="Whisper" width={80} />
          <p className="mt-4 font-bold text-lg text-gray-800">Whisper</p>
        </div>

        {/* Meta Llama */}
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 h-45">
          <img src="https://cdn.relinns.com/assets/images/home-ai-model-four-new.svg" alt="Meta Llama" width={80} />
          <p className="mt-4 font-bold text-lg text-gray-800">Meta Llama</p>
        </div>
      </div>

      {/* Main heading between rows */}
      <div className="text-center aiwe text-5xl text-white font-semibold py-10">
  <div className="relative inline-block">
    <span>AI Models that </span>
    <img
      src="https://cdn.relinns.com/assets/images/home-blue-pink-star.png"
      alt="Star"
      className="absolute top-9 left-64"
      width={30}
    />
    <span className="text-yellow-300">We Use</span>
  </div>
</div>


      {/* Grid of AI Models - Second Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 px-10">
        {/* Anthropic Claude */}
        <div className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 h-full">
          <img src="https://cdn.relinns.com/assets/images/home-ai-model-five.png" alt="Anthropic Claude" width={80} />
          <p className="mt-4 font-bold text-lg text-gray-800">Anthropic Claude</p>
        </div>

        {/* Amazon Lex */}
        <div className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 h-full">
          <img src="https://cdn.relinns.com/assets/images/home-ai-model-six.png" alt="Amazon Lex" width={80} />
          <p className="mt-4 font-bold text-lg text-gray-800">Amazon Lex</p>
        </div>

        {/* Gemini */}
        <div className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 h-full">
          <img src="https://cdn.relinns.com/assets/images/home-ai-model-seven.png" alt="Gemini" width={80} />
          <p className="mt-4 font-bold text-lg text-gray-800">Gemini</p>
        </div>

        {/* Perplexity AI */}
        <div className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 h-full">
          <img src="https://cdn.relinns.com/assets/images/home-ai-model-eight.png" alt="Perplexity AI" width={80} />
          <p className="mt-4 font-bold text-lg text-gray-800">Perplexity AI</p>
        </div>
      </div>
    </section>
  );
};

export default AImodels;
