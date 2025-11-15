<script lang="ts">
  import { page } from '$app/stores';
  import { getLangFromPath, getTranslations } from '$lib/i18n';

  $: lang = getLangFromPath($page.url.pathname);
  $: t = getTranslations(lang);
</script>

<footer class="minimal-footer">
  <div class="container">
    <p>{t.footer.copyright}</p>
  </div>
</footer>
