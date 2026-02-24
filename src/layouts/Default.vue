<template>
  <div>
    <header class="contain flex justify-end items-center h-20">
      <nav class="flex flex-wrap items-center gap-3 text-navigationColor">
        <g-link class="hover:underline border-r-2 border-dashed border-navigationColor pr-4" to="/">Home</g-link>
        <g-link class="hover:underline border-r-2 border-dashed border-navigationColor pr-4" to="/projects/">Projects</g-link>
        <g-link class="hover:underline" to="/bookmarks/">Bookmarks</g-link>
      </nav>
    </header>
    <slot />

    <footer class="contain flex justify-between mb-5 text-sl text-textMuted">
      <p><span>&copy; 2026 🚀</span></p>
       <!-- <a href="/privacy-policy.html">Privacy Policy</a> |
        <a href="/terms-of-service.html">Terms of Service</a> |
        <a href="/refund-policy.html">Refund Policy</a> |
        <a href="/support.html">Support</a> -->
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: true, // no longer used, safe to remove if you want
    };
  },
};
</script>
