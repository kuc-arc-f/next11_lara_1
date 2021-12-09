module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src/']
  },
  env: {
    COOKIE_KEY_USER_ID: "next21uid",
    CSRF_SECRET: "secret1234",
    API_URL : 'http://localhost:8000',
  },  
}
