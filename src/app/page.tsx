import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <ul>
          <li>
            {/* Has a defined page file (/foo/page.tsx), no type error */}
            <Link href="/foo">Foo</Link>
          </li>
          <li>
            {/* No defined page file, type error */}
            <Link href="/foo/bar">Bar</Link>
          </li>
          <li>
            {/* Has a defined page file (/[slug]/page.tsx), no type error */}
            <Link href="/baz">Baz</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
