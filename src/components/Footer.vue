<template>
  <nav>
      <img src="@/assets/logo.png" />
      <h4>© 2022 omma - Todos os direitos são de vocês</h4>
  </nav>
</template>

<style scoped>
nav {
  background-color: #FFC107;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

img{
  min-width: 15vw;
}

@media (max-width: 654px) {
  nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>