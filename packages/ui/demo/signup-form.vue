<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

const form = reactive({
  username: 'John',
  email: '',
  password: '',
  passwordConfirm: '',
  newsLetterOptin: true,
  gender: 'M'
});

const isUsernameInvalid = computed(() => form.username.length > 12);

const genders = [
  { label: 'Male', value: 'M' },
  { label: 'Female', value: 'F' },
  { label: 'Other', value: 'NB' }
];
</script>

<template>
  <d-surface>
    <d-section>
      <d-section-heading mb="3">Join us today !</d-section-heading>
      <d-flex direction="column" gap="3" is="form" @submit.prevent>
        <d-form-control
          required
          v-slot="formControlProps"
          :is-invalid="form.gender === 'NB'"
        >
          <d-form-control-label>Gender</d-form-control-label>
          <d-radio-group
            v-model="form.gender"
            v-bind="formControlProps"
            :values="genders"
            is-row
          />

          <d-form-control-error>
            There are only two genders.
          </d-form-control-error>
        </d-form-control>

        <d-form-control
          required
          v-slot="formControlProps"
          :is-invalid="isUsernameInvalid"
        >
          <d-form-control-label>Username</d-form-control-label>
          <d-input v-model="form.username" v-bind="formControlProps" />
          <d-form-control-error>
            Username must be less than 13 characters.
          </d-form-control-error>
        </d-form-control>

        <d-form-control required v-slot="formControlProps">
          <d-form-control-label>E-mail</d-form-control-label>
          <d-input
            v-model="form.email"
            type="email"
            v-bind="formControlProps"
          />
        </d-form-control>

        <d-form-control v-slot="formControlProps">
          <d-form-control-label>Password</d-form-control-label>
          <d-input
            v-model="form.password"
            type="password"
            v-bind="formControlProps"
          />
          <d-form-control-hint>
            Must contains at least one uppercase character, one lowercase
            character and one number.
          </d-form-control-hint>
        </d-form-control>

        <d-form-control v-slot="formControlProps">
          <d-form-control-label>Confirm your password</d-form-control-label>
          <d-input
            v-model="form.passwordConfirm"
            type="password"
            v-bind="formControlProps"
          />
        </d-form-control>

        <d-form-control v-slot="formControlProps">
          <d-checkbox v-model="form.newsLetterOptin" v-bind="formControlProps">
            Subscribe to our newsletter.
          </d-checkbox>
          <d-form-control-hint>
            You wil receive relevant informations about our products by e-mail.
          </d-form-control-hint>
        </d-form-control>

        <d-flex justify="flex-end">
          <d-button>Sign up</d-button>
        </d-flex>
      </d-flex>
    </d-section>
  </d-surface>
</template>
