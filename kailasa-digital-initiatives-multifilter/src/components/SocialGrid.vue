<template>
  <div class="filters">
    <div class="filters__heading">Filter by Category:</div>
    <div class="filters__btnGroup">
      <button
        class="filters__btn"
        :class="{ active: allCategories }"
        @click="allCategories = !allCategories"
      >
        All
      </button>
      <button
        v-for="(category, index) in categories"
        :key="index"
        class="filters__btn"
        :class="{ active: category.active }"
        @click="category.active = !category.active"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
  <div class="filters">
    <div class="filters__heading">Filter by Platform:</div>
    <div class="filters__btnGroup">
      <div class="filters__checkbox">
        <input type="checkbox" id="allPlatforms" v-model="allPlatforms" /><label
          for="allPlatforms"
          >All</label
        >
      </div>
      <div
        class="filters__checkbox"
        v-for="(platform, index) in platforms"
        :key="index"
      >
        <input
          type="checkbox"
          :id="platform.name"
          v-model="platform.active"
        /><label :for="platform.name">{{ platform.name }}</label>
      </div>
    </div>
  </div>
  <div class="socialGrid">
    <social-item
      v-for="link in filteredLinks"
      :key="link.id"
      :title="link.title"
      :url="link.url"
      :platform="link.platform"
    />
  </div>
</template>

<script>
  import SocialItem from "./SocialItem.vue";
  import axios from "axios";

  const sheetUrl =
    "https://spreadsheets.google.com/feeds/list/1gepSNvYaahoGMIqf103cl15z3Z-NL3nKW8b9wqGmCGk/1/public/values?alt=json";

  export default {
    name: "SocialGrid",
    components: {
      SocialItem,
    },
    data() {
      return {
        socialLinks: [],
        categories: [],
        platforms: [],
        allCategories: true,
        allPlatforms: true,
      };
    },
    computed: {
      activeCategories() {
        let activeCats = [];
        this.categories.forEach((category) => {
          if (category.active) activeCats.push(category.name);
        });
        return activeCats;
      },
      activePlatforms() {
        let activePlats = [];
        this.platforms.forEach((platform) => {
          if (platform.active) activePlats.push(platform.name);
        });
        return activePlats;
      },
      filteredLinks() {
        if (
          this.activeCategories.length > 0 ||
          this.activePlatforms.length > 0
        ) {
          if (this.allCategories) {
            return this.socialLinks.filter((link) =>
              this.activePlatforms.includes(link.platform)
            );
          } else if (this.allPlatforms) {
            return this.socialLinks.filter((link) =>
              this.activeCategories.includes(link.category)
            );
          } else {
            return this.socialLinks.filter(
              (link) =>
                this.activeCategories.includes(link.category) &&
                this.activePlatforms.includes(link.platform)
            );
          }
        } else {
          this.setAllShown();
          return this.socialLinks;
        }
      },
    },
    watch: {
      allPlatforms() {
        if (this.allPlatforms) {
          this.platforms.forEach((platform) => (platform.active = false));
        }
      },
      allCategories() {
        if (this.allCategories) {
          this.categories.forEach((category) => (category.active = false));
        }
      },
      activePlatforms() {
        if (this.activePlatforms.length > 0) {
          this.allPlatforms = false;
        } else {
          this.allPlatforms = true;
        }
      },
      activeCategories() {
        if (this.activeCategories.length > 0) {
          this.allCategories = false;
        } else {
          this.allCategories = true;
        }
      },
    },
    methods: {
      parseData(entries) {
        let categorySet = new Set();
        let platformSet = new Set();

        entries.forEach((value) => {
          let entry = {
            id: value.id.$t,
            platform: value.gsx$platform.$t,
            title: value.gsx$title.$t,
            url: value.gsx$url.$t,
            category: value.gsx$category.$t,
          };

          // Add to the set of categories
          categorySet.add(value.gsx$category.$t);

          // Add to the set of categories
          platformSet.add(value.gsx$platform.$t);

          // Push entry into the data list
          this.socialLinks.push(entry);
        });

        categorySet.forEach((category) =>
          this.categories.push({ name: category, active: false })
        );
        platformSet.forEach((platform) =>
          this.platforms.push({ name: platform, active: false })
        );
      },
      setAllShown() {
        this.allCategories = true;
        this.allPlatforms = true;
      },
    },
    created() {
      axios
        .get(sheetUrl)
        .then((response) => this.parseData(response.data.feed.entry));
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .socialGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .filters {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    .filters__btnGroup {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: 1rem;
    }

    .filters__checkbox {
      display: flex;
      align-items: center;
      label {
        color: #5e2121;
        font-size: 0.88rem;
        margin-left: 0.25rem;
      }
    }

    .filters__btn {
      padding: 0.25rem;
      background: #f1eded;
      border: none;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      border-radius: 4px;
      color: #5e2121;
      transition: all 0.3s ease;

      &:hover {
        background: #5e2121;
        color: #fff;
      }
      &.active {
        background: #5e2121;
        color: #fff;
      }
    }
  }
</style>