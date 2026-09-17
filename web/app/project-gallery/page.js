import { getGalleryProjects, safe } from "@/lib/api";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import CategoryCarousel from "@/components/gallery/CategoryCarousel";

export const metadata = {
  title: "Project Gallery",
  description: "Browse completed kitchen and bedroom installations from around Cheshire.",
};

export default async function ProjectGalleryPage() {
  const projects = await safe(getGalleryProjects(), []);
  const kitchenProjects = projects.filter((p) => p.category === "kitchen");
  const bedroomProjects = projects.filter((p) => p.category === "bedroom");

  return (
    <section className="section-surface pt-14 pb-20 md:pt-20">
      <div className="container-wide">
        <Reveal fade={false}>
          <SectionHeading
            eyebrow="Project Gallery"
            title="Completed installations from around Cheshire"
            description="A selection of finished kitchens and bedrooms — every project designed, built and fitted by our own team. Click a photo to enlarge it."
          />
        </Reveal>
      </div>

      {projects.length === 0 && (
        <div className="container-wide">
          <p className="mt-10 text-sm text-ink-muted">
            Our project gallery is being put together — visit the showroom to see recent work in
            the meantime.
          </p>
        </div>
      )}

      {kitchenProjects.length > 0 && (
        <Reveal as="div" className="mt-12">
          <h2 className="container-wide text-left text-2xl">Kitchens</h2>
          <div className="mt-6">
            <CategoryCarousel projects={kitchenProjects} categoryLabel="Kitchen" priorityFirst />
          </div>
        </Reveal>
      )}

      {kitchenProjects.length > 0 && bedroomProjects.length > 0 && (
        <div className="container-wide">
          <div className="my-8 border-t border-hairline" />
        </div>
      )}

      {bedroomProjects.length > 0 && (
        <Reveal as="div" className="mt-4">
          <h2 className="container-wide text-left text-2xl">Bedrooms</h2>
          <div className="mt-6">
            <CategoryCarousel projects={bedroomProjects} categoryLabel="Bedroom" />
          </div>
        </Reveal>
      )}
    </section>
  );
}
