<template>
         <div class="text">
            <div v-for="(item, index) in itemList" :key="index">
                <NavList :itemContent="item" />
             </div>
         </div>
</template>

<script>
import NavList from './NavList'

export default ({
    props: ["itemList"],
    setup() {
        
    },
    components: {
        NavList
    }
})
</script>
