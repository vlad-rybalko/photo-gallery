<template>
  <header class="header">
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-auto box">
          <div style="background-color: yellowgreen; height: 150px; width: 150px; border-radius: 50%;"></div>
        </div>
        <div class="col-4 box d-flex justify-content-sm-center flex-column">
          <a href="!#">Lorem, ipsum</a>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam fuga incidunt perspiciatis ab labore.</span>
        </div>
      </div>

      <Menu></Menu>

    </div>
  </header>
</template>

<style>
  .header {
    margin: 30px 0 30px 0;
  }
</style>

<script>
  import Menu from '@/components/Menu.vue'

  export default {
    name: 'Header',
    components: {
      Menu,
    }
  }
</script>
