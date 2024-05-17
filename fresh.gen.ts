// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $about from "./routes/about.tsx";
import * as $activity from "./routes/activity.tsx";
import * as $activity_name_ from "./routes/activity/[name].tsx";
import * as $api_login from "./routes/api/login.ts";
import * as $api_post from "./routes/api/post.ts";
import * as $blog from "./routes/blog.tsx";
import * as $blog_name_ from "./routes/blog/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $logout from "./routes/logout.tsx";

import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/about.tsx": $about,
    "./routes/activity.tsx": $activity,
    "./routes/activity/[name].tsx": $activity_name_,
    "./routes/api/login.ts": $api_login,
    "./routes/api/post.ts": $api_post,
    "./routes/blog.tsx": $blog,
    "./routes/blog/[name].tsx": $blog_name_,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/logout.tsx": $logout,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
