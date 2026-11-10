export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  url: env("PUBLIC_URL", "https://weapon-be-marketplace-q53r.onrender.com"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
