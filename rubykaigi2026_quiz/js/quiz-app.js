/**
 * quiz-app.js
 * --------------------------------------------------------
 * Application controller. Thin glue between view and core.
 *
 * Responsibilities:
 *   - bootstrap on DOMContentLoaded
 *   - own the selected-category set and the current QuizSession
 *   - translate user events into QuizSession mutations + re-renders
 *
 * Dependencies:
 *   quiz-data.js  (QUESTIONS, CATEGORIES)
 *   quiz-core.js  (QuizRepository, QuizSession, shuffle)
 *   quiz-view.js  (QuizView)
 * --------------------------------------------------------
 */

(function () {
  const repo = new QuizRepository(QUESTIONS, CATEGORIES);
  const selectedCats = new Set(CATEGORIES.map(c => c.id)); // default: all categories on
  let currentSession = null;

  // ------------------ event handlers ------------------

  function handlePick(chosenIdx, optionsEl) {
    if (!currentSession) return;
    const q = currentSession.current;
    if (currentSession.answers[currentSession.index] !== null) return; // already answered

    currentSession.recordAnswer(chosenIdx);
    QuizView.markOptionsAfterPick(q, chosenIdx, optionsEl);
    QuizView.showExplanation(q);
    QuizView.updateScoreIndicator(currentSession);
    QuizView.enableNext();
  }

  function handleStart() {
    const pool = repo.findByCategories([...selectedCats]);
    if (pool.length === 0) return;

    const choice = document.querySelector('input[name="qcount"]:checked').value;
    const size   = choice === "all" ? pool.length : Math.min(parseInt(choice, 10), pool.length);
    const picked = shuffle(pool).slice(0, size);

    currentSession = new QuizSession(picked);
    QuizView.showScreen("quiz-screen");
    QuizView.renderQuestion(currentSession, repo, handlePick);
  }

  function handleNext() {
    if (!currentSession) return;
    currentSession.advance();
    if (currentSession.isFinished) {
      QuizView.renderResult(currentSession, repo);
      QuizView.showScreen("result-screen");
    } else {
      QuizView.renderQuestion(currentSession, repo, handlePick);
    }
  }

  function handleHome() {
    currentSession = null;
    QuizView.showScreen("start-screen");
  }

  // ------------------ bootstrap ------------------

  function updateStartInfo() {
    QuizView.updateStartInfo(repo, selectedCats);
  }

  document.addEventListener("DOMContentLoaded", () => {
    QuizView.renderCategoryList(
      QuizView.$("cat-list"),
      repo,
      selectedCats,
      updateStartInfo
    );
    document.querySelectorAll('input[name="qcount"]').forEach(r =>
      r.addEventListener("change", updateStartInfo));
    updateStartInfo();

    QuizView.$("start-btn").addEventListener("click", handleStart);
    QuizView.$("next-btn").addEventListener("click", handleNext);
    QuizView.$("abort-btn").addEventListener("click", handleHome);
    QuizView.$("home-btn").addEventListener("click", handleHome);
    QuizView.$("retry-btn").addEventListener("click", handleStart);
  });
})();
