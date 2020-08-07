<template>
  <a class="item" :href="href" target="_blank">
    <img class="item-img" :src="img" alt>
    <span class="item-title">{{ title }}</span>
  </a>
</template>
<script>
  export default {
    name: 'Item',
    props: {
      img: {
        require: true,
        type: String
      },
      title: {
        require: true
      },
      description: {
        require: true
      },
      href: {
        require: true,
        type: String
      }
    }
  }
</script>
<style scoped>
  .item {
    display: inline-block;
    margin: 10px 30px 15px 0;
  }
  .item:hover {
    text-decoration: none !important;
  }
  .item-img {
    display: inline-block;
    height: 30px;
    vertical-align: middle;
  }
  .item-title {
    display: inline-block;
    font-size: 20px;
    vertical-align: middle;
  }
</style>
