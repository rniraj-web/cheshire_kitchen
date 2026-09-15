// Static content for the Kitchens/Bedrooms range pages. Edit this file and
// drop the new photo into public/images/ranges/ to update — no admin panel,
// database, or redeploy step beyond a normal build.
//
// To add a photo to an existing range: add an entry to its `images` array.
// To add a whole new range: add a new object to this array.

const ranges = [
  {
    _id: "rational",
    type: "kitchen",
    brand: "Rational",
    origin: "Germany",
    description:
      "Precision German engineering with soft-close mechanisms and near-silent hardware as standard across every cabinet.",
    order: 0,
    images: [
      {
        url: "/images/ranges/rational-1-onda.jpg",
        alt: "Rational 'Onda' kitchen in gloss white with a curved island and dark oak worktop",
        order: 0,
      },
      {
        url: "/images/ranges/rational-2-cambia.jpg",
        alt: "Rational 'Cambia' kitchen in soft grey with a rounded island and glazed display cabinets",
        order: 1,
      },
      {
        url: "/images/ranges/rational-3-tio.jpg",
        alt: "Rational 'Tio' kitchen in bronze woodgrain with a marble-effect splashback",
        order: 2,
      },
    ],
  },
  {
    _id: "ewe",
    type: "kitchen",
    brand: "Ewe",
    origin: "Austria",
    description: "Handmade Austrian cabinetry with a focus on natural timber veneers.",
    order: 1,
    images: [
      {
        url: "/images/ranges/ewe-1.jpg",
        alt: "Handleless walnut and taupe Ewe kitchen island with a marble-effect worktop and glass display cabinet",
        order: 0,
      },
      {
        url: "/images/ranges/ewe-2.jpg",
        alt: "Matt charcoal Ewe kitchen island with an oak worktop against an exposed brick wall",
        order: 1,
      },
      {
        url: "/images/ranges/ewe-3.jpg",
        alt: "Warm taupe and walnut Ewe kitchen with a dining table and glass-fronted display cabinet",
        order: 2,
      },
      {
        url: "/images/ranges/ewe-4.jpg",
        alt: "Light oak-effect Ewe kitchen island with black trim, opening onto a dining area",
        order: 3,
      },
    ],
  },
  {
    _id: "snaidero",
    type: "kitchen",
    brand: "Snaidero",
    origin: "Italy",
    description: "Bold Italian design with sculptural handles and lacquer finishes.",
    order: 2,
    images: [
      {
        url: "/images/ranges/snaidero-1.jpg",
        alt: "Matt black Snaidero kitchen island with a sculptural cantilevered breakfast bar",
        order: 0,
      },
      {
        url: "/images/ranges/snaidero-2.jpg",
        alt: "White high-gloss Snaidero kitchen with a sculptural wood and LED breakfast bar",
        order: 1,
      },
      {
        url: "/images/ranges/snaidero-3.jpg",
        alt: "Slate-blue Snaidero kitchen with a sculptural curved island and brass tap detailing",
        order: 2,
      },
      {
        url: "/images/ranges/snaidero-4.jpg",
        alt: "Sage green Snaidero kitchen island in a bright loft with canal-side views",
        order: 3,
      },
    ],
  },
  {
    _id: "callerton",
    type: "kitchen",
    brand: "Callerton",
    origin: "United Kingdom",
    description: "British-made shaker and contemporary cabinetry.",
    order: 3,
    images: [
      {
        url: "/images/ranges/callerton-1.jpg",
        alt: "Pale stone shaker kitchen island with breakfast bar seating, opening onto a dining and garden area",
        order: 0,
      },
      {
        url: "/images/ranges/callerton-2.jpg",
        alt: "Bold magenta shaker kitchen with glazed dresser units and a matching range cooker",
        order: 1,
      },
      {
        url: "/images/ranges/callerton-3.jpg",
        alt: "Dark green shaker kitchen island with a Belfast sink and brass tap, in a bright period-style room",
        order: 2,
      },
      {
        url: "/images/ranges/callerton-4.jpg",
        alt: "Sage green shaker kitchen with a large waterfall-edge island and integrated ovens",
        order: 3,
      },
    ],
  },
  {
    _id: "daval",
    type: "bedroom",
    brand: "Daval",
    origin: "United Kingdom",
    description: "British-made fitted bedroom furniture for every room shape.",
    order: 0,
    images: [
      {
        url: "/images/ranges/daval-1-como.jpg",
        alt: "Daval 'Como' fitted bedroom in oak and gloss cashmere, with overbed storage and matching bedside units",
        order: 0,
      },
      {
        url: "/images/ranges/daval-2-soho.jpg",
        alt: "Daval 'Soho' fitted wardrobes in talpa and blue, with an open wardrobe and matching chest of drawers",
        order: 1,
      },
      {
        url: "/images/ranges/daval-3-walk-in-dressing-room.jpg",
        alt: "Oak walk-in dressing room with a dressing table, open hanging space and shoe shelving",
        order: 2,
      },
      {
        url: "/images/ranges/daval-4-windsor.jpg",
        alt: "Daval 'Windsor' fitted wardrobes in cream, with a window seat and dressing table",
        order: 3,
      },
    ],
  },
];

export default ranges;
