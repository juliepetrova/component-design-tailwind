<template>
  <a href="#" class="icon"><slot></slot></a>
</template>

<script>
export default {

}
</script>

<style scoped>
 .icon{
     text-decoration: none;
     width: 50px;
     height: 50px;
     background-color: #cb611a;
     color: #fff;
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     box-shadow: 
     5px 5px 10px #ad5216,
     -5px -5px 10px #e9701e;
 }
 .icon:focus {
   animation: shadow .15s
   ease-in-out;
 }

 @keyframes shadow {
   0% {
     box-shadow: 
      inset 5px 5px 10px #ad5216,
      inset -5px -5px 10px #e9701e;
   }
   100% {
     box-shadow: none;
   }
 }
</style>