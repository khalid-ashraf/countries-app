import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  // Use layout to create a layout for all the children routes.
  layout("layouts/homelayout.tsx", [
    // Index route does not need a path it is just '/'.
    index("routes/home.tsx"),

    // This is how you define a normal route. This route is '/about'.
    route("about", "routes/about.tsx"),

    // Use prefix when we have to add something to all the children routes. All routes inside are '/countries/...'.
    ...prefix("countries", [
      index("routes/countries.tsx"),
      route(":countryName", "routes/country.tsx"),
    ]),
  ]),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;

