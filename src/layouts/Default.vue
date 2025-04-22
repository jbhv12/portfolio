<template>
  <div>
    <header class="contain flex justify-end items-center h-20">
      <nav class="hidden md:flex items-center gap-3 text-green">
        <g-link class="hover:underline border-r-2 border-dashed border-green pr-4" to="/">Home</g-link>
        <g-link class="hover:underline border-r-2 border-dashed border-green pr-4" to="/projects/">Projects</g-link>
        <g-link class="hover:underline" to="/bookmarks/">Bookmarks</g-link>
      </nav>
    </header>
    <slot />

    <footer class="contain flex justify-between mb-5 text-sl text-dimGreyAlt">
      <p>
        <span>&copy; 2025 🚀</span>
      </p>
      <p>
        <!-- <a href="/privacy-policy.html">Privacy Policy</a> |
        <a href="/terms-of-service.html">Terms of Service</a> |
        <a href="/refund-policy.html">Refund Policy</a> |
        <a href="/support.html">Support</a> -->
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: true,
    };
  },
};
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>