<template>

  <div class="container-xxl text-center mx-auto">
    <div class="row text-center mx-auto justify-content-center">
      <div class="col col-3 text-center">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" placeholder="name@example.com">
          <label for="floatingInput" class="custom-label">Eesnimi</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" placeholder="name@example.com">
          <label for="floatingInput" class="custom-label">Kasutajanimi</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com">
            <label for="floatingInput" class="custom-label">Parool</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" placeholder="name@example.com">
            <label for="floatingInput" class="custom-label">Korda parooli</label>
        </div>
      </div>


    <div class="col col-3 text-center">
      empty col
    </div>

    <div class="col col-3 text-center">


      <div class="form-floating mb-3">

          <input type="email" class="form-control" placeholder="name@example.com">
          <label for="floatingInput" class="custom-label">Perekonnanimi</label>

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
  <div class="row text-center mx-auto justify-content-center">
    <div class="col col-3 text-center">

    </div>
    <div class="col col-3 text-center">
      <div class="row align-items-center">

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>

      </div>
      <div class="row align-items-center">

          <a class="btn btn-primary" href="#" role="button">Registeeru</a>

      </div>
    </div>
    <div class="col col-3 text-center"></div>
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


</style>