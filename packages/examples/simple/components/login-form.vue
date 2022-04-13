<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';
import Link from './link.vue';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);

const isPasswordShown = ref(false);
const passwordInputType = computed(() =>
  isPasswordShown.value ? 'text' : 'password'
);
const passwordIcon = computed(() =>
  isPasswordShown.value ? 'eyeSlash' : 'eye'
);

const errors = ref({
  email: false,
  password: false
});

const onInvalid = (e: Event) => {
  const target = e.target as any;
  errors.value[target.name as keyof typeof errors.value] = true;
};

const onSubmit = (e: SubmitEvent) => {
  const target = e.target as any;
  target.checkValidity();
  console.log('submit');
};
</script>

<template>
  <d-section>
    <d-section-heading
      display="flex"
      justify-content="center"
      mb="4"
      font-weight="normal"
      font-size="6"
    >
      Sign in
    </d-section-heading>

    <d-flex
      is="form"
      gap="4"
      direction="column"
      mb="4"
      @submit.prevent="onSubmit"
    >
      <d-form-control :is-invalid="errors.email">
        <d-form-control-label>E-mail</d-form-control-label>
        <d-input
          v-model="email"
          left-icon="user"
          name="email"
          bdr="pill"
          required
          @invalid.prevent="onInvalid"
        />
        <d-form-control-error>
          <d-icon icon="warning" mx="3" />
          This field is required
        </d-form-control-error>
      </d-form-control>

      <d-form-control :is-invalid="!!errors.password">
        <d-form-control-label>Password</d-form-control-label>
        <d-input
          v-model="password"
          :type="passwordInputType"
          left-icon="lock"
          bdr="pill"
          name="password"
          required
          @invalid.prevent="onInvalid"
        >
          <template #right>
            <d-button
              type="button"
              variant="ghost"
              :mr="-2"
              @click="isPasswordShown = !isPasswordShown"
            >
              <d-icon :icon="passwordIcon" />
            </d-button>
          </template>
        </d-input>

        <d-form-control-hint is="d-flex" justify="space-between">
          <d-checkbox v-model="rememberMe">Remember me</d-checkbox>
          <Link href="#">Forgot password ?</Link>
        </d-form-control-hint>

        <d-form-control-error>
          <d-icon icon="warning" mx="3" />
          This field is required
        </d-form-control-error>
      </d-form-control>

      <d-flex justify="center" direction="column" align="center" gap="4" mt="3">
        <d-button color-scheme="blue" bdr="pill" px="5" align-self="stretch">
          Login
        </d-button>

        <d-flex gap="3">
          <d-box color="blue.5" font-weight="bold">Not registered ?</d-box>
          <Link href="#">Sign up for FREE</Link>
        </d-flex>
      </d-flex>
    </d-flex>
  </d-section>
</template>
