import { metadata } from "./layout";

export default function Home() {
  metadata.title = "IMDB | Home Page";
  metadata.description = "The home page of the mbdb clone";

  return (
    <div>
      <p> Home Page</p>
    </div>
  );
}

// Path: src/app/page.js
