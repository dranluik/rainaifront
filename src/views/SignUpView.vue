<template>

  <div class="container text-center">
    <div class="row">
      <div class="col col-4">
        <div class="row align-items-start">

          <div class="row justify-content-center">
            <div class="col col-5 form-floating mb-3">
              <input type="email" class="form-control" placeholder="name@example.com">
              <label for="floatingInput" class="custom-label">Eesnimi</label>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col col-5 form-floating mb-3">
              <input type="email" class="form-control" placeholder="name@example.com">
              <label for="floatingInput" class="custom-label">Kasutajanimi</label>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col col-5 form-floating mb-3">
              <input type="email" class="form-control" placeholder="name@example.com">
              <label for="floatingInput" class="custom-label">Parool</label>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col col-5 form-floating mb-3">
              <input type="email" class="form-control" placeholder="name@example.com">
              <label for="floatingInput" class="custom-label">Korda parooli</label>
            </div>
          </div>
        </div>
      </div>

      <div class="col col-4">
        empty col
      </div>

      <div class="col col-4">


        <div class="row justify-content-center">
          <div class="col col-5 form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com">
            <label for="floatingInput" class="custom-label">Perekonnanimi</label>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
            Vali pakett
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Kogupakett</a></li>
            <li><a class="dropdown-item" href="#">Frontend</a></li>
            <li><a class="dropdown-item" href="#">Backend</a></li>
          </ul>
        </div>

      </div>


    </div>
    <div class="row">
      <div class="col col-5">

      </div>
      <div class="col col-5">
        <div class="row align-items-center">
          <div class="col col-6 align-items-center">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col col-6 align-items-center">
            <a class="btn btn-primary" href="#" role="button">Registeeru</a>
          </div>
        </div>
      </div>
      <div class="col col-5"></div>
    </div>
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
.row > .col-4 {
  margin: 0.05rem;
}

</style>