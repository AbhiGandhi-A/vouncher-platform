  Running TypeScript ...
  Collecting page data using 1 worker ...
Error: Failed to load external module @prisma/client-2c3a283f134fdcb6: Error: Cannot find module '/vercel/path0/node_modules/@prisma/client/runtime/library.js'
    at Context.externalRequire [as x] (.next/server/chunks/[turbopack]_runtime.js:535:15)
    at module evaluation (.next/server/chunks/[root-of-the-server]__fcd2e4e6._.js:1:1017)
    at instantiateModule (.next/server/chunks/[turbopack]_runtime.js:740:9)
    at getOrInstantiateModuleFromParent (.next/server/chunks/[turbopack]_runtime.js:763:12)
    at Context.esmImport [as i] (.next/server/chunks/[turbopack]_runtime.js:228:20)
    at module evaluation (.next/server/chunks/[root-of-the-server]__fcd2e4e6._.js:1:1538)
    at instantiateModule (.next/server/chunks/[turbopack]_runtime.js:740:9)
    at instantiateRuntimeModule (.next/server/chunks/[turbopack]_runtime.js:768:12)
    at getOrInstantiateRuntimeModule (.next/server/chunks/[turbopack]_runtime.js:781:12)
    at Object.m (.next/server/chunks/[turbopack]_runtime.js:790:18)
> Build error occurred
Error: Failed to collect page data for /api/health
    at ignore-listed frames {
  type: 'Error'
}
Error: Command "npx prisma migrate deploy && next build" exited with 1