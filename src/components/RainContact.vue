<template>
  <table class="table table-dark black-table">
    <tbody>
    <tr>
      <th scope="row">
        <font-awesome-icon :icon="['fas', 'location-dot']" size="xs" class="icon"/>
        Estonia
      </th>
    </tr>
    <tr>
      <th scope="row">
        <font-awesome-icon :icon="['far', 'envelope']" size="xs" class="icon"/>
        rainaigmail.com
      </th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">
        <font-awesome-icon :icon="['fas', 'mobile-screen']" size="xs" class="icon"/>
        +372 5555555
      </th>
      <td></td>
    </tr>
    </tbody>

  </table>
</template>
<script>
export default {
  name: 'RainContactView'
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
<style scoped>

.table th,
.table td {
  border: none; /* Remove cell borders */
  padding: 8px; /* Add padding for cell content */
  text-align: left;
}
.black-table {
  background-color: #000000;
  color: #000000; /* Set text color to white for better readability on a black background */
}
</style>