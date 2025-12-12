import { useMemo, useState } from 'react'

type Answer = {
  label: string
  correct: boolean
}

type Question = {
  id: string
  prompt: string
  answers: Answer[]
  image: string
}

const QUESTIONS: Question[] = [
  {
    id: 'cat',
    prompt: 'What sound does a cat make?',
    image: '/assets/photo-cat.png',
    answers: [
      { label: 'Bhau-Bhau', correct: false },
      { label: 'Meow-Meow', correct: true },
      { label: 'Oink-Oink', correct: false },
    ],
  },
  {
    id: 'fridge',
    prompt: 'What would you probably find in your fridge?',
    image: '/assets/photo-fridge.png',
    answers: [
      { label: 'Shoes', correct: false },
      { label: 'Ice Cream', correct: true },
      { label: 'Books', correct: false },
    ],
  },
  {
    id: 'banana',
    prompt: 'What color are bananas?',
    image: '/assets/photo-cat.png',
    answers: [
      { label: 'Blue', correct: false },
      { label: 'Yellow', correct: true },
      { label: 'Red', correct: false },
    ],
  },
  {
    id: 'stars',
    prompt: 'How many stars are in the sky?',
    image: '/assets/photo-cat.png',
    answers: [
      { label: 'Two', correct: false },
      { label: 'Infinite', correct: true },
      { label: 'One Hundred', correct: false },
    ],
  },
]

