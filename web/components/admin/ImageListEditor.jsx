"use client";

import { useState } from "react";
import Image from "next/image";
import { adminUploadImage, resolveImageUrl } from "@/lib/api";

export default function ImageListEditor({ token, images, onChange }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const { url } = await adminUploadImage(token, file);
      onChange([...images, { url, alt: "", order: images.length }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const updateAlt = (idx, alt) => {
    onChange(images.map((img, i) => (i === idx ? { ...img, alt } : img)));
  };

  const removeImage = (idx) => {
    onChange(images.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <div className="space-y-3">
        {images.map((img, idx) => (
          <div key={idx} className="flex items-center gap-3 rounded-2xl border border-hairline p-3">
            <Image
              src={resolveImageUrl(img.url)}
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 rounded-lg object-cover"
            />
            <input
              type="text"
              placeholder="Alt text (required)"
              value={img.alt}
              onChange={(e) => updateAlt(idx, e.target.value)}
              className="flex-1 rounded-lg border border-hairline px-3 py-2 text-sm"
            />
            <button type="button" onClick={() => removeImage(idx)} className="text-sm text-red-700 dark:text-red-400">
              Remove
            </button>
          </div>
        ))}
      </div>
      <label className="mt-3 inline-block text-sm">
        <span className="btn-outline cursor-pointer">{uploading ? "Uploading…" : "Add photo"}</span>
        <input type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
      </label>
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
