<script setup lang="ts">
    const color = ref("#000000");
    function randomColor() {
        var newColor = "";
        for (var i = 0; i < 6; i++) {
            newColor += Math.floor(Math.random() * 16).toString(16);
        }
        color.value = "#" + newColor;
    }
</script>

<template>
    <div>
        <Background class="absolute h-screen w-screen" />
        <div class="absolute inset-1/3 flex justify-center items-center">
            <p
                @click="randomColor"
                class="self-center text-center font-sans text-2xl select-none"
                :style="{ color: color }"
            >
                Not much here yet. Maybe check back later.
            </p>
        </div>
    </div>
</template>
