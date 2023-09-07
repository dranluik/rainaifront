<template>
  <div class="my-background">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h3>Tutvustus</h3>
          <div class="icon-table">
            <RainContact/>
          </div>
        </div>
        <div class="col">
          Column
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RainContactView from "@/components/RainContact.vue";

export default {
  name: 'HelloWorld',
  components: {RainContact: RainContactView},
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
<style>
h3 {
  color: white;
}
.icon-table {
  text-align: center;
}

.table th,
.table td {
  border: none; /* Remove cell borders */
  padding: 8px; /* Add padding for cell content */
  text-align: left;
}

/* Add more CSS styles as needed */
</style>
