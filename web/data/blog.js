// Static content for the Inspiration blog. Add a new object to this array
// to publish a post — no admin panel or database involved. `bodyMarkdown`
// is rendered with react-markdown on the post page.

const blogPosts = [
  {
    _id: "five-ideas-for-a-small-kitchen",
    title: "Five ideas for a small kitchen",
    slug: "five-ideas-for-a-small-kitchen",
    excerpt: "Making the most of a compact kitchen doesn't mean compromising on style.",
    coverImage: {
      url: "/images/gallery/hazel-grove-kitchen.jpg",
      alt: "Compact kitchen design",
    },
    bodyMarkdown: "## Plan vertically\n\nUse the full height of the room.",
    publishedAt: "2026-09-14T21:55:54.558Z",
  },
];

export default blogPosts;
