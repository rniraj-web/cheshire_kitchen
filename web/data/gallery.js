// Static content for the Project Gallery page. Add an object to this array
// (and drop the photo into public/images/gallery/) to add a project — no
// admin panel or database involved. `title` is shown as the card's overlay
// title; `category` must be "kitchen" or "bedroom" to land in the right
// carousel.

const galleryProjects = [
  {
    _id: "hazel-grove-kitchen",
    title: "A Modern Hazel Grove Kitchen",
    category: "kitchen",
    coverImage: {
      url: "/images/gallery/hazel-grove-kitchen.jpg",
      alt: "Modern grey kitchen with island",
    },
  },
  {
    _id: "rational-2-cambia",
    title: "Rational",
    category: "kitchen",
    coverImage: { url: "/images/gallery/rational-2-cambia.jpg", alt: "Rational 'Cambia' kitchen in soft grey" },
  },
  {
    _id: "rational-3-tio",
    title: "Rational",
    category: "kitchen",
    coverImage: { url: "/images/gallery/rational-3-tio.jpg", alt: "Rational 'Tio' kitchen in bronze woodgrain" },
  },
  {
    _id: "callerton-1",
    title: "Callerton",
    category: "kitchen",
    coverImage: { url: "/images/gallery/callerton-1.jpg", alt: "Pale stone Callerton shaker kitchen island" },
  },
  {
    _id: "callerton-2",
    title: "Callerton",
    category: "kitchen",
    coverImage: { url: "/images/gallery/callerton-2.jpg", alt: "Bold magenta Callerton shaker kitchen" },
  },
  {
    _id: "callerton-3",
    title: "Callerton",
    category: "kitchen",
    coverImage: { url: "/images/gallery/callerton-3.jpg", alt: "Dark green Callerton shaker kitchen island" },
  },
  {
    _id: "callerton-4",
    title: "Callerton",
    category: "kitchen",
    coverImage: { url: "/images/gallery/callerton-4.jpg", alt: "Sage green Callerton shaker kitchen" },
  },
  {
    _id: "snaidero-1",
    title: "Snaidero",
    category: "kitchen",
    coverImage: { url: "/images/gallery/snaidero-1.jpg", alt: "Matt black Snaidero kitchen island" },
  },
  {
    _id: "snaidero-2",
    title: "Snaidero",
    category: "kitchen",
    coverImage: { url: "/images/gallery/snaidero-2.jpg", alt: "White high-gloss Snaidero kitchen" },
  },
  {
    _id: "snaidero-3",
    title: "Snaidero",
    category: "kitchen",
    coverImage: { url: "/images/gallery/snaidero-3.jpg", alt: "Slate-blue Snaidero kitchen island" },
  },
  {
    _id: "snaidero-4",
    title: "Snaidero",
    category: "kitchen",
    coverImage: { url: "/images/gallery/snaidero-4.jpg", alt: "Sage green Snaidero kitchen island" },
  },
  {
    _id: "ewe-1",
    title: "Ewe",
    category: "kitchen",
    coverImage: { url: "/images/gallery/ewe-1.jpg", alt: "Walnut and taupe Ewe kitchen island" },
  },
  {
    _id: "ewe-2",
    title: "Ewe",
    category: "kitchen",
    coverImage: { url: "/images/gallery/ewe-2.jpg", alt: "Matt charcoal Ewe kitchen island" },
  },
  {
    _id: "ewe-3",
    title: "Ewe",
    category: "kitchen",
    coverImage: { url: "/images/gallery/ewe-3.jpg", alt: "Warm taupe and walnut Ewe kitchen" },
  },
  {
    _id: "ewe-4",
    title: "Ewe",
    category: "kitchen",
    coverImage: { url: "/images/gallery/ewe-4.jpg", alt: "Light oak-effect Ewe kitchen island" },
  },
  {
    _id: "daval-1-como",
    title: "Daval",
    category: "bedroom",
    coverImage: { url: "/images/gallery/daval-1-como.jpg", alt: "Daval 'Como' fitted bedroom in oak and gloss cashmere" },
  },
  {
    _id: "daval-2-soho",
    title: "Daval",
    category: "bedroom",
    coverImage: { url: "/images/gallery/daval-2-soho.jpg", alt: "Daval 'Soho' fitted wardrobes in talpa and blue" },
  },
  {
    _id: "daval-3-walk-in-dressing-room",
    title: "Daval",
    category: "bedroom",
    coverImage: { url: "/images/gallery/daval-3-walk-in-dressing-room.jpg", alt: "Oak walk-in dressing room" },
  },
  {
    _id: "daval-4-windsor",
    title: "Daval",
    category: "bedroom",
    coverImage: { url: "/images/gallery/daval-4-windsor.jpg", alt: "Daval 'Windsor' fitted wardrobes in cream" },
  },
];

export default galleryProjects;
