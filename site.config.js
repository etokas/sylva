const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Sylva",
    image: "/notion-avatar-1702909452117.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Développeur",
    bio: "Je suis développeur Full Stack spécialisé en PHP & ReactJs",
    email: "etosylva@yahoo.fr",
    linkedin: "sylva-etokabeka-29a5b56a",
    github: "etokas",
    instagram: "",
  },
  projects: [
    {
      name: `etokas`,
      href: "https://github.com/etokas",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Sylva",
    description: "Bienvenue!",
  },

  // CONFIG configration (required)
  link: "https://eto-sylva.tech",
  since: "", // If leave this empty, current year will be used.
  lang: "fr-FR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://eto-sylva.tech", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
