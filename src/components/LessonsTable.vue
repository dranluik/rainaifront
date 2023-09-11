<template>
  <table class="table form-control">
    <thead>
    <tr>
      <th scope="col">Teemad</th>
      <th scope="col">Lisa teema</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="lessonsName in lessonsNames" :key="lessonsName.packageTypeId">
      <th scope="row">{{lessonsName.lessonName}}</th>
      <td>
        <font-awesome-icon :icon="['far', 'square-check']" size="2xl"/>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'lessonsTable',
  props: {
    lessonsNames: {}
  },
}
</script>