import ArticleCard from "./articleCard";

const articleData = [
  {
    title: "どうしてもnuxtでaxiosが動かない時の留意点",
    content: "A reminder that I got stuck on axios when I was studying Nuxt.js",
    link: "https://zenn.dev/ryuji_cre8ive/articles/dc42afd40a1147",
  },
  {
    title: "nuxtでログイン処理後の動的リンク作成",
    content: "How to dynamically change links after login process in Nuxt",
    link: "https://zenn.dev/ryuji_cre8ive/articles/2c998bc7010975",
  },
  {
    title: "GoのJSON扱いに慣れない全人類へ",
    content:
      "Memorandum because I had trouble handling JSON when I was studying Golang.",
    link: "https://zenn.dev/ryuji_cre8ive/articles/12c452bde74f54",
  },
  {
    title: "Golang makeについての備忘録",
    content:
      "A reminder when I was curious about Golang make and looked into it",
    link: "https://zenn.dev/ryuji_cre8ive/articles/0d33489819b09d",
  },
  {
    title:
      "もうfatal: could not create work tree dir ‘zzzzzz’が出ても怖くないもん！！！",
    content: "Memorandum regarding the error I got when I git cloned.",
    link: "https://zenn.dev/ryuji_cre8ive/articles/35763d4f8f557d",
  },
  {
    title: "VScodeで定義ジャンプできないとき",
    content:
      "A reminder that I looked into the problem when I couldnt jump definitions in VScode",
    link: "https://zenn.dev/ryuji_cre8ive/articles/0e0ba629341cc8",
  },
  {
    title: "Next * urql * code-genでフロント開発してみた際の備忘録",
    content:
      "Memorandum on front-end development with Next.js * urql * code-gen",
    link: "https://zenn.dev/ryuji_cre8ive/articles/847a653130c45e",
  },
  {
    title: "GCPを座学的に学習した際のメモ",
    content: "Notes from a classroom study of GCP",
    link: "https://zenn.dev/ryuji_cre8ive/articles/0833654ec5f592",
  },
  {
    title: "zshに変えて変なコマンド打ったらパスが通らなくなった話",
    content:
      "The story of how I changed to zsh and typed a strange command and the path didnt go through.",
    link: "https://qiita.com/ryuji_vlog/items/64d6583efcd892ad9e41",
  },
  {
    title: "SlackでAPIを叩くときのボットのあれこれ",
    content: "Bot this and that when hitting the API in Slack.",
    link: "https://qiita.com/ryuji_vlog/items/880369eec9d1e1cbdafc",
  },
  {
    title: "Nuxt.jsが流行っているらしいので使用してみた件",
    content: "The case of using Nuxt.js, which is apparently very popular",
    link: "https://qiita.com/ryuji_vlog/items/d946ff3f145c057d379f",
  },
  {
    title: 'MySQLで"Unknown column `xxx` in `where clause`"が出たときの対処法',
    content:
      'How to deal with "Unknown column `xxx` in `where clause`" in MySQL',
    link: "https://qiita.com/ryuji_vlog/items/5d3860ed57717efb2fc3",
  },
  {
    title: "モジュール系のエラーが出たとき",
    content: "When a module-based error occurs",
    link: "https://qiita.com/ryuji_vlog/items/1887bb74ab651d642bfa",
  },
  {
    title: "pm2のインストールではまってしまった人へ",
    content: "For those who are stuck in the pm2 installation.",
    link: "https://qiita.com/ryuji_vlog/items/8e1faf244e1980c72385",
  },
  {
    title: "Next.js * GraphQL * Prismaで詰まった話(relation)",
    content: "Next.js * GraphQL * Stuck on Prisma (relation)",
    link: "https://qiita.com/ryuji_vlog/items/ccdd76885b46f7924558",
  },
];

export default function Articles() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-center my-4">
        {articleData.map((data) => (
          <ArticleCard
            key={data.title}
            title={data.title}
            content={data.content}
            link={data.link}
          />
        ))}
      </div>
    </>
  );
}
