"use client";

import { useState } from "react";
import Image from "next/image";
import { adminUploadImage, resolveImageUrl } from "@/lib/api";

export default function SingleImageEditor({ token, image, onChange }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const { url } = await adminUploadImage(token, file);
      onChange({ url, alt: image?.alt || "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        {image?.url && (
          <Image
            src={resolveImageUrl(image.url)}
            alt=""
            width={64}
            height={64}
            className="h-16 w-16 rounded-lg object-cover"
          />
        )}
        <input
          type="text"
          placeholder="Alt text"
          value={image?.alt || ""}
          onChange={(e) => onChange({ ...image, alt: e.target.value })}
          className="flex-1 rounded-lg border border-hairline px-3 py-2 text-sm"
        />
        <label className="text-sm">
          <span className="btn-outline cursor-pointer">{uploading ? "Uploading…" : "Upload"}</span>
          <input type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
        </label>
      </div>
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
