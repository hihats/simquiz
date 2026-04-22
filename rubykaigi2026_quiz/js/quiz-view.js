/**
 * quiz-view.js
 * --------------------------------------------------------
 * DOM rendering layer. All element queries and mutation live here.
 * Each function has a single render target and returns void.
 *
 * Exposed object: QuizView
 *   - $(id)                                   element getter
 *   - renderCategoryList(container, repo, selectedSet, onChange)
 *   - updateStartInfo(repo, selectedSet)
 *   - renderQuestion(session, repo, onPick)
 *   - markOptionsAfterPick(session, question, chosenIdx, optionsEl)
 *   - showExplanation(question)
 *   - renderResult(session, repo)
 *   - showScreen(id)
 *
 * Dependencies: QuizRepository / QuizSession from quiz-core.js
 * --------------------------------------------------------
 */

const QuizView = (() => {
  const OPTION_LETTERS = ["A", "B", "C", "D"];
  const SCREEN_IDS = ["start-screen", "quiz-screen", "result-screen"];

  const $ = (id) => document.getElementById(id);

  // ------------------ start screen ------------------

  function renderCategoryList(container, repo, selectedSet, onChange) {
    container.innerHTML = "";
    repo.countByCategory().forEach(c => {
      const label = document.createElement("label");
      label.className = "cat-chip" + (selectedSet.has(c.id) ? " active" : "");
      label.innerHTML = `
        <input type="checkbox" value="${c.id}" ${selectedSet.has(c.id) ? "checked" : ""}>
        <span>${c.label}</span>
        <span class="cat-count">${c.count}問</span>
      `;
      const input = label.querySelector("input");
      input.addEventListener("change", (e) => {
        if (e.target.checked) selectedSet.add(c.id);
        else selectedSet.delete(c.id);
        label.classList.toggle("active", e.target.checked);
        if (typeof onChange === "function") onChange();
      });
      container.appendChild(label);
    });
  }

  /**
   * Updates the "プール N 問 → 出題 M 問" label and start-button enabled state.
   */
  function updateStartInfo(repo, selectedSet) {
    const pool = selectedSet.size === 0
      ? 0
      : repo.findByCategories([...selectedSet]).length;
    const choice = document.querySelector('input[name="qcount"]:checked').value;
    const planned = choice === "all" ? pool : Math.min(parseInt(choice, 10), pool);

    $("start-info").textContent = pool === 0
      ? "カテゴリを選んでください"
      : `プール ${pool} 問 → 出題 ${planned} 問`;
    $("start-btn").disabled = planned === 0;
  }

  // ------------------ quiz screen ------------------

  /**
   * Renders the current question, wiring each option's click to onPick.
   * @param {QuizSession} session
   * @param {QuizRepository} repo
   * @param {(chosenIdx:number, optionsEl:HTMLElement) => void} onPick
   */
  function renderQuestion(session, repo, onPick) {
    const q = session.current;
    $("q-category").textContent = repo.categoryLabel(q.category);
    $("q-text").innerHTML = q.q;

    const optionsEl = $("options");
    optionsEl.innerHTML = "";
    q.options.forEach((opt, i) => {
      const el = document.createElement("div");
      el.className = "opt";
      el.innerHTML = `<span class="opt-marker">${OPTION_LETTERS[i]}</span><span>${opt}</span>`;
      el.addEventListener("click", () => onPick(i, optionsEl));
      optionsEl.appendChild(el);
    });

    $("explanation").classList.add("hidden");
    $("next-btn").disabled = true;

    $("progress-text").textContent  = `${session.index + 1} / ${session.total}`;
    $("progress-score").textContent = `正答 ${session.score}`;
    $("progress-bar").style.width   = `${(session.index / session.total) * 100}%`;
  }

  /**
   * Visually marks the chosen option and reveals the correct one.
   * Also locks all options against further clicks.
   */
  function markOptionsAfterPick(question, chosenIdx, optionsEl) {
    [...optionsEl.children].forEach((child, i) => {
      child.classList.add("locked");
      if (i === question.answer) child.classList.add("correct");
      else if (i === chosenIdx)  child.classList.add("wrong");
    });
  }

  function showExplanation(question) {
    const exp = $("explanation");
    let html = question.explanation || "";
    if (question.reference) {
      html += `<div class="reference">→ <a href="${question.reference.url}" target="_blank" rel="noopener">${question.reference.label}</a></div>`;
    }
    exp.innerHTML = html;
    exp.classList.remove("hidden");
  }

  function updateScoreIndicator(session) {
    $("progress-score").textContent = `正答 ${session.score}`;
  }

  function enableNext() { $("next-btn").disabled = false; }

  // ------------------ result screen ------------------

  function renderResult(session, repo) {
    const total = session.total;
    const score = session.score;
    const pct   = total === 0 ? 0 : Math.round((score / total) * 100);

    $("score-big").textContent = `${score} / ${total}`;
    $("score-sub").textContent = `正答率 ${pct}% — ${scoreMessage(pct)}`;

    const bd = $("score-breakdown");
    bd.innerHTML = "";
    session.breakdownByCategory(id => repo.categoryLabel(id)).forEach(row => {
      const d = document.createElement("div");
      d.className = "score-row";
      d.innerHTML = `<span>${row.label}</span><span class="score-ratio">${row.correct} / ${row.total}</span>`;
      bd.appendChild(d);
    });
  }

  function scoreMessage(pct) {
    if (pct >= 90) return "素晴らしい！現地で自信を持ってトークを楽しめそう";
    if (pct >= 70) return "良い仕上がり。苦手カテゴリを復習しておこう";
    if (pct >= 50) return "基礎は押さえている。セッション前に追加インプット推奨";
    return "今のうちにキャッチアップしておくと当日の理解が段違い";
  }

  // ------------------ screen switch ------------------

  function showScreen(id) {
    SCREEN_IDS.forEach(s => $(s).classList.toggle("hidden", s !== id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return {
    $,
    renderCategoryList,
    updateStartInfo,
    renderQuestion,
    markOptionsAfterPick,
    showExplanation,
    updateScoreIndicator,
    enableNext,
    renderResult,
    showScreen
  };
})();
