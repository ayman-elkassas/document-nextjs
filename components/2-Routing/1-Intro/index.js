// todo: 1 - Index routes
// The router will automatically route files named index to the root of the directory.

// pages/index.js → /
// pages/blog/index.js → /blog

//todo: 2 - Nested routes
// The router supports nested files. If you create a nested folder structure files will be automatically routed in the same way still.

// pages/blog/first-post.js → /blog/first-post
// pages/dashboard/settings/username.js → /dashboard/settings/username

//todo: 3 - Dynamic route segments
// To match a dynamic segment you can use the bracket syntax. This allows you to match named parameters.

// pages/blog/[slug].js → /blog/:slug (/blog/hello-world)
// pages/[username]/settings.js → /:username/settings (/foo/settings)
// pages/post/[...all].js → /post/* (/post/2020/id/title)