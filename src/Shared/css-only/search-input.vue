<template>
  <div class="search-box">
    <input type="text" placeholder="Type your question..." />
    <a href="#" class="icon">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search-box {
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2c3441;
  height: 60px;
  border-radius: 40px;
  padding: 10px;
}
.search-box:hover > input {
  width: 250px;
  padding: 0px 15px;
}
.search-box:hover > .icon {
  background: #536179;
}
.icon {
  color: #21dfcd;
  float: right;
  width: 40px;
  font-size: 1.3rem;
  height: 40px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;
  text-decoration: none;
}
.icon:hover {
  transform: rotate(360deg) scale(0.8);
}
input {
  width: 0;
  border: none;
  outline: none;
  padding: 0;
  background: none;
  font-size: 1.1rem;
  transition: 0.5s ease;
  line-height: 40px;
  color: #fff;
}
</style>
