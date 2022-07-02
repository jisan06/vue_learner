<template>
  <div class="hello">
    <h1>{{ message }}</h1>

<!--    <test_component blood_group="B+"></test_component>-->

<!--    <div>-->
<!--      <Account username="admin" />-->
<!--    </div>-->

<!--    This is the Computed reversed message: <strong> {{ reversedMessage }}</strong>-->

<!--    <div>-->
<!--      <a href="https://w3school.com/" target = "_blank"> Go to W3School </a> <br/>-->
<!--      <a v-bind:href="hreflink" target = "_blank">Go to W3School </a>   <br/>-->
<!--      <a :href="hreflink" target = "_blank">Go to W3School </a>  <br/>-->

<!--      <input type="text" :name="email" placeholder="email here" v-bind:value="email">-->
<!--      <input type="text" :name="email" placeholder="email here" :value="email">-->
<!--      <input type="text"  placeholder="email here" v-model="email">-->

<!--      Your email address are : {{email}} <br>-->

<!--      <a href="javascript:" @click="ClickFunction" >Change Email </a>  <br/>-->
<!--    </div>-->

  </div>
</template>

<script>
import Account from './Account'
export default {
  name: 'Index',
  // components: {
  //   Account
  // },
  // computed: {
  //   reversedMessage: function () {
  //     return this.message.split('').reverse().join('')
  //   }
  // },
  // methods: {
  //   ClickFunction () {
  //     this.email = 'super_admin@gmail.com'
  //   }
  // },
  // beforeCreate () {
  //   console.log('before create test here: ' + this.init)
  // },
  // created () {
  //   console.log('created test here: ' + this.init)
  //   console.log('HTML render check for created: ' + this.$el)
  // },
  // beforeMount () {
  //   console.log('before mount test here: ' + this.init)
  //   console.log('HTML render check for before mount: ' + this.$el)
  // },
  // mounted () {
  //   console.log('mounted test here')
  //   console.log('HTML render check for mounted: ' + this.$el)
  // },
  // beforeUpdate () {
  //   console.log('before update test here. Your email are: ' + this.email)
  // },
  // updated () {
  //   console.log('updated test here')
  // },
  data () {
    return {
      // init: 'This component is initialized',
      message: 'Welcome to Vue.js',
      hreflink: 'https://w3school.com/',
      email: 'admin@gmail.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

.hello {
  line-height: 50px;
}
</style>
