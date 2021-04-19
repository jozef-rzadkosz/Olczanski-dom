<template>
  <nav class="nav">
    <div class="container nav__container">
      <nuxt-link class="nav__link" to="/">
        <h1 class="nav__logo">
          Rolet Dom
        </h1>
      </nuxt-link>
      <div
        :class="
          isOpen ? 'nav__background nav__background--active' : 'nav__background'
        "
        @click="isOpen = false"
      />
      <svg class="nav__mobile-btn" @click="isOpen = true">
        <use xlink:href="/sprite.svg#icon-menu" />
      </svg>
      <ul :class="isOpen ? 'nav__list nav__list--active' : 'nav__list'">
        <li class="nav__item" @click="isOpen = false">
          <nuxt-link class="nav__link" exact to="/">
            Strona główna
          </nuxt-link>
        </li>
        <li class="nav__item" @click="isOpen = false">
          <nuxt-link class="nav__link" exact to="/o-nas">
            O nas
          </nuxt-link>
        </li>

        <li class="nav__item" @click="isOpen = false">
          <nuxt-link class="nav__link" to="/produkty">
            Produkty
          </nuxt-link>
        </li>
        <li class="nav__item" @click="isOpen = false">
          <nuxt-link class="nav__link" exact to="/kontakt">
            Kontakt
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/breakpoints' as bp;

.nav {
  background-color: var(--white-color);
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__link {
    text-decoration: none;
    padding: 0.5rem;
    text-transform: uppercase;
    color: var(--font-color);
    font-weight: 900;
    transition: 0.2s ease-in-out;
    font-size: 1rem;
  }
  &__logo {
    font-family: "Ravie", sans-serif;
    font-size: 2rem;
    text-transform: capitalize;
    color: var(--primary-color);
    padding: 0;
  }
  &__list {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    gap: 2rem;
    padding: 1rem 0;
    list-style: none;
    @media only screen and (max-width: bp.$md) {
      position: fixed;
      grid-auto-flow: row;
      align-content: start;
      top: 0;
      right: 0;
      background-color: var(--white-color);
      height: 100vh;
      padding: 2rem 1rem;
      z-index: 2;
      transform: translateX(100%);
      transition: 0.2s ease-in-out;
      &--active {
        transform: translateX(0);
      }
    }
  }
  &__mobile-btn {
    display: none;
    width: 1.4rem;
    height: 1.4rem;
    fill: var(--font-color);
    @media only screen and (max-width: bp.$md) {
      display: flex;
      transition: 0.2s ease-in-out;
      cursor: pointer;
    }
  }
  &__background {
    display: none;
    @media only screen and (max-width: bp.$md) {
      display: block;
      position: fixed;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.7);
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      transition: 0.2s ease-in-out;
      &--active {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
</style>
