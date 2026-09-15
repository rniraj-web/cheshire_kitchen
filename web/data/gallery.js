// Static content for the Project Gallery page. Add a new object to this
// array (and drop the photo into public/images/gallery/) to add a project —
// no admin panel or database involved.

const galleryProjects = [
  {
    _id: "hazel-grove-kitchen",
    title: "A modern Hazel Grove kitchen",
    description: "A full Rational kitchen installation with integrated Siemens appliances.",
    category: "kitchen",
    order: 0,
    coverImage: {
      url: "/images/gallery/hazel-grove-kitchen.jpg",
      alt: "Modern grey kitchen with island",
    },
    images: [],
  },
];

export default galleryProjects;
