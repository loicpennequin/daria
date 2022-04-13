<script setup lang="ts">
import Header from './components/header.vue';
import LoginForm from './components/login-form.vue';
</script>

<template>
  <d-grid columns="auto 1fr" rows="auto 1fr" min-h="100vh">
    <d-grid-item
      column="1 / -1"
      row="1"
      border-bottom-color="grey.1"
      border-bottom-style="solid"
      border-bottom-width="2px"
    >
      <Header />
    </d-grid-item>

    <d-surface
      min-w="200px"
      border-right-color="grey.1"
      border-right-style="solid"
      border-right-width="2px"
    >
      <nav>
        <ul>
          <d-box is="li" pl="4">
            <a href="loginForm">Login Form</a>
          </d-box>
        </ul>
      </nav>
    </d-surface>

    <d-grid-item px="5" py="3">
      <d-section>
        <d-section-heading font-size="7" id="loginForm">
          Login Form
        </d-section-heading>

        <d-surface bg="grey.1" mt="3">
          <d-surface w="fit-content" px="4">
            <LoginForm />
          </d-surface>
        </d-surface>
      </d-section>
    </d-grid-item>
  </d-grid>
</template>
