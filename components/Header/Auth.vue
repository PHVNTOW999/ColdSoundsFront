<template>
  <div class="auth" v-if="!isAuth">

    <div class="login">

      <b-button
        class="login__btn"
        label="Login"
        type="is-primary"
        size="is-small"
        @click="isLogActive = true" />

      <b-modal v-model="isLogActive" :width="640">
        <div class="login_form">
          <form action="">

            <div class="modal-card" style="width: auto">

              <header class="modal-card-head">
                <p class="modal-card-title">Login</p>
                <button
                  type="button"
                  class="delete"
                  @click="closeModalWins()" />
              </header>

              <section class="modal-card-body">
                <b-field label="Email">
                  <b-input
                    type="email"
                    v-model="logForm.email"
                    placeholder="Your email"
                    required>
                  </b-input>
                </b-field>

                <b-field label="Password">
                  <b-input
                    type="password"
                    v-model="logForm.password"
                    password-reveal
                    placeholder="Your password"
                    required>
                  </b-input>
                </b-field>
              </section>

              <footer class="modal-card-foot">
                <b-button
                  label="Close"
                  @click="closeModalWins()" />
                <b-button
                  label="Login"
                  type="is-primary"
                  @click="sendLogin()" />
              </footer>

            </div>

          </form>
        </div>
      </b-modal>
    </div>

    <div class="reg">

      <b-button
        class="reg__btn"
        label="Registration"
        type="is-primary"
        size="is-small"
        @click="isRegActive = true" />

      <b-modal v-model="isRegActive" :width="640">
        <div class="reg_form">
          <form action="">

            <div class="modal-card" style="width: auto">

              <header class="modal-card-head">
                <p class="modal-card-title">Registration</p>
                <button
                  type="button"
                  class="delete"
                  @click="closeModalWins()" />
              </header>

              <section class="modal-card-body">
                <b-field label="Email">
                  <b-input
                    type="email"
                    v-model="regForm.email"
                    placeholder="Your email"
                    required>
                  </b-input>
                </b-field>

                <b-field label="Password">
                  <b-input
                    type="password"
                    v-model="regForm.password"
                    password-reveal
                    placeholder="Your password"
                    required>
                  </b-input>
                </b-field>

                <b-field label="Repeat Password">
                  <b-input
                    type="password"
                    v-model="regForm.password2"
                    password-reveal
                    placeholder="Repeat your password"
                    required>
                  </b-input>
                </b-field>
              </section>

              <footer class="modal-card-foot">
                <b-button
                  label="Close"
                  @click="closeModalWins()" />
                <b-button
                  label="Registration"
                  type="is-primary"
                  @click="sendReg()" />
              </footer>

            </div>

          </form>
        </div>
      </b-modal>
    </div>

  </div>

  <div class="user" v-else>
    <b-dropdown aria-role="list">
      <template #trigger="{ active }">
        <b-button
          :label="user.email"
          type="is-primary"
          :icon-right="active ? 'menu-up' : 'menu-down'" />
      </template>

      <b-dropdown-item aria-role="listitem">Change Pass</b-dropdown-item>
      <b-dropdown-item aria-role="listitem">Exit</b-dropdown-item>

    </b-dropdown>
    <!--      <b-menu>-->
    <!--        <b-menu-list>-->
    <!--          <b-menu-item icon="account" :label="user.email">-->
    <!--            <b-menu-item :label="`Reg date: ${ user.reg_date }`" />-->
    <!--            <b-menu-item label="Change password" />-->
    <!--            <b-menu-item label="Exit" />-->
    <!--          </b-menu-item>-->
    <!--        </b-menu-list>-->
    <!--      </b-menu>-->
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      isLogActive: false,
      isRegActive: false,
      logForm: {
        email: "test@gmail.com",
        password: "admin999",
      },
      regForm: {
        email: null,
        password: null,
        password2: null,
      },
    }
  },
  methods: {
    closeModalWins() {
      this.isLogActive = false
      this.isRegActive = false
    },
    sendLogin() {
      this.$store.dispatch('user/LOGIN', this.logForm)
      this.isLogActive = false
    },
    sendReg() {
      this.$store.dispatch('user/REG', this.regForm)
      this.isRegActive = false
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters["user/IS_AUTH"]
    },
    user() {
      return this.$store.getters["user/USER"]
    },
  }
}
</script>

<style scoped>

</style>
