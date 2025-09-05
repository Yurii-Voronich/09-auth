import { Metadata } from "next";
import css from "./page.module.css";
export const metadata: Metadata = {
  title: "Notehub not-found page",
  description: "This page is not available at Notehub App",
  openGraph: {
    title: `Notehub not-found page`,
    description: "This page is not available at Notehub App",
    url: `https://08-zustand-three-nu.vercel.app/`,
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "og notehub",
      },
    ],
    type: "article",
  },
};
const NotFoundPage = () => {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
};

export default NotFoundPage;
