<template>
  <div class="blog-card grid-cols-2">
    <div class="content-wrapper flex-col justify-center">
      <div class="content p-20 pb-12">
        <h1 class="text-6xl mb-4">
          Story
        </h1>
        <p>
          content
        </p>
        <button class="btn-1">
          Get started
        </button>
      </div>
    </div>
    <img class="img-cover" src="https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="blog-image">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.blog-card {
  min-height: rem(504);
  .content-wrapper {
    width: 100%;
    height: 100%;
    padding: rem(90) rem(90) rem(30) rem(90);
  }
}
</style>
