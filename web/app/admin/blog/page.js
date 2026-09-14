"use client";

import { useEffect, useState } from "react";
import AdminGuard from "@/components/admin/AdminGuard";
import SingleImageEditor from "@/components/admin/SingleImageEditor";
import { adminList, adminCreate, adminUpdate, adminDelete } from "@/lib/api";

const EMPTY = {
  title: "",
  slug: "",
  excerpt: "",
  coverImage: { url: "", alt: "" },
  bodyMarkdown: "",
};

function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function BlogAdmin({ token }) {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);
  const [slugTouched, setSlugTouched] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const load = async () => setPosts(await adminList("blog", token));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial data load
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startEdit = (post) => {
    setEditingId(post._id);
    setSlugTouched(true);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      coverImage: post.coverImage,
      bodyMarkdown: post.bodyMarkdown,
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setSlugTouched(false);
    setForm(EMPTY);
  };

  const handleTitleChange = (title) => {
    setForm((f) => ({ ...f, title, slug: slugTouched ? f.slug : slugify(title) }));
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
      if (editingId) await adminUpdate("blog", token, editingId, form);
      else await adminCreate("blog", token, form);
      await load();
      resetForm();
    } catch (err) {
      setError(err.message);
    } finally {
      setStatus("idle");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this post?")) return;
    await adminDelete("blog", token, id);
    await load();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h1 className="text-2xl">Inspiration Blog</h1>
        <ul className="mt-6 space-y-3">
          {posts.map((post) => (
            <li
              key={post._id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-hairline p-4"
            >
              <div>
                <p className="text-sm font-medium text-ink">{post.title}</p>
                <p className="text-xs text-ink-muted">/inspiration/{post.slug}</p>
              </div>
              <div className="flex gap-3 text-sm">
                <button type="button" onClick={() => startEdit(post)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(post._id)} className="text-red-700 dark:text-red-400">
                  Delete
                </button>
              </div>
            </li>
          ))}
          {posts.length === 0 && <p className="text-sm text-ink-muted">No posts yet.</p>}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-xl">{editingId ? "Edit post" : "Add a post"}</h2>
        <div>
          <label htmlFor="title" className="text-sm text-ink-muted">
            Title
          </label>
          <input
            id="title"
            required
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <label htmlFor="slug" className="text-sm text-ink-muted">
            URL slug
          </label>
          <input
            id="slug"
            required
            value={form.slug}
            onChange={(e) => {
              setSlugTouched(true);
              setForm((f) => ({ ...f, slug: e.target.value }));
            }}
            className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <label htmlFor="excerpt" className="text-sm text-ink-muted">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            required
            rows={2}
            value={form.excerpt}
            onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
            className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm"
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
          <label htmlFor="body" className="text-sm text-ink-muted">
            Body (Markdown)
          </label>
          <textarea
            id="body"
            required
            rows={10}
            value={form.bodyMarkdown}
            onChange={(e) => setForm((f) => ({ ...f, bodyMarkdown: e.target.value }))}
            className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm font-mono"
          />
        </div>
        {error && (
          <p role="alert" className="text-sm text-red-700 dark:text-red-400">
            {error}
          </p>
        )}
        <div className="flex gap-3">
          <button type="submit" disabled={status === "saving"} className="btn-primary disabled:opacity-60">
            {status === "saving" ? "Saving…" : editingId ? "Save changes" : "Add post"}
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

export default function BlogAdminPage() {
  return <AdminGuard>{(token) => <BlogAdmin token={token} />}</AdminGuard>;
}
