<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

interface Props {
  isOpened: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:isOpened', value: boolean): void;
}>();

const vModel = computed({
  get: () => props.isOpened,
  set: val => {
    emit('update:isOpened', val);
  }
});

const form = reactive({
  email: '',
  password: ''
});
</script>

<template>
  <d-section>
    <d-modal v-model:isOpened="vModel">
      <d-modal-overlay />
      <d-modal-content>
        <template #header>
          <d-section-heading mb="3">Sign in to your account</d-section-heading>
        </template>

        <d-flex direction="column" gap="3" is="form" @submit.prevent>
          <d-form-control v-slot="formControlProps">
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
          </d-form-control>

          <d-flex justify="space-between">
            <d-button variant="ghost">I forgot my password !</d-button>
            <d-button>Login</d-button>
          </d-flex>
        </d-flex>
      </d-modal-content>
    </d-modal>
  </d-section>
</template>
