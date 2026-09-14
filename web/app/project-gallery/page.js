import { getGalleryProjects, safe } from "@/lib/api";
import ProductImage from "@/components/ProductImage";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Project Gallery",
  description: "Browse completed kitchen and bedroom installations from around Cheshire.",
};

export default async function ProjectGalleryPage() {
  const projects = await safe(getGalleryProjects(), []);

  return (
    <section className="section-surface pt-14 pb-20 md:pt-20">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            eyebrow="Project Gallery"
            title="Completed installations from around Cheshire"
            description="A selection of finished kitchens and bedrooms — every project designed, built and fitted by our own team."
          />
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.length > 0 ? (
            projects.map((project, idx) => (
              <Reveal key={project._id} as="article" delay={(idx % 3) * 0.1}>
                <ProductImage image={project.coverImage} ratio="4/3" fallbackLabel={project.title} />
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-navy">
                  {project.category}
                </p>
                <h3 className="mt-1 text-lg font-medium text-ink">{project.title}</h3>
                <p className="mt-2 text-left text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
              </Reveal>
            ))
          ) : (
            <p className="text-sm text-ink-muted">
              Our project gallery is being put together — visit the showroom to see recent work in
              the meantime.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
