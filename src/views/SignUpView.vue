<template>

  <div class="container text-center">
    <div class="row align-items-start">
      <div class="col">
        <div class="row justify-content-center">
          <div class="col col-6 form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com">
            <label for="floatingInput" class="custom-label">Eesnimi</label>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col col-6 form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com">
            <label for="floatingInput" class="custom-label">Kasutajanimi</label>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col col-6 form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com">
            <label for="floatingInput" class="custom-label">Parool</label>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col col-6 form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com">
            <label for="floatingInput" class="custom-label">Korda parooli</label>
          </div>
        </div>
        One of three columns
      </div>
      <div class="col">
        <div class="row justify-content-center">
          <div class="col col-6 form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com">
            <label for="floatingInput" class="custom-label">Perekonnanimi</label>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vali pakett
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Kogupakett</a></li>
            <li><a class="dropdown-item" href="#">Frontend</a></li>
            <li><a class="dropdown-item" href="#">Backend</a></li>
          </ul>
        </div>
        One of three columns
      </div>
    </div>
  </div>
  <div>
    <a class="btn btn-primary" href="#" role="button">Registeeru</a>
  </div>
</template>


<script>
export default {
  name: "SignUpView"
}

</script>

<style scoped>
.custom-label {
  font-size: 16px;
  font-weight: bold;
  color: rgb(31, 32, 35);
}

</style>