"use client";

import dynamic from "next/dynamic";

// Dynamically import the client component to prevent SSR
const BlogEditorClient = dynamic(
  () => import("../../../admin-client-pages/BlogEditing/BlogEditorClient"),
  { ssr: false } // <- prevents server-side rendering
);

export const dynamic = "force-dynamic"; // optional safety

export default function BlogEditingPage() {
  return <BlogEditorClient />;
}
