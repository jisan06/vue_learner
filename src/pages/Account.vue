<template>
  <span>Her is your account info. Your user name is: {{username}}</span>
</template>

<script>
export default {
  name: 'Account',
  props: ['username']
}
</script>
