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
      "ZJIT はインタプリタ専用で、YJIT は AOT コンパイラとして事前コンパイルする",
      "ZJIT はメソッドベース JIT、YJIT は Lazy Basic Block Versioning",
      "ZJIT は Rust バックエンド、YJIT は LLVM をバックエンドとして利用する",
      "ZJIT は Ractor 専用、YJIT は通常の Thread 専用で相互排他される"
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
      "C で書かれた高性能・最適化優先の次世代 JIT",
      "Rust で書かれた研究用プロトタイプの新 JIT",
      "Pure Ruby で書かれたメンテナビリティ重視の JIT",
      "Java バイトコード互換で JVM 上でも動作する JIT"
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
      "Ractor 間通信のバッファサイズを動的に可変化するための仕組み",
      "オブジェクトを 40byte スロット以外の大きさでもヒープに配置可能にする",
      "YJIT が生成する機械語領域を可変長スロットで確保可能にするため",
      "Fiber スタックのサイズを用途別に切り替え可能にするための機構"
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
      "<code>--yjit=zjit</code> と環境変数 <code>ZJIT=1</code> の併用",
      "環境変数 <code>RUBY_ZJIT=1</code> を事前に設定して起動",
      "gem <code>ruby-zjit</code> をインストールして require する"
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
      "GC を完全に無効化できるビルドオプションを標準で提供する",
      "Ractor ごとに独立した GC インスタンスを強制的に持たせる",
      "世代別 GC を廃止して Mark&Sweep のみの単一方式に一本化"
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
      "Twenty Years of JRuby on the JVM",
      "The Journey of Box Building",
      "Matz Keynote: Past, Present and Future",
      "Ruby Releases Ruby: 20 Year Retrospective"
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
      "A Faster FFI: Bridging C Extensions without Overhead",
      "Implementing Core Set: A New Data Structure for Ruby",
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
      "Ractor ベースで書かれた新世代のバッチ処理基盤",
      "Fiber Scheduler を活用した非同期 Web サーバ",
      "PicoRuby 向けに書かれた軽量 MQTT クライアント",
      "RBS で型チェックを行う gem 横断の型チェッカ"
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
      "Hiroshi Shibata (hsbt / RubyGems)",
      "Koichi Sasada (ko1 / Ractor 開発者)",
      "Satoshi Tagomori (tagomoris / Namespace)"
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
      "全 Ractor で単一のグローバル GC を共有して効率化する",
      "Ractor ごとに独立した GC を持たせて AI エージェント並行実行に耐える",
      "AI 推論の間のみ GC を完全に無効化してスループットを優先",
      "Ractor を廃止して従来の Thread + GVL モデルに戻す方向"
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
      "TypeProf for IDE: Real-time Inference for Editors",
      "TypeProf vs Steep: A Comparative Type Checker Study",
      "TypeProf 2026: Large Language Model Integration Patterns"
    ],
    answer: 0,
    explanation: "mame さんはベンチマーク定番の <b>Optcarrot</b>（NES エミュレータ）を TypeProf で解析する実践談。TypeProf を現実のコードに使うコツが聞けます。",
    reference: { label: "mametter session", url: "https://rubykaigi.org/2026/presentations/mametter.html" }
  },
  {
    id: "sess-014",
    category: "sessions-2026",
    q: "「Making the RBS Parser Faster」を発表する Steep / RBS の主要開発者は？",
    options: [
      "Soutaro Matsumoto",
      "Yusuke Endoh (mame)",
      "Koichi Sasada (ko1)",
      "Hiroshi Shibata (hsbt)"
    ],
    answer: 0,
    explanation: "<b>Soutaro Matsumoto</b> さんは Steep と RBS の中心開発者。RBS パーサを高速化した取り組みを発表します（Day2 14:10）。",
    reference: { label: "soutaro session", url: "https://rubykaigi.org/2026/presentations/soutaro.html" }
  },
  {
    id: "sess-015",
    category: "sessions-2026",
    q: "「Ruby on NES - how to make the smallest ruby ever」を発表するのは？",
    options: [
      "Yutaka HARA (yhara)",
      "Yuji Yokoo (yujiyokoo)",
      "Hitoshi HASUMI (hasumikin)",
      "Uchio KONDO (udzura)"
    ],
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
    options: [
      "Shopify（Kevin Newton）",
      "Stripe（Jeremy Evans）",
      "GitHub（Aaron Patterson）",
      "Square（Koichi Sasada）"
    ],
    answer: 0,
    explanation: "<b>Prism</b> は Shopify の <b>Kevin Newton</b> さんを中心に開発されている、エラー寛容でポータブルな Ruby パーサ。Ruby 3.3 でバンドル、3.4 でデフォルト化。",
    reference: { label: "Prism GitHub", url: "https://github.com/ruby/prism" }
  },
  {
    id: "past-003",
    category: "past-topics",
    q: "TypeProf の開発者として最も知られているのは？",
    options: [
      "mame (Yusuke Endoh)",
      "soutaro (Matsumoto Soutaro)",
      "ko1 (Koichi Sasada)",
      "shugo (Shugo Maeda)"
    ],
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
      "hasumikin (Hitoshi HASUMI)",
      "matz (Yukihiro Matsumoto)",
      "ko1 (Koichi Sasada / YARV)"
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
      "ブラウザ上で動く WebAssembly 版の Ruby 処理系",
      "AI モデル学習用のルールベース DSL エンジン",
      "ゲーム開発向けのリアルタイム Ruby ランタイム"
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
    options: [
      "GIL (Global Interpreter Lock)",
      "GEL (Global Execution Lock)",
      "VLock (Virtual Machine Lock)",
      "MLock (Method-level Shared Lock)"
    ],
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
      "Rails での並列リクエスト処理を Ractor ベースで標準化する",
      "Fiber を廃止して全非同期処理を Thread に一本化する案",
      "Ractor API を WASM ランタイム上で動かす移植プロジェクト"
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
      "Ruby の GC 挙動を可視化するビジュアライザ gem",
      "Ruby 用の OpenGL/Vulkan ラッパーグラフィックライブラリ",
      "Ruby 向けの軽量パッケージマネージャ CLI ツール"
    ],
    answer: 0,
    explanation: "<b>Optcarrot</b> は mame さんが作った <b>Pure Ruby で書かれた NES (ファミコン) エミュレータ</b>で、Ruby 3x3 のベンチマーク指標として有名です。",
    reference: { label: "Optcarrot GitHub", url: "https://github.com/mame/optcarrot" }
  },
  {
    id: "past-012",
    category: "past-topics",
    q: "RubyKaigi は過去に松本・福岡・つくば・長野などを巡回してきたが、2025 の開催地は？",
    options: [
      "長野県松本市",
      "愛媛県松山市",
      "福岡県福岡市",
      "沖縄県那覇市"
    ],
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
    options: [
      "Koichi ITO (koic)",
      "Aaron Patterson (tenderlove)",
      "Jeremy Evans (jeremyevans0)",
      "Benoit Daloze (eregontp)"
    ],
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
    options: [
      "Soutaro Matsumoto",
      "Yusuke Endoh (mame)",
      "Koichi Sasada (ko1)",
      "tenderlove (A. Patterson)"
    ],
    answer: 0,
    explanation: "<b>Steep</b> は RBS を使って型チェックをする gem で、<b>Soutaro Matsumoto</b> さんが開発しています。",
    reference: { label: "Steep", url: "https://github.com/soutaro/steep" }
  },
  {
    id: "eco-004",
    category: "ecosystem",
    q: "<code>async</code> / <code>falcon</code> gem の設計で中心的な役割を果たすのは？",
    options: [
      "Fiber.scheduler による協調的 I/O",
      "Thread pool による先取りワーカ配分",
      "Ractor pool による並列アクターモデル",
      "Process fork によるプロセス並列処理"
    ],
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
      "Ruby の新 ORM 標準仕様（ActiveRecord の後継として策定）",
      "Ruby の非同期実行モデル標準仕様（Fiber ベースで策定中）",
      "Ruby 公式のテストフレームワーク統一仕様と運用ルール"
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
      "Main Ruby Implementation (Official Build)",
      "Modular Ruby Interpreter (Pluggable VM)",
      "Minimum Ruby Interpreter (Embedded Build)"
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
      "Ruby 処理系のバージョン切り替え管理",
      "Ruby コードの難読化とライセンス管理",
      "Rails プロジェクトの雛形ファイル生成"
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
    options: [
      "Minitest（標準添付の軽量テストフレームワーク）",
      "RSpec（gem として広く使われる BDD 系）",
      "Cucumber（BDD スタイルの受け入れテスト）",
      "Test::Unit（旧来）と Minitest（標準）"
    ],
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
      "PicoRuby は mruby の公式後継で完全 API 互換を保証している",
      "PicoRuby は mruby と無関係に設計された完全独立の処理系実装",
      "mruby のランタイムが内部で PicoRuby をラップして呼び出す"
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
      "トークン列から構文木（AST）を組み立てる段階",
      "構文木を機械語やバイトコードに翻訳する段階",
      "機械語を実行時に計測しつつ動的に最適化する段階"
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
      "Parser がトークンを切り出し、Lexer がそのトークン列を構文木にする",
      "両者は同義であり、言語ごとに呼び方が変わっているだけの用語",
      "Parser はランタイムで動き、Lexer はコンパイル時のみ動く静的工程"
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
      "CPU が直接実行できる機械語そのものを指す別名（アセンブリ相当）",
      "ソースコードを gzip などで圧縮した単なる配信用のバイト列",
      "文字コード UTF-8 の内部表現の略称として使われることがある"
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
      "例外処理で内部的に使う Internal Raise の略称（Ruby 用語）",
      "Ruby の VM 専用に使われる命令スケジューラの別名表記",
      "ガベージコレクタがオブジェクトを繋ぐリング構造のこと"
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
      "AOT は実行中のみ、JIT は実行前のみ動作し、両者は対となる技術である",
      "AOT は動的型言語専用の技術、JIT は静的型言語専用に使われる技術である",
      "両者は完全に同義で、研究分野によって使い分けている用語のゆれ"
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
      "関数本体を暗号化してリバースエンジニアリングを防ぐセキュリティ機能",
      "関数を別スレッドに強制的に移して並行実行するコンパイラ支援機能",
      "関数の戻り値を常に nil に置き換えデッドコード検出を補助する変換"
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
      "実行時に全ての定数を動的解決しつつキャッシュしていく仕組み",
      "定数を暗号化して文字列プールに格納する難読化テクニック",
      "定数プール全体を GC 対象にしてメモリ効率を上げる処理"
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
      "関数外へ漏れるオブジェクトをその場で暗号化して隠蔽する最適化",
      "例外が発生しそうな行を静的解析で検出して自動的にスキップする",
      "すべてのオブジェクトを必ずヒープに確保して参照を安定化させる"
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
      "エラーや例外が多発してログに残り続けているコード経路",
      "CPU の温度センサーが最も反応する物理的なダイの部分",
      "スレッドがロック待ちで詰まって進行できない経路の俗称"
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
      "stack は GC 対象で、heap は CPU がハードウェア的に管理する領域である",
      "stack は OS が管理し、heap は VM がまったく触らない独立領域である",
      "両者は完全に同義で、物理メモリと仮想メモリを区別するだけの呼称"
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
      "オブジェクトを世代ごとに分けてから古い世代を破棄するという 2 段階",
      "オブジェクトを圧縮する → 未使用領域を OS に返すという 2 フェーズ",
      "スレッドを止める → キャッシュをクリアする → 再開という 2 段階"
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
      "古いオブジェクトほど参照が少なく到達可能性が低い",
      "オブジェクトの寿命は完全にランダムで予測できない",
      "スレッド数に比例してオブジェクトが長生きしやすい"
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
      "並列スレッドが同じ変数に同時に書き込まないように相互排他をかけるため",
      "ディスク書き込みをトランザクション単位で暗号化して保護するため",
      "標準出力への書き込みを行単位でバッファして性能を上げるため"
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
      "生存オブジェクトを可逆圧縮してサイズをほぼ半分にするテクニック",
      "全オブジェクトを一度文字列化してディスクへ保存する永続化処理",
      "オブジェクトの種類を 1 種類に統一して参照コストを下げる変換"
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
      "Concurrency は CPU 専用、Parallelism は GPU 専用の概念で利用場面が完全に分かれる",
      "Concurrency は I/O 処理の別名、Parallelism は CPU 処理の別名であるという分類",
      "両者は完全に同義であり、書籍によって言い換えているだけの用語のゆれ"
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
      "Thread が独立したメモリ空間を持ち、Process が共有メモリで複数スレッドに渡される",
      "両者は完全に同義で、OS と言語ランタイムで呼び方が違っているだけの用語",
      "Process は OS、Thread は VM が作ると一意に決まっており互いに干渉しない"
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
      "Thread をいくつ作っても CPU コア数分だけ自動で並列実行され加速される",
      "Thread はすべて別プロセスとして fork され完全独立に動作する仕組み",
      "Thread は GVL のない VM では完全に禁止されており使用できない制約"
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
      "M 個のプロセスを N 個の CPU コアに 1:1 ピン固定して並列実行する方式",
      "M 個の関数呼び出しを N 段のキャッシュでメモ化する性能最適化の方式",
      "M バイトのメモリを N 本のスレッドに均等割り付ける並列割り付け方式"
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
      "ディスク I/O をファイル単位で並べ替えて順序最適化する OS レイヤ機能",
      "HTTP リクエストのパス単位でルーティング先ハンドラを決める層の呼称",
      "ソースコードのリンタとして静的解析で違反を検出する役割を担う主体"
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
      "全ての変数・引数・戻り値に型を必ず付けることを強制するチェック方式",
      "型を完全に禁止して全部動的型にすることで表現力を高める設計の方式",
      "コンパイル時に型を全部消去して実行時は構造のみで判断する型方式"
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
      "実行時に全ての型を String にキャスト変換して処理を統一する仕組み",
      "型注釈を必ず明示的に書かせ、解析器が正しいか検証する仕組みの総称",
      "型情報を暗号化してバイナリに隠し、リバース難度を上げる技術の総称"
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
      "全ての型を Duck という単一の抽象型に統一し継承で広げるという設計",
      "クラス継承を必ず使うべきという厳格な指針で OO 設計を統一する発想",
      "インターフェースを必ず事前宣言してから実装を書くことを義務付ける方式"
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
      "tracing は常に軽量でオーバーヘッドがなく、sampling は重量級で本番向きではない",
      "両者は完全に同義で、世代によって呼び方が変わっているだけの用語のゆれ",
      "tracing は CPU 使用率専用、sampling はメモリ使用量専用の測定という分け方"
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
      "メモリ使用量の時系列推移（縦軸が時間順序）",
      "ディスクのファイル断片化率と空き領域の可視化",
      "OS のフォントレンダリング時間の分布とバー表示"
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
      "性能評価を必ず線形回帰分析で測定する運用ルール",
      "コミットを直前の安定状態に戻す巻き戻し操作の総称",
      "機械学習の回帰分析そのものを指す統計学用語の一つ"
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
      "データベース専用の SQL 方言（ベンダー固有拡張の総称）の略称表現",
      "ダブルスタンダードライセンスの略で、商用と OSS で条件を変える方式",
      "Ruby 2 系のみで動く旧式機能の集合で、3 系では非推奨扱いの総称"
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
      "関数型言語だけで使える特殊な継承の仕組みで、型システムと統合される",
      "WebAssembly 専用のバイナリファイル形式を表す略称として使われる用語",
      "分散システム専用の RPC プロトコルの一種で、gRPC の後継として普及中"
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
      "静的型をすべて単一の型に統一する最適化方式で、多相を消す副作用あり",
      "変数名の付け方のスタイルガイド（キャメルケース・スネークケース等）",
      "Ruby 専用のクラス継承パターンで、Single Subclass Adapter の略称"
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
      "Lightweight Abstract Language Resolver (GNU 系推進)",
      "Linear Array Lookup Resolver (Bison と併用される)",
      "Left-Associative Left-Recursion parser (Lrama の別名)"
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
      "並列処理に特化した LR パーサ系統のアルゴリズムの一種",
      "LALR で生じる偽の衝突を排除し、LR(1) と同等の言語クラスを扱える改良アルゴリズム",
      "インタプリタ専用に軽量化された LL(1) 系パーサ生成アルゴリズム",
      "LL(k) パーサと同等の言語を扱う再帰下降系の別名アルゴリズム"
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
      "どのプログラミング言語でも解析できる、万能な多言語対応パーサの総称",
      "パーサを使わずに AST をゼロから手書きで書き下ろす実験的アプローチ",
      "CRuby / PicoRuby / mruby など複数の Ruby 実装で共有できる単一のパーサ基盤",
      "正規表現だけで Ruby の全構文を解析するという単純化実験の呼称表現"
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
      "機械学習で構文木をクラスタリングし似たコード群を自動分類する手法",
      "自動運転の経路学習に使われるオートマトン最適化アルゴリズムの総称",
      "Bison が内部で表生成に使う定番の最適化アルゴリズムの呼称表現"
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
      "スレッドの次回スケジュール予定時刻を保持する内部データ構造の名称",
      "プログラムのある時点の「残りの計算」をオブジェクトとして捕まえて後から再開できるもの",
      "require の次に読まれる gem の名前を解決するためのクラスの呼び名",
      "例外階層の親クラスで、全ての例外がここから派生する Ruby の基底"
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
      "最適化を一切行わないコンパイルモードで、デバッグ時の決まり文句",
      "実行速度を敢えて下げるデバッグモードで、競合状態の再現に使われる",
      "JIT が仮定していた前提が崩れた時、最適化済みコードから元のインタプリタ実行に戻す操作",
      "GC のあとに JIT コード全体を破棄して再生成する一括リセット処理"
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
      "ブロックを半分に分けて 2 つのスレッドで同時に並列実行するコンパイラ支援",
      "ブロックを AST ごと分割してディスクに保存するメモリ節約最適化の俗称",
      "長すぎるブロックを強制的に 1 行ずつの小ブロックに畳むリファクタリング"
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
      "C の malloc を Ruby から直接呼び出して生メモリを割り付ける裏技の総称",
      "コードの見た目では生成していないように見えるが、実行時に暗黙に行われるオブジェクト生成",
      "GC によって自動解放されるあらゆるオブジェクトを指す最上位の総称表現",
      "Thread が起動時に暗黙に確保するスタック領域サイズを指す用語の呼称"
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
      "<code>Class#new</code> は現行の CRuby 本体には存在せず、モンキーパッチ経由で追加することだけが可能な幻想のメソッドである",
      "<code>Class#new</code> はクラス定義時のみに呼ばれる特別な隠し初期化フックで、インスタンス化には一切使用されない内部メソッドにあたる",
      "<code>MyClass.new</code> は <code>allocate + initialize</code> に分解でき、割り付け経路と initialize 呼び出しの両面で最適化余地が大きい",
      "<code>Class#new</code> は呼び出しのたびに必ず GC を 1 回走らせる仕様であり、本質的に高速化は不可能だという定説がある"
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
      "赤黒木を採用するとガベージコレクションが完全に不要になり性能が跳ね上がる",
      "赤黒木は本来分散システム専用のデータ構造であり、単体プロセスには不向き",
      "Ruby の組み込み Hash は実は内部的に赤黒木で実装されている（公式仕様）"
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
      "Rust 専用に設計されたメモリアロケータで、C 処理系からは使えない実装",
      "言語処理系に組み込めて、複数の GC アルゴリズムをプラガブルに提供する研究フレームワーク",
      "Ruby 公式の新 GC の内部コード名で、将来 CRuby に標準同梱される予定",
      "メモリを圧縮するだけに特化した Unix コマンドラインツール（gzip 派生）"
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
      "GC 処理すべてをバックグラウンドスレッドに分離して並列実行する仕組み",
      "GC アルゴリズムを JavaScript に移植してブラウザ上で動かす研究の総称",
      "CRuby の GC を差し替え可能な API にし、外部 GC（MMTk 等）を選べるようにする",
      "GC を完全になくしてスタック割り付けのみで済ませる軽量実行モード"
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
      "Ractor 間で GC のタイミングを常に同期させて世界を止める一貫性方式",
      "Ractor を使う全 gem に GC を埋め込みライブラリ単位で管理する案",
      "GC 処理自体を Ractor に任せて本体スレッドからは完全に切り離す方式"
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
      "スタック上のバッファオーバーフローを静的に検出する defensive な手法",
      "スレッドのスタック領域を走査して、オブジェクト参照を GC ルートとして拾い上げる",
      "関数呼び出しの深さを動的に計測するプロファイラ機能の別名表現",
      "コールスタックを全削除して初期化する OS 提供のメンテナンス操作"
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
      "DNS 名前解決を IPv4 と IPv6 で 2 回行って結果を比較する検証アルゴリズム",
      "画像の Eye-tracking を機械学習で最適化するユーザー体験向上手法",
      "IPv6 と IPv4 の両方に並行で接続試行し、早く確立できた方を採用して体感遅延を減らす",
      "TCP の輻輳制御を独自ヒューリスティックで緩和するプロトコル拡張"
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
      "プロセスごとに固定フレームレートを強制する Linux カーネルの機能拡張",
      "PID を暗号化して隠す TLS 拡張仕様（Linux 専用の実装として提供）",
      "CPU コア数ごとの親子プロセス関係をダンプする診断コマンドの名称"
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
      "TCP を別名リネームしただけのレガシープロトコル（実装は旧来と同じ）",
      "UDP 上に構築された多重化・暗号化付きのトランスポート層プロトコルで、HTTP/3 の土台",
      "ネットワーク層（L3）の新プロトコルで IPv4/IPv6 を統合する次世代規格",
      "SSH を置き換える次世代セキュアシェルプロトコルの仕様（IETF 策定中）"
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
      "Ruby 向けの新 GC アルゴリズムの内部コード名（MMTk との互換あり）",
      "SSL/TLS を全面的に置き換える次世代暗号プロトコル（研究段階の案）",
      "低オーバーヘッドで高性能な 3D グラフィックス・計算のためのクロスプラットフォーム API",
      "Linux カーネル内に入った新しいスケジューラ（CFS の後継候補の一つ）"
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
      "大量のリダイレクトを短時間に発生させてブラウザを巻き込む攻撃の総称",
      "RE (Ruby Enterprise) 版を狙った古典的な権限昇格攻撃のパターン表現",
      "ルーターへの DoS 攻撃の一種で、BGP 経路詐称と組み合わせる手法"
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
      "古典的なトロイの木馬型マルウェアをソースコードに直接埋め込む古い手法",
      "Unicode の双方向制御文字を使ってソースコードの見た目と実際の意味を乖離させる",
      "SQL を大量に送信してデータベースを落とす攻撃の 2021 年の新呼称",
      "プロセス間通信を乗っ取って OS 全体を掌握する攻撃手法の総称表現"
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
      "Ruby の Signal.trap の高機能版として OS シグナル処理を拡張するライブラリ",
      "証明書を独自 DB にフォーマット変換して保存するプロプライエタリな仕組み",
      "ソフトウェア成果物への署名・検証・透過ログ化を行う OSS サプライチェーン保護基盤",
      "ブロックチェーンの一種として分散台帳で OSS ビルドを記録するシステム"
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
      "Ruby 用の新しい ORM ライブラリで、ActiveRecord の後継として注目されている",
      "Ruby の GC を根本的に置き換える次世代実装（Shopify 社内で開発中）",
      "Ruby 用のコード整形ツール（RuboCop の後継候補として設計された ver.）"
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
      "Ruby VM の内部命令列（バイトコード）を直接シリアライズしたもの",
      "Ruby コードの型情報を Sorbet 向けに宣言するインターフェースファイル",
      "Rails の起動時初期化設定を定義するアプリケーション設定ファイル",
      "RubyGems のインストール履歴・依存関係を記録する補助ログファイル"
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
      "Ruby の非同期 I/O ライブラリ（async gem の前身として設計された）",
      "Ruby 向け LSP サーバ本体で、補完やジャンプを JSON-RPC で提供する",
      "Sorbet 用の RBI ファイルを、動的な gem コードから自動生成する",
      "JSON Schema を RBS へ変換する軽量な独立ツール（コマンドライン）"
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
      "型エラーが起きた時に自動的に例外を投げるラッパー構文の総称表現",
      "型注釈をコードから強制的に剥がして実行時の型に頼る動作モード",
      "型ファイルへの同時書き込みをロックで制御して整合性を守る機構"
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
      "Lisp 処理系の略称（1970 年代に広く使われた略語の一つ）",
      "エディタと言語サーバの間で、補完・定義ジャンプ・診断などの機能を JSON-RPC でやりとりする共通仕様",
      "Linux のセキュリティポリシー記述言語の略で、SELinux で使われる",
      "ログのストリーミング転送用プロトコル（Syslog の後継として策定中）"
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
      "Rails 専用のリクエストトレーサ（ActionController に組み込まれている）",
      "例外のスタックトレースを整形して色付き表示するだけのユーティリティ",
      "メソッド呼び出し・return・行実行などのイベントをフックして観測できる低水準 API",
      "外部のプロファイラ gem に依存する互換層として存在する補助 API"
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
      "Rails の新しい ORM で、ActiveRecord を置き換える位置づけの gem",
      "Ruby 製のビルドキャッシュシステムで、Bundler と連携して速度向上",
      "RSpec 用のフォーマッタで、HTML / JSON 出力を切り替え可能なツール"
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
      "単体テスト失敗時に回帰テストを追加する運用ルールで、チーム内で合意形成して運用する",
      "入力をランダムに大量生成し、プログラムの満たすべき性質（property）が常に成り立つかを検査する手法",
      "テストケースを YAML で property として記述する DSL で、テーブル駆動に特化した手法",
      "Rails の scoped-property テストの略称で、モデルのスコープ検証に特化した手法"
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
      "ディスクの不良セクタを検出する OS ツールで、fsck の拡張として動作する",
      "ネットワークのパケットを検査する IDS 系ツールで、tcpdump を置き換える",
      "C / C++ のコードを計装し、メモリ破壊や use-after-free などを実行時に検出する",
      "SSH の認証ログを解析するセキュリティツール（fail2ban の後継として注目）"
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
      "Ruby 専用のランタイムバージョン管理ツールで、rbenv の後継候補",
      "クラウドファンディングプラットフォームの一種で、OSS 向けに特化",
      "Bundler の旧称として使われていた gem 管理ツールの古い呼び方"
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
      "Rails 専用の HTTP クライアントライブラリで、HTTP/2 を標準対応している",
      "IRB などで使われる pure Ruby 製の readline 互換ライン編集ライブラリ",
      "正規表現エンジンの新実装で、Onigmo を置き換える候補として提案中",
      "Ractor 間のメッセージキュー専用ライブラリで、型付きキューを提供する"
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
      "Rails で HTTP リクエストをパースして ActionController に渡す入力層",
      "Thread や Fiber の実行スケジュールを決める内部の調停モジュール",
      "Ruby の例外をログ行に整形して出力する軽量フォーマッティング gem",
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
      "JSON Schema の検証とスキーマ駆動のバリデーション機構",
      "Ruby の HTTP/2 クライアントライブラリ（内部で nghttp2 を使用）",
      "Ruby プロセスのメモリ使用量を計測するプロファイリング gem",
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
      "Gemfile にすべての依存を書き込みきった巨大モノリシックプロジェクトの通称",
      "ファイルサイズ警告が出る 100MB 以上の大容量 gem を指す俗称的な呼び名",
      "非公式フォーク gem をまとめて 1 パッケージで配布する gem 戦略の呼称",
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
      "Ruby の GC をチューニングするライブラリで、主に compaction の細かい制御に使われる",
      "Ruby の分散トレーシング gem で、OpenTelemetry と統合して動く現代的な計測ツール",
      "Ruby でメール送受信を扱うライブラリの一つで、MIME マルチパート構成もサポート",
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
      "Ruby の module 機構を段階的に全廃して、クラスベースに統一する長期計画",
      "ファイル名の命名規則を強制する静的解析 linter ルールの新しい呼称表現",
      "Ruby プロセスを Linux の cgroup で隔離するカーネル機能の Ruby バインディング",
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
      "PostgreSQL が 20 年前に使っていた旧接続プロトコルの略称表現",
      "RDB と KVS をまたぐ統一 ORM 標準として IETF で策定中の規格",
      "ActiveRecord をゼロから書き直した別実装の新世代 ORM の呼称",
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
      "非推奨コードを警告ではなくコンパイルエラーに昇格させる厳格モードの総称",
      "非推奨 gem を検出次第自動でアンインストールするセキュリティ機能の俗称",
      "RuboCop 専用の警告レベル指定で、非推奨コードに特化したルール名の呼称",
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
  },

  // ==================================================
  // CATEGORY: RubyKaigi頻出英語（実セッションの英単語「意味」問題）
  // 出典は各問 reference に、speakerdeck のスライド or rubykaigi.org の abstract を明記
  // ==================================================
  {
    id: "vocab-077",
    category: "vocab-en",
    q: "<b>speculatively</b>（副詞）の意味として最も近いのは？",
    options: [
      "確実ではないが先読みして（投機的に）",
      "確実な根拠を示しながら慎重に進める形",
      "計画通りに段階を追って着実に進める形",
      "完全に無作為に手当たり次第選ぶ形式"
    ],
    answer: 0,
    explanation: "<b>speculate</b> は「推測する・当て推量する」。JIT 最適化の文脈では「後で崩れるかもしれない前提で先に最適化する」投機的実行のニュアンスで使われます。",
    reference: { label: "RubyKaigi 2025: Deoptimization / k0kubun のスライド", url: "https://speakerdeck.com/k0kubun/rubykaigi-2025" }
  },
  {
    id: "vocab-078",
    category: "vocab-en",
    q: "<b>invalidate</b>（動詞）の意味として最も近いのは？",
    options: [
      "新しく作成して登録の手続きまで行う動詞",
      "それまで有効だったものを無効にする",
      "一時的に処理を保留して後に再開する動詞",
      "失敗を記録してメトリクスに残す動詞表現"
    ],
    answer: 1,
    explanation: "<b>in-</b>（否定）+ <b>validate</b>（有効化する）。キャッシュや JIT の前提が崩れた時に「以前のものを無効にする」操作で頻出。",
    reference: { label: "RubyKaigi 2025: Deoptimization / k0kubun のスライド", url: "https://speakerdeck.com/k0kubun/rubykaigi-2025" }
  },
  {
    id: "vocab-079",
    category: "vocab-en",
    q: "<b>invalidation</b>（名詞）の意味として最も近いのは？",
    options: [
      "入力を検証する処理（validation）の略称表現",
      "新規登録の処理全体を指す総称表現の一つ",
      "無効化すること（有効状態を取り消す行為）",
      "エラー発生時にログへ出力する一連の挙動"
    ],
    answer: 2,
    explanation: "<b>invalidate</b> の名詞形。JIT / キャッシュで「前提が崩れた状態を反映して無効化する」工程を指します。",
    reference: { label: "RubyKaigi 2025: Deoptimization / k0kubun のスライド", url: "https://speakerdeck.com/k0kubun/rubykaigi-2025" }
  },
  {
    id: "vocab-080",
    category: "vocab-en",
    q: "<b>patching</b>（動名詞）の意味として最も近いのは？",
    options: [
      "一からコードを書き直すこと",
      "部品ごとに関数を呼び分けること",
      "変更を文書にまとめること",
      "コードの一部に修正・つぎあてを当てること"
    ],
    answer: 3,
    explanation: "<b>patch</b>（つぎあて）の ing 形。JIT では実行中のコード列に書き換えを当てる <b>code patching</b> が頻出。",
    reference: { label: "RubyKaigi 2025: Deoptimization / k0kubun のスライド", url: "https://speakerdeck.com/k0kubun/rubykaigi-2025" }
  },
  {
    id: "vocab-081",
    category: "vocab-en",
    q: "コンパイラ / VM 文脈の <b>primitive</b>（名詞）の意味として最も近いのは？",
    options: [
      "それ以上分解できない基本要素・組み込みの部品",
      "原始的で既に使われなくなった旧世代の機能",
      "簡易に試作するためのプロトタイプ版の呼称",
      "商用リリース前のアルファ版を指す開発用呼称"
    ],
    answer: 0,
    explanation: "言語処理系で「これ以上分解できない基礎操作」。Ruby の <code>Primitive.xxx</code> は VM に組み込まれた低水準オペレーションを呼ぶ識別子。",
    reference: { label: "RubyKaigi 2025: Deoptimization / k0kubun のスライド", url: "https://speakerdeck.com/k0kubun/rubykaigi-2025" }
  },
  {
    id: "vocab-082",
    category: "vocab-en",
    q: "<b>competent</b>（形容詞）の意味として最も近いのは？",
    options: [
      "競争心が強くて負けず嫌いな性格",
      "十分な能力がある・一人前の",
      "予算内で収まるだけの程度に済んだ",
      "完璧主義で細部にこだわる性格傾向"
    ],
    answer: 1,
    explanation: "<b>competence</b>（能力）の形容詞。tenderlove の引用「any competent programmer」= 「まともに書ける開発者なら誰でも」。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/speeding-up-instance-variables-in-ruby-3-dot-3" }
  },
  {
    id: "vocab-083",
    category: "vocab-en",
    q: "<b>introductory</b>（形容詞）の意味として最も近いのは？",
    options: [
      "専門書レベルの",
      "難解で手が出ない",
      "入門の・導入的な",
      "中級から上級への橋渡しの"
    ],
    answer: 2,
    explanation: "<b>introduce</b>（紹介する）の形容詞。「introductory computer science classes」= 情報科学の入門クラス。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/speeding-up-instance-variables-in-ruby-3-dot-3" }
  },
  {
    id: "vocab-084",
    category: "vocab-en",
    q: "<b>tremble</b>（動詞）の意味として最も近いのは？",
    options: [
      "笑いながら軽く受け流す動作",
      "じっと動かず堪え忍ぶ動作",
      "怒りをあらわに表情に出す動作",
      "（恐怖や寒さで）震える"
    ],
    answer: 3,
    explanation: "tenderlove の引用「even the stouthearted tremble at the thought…」は「勇敢な者ですらその考えに震える」。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/speeding-up-instance-variables-in-ruby-3-dot-3" }
  },
  {
    id: "vocab-085",
    category: "vocab-en",
    q: "<b>stouthearted</b>（形容詞）の意味として最も近いのは？",
    options: [
      "勇敢な・気丈な",
      "心配性の",
      "慎重でゆっくり動く",
      "体格が大きい"
    ],
    answer: 0,
    explanation: "stout（どっしりとした）+ hearted（心を持った）。文語寄りで「勇敢な」。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/speeding-up-instance-variables-in-ruby-3-dot-3" }
  },
  {
    id: "vocab-086",
    category: "vocab-en",
    q: "<b>reassemble</b>（動詞）の意味として最も近いのは？",
    options: [
      "再度集合させて会議を開く",
      "一度ばらした要素を組み直す",
      "文字列を連結する",
      "データを圧縮する"
    ],
    answer: 1,
    explanation: "re-（再）+ assemble（組み立てる）。パターンマッチで <b>deconstruct</b> → <b>reassemble</b> の対で使われます。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/speeding-up-instance-variables-in-ruby-3-dot-3" }
  },
  {
    id: "vocab-087",
    category: "vocab-en",
    q: "<b>deconstruct</b>（動詞）の意味として最も近いのは？",
    options: [
      "徹底的に破壊して跡形もなくす動作",
      "建物を別の場所に丸ごと移設する動作",
      "構造を分解して個々の要素に取り出す",
      "抽象度を上げて概念としてまとめる動作"
    ],
    answer: 2,
    explanation: "de-（解く）+ construct（組み立てる）。Ruby のパターンマッチでは <code>deconstruct</code> メソッドで「配列 / ハッシュの形に分解する」インターフェース。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/speeding-up-instance-variables-in-ruby-3-dot-3" }
  },
  {
    id: "vocab-088",
    category: "vocab-en",
    q: "<b>violations</b>(名詞・複数)の意味として最も近いのは？",
    options: [
      "設定項目の変更点を記録した差分の総称",
      "履歴として残された操作の記録全般を指す",
      "同じ値が複数回現れる重複状態を表す語",
      "（ルール・制約を）破ること／違反"
    ],
    answer: 3,
    explanation: "<b>violate</b>（破る）の名詞形。Red-Black Tree の文脈では「ルール違反（= 不変条件を破った状態）」。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/speeding-up-instance-variables-in-ruby-3-dot-3" }
  },
  {
    id: "vocab-089",
    category: "vocab-en",
    q: "<b>rebalancing</b>（名詞）の意味として最も近いのは？",
    options: [
      "バランスを取り直すこと（再平衡化）",
      "データをバックアップすること",
      "再計算してキャッシュを作ること",
      "警告を 1 つずつ潰していくこと"
    ],
    answer: 0,
    explanation: "平衡二分木で挿入 / 削除のあとに「再平衡」する処理。一般にも「負荷分散を取り直す」の意味で使われます。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/speeding-up-instance-variables-in-ruby-3-dot-3" }
  },
  {
    id: "vocab-090",
    category: "vocab-en",
    q: "木構造・クラス階層文脈の <b>ancestor</b>（名詞）の意味として最も近いのは？",
    options: [
      "重要な後継者",
      "祖先・上位にある要素",
      "一番若い孫要素",
      "分岐した兄弟要素"
    ],
    answer: 1,
    explanation: "木 / 継承階層で「自分より上の（親側の）要素」。Ruby では <code>Module#ancestors</code> でクラスの祖先連鎖を確認できます。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/speeding-up-instance-variables-in-ruby-3-dot-3" }
  },
  {
    id: "vocab-091",
    category: "vocab-en",
    q: "<b>memoization</b>（名詞）の意味として最も近いのは？",
    options: [
      "メモ帳にアイデアを書き残して整理する行為",
      "記憶力自体を鍛えるトレーニング手法の呼称",
      "一度計算した結果をキャッシュして次回から再利用すること",
      "ログファイルを自動で圧縮保管する処理"
    ],
    answer: 2,
    explanation: "<code>@x ||= expensive</code> のような「一度計算した結果を覚えて次回以降使い回す」パターンの総称。",
    reference: { label: "RubyKaigi 2024: Speeding up Instance Variables with Red-Black Trees / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/speeding-up-instance-variables-in-ruby-3-dot-3" }
  },
  {
    id: "vocab-092",
    category: "vocab-en",
    q: "<b>monomorphic</b>（形容詞）の意味として最も近いのは？",
    options: [
      "複数の異なる型を柔軟に同じロジックで扱える形",
      "呼び出しのたびに毎回コピーを作って返す形",
      "他モジュールから見えない非公開扱いの形",
      "ただ 1 種類の型に特化した（単相の）"
    ],
    answer: 3,
    explanation: "mono-（単一）+ morphic（形）。インラインキャッシュが「1 クラス専用に最適化された状態」が monomorphic、対義は polymorphic / megamorphic。",
    reference: { label: "RubyKaigi 2025: Speeding up Class#new / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/rubykaigi-2025-class-new-a-new-approach" }
  },
  {
    id: "vocab-093",
    category: "vocab-en",
    q: "<b>monkey-patch</b>（動詞）の意味として最も近いのは？",
    options: [
      "既存のクラスやメソッドを実行時に強引に書き換える",
      "複数の修正パッチを 1 つにまとめる統合作業",
      "動作の怪しい箇所にコメントだけ残す手法",
      "猿のマスコットを画面に表示する UI 演出"
    ],
    answer: 0,
    explanation: "Ruby のメタプログラミング伝統芸。便利だが副作用が大きく、近年は <b>refinement</b> や <b>namespace</b> で代替が議論されています。",
    reference: { label: "RubyKaigi 2025: Speeding up Class#new / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/rubykaigi-2025-class-new-a-new-approach" }
  },
  {
    id: "vocab-094",
    category: "vocab-en",
    q: "<b>decouple</b>（動詞）の意味として最も近いのは？",
    options: [
      "2 つの要素を結びつけて組にする",
      "絡んでいた 2 つの要素を切り離して独立させる",
      "2 人 1 組でレビューする文化を作る",
      "冗長な機能を 1 つに統合する"
    ],
    answer: 1,
    explanation: "<b>couple</b>（結合する）の反意。呼び出し側と呼ばれる側を切り離すことで、変更耐性とテスト容易性を上げます。",
    reference: { label: "RubyKaigi 2025: Speeding up Class#new / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/rubykaigi-2025-class-new-a-new-approach" }
  },
  {
    id: "vocab-095",
    category: "vocab-en",
    q: "<b>friction</b>（名詞）の意味として最も近いのは？",
    options: [
      "処理同士が衝突したときに出るエラー通知",
      "リソースが無駄に浪費されている状態の呼称",
      "動きを妨げる摩擦・ひっかかり",
      "処理を加速させる触媒的な働きを持つもの"
    ],
    answer: 2,
    explanation: "物理の摩擦の比喩。RubyKaigi では言語境界（C ↔ Ruby）や開発体験の「引っかかり」を指して使われます。",
    reference: { label: "RubyKaigi 2025: Speeding up Class#new / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/rubykaigi-2025-class-new-a-new-approach" }
  },
  {
    id: "vocab-096",
    category: "vocab-en",
    q: "コンパイラ / VM 最適化文脈の <b>specialized</b>（形容詞）の意味として最も近いのは？",
    options: [
      "一般用途向けにした",
      "複数の役割を兼ねさせた",
      "誰にでも分かるように簡単化した",
      "特定の用途や型に特化して最適化した"
    ],
    answer: 3,
    explanation: "呼び出し元や引数の型に応じて「この場合専用の高速コード」を用意する最適化。splitting と相性が良い概念。",
    reference: { label: "RubyKaigi 2025: Speeding up Class#new / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/rubykaigi-2025-class-new-a-new-approach" }
  },
  {
    id: "vocab-097",
    category: "vocab-en",
    q: "プログラミング文脈の <b>convention</b>（名詞）の意味として最も近いのは？",
    options: [
      "（明文ルールではないが）広く合意されている作法・取り決め",
      "正式な法律条文として制定された取り決め",
      "1 回限りの特例合意として締結される事項",
      "顧客との間で交わす契約書の文面そのもの"
    ],
    answer: 0,
    explanation: "<b>calling convention</b>（呼び出し規約）は「引数はどこに置き、戻り値はどう返すか」など、コンパイラ / CPU 間の取り決め。",
    reference: { label: "RubyKaigi 2025: Speeding up Class#new / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/rubykaigi-2025-class-new-a-new-approach" }
  },
  {
    id: "vocab-098",
    category: "vocab-en",
    q: "<b>callee</b>（名詞）の意味として最も近いのは？",
    options: [
      "呼び出しを行う側",
      "呼び出される側（被呼出者）",
      "電話交換手",
      "呼び出しログを保存するストレージ"
    ],
    answer: 1,
    explanation: "caller（呼び手）に対する <b>callee</b>（呼ばれる側）。関数呼び出し規約では双方を区別して議論します。",
    reference: { label: "RubyKaigi 2025: Speeding up Class#new / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/rubykaigi-2025-class-new-a-new-approach" }
  },
  {
    id: "vocab-099",
    category: "vocab-en",
    q: "<b>downsides</b>(名詞・複数)の意味として最も近いのは？",
    options: [
      "階段の下り方",
      "選ばなかった選択肢の総称",
      "欠点・負の側面",
      "改善が期待できる余地"
    ],
    answer: 2,
    explanation: "<b>down</b>（下）+ <b>side</b>（側面）。上向き（benefit）の反対で、「代わりに払うコスト」的な意味合い。",
    reference: { label: "RubyKaigi 2025: Speeding up Class#new / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/rubykaigi-2025-class-new-a-new-approach" }
  },
  {
    id: "vocab-100",
    category: "vocab-en",
    q: "メモリ / GC 文脈の <b>retained</b>（形容詞）の意味として最も近いのは？",
    options: [
      "新しく再取得したばかりの状態を表す形容",
      "再起動したばかりでまだ安定していない状態",
      "他の状態とまだ同期できていない待ち状態",
      "（解放されず）保持され続けている"
    ],
    answer: 3,
    explanation: "<b>retain</b>（保持する）の過去分詞。<b>retained memory</b> は「GC で回収されずに残り続けているメモリ」。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn のスライド", url: "https://speakerdeck.com/jhawthorn/vernier-a-next-generation-cruby-profiler-rubykaigi-2024" }
  },
  {
    id: "vocab-101",
    category: "vocab-en",
    q: "<b>contention</b>（名詞）の意味として最も近いのは？",
    options: [
      "複数の処理が同じ資源を奪い合っている状態",
      "契約条件を交渉で詰めている最中の段階",
      "議論の中で意見が分かれている争点の呼称",
      "複数の要点を短くまとめた内容の要約文"
    ],
    answer: 0,
    explanation: "<b>contend</b>（争う）の名詞。<b>GVL contention</b> は「スレッドが GVL の取得で詰まっている」状態。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn のスライド", url: "https://speakerdeck.com/jhawthorn/vernier-a-next-generation-cruby-profiler-rubykaigi-2024" }
  },
  {
    id: "vocab-102",
    category: "vocab-en",
    q: "<b>stalled</b>（形容詞）の意味として最も近いのは？",
    options: [
      "必要な処理を終えた",
      "動きが止まって停滞している",
      "並列化に成功した",
      "優先度を下げられた"
    ],
    answer: 1,
    explanation: "<b>stall</b>（失速 / 停まる）の過去分詞。Vernier のスレッド状態区分で「GVL を取ろうとして詰まって動けない」。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn のスライド", url: "https://speakerdeck.com/jhawthorn/vernier-a-next-generation-cruby-profiler-rubykaigi-2024" }
  },
  {
    id: "vocab-103",
    category: "vocab-en",
    q: "<b>postponed</b>（形容詞 / 過去分詞）の意味として最も近いのは？",
    options: [
      "一定間隔で自動的に繰り返し実行される状態",
      "計画そのものが完全に中止された状態の呼称",
      "後の時点に繰り越された・遅延させられた",
      "別のプロセスへ権限ごと委譲された状態"
    ],
    answer: 2,
    explanation: "<b>post-</b>（後）+ <b>pone</b>（置く）。Ruby の <b>postponed job</b> は「安全なタイミングまで実行を遅らせるコールバック」。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn のスライド", url: "https://speakerdeck.com/jhawthorn/vernier-a-next-generation-cruby-profiler-rubykaigi-2024" }
  },
  {
    id: "vocab-104",
    category: "vocab-en",
    q: "ソフトウェア文脈の <b>overhead</b>（名詞）の意味として最も近いのは？",
    options: [
      "画面上部のナビゲーション領域の呼称表現",
      "プロジェクト管理職の人件費を指す俗称",
      "既に解消された技術的負債の積算呼称",
      "本来の処理に加えて必要になる追加コスト"
    ],
    answer: 3,
    explanation: "直訳は「頭上の」だが、ソフトウェア文脈では「本質的でない余分なコスト（CPU 時間・メモリ・遅延）」。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn のスライド", url: "https://speakerdeck.com/jhawthorn/vernier-a-next-generation-cruby-profiler-rubykaigi-2024" }
  },
  {
    id: "vocab-105",
    category: "vocab-en",
    q: "<b>instrumentation</b>（名詞）の意味として最も近いのは？",
    options: [
      "観測・計測のためにコードにフックを仕込む仕組み",
      "楽器の構成や編成を決めるアレンジ作業の総称",
      "自動化スクリプトの実行履歴を管理する仕組み",
      "新規に導入される機材の台帳登録と管理の仕組み"
    ],
    answer: 0,
    explanation: "<b>instrument</b>（計器、計測する）の名詞形。Vernier の「GC instrumentation」は GC 挙動を計測するためのフック群。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn のスライド", url: "https://speakerdeck.com/jhawthorn/vernier-a-next-generation-cruby-profiler-rubykaigi-2024" }
  },
  {
    id: "vocab-106",
    category: "vocab-en",
    q: "<b>dedicated</b>（形容詞）の意味として最も近いのは？",
    options: [
      "複数人で共有して使い回す運用モードの呼称",
      "特定の用途・相手のために専用になっている",
      "自発的に辞退して役割から外れた状態の呼称",
      "半ば壊れていて完全には機能しない状態の呼称"
    ],
    answer: 1,
    explanation: "<b>dedicate</b>（捧げる）の過去分詞。<b>dedicated thread</b> は「他用途と共有せず特定タスク専用に割り当てたスレッド」。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn のスライド", url: "https://speakerdeck.com/jhawthorn/vernier-a-next-generation-cruby-profiler-rubykaigi-2024" }
  },
  {
    id: "vocab-107",
    category: "vocab-en",
    q: "ロック文脈の <b>acquire</b>（動詞）の意味として最も近いのは？",
    options: [
      "厳しく尋問して問いただす動作",
      "仕様を相手に要求する交渉動作",
      "取得する・獲得する",
      "省略してスキップする動作"
    ],
    answer: 2,
    explanation: "「ロックを acquire する」= 獲得する。反意は <b>release</b>（解放）。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn のスライド", url: "https://speakerdeck.com/jhawthorn/vernier-a-next-generation-cruby-profiler-rubykaigi-2024" }
  },
  {
    id: "vocab-108",
    category: "vocab-en",
    q: "<b>methodologies</b>(名詞・複数)の意味として最も近いのは？",
    options: [
      "個別のメソッド実装をまとめた手続き集",
      "開発チームのメンバー構成と役割分担の総称",
      "バグ報告を書くためのフォーマットの総称",
      "体系化された方法論（組織的な進め方）"
    ],
    answer: 3,
    explanation: "<b>method</b>（方法）+ <b>-ology</b>（〜学）。abstract の「innovative methodologies」は「新しい計測の方法論」。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn の abstract", url: "https://rubykaigi.org/2024/presentations/jhawthorn.html#day1" }
  },
  {
    id: "vocab-109",
    category: "vocab-en",
    q: "<b>enhanced</b>（形容詞）の意味として最も近いのは？",
    options: [
      "機能や性能が拡張・強化された",
      "一時的に使えなくなった無効状態の形容",
      "無駄を削り単純化された軽量状態の形容",
      "暗号化されて中身が見えない安全状態の形容"
    ],
    answer: 0,
    explanation: "<b>enhance</b>（高める）の過去分詞。「enhanced visibility」は「より見えやすくなった観測性」。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn の abstract", url: "https://rubykaigi.org/2024/presentations/jhawthorn.html#day1" }
  },
  {
    id: "vocab-110",
    category: "vocab-en",
    q: "<b>essential</b>（形容詞）の意味として最も近いのは？",
    options: [
      "派手で目を引く",
      "不可欠で欠かせない",
      "余裕があれば入れたい",
      "初心者向けに調整された"
    ],
    answer: 1,
    explanation: "<b>essence</b>（本質）の形容詞。「A good profiler is essential」= 良いプロファイラは必須。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn の abstract", url: "https://rubykaigi.org/2024/presentations/jhawthorn.html#day1" }
  },
  {
    id: "vocab-111",
    category: "vocab-en",
    q: "<b>innovative</b>（形容詞）の意味として最も近いのは？",
    options: [
      "伝統的で安定した",
      "古典的で定評ある",
      "革新的で新機軸の",
      "廉価で使いやすい"
    ],
    answer: 2,
    explanation: "<b>innovate</b>（革新する）の形容詞。「innovative methodologies」= 斬新な方法論。",
    reference: { label: "RubyKaigi 2024: Vernier / jhawthorn の abstract", url: "https://rubykaigi.org/2024/presentations/jhawthorn.html#day1" }
  },
  {
    id: "vocab-112",
    category: "vocab-en",
    q: "セキュリティ文脈の <b>mitigate</b>（動詞）の意味として最も近いのは？",
    options: [
      "問題の根本原因を特定して完全に取り除く",
      "起きた事実を完全になかったことに書き換える",
      "本来の責任を外部や他者へ押しつけて回避する",
      "被害・リスクを和らげる・緩和する"
    ],
    answer: 3,
    explanation: "<b>mitigation</b>（緩和）。脆弱性対策で「mitigate these risks」=「リスクを緩和する」は常套句。",
    reference: { label: "RubyKaigi 2023: Eliminating ReDoS with Ruby 3.2 / lmt_swallow の abstract", url: "https://rubykaigi.org/2023/presentations/lmt_swallow.html#day2" }
  },
  {
    id: "vocab-113",
    category: "vocab-en",
    q: "<b>exponential</b>（形容詞）の意味として最も近いのは？",
    options: [
      "指数関数的な（急激に増大する）",
      "値に対して線形に比例して増える性質",
      "入力にかかわらず定数で全く変わらない性質",
      "一方が増えると他方が減る反比例の性質"
    ],
    answer: 0,
    explanation: "ReDoS の「exponential time complexity」=「入力長に対して実行時間が指数的に伸びる」危険性を表現。",
    reference: { label: "RubyKaigi 2023: Eliminating ReDoS with Ruby 3.2 / lmt_swallow の abstract", url: "https://rubykaigi.org/2023/presentations/lmt_swallow.html#day2" }
  },
  {
    id: "vocab-114",
    category: "vocab-en",
    q: "<b>vulnerabilities</b>(名詞・複数)の意味として最も近いのは？",
    options: [
      "開発上どうしても必要になる必須要件の総称",
      "攻撃されうる弱点・脆弱性",
      "品質改善のために推奨されるテストケース集",
      "もう不要になった設定や記述の集合の総称"
    ],
    answer: 1,
    explanation: "<b>vulnerable</b>（傷つきやすい）の名詞形。セキュリティでは「脆弱性」の定番訳。",
    reference: { label: "RubyKaigi 2023: Eliminating ReDoS with Ruby 3.2 / lmt_swallow の abstract", url: "https://rubykaigi.org/2023/presentations/lmt_swallow.html#day2" }
  },
  {
    id: "vocab-115",
    category: "vocab-en",
    q: "<b>problematic</b>（形容詞）の意味として最も近いのは？",
    options: [
      "簡単な手順で解決できる見込みの高い状態",
      "こちらの作業に一切関係しない独立した状態",
      "問題を孕んでいる・ややこしい",
      "文献の上でだけ言及される理論上の状態"
    ],
    answer: 2,
    explanation: "「problematic patterns」= 問題を起こしやすい（破滅的バックトラックを誘発する）正規表現パターン。",
    reference: { label: "RubyKaigi 2023: Eliminating ReDoS with Ruby 3.2 / lmt_swallow の abstract", url: "https://rubykaigi.org/2023/presentations/lmt_swallow.html#day2" }
  },
  {
    id: "vocab-116",
    category: "vocab-en",
    q: "<b>suitable</b>（形容詞）の意味として最も近いのは？",
    options: [
      "定時の・時間にかなった運用条件を表す形容",
      "見た目や色合いが合っていない状態の形容",
      "繰り返し再利用可能な汎用性ある状態の形容",
      "ふさわしい・その用途に適した"
    ],
    answer: 3,
    explanation: "「suitable for continuous profiling」=「常時プロファイリングに耐えうる」。",
    reference: { label: "RubyKaigi 2025: SDB / yfractal の abstract", url: "https://rubykaigi.org/2025/presentations/yfractal.html" }
  },
  {
    id: "vocab-117",
    category: "vocab-en",
    q: "<b>taxonomy</b>（名詞）の意味として最も近いのは？",
    options: [
      "分類体系（カテゴリに分けて整理した枠組み）",
      "税制の一覧をまとめた公式資料の総称表現",
      "専門用語を解説した辞書的な参考資料の呼称",
      "動植物の飼育方法を解説した手引きの呼称"
    ],
    answer: 0,
    explanation: "生物分類由来。talk「A taxonomy of Ruby calls」は「Ruby のメソッド呼び出しを種類ごとに分類した体系」。",
    reference: { label: "RubyKaigi 2025: A taxonomy of Ruby calls / alanwusx", url: "https://rubykaigi.org/2025/presentations/alanwusx.html" }
  },
  {
    id: "vocab-118",
    category: "vocab-en",
    q: "<b>dissecting</b>（動名詞）の意味として最も近いのは？",
    options: [
      "内容を 2 つに折りたたんで縮めること",
      "切り分けて細部を観察すること（解剖・詳細分析）",
      "そのまま素通りして通り過ぎること",
      "要点を手短にまとめて共有すること"
    ],
    answer: 1,
    explanation: "<b>dissect</b>（解剖する）の ing 形。talk「Dissecting and Reconstructing Ruby Syntactic Structures」は「Ruby の構文構造を分解してもう一度組み立てる」。",
    reference: { label: "RubyKaigi 2025: Dissecting and Reconstructing Ruby Syntactic Structures / ydah_", url: "https://rubykaigi.org/2025/presentations/ydah_.html" }
  },
  {
    id: "vocab-119",
    category: "vocab-en",
    q: "<b>unleashing</b>（動名詞）の意味として最も近いのは？",
    options: [
      "綱でつないでおくこと",
      "段階的に止めていくこと",
      "押さえていた力を解き放つこと",
      "厳密な審査にかけること"
    ],
    answer: 2,
    explanation: "<b>un-</b>（解く）+ <b>leash</b>（綱）。「Unleashing the Power of Asynchronous HTTP」=「非同期 HTTP の潜在能力を解き放つ」。",
    reference: { label: "RubyKaigi 2023: Unleashing the Power of Asynchronous HTTP with Ruby / ioquatix", url: "https://rubykaigi.org/2023/presentations/ioquatix.html#day3" }
  },
  {
    id: "vocab-120",
    category: "vocab-en",
    q: "<b>inception</b>(名詞)の意味として最も近いのは？",
    options: [
      "廃止の手順",
      "完成形",
      "検証段階",
      "始まり・発端"
    ],
    answer: 3,
    explanation: "<b>inceptive</b>（開始の）の名詞。「from inception to production」=「構想（発端）から本番投入まで」の決まり文句。",
    reference: { label: "RubyKaigi 2023: Optimizing YJIT's Performance, from Inception to Production / maximecb", url: "https://rubykaigi.org/2023/presentations/maximecb.html#day2" }
  },
  {
    id: "vocab-121",
    category: "vocab-en",
    q: "ベンチマーク文脈の <b>warmups</b>(名詞・複数)の意味として最も近いのは？",
    options: [
      "本計測の前に実施するならし実行",
      "温度計測のための予熱機器",
      "事前に失敗させるためのダミー試験",
      "ユーザー向けの挨拶動画"
    ],
    answer: 0,
    explanation: "JIT や CPU キャッシュを温めるために、ベンチマークの前に <b>warmup run</b> を行うのが定石。",
    reference: { label: "RubyKaigi 2025: Speeding up Class#new / tenderlove のスライド", url: "https://speakerdeck.com/tenderlove/rubykaigi-2025-class-new-a-new-approach" }
  }
];
