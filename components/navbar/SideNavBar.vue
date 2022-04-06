<template>
  <div class="side-navbar">
    <div class="side-nav-wrapper flex-col">
      <div class="side-nav-menu">
        <div v-for="(option, index) in filteredOptions" :key="index" class="nav-item-wrapper" :class="{'active': option.active}">
          <NuxtLink v-if="option.href" :to="option.href" class="nav-item semi-bold text-16 flex-row items-center">
            <div class="nav-icon icon-wrapper" :class="option.fillClass || ''">
              <component :is="option.logo" />
            </div>
            <div class="nav-label">
              {{ option.label }}
            </div>
          </NuxtLink>
          <div v-else>
            <component :is="option.logo" class="nav-icon" />
            <span class="nav-label">{{ option.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ReviewIcon from '~/components/svg/ReviewIcon'
import ListIcon from '~/components/svg/ListIcon'
import EditIcon from '~/components/svg/EditIcon'
export default {
  components: {
    ReviewIcon,
    ListIcon,
    EditIcon
  },
  data () {
    return {
      // options sample
      // {
      //   label: 'label',
      //   href: 'path',
      //   pages: [''],
      //   pagesExclude: [''],
      //   nonAuth: true
      // }
    }
  },
  computed: {
    ...mapGetters({
      pageName: 'pageName',
      userDetails: 'user/userDetails',
      blog: 'blog/blog'
    }),
    filteredOptions () {
      const options = [
        {
          label: 'Blog List',
          href: '/',
          pages: 'all',
          logo: 'ListIcon',
          nonAuth: true,
          name: 'index'
        },
        {
          label: 'Add blog',
          href: '/add-blog',
          pages: 'all',
          logo: 'ReviewIcon',
          name: 'add-blog'
        },
        {
          label: 'Edit Blog',
          href: `/${this.blog && this.blog.id}/edit-blog`,
          pages: ['blogId'],
          logo: 'EditIcon',
          name: ':blogId/edit-blog',
          fillClass: 'fill-stroke'
        }
      ]
      if (options && options.length) {
        return options.filter(option => this.includeOption(option)).map((option) => {
          return { ...option, active: (option && option.name) === this.pageName }
        })
      }
      return []
    }
  },
  methods: {
    includeOption (option) {
      if (!option.label) {
        return false
      }
      if (!option.nonAuth && !this.userDetails) {
        return false
      }
      if (option.pagesExclude) {
        if (Array.isArray(option.pages && option.pages.includes(this.pageName))) {
          return false
        } else if (option.pages === this.pageName) {
          return false
        }
      }
      if (option.pages) {
        if (Array.isArray(option.pages) && (option.pages.includes('all') || option.pages.includes(this.pageName))) {
          return true
        } else if (option.pages === 'all' || option.pages === this.pageName) {
          return true
        }
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.side-navbar {
  width: rem(73);
  height: 100vh;
  background-color: $navbar-light-color;
  color: $navbar-text-color;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  transition: width 1s;
  z-index: 15;
  .side-nav-wrapper {
    width: 100%;
    height: 100%;
    padding: rem(80) 0;
    .side-nav-menu {
      width: 100%;
      flex: 1;
      padding: rem(15) rem(15) rem(15) rem(20);
      .nav-item-wrapper {
        width: 100%;
        margin: rem(5) 0;
        border-radius: rem(4);
        .nav-item {
          width: 100%;
          padding: rem(7) rem(9);
          line-height: rem(24);
          @extend .cursor-pointer;
          .nav-icon {
            min-width: rem(20);
            min-height: rem(20);
            width: rem(20);
            height: rem(20);
            > svg {
              fill: $navbar-text-color;
            }
            &.fill-stroke {
              > svg {
                stroke: $navbar-text-color;
                fill: $navbar-text-color;
              }
            }
            &.stroke {
              > svg {
                stroke: $navbar-text-color;
                fill: none;
              }
            }
          }
          .nav-label {
            width: 0;
            overflow: hidden;
            flex: 1;
            flex-shrink: 1;
            opacity: 0;
            white-space: nowrap;
          }
        }
        &:hover {
          background-color: $navbar-hover-color;
        }
        &.active {
          background-color: $navbar-active-color;
        }
      }
    }
  }
  &.active, &:hover {
    width: rem(250);
    .side-nav-wrapper {
      .side-nav-menu .nav-item-wrapper .nav-item {
        .nav-label {
          transition: opacity 300ms;
          transition-delay: 1s;
          opacity: 1;
          margin-left: rem(10);
        }
      }
    }
  }
}
</style>
