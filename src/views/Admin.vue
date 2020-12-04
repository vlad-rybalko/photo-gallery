<template>
  <div class="admin">
    <div class="container">
      <div class="row">
        <AdminSitebur></AdminSitebur>
        <AdminContent></AdminContent>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSitebur from '@/components/Admin-sitebur'
import AdminContent from '@/components/Admin-content'

export default {
  name: 'Admin',
  components: {
    AdminSitebur,
    AdminContent
  }
}
</script>
