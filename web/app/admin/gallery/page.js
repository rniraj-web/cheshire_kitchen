"use client";

import { useEffect, useState } from "react";
import AdminGuard from "@/components/admin/AdminGuard";
import ImageListEditor from "@/components/admin/ImageListEditor";
import SingleImageEditor from "@/components/admin/SingleImageEditor";
import { adminList, adminCreate, adminUpdate, adminDelete } from "@/lib/api";

const EMPTY = {
  title: "",
  description: "",
  category: "kitchen",
  coverImage: { url: "", alt: "" },
  images: [],
  order: 0,
};

function GalleryAdmin({ token }) {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const load = async () => setProjects(await adminList("gallery", token));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial data load
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startEdit = (project) => {
    setEditingId(project._id);
    setForm({
      title: project.title,
      description: project.description,
      category: project.category,
      coverImage: project.coverImage,
      images: project.images,
      order: project.order,
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(EMPTY);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.coverImage?.url) {
      setError("A cover image is required.");
      return;
    }
    setStatus("saving");
    setError("");
    try {
      if (editingId) await adminUpdate("gallery", token, editingId, form);
      else await adminCreate("gallery", token, form);
      await load();
      resetForm();
    } catch (err) {
      setError(err.message);
    } finally {
      setStatus("idle");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await adminDelete("gallery", token, id);
    await load();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h1 className="text-2xl">Project Gallery</h1>
        <ul className="mt-6 space-y-3">
          {projects.map((project) => (
            <li
              key={project._id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 p-4"
            >
              <div>
                <p className="text-sm font-medium text-ink">{project.title}</p>
                <p className="text-xs text-ink-muted">{project.category}</p>
              </div>
              <div className="flex gap-3 text-sm">
                <button type="button" onClick={() => startEdit(project)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(project._id)} className="text-red-700">
                  Delete
                </button>
              </div>
            </li>
          ))}
          {projects.length === 0 && <p className="text-sm text-ink-muted">No projects yet.</p>}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-xl">{editingId ? "Edit project" : "Add a project"}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="title" className="text-sm text-ink-muted">
              Title
            </label>
            <input
              id="title"
              required
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className="mt-1 w-full rounded-2xl border border-black/10 px-4 py-2.5 text-sm"
            />
          </div>
          <div>
            <label htmlFor="category" className="text-sm text-ink-muted">
              Category
            </label>
            <select
              id="category"
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
              className="mt-1 w-full rounded-2xl border border-black/10 px-4 py-2.5 text-sm"
            >
              <option value="kitchen">Kitchen</option>
              <option value="bedroom">Bedroom</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="text-sm text-ink-muted">
            Description
          </label>
          <textarea
            id="description"
            required
            rows={3}
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            className="mt-1 w-full rounded-2xl border border-black/10 px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <span className="text-sm text-ink-muted">Cover image</span>
          <div className="mt-2">
            <SingleImageEditor
              token={token}
              image={form.coverImage}
              onChange={(coverImage) => setForm((f) => ({ ...f, coverImage }))}
            />
          </div>
        </div>
        <div>
          <span className="text-sm text-ink-muted">Additional photos</span>
          <div className="mt-2">
            <ImageListEditor
              token={token}
              images={form.images}
              onChange={(images) => setForm((f) => ({ ...f, images }))}
            />
          </div>
        </div>
        {error && (
          <p role="alert" className="text-sm text-red-700">
            {error}
          </p>
        )}
        <div className="flex gap-3">
          <button type="submit" disabled={status === "saving"} className="btn-primary disabled:opacity-60">
            {status === "saving" ? "Saving…" : editingId ? "Save changes" : "Add project"}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="btn-outline">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default function GalleryAdminPage() {
  return <AdminGuard>{(token) => <GalleryAdmin token={token} />}</AdminGuard>;
}
