import { useState, useEffect, useRef } from 'react';

const quizData = [
  {
    question: "Who tf is this??",
    image: "/tralalelo.webp", // <-- perbaiki di sini
    options: [
      "Tralalero Tralala",
      "Tung-tung Sahur",
      "Brr Brrr patapim",
      "Pot Hotspot"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/Ballerina_Cappuccina.png", // <-- perbaiki di sini
    options: [
      "Ballerina Cappucina",
      "Tung-tung Sahur",
      "Lirili Larila",
      "Tralalero Tralala"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/bobrito_bandito.webp", // <-- perbaiki di sini
    options: [
      "Boborito Bandito",
      "Brri Brri Bicus Dicus Bombicus",
      "Trulimero Trulicina",
      "Tralalero Tralala",
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/bobombini_gusini.webp", // <-- perbaiki di sini
    options: [
      "Bombombini Gusini",
      "Pandaccini Bananini",
      "Brr Brrr patapim",
      "Trulimero Trulicina",
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/BOneca_Ambalabu.webp", // <-- perbaiki di sini
    options: [
      "Boneca Ambalabu",
      "Frigo Camelo",
      "Frulli Frulla",
      "Tralalero Tralala",
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/Brr Brr Patapim.webp", // <-- perbaiki di sini
    options: [
      "Brr Brr Patapim",
      "Blueberrinni Octopussini",
      "Tralalero Tralala",
      "La Vaca Saturno Saturnita"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/Brri Brri Bicus Dicus Bombicus.webp", // <-- perbaiki di sini
    options: [
      "Brri Brri Bicus Dicus Bombicus",
      "Frigo Camelo",
      "Bobrito Bandito",
      "Spaghetti Tualetti"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/cappucino_assasino.webp", // <-- perbaiki di sini
    options: [
      "Cappucino Assasino",
      "Ballarina Cappucina",
      "Brr Brrr patapim",
      "Lirili Larila"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/Chimpanzini_Bananini.webp", // <-- perbaiki di sini
    options: [
      "Chimpanzini Bananini",
      "Brr Brrr patapim",
      "Garamararamararaman dan Madudungdung tak tuntung perkuntung",
      "Trippi Troppi"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/frigo_camelo.webp", // <-- perbaiki di sini
    options: [
      "Frigo Camelo",
      "Pandaccini Bananini",
      "Pot Hotspot",
      "Bobrito bandito"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/frulli_frulla.webp", // <-- perbaiki di sini
    options: [
      "Frulli Frulla",
      "Frigo Camelo",
      "pandaccini Bananini",
      "Tigroligre Frutonni"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/la_vaca_saturno_saturnita.webp", // <-- perbaiki di sini
    options: [
      "La Vaca Saturno Saturnita",
      "Giraffa Meloniera",
      "Tralalero Tralala",
      "Hipopotamo Meloniero"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/lirili_Larila.webp", // <-- perbaiki di sini
    options: [
      "Lirili Larila",
      "hipopotamo Meloniero",
      "Rhino Toasterino",
      "Ganganzelli Trulala"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/Pandaccini Bananini.webp", // <-- perbaiki di sini
    options: [
      "Pandaccini Bananini",
      "Bulliccinni Bananini",
      "Bobrelli Bananelli",
      "Gorillini Bananini"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/Pot_Hotspot.webp", // <-- perbaiki di sini
    options: [
      "Pot Hotspot",
      "Bobrelli Bananelli",
      "Spaghetti Tualetti",
      "Espressona Signora"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/Spaghetti_Tualetti.webp", // <-- perbaiki di sini
    options: [
      "Spaghetti Tualetti",
      "Espressona Signora",
      "Tung-tung Sahur",
      "La Vaca Saturno Saturnita"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/trulimero_trulicina.webp", // <-- perbaiki di sini
    options: [
      "Trulimero Trulicina",
      "Trippi Troppi",
      "Brr Brrr patapim",
      "Tigroligre Frutonni"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/tung-sahur.webp", // <-- perbaiki di sini
    options: [
      "Tung-tung Sahur",
      "Ta Ta Ta Ta Ta Ta Ta Ta Ta Ta Ta Sahur",
      "Brr Brrr patapim",
      "Bombardilo Croccodillo"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/U Din Din Din Din Dun Ma Din Din Din Dun.webp", // <-- perbaiki di sini
    options: [
      "U Din Din Din Din Dun Ma Din Din Din Dun",
      "Dun Dun Dun Madindun",
      "Espressona Signora",
      "Trulimero Trulicina"
    ],
    answer: 0
  },
  {
    question: "Who tf is this??",
    image: "/Bombardiro_Crocodillo.jpg", // <-- perbaiki di sini
    options: [
      "Bombardiro Croccodillo",
      "Tung-tung Sahur",
      "Brr Brrr patapim",
      "Bombini Gusini"
    ],
    answer: 0
  },
];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function App() {
  const [name, setName] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const audioRef = useRef(null);

  // Saat mulai quiz, acak soal dan jawaban
  const startQuiz = () => {
    // Acak soal
    const shuffledQuestions = shuffleArray(quizData).map(q => {
      // Acak jawaban
      const shuffledOptions = shuffleArray(q.options);
      // Cari index jawaban benar setelah diacak
      const newAnswer = shuffledOptions.indexOf(q.options[q.answer]);
      return {
        ...q,
        options: shuffledOptions,
        answer: newAnswer,
      };
    });
    setQuestions(shuffledQuestions);
    setHasStarted(true);
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setTimeLeft(10);
  };

  useEffect(() => {
    if (!hasStarted || showResult || isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [current, hasStarted, showResult, isPaused]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  const handleTimeout = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setTimeLeft(10); // reset timer di sini
    } else {
      setShowResult(true);
    }
  };

  const handleAnswer = (index) => {
    const isCorrect = index === questions[current].answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [...prev, index]);

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setTimeLeft(10);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setShowResult(false);
    setCurrent(0);
    setScore(0);
    setHasStarted(false);
    setName("");
    setQuestions([]);
    setUserAnswers([]);
    setIsPaused(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  // Pause overlay
  if (isPaused) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-6 text-purple-700">Quiz Dijeda</h2>
          <button
            onClick={() => setIsPaused(false)}
            className="w-full py-2 mb-3 bg-purple-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition"
          >
            Lanjutkan
          </button>
          <button
            onClick={handleRestart}
            className="w-full py-2 bg-purple-500 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition"
          >
            Ulangi
          </button>
        </div>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Selamat datang di Kuis Brainrot!</h2>
          <p className="mb-2 text-gray-700">Masukkan nama kamu dulu ya:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama kamu"
            className="w-full px-4 py-2 border border-purple-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            onClick={() => {
              if (name.trim() !== "") {
                startQuiz();
              } else {
                alert("Tolong isi nama dulu 🙏");
              }
            }}
            className="w-full py-2 bg-purple-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition"
          >
            Mulai Kuis
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      {/* Musik player (hidden) */}
      <audio ref={audioRef} src="/music.mp3" loop />
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Tombol musik di pojok kanan atas */}
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setMusicOn((prev) => !prev)}
            className={`px-3 py-1 rounded-lg font-semibold transition ${musicOn
                ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            aria-label={musicOn ? "Matikan Musik" : "Nyalakan Musik"}
          >
            {musicOn ? "🔊 Musik ON" : "🔇 Musik OFF"}
          </button>
        </div>
        {showResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Skor Akhir</h2>
            <p className="mb-2 text-gray-700">Terima kasih, <span className="font-semibold">{name}</span>!</p>
            <p className="text-lg text-gray-800 mb-4">
              Kamu menjawab <span className="font-bold text-purple-600">{score}</span> dari <span className="font-bold">{questions.length}</span> soal dengan benar.
            </p>

            <div className="text-left max-h-96 overflow-y-auto mb-4">
              {questions.map((q, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === q.answer;
                return (
                  <div key={index} className="mb-4 p-3 border rounded-lg bg-gray-50">
                    <div className="flex items-center gap-3 mb-2">
                      {q.image && (
                        <img
                          src={q.image}
                          alt={`Gambar soal ${index + 1}`}
                          className="w-16 h-16 object-cover rounded shadow"
                        />
                      )}
                      <p className="font-semibold">{index + 1}. {q.question}</p>
                    </div>
                    <p className="text-sm">Jawaban kamu:{" "}
                      <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                        {q.options[userAnswer] || <em>Tidak dijawab</em>}
                      </span>
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-green-600">Jawaban benar: {q.options[q.answer]}</p>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={handleRestart}
              className="mt-4 w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Mulai Ulang
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-purple-700">{questions[current].question}</h2>
              <div className="flex items-center gap-2">
                <span className={`font-mono text-lg px-3 py-1 rounded-full ${timeLeft <= 5 ? "bg-red-100 text-red-700" : "bg-gray-200 text-gray-700"}`}>
                  {timeLeft}s
                </span>
                <button
                  onClick={() => setIsPaused(true)}
                  className="ml-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  <span className="material-icons">pause</span>
                </button>
              </div>
            </div>
            {questions[current].image && (
              <img
                src={questions[current].image}
                alt="Gambar pertanyaan"
                className="mb-4 w-full h-48 object-cover rounded-lg shadow"
              />
            )}
            <div className="space-y-4">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className="w-full py-2 px-4 bg-gray-100 hover:bg-purple-100 text-gray-800 rounded-lg font-medium transition"
                  disabled={isPaused}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
