This repo replicates an issue with the [`typedRoutes`](https://beta.nextjs.org/docs/configuring/typescript#statically-typed-links) config for Next.js 13.

## To replicate

1. Install packages

   ```bash
   npm ci
   ```

1. Attempt to run a build to see the expected type error

   ```bash
   npm run build
   ```

   The type error:

   ```
   ./src/app/page.tsx:14:19
   Type error: "/foo/bar" is not an existing route. If it is intentional, please type it explicitly with `as Route`.

     12 |           <li>
     13 |             {/* No defined page file, type error */}
   > 14 |             <Link href="/foo/bar">Bar</Link>
        |                   ^
     15 |           </li>
     16 |           <li>
     17 |             {/* Has a defined page file (/[slug]/page.tsx), no type error */}
   ```

   This type error is _expected_ as `/foo/bar` does not have an applicable page file.

1. To see the issue with `typedRoutes` (and `type DynamicRoutes` more specifically), either remove the `/[slug]` directory or rename `/[slug]` to a static path (i.e. `/slug`).

   ```bash
   mv src/app/\[slug\] src/app/slug
   ```

1. Rerun the build command

   ```bash
   npm run build
   ```

   No error will occur this time, even though the links to both `/foo/bar` and `/baz` should both produce errors. This is likely because `DynamicRoutes` is typed as a string:

   ```ts
   type DynamicRoutes<T extends string = string> = string;
   ```

   This means that any string put into the `href` of the `Link` component will be valid.
