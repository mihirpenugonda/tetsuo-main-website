import { getNewsData, NewsData } from "@/lib/news";

export default function NewsTimeline() {
  const newsData: NewsData = getNewsData();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-aperture text-3xl font-semibold text-transparent md:text-4xl">
              {newsData.title}
            </h2>
            <p className="text-lg text-indigo-200/65">{newsData.description}</p>
          </div>

          {/* Items */}
          <div className="-my-4 mx-auto max-w-3xl md:-my-6">
            {newsData.items.map((item, index) => (
              <div key={item.date} className="relative py-4 pl-24 md:py-6">
                <div className="pl-2">
                  <div className="text-indigo-400 pb-2">{item.date}</div>
                  <div className="mb-2 flex items-center">
                    {/* Category Badge */}
                    <div
                      className={`absolute left-0 flex items-center `}
                    >
                      <div className="inline-flex rounded-full bg-indigo-900/25 px-2.5 py-1 text-sm font-semibold text-indigo-400">
                        {item.category}
                      </div>
                    </div>
                    {/* Timeline dot and line */}
                    <div
                      className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                      aria-hidden="true"
                    />
                    {/* Title */}
                    <h4 className="font-aperture text-xl font-semibold text-gray-200">
                      {item.title}
                    </h4>
                  </div>
                  {/* Description */}
                  <p className="text-[1rem] text-indigo-200/65">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
