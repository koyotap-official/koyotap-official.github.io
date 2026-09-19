# KoyoTap 検索・AI検索の運用メモ

## 今回サイトに入れたもの

- トップページから各ゲームへ、ゲームの種類・遊び方・無料・ブラウザ対応を説明するテキストリンクを追加
- `Block Crush` と `Cube Merge Shot` に `VideoGame` + `WebApplication` の JSON-LD を追加
- ゲーム一覧と各ゲームページに `BreadcrumbList` / `ItemList` を追加
- `robots.txt` で Googlebot、Google-Extended、OAI-SearchBot、Claude-SearchBot、Claude-User を許可
- `sitemap.xml` の更新日を更新

構造化データは検索結果での表示を補助する情報で、順位やリッチリザルトの表示を保証するものではありません。構造化データの内容はページ上で実際に見える内容と一致させます。

## Search Console の初回設定

公開後、次の順に一度だけ実施します。

1. Search Console で `https://koyotap.com/` の URL プレフィックスプロパティ、または `koyotap.com` のドメインプロパティを追加する。
2. 所有権を確認する。HTML メタタグ方式を使う場合は、発行された `google-site-verification` の値を `index.html` に追加してから再公開する。値はこのリポジトリに推測で書かない。
3. 「サイトマップ」に `https://koyotap.com/sitemap.xml` を送信する。
4. URL 検査で次の4 URLを確認し、公開URLの検査結果が正常ならインデックス登録をリクエストする。

   - `https://koyotap.com/`
   - `https://koyotap.com/play/`
   - `https://koyotap.com/play/block-crush/`
   - `https://koyotap.com/play/cube-merge-shot/`

5. 数日から数週間後に「検索パフォーマンス」で、クエリ・国・ページ・検索での見え方を確認する。

Search Console に登録しただけで上位表示されるわけではありません。まずはインデックス登録、次に表示回数、最後にクリック率とゲーム開始数の順で見ます。

## 追う検索意図

短期的には、サイトが実際に提供している内容に合わせて次のような検索意図を測定します。

- 日本語: `無料 ブロックパズル ブラウザ`, `ブロックゲーム 無料`, `数字 マージゲーム ブラウザ`
- 英語: `free block puzzle game browser`, `block game online`, `number merge game browser`

「最新の流行ゲーム」のような広すぎる検索語について、根拠のないランキングや「今一番人気」といった表現を追加しません。実際の更新、遊び方、対応端末、無料かどうかなど、KoyoTapが確認できる情報を継続的に更新します。

## ChatGPT・Claude・Gemini について

- ChatGPT Search は `OAI-SearchBot` をブロックしないことが公式案内されています。流入は `utm_source=chatgpt.com` で確認できます。
- Claude は `Claude-SearchBot` と `Claude-User` がユーザー向け検索・取得に関係します。どちらも robots.txt で許可しています。
- Gemini / Google のAI検索機能は、通常の Google Search のクロール・インデックス・品質シグナルが基本です。Google-Extended も許可しています。GoogleはAI検索のための特別なファイルや専用構造化データを必須としていません。

どのサービスも「特定語で必ず上位」を保証する登録制度はありません。公開ページがクロール可能で、ページごとに一つの検索意図へ答え、信頼できる外部サイトからもリンクされる状態を積み上げます。

## 多言語化のルール

現在のサイトは JA / EN の表示切り替えを持っています。新しい国・言語を本格的に狙う場合は、次の形で専用URLを作ります。

- 例: `/en/`, `/ko/`, `/es/` のように言語ごとに独立したURLを作る
- 各URLは本文・タイトル・descriptionをその言語だけで記述する
- 各ページに自己 canonical と相互 `hreflang` を付ける
- 翻訳済みページだけを sitemap に入れる
- Cookie やブラウザ言語だけで内容を切り替えて、検索エンジンに一つのURLで全言語を見せる構成にはしない

対象言語は、まず Search Console の国・検索語データとゲームの利用者が多い地域から選びます。翻訳品質を維持できない言語を一度に増やすより、英語を完成させてから段階的に増やします。

## 公開後チェック

- `https://koyotap.com/robots.txt` が 200 で返り、意図しない `Disallow` がない
- `https://koyotap.com/sitemap.xml` が 200 で返り、canonical URLだけを列挙している
- 各ゲームページがゲーム開始前でもタイトル・説明・遊び方をHTML本文で読める
- Search Console のURL検査で「クロール済みページを表示」を確認する
- 構造化データテストで JSON-LD のエラーがない
- モバイルでプレイボタン、ゲーム本体、別ゲームへのリンクが動く
