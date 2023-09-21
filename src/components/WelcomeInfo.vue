<template>



    <div class="row text-center mx-auto justify-content-center">
      <div class="col col-1 text-center">

      </div>
      <div class="col col-5 text-center ">
        <h1 style="text-align: left;">
          Kes meie kursustele sobivad?
        </h1>
        <p class="aligned-paragraph">
          Meie kursused on mõeldud nii algajatele kui ka juba kogenud arendajatele, kes soovivad oma oskusi täiendada.
          Olgu teie eesmärk karjääri alustamine <br>veebiarenduses või oma projektide loomine,
          meie kursused aitavad teil saavutada oma eesmärke.
          <br>
          Liitu RainAI kursustega ja avasta veebiarenduse maailm oma käe järgi.<br>
          Oleme siin, et aidata teid oma teekonnal saada edukaks veebiarendajaks.<br>
        </p>
      </div>

      <div class="col col-6 text-center">

      </div>
      <div class="col col-12 text-center">
        <!-- Contact information (centered at the bottom) -->
        <div class="mb-4">
          <h4>Kontakt</h4>
          <ul class="list-unstyled contact-info">
            <li>
              <font-awesome-icon :icon="['fasr', 'envelope']" size="sm" class="icon"/>
              <a class="text">rainAI@gmail.com</a>
              <font-awesome-icon :icon="['fasl', 'phone']" size="sm" class="icon"/>
              <a class="text">+372 55 44 565</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
import AlertSuccess from "@/components/alert/AlertSuccess.vue";
import PackageTypeDropdown from "@/components/dropdown/PackageTypeDropdown.vue";
import AlertDanger from "@/components/alert/AlertDanger.vue";
import PasswordInput from "@/components/input/PasswordInput.vue";

export default {
  name: 'WelcomeInfo',
  components: {PasswordInput, AlertDanger, PackageTypeDropdown, AlertSuccess}
}
</script>
<style>
.aligned-paragraph {
  /* Change the text alignment to center */
  text-align: left;
  /* You can also use other values like 'left', 'right', or 'justify' */
}
.contact-info .icon {
  margin-right: 8px; /* Adjust the margin as needed */
}
.contact-info .text {
  color: inherit;
  text-decoration: none;
  margin-right: 10px; /* Adjust the margin as needed */
}
</style>