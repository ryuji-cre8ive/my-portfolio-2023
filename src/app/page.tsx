export const metadata = {
  title: "ryuji-portfolio",
  twitter: {
    card: "summary_large_image",
    title: "Ryuji-portfolio",
    description: "Portfolio made by ryuji-cre8ive",
    creator: "@ryuji-cre8ive",
    images: ["https://ryuji-portfolio-2023.vercel.app/logo.png"],
  },
};

export default function Home() {
  return (
    <>
      <main>
        <div className="w-10/12 bg-white h-full my-0 mx-auto rounded-lg p-8 text-left mt-5 mb-10">
          <h1 className="text-3xl border-b-2 decoration-gray block decoration-2 mb-1 mt-6 mb-3">
            Who is✋
          </h1>
          <h2 className="text-xl">
            <span className="text-cyan-400">&quot;Name&quot;</span> :{" "}
            <span className="text-emerald-400">&quot;Ryuji Kokubu&quot;</span>
          </h2>
          <h2 className="text-xl">
            <span className="text-cyan-400">&quot;Hobby&quot;</span>:{" "}
            <span className="text-fuchsia-400">[</span>
            <ul>
              <li className="indent-4">
                <span className="text-emerald-400">
                  &quot;Watching the movie&quot;
                </span>
                ,
              </li>
              <li className="indent-4">
                <span className="text-emerald-400">
                  &quot;Playing the game&quot;
                </span>
                ,
              </li>
              <li className="indent-4">
                <span className="text-emerald-400">
                  &quot;Go Sauna and Hot spring&quot;
                </span>
                ,
              </li>
            </ul>
            <span className="text-fuchsia-400">]</span>
          </h2>
          <h1 className="text-3xl border-b-2 decoration-gray block decoration-2 mb-1 mt-6 mb-3">
            Technology Stacks💡
          </h1>
          <h2 className="text-xl">
            <span className="text-cyan-400">&quot;Front-end&quot;</span>:{" "}
            <span className="text-fuchsia-400">[</span>
            <ul>
              <li className="indent-4">
                <span className="text-emerald-400">&quot;Next.js&quot;</span>,
              </li>
              <li className="indent-4">
                <span className="text-emerald-400">&quot;TypeScript&quot;</span>
                ,
              </li>
              <li className="indent-4">
                <span className="text-emerald-400">&quot;GraphQL&quot;</span>,
              </li>
            </ul>
            <span className="text-fuchsia-400">]</span>,
          </h2>
          <h2 className="text-xl">
            <span className="text-cyan-400">&quot;Back-end&quot;</span>:{" "}
            <span className="text-fuchsia-400">[</span>
            <ul>
              <li className="indent-4">
                <span className="text-emerald-400">&quot;Golang&quot;</span>,
              </li>
              <li className="indent-4">
                <span className="text-emerald-400">
                  &quot;Express(TypeScript)&quot;
                </span>
                ,
              </li>
              <li className="indent-4">
                <span className="text-emerald-400">&quot;Python&quot;</span>,
              </li>
            </ul>
            <span className="text-fuchsia-400">]</span>,
          </h2>
          <h2 className="text-xl">
            <span className="text-cyan-400">&quot;Infrastructure&quot;</span>:{" "}
            <span className="text-fuchsia-400">&#123;</span>
            <ul>
              <li className="indent-4">
                <span className="text-cyan-400">&quot;GCP&quot;</span>:{" "}
                <span className="text-blue-500">[</span>
                <li className="indent-8">
                  <span className="text-emerald-400">
                    &quot;App Engine&quot;
                  </span>
                  ,
                </li>
                <li className="indent-8">
                  <span className="text-emerald-400">
                    &quot;Cloud Run&quot;
                  </span>
                  ,
                </li>
                <li className="indent-8">
                  <span className="text-emerald-400">
                    &quot;Cloud Build&quot;
                  </span>
                  ,
                  <li className="indent-8">
                    <span className="text-emerald-400">
                      &quot;Cloud Functions&quot;
                    </span>
                    ,
                  </li>
                  <li className="indent-8">
                    <span className="text-emerald-400">
                      &quot;Artifact Registry&quot;
                    </span>
                    ,
                  </li>
                </li>
              </li>
            </ul>
            <span className="text-blue-500">]</span>
            <span className="text-fuchsia-400">&#125;</span>,
          </h2>
          <h1 className="text-3xl border-b-2 decoration-gray block decoration-2 mb-1 mt-6 mb-3">
            Track record🥇
          </h1>
          <h2 className="text-xl">
            <span className="text-cyan-400">&quot;Work&quot;</span>:{" "}
            <span className="text-fuchsia-400">&#123;</span>
            <ul>
              <li className="indent-4">
                <span className="text-cyan-400">
                  &quot;Cafe Latte llc&quot;
                </span>
                : <span className="text-blue-500">[</span>
                <li className="indent-8">
                  <span className="text-emerald-400">
                    &quot;Front-end leader&quot;
                  </span>
                  ,
                </li>
                <li className="indent-8">
                  <span className="text-emerald-400">&quot;Nuxt.js&quot;</span>,
                </li>
                <li className="indent-8">
                  <span className="text-emerald-400">&quot;Django&quot;</span>,
                  <li className="indent-8">
                    <span className="text-emerald-400">
                      &quot;EC2(AWS)&quot;
                    </span>
                    ,
                  </li>
                </li>
              </li>
            </ul>
            <span className="text-blue-500">]</span>,{" "}
            <li className="indent-4 list-none">
              <span className="text-cyan-400">&quot;REALITY Inc&quot;</span>:{" "}
              <span className="text-blue-500">[</span>
              <li className="indent-8">
                <span className="text-emerald-400">
                  &quot;FullStack-engineer&quot;
                </span>
                ,
              </li>
              <li className="indent-8">
                <span className="text-emerald-400">&quot;Vue.js&quot;</span>,
              </li>
              <li className="indent-8">
                <span className="text-emerald-400">&quot;Golang&quot;</span>,
                <li className="indent-8">
                  <span className="text-emerald-400">&quot;GKE(GCP)&quot;</span>
                  ,
                </li>
              </li>
            </li>
            <span className="text-blue-500">]</span>
            <span className="text-fuchsia-400">&#125;</span>
          </h2>
          <h1 className="text-3xl border-b-2 decoration-gray block decoration-2 mb-1 mt-6 mb-3">
            Postscript📚
          </h1>
          <h2>
            とまあ、こんな偉そうに書いたんですけど、ゆる〜くよろしくお願いします〜🐱
          </h2>
        </div>
      </main>
    </>
  );
}
