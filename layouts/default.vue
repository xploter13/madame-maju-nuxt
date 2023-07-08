<template>
    <div>
        <header>
            <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
            </ul>
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>

<style scoped>
    ul li {
       display: inline-block;
       list-style: none;
    }
</style>