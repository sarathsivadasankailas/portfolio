const app = Vue.createApp({
    template: `
    <div class="photography-page">
        <div v-for="section in photography">
            <div class="section-caption">
                <h2><span>{{ section.section }}</span></h2>
            </div>
            <div :class=[rows.columnType] v-for="rows in section.imageRows">
                <div class="column" v-for="col in rows.images">
                    <div class="image-section">
                        <img class="image" :src="col.url" >
                    </div>
                    <div class="image-caption">
                        <p><span>{{col.caption}}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            photography: [
                {
                    section: "Autumn",
                    imageRows: [
                        {
                            columnType: "column-2",
                            images: [
                                {
                                    url: "./assets/images/memories/Autumn-1.jpg",
                                    caption: "White Mountains"
                                },
                                {
                                    url: "./assets/images/memories/Autumn-2.jpg",
                                    caption: "Mill Pond, MA"
                                }
                            ]
                        }
                    ]
                },
                {
                    section: "Newyork City",
                    imageRows: [
                        {
                            columnType: "column-1",
                            images: [
                                {
                                    url: "./assets/images/memories/Newyork-1.jpg",
                                    caption: "Newyork City"
                                }
                            ]
                        },
                        {
                            columnType: "column-3",
                            images: [
                                {
                                    url: "./assets/images/memories/Newyork-2.jpg",
                                    caption: "Statue of Liberty"
                                },
                                {
                                    url: "./assets/images/memories/Newyork-3.jpg",
                                    caption: "Newyork City view from Central Park"
                                },
                                {
                                    url: "./assets/images/memories/Newyork-4.jpg",
                                    caption: "Brooklyn Bridge"
                                }
                            ]
                        },
                        {
                            columnType: "column-2",
                            images: [
                                {
                                    url: "./assets/images/memories/Newyork-5.jpg",
                                    caption: "Times Square"
                                },
                                {
                                    url: "./assets/images/memories/Newyork-6.jpg",
                                    caption: "Newyork City Night View"
                                }
                            ]
                        }
                    ]
                },
                {
                    section: "Beaches & Lighthouse",
                    imageRows: [
                        {
                            columnType: "column-1",
                            images: [
                                {
                                    url: "./assets/images/memories/lighthouse-1.jpg",
                                    caption: "Bar Harbour Light House"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {

    }
}).mount('#app');