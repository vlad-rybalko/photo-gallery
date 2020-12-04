<template>
  <div class="col-9 admin-content">
    <form>
      <div class="form-group">
        <label for="intputInst">Акаунт instagram</label>
        <input type="text" class="form-control" id="intputInst" placeholder="@instagram">
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Описание</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>

    <label for="inputGroupFile04">Загрузка фото</label>
    <div class="input-group">
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">
        <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
      </div>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Загрузка</button>
      </div>
    </div>
  </div>
</template>

<style>
  .admin-content form {
    margin-bottom: 30px;
  }
</style>
