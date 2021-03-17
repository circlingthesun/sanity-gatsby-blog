export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6051dcff6bff096a92cf4ae0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-sa5s6m5m",
                  apiId: "e538b9f1-f414-4974-ac1a-9d4a58d21ba7",
                },
                {
                  buildHookId: "6051dcff391e92651036379e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-kvsvex57",
                  apiId: "2c68babf-84f7-49c6-a6d5-e884520dada9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/circlingthesun/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-kvsvex57.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
