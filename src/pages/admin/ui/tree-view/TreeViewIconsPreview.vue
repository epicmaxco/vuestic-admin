<template>
  <va-tree-view :nodes="nodes" />
</template>

<script setup>
  let id = 0
  const getId = () => id++
  const nodes = [
    {
      id: getId(),
      label: 'Images',
      icon: 'images',
      children: [
        {
          id: getId(),
          label: 'sick_cats_cuddling.jpg',
          icon: 'image',
        },
        {
          id: getId(),
          label: 'pins-and-needles.jpg',
          icon: 'image',
        },
        {
          id: getId(),
          label: 'avatar_50x50.jpg',
          icon: 'image',
        },
      ],
    },
    {
      id: getId(),
      label: 'Music',
      icon: 'star_outline',
      children: [
        {
          id: getId(),
          label: 'Taylor_swift_hello.mp3',
          icon: 'musical_notes',
        },
        {
          id: getId(),
          label: 'straight_to_the_bank.wav',
          icon: 'musical_notes',
        },
        {
          id: getId(),
          label: 'imagine_dragons_promo.mp3',
          icon: 'musical_notes',
        },
      ],
    },
    {
      id: getId(),
      label: 'Miscellaneous',
      icon: 'list',
      children: [
        {
          id: getId(),
          label: 'Tdump.sql',
          icon: 'grid',
        },
        {
          id: getId(),
          label: 'unknown-file',
          icon: 'help',
        },
        {
          id: getId(),
          label: 'secure.key',
          icon: 'key',
        },
      ],
    },
  ]
</script>
