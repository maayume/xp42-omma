<template>
  <nav>
    <div id="logoHeader" class="justifyHeader">
      <img src="@/assets/logo.png" />
    </div>
    <div id="linksNavigation" class="justifyHeader">
      <RouterLink to="/" class="paddingLink">início</RouterLink>
      <RouterLink to="/" class="paddingLink">receitas</RouterLink>
      <RouterLink to="/" class="paddingLink">contato</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-color: #FFC107;
}
.justifyHeader {
  display: flex;
  justify-content: center;
  width: 100%;
}
.paddingLink {
  font-size: 18px;
  font-weight: 700;
  padding-inline: 10px;
}
#linksNavigation {
  background-color: #FFA000;
}
img{
  min-width: 15vw;
}

@media (max-width: 400px) {
  .justifyHeader {
    display: grid;
    justify-items: center;
  }
}
</style>