function AnswerButton({
  label,
  selected,
  onSelect,
}: {
  label: string
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-[10px] border transition-colors duration-200 ${
        selected 
          ? 'border-[#96e5ff] bg-answer' 
          : 'border-[rgba(150,229,255,0.5)] bg-white hover:bg-[#E6F7FF]'
      } px-10 py-[27px] text-center text-[22px] font-semibold leading-[1.09em] tracking-[-0.0142em] text-ink h-[78px] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60c7e6]`}
      aria-pressed={selected}
    >
      {label}
    </button>
  )
}

function Navigation({
  canGoBack,
  canGoNext,
  onPrev,
  onNext,
}: {
  canGoBack: boolean
  canGoNext: boolean
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div className="flex items-center gap-[10px]">
      <button
        type="button"
        aria-label="Previous question"
        onClick={onPrev}
        disabled={!canGoBack}
        className="flex h-[50px] w-[53px] items-center justify-center rounded-[10px] border border-[rgba(150,229,255,0.05)] bg-answer transition duration-150 disabled:cursor-not-allowed disabled:opacity-30 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#60c7e6]"
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={canGoBack ? "#15313D" : "#9CA3AF"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="12" x2="6" y2="12" stroke="currentColor" />
          <polyline points="12 18 6 12 12 6" stroke="currentColor" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next question"
        onClick={onNext}
        disabled={!canGoNext}
        className="flex h-[50px] w-[53px] items-center justify-center rounded-[10px] border border-[rgba(150,229,255,0.5)] bg-answer transition duration-150 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#60c7e6] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={canGoNext ? "#15313D" : "#9CA3AF"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" />
          <polyline points="12 6 18 12 12 18" stroke="currentColor" />
        </svg>
      </button>
    </div>
  )
}

export default function App() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState(false)

  const question = QUESTIONS[step]
  const showResults = step >= QUESTIONS.length

  const score = useMemo(() => {
    const correctCount = QUESTIONS.reduce((total, q) => {
      const selected = answers[q.id]
      const isCorrect = q.answers.find((a) => a.label === selected)?.correct
      return total + (isCorrect ? 1 : 0)
    }, 0)

    return Math.round((correctCount / QUESTIONS.length) * 100)
  }, [answers])

  const handleSelect = (value: string) => {
    if (!question) return
    setAnswers((prev) => ({ ...prev, [question.id]: value }))
    setTouched(false)
  }

  const handleNext = () => {
    if (showResults) return
    if (!answers[question.id]) {
      setTouched(true)
      return
    }
    setStep((current) => current + 1)
  }

  const handlePrev = () => {
    if (step === 0) return
    setStep((current) => Math.max(0, current - 1))
    setTouched(false)
  }

  const handleRestart = () => {
    setAnswers({})
    setStep(0)
    setTouched(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#e8f6fb]">
      <div className="absolute inset-0 glow-aurora opacity-80" aria-hidden />
      <img
        src="/assets/cloud-bg.png"
        alt=""
        className="pointer-events-none absolute left-0 top-[-500px] w-full opacity-60"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1625px] items-center justify-center px-6 py-12">
      <div className="relative w-full min-h-[900px] rounded-jumbo border border-white/10 bg-white/50 backdrop-blur overflow-visible">
          <div className="absolute inset-6 rounded-pill bg-[#F4FDFF]/40" aria-hidden />

          <div className="relative z-10 flex min-h-full flex-col items-center overflow-visible px-[19.31px] pt-[19.31px] pb-8">
            <h1 className="text-gradient mb-2 mt-[106px] text-center font-display text-[90px] leading-[102px] tracking-[-0.044em] font-normal italic">
              Test Your Knowledge
            </h1>
            <div className="mb-[98px] rounded-lg bg-white/80 px-[31px] py-[10px] text-center text-[20px] font-medium leading-[1.2em] tracking-[-0.0156em] text-ink shadow-sm">
              Answer all questions to see your results
            </div>
            
            {/* Progress Bar */}
            <div className="mb-[47px] flex w-full max-w-[896px] items-center justify-center gap-2">
              {QUESTIONS.map((_, index) => {
                let width = '216px'
                if (index < step) {
                  width = '200px' // Completed segments - shorter
                } else if (index === step) {
                  width = '300px' // Current segment - longest
                } else {
                  width = '192px' // Future segments - medium
                }
                return (
                  <div
                    key={index}
                    className={`h-[7px] rounded-full transition-all duration-300 ${
                      index <= step ? 'bg-[#15313D]' : 'bg-[#E6E6E6]'
                    }`}
                    style={{ width }}
                  />
                )
              })}
            </div>
            

            {showResults ? (
              <div className="flex w-full flex-col items-center gap-8 pb-6">
                <p className="text-gradient text-center font-display text-[60px] leading-[0.9em] tracking-[-0.067em]">
                  Your Final score is
                </p>
                <div className="relative flex items-center gap-3">
                  <div className="flex h-[200px] items-end overflow-hidden rounded-2xl ">
                    <span className="rolling-column text-gradient font-display text-[162px] leading-[1.2em] tracking-[-0.02em]">
                      {Math.max(score, 1)}
                    </span>
                  </div>
                  <span className="text-gradient font-display text-[60px] leading-[0.9em] tracking-[-0.067em]">
                    %
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  
                  <button
                    type="button"
                    className="rounded-lg bg-answer px-8 py-3 text-[20px] font-semibold tracking-[-0.015em] text-ink transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60c7e6]"
                    onClick={handleRestart}
                  >
                    Start Again
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex w-full flex-1 flex-col items-center">
                <div className="flex flex-col gap-[14px] w-full max-w-[896px]">
                  <div className="rounded-[10px] border border-[#96e5ff] bg-answer px-10 py-6 text-center text-[22px] font-semibold leading-[1.09em] tracking-[-0.0142em] text-ink shadow-sm h-[78px] flex items-center justify-center w-full">
                    {step + 1}. {question.prompt}
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    {question.answers.map((option) => (
                      <AnswerButton
                        key={option.label}
                        label={option.label}
                        selected={answers[question.id] === option.label}
                        onSelect={() => handleSelect(option.label)}
                      />
                    ))}
                  </div>
                  
                  {/* Navigation buttons below options, aligned right */}
                  <div className="flex justify-end mt-4">
                    <Navigation
                      canGoBack={step > 0}
                      canGoNext={Boolean(answers[question.id])}
                      onPrev={handlePrev}
                      onNext={handleNext}
                    />
                  </div>
                  
                  {touched && !answers[question.id] ? (
                    <p className="text-sm font-semibold text-[#d94a4a]">
                      Please choose an answer to continue.
                    </p>
                  ) : null}
                  
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}