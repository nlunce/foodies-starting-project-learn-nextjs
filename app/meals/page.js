import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <main>
        <h1>Meals Page</h1>
        <p>
          <Link href="meals/share">Share</Link>
        </p>
      </main>
    </>
  );
}
