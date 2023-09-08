<template>
  <table class="table form-control">
    <thead>
    <tr>
      <th scope="col">Teemad</th>
      <th scope="col">Lisa teema</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">Muutujad</th>
      <td>
        <font-awesome-icon :icon="['far', 'square-check']" size="2xl"/>
      </td>
    </tr>
    <tr>
      <th scope="row">Muutujad</th>
      <td>
        <font-awesome-icon :icon="['fas', 'trash']" size="2xl" />
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'frontTopicTable'
}
</script>