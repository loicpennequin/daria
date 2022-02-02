<script setup lang="ts">
import { compose } from '@/utils';

const Card = compose('d-surface', 'd-flex');
</script>

<template>
  <d-section>
    <d-section-heading>Our products</d-section-heading>
    <d-grid gap="5" :columns="[1, 3]" role="feed">
      <d-lazy
        tabindex="0"
        v-slot="{ isVisible }"
        v-for="i in 18"
        :key="i"
        min-height="250px"
        once
      >
        <d-section>
          <d-scale-transition :is-visible="isVisible">
            <Card shadow="2" gap="3" direction="column" class="card">
              <img :src="`https://picsum.photos/seed/${i}/200`" />
              <d-section-heading>Product {{ i }}</d-section-heading>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                harum ipsam, velit sapiente nam totam quaerat, aliquam
                praesentium laudantium a minus soluta quas voluptatibus labore!
                Facere et repellat nisi enim.
              </p>
            </Card>
          </d-scale-transition>
        </d-section>
      </d-lazy>
    </d-grid>
  </d-section>
</template>

<style lang="postcss" scoped></style>
