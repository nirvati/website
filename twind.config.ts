import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  preflight: {
    "@import": "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
  },
  theme: {
    extend: {
      fontFamily: {
        serif: '"EB Garamond"',
      },
    },
  },
} as Options;
