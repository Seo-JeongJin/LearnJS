
<template>
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="userId">ID:</label>
      <input id="userId" type="text" v-model="username">
    </div>
    <div>
      <label for="password">PW:</label>
      <input type="text" v-model="password">
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
  // import 라이브러리이름 from '패키지이름'
  import axios from 'axios'
  import { ref } from 'vue';

  export default {
    setup() {
      // data
      var username = ref('');
      var password = ref('');

      // methods
      var submitForm = () => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
          username : username.value,
          password : password.value
        }).then(response => {
          console.log(response);          
        })
      }

      return { username, password, submitForm }
    },
    // methods : {
    //   logText() {
    //     this.password
    //   }
    // }
    // data() {
    //   return {
    //     username: '',
    //     password: '',
    //   }
    // },
    // methods : {
    //   // event.preventDefault();
    //   submitForm() {
    //     const data = {
    //       username : this.username,
    //       password : this.password
    //     }
    //     axios.post('https://jsonplaceholder.typicode.com/todos', data) 
    //     .then(response => {
    //       console.log(response);
    //     })
    //     console.log('제출됨');
        
    //   }
    // }
  }
</script>

<style scoped>

</style>