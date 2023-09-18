<template>



    <div class="row text-center mx-auto justify-content-center">
      <div class="col col-2 text-center">

      </div>
      <div class="col col-6 text-center">
        <h1>
          Kes meie kursustele sobivad?
        </h1>
        <p class="aligned-paragraph">
          Meie kursused on mõeldud nii algajatele kui ka juba kogenud arendajatele, kes soovivad oma oskusi täiendada.
          Olgu teie eesmärk karjääri alustamine <br>veebiarenduses või oma projektide loomine,
          meie kursused aitavad teil saavutada oma eesmärke.
          <br>
          Liitu [Ettevõtte nimi] kursustega ja avasta veebiarenduse maailm oma käe järgi.<br>
          Oleme siin, et aidata teid oma teekonnal saada edukaks veebiarendajaks.<br>
        </p>
      </div>

      <div class="col col-3 text-center">
        empty colllll
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
</style>