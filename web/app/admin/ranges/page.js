"use client";

import { useEffect, useState } from "react";
import AdminGuard from "@/components/admin/AdminGuard";
import ImageListEditor from "@/components/admin/ImageListEditor";
import { adminList, adminCreate, adminUpdate, adminDelete } from "@/lib/api";

const EMPTY = { type: "kitchen", brand: "", origin: "", description: "", order: 0, images: [] };

function RangesAdmin({ token }) {
  const [ranges, setRanges] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const load = async () => setRanges(await adminList("ranges", token));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial data load
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startEdit = (range) => {
    setEditingId(range._id);
    setForm({
      type: range.type,
      brand: range.brand,
      origin: range.origin,
      description: range.description,
      order: range.order,
      images: range.images,
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(EMPTY);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("saving");
    setError("");
    try {
      if (editingId) await adminUpdate("ranges", token, editingId, form);
      else await adminCreate("ranges", token, form);
      await load();
      resetForm();
    } catch (err) {
      setError(err.message);
    } finally {
      setStatus("idle");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this range?")) return;
    await adminDelete("ranges", token, id);
    await load();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <h1 className="text-2xl">Ranges</h1>
        <ul className="mt-6 space-y-3">
          {ranges.map((range) => (
            <li
              key={range._id}
              className="flex items-center justify-between gap-4 rounded-2xl border border-hairline p-4"
            >
              <div>
                <p className="text-sm font-medium text-ink">
                  {range.brand} <span className="text-ink-muted">({range.type})</span>
                </p>
                <p className="text-xs text-ink-muted">{range.origin}</p>
              </div>
              <div className="flex gap-3 text-sm">
                <button type="button" onClick={() => startEdit(range)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(range._id)} className="text-red-700 dark:text-red-400">
                  Delete
                </button>
              </div>
            </li>
          ))}
          {ranges.length === 0 && <p className="text-sm text-ink-muted">No ranges yet.</p>}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-xl">{editingId ? "Edit range" : "Add a range"}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="type" className="text-sm text-ink-muted">
              Type
            </label>
            <select
              id="type"
              value={form.type}
              onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
              className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm"
            >
              <option value="kitchen">Kitchen</option>
              <option value="bedroom">Bedroom</option>
            </select>
          </div>
          <div>
            <label htmlFor="order" className="text-sm text-ink-muted">
              Display order
            </label>
            <input
              id="order"
              type="number"
              value={form.order}
              onChange={(e) => setForm((f) => ({ ...f, order: Number(e.target.value) }))}
              className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="brand" className="text-sm text-ink-muted">
            Brand
          </label>
          <input
            id="brand"
            required
            value={form.brand}
            onChange={(e) => setForm((f) => ({ ...f, brand: e.target.value }))}
            className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <label htmlFor="origin" className="text-sm text-ink-muted">
            Origin
          </label>
          <input
            id="origin"
            required
            value={form.origin}
            onChange={(e) => setForm((f) => ({ ...f, origin: e.target.value }))}
            className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="text-sm text-ink-muted">
            Description
          </label>
          <textarea
            id="description"
            required
            rows={4}
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            className="mt-1 w-full rounded-2xl border border-hairline px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <span className="text-sm text-ink-muted">Photos</span>
          <div className="mt-2">
            <ImageListEditor
              token={token}
              images={form.images}
              onChange={(images) => setForm((f) => ({ ...f, images }))}
            />
          </div>
        </div>
        {error && (
          <p role="alert" className="text-sm text-red-700 dark:text-red-400">
            {error}
          </p>
        )}
        <div className="flex gap-3">
          <button type="submit" disabled={status === "saving"} className="btn-primary disabled:opacity-60">
            {status === "saving" ? "Saving…" : editingId ? "Save changes" : "Add range"}
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

export default function RangesAdminPage() {
  return <AdminGuard>{(token) => <RangesAdmin token={token} />}</AdminGuard>;
}
