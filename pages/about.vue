<script lang="ts" setup>
const { data: page } = await useAsyncData('index', () => queryContent('/about').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
})
</script>

<template>
  <ul>
    <ul v-for="content in page?.content" :key="content.title">
      {{ content }}
    </ul>
  </ul>
</template>

<style>

</style>
