/**
 * quiz-core.js
 * --------------------------------------------------------
 * Pure logic layer. No DOM, no globals beyond exports.
 * Easy to unit-test in Node.
 *
 *   QuizRepository : retrieves question subsets & category metadata
 *   QuizSession    : state machine for a single quiz run
 *   shuffle(arr)   : non-destructive Fisher–Yates shuffle
 *
 * Dependencies: QUESTIONS, CATEGORIES from quiz-data.js
 * --------------------------------------------------------
 */

/**
 * Non-destructive Fisher–Yates shuffle.
 * @param {Array<T>} arr
 * @returns {Array<T>} new shuffled array (original untouched)
 */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Retrieves questions and category metadata. Pure data access.
 * Holds no runtime state of its own.
 */
class QuizRepository {
  constructor(questions, categories) {
    this.questions = questions;
    this.categories = categories;
  }

  /** Returns categories with per-category question counts. */
  countByCategory() {
    return this.categories.map(c => ({
      ...c,
      count: this.questions.filter(q => q.category === c.id).length
    }));
  }

  /**
   * Returns all questions whose category is in the given set.
   * @param {Iterable<string>} categoryIds
   */
  findByCategories(categoryIds) {
    const set = new Set(categoryIds);
    return this.questions.filter(q => set.has(q.category));
  }

  /** Human-readable label for a category id (falls back to the id). */
  categoryLabel(id) {
    const c = this.categories.find(x => x.id === id);
    return c ? c.label : id;
  }
}

/**
 * Single-run quiz state machine.
 *
 * Lifecycle:
 *   new QuizSession(questions)
 *   → recordAnswer(i) → advance() → (repeat) → isFinished=true
 *
 * Knows nothing about the DOM; callers pull state for rendering.
 */
class QuizSession {
  /** @param {Array<Question>} questions already shuffled & sliced */
  constructor(questions) {
    this.questions = questions;
    this.index = 0;
    /** @type {Array<number|null>} selected option index per question */
    this.answers = new Array(questions.length).fill(null);
  }

  get total()      { return this.questions.length; }
  get current()    { return this.questions[this.index]; }
  get isFinished() { return this.index >= this.total; }

  /** Records the user's pick for the current question. Idempotent-ish:
   *  calling twice overwrites, but views should prevent it. */
  recordAnswer(selectedIdx) {
    this.answers[this.index] = selectedIdx;
  }

  /** Moves to the next question. */
  advance() { this.index += 1; }

  /** Number of correct answers so far. */
  get score() {
    return this.answers.reduce((acc, ans, i) =>
      acc + (ans !== null && ans === this.questions[i].answer ? 1 : 0), 0);
  }

  /**
   * Per-category correct/total breakdown.
   * @param {(categoryId:string) => string} categoryLabelFn
   */
  breakdownByCategory(categoryLabelFn) {
    const buckets = new Map();
    this.questions.forEach((q, i) => {
      const key = q.category;
      if (!buckets.has(key)) {
        buckets.set(key, {
          category: key,
          label: categoryLabelFn(key),
          correct: 0,
          total: 0
        });
      }
      const b = buckets.get(key);
      b.total += 1;
      if (this.answers[i] === q.answer) b.correct += 1;
    });
    return [...buckets.values()];
  }
}
