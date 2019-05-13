<template>
    <div id="main" class="container-fluid ">
        <div class="row ">
            <div class="d-none d-xl-block col-xl-3 p-2 ">
                <ul class="list-group shadow">
                    <li v-for="(filter, index) in filters"
                        v-bind:key="index"
                        class="list-group-item text-left border-0">
                        <h3>{{ index }}</h3>
                        <ul class="list-group">
                            <li class="list-group-item border-0" v-for="(sub_filter, index) in filter"
                                v-bind:key="index">
                                <div class="form-check">
                                    <input class="form-check-input"
                                           type="checkbox"
                                           v-bind:value="sub_filter"
                                           v-bind:id="sub_filter"
                                           v-model="checkedFilters">
                                    <label class="form-check-label h6" v-bind:for="sub_filter">
                                        {{ sub_filter }}
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="courses"
                 class="col-xs-12 col-xl-9">
                <div class="input-group mb-3 mt-2 shadow">
                    <input type="text"
                           class="form-control rounded-0"
                           placeholder=" "
                           aria-label="Search"
                           aria-describedby="Search"
                           v-model="search"
                           v-on:input="output">
                    <div class="input-group-append ">
                        <button class="btn btn-outline-secondary rounded-0" type="button">Search</button>
                    </div>
                </div>
                <div v-for="course in filteredItems" v-bind:key="course.id" class="card-deck p-2">
                    <div class="card m-2 border-0 shadow container-fluid card-body">

                        <div class="row">
                            <h2 class="card-title text-center col-xl-2 col-xs-12">
                                <i>{{ course.name }}</i><br>
                                <hr class="mt-1">
                            </h2>
                            <div class="text-center col-xl-8">
                                {{ course.description }}
                            </div>  <!-- Hide on small -->
                            <div class="d-none d-xl-block col-xl-2">
                                <h5>Tags: </h5>
                                <h6 class="text-center" v-for="filter in course.filters" v-bind:key="filter">
                                    {{ filter }}
                                </h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {BASE} from '../vue-axios/axios-conf'

    export default {
        name: "Courses",
        data() {
            return {
                filters: {},
                checkedFilters: [],
                search: '',
                courses: []
            }
        },
        mounted() {
            let url = '/api/courses/';
            BASE
                .get(url)
                .then(response => {
                        for (let course in response.data) {

                            response.data[course].filters = JSON.parse(response.data[course].filters);
                            for (let filter in response.data[course].filters) {
                                let main_sub = response.data[course].filters[filter].split(':');
                                if (this.filters.hasOwnProperty(main_sub[1])) {
                                    this.filters[main_sub[1]].add(main_sub[0])
                                } else {
                                    this.filters[main_sub[1]] = new Set().add(main_sub[0]);
                                }
                                response.data[course].filters[filter] = main_sub[0];
                            }
                            this.courses.push(response.data[course]);
                        }
                    }
                )
                .catch(error => {
                    console.log(error)
                });
        },
        computed: {
            filteredItems() {
                return this.courses.filter(item => {
                    let searchFilter = (item.name.toLowerCase()).indexOf(this.search.toLowerCase()) > -1;

                    if (this.checkedFilters.length != 0) {
                        for (let checkedFilter in this.checkedFilters) {
                            for (let filters in this.filters) {
                                let tmp_filters = [];
                                this.filters[filters].forEach(item => tmp_filters.push(item));
                                if (tmp_filters.includes(this.checkedFilters[checkedFilter])) {
                                    for (let course_filter in item.filters) {
                                        if (tmp_filters.includes(item.filters[course_filter])) {
                                            console.log(this.checkedFilters[checkedFilter]);
                                            console.log(tmp_filters);
                                            console.log(item.filters[course_filter]);
                                            if (item.filters[course_filter] != this.checkedFilters) {
                                                return false;
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    }

                    return searchFilter;
                })
            }
        },
        methods: {
            output: function () {
                console.log(this.checkedFilters)
            }
        }
    }
</script>

<style scoped>

    hr {
        color: #eaebeb;
        height: 2px;
        background-color: #eaebeb;
        border-radius: 7px 7px 7px 7px;
        border: none;
    }

    .card {
        background: #f7f7f7;
    }

    .card:hover {
        background: #BFBFBF;
    }
</style>