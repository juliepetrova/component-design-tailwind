<template>
  <div class="card">
    <div class="image">
      <slot name="image"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.image {
  flex: 1 1 120px;
}

.content {
  flex: 1 1 200px;
  margin: 10px;
}

@media only screen and (max-width: 420px) {
  .card {
    aspect-ratio: 1 / 1;
  }
}
</style>
