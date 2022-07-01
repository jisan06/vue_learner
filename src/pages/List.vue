<template>
  <div>
    <h2>Topics List</h2>
    <ul>
      <li v-for="topics in topics_list" v-bind:key="topics">
          <span>{{ topics }}</span> <br>
          <span v-if="topics == 'Data Binding'">
            <ul>
              <li>Single Way Binding</li>
              <li>Two Way Binding</li>
            </ul>
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      topics_list: [
        'Introduction',
        'Router',
        'Template',
        'Component',
        'Computed',
        'Data Binding',
        'Methods',
        'Before Create',
        'Created',
        'Before Mount',
        'Mounted',
        'Before Update',
        'Updated',
        'Methods'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  display: inline-block;
  list-style: -moz-ethiopic-numeric;
}
ul li {
  text-align: left;
  line-height: 40px;
}
</style>
