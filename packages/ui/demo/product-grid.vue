<script setup lang="ts">
const CARD_COUNT = 18;
</script>

<template>
  <d-section>
    <d-section-heading>Our products</d-section-heading>
    <d-grid gap="5" :columns="[1, 2, 3]" role="feed" is="ul">
      <d-lazy
        is="li"
        v-slot="{ isVisible }"
        v-for="i in CARD_COUNT"
        :key="i"
        min-height="270px"
        once
      >
        <d-scale-transition :is-visible="isVisible">
          <d-surface>
            <d-flex gap="3" direction="column">
              <d-section>
                <d-aspect-ratio>
                  <d-image
                    :src="`https://picsum.photos/seed/${i}/500`"
                    :lazy-src="`https://picsum.photos/seed/${i}/10`"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                </d-aspect-ratio>

                <d-section-heading>Product {{ i }}</d-section-heading>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor harum ipsam, velit sapiente nam totam quaerat, aliquam
                  praesentium laudantium a minus soluta quas voluptatibus
                  labore! Facere et repellat nisi enim.
                </p>
              </d-section>
            </d-flex>
          </d-surface>
        </d-scale-transition>
      </d-lazy>
    </d-grid>
  </d-section>
</template>

<style lang="postcss" scoped>
img {
  object-fit: cover;
  margin: 0 auto;
}
</style>
