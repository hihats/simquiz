/**
 * quiz-data.js
 * --------------------------------------------------------
 * Pure data layer. Holds all questions + category metadata.
 * No DOM / no logic — swap out freely without touching the rest.
 *
 * Exports (globals):
 *   - QUESTIONS  : Array<Question>
 *   - CATEGORIES : Array<{ id, label }>
 *
 * Question shape:
 *   {
 *     id:          string,   // unique
 *     category:    string,   // must match a CATEGORIES.id
 *     q:           string,   // HTML allowed
 *     options:     [string, string, string, string],
 *     answer:      0|1|2|3,  // index into options
 *     explanation: string,   // HTML allowed
 *     reference?:  { label: string, url: string }
 *   }
 * --------------------------------------------------------
 */

const CATEGORIES = [
  { id: "ruby-core",     label: "Ruby言語機能・内部実装" },
  { id: "sessions-2026", label: "今年の発表者・セッション" },
  { id: "past-topics",   label: "過去RubyKaigiの重要トピック" },
  { id: "ecosystem",     label: "Ruby周辺エコシステム" },
  { id: "vocab-en",      label: "RubyKaigi頻出英語" }
];

const QUESTIONS = [
  // ==================================================
  // CATEGORY: Ruby言語機能・内部実装
  // ==================================================
  {
    id: "core-001",
    category: "ruby-core",
    q: "YJITが最初に「experimental」として導入されたRubyバージョンは？",
    options: ["3.0", "3.1", "3.2", "3.3"],
    answer: 1,
    explanation: "YJIT は Ruby <b>3.1</b> で experimental として導入され、Ruby 3.2 で production ready になりました。Shopify が中心となって開発しています。",
    reference: { label: "Ruby 3.1.0 Released", url: "https://www.ruby-lang.org/en/news/2021/12/25/ruby-3-1-0-released/" }
  },
  {
    id: "core-002",
    category: "ruby-core",
    q: "Ractor が experimental 機能として導入されたRubyバージョンは？",
    options: ["2.7", "3.0", "3.1", "3.2"],
    answer: 1,
    explanation: "Ractor は Ruby <b>3.0</b> で並列計算の仕組みとして実験的に導入されました。笹田耕一さんが設計・実装を主導しています。",
    reference: { label: "Ractor - Ruby docs", url: "https://docs.ruby-lang.org/en/3.0/Ractor.html" }
  },
  {
    id: "core-003",
    category: "ruby-core",
    q: "Ruby 3.4 でデフォルトパーサーが parse.y から切り替わった先は？",
    options: ["Lrama", "Prism", "Ripper", "tree-sitter-ruby"],
    answer: 1,
    explanation: "Ruby 3.4 からデフォルトパーサは <b>Prism</b> になりました。Prism は Shopify の Kevin Newton さんが主導する、エラー寛容で外部ツールからも使いやすいパーサです。",
    reference: { label: "Ruby 3.4.0 Released", url: "https://www.ruby-lang.org/en/news/2024/12/25/ruby-3-4-0-released/" }
  },
  {
    id: "core-004",
    category: "ruby-core",
    q: "Ruby 3.3 で parse.y のビルドに使う Bison の代替として採用された、Ruby 製の LALR パーサジェネレータは？",
    options: ["Racc", "Lrama", "Treetop", "Parsec"],
    answer: 1,
    explanation: "<b>Lrama</b> は ydah さん（2026 にも登壇）らを中心に開発された Ruby 製 LALR パーサジェネレータで、Ruby 3.3 から Bison を置き換える形で採用されました。",
    reference: { label: "Lrama GitHub", url: "https://github.com/ruby/lrama" }
  },
  {
    id: "core-005",
    category: "ruby-core",
    q: "Ruby 3.4 で追加された、仮引数名を書かずにブロックパラメータを参照できるキーワードは？",
    options: ["_", "it", "this", "$1"],
    answer: 1,
    explanation: "Ruby 3.4 で <code>it</code> が追加されました。<code>[1,2,3].map { it * 2 }</code> のように、単一引数のブロックを短く書けます。Kotlin などにある <code>it</code> と似た発想です。",
    reference: { label: "Ruby 3.4.0 Released", url: "https://www.ruby-lang.org/en/news/2024/12/25/ruby-3-4-0-released/" }
  },
  {
    id: "core-006",
    category: "ruby-core",
    q: "ZJIT と YJIT のコンパイル戦略の違いを最もよく表しているのは？",
    options: [
      "ZJIT はインタプリタ、YJIT は AOT コンパイラ",
      "ZJIT はメソッドベース JIT、YJIT は Lazy Basic Block Versioning",
      "ZJIT は Rust、YJIT は C で書かれている",
      "ZJIT は Ractor でしか使えない"
    ],
    answer: 1,
    explanation: "<b>ZJIT はメソッド単位で最適化する method-based JIT</b>、YJIT は <b>Lazy Basic Block Versioning (LBBV)</b> でベーシックブロック単位に型ごとにコードを生成します。ZJIT は YJIT より広いスコープで最適化できるのが利点です。",
    reference: { label: "ZJIT: Building a Next Generation Ruby JIT", url: "https://www.rubyevents.org/talks/zjit-building-a-next-generation-ruby-jit" }
  },
  {
    id: "core-007",
    category: "ruby-core",
    q: "<code>Fiber.scheduler</code> が導入されたRubyバージョンは？",
    options: ["2.7", "3.0", "3.1", "3.2"],
    answer: 1,
    explanation: "Ruby <b>3.0</b> で Fiber Scheduler が導入されました。I/O のブロッキングを自動的に Fiber 切り替えに置き換えることで、非同期 I/O をシームレスに書けるようになりました。Falcon や async gem の基礎です。",
    reference: { label: "Fiber::Scheduler docs", url: "https://docs.ruby-lang.org/en/3.0/Fiber/SchedulerInterface.html" }
  },
  {
    id: "core-008",
    category: "ruby-core",
    q: "Ruby 4.0 で正式採用された、プロセス内でコード単位を隔離するための新機能の名称は？",
    options: ["Ruby Box", "Namespace", "Ractor", "Module#refine"],
    answer: 1,
    explanation: "Ruby 4.0 の目玉の一つが <b>Namespace</b>（一部記事では Ruby Box とも呼ばれる）で、ライブラリ間の名前衝突やモンキーパッチ汚染を隔離します。Tagomoris さんが設計を主導し、2026 Day1 基調「The Journey of Box Building」でまさにこのテーマが扱われます。",
    reference: { label: "Ruby 4.0.0 Released", url: "https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/" }
  },
  {
    id: "core-009",
    category: "ruby-core",
    q: "Ruby 3.2 で導入された「Object Shapes」の主な目的は？",
    options: [
      "GC のマーク処理を並列化する",
      "インスタンス変数アクセスの高速化",
      "Ractor 間の通信を高速化する",
      "YJIT のコード生成を簡素化する"
    ],
    answer: 1,
    explanation: "Object Shapes は Chris Seaton らが TruffleRuby 由来で CRuby に持ち込んだ仕組みで、<b>インスタンス変数の配置をオブジェクト間で共有</b>することにより、IV アクセスをインラインキャッシュで高速化します。",
    reference: { label: "Object Shapes in Ruby 3.2", url: "https://shopify.engineering/object-shapes" }
  },
  {
    id: "core-010",
    category: "ruby-core",
    q: "RJIT（Ruby 3.3 に入った JIT）の特徴として正しいのは？",
    options: [
      "C で書かれた高性能 JIT",
      "Rust で書かれた研究用 JIT",
      "Pure Ruby で書かれたメンテナビリティ重視の JIT",
      "Java バイトコード互換の JIT"
    ],
    answer: 2,
    explanation: "RJIT は k0kubun さんが開発し、Ruby 3.3 で MJIT を置き換える形で入った <b>Pure Ruby で書かれた JIT</b> です。本番用途ではなく、JIT 開発の実験プラットフォームとして位置付けられています。",
    reference: { label: "Ruby 3.3.0 Released", url: "https://www.ruby-lang.org/en/news/2023/12/25/ruby-3-3-0-released/" }
  },
  {
    id: "core-011",
    category: "ruby-core",
    q: "Matz が Ruby を最初にリリースしたのは何年？",
    options: ["1993年", "1995年", "1997年", "2000年"],
    answer: 1,
    explanation: "Ruby は <b>1995年 12月 21日</b>（Ruby 0.95）に公開されました。2025 年で 30 周年を迎えています。",
    reference: { label: "About Ruby", url: "https://www.ruby-lang.org/en/about/" }
  },
  {
    id: "core-012",
    category: "ruby-core",
    q: "Ruby の Variable Width Allocation (VWA) は何のためにある？",
    options: [
      "Ractor 間通信のバッファサイズを可変にする",
      "オブジェクトを 40byte スロット以外の大きさでもヒープに配置可能にする",
      "YJIT の生成コード領域を可変にする",
      "Fiber スタックのサイズを可変にする"
    ],
    answer: 1,
    explanation: "VWA は Peter Zhu と Matt Valentine-House が進めた GC 機能で、<b>従来 40byte 固定だったオブジェクトスロットを可変サイズ化</b>し、String などで余計な間接参照を減らせます。Ruby 3.2 以降で順次適用されています。",
    reference: { label: "Ruby 3.2 Release Notes", url: "https://www.ruby-lang.org/en/news/2022/12/25/ruby-3-2-0-released/" }
  },
  {
    id: "core-013",
    category: "ruby-core",
    q: "Ruby 4.0 で ZJIT を有効化する方法として正しいのは？",
    options: [
      "<code>--zjit</code> または <code>RubyVM::ZJIT.enable</code>",
      "<code>--yjit=zjit</code>",
      "環境変数 <code>RUBY_ZJIT=1</code>",
      "gem をインストールして require する"
    ],
    answer: 0,
    explanation: "Ruby 4.0 では <code>--zjit</code> オプション、または <code>RubyVM::ZJIT.enable</code> で有効化します。4.0 時点ではインタプリタより速いが YJIT には届かず、<b>production ready は Ruby 4.1</b> を目指しています（2026 で k0kubun さんがまさに「Lightning-Fast Method Calls with Ruby 4.1 ZJIT」を発表）。",
    reference: { label: "Ruby 4.0.0 Released", url: "https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/" }
  },
  {
    id: "core-014",
    category: "ruby-core",
    q: "<code>Data.define</code> が導入されたのは何バージョン？",
    options: ["3.0", "3.1", "3.2", "3.3"],
    answer: 2,
    explanation: "イミュータブルな値オブジェクトを簡単に作れる <code>Data.define</code> は Ruby <b>3.2</b> で導入されました。Struct の不変版に近い位置付けです。",
    reference: { label: "Data class docs", url: "https://docs.ruby-lang.org/en/3.2/Data.html" }
  },
  {
    id: "core-015",
    category: "ruby-core",
    q: "Ruby 3.4 で導入された modular GC の目的として正しいのは？",
    options: [
      "GC アルゴリズムを外部 .so として動的にロード可能にする",
      "GC を完全に無効化できるようにする",
      "Ractor ごとに独立した GC を強制する",
      "世代別 GC を廃止する"
    ],
    answer: 0,
    explanation: "Modular GC は <b>GC 実装を外部ライブラリとして差し替えられる</b>機能です。MMTk のような研究系 GC を Ruby で試せる土台になり、2026 では Peter Zhu の「Building the Next-Generation GC in Ruby」や John Hawthorn の「A Write Barrier Validating GC」で話されます。",
    reference: { label: "Ruby 3.4.0 Released", url: "https://www.ruby-lang.org/en/news/2024/12/25/ruby-3-4-0-released/" }
  },

  // ==================================================
  // CATEGORY: 今年の発表者・セッション (2026)
  // ==================================================
  {
    id: "sess-001",
    category: "sessions-2026",
    q: "RubyKaigi 2026 Day1 の Opening Keynote のタイトルは？",
    options: [
      "Twenty Years of JRuby",
      "The Journey of Box Building",
      "Matz Keynote",
      "Ruby Releases Ruby"
    ],
    answer: 1,
    explanation: "Day1 (4/22) の Opening Keynote は Tagomoris さん（田籠聡）の「<b>The Journey of Box Building</b>」です。Ruby 4.0 の Namespace（Box）機能がテーマ。",
    reference: { label: "Day1 Schedule", url: "https://rubykaigi.org/2026/schedule/day1/" }
  },
  {
    id: "sess-002",
    category: "sessions-2026",
    q: "Day2 Keynote「Twenty Years of JRuby」を話す JRuby のリード開発者は？",
    options: ["Charles Nutter", "Benoit Daloze", "Max Bernstein", "Aaron Patterson"],
    answer: 0,
    explanation: "<b>Charles Nutter</b> (headius) さんが JRuby の 20 年を振り返ります。Day2 (4/23) 9:30 開始。",
    reference: { label: "Day2 Schedule", url: "https://rubykaigi.org/2026/schedule/day2" }
  },
  {
    id: "sess-003",
    category: "sessions-2026",
    q: "k0kubun（Takashi Kokubun）さんが 2026 で話す JIT のバージョンは？",
    options: ["Ruby 3.3 RJIT", "Ruby 3.4 YJIT", "Ruby 4.0 YJIT", "Ruby 4.1 ZJIT"],
    answer: 3,
    explanation: "k0kubun さんは「Lightning-Fast Method Calls with <b>Ruby 4.1 ZJIT</b>」を発表予定。ZJIT は Ruby 4.1 で production ready を目指しています（Day3 16:00）。",
    reference: { label: "k0kubun session", url: "https://rubykaigi.org/2026/presentations/k0kubun.html" }
  },
  {
    id: "sess-004",
    category: "sessions-2026",
    q: "Peter Zhu さんが 2026 で話すトピックは？",
    options: [
      "Building the Next-Generation Garbage Collector in Ruby",
      "A Faster FFI",
      "Implementing Core Set",
      "Making Hash Parallel, Thread-Safe and Fast!"
    ],
    answer: 0,
    explanation: "Peter Zhu さんは Shopify の GC 研究者で、Ruby の世代別・コンパクション・VWA などに貢献。2026 では「<b>Building the Next-Generation GC in Ruby</b>」を発表。",
    reference: { label: "peterzhu2118 session", url: "https://rubykaigi.org/2026/presentations/peterzhu2118.html" }
  },
  {
    id: "sess-005",
    category: "sessions-2026",
    q: "Aaron Patterson (tenderlove) さんが 2026 で話すテーマは？",
    options: [
      "A Faster FFI",
      "Implementing Core Set",
      "Ruby's Scheduler: Improving I/O",
      "Keeping Ruby Running on Cygwin"
    ],
    answer: 0,
    explanation: "Aaron Patterson さんは「<b>A Faster FFI</b>」を発表予定。Ruby から C ライブラリを呼び出す FFI の高速化がテーマ（Day2 14:10）。",
    reference: { label: "tenderlove session", url: "https://rubykaigi.org/2026/presentations/tenderlove.html" }
  },
  {
    id: "sess-006",
    category: "sessions-2026",
    q: "「Surviving Black Friday: 100 billion requests with Falcon!」で登場する Falcon とは？",
    options: [
      "Ractor ベースのバッチ処理基盤",
      "Fiber Scheduler を活用した非同期 Web サーバ",
      "PicoRuby 用の MQTT クライアント",
      "RBS の型チェッカ"
    ],
    answer: 1,
    explanation: "<b>Falcon</b> は Samuel Williams (ioquatix) さん主導の <b>Fiber ベース非同期 Web サーバ</b>。async gem を土台に構築されており、高並行 I/O に強いです。Shopify の Black Friday 規模で使われた事例が語られます。",
    reference: { label: "ioquatix session", url: "https://rubykaigi.org/2026/presentations/ioquatix.html" }
  },
  {
    id: "sess-007",
    category: "sessions-2026",
    q: "Day3 の最終基調（クロージング）を担当するのは？",
    options: [
      "Matz (Yukihiro Matsumoto)",
      "Hiroshi Shibata",
      "Koichi Sasada",
      "Satoshi Tagomori"
    ],
    answer: 0,
    explanation: "例年通り、Day3 (4/24) 16:40 からの Matz Keynote で締めくくります。",
    reference: { label: "Day3 Schedule", url: "https://rubykaigi.org/2026/schedule/day3" }
  },
  {
    id: "sess-008",
    category: "sessions-2026",
    q: "hsbt (Hiroshi Shibata) さんの「Ruby Releases Ruby」のテーマとして最も近いのは？",
    options: [
      "Ruby のリリースマネジメントと自動化",
      "Ruby を使った CD/CI パイプライン構築",
      "Ruby on Rails のリリース戦略",
      "gem のセキュリティ"
    ],
    answer: 0,
    explanation: "hsbt さんは長年 Ruby の <b>リリースマネージャ</b>を担ってきた方。Ruby 自体のリリースプロセスを Ruby で自動化していく話だと想定されます（Day3 14:10）。",
    reference: { label: "hsbt session", url: "https://rubykaigi.org/2026/presentations/hsbt.html" }
  },
  {
    id: "sess-009",
    category: "sessions-2026",
    q: "2026 で Koichi ITO (koic) さんが発表する RuboCop 関連のテーマは？",
    options: [
      "Exploring RuboCop with MCP",
      "RuboCop: Modularity and AST Insights",
      "Blazing-fast Code Indexing for Smarter Ruby Tools",
      "HTML-Aware ERB: The Path to Reactive Rendering"
    ],
    answer: 0,
    explanation: "koic さんは 2026 で「<b>Exploring RuboCop with MCP</b>」を発表。LLM との接続で話題の Model Context Protocol (MCP) を RuboCop に組み合わせる話です（Day1 13:30）。なお選択肢 2 は 2025 のタイトル。",
    reference: { label: "koic session", url: "https://rubykaigi.org/2026/presentations/koic.html" }
  },
  {
    id: "sess-010",
    category: "sessions-2026",
    q: "RubyKaigi 2026 の開催地は？",
    options: ["松本 (Matsumoto)", "沖縄 (Okinawa)", "函館 (Hakodate)", "福岡 (Fukuoka)"],
    answer: 2,
    explanation: "RubyKaigi 2026 は <b>北海道函館市の函館市民会館</b>で開催されます（4/22〜4/24）。",
    reference: { label: "Venue", url: "https://rubykaigi.org/2026/venue/" }
  },
  {
    id: "sess-011",
    category: "sessions-2026",
    q: "「Million-Agent Ruby: Ractor-Local GC in the Age of AI」で提案されているアプローチは？",
    options: [
      "すべての Ractor で global GC を共有する",
      "Ractor ごとに独立した GC を持たせて AI エージェント並行実行に耐える",
      "AI 推論用に GC を完全に無効化する",
      "Ractor を廃止して Thread に戻す"
    ],
    answer: 1,
    explanation: "AI エージェントの大量並行実行を念頭に、<b>Ractor-local な GC</b>で並列性を活かす話。Justin Bowen さんによる Day1 セッション。",
    reference: { label: "TonsOfFun session", url: "https://rubykaigi.org/2026/presentations/TonsOfFun.html" }
  },
  {
    id: "sess-012",
    category: "sessions-2026",
    q: "「Funicular: A Browser App Framework Powered by PicoRuby.WASM」を発表する、PicoRuby 第一人者は？",
    options: ["Hitoshi HASUMI", "Yuji Yokoo", "Katsuhiko Kageyama", "Uchio KONDO"],
    answer: 0,
    explanation: "<b>Hitoshi HASUMI (hasumikin)</b> さんは PicoRuby の生みの親で、PicoRuby.WASM をブラウザに持ち込む Funicular フレームワークを発表します。",
    reference: { label: "hasumikin session", url: "https://rubykaigi.org/2026/presentations/hasumikin.html" }
  },
  {
    id: "sess-013",
    category: "sessions-2026",
    q: "Yusuke Endoh (mame) さんが 2026 で話す TypeProf のテーマは？",
    options: [
      "Practical TypeProf: Lessons from Analyzing Optcarrot",
      "TypeProf for IDE: リアルタイム型推論",
      "TypeProf vs Steep: 型チェッカ比較",
      "TypeProf 2026: AI 統合"
    ],
    answer: 0,
    explanation: "mame さんはベンチマーク定番の <b>Optcarrot</b>（NES エミュレータ）を TypeProf で解析する実践談。TypeProf を現実のコードに使うコツが聞けます。",
    reference: { label: "mametter session", url: "https://rubykaigi.org/2026/presentations/mametter.html" }
  },
  {
    id: "sess-014",
    category: "sessions-2026",
    q: "「Making the RBS Parser Faster」を発表する Steep / RBS の主要開発者は？",
    options: ["Soutaro Matsumoto", "Yusuke Endoh", "Koichi Sasada", "Hiroshi Shibata"],
    answer: 0,
    explanation: "<b>Soutaro Matsumoto</b> さんは Steep と RBS の中心開発者。RBS パーサを高速化した取り組みを発表します（Day2 14:10）。",
    reference: { label: "soutaro session", url: "https://rubykaigi.org/2026/presentations/soutaro.html" }
  },
  {
    id: "sess-015",
    category: "sessions-2026",
    q: "「Ruby on NES - how to make the smallest ruby ever」を発表するのは？",
    options: ["Yutaka HARA (yhara)", "Yuji Yokoo", "Hitoshi HASUMI", "Uchio KONDO"],
    answer: 0,
    explanation: "<b>yhara</b> さんは Shiika の作者としても有名。NES（ファミコン）上で動く極小 Ruby 処理系の話です（Day3 14:10 Sub Arena）。",
    reference: { label: "yhara session", url: "https://rubykaigi.org/2026/presentations/yhara.html" }
  },
  {
    id: "sess-016",
    category: "sessions-2026",
    q: "「A Write Barrier Validating GC for Ruby」を発表するのは？",
    options: ["John Hawthorn", "Peter Zhu", "Benoit Daloze", "Matz"],
    answer: 0,
    explanation: "<b>John Hawthorn (jhawthorn)</b> さんによる、世代別 GC の肝である Write Barrier が正しく張られているか検証する仕組みの話。Day3 11:30。",
    reference: { label: "jhawthorn session", url: "https://rubykaigi.org/2026/presentations/jhawthorn.html" }
  },

  // ==================================================
  // CATEGORY: 過去RubyKaigiの重要トピック
  // ==================================================
  {
    id: "past-001",
    category: "past-topics",
    q: "YJIT を開発している中心企業は？",
    options: ["Shopify", "GitHub", "Stripe", "Cookpad"],
    answer: 0,
    explanation: "YJIT は <b>Shopify</b> の Maxime Chevalier-Boisvert さんらが開発。ZJIT も同社が主導しています。",
    reference: { label: "YJIT - Ruby website", url: "https://www.ruby-lang.org/en/news/2021/12/25/ruby-3-1-0-released/" }
  },
  {
    id: "past-002",
    category: "past-topics",
    q: "Prism パーサを主導して作ったのは？",
    options: ["Shopify（Kevin Newton）", "Stripe", "GitHub", "Square"],
    answer: 0,
    explanation: "<b>Prism</b> は Shopify の <b>Kevin Newton</b> さんを中心に開発されている、エラー寛容でポータブルな Ruby パーサ。Ruby 3.3 でバンドル、3.4 でデフォルト化。",
    reference: { label: "Prism GitHub", url: "https://github.com/ruby/prism" }
  },
  {
    id: "past-003",
    category: "past-topics",
    q: "TypeProf の開発者として最も知られているのは？",
    options: ["mame (Yusuke Endoh)", "soutaro", "ko1", "shugo"],
    answer: 0,
    explanation: "<b>TypeProf</b> は <b>mame (Yusuke Endoh)</b> さんが主に開発。型注釈の少ない Ruby コードから型を推論する解析器です。",
    reference: { label: "TypeProf GitHub", url: "https://github.com/ruby/typeprof" }
  },
  {
    id: "past-004",
    category: "past-topics",
    q: "RBS が Ruby 本体に標準添付されるようになったのはどのバージョンから？",
    options: ["2.7", "3.0", "3.1", "3.2"],
    answer: 1,
    explanation: "RBS は Ruby <b>3.0</b> から標準添付されました。Steep や TypeProf などの型ツールが共通に利用する型記述フォーマットです。",
    reference: { label: "Ruby 3.0.0 Released", url: "https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/" }
  },
  {
    id: "past-005",
    category: "past-topics",
    q: "ruby.wasm プロジェクトを主導しているのは？",
    options: [
      "kateinoigakukun (Yuta Saito)",
      "hasumikin",
      "matz",
      "ko1"
    ],
    answer: 0,
    explanation: "<b>ruby.wasm</b> は <b>kateinoigakukun (齋藤 優太)</b> さんが中心。CRuby を WASI/WebAssembly 上で動かすプロジェクトで、Ruby 3.2 以降公式にサポートされています。",
    reference: { label: "ruby.wasm", url: "https://github.com/ruby/ruby.wasm" }
  },
  {
    id: "past-006",
    category: "past-topics",
    q: "PicoRuby の主な用途は？",
    options: [
      "マイコン・組み込み機器で動かす軽量 Ruby",
      "ブラウザで動かす WASM Ruby",
      "AI モデル学習用の DSL",
      "ゲーム開発向けの Ruby ランタイム"
    ],
    answer: 0,
    explanation: "<b>PicoRuby</b> は hasumikin さんが開発する、<b>マイコン（RP2040 など）向けの超軽量 Ruby 処理系</b>。mruby をさらに小さくしたイメージで、メカニカルキーボードの PRK Firmware 等で使われます。",
    reference: { label: "PicoRuby GitHub", url: "https://github.com/picoruby/picoruby" }
  },
  {
    id: "past-007",
    category: "past-topics",
    q: "ko1 (Koichi Sasada) さんが主に設計・実装した、Ruby 1.9 から搭載されたバイトコード VM の名称は？",
    options: ["YARV", "MRuby", "Rubinius", "TruffleRuby"],
    answer: 0,
    explanation: "<b>YARV (Yet Another Ruby VM)</b> は ko1 さんによる設計で、Ruby 1.9 以降 CRuby のスタックマシン VM として使われています。",
    reference: { label: "YARV", url: "https://docs.ruby-lang.org/en/3.3/rubyvm.html" }
  },
  {
    id: "past-008",
    category: "past-topics",
    q: "過去の RubyKaigi で Matz が掲げた「Ruby 3x3」目標とは？",
    options: [
      "Ruby 3 を Ruby 2 の 3 倍速にする",
      "Ruby を 3 年で 3 倍の開発者に広める",
      "Ruby 3 で 3 つの並列機能を入れる",
      "3 年で Ruby on Rails の 3 倍機能を作る"
    ],
    answer: 0,
    explanation: "「<b>Ruby 3x3</b>」は Matz が 2015 年頃に掲げた、<b>Ruby 3 を Ruby 2 の 3 倍速く</b>するという性能目標。YJIT / MJIT / 最適化努力に繋がりました。",
    reference: { label: "Ruby 3x3 (rubyreferences)", url: "https://rubyreferences.github.io/rubychanges/3.0.html" }
  },
  {
    id: "past-009",
    category: "past-topics",
    q: "Ruby の GVL（Global VM Lock）の以前の呼称は？",
    options: ["GIL (Global Interpreter Lock)", "GEL", "VLock", "MLock"],
    answer: 0,
    explanation: "Ruby 2.x 以前では GIL (Global Interpreter Lock) と呼ばれていましたが、現在の正式名は <b>GVL (Global VM Lock)</b> です。CRuby では 1 プロセス内の Thread はこの GVL により同時実行されません（Ractor で回避）。",
    reference: { label: "GVL - ruby-dev ML", url: "https://bugs.ruby-lang.org/" }
  },
  {
    id: "past-010",
    category: "past-topics",
    q: "「MaNy スレッド」プロジェクトで目指されていたことは？",
    options: [
      "1 プロセスで大量 (N:M) のスレッドを M:N マッピングで効率化",
      "Rails の並列処理を標準化",
      "Fiber を廃止して Thread に一本化",
      "Ractor を WASM で動かす"
    ],
    answer: 0,
    explanation: "<b>MaNy</b> は ko1 さん主導の <b>M:N スレッドスケジューラ</b>プロジェクト。Ruby 3.3 で Thread と Fiber 向けに実験実装が入りました（<code>RUBY_MN_THREADS=1</code>）。",
    reference: { label: "Ruby 3.3.0 Released", url: "https://www.ruby-lang.org/en/news/2023/12/25/ruby-3-3-0-released/" }
  },
  {
    id: "past-011",
    category: "past-topics",
    q: "RubyKaigi で発表された <b>Optcarrot</b> とは？",
    options: [
      "Ruby 処理系ベンチマーク用の NES エミュレータ",
      "Ruby の GC ビジュアライザ",
      "Ruby 用のグラフィックライブラリ",
      "Ruby 用のパッケージマネージャ"
    ],
    answer: 0,
    explanation: "<b>Optcarrot</b> は mame さんが作った <b>Pure Ruby で書かれた NES (ファミコン) エミュレータ</b>で、Ruby 3x3 のベンチマーク指標として有名です。",
    reference: { label: "Optcarrot GitHub", url: "https://github.com/mame/optcarrot" }
  },
  {
    id: "past-012",
    category: "past-topics",
    q: "RubyKaigi は過去に松本・福岡・つくば・長野などを巡回してきたが、2025 の開催地は？",
    options: ["松本", "愛媛県松山市", "福岡", "沖縄"],
    answer: 1,
    explanation: "RubyKaigi 2025 は <b>愛媛県・松山市の愛媛県県民文化会館</b>で開催されました（4/16-18）。会期前後にしまなみ海道を楽しんだ参加者の体験記も多数。",
    reference: { label: "RubyKaigi 2025 Recap", url: "https://www.tokyodev.com/articles/rubykaigi-2025-recap" }
  },

  // ==================================================
  // CATEGORY: Ruby周辺エコシステム
  // ==================================================
  {
    id: "eco-001",
    category: "ecosystem",
    q: "RuboCop の主要メンテナーとして 2026 も登壇するのは？",
    options: ["Koichi ITO (koic)", "Aaron Patterson", "Jeremy Evans", "Benoit Daloze"],
    answer: 0,
    explanation: "<b>koic</b> さんは RuboCop コア＋関連 gem の主要メンテナーとして長年活動。2026 は MCP 連携の話をします。",
    reference: { label: "RuboCop", url: "https://github.com/rubocop/rubocop" }
  },
  {
    id: "eco-002",
    category: "ecosystem",
    q: "Sorbet を開発・公開した企業は？",
    options: ["Stripe", "Shopify", "GitHub", "Square"],
    answer: 0,
    explanation: "<b>Sorbet</b> は <b>Stripe</b> が開発した Ruby の段階的型チェッカ。2019 年に OSS 化。RBS とは別系統ですが、現在は相互変換ツールなどが整備されています。",
    reference: { label: "Sorbet", url: "https://sorbet.org/" }
  },
  {
    id: "eco-003",
    category: "ecosystem",
    q: "Steep の開発者は？",
    options: ["Soutaro Matsumoto", "Yusuke Endoh", "Koichi Sasada", "tenderlove"],
    answer: 0,
    explanation: "<b>Steep</b> は RBS を使って型チェックをする gem で、<b>Soutaro Matsumoto</b> さんが開発しています。",
    reference: { label: "Steep", url: "https://github.com/soutaro/steep" }
  },
  {
    id: "eco-004",
    category: "ecosystem",
    q: "<code>async</code> / <code>falcon</code> gem の設計で中心的な役割を果たすのは？",
    options: ["Fiber.scheduler による協調的 I/O", "Thread pool", "Ractor pool", "Process fork"],
    answer: 0,
    explanation: "async / falcon は <b>Fiber.scheduler</b> を活用して、ブロッキング I/O を協調的に切り替える設計です。ioquatix (Samuel Williams) さんが主導。",
    reference: { label: "async gem", url: "https://github.com/socketry/async" }
  },
  {
    id: "eco-005",
    category: "ecosystem",
    q: "Rack が定義するのは？",
    options: [
      "Ruby Web サーバと Web アプリケーション間のインターフェース仕様",
      "Ruby の ORM 標準",
      "Ruby の非同期実行仕様",
      "Ruby 公式のテスト仕様"
    ],
    answer: 0,
    explanation: "<b>Rack</b> は <b>Web サーバと Web アプリケーション間の共通インターフェース</b>仕様。Rails, Sinatra, Hanami など多くのフレームワークが準拠しています。",
    reference: { label: "Rack", url: "https://github.com/rack/rack" }
  },
  {
    id: "eco-006",
    category: "ecosystem",
    q: "RBS ファイルの拡張子は？",
    options: [".rbs", ".rbi", ".rb.types", ".ts"],
    answer: 0,
    explanation: "RBS は <b>.rbs</b> 拡張子を使います。Sorbet は <code>.rbi</code> で別物です。",
    reference: { label: "RBS", url: "https://github.com/ruby/rbs" }
  },
  {
    id: "eco-007",
    category: "ecosystem",
    q: "MRI とは何の略？",
    options: [
      "Matz's Ruby Interpreter (= CRuby)",
      "Main Ruby Implementation",
      "Modular Ruby Interpreter",
      "Minimum Ruby Interpreter"
    ],
    answer: 0,
    explanation: "MRI は <b>Matz's Ruby Interpreter</b> の略で、現在は <b>CRuby</b> と呼ばれることが多いです。JRuby・TruffleRuby・mruby は別実装。",
    reference: { label: "Ruby implementations", url: "https://www.ruby-lang.org/en/documentation/" }
  },
  {
    id: "eco-008",
    category: "ecosystem",
    q: "Bundler の主な目的として正しいのは？",
    options: [
      "gem の依存関係解決とバージョンロック",
      "Ruby 処理系の切り替え",
      "Ruby コードの難読化",
      "Rails プロジェクトの雛形生成"
    ],
    answer: 0,
    explanation: "<b>Bundler</b> は Gemfile/Gemfile.lock で依存を宣言・固定するツール。2026 では「Faster Bundler, Happier Developers」（Edouard Chin）もあります。",
    reference: { label: "Bundler", url: "https://bundler.io/" }
  },
  {
    id: "eco-009",
    category: "ecosystem",
    q: "Shopify が開発する、Ruby/Rails 向けの LSP は？",
    options: ["ruby-lsp", "solargraph", "sorbet-lsp", "steep-lsp"],
    answer: 0,
    explanation: "<b>ruby-lsp</b> は Shopify が開発する LSP 実装。Prism や RBS、index（2026 で Alexandre Terrasa さんが発表）等の技術を組み合わせて IDE 体験を改善しています。",
    reference: { label: "ruby-lsp", url: "https://github.com/Shopify/ruby-lsp" }
  },
  {
    id: "eco-010",
    category: "ecosystem",
    q: "Ruby 標準のテストフレームワークは？",
    options: ["Minitest", "RSpec", "Cucumber", "Test::Unit（旧来）と Minitest（標準）"],
    answer: 3,
    explanation: "正確には、<b>Minitest が標準添付</b>で、Test::Unit 互換 API も Minitest が提供しています。RSpec は外部 gem。",
    reference: { label: "Minitest", url: "https://github.com/minitest/minitest" }
  },
  {
    id: "eco-011",
    category: "ecosystem",
    q: "Rails の最新メジャーバージョン系列は？",
    options: ["Rails 6", "Rails 7", "Rails 8", "Rails 9"],
    answer: 2,
    explanation: "2026 年時点で <b>Rails 8 系列</b>が最新です（8.0 は 2024 末にリリース、以後の minor が続く）。",
    reference: { label: "Rails", url: "https://rubyonrails.org/" }
  },
  {
    id: "eco-012",
    category: "ecosystem",
    q: "mruby と PicoRuby の関係として正しいのは？",
    options: [
      "PicoRuby は mruby をさらに小型化・マイコン特化した派生処理系",
      "PicoRuby は mruby の後継で完全互換",
      "PicoRuby は mruby と無関係な独立実装",
      "mruby が PicoRuby をラップしている"
    ],
    answer: 0,
    explanation: "<b>PicoRuby は mruby をベースに、マイコン上で実用的に動くよう軽量化された処理系</b>。Ruby コードを mruby バイトコードにコンパイルしてマイコンで実行する構成が一般的です。",
    reference: { label: "mruby", url: "https://mruby.org/" }
  },

  // ==================================================
  // CATEGORY: RubyKaigi頻出英語（技術用語）
  // ==================================================
  {
    id: "vocab-001",
    category: "vocab-en",
    q: "<b>AST</b>（Abstract Syntax Tree）が表すものは？",
    options: [
      "ソースコードを木構造で表現した中間表現",
      "VM が実行するバイトコード列",
      "トークン化した後の線形な単語列",
      "コンパイラが生成するアセンブリの抽象化"
    ],
    answer: 0,
    explanation: "<b>AST</b> はソースコードを構文の木構造として表した中間表現です。Ruby では <b>Prism</b> や <code>RubyVM::AbstractSyntaxTree</code> で取得できます。バイトコードや機械語よりも「構文に忠実」なのが特徴。",
    reference: { label: "RubyVM::AbstractSyntaxTree", url: "https://docs.ruby-lang.org/en/master/RubyVM/AbstractSyntaxTree.html" }
  },
  {
    id: "vocab-002",
    category: "vocab-en",
    q: "<b>Lexer</b>（tokenizer）が担うのはどの工程？",
    options: [
      "ソースコードの文字列をトークン列に分割する",
      "トークン列から構文木を組み立てる",
      "構文木を機械語に翻訳する",
      "機械語を実行時に最適化する"
    ],
    answer: 0,
    explanation: "<b>Lexer</b>（字句解析器 / tokenizer）は、文字列を意味のある最小単位（トークン）に切り出す工程を担います。木構造に組み立てるのは Parser の仕事。"
  },
  {
    id: "vocab-003",
    category: "vocab-en",
    q: "Parser と Lexer（tokenizer）の関係として正しいのは？",
    options: [
      "Lexer がトークンを切り出し、Parser がそのトークン列を構文木に組み立てる",
      "Parser がトークンを切り出し、Lexer が構文木を組み立てる",
      "両者は同義で、呼び方の違いだけ",
      "Parser はランタイムで動き、Lexer はコンパイル時のみ動く"
    ],
    answer: 0,
    explanation: "一般的なパイプラインは <b>文字列 → (Lexer) → トークン列 → (Parser) → AST</b>。Ruby では Prism のようにパーサが lexer も内包する設計もあります。"
  },
  {
    id: "vocab-004",
    category: "vocab-en",
    q: "<b>Bytecode</b>（バイトコード）とは？",
    options: [
      "仮想機械（VM）が解釈・実行することを前提にした、ソースより低水準の中間表現",
      "CPU が直接実行できる機械語そのもの",
      "ソースコードを gzip 圧縮したバイト列",
      "文字コード UTF-8 のエイリアス"
    ],
    answer: 0,
    explanation: "<b>Bytecode</b> は VM 実行を前提とする中間コード。Ruby では <b>YARV</b> が命令列（iseq）を実行します。機械語ではないため CPU は直接実行できません。",
    reference: { label: "RubyVM::InstructionSequence", url: "https://docs.ruby-lang.org/en/master/RubyVM/InstructionSequence.html" }
  },
  {
    id: "vocab-005",
    category: "vocab-en",
    q: "コンパイラ文脈での <b>IR</b>（Intermediate Representation）は何を指す？",
    options: [
      "最適化や変換を行いやすくするための、ソースと機械語の間の中間表現",
      "例外処理で使う Internal Raise の略",
      "Ruby 専用の命令スケジューラ",
      "ガベージコレクタのリング構造"
    ],
    answer: 0,
    explanation: "<b>IR</b> はコンパイラや JIT が扱いやすい形の中間表現の総称。AST もバイトコードも IR の一種で、Ruby の JIT（YJIT/ZJIT）も内部で独自の IR を使います。"
  },
  {
    id: "vocab-006",
    category: "vocab-en",
    q: "<b>AOT</b> コンパイルと <b>JIT</b> コンパイルの違いとして正しいのは？",
    options: [
      "AOT は実行前にまとめてコンパイル、JIT は実行中に必要な部分を動的にコンパイルする",
      "AOT は実行中のみ、JIT は実行前のみ動作する",
      "AOT は動的言語専用、JIT は静的言語専用",
      "両者は完全に同義で、言い方の違い"
    ],
    answer: 0,
    explanation: "<b>AOT (Ahead-Of-Time)</b> は事前コンパイル、<b>JIT (Just-In-Time)</b> は実行時コンパイル。Ruby は MRI 実行 + JIT（YJIT/ZJIT）の組み合わせで動的に最適化します。"
  },
  {
    id: "vocab-007",
    category: "vocab-en",
    q: "<b>JIT</b> の正式名称は？",
    options: [
      "Just-In-Time",
      "Join-In-Thread",
      "JavaScript Intermediate Transform",
      "Jump If True"
    ],
    answer: 0,
    explanation: "<b>JIT = Just-In-Time</b>。「必要になった瞬間にコンパイルする」という意味で、Ruby の YJIT / ZJIT / 旧 MJIT もこの方式です。"
  },
  {
    id: "vocab-008",
    category: "vocab-en",
    q: "コンパイラ最適化の <b>inlining</b>（インライン化）の主な目的は？",
    options: [
      "関数呼び出しを展開して呼び出しコストを削減し、さらなる最適化の余地を作る",
      "関数本体を暗号化してリバースエンジニアリングを防ぐ",
      "関数を別スレッドに強制的に移す",
      "関数の戻り値を必ず nil にする"
    ],
    answer: 0,
    explanation: "<b>Inlining</b> は呼び出し先の本体を呼び出し元に埋め込み、プロローグ/エピローグの負担を消します。レジスタ割り付けや定数畳み込みなど後続最適化の起点にもなります。"
  },
  {
    id: "vocab-009",
    category: "vocab-en",
    q: "<b>Constant folding</b>（定数畳み込み）とは？",
    options: [
      "コンパイル時に評価できる定数式を、計算済みの値に置き換える最適化",
      "すべての定数を実行時に動的解決する機能",
      "定数を暗号化して文字列として保持するテクニック",
      "定数プールを GC 対象にする処理"
    ],
    answer: 0,
    explanation: "<code>2 * 60 * 60</code> を <code>7200</code> に置き換えるような最適化。無駄な実行時計算を省き、他の最適化と組み合わさって効果を増幅します。"
  },
  {
    id: "vocab-010",
    category: "vocab-en",
    q: "<b>Escape analysis</b>（エスケープ解析）が可能にする代表的な最適化は？",
    options: [
      "関数外へ漏れないオブジェクトをヒープではなくスタックに置く（スタック割り付け）",
      "関数外へ漏れるオブジェクトを暗号化する",
      "例外が発生しそうな行をスキップする",
      "すべてのオブジェクトを必ずヒープに確保する"
    ],
    answer: 0,
    explanation: "オブジェクトの寿命が当該スコープに閉じる（= escape しない）なら、ヒープ割り付けと GC 対象化を避けられます。これにより GC 負荷と割り付けコストの両方が減ります。"
  },
  {
    id: "vocab-011",
    category: "vocab-en",
    q: "性能解析における <b>hot path</b> の意味として最も近いのは？",
    options: [
      "実行頻度が高く、最適化対象として価値の大きいコード経路",
      "エラーが多発しているコード経路",
      "CPU 温度センサーが最も反応する物理経路",
      "スレッドがロック待ちで詰まっている経路"
    ],
    answer: 0,
    explanation: "対語は <b>cold path</b>（滅多に実行されない経路）。JIT は hot path を検知してそこだけコンパイル対象にするのが定石です。"
  },
  {
    id: "vocab-012",
    category: "vocab-en",
    q: "メモリ領域の <b>heap</b> と <b>stack</b> の違いで正しいのは？",
    options: [
      "stack は関数呼び出しのローカルに自動で確保・解放、heap は任意タイミングで確保・解放する領域",
      "stack は GC 対象、heap は CPU が自動管理する",
      "stack は OS 管理、heap は VM が絶対に触らない",
      "両者は完全に同義"
    ],
    answer: 0,
    explanation: "stack は LIFO、関数呼び出しと対応づいて自動管理。heap は任意の寿命を持つオブジェクトの置き場で、Ruby では GC が回収を担当します。"
  },
  {
    id: "vocab-013",
    category: "vocab-en",
    q: "<b>Mark &amp; Sweep</b> 型 GC の 2 フェーズとは？",
    options: [
      "到達可能オブジェクトを辿って印を付ける → 印のないものを回収する",
      "オブジェクトを世代ごとに分ける → 古い世代を破棄する",
      "オブジェクトを圧縮する → 未使用領域を OS に返す",
      "スレッドを止める → キャッシュをクリアする"
    ],
    answer: 0,
    explanation: "ルートから参照を辿り「生きている」オブジェクトに <b>mark</b>、残りを <b>sweep</b> で解放する基本形。CRuby の GC もこの系譜に世代別や incremental を重ねた拡張です。"
  },
  {
    id: "vocab-014",
    category: "vocab-en",
    q: "世代別 GC が前提とする「weak generational hypothesis（弱い世代別仮説）」とは？",
    options: [
      "新しく生成されたオブジェクトほど早く死ぬ傾向がある",
      "古いオブジェクトほど参照が少ない",
      "オブジェクトの寿命は完全にランダム",
      "スレッド数に比例してオブジェクトが長生きする"
    ],
    answer: 0,
    explanation: "この経験則を根拠に、<b>若い世代だけを頻繁に GC し、古い世代は稀に GC する</b>戦略で全体コストを下げます。"
  },
  {
    id: "vocab-015",
    category: "vocab-en",
    q: "世代別 GC で <b>write barrier</b>（ライトバリア）が必要になる場面は？",
    options: [
      "古い世代のオブジェクトから新しい世代のオブジェクトへの参照が作られたことを記録するため",
      "並列スレッドが同じ変数に書き込まないようブロックするため",
      "ディスク書き込みを暗号化するため",
      "標準出力への書き込みをバッファするため"
    ],
    answer: 0,
    explanation: "マイナー GC（若い世代のみ）で古い世代を辿り直さずに済ませるには、古→若の参照をリメンバーセットに記録しておく必要があり、そのフックが write barrier です。"
  },
  {
    id: "vocab-016",
    category: "vocab-en",
    q: "GC の <b>compaction</b>（コンパクション）が目指すものは？",
    options: [
      "メモリ上に散らばった生存オブジェクトを詰めてメモリ断片化を解消する",
      "生存オブジェクトを可逆圧縮してサイズを半分にする",
      "全オブジェクトを文字列化して保存する",
      "オブジェクトの種類を 1 種類に統一する"
    ],
    answer: 0,
    explanation: "Ruby にも <code>GC.compact</code> があり、オブジェクトを詰め直して空き領域を連続させます。これによりキャッシュ効率や巨大割り付けの成功率が上がります。",
    reference: { label: "GC.compact", url: "https://docs.ruby-lang.org/en/master/GC.html" }
  },
  {
    id: "vocab-017",
    category: "vocab-en",
    q: "<b>Concurrency</b> と <b>Parallelism</b> の違いで正しいのは？",
    options: [
      "Concurrency は複数処理を論理的に同時進行「させる」仕組み、Parallelism は物理的に同時実行「する」こと",
      "Concurrency は CPU 専用、Parallelism は GPU 専用の概念",
      "Concurrency は I/O、Parallelism は CPU の別名",
      "両者は完全に同義で言い換え"
    ],
    answer: 0,
    explanation: "concurrency は「取り回し」、parallelism は「同時に走らせる」。GVL のある Ruby の Thread は concurrent だが（原則）parallel ではない、という文脈でよく出てきます。"
  },
  {
    id: "vocab-018",
    category: "vocab-en",
    q: "Thread と Process の関係として正しいのは？",
    options: [
      "Process は独立したメモリ空間を持ち、Thread は同一プロセス内でメモリを共有する実行単位",
      "Thread は独立したメモリ空間を持ち、Process は共有メモリで動く",
      "両者は同義",
      "Process は OS、Thread は VM が作ると一意に決まっている"
    ],
    answer: 0,
    explanation: "Process 間はアドレス空間が独立しているため相互に安全。Thread はメモリを共有するのでデータ競合に注意が要ります。"
  },
  {
    id: "vocab-019",
    category: "vocab-en",
    q: "<b>Fiber</b>（コルーチン）の特徴として最も近いのは？",
    options: [
      "実行権の切替を明示的に行う、協調的な軽量実行単位",
      "OS が強制的にスイッチする重いスレッド",
      "プロセスを分割する単位",
      "プロセスとスレッドをまたいで動くネットワークユニット"
    ],
    answer: 0,
    explanation: "Ruby の <code>Fiber</code> は <code>Fiber.yield</code> / <code>resume</code> で明示的に切り替える coroutine。<code>Fiber.scheduler</code> で I/O 待ちを協調的にさばく async gem などの基盤にもなっています。",
    reference: { label: "Fiber - Ruby docs", url: "https://docs.ruby-lang.org/en/master/Fiber.html" }
  },
  {
    id: "vocab-020",
    category: "vocab-en",
    q: "Ruby の <b>GVL</b>（Global VM Lock）が Thread の実行にもたらす影響は？",
    options: [
      "1 プロセス内では原則として同時に 1 つの Thread しか Ruby コードを実行できない",
      "Thread をいくつ作っても CPU 数分だけ並列実行される",
      "Thread はすべて別プロセスとして fork される",
      "Thread は完全に禁止されている"
    ],
    answer: 0,
    explanation: "CRuby では GVL があるため Ruby コードの実行は 1 スレッドずつ。I/O 待ちの間は解放されるので concurrent な I/O は可能。真の parallel 実行には Ractor やプロセス分割を使います。"
  },
  {
    id: "vocab-021",
    category: "vocab-en",
    q: "<b>M:N threading</b> モデルとは？",
    options: [
      "M 個のユーザー空間スレッドを N 個のネイティブスレッドにマッピングして実行する方式",
      "M 個のプロセスを N 個の CPU に 1:1 固定する方式",
      "M 個の関数呼び出しを N 段キャッシュする方式",
      "M バイトのメモリを N スレッドで均等割りする方式"
    ],
    answer: 0,
    explanation: "Ruby 3.3 で実験導入された MaNy もこの系統。多数の軽量スレッドを少数の OS スレッドに乗せ、スケジューラで切り替えることで Fiber / Thread のコストを下げます。",
    reference: { label: "Ruby 3.3.0 Released", url: "https://www.ruby-lang.org/en/news/2023/12/25/ruby-3-3-0-released/" }
  },
  {
    id: "vocab-022",
    category: "vocab-en",
    q: "ランタイムの <b>scheduler</b>（スケジューラ）の役割として最も近いのは？",
    options: [
      "複数の実行単位（Thread / Fiber 等）に対して、いつどれを走らせるかを決める",
      "ディスク I/O をファイル単位で並べ替える",
      "HTTP リクエストのルーティングを担当する",
      "ソースコードのリントを行う"
    ],
    answer: 0,
    explanation: "Ruby の <code>Fiber.scheduler</code> は、I/O 待ちで Fiber を切り替える責務を担うプラガブルな仕組み。async gem や falcon が具体実装を提供します。"
  },
  {
    id: "vocab-023",
    category: "vocab-en",
    q: "<b>Gradual typing</b>（段階的型付け）とは？",
    options: [
      "同一言語内で、型を付ける箇所と付けない箇所を段階的に混在できる型システム",
      "全ての変数に型を必ず付けることを強制する方式",
      "型を完全に禁止して全部動的型にする方式",
      "コンパイル時に型を全部消去する方式"
    ],
    answer: 0,
    explanation: "Ruby の RBS / Steep / Sorbet もこの思想で、<b>型を後付けで少しずつ増やせる</b>のが特徴。Jeremy Siek による命名。"
  },
  {
    id: "vocab-024",
    category: "vocab-en",
    q: "<b>Type inference</b>（型推論）とは？",
    options: [
      "型注釈がなくても、値の使われ方などから型を解析器が自動で決定すること",
      "実行時に全ての型を String に変換すること",
      "型を必ず明示的に注釈させる仕組み",
      "型を暗号化して隠すこと"
    ],
    answer: 0,
    explanation: "Ruby では <b>TypeProf</b> が AST を解析して型を推論し、RBS を自動生成します。Steep も部分的に推論機能を備えています。",
    reference: { label: "TypeProf", url: "https://github.com/ruby/typeprof" }
  },
  {
    id: "vocab-025",
    category: "vocab-en",
    q: "静的型付けと動的型付けの違いで最も近いのは？",
    options: [
      "静的はコンパイル時に型を検査、動的は実行時に型を検査する",
      "静的は変数を変更不可、動的は必ず変更可",
      "静的は関数型言語、動的はオブジェクト指向言語に限定される",
      "静的は型を 1 つ、動的は型を無限に持つ"
    ],
    answer: 0,
    explanation: "Ruby は動的型付け言語ですが、RBS などで外から静的検査を追加する「段階的型付け」路線も進んでいます。"
  },
  {
    id: "vocab-026",
    category: "vocab-en",
    q: "Ruby 界でよく引かれる <b>duck typing</b> の発想に最も近いのは？",
    options: [
      "型の名前ではなく、オブジェクトが応答できるメソッドの有無で振る舞いを決める",
      "全ての型を Duck という型に統一する",
      "クラス継承を必ず使うべきというルール",
      "インターフェースを必ず宣言してから実装する方式"
    ],
    answer: 0,
    explanation: "「ガーガー鳴いてヨチヨチ歩くならそれはアヒルだ」。具体クラスを問わず、<code>respond_to?</code> 的な使い方で受け入れる動的型言語の柔軟さの象徴です。"
  },
  {
    id: "vocab-027",
    category: "vocab-en",
    q: "プロファイラの <b>tracing profiler</b> と <b>sampling profiler</b> の違いとして最も近いのは？",
    options: [
      "tracing は呼び出しを網羅記録して精密だが重い、sampling は一定間隔のスナップショットで軽いが近似",
      "tracing は軽量、sampling は重量級",
      "両者は同義",
      "tracing は CPU 専用、sampling はメモリ専用"
    ],
    answer: 0,
    explanation: "本番で使うなら sampling、詳細な relationship を見たいなら tracing、と使い分けます。Ruby では stackprof（sampling）や vernier などが代表。"
  },
  {
    id: "vocab-028",
    category: "vocab-en",
    q: "<b>Flame graph</b>（フレームグラフ）が主に可視化するのは？",
    options: [
      "スタックトレースごとの CPU 使用時間の積み上げ",
      "メモリ使用量の時系列推移",
      "ディスクのファイル断片化率",
      "OS のフォントレンダリング時間"
    ],
    answer: 0,
    explanation: "Brendan Gregg が広めた可視化手法。横軸は頻度、縦軸はスタックの深さで、どの関数が累計 CPU 時間を食っているかが一目でわかります。",
    reference: { label: "Flame Graphs (Brendan Gregg)", url: "https://www.brendangregg.com/flamegraphs.html" }
  },
  {
    id: "vocab-029",
    category: "vocab-en",
    q: "テスト文脈で <b>regression</b>（リグレッション）とは？",
    options: [
      "以前は動いていた機能が、後の変更で壊れること",
      "性能を必ず線形回帰で測定すること",
      "コミットを直前の状態に巻き戻す操作",
      "機械学習の回帰分析そのもの"
    ],
    answer: 0,
    explanation: "RubyKaigi のトークでも「regression を防ぐ」「regression test を足した」のように頻出。既に直ったバグが再発することも含みます。"
  },
  {
    id: "vocab-030",
    category: "vocab-en",
    q: "<b>Observability</b> の文脈でよく挙げられる「3 本柱」とは？",
    options: [
      "Logs / Metrics / Traces",
      "CPU / Memory / Disk",
      "Frontend / Backend / Database",
      "Latency / Throughput / Error rate"
    ],
    answer: 0,
    explanation: "ログ・メトリクス・トレースの 3 種類が組み合わさって「システムの挙動を外から説明できる」状態を作る、という考え方。OpenTelemetry はこれらを横断的に扱う標準です。",
    reference: { label: "OpenTelemetry", url: "https://opentelemetry.io/" }
  },
  {
    id: "vocab-031",
    category: "vocab-en",
    q: "<b>REPL</b> の正式名称は？",
    options: [
      "Read-Eval-Print Loop",
      "Recursive Evaluation Primitive Layer",
      "Ruby Example Programming Language",
      "Runtime Exception Printer Loop"
    ],
    answer: 0,
    explanation: "入力を <b>Read</b>、<b>Eval</b>uate、<b>Print</b>、そして次の入力まで <b>Loop</b>する対話環境。Ruby 標準の <code>irb</code> や pry もこれです。"
  },
  {
    id: "vocab-032",
    category: "vocab-en",
    q: "<b>DSL</b>（Domain Specific Language）が指すものは？",
    options: [
      "特定領域の問題を表現しやすくするために設計された、用途特化の言語や文法",
      "データベース専用の SQL 方言",
      "ダブルスタンダードライセンスの略",
      "Ruby 2 系のみで動く旧式機能"
    ],
    answer: 0,
    explanation: "Rails のルーティングや RSpec の <code>describe / it</code> も Ruby 上に構築された <b>internal DSL</b>。メタプログラミングと相性が良いのが Ruby の特徴です。"
  },
  {
    id: "vocab-033",
    category: "vocab-en",
    q: "<b>FFI</b>（Foreign Function Interface）の役割は？",
    options: [
      "ある言語から別言語（多くは C）のライブラリ関数を呼び出すための仕組み",
      "関数型言語だけで使える継承の仕組み",
      "WebAssembly 専用のファイル形式",
      "分散システム専用の RPC プロトコル"
    ],
    answer: 0,
    explanation: "Ruby でも C 拡張や <code>ffi</code> gem を使って共有ライブラリを直接呼べます。GC・型・呼び出し規約のブリッジが FFI の主な関心事。",
    reference: { label: "ffi gem", url: "https://github.com/ffi/ffi" }
  },
  {
    id: "vocab-034",
    category: "vocab-en",
    q: "<b>SSA</b>（Static Single Assignment）形式の特徴は？",
    options: [
      "各変数がプログラム中でちょうど 1 回だけ代入される形に変換されている中間表現",
      "静的型をすべて単一の型に統一する方式",
      "変数名の付け方のスタイルガイド",
      "Ruby 専用のクラス継承パターン"
    ],
    answer: 0,
    explanation: "SSA 形式だと「この変数はどこで決まった値か」が一意に追えるため、定数伝播や dead code elimination などの最適化がやりやすくなります。多くの JIT/コンパイラ IR が SSA を採用しています。"
  },

  // ==================================================
  // CATEGORY: RubyKaigi頻出英語（実セッション由来の語彙）
  // 出典は各問の reference に RubyKaigi 2023-2025 の登壇タイトルを明記
  // ==================================================
  {
    id: "vocab-035",
    category: "vocab-en",
    q: "Lrama や Bison が採用する <b>LALR</b> の正式名称は？",
    options: [
      "LookAhead Left-to-right Rightmost-derivation parser",
      "Lightweight Abstract Language Resolver",
      "Linear Array Lookup Resolver",
      "Left-Associative Left-Recursion"
    ],
    answer: 0,
    explanation: "<b>LALR(1)</b> = LookAhead LR(1)。LR(1) の状態をマージして実用サイズに収めた表駆動のボトムアップ解析法。Ruby の parse.y は長年 Bison（LALR 生成器）を、Ruby 3.3 以降は Ruby 製の <b>Lrama</b> を使っています。",
    reference: { label: "RubyKaigi 2025: The Implementations of Advanced LR Parser Algorithm", url: "https://rubykaigi.org/2025/presentations/junk0612.html" }
  },
  {
    id: "vocab-036",
    category: "vocab-en",
    q: "Lrama の進化先として議論されている <b>IELR</b> 型パーサ生成アルゴリズムの特徴は？",
    options: [
      "並列処理に特化した LR パーサの一種",
      "LALR で生じる偽の衝突を排除し、LR(1) と同等の言語クラスを扱える改良アルゴリズム",
      "インタプリタ専用の軽量パーサ",
      "LL(k) パーサの別名"
    ],
    answer: 1,
    explanation: "<b>IELR (Inadequate Elimination LR)</b> は LALR の弱点を補って LR(1) と等価な言語を扱いつつ表サイズも実用域に収めるアルゴリズム。Bison にも実装があり、Lrama の進化路線で注目されています。",
    reference: { label: "RubyKaigi 2024: From LALR to IELR: A Lrama's Next Step", url: "https://rubykaigi.org/2024/presentations/junk0612.html#day3" }
  },
  {
    id: "vocab-037",
    category: "vocab-en",
    q: "PicoRuby 文脈で語られる <b>Universal Parser</b> が目指すものは？",
    options: [
      "どのプログラミング言語も解析できる万能パーサ",
      "パーサを使わず AST を直接手書きする手法",
      "CRuby / PicoRuby / mruby など複数の Ruby 実装で共有できる単一のパーサ基盤",
      "正規表現だけで Ruby を解析する実験"
    ],
    answer: 2,
    explanation: "従来は処理系ごとにパーサが分かれていましたが、<b>Prism</b> や PicoRuby コンパイラの流れで「どの Ruby 実装でも同じ結果を返せる共通パーサ」という発想が進んでいます。",
    reference: { label: "RubyKaigi 2024: Unlock The Universal Parsers: A New PicoRuby Compiler", url: "https://rubykaigi.org/2024/presentations/hasumikin.html#day2" }
  },
  {
    id: "vocab-038",
    category: "vocab-en",
    q: "パーサ文脈で <b>automata learning</b>（オートマトン学習）が使われるのは？",
    options: [
      "既存パーサの挙動を観測して、等価な有限オートマトンを推定する（互換性検査に使える）",
      "機械学習で構文木をクラスタリングする手法",
      "自動運転のステアリング学習の一種",
      "Bison が内部で使う定番アルゴリズム"
    ],
    answer: 0,
    explanation: "Angluin の L* などの <b>automata learning</b> を使えば、ブラックボックスのパーサ挙動を学習し、旧実装と新実装の等価性チェックを自動化できます。",
    reference: { label: "RubyKaigi 2025: Make Parsers Compatible Using Automata Learning", url: "https://rubykaigi.org/2025/presentations/makenowjust.html" }
  },
  {
    id: "vocab-039",
    category: "vocab-en",
    q: "Ruby の <code>Continuation</code> クラスが表す概念は？",
    options: [
      "スレッドの次回スケジュール予定時刻",
      "プログラムのある時点の「残りの計算」をオブジェクトとして捕まえて後から再開できるもの",
      "require の次に読まれる gem の名前",
      "例外の親クラス"
    ],
    answer: 1,
    explanation: "<code>callcc</code>（call with current continuation）で取得する「この続きから再実行する」プリミティブ。現在は非推奨寄りで、Fiber / Enumerator が代替になります。",
    reference: { label: "RubyKaigi 2025: Continuation is to be continued", url: "https://rubykaigi.org/2025/presentations/fetburner.html" }
  },
  {
    id: "vocab-040",
    category: "vocab-en",
    q: "JIT 文脈の <b>deoptimization</b>（脱最適化）とは？",
    options: [
      "最適化を一切行わないコンパイルモード",
      "実行速度を敢えて下げるデバッグモード",
      "JIT が仮定していた前提が崩れた時、最適化済みコードから元のインタプリタ実行に戻す操作",
      "GC 後に JIT をすべて破棄する処理"
    ],
    answer: 2,
    explanation: "Ruby のような動的言語では monkey patch や shape 変化などで JIT の仮定が崩れ得ます。そのとき安全に戻るのが <b>deopt</b>。楽観的最適化とフォールバックの両立を可能にします。",
    reference: { label: "RubyKaigi 2025: Deoptimization: How YJIT Speeds Up Ruby by Slowing Down", url: "https://rubykaigi.org/2025/presentations/k0kubun.html" }
  },
  {
    id: "vocab-041",
    category: "vocab-en",
    q: "Ruby ブロックの <b>splitting</b>（分割）最適化が狙うものは？",
    options: [
      "同じブロックが複数の呼び出し元で使われる際、呼び出し元ごとに特殊化したバージョンを作って最適化する",
      "ブロックを 2 つに分けて並列実行する",
      "ブロックを AST ごと分割してディスクに保存する",
      "長いブロックを強制的に 1 行ずつに畳むリファクタ"
    ],
    answer: 0,
    explanation: "Truffle 系で研究された block splitting。同じブロックが異なる文脈で呼ばれると型情報が暈けるため、呼び出しごとに特殊化すると型推論や inline が効いて速くなります。",
    reference: { label: "RubyKaigi 2023: Splitting: the Crucial Optimization for Ruby Blocks", url: "https://rubykaigi.org/2023/presentations/eregontp.html#day2" }
  },
  {
    id: "vocab-042",
    category: "vocab-en",
    q: "最適化文脈の <b>implicit allocation</b>（暗黙の割り付け）とは？",
    options: [
      "C の malloc を Ruby から直接呼ぶ操作",
      "コードの見た目では生成していないように見えるが、実行時に暗黙に行われるオブジェクト生成",
      "GC によって自動解放される全オブジェクトの総称",
      "Thread が暗黙に確保するスタック領域"
    ],
    answer: 1,
    explanation: "例: キーワード引数の Hash 化、一時的な文字列コピー、Range の生成など。表に書いていない allocation をどう削るかが性能チューニングの定番トピックです。",
    reference: { label: "RubyKaigi 2025: Eliminating Unnecessary Implicit Allocations", url: "https://rubykaigi.org/2025/presentations/jeremyevans0.html" }
  },
  {
    id: "vocab-043",
    category: "vocab-en",
    q: "「<code>Class#new</code> を速くする」という話題の背景にあるのは？",
    options: [
      "<code>Class#new</code> は現行 CRuby に存在しない",
      "<code>Class#new</code> はクラス定義時のみに呼ばれる",
      "<code>MyClass.new</code> は <code>allocate + initialize</code> に分解でき、割り付け経路と initialize 呼び出しの両面で最適化余地が大きい",
      "<code>Class#new</code> は必ず GC を 1 回走らせる"
    ],
    answer: 2,
    explanation: "インスタンス生成は極めてホットな処理。object shape 活用や inline、軽い <code>initialize</code> のバイパスなど、毎年のように最適化が積み重ねられています。",
    reference: { label: "RubyKaigi 2025: Speeding up Class#new", url: "https://rubykaigi.org/2025/presentations/tenderlove.html" }
  },
  {
    id: "vocab-044",
    category: "vocab-en",
    q: "インスタンス変数の管理を <b>red-black tree</b>（赤黒木）で高速化するアイデアの前提は？",
    options: [
      "属性が非常に多いオブジェクトで、順序付き集合に対する O(log n) 操作が効く場面がある",
      "赤黒木を使うと GC が不要になる",
      "赤黒木は分散システム専用のデータ構造である",
      "Ruby の Hash は実は赤黒木で実装されている"
    ],
    answer: 0,
    explanation: "Ruby のインスタンス変数は object shape によるフラット管理が主ですが、shape が膨らむケースで平衡木が効く余地がある、という探求。赤黒木は平衡二分木の代表例です。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees", url: "https://rubykaigi.org/2024/presentations/tenderlove.html#day3" }
  },
  {
    id: "vocab-045",
    category: "vocab-en",
    q: "<b>MMTk</b>（Memory Management Toolkit）とは？",
    options: [
      "Rust 専用のメモリアロケータ",
      "言語処理系に組み込めて、複数の GC アルゴリズムをプラガブルに提供する研究フレームワーク",
      "Ruby 公式の新 GC の内部コード名",
      "メモリを圧縮するだけに特化した Unix コマンド"
    ],
    answer: 1,
    explanation: "ブリストル大学発の OSS プロジェクト。Java / V8 / CRuby など複数の処理系に GC バックエンドを提供するのが目標で、Ruby の Modular GC から呼び出す先の候補として有力。",
    reference: { label: "RubyKaigi 2023: Plug & Play Garbage Collection with MMTk", url: "https://rubykaigi.org/2023/presentations/eightbitraptor.html#day1" }
  },
  {
    id: "vocab-046",
    category: "vocab-en",
    q: "Ruby の <b>Modular GC</b>（モジュラー GC）が目指すものは？",
    options: [
      "GC をすべてバックグラウンドスレッドに分離する",
      "GC を JavaScript に移植する",
      "CRuby の GC を差し替え可能な API にし、外部 GC（MMTk 等）を選べるようにする",
      "GC を完全になくしてスタック割り付けのみにする"
    ],
    answer: 2,
    explanation: "長らく CRuby 本体と密結合だった GC を、インターフェース越しに差し替え可能にする取り組み。MMTk など実験的な GC を試す下地になります。",
    reference: { label: "RubyKaigi 2025: Modular Garbage Collectors in Ruby", url: "https://rubykaigi.org/2025/presentations/peterzhu2118.html" }
  },
  {
    id: "vocab-047",
    category: "vocab-en",
    q: "<b>Ractor-local GC</b>（Ractor ローカル GC）の狙いは？",
    options: [
      "Ractor ごとに独立した GC を走らせ、他 Ractor を止めずに回収できるようにする",
      "Ractor 間で GC タイミングを常に同期させる",
      "Ractor を使う全 gem に GC を埋め込む",
      "GC を Ractor に任せて本体スレッドから外す"
    ],
    answer: 0,
    explanation: "Ractor はメモリが原則独立。GC もそれぞれ局所に閉じられれば、世界を止めない（stop-the-world にしない）並列 GC の実現に近づきます。",
    reference: { label: "RubyKaigi 2025: Toward Ractor local GC", url: "https://rubykaigi.org/2025/presentations/ko1.html" }
  },
  {
    id: "vocab-048",
    category: "vocab-en",
    q: "GC 文脈の <b>stack scanning</b> とは？",
    options: [
      "スタック上のバッファオーバーフローを検出する手法",
      "スレッドのスタック領域を走査して、オブジェクト参照を GC ルートとして拾い上げる",
      "関数呼び出しの深さを計測するプロファイラの別名",
      "コールスタックを全削除する操作"
    ],
    answer: 1,
    explanation: "C のコールスタックやレジスタには生ポインタが流れるため、CRuby の GC は保守的に scanning して参照を集めます。SDB はこれを GVL 解放状態で効率化するテーマ。",
    reference: { label: "RubyKaigi 2025: SDB: Efficient Ruby Stack Scanning Without the GVL", url: "https://rubykaigi.org/2025/presentations/yfractal.html" }
  },
  {
    id: "vocab-049",
    category: "vocab-en",
    q: "<b>Happy Eyeballs</b> アルゴリズム（RFC 8305 / 旧 6555）の目的は？",
    options: [
      "DNS 名前解決を 2 回行って結果を比較する",
      "画像の Eye-tracking を最適化する",
      "IPv6 と IPv4 の両方に並行で接続試行し、早く確立できた方を採用して体感遅延を減らす",
      "TCP の輻輳制御を緩和する独自方式"
    ],
    answer: 2,
    explanation: "「片方が遅かったら待ちぼうけ」にならないよう、両スタックに race をさせる発想。Ruby でも <code>Socket.tcp</code> などに Happy Eyeballs が取り込まれました。",
    reference: { label: "RubyKaigi 2024: An adventure of Happy Eyeballs", url: "https://rubykaigi.org/2024/presentations/coe401_.html#day1" }
  },
  {
    id: "vocab-050",
    category: "vocab-en",
    q: "Linux の <b>pidfd</b> とは？",
    options: [
      "プロセス ID を安全にハンドル化し、ファイルディスクリプタ経由で扱えるようにする仕組み",
      "プロセスごとの固定フレームレート設定",
      "PID を暗号化して隠す TLS 拡張",
      "CPU ごとの親子プロセス関係をダンプするコマンド"
    ],
    answer: 0,
    explanation: "従来の PID は再利用で誤ったプロセスを指しうる問題がありましたが、<b>pidfd</b>（pid file descriptor）は「この fd が有効な限り同じプロセスを指す」と保証する Linux API。Ruby から扱うブリッジが 2025 のテーマ。",
    reference: { label: "RubyKaigi 2025: Bringing Linux pidfd to Ruby", url: "https://rubykaigi.org/2025/presentations/maciejmensfeld.html" }
  },
  {
    id: "vocab-051",
    category: "vocab-en",
    q: "<b>QUIC</b> プロトコルの特徴として正しいのは？",
    options: [
      "TCP を改名しただけのプロトコル",
      "UDP 上に構築された多重化・暗号化付きのトランスポート層プロトコルで、HTTP/3 の土台",
      "ネットワーク層（L3）の新プロトコル",
      "SSH の後継プロトコル"
    ],
    answer: 1,
    explanation: "Google 発、IETF で標準化（RFC 9000 系）。TLS 1.3 相当の暗号化を内蔵、ハンドシェイク短縮、ヘッドオブラインブロッキング解消が持ち味。Ruby でも純 Ruby 実装の試みが続きます。",
    reference: { label: "RubyKaigi 2023: Ruby Implementation of QUIC: Progress and Challenges", url: "https://rubykaigi.org/2023/presentations/yu_suke1994.html#day2" }
  },
  {
    id: "vocab-052",
    category: "vocab-en",
    q: "<b>Vulkan</b> とは？",
    options: [
      "Ruby 用の新 GC アルゴリズム名",
      "SSL/TLS を置き換える暗号プロトコル",
      "低オーバーヘッドで高性能な 3D グラフィックス・計算のためのクロスプラットフォーム API",
      "Linux カーネル内の新スケジューラ"
    ],
    answer: 2,
    explanation: "OpenGL の後継として Khronos Group が策定した低水準 API。Ruby のバインディングを書いてリアルタイム 3D を扱う尖った発表も RubyKaigi の名物。",
    reference: { label: "RubyKaigi 2023: High-performance real-time 3D graphics with Vulkan", url: "https://rubykaigi.org/2023/presentations/fredolinhares.html#day1" }
  },
  {
    id: "vocab-053",
    category: "vocab-en",
    q: "<b>ReDoS</b>（Regular expression Denial of Service）とは？",
    options: [
      "特定の入力に対して実行時間が指数的に増える正規表現を悪用し、サーバーを実質停止させる攻撃",
      "リダイレクトを大量に発生させる攻撃",
      "RE (Ruby Enterprise) 版を狙った古典的攻撃",
      "ルーターへの DoS 攻撃の一種"
    ],
    answer: 0,
    explanation: "破滅的バックトラック（catastrophic backtracking）を起こす正規表現に攻撃者が意図した入力を送り、CPU を食い潰す攻撃。Ruby 3.2 では正規表現タイムアウト機構が導入されました。",
    reference: { label: "RubyKaigi 2023: Eliminating ReDoS with Ruby 3.2", url: "https://rubykaigi.org/2023/presentations/lmt_swallow.html#day2" }
  },
  {
    id: "vocab-054",
    category: "vocab-en",
    q: "<b>Trojan Source</b> 攻撃の要点は？",
    options: [
      "トロイの木馬をソースコードに直接埋め込む古典的手法",
      "Unicode の双方向制御文字を使ってソースコードの見た目と実際の意味を乖離させる",
      "SQL を大量送信して DB を落とす攻撃",
      "プロセス間通信を乗っ取る OS 攻撃"
    ],
    answer: 1,
    explanation: "RLO/LRO など Bidi コントロール文字を混ぜ込むと、人間が見ている順序とパーサが解釈する順序を入れ替えられます。Ruby のソースでも成立するため、レビュー・エディタ両面での対策が必要。",
    reference: { label: "RubyKaigi 2023: On Ruby and ꝩduЯ, or How Scary are Trojan Source Attacks", url: "https://rubykaigi.org/2023/presentations/duerst.html#day2" }
  },
  {
    id: "vocab-055",
    category: "vocab-en",
    q: "<b>sigstore</b> の役割は？",
    options: [
      "Ruby の Signal.trap の高機能版",
      "証明書を DB に保存する独自フォーマット",
      "ソフトウェア成果物への署名・検証・透過ログ化を行う OSS サプライチェーン保護基盤",
      "ブロックチェーンの一種"
    ],
    answer: 2,
    explanation: "OpenSSF のプロジェクト。短寿命証明書（Fulcio）と透過ログ（Rekor）を組み合わせ、鍵の長期管理を不要にします。Ruby gem に適用する <code>sigstore-ruby</code> の取り組みが進行中。",
    reference: { label: "RubyKaigi 2025: The Challenges of Building sigstore-ruby", url: "https://rubykaigi.org/2025/presentations/segiddins.html" }
  },
  {
    id: "vocab-056",
    category: "vocab-en",
    q: "<b>Sorbet</b> とは何をするツール？",
    options: [
      "Stripe 発の Ruby 向け段階的型チェッカーと、その型記述フォーマット（RBI）の仕組み",
      "Ruby 用の ORM ライブラリ",
      "Ruby の GC を置き換える実装",
      "Ruby 用のコード整形ツール（RuboCop の後継）"
    ],
    answer: 0,
    explanation: "RBS とは別系統の型システム。<code>.rbi</code> ファイルによる宣言と <code>T.let</code> / <code>T.must</code> などの型アサーション構文、エディタ連携の速さが特徴。",
    reference: { label: "RubyKaigi 2023: Gradual typing for Ruby: comparing RBS and RBI/Sorbet", url: "https://rubykaigi.org/2023/presentations/Morriar.html#day3" }
  },
  {
    id: "vocab-057",
    category: "vocab-en",
    q: "Sorbet の <code>.rbi</code> ファイルが格納するのは？",
    options: [
      "バイトコード命令列",
      "Ruby コードの型情報を Sorbet 向けに宣言するインターフェースファイル",
      "Rails の初期化設定",
      "RubyGems のインストールログ"
    ],
    answer: 1,
    explanation: "<b>RBI = Ruby Interface</b>。gem 用、プロジェクト固有、Tapioca による自動生成分など複数カテゴリに分けて管理するのが一般的。",
    reference: { label: "RubyKaigi 2023: Generating RBIs for dynamic mixins with Sorbet and Tapioca", url: "https://rubykaigi.org/2023/presentations/egiurleo.html#day1" }
  },
  {
    id: "vocab-058",
    category: "vocab-en",
    q: "<b>Tapioca</b> gem の役割として正しいのは？",
    options: [
      "Ruby の非同期 I/O を実装する",
      "Ruby の LSP サーバ本体",
      "Sorbet 用の RBI ファイルを、動的な gem コードから自動生成する",
      "JSON Schema を RBS に変換する独立ツール"
    ],
    answer: 2,
    explanation: "Shopify 発。Rails のようにメタプログラミングで生成されるメソッドも、Tapioca がランタイム観察して型情報に落としてくれます。",
    reference: { label: "RubyKaigi 2023: Generating RBIs for dynamic mixins with Sorbet and Tapioca", url: "https://rubykaigi.org/2023/presentations/egiurleo.html#day1" }
  },
  {
    id: "vocab-059",
    category: "vocab-en",
    q: "型システム文脈の <b>type guard</b>（型ガード）とは？",
    options: [
      "条件式で値の型を絞り込み、その先のスコープでより具体的な型として扱えるようにする仕組み",
      "型エラー時に例外を投げるラッパー",
      "型注釈を強制的にコードから剥がす機能",
      "型ファイルへの書き込みをロックする機構"
    ],
    answer: 0,
    explanation: "TypeScript 経由で広まった概念。Steep にも導入が進み、<code>case x in Integer</code> のようなパターンマッチで以降のブロック内の型を絞れる方向です。",
    reference: { label: "RubyKaigi 2025: Introducing Type Guard to Steep", url: "https://rubykaigi.org/2025/presentations/tk0miya.html" }
  },
  {
    id: "vocab-060",
    category: "vocab-en",
    q: "<b>LSP</b>（Language Server Protocol）とは？",
    options: [
      "Lisp 処理系の略称",
      "エディタと言語サーバの間で、補完・定義ジャンプ・診断などの機能を JSON-RPC でやりとりする共通仕様",
      "Linux の Security Policy の略",
      "ログのストリーミング用プロトコル"
    ],
    answer: 1,
    explanation: "VS Code 由来の業界標準。Ruby でも Ruby LSP、Solargraph、RuboCop の LSP 実装などが並立しています。",
    reference: { label: "RubyKaigi 2023: Code indexing: How language servers understand our code", url: "https://rubykaigi.org/2023/presentations/vinistock.html#day3" }
  },
  {
    id: "vocab-061",
    category: "vocab-en",
    q: "Ruby の <code>TracePoint</code> API の役割は？",
    options: [
      "Rails 専用のリクエストトレーサ",
      "例外のスタックトレースを整形するだけのユーティリティ",
      "メソッド呼び出し・return・行実行などのイベントをフックして観測できる低水準 API",
      "外部のプロファイラ gem に依存する互換層"
    ],
    answer: 2,
    explanation: "プロファイラやデバッガの土台。Observability 系の発表では、TracePoint のオーバーヘッドを下げる/専用 API を足す議論が頻出します。",
    reference: { label: "RubyKaigi 2025: Performance Bugs and Low-level Ruby Observability APIs", url: "https://rubykaigi.org/2025/presentations/KnuX.html" }
  },
  {
    id: "vocab-062",
    category: "vocab-en",
    q: "<b>Vernier</b> とは？",
    options: [
      "CRuby 向けの次世代サンプリング / マーカー型プロファイラ gem",
      "Rails の新しい ORM",
      "Ruby 製のビルドキャッシュシステム",
      "RSpec 用のフォーマッタ"
    ],
    answer: 0,
    explanation: "Shopify の John Hawthorn さん主導。Firefox Profiler 互換の出力で、GVL 解放中や GC のアクティビティも含めて flame graph が引けるのが強み。",
    reference: { label: "RubyKaigi 2024: Vernier: A next generation profiler for CRuby", url: "https://rubykaigi.org/2024/presentations/jhawthorn.html#day1" }
  },
  {
    id: "vocab-063",
    category: "vocab-en",
    q: "<b>Property-Based Testing (PBT)</b> とは？",
    options: [
      "単体テスト失敗時に回帰テストを追加する運用ルール",
      "入力をランダムに大量生成し、プログラムの満たすべき性質（property）が常に成り立つかを検査する手法",
      "テストケースを YAML で property として記述する DSL",
      "Rails の scoped-property テストの略称"
    ],
    answer: 1,
    explanation: "Haskell の QuickCheck が起源。Ruby では <code>rantly</code> や <code>hypothesis-ruby</code> などが実装例。Ractor で並列化するアイデアが 2024 の登壇テーマ。",
    reference: { label: "RubyKaigi 2024: Unlocking Potential of Property Based Testing with Ractor", url: "https://rubykaigi.org/2024/presentations/ohbarye.html#day1" }
  },
  {
    id: "vocab-064",
    category: "vocab-en",
    q: "<b>AddressSanitizer (ASAN)</b> の役割は？",
    options: [
      "ディスクの不良セクタを検出する OS ツール",
      "ネットワークのパケット検査器",
      "C / C++ のコードを計装し、メモリ破壊や use-after-free などを実行時に検出する",
      "SSH の認証ログ解析器"
    ],
    answer: 2,
    explanation: "LLVM / GCC に同梱される動的解析ツール。CRuby は C 拡張の塊なので、ASAN で本体を走らせるとメモリ安全性のバグを発掘できます。",
    reference: { label: "RubyKaigi 2024: Finding and fixing memory safety bugs in C with ASAN", url: "https://rubykaigi.org/2024/presentations/KJTsanaktsidis.html#day3" }
  },
  {
    id: "vocab-065",
    category: "vocab-en",
    q: "<b>Bazel</b> とは？",
    options: [
      "Google 発の、多言語対応・再現性重視の大規模ビルドシステム",
      "Ruby 専用のバージョン管理ツール",
      "クラウドファンディングプラットフォームの一種",
      "Bundler の旧称"
    ],
    answer: 0,
    explanation: "モノレポ運用で人気のビルドシステム。BUILD ファイルで依存を宣言し、キャッシュとサンドボックスで再現性を担保します。Ruby プロジェクトに適用する試みが 2025 の登壇テーマ。",
    reference: { label: "RubyKaigi 2025: Bazel for Ruby", url: "https://rubykaigi.org/2025/presentations/p0deje.html" }
  },
  {
    id: "vocab-066",
    category: "vocab-en",
    q: "Ruby 標準ライブラリの <b>Reline</b> とは？",
    options: [
      "Rails 専用の HTTP クライアント",
      "IRB などで使われる pure Ruby 製の readline 互換ライン編集ライブラリ",
      "正規表現エンジンの新実装",
      "Ractor 間のメッセージキュー"
    ],
    answer: 1,
    explanation: "GNU readline に依存せず、Unicode 幅・マルチライン・ヒストリ・補完を純 Ruby で提供。IRB のマルチライン編集体験を支えています。",
    reference: { label: "RubyKaigi 2024: Exploring Reline: Enhancing Command Line Usability", url: "https://rubykaigi.org/2024/presentations/ima1zumi.html#day1" }
  },
  {
    id: "vocab-067",
    category: "vocab-en",
    q: "Ruby の <code>Marshal</code> モジュールの役割は？",
    options: [
      "Rails で HTTP リクエストをパースする",
      "スレッドの実行スケジュールを決める",
      "Ruby の例外をログに整形する",
      "Ruby オブジェクトを独自フォーマットのバイト列に直列化・復元する標準ライブラリ"
    ],
    answer: 3,
    explanation: "<code>Marshal.dump</code> / <code>Marshal.load</code> で使う直列化機構。互換性やセキュリティ（任意オブジェクトを復元できてしまう危険性）が永年のトピック。",
    reference: { label: "RubyKaigi 2024: Remembering (ok, not really Sarah) Marshal", url: "https://rubykaigi.org/2024/presentations/segiddins.html#day1" }
  },
  {
    id: "vocab-068",
    category: "vocab-en",
    q: "<b>Psych</b> は Ruby 標準ライブラリで何を扱う？",
    options: [
      "JSON Schema の検証",
      "Ruby の HTTP/2 クライアント",
      "Ruby プロセスのメモリ計測",
      "YAML のパース・生成（libyaml をバックエンドに使う）"
    ],
    answer: 3,
    explanation: "現在は Ruby に標準同梱の YAML ライブラリ。Aaron Patterson（tenderlove）さんが作りました。コメント保持や安全ロード（<code>YAML.safe_load</code>）が議論の的。",
    reference: { label: "RubyKaigi 2024: Getting along with YAML comments with Psych", url: "https://rubykaigi.org/2024/presentations/qnighy.html#day2" }
  },
  {
    id: "vocab-069",
    category: "vocab-en",
    q: "Ruby 標準ライブラリ <code>StringScanner</code> の使いどころは？",
    options: [
      "文字列を画像として走査して OCR する",
      "文字列のハッシュ値を求める専用クラス",
      "String を並列スキャンするマルチスレッドユーティリティ",
      "文字列を先頭から正規表現で切り出しながら走査・パースする低水準ツール"
    ],
    answer: 3,
    explanation: "REXML や ERB のパース、小さな DSL のレキサー実装などで頻出。<code>scan</code> / <code>match?</code> / <code>pos</code> で位置を進めつつ検査できます。",
    reference: { label: "RubyKaigi 2025: Improvement of REXML and speed up using StringScanner", url: "https://rubykaigi.org/2025/presentations/naitoh.html" }
  },
  {
    id: "vocab-070",
    category: "vocab-en",
    q: "Ruby の <b>ERB</b> の正式名称は？",
    options: [
      "External Ruby Binding",
      "Evaluated Ruby Block",
      "Enhanced Ruby Bytecode",
      "Embedded Ruby"
    ],
    answer: 3,
    explanation: "<b>ERB = Embedded Ruby</b>。テキストに Ruby 式を埋め込むテンプレートエンジンで、Rails のビューや scaffolding で定番です。",
    reference: { label: "RubyKaigi 2024: ERB, ancient and future", url: "https://rubykaigi.org/2024/presentations/m_seki.html#day3" }
  },
  {
    id: "vocab-071",
    category: "vocab-en",
    q: "<b>fat gem</b> の特徴は？",
    options: [
      "Gemfile にすべての依存を書き込みきった巨大プロジェクト",
      "ファイルサイズ警告が出る 100MB 以上の gem",
      "非公式フォークをまとめて配布する gem 戦略",
      "あらかじめビルド済みのネイティブバイナリを複数 OS / アーキ向けに同梱して配布する gem"
    ],
    answer: 3,
    explanation: "Windows など C コンパイラが揃いにくい環境向けに、ネイティブ拡張をビルド済みで含めてしまう配布形式。メンテ負荷が高く、最近はプラットフォーム別 gem への移行が進んでいます。",
    reference: { label: "RubyKaigi 2025: Goodbye fat gem 2025", url: "https://rubykaigi.org/2025/presentations/ktou.html" }
  },
  {
    id: "vocab-072",
    category: "vocab-en",
    q: "2025 に登壇テーマとなった <b>Kompo</b> の用途として最も近いのは？",
    options: [
      "Ruby の GC をチューニングするライブラリ",
      "Ruby の分散トレーシング gem",
      "Ruby のメールライブラリ",
      "スクリプト・ランタイム・依存 gem をひとまとめにして、1 つの実行バイナリとして配布するツール"
    ],
    answer: 3,
    explanation: "単一バイナリ化することで配布先に Ruby 実行環境を要求せずに済み、CLI ツールやアプリ配布に向きます。",
    reference: { label: "RubyKaigi 2025: The Ruby One-Binary Tool, Enhanced with Kompo", url: "https://rubykaigi.org/2025/presentations/ahogappa.html" }
  },
  {
    id: "vocab-073",
    category: "vocab-en",
    q: "近年の RubyKaigi で議論されている <b>Namespace</b> 機能の目的は？",
    options: [
      "Ruby の module を全廃する",
      "ファイル名の命名規則を強制する linter",
      "Ruby プロセスを cgroup で分離する Linux 機能",
      "gem 間や拡張コードの「意図しない定数汚染」を防ぐ、Ruby レベルの隔離機構"
    ],
    answer: 3,
    explanation: "tagomoris さんらが進める実験機能。現在はグローバルに混ざってしまう定数・メソッドをスコープ化し、依存 gem の改変が他に漏れない世界を目指します。",
    reference: { label: "RubyKaigi 2025: State of Namespace", url: "https://rubykaigi.org/2025/presentations/tagomoris.html" }
  },
  {
    id: "vocab-074",
    category: "vocab-en",
    q: "<b>ADBC</b>（Arrow Database Connectivity）とは？",
    options: [
      "PostgreSQL の旧接続プロトコル",
      "RDB と KVS をまたぐ ORM 標準",
      "ActiveRecord の別実装",
      "Apache Arrow を中心に据えた、言語横断のモダン DB 接続 API 仕様"
    ],
    answer: 3,
    explanation: "ODBC / JDBC に並ぶ新世代の接続規格で、結果を Arrow のカラム型で直接受け取れるのが強み。Ruby バインディングで分析用途に活用する道が開けます。",
    reference: { label: "RubyKaigi 2023: Ruby + ADBC - A single API between Ruby and DBs", url: "https://rubykaigi.org/2023/presentations/ktou.html#day3" }
  },
  {
    id: "vocab-075",
    category: "vocab-en",
    q: "Ruby の <b>deprecation warning</b> とは？",
    options: [
      "非推奨コードをコンパイルエラーに昇格させるモード",
      "非推奨 gem を自動アンインストールする機能",
      "RuboCop 専用の警告レベル",
      "将来のバージョンで削除される予定の機能を、実行時に「非推奨です」と通知する仕組み"
    ],
    answer: 3,
    explanation: "<code>Warning.warn</code> をフックに段階的な移行を促します。2025 では、警告の発生箇所を捕まえて自動で書き換え候補を提案するアイデアが紹介されました。",
    reference: { label: "RubyKaigi 2025: On-the-fly Suggestions of Rewriting Method Deprecations", url: "https://rubykaigi.org/2025/presentations/ohbarye.html" }
  },
  {
    id: "vocab-076",
    category: "vocab-en",
    q: "RubyKaigi で不定期開催される <b>TRICK</b> コンテストとは？",
    options: [
      "若手限定の Ruby コーディング速度大会",
      "RubyKaigi の CFP 審査員向け内部ルール集",
      "公式 Ruby インタープリタのバグ賞金プログラム",
      "「奇妙で芸術的な Ruby コード」の美しさ・変態度を競うコンテスト"
    ],
    answer: 3,
    explanation: "<b>TRICK = Transcendental Ruby Imbroglio Contest for rubyKaigi</b>。通常の書き方から大きく外れた Ruby コードの美と技を競う催しで、mame さんらによる伝説的作品が多数。2025 では Episode I として復活しました。",
    reference: { label: "RubyKaigi 2025: TRICK 2025: Episode I", url: "https://rubykaigi.org/2025/presentations/tric.html" }
  }
];